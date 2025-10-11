import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ValidationMessageService } from '../../services/validation-message.service';

export interface DateRange {
    start: string | null;
    end: string | null;
}

@Component({
    selector: 'app-date-picker',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
    @Input() label = 'Select Date';
    @Input() required = false;
    @Input() rangeMode = false;
    @Input() floating = true;
    @Input() disablePast = false;
    @Input() disableFuture = false;
    @Input() showIcon = true;

    @Output() dateChange = new EventEmitter<string | DateRange | null>();

    control = new FormControl<string | null>(null);
    range: DateRange = { start: null, end: null };

    currentMonth = new Date();
    calendar: (Date | null)[][] = [];
    isOpen = false;
    hoverDate: Date | null = null;

    constructor(private eRef: ElementRef, private msg: ValidationMessageService) {}

    ngOnInit(): void {
        this.generateCalendar(this.currentMonth);
    }

    // Generate matrix for one month
    generateCalendar(baseDate: Date): void {
        const start = new Date(baseDate.getFullYear(), baseDate.getMonth(), 1);
        const end = new Date(baseDate.getFullYear(), baseDate.getMonth() + 1, 0);
        const days: (Date | null)[][] = [];
        let week: (Date | null)[] = [];

        for (let i = 0; i < start.getDay(); i++) week.push(null);
        for (let d = 1; d <= end.getDate(); d++) {
            week.push(new Date(baseDate.getFullYear(), baseDate.getMonth(), d));
            if (week.length === 7) {
                days.push(week);
                week = [];
            }
        }
        if (week.length) days.push(week);
        this.calendar = days;
    }

    toggleCalendar() {
        this.isOpen = !this.isOpen;
    }

    prevMonth() {
        this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1);
        this.generateCalendar(this.currentMonth);
    }

    nextMonth() {
        this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1);
        this.generateCalendar(this.currentMonth);
    }

    selectDate(date: Date) {
        const iso = date.toISOString().split('T')[0];

        if (!this.rangeMode) {
            this.control.setValue(iso);
            this.dateChange.emit(iso);
            this.isOpen = false;
        } else {
            if (!this.range.start || (this.range.start && this.range.end)) {
                this.range = { start: iso, end: null };
            } else if (!this.range.end) {
                if (new Date(iso) < new Date(this.range.start)) {
                    this.range = { start: iso, end: this.range.start };
                } else {
                    this.range.end = iso;
                }
                this.dateChange.emit(this.range);
                this.isOpen = false;
            }
        }
    }

    isSelected(date: Date): boolean {
        const val = this.control.value;
        return !this.rangeMode && val === date.toISOString().split('T')[0];
    }

    isInRange(date: Date): boolean {
        if (!this.range.start || !this.range.end) return false;
        const d = date.toISOString().split('T')[0];
        return d >= this.range.start && d <= this.range.end;
    }

    isStart(date: Date): boolean {
        return this.range.start === date.toISOString().split('T')[0];
    }

    isEnd(date: Date): boolean {
        return this.range.end === date.toISOString().split('T')[0];
    }

    @HostListener('document:click', ['$event'])
    clickOutside(event: Event) {
        if (!this.eRef.nativeElement.contains(event.target)) this.isOpen = false;
    }
}
