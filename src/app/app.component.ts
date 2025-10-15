import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutService} from "./core/services/layout.service";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(public layoutService: LayoutService) {}
}
