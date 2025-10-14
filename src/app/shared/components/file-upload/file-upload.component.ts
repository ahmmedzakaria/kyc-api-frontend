import {
    Component,
    EventEmitter,
    forwardRef,
    Input,
    Output
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-file-upload',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FileUploadComponent),
            multi: true
        }
    ]
})
export class FileUploadComponent implements ControlValueAccessor {
    @Input() label = 'Upload Files';
    @Input() accept = '*/*'; // Allowed MIME types, e.g., "image/*, .pdf"
    @Input() multiple = false;
    @Input() maxSizeMB = 5;
    @Input() showPreview = true;
    @Input() hint = 'Drag and drop or click to select';

    @Output() filesSelected = new EventEmitter<File[]>();

    files: File[] = [];
    previews: string[] = [];
    errorMessage = '';

    onChange: any = () => {};
    onTouched: any = () => {};

    // Called by Angular forms
    writeValue(value: File[] | null): void {
        this.files = value || [];
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    onFileSelected(event: Event): void {
        const target = event.target as HTMLInputElement;
        const selected = target.files ? Array.from(target.files) : [];
        this.handleFiles(selected);
    }

    onDrop(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        const dropped = event.dataTransfer ? Array.from(event.dataTransfer.files) : [];
        this.handleFiles(dropped);
    }

    onDragOver(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
    }

    private handleFiles(selected: File[]): void {
        this.errorMessage = '';
        const valid: File[] = [];

        for (const file of selected) {
            if (file.size > this.maxSizeMB * 1024 * 1024) {
                this.errorMessage = `File "${file.name}" exceeds ${this.maxSizeMB} MB`;
                continue;
            }
            if (this.accept !== '*/*' && !file.type.match(this.accept.replace(/\*/g, '.*'))) {
                this.errorMessage = `File type not allowed: ${file.name}`;
                continue;
            }
            valid.push(file);
        }

        this.files = this.multiple ? [...this.files, ...valid] : valid.slice(0, 1);
        this.onChange(this.files);
        this.filesSelected.emit(this.files);

        if (this.showPreview) this.generatePreviews();
    }

    private generatePreviews(): void {
        this.previews = [];
        for (const file of this.files) {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => this.previews.push(e.target?.result as string);
                reader.readAsDataURL(file);
            }
        }
    }

    removeFile(index: number): void {
        this.files.splice(index, 1);
        this.previews.splice(index, 1);
        this.onChange(this.files);
    }
}
