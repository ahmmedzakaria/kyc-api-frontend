import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Subject, of } from 'rxjs';
import {GisService} from "../../core/services/gis.service";

@Component({
    selector: 'app-location-dropdown',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './location-dropdown.component.html',
    styleUrls: ['./location-dropdown.component.scss']
})
export class LocationDropdownComponent {
    @Input() placeholder = 'Search location...';
    @Output() locationSelected = new EventEmitter<any>();

    searchTerm = '';
    locations: any[] = [];
    isLoading = false;
    page = 0;
    totalPages = 0;

    private search$ = new Subject<string>();

    constructor(private http: HttpClient, private gisService: GisService) {
        // subscribe to search term changes
        this.search$.pipe(
            debounceTime(400),
            distinctUntilChanged(),
            tap(() => {
                this.page = 0;
                this.locations = [];
                this.isLoading = true;
            }),
            switchMap(term => {
                if (!term.trim()) return of({ data: { content: [], totalPages: 0 } });
                // const body = { searchText: term.trim(), page: this.page, size: 10, sort: 'id', source: 'KYC_APP' };
               // return this.http.post<any>('http://localhost:9100/api/locations/search', body);
                return this.gisService.searchLocation(term.trim(), this.page, 10);
            }),
            tap(() => (this.isLoading = false))
        ).subscribe({
            next: (res) => {
                const pageData = res;
                this.totalPages = pageData?.totalPages ?? 0;
                this.locations.push(...(pageData?.content ?? []));
            },
            error: () => {
                this.isLoading = false;
            }
        });
    }

    onSearch(term: string) {
        this.searchTerm = term;
        this.search$.next(term);
    }

    onScroll(e: Event) {
        const element = e.target as HTMLElement;
        const atBottom = element.scrollHeight - element.scrollTop <= element.clientHeight + 10;

        if (atBottom && !this.isLoading && this.page + 1 < this.totalPages) {
            this.onScrollEnd();
        }
    }

    onScrollEnd() {
        this.page++;
        // const body = {
        //     searchText: this.searchTerm,
        //     page: this.page,
        //     size: 10,
        //     sort: 'id',
        //     source: 'KYC_APP'
        // };

        this.isLoading = true;
        //return this.gisService.searchLocation(term.trim(), this.page, 10);

        this.gisService.searchLocation(this.searchTerm, this.page, 10).subscribe({
            next: (res) => {
                const pageData = res?.data;
                this.locations.push(...(pageData?.content ?? []));
                this.isLoading = false;
            },
            error: () => (this.isLoading = false)
        });
    }

    selectLocation(location: any) {
        this.searchTerm = location.detailLocation;
        this.locationSelected.emit(location);
    }
}
