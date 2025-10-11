import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {ButtonComponent} from "../../shared/components/button/button.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, RouterLink, ButtonComponent],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    stats = [
        { title: 'Total KYC', value: 128, icon: 'fa-id-card' },
        { title: 'Pending Approvals', value: 12, icon: 'fa-hourglass-half' },
        { title: 'Rejected', value: 5, icon: 'fa-ban' },
        { title: 'Users Online', value: 42, icon: 'fa-users' }
    ];

    ngOnInit(): void {}
}
