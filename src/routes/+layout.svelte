<script lang='ts'>
    import type { Snippet } from 'svelte';

    import '../app.css';

    import { Navbar } from '$lib/components/ui';

    interface Props {
        children: Snippet;
    }

    const { children }: Props = $props();
</script>

<div class='grid min-w-88 grid-rows-[auto_1fr_auto]'>
    <Navbar />

    <main class='relative min-h-[calc(100dvh-var(--ui-header-height))]'>
        {@render children()}
    </main>
</div>
