// src/lib/stores/sections.svelte.ts

class SectionsStore {
    // Store expanded state of sections
    private expandedSections: Record<string, boolean> = $state({});
    
    // Register a section with initial expanded state
    registerSection(id: string, defaultExpanded: boolean = false): void {
        if (!(id in this.expandedSections)) {
            this.expandedSections[id] = defaultExpanded;
        }
    }
    
    // Toggle section expanded state
    toggleSection(id: string): void {
        if (id in this.expandedSections) {
            this.expandedSections[id] = !this.expandedSections[id];
        } else {
            this.expandedSections[id] = true;
        }
    }
    
    // Set section expanded state
    setSectionExpanded(id: string, expanded: boolean): void {
        this.expandedSections[id] = expanded;
    }
    
    // Get section expanded state
    isSectionExpanded(id: string): boolean {
        return this.expandedSections[id] || false;
    }
    
    // Expand only one section, collapse others
    expandOnlySection(id: string): void {
        Object.keys(this.expandedSections).forEach(sectionId => {
            this.expandedSections[sectionId] = sectionId === id;
        });
    }
    
    // Collapse all sections
    collapseAllSections(): void {
        Object.keys(this.expandedSections).forEach(sectionId => {
            this.expandedSections[sectionId] = false;
        });
    }
    
    // Expand all sections
    expandAllSections(): void {
        Object.keys(this.expandedSections).forEach(sectionId => {
            this.expandedSections[sectionId] = true;
        });
    }
    
    // Get a list of expanded section IDs
    getExpandedSections(): string[] {
        return Object.entries(this.expandedSections)
            .filter(([_, expanded]) => expanded)
            .map(([id, _]) => id);
    }
}

// Export singleton instance
export const sectionsStore = new SectionsStore();