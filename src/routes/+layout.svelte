<script lang='ts'>
	import type { Snippet } from 'svelte';
	import type { NavItem } from '$lib/types';

	import '../app.css';

	import { Navbar, Footer } from '$lib/components/ui';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

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
			href: '#metodologia',
		},
		{
			label: 'preguntas frecuentes',
			href: '#preguntas',
		},
		{
			label: 'contacto',
			href: '#contacto',
		},
	];
</script>

<svelte:head>
	<title>Owlio</title>
	<meta
		name='description'
		content='Transformamos empresas a través de soluciones digitales personalizadas. Nos especializamos en desarrollo de software, automatización de procesos y optimización operacional para ayudar a tu negocio a modernizarse y crecer de manera más eficiente.'
	/>
</svelte:head>

<div
	class='grid min-w-90 grid-rows-[auto_1fr_auto] bg-background text-foreground scheme-only-light'
>
	<Navbar {items} />

	<main class='relative isolate min-h-[calc(100dvh-var(--header-height))]'>
		{@render children()}
	</main>

	<Footer />
</div>
