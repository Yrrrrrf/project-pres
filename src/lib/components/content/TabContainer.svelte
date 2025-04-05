<script lang="ts">
    export interface Tab {
        id: string;
        title: string;
        icon?: any;
        content: any;
    }

    let {
        tabs = [],
        defaultTab = "",
        fullWidth = true,
        className = ""
    } = $props<{
        tabs: Tab[];
        defaultTab?: string;
        fullWidth?: boolean;
        className?: string;
    }>();

    let activeTab = $state(defaultTab || (tabs.length > 0 ? tabs[0].id : ""));

    function setActiveTab(tabId: string) {
        activeTab = tabId;
    }

    // Get the active tab content
    let activeTabContent = $derived(() => {
        const tab = tabs.find((t: Tab) => t.id === activeTab);
        return tab ? tab.content : null;
    });
</script>

<div class={className}>
    <div class={`tabs ${fullWidth ? 'grid grid-cols-' + tabs.length : 'flex'} mb-4`}>
        {#each tabs as tab}
            <button 
                class={`tab tab-bordered ${activeTab === tab.id ? 'tab-active' : ''}`}
                onclick={() => setActiveTab(tab.id)}
                role="tab"
                aria-controls={`tab-content-${tab.id}`}
            >
                {#if tab.icon}
                    <tab.icon class="h-4 w-4 mr-2" />
                {/if}
                {tab.title}
            </button>
        {/each}
    </div>
    
    <div 
        id={`tab-content-${activeTab}`}
        class="tab-content"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
    >
        {#if activeTabContent}
            {#if typeof activeTabContent === 'function'}
                {@render activeTabContent()}
            {:else if typeof activeTabContent === 'object' && activeTabContent !== null}
                {#if activeTabContent}
                    <activeTabContent></activeTabContent>
                {/if}
            {:else}
                {activeTabContent}
            {/if}
        {/if}
    </div>
</div>