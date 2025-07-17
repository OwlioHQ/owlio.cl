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
			label: 'inicio',
			href: '#inicio',
		},
		{
			label: 'servicios',
			href: '#servicios',
		},
		{
			label: 'como trabajamos',
			href: '#hiw',
		},
		{
			label: 'preguntas frecuentes',
			href: '#faq',
		},
	];
</script>

<div
	class='grid min-w-88 grid-rows-[auto_1fr_auto] bg-background-primary text-text-secondary'
>
	<Navbar {items} />

	<main class='relative min-h-[calc(100dvh-var(--header-height))]'>
		{@render children()}
	</main>

	<Footer {items} />
</div>
