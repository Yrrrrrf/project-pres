#!/bin/bash

# Create directory structure
echo "Creating project directory structure..."

# Create component directories
mkdir -p src/lib/components/layout
mkdir -p src/lib/components/content
mkdir -p src/lib/components/visualization
mkdir -p src/lib/stores
mkdir -p src/lib/types
mkdir -p src/lib/utils

# Create layout components
touch src/lib/components/layout/Header.svelte
touch src/lib/components/layout/Footer.svelte
touch src/lib/components/layout/Section.svelte
touch src/lib/components/layout/SectionHeader.svelte

# Create content components
touch src/lib/components/content/InfoCard.svelte
touch src/lib/components/content/ProgressDisplay.svelte
touch src/lib/components/content/DataTable.svelte
touch src/lib/components/content/TabContainer.svelte

# Create visualization components
touch src/lib/components/visualization/Timeline.svelte
touch src/lib/components/visualization/RiskMatrix.svelte
touch src/lib/components/visualization/ProgressBar.svelte
touch src/lib/components/visualization/ChartContainer.svelte

# Create store files
touch src/lib/stores/project.svelte.ts
touch src/lib/stores/sections.svelte.ts
touch src/lib/stores/charts.svelte.ts
touch src/lib/stores/index.ts

# Create type files
touch src/lib/types/project.ts
touch src/lib/types/index.ts

# Create utility files
touch src/lib/utils/formatting.ts
touch src/lib/utils/index.ts

# Create index files
touch src/lib/components/index.ts

echo "Directory structure created successfully!"
echo "The following files have been created:"
find src/lib -type f | sort
