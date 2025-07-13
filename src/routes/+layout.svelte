<script lang='ts'>
    import type { Snippet } from 'svelte';
    import type { NavItem } from '$lib/types';

    import '../app.css';

    import { Navbar, Footer } from '$lib/components/ui';

    interface Props {
        children: Snippet;
    }

    const { children }: Props = $props();

    const items: NavItem[] = [
        {
            label: 'home',
            href: '#',
        },
        {
            label: 'features',
            href: '#features',
        },
        {
            label: 'faq',
            href: '#faq',
        },
    ];
</script>

<div
    class='grid min-w-88 grid-rows-[auto_1fr_auto] bg-background-primary text-text-primary'
>
    <Navbar {items} />

    <main class='relative min-h-[calc(100dvh-var(--header-height))]'>
        {@render children()}
    </main>

    <Footer {items} />
</div>
