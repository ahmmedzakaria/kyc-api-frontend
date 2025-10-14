import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LayoutConfig {
    showSidebar: boolean;
    showTopbar: boolean;
    collapsed: boolean;
    theme: 'light' | 'dark';
    type: 'default' | 'auth' | 'admin';
}

@Injectable({ providedIn: 'root' })
export class LayoutService {
    private config = new BehaviorSubject<LayoutConfig>({
        showSidebar: true,
        showTopbar: true,
        collapsed: false,
        theme: 'light',
        type: 'default',
    });

    layout$ = this.config.asObservable();
    layoutConfig = this.config.value;

    /**
     * 🔄 Updates layout configuration partially.
     */
    update(config: Partial<LayoutConfig>) {
        const current = this.config.value;
        const updated = { ...current, ...config };
        this.config.next(updated);
    }

    /**
     * 🎨 Sets the application theme dynamically.
     */
    setTheme(theme: 'light' | 'dark') {
        const current = this.config.value;

        // Update BehaviorSubject
        this.config.next({
            ...current,
            theme,
        });

        // Optional: Apply theme to document for Bootstrap 5.3+ or global styles
        document.body.setAttribute('data-bs-theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }

    /**
     * 📚 Toggles sidebar collapse/expand.
     */
    toggleSidebar() {
        const current = this.config.value;
        const newState = !current.collapsed;

        this.config.next({
            ...current,
            collapsed: newState,
        });

        // Optionally persist state (e.g. localStorage)
        localStorage.setItem('sidebar-collapsed', String(newState));
    }

    /**
     * 🏗️ Optionally set layout type (admin, auth, etc.)
     */
    setLayoutType(type: 'default' | 'auth' | 'admin') {
        this.update({ type });
    }

}
