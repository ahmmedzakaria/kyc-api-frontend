import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Person } from './person.model';
import { ApiService } from '../../core/api/api.service';
import { ApiEndpoints } from '../../core/api/api-endpoints';

@Component({
    selector: 'app-person-preview',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './person-preview.component.html',
})
export class PersonPreviewComponent implements OnInit, OnDestroy {
    person?: Person;
    photoUrl = 'assets/default-avatar.svg';
    private objectUrl?: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private apiService: ApiService
    ) {}

    ngOnInit(): void {
        const routeId = this.route.snapshot.paramMap.get('id');
        const person = history.state?.person as Person | undefined;

        if (!routeId || !person?.id || person.id.toString() !== routeId) {
            this.router.navigate(['/person']);
            return;
        }

        this.person = person;
        this.loadPhoto(person.id);
    }

    ngOnDestroy(): void {
        if (this.objectUrl) {
            URL.revokeObjectURL(this.objectUrl);
        }
    }

    onImageError(event: Event): void {
        const image = event.target as HTMLImageElement;
        image.src = 'assets/default-avatar.svg';
    }

    private loadPhoto(personId: number): void {
        this.apiService.fetchImageUrl(ApiEndpoints.PERSON_PHOTO, { ownerId: personId }).subscribe({
            next: (imageUrl) => {
                if (this.objectUrl) {
                    URL.revokeObjectURL(this.objectUrl);
                }
                this.objectUrl = imageUrl;
                this.photoUrl = this.objectUrl;
            },
            error: () => {
                this.photoUrl = 'assets/default-avatar.svg';
            }
        });
    }
}
