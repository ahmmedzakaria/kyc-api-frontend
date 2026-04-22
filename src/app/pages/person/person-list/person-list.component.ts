import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {debounceTime, distinctUntilChanged, filter, switchMap} from 'rxjs/operators';
import { PersonService } from '../../../core/services/person.service';
import {Observable} from "rxjs"
import {Person} from "../person.model";
import {Router, RouterLink} from "@angular/router";

@Component({
    selector: 'app-person-list',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink],
    templateUrl: './person-list.component.html',
    // styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
    persons: any[] = [];
    totalElements = 0;
    totalPages = 0;
    currentPage = 0;
    pageSize = 10;

    constructor(
        private service: PersonService,
        private fb: FormBuilder,
        private router: Router
    ) {}
    searchForm!: FormGroup;



    ngOnInit() {
        this.searchForm = this.fb.group({
            searchText: ['']
        })
        this.loadData();

        // Reactive search with debounce
        const searchControl = this.searchForm.get('searchText');

        if (!searchControl) return;

        searchControl.valueChanges
            .pipe(
                debounceTime(400),
                distinctUntilChanged(),
                filter((text): text is string => !!text && text.trim().length > 0),
                switchMap((text: string): Observable<Person[]> =>
                    this.service.searchPersons(text.trim(), 0, this.pageSize)
                )
            )
            .subscribe({
                next: (res) => this.populateData(res),
                error: (err) => console.error('Search error:', err),
            });
    }

    loadData(page: number = 0) {
        this.service.searchPersons(this.searchForm.value.searchText || '', page, this.pageSize)
            .subscribe({
                next: (res) => this.populateData(res),
            });
    }

    populateData(data: any) {
        this.persons = data?.content || [];
        this.totalElements = data?.totalElements || 0;
        this.totalPages = data?.totalPages || 0;
        this.currentPage = data?.number || 0;
    }

    edit(person: any) {
        this.router.navigate(['/person', person.id, 'edit'], { state: { person } });
    }

    delete(person: any) {
        if (confirm(`Delete ${person.firstName || person.username}?`)) {
            this.service.deletePerson(person.id).subscribe(() => this.loadData(this.currentPage));
        }
    }

    goToPage(page: number) {
        if (page >= 0 && page < this.totalPages) {
            this.loadData(page);
        }
    }
}
