import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {debounceTime, distinctUntilChanged, filter, switchMap} from 'rxjs/operators';
import { PersonService } from '../../../core/services/person.service';
import {Observable} from "rxjs"
import {Person} from "../person.model";
import {Router, RouterLink} from "@angular/router";
import {ApiService} from "../../../core/api/api.service";
import {ApiEndpoints} from "../../../core/api/api-endpoints";
import { ImagePreviewComponent } from '../../../shared/components/image-preview/image-preview.component';

@Component({
    selector: 'app-person-list',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink, ImagePreviewComponent],
    templateUrl: './person-list.component.html',
    // styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit, OnDestroy {
    persons: any[] = [];
    totalElements = 0;
    totalPages = 0;
    currentPage = 0;
    pageSize = 10;
    private photoObjectUrls: string[] = [];

    constructor(
        private service: PersonService,
        private fb: FormBuilder,
        private router: Router,
        private apiService: ApiService
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

    ngOnDestroy(): void {
        this.revokePhotoUrls();
    }

    loadData(page: number = 0) {
        this.service.searchPersons(this.searchForm.value.searchText || '', page, this.pageSize)
            .subscribe({
                next: (res) => this.populateData(res),
            });
    }

    populateData(data: any) {
        this.revokePhotoUrls();
        this.persons = (data?.content || []).map((person: any) => ({
            ...person,
            photoUrl: 'assets/default-avatar.svg',
        }));
        this.totalElements = data?.totalElements || 0;
        this.totalPages = data?.totalPages || 0;
        this.currentPage = data?.number || 0;

        this.persons.forEach((person: any) => {
            if (!person.id) {
                return;
            }

            this.apiService.fetchImageUrl(ApiEndpoints.PERSON_PHOTO, { ownerId: person.id }).subscribe({
                next: (imageUrl) => {
                    this.photoObjectUrls.push(imageUrl);
                    person.photoUrl = imageUrl;
                },
                error: () => {
                    person.photoUrl = 'assets/default-avatar.svg';
                }
            });
        });
    }

    edit(person: any) {
        this.router.navigate(['/person', person.id, 'edit'], { state: { person } });
    }

    preview(person: any) {
        this.router.navigate(['/person', person.id, 'preview'], { state: { person } });
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

    private revokePhotoUrls(): void {
        this.photoObjectUrls.forEach(url => URL.revokeObjectURL(url));
        this.photoObjectUrls = [];
    }
}
