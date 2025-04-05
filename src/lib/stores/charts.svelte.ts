// src/lib/stores/charts.svelte.ts

// Define chart data types
export interface ChartDataset {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
    [key: string]: any; // For additional properties
}

export interface ChartData {
    labels: string[];
    datasets: ChartDataset[];
}

export interface ChartOptions {
    responsive?: boolean;
    maintainAspectRatio?: boolean;
    scales?: any;
    plugins?: any;
    [key: string]: any; // For additional properties
}

export interface Chart {
    id: string;
    type: 'bar' | 'line' | 'pie' | 'doughnut' | 'radar' | 'polarArea' | 'bubble' | 'scatter';
    data: ChartData;
    options: ChartOptions;
}

class ChartsStore {
    // Store chart configurations
    charts: Map<string, Chart> = $state(new Map());
    
    // Register a chart
    registerChart(chart: Chart): void {
        this.charts.set(chart.id, chart);
    }
    
    // Update chart data
    updateChartData(id: string, data: ChartData): void {
        const chart = this.charts.get(id);
        if (chart) {
            chart.data = data;
            this.charts.set(id, { ...chart });
        }
    }
    
    // Update chart options
    updateChartOptions(id: string, options: ChartOptions): void {
        const chart = this.charts.get(id);
        if (chart) {
            chart.options = { ...chart.options, ...options };
            this.charts.set(id, { ...chart });
        }
    }
    
    // Get a chart configuration
    getChart(id: string): Chart | undefined {
        return this.charts.get(id);
    }
    
    // Delete a chart
    deleteChart(id: string): void {
        this.charts.delete(id);
    }
    
    // Helper method to generate common chart colors
    getChartColors(count: number): string[] {
        const baseColors = [
            '#4C51BF', // indigo-700
            '#38A169', // green-600
            '#ED8936', // orange-500
            '#E53E3E', // red-600
            '#805AD5', // purple-600
            '#2B6CB0', // blue-700
            '#DD6B20', // orange-600
            '#718096', // gray-600
            '#D53F8C', // pink-600
            '#319795'  // teal-600
        ];
        
        // If we need more colors than we have in baseColors, we'll generate them
        if (count <= baseColors.length) {
            return baseColors.slice(0, count);
        }
        
        // Generate additional colors
        const colors = [...baseColors];
        for (let i = baseColors.length; i < count; i++) {
            // Generate a random color
            const r = Math.floor(Math.random() * 200);
            const g = Math.floor(Math.random() * 200);
            const b = Math.floor(Math.random() * 200);
            colors.push(`rgb(${r}, ${g}, ${b})`);
        }
        
        return colors;
    }
}

// Export singleton instance
export const chartsStore = new ChartsStore();