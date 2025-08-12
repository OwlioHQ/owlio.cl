<script lang='ts'>
	import type { NavItem } from '$lib/types';

	import OwlioLogo from '$lib/assets/images/owlio.png?enhanced';

	import { socials } from '$lib/constants';
	import { fade } from 'svelte/transition';
	import { List } from '$lib/components/icons';
	import { MediaQuery } from 'svelte/reactivity';

	import { Link } from '../link';
	import { Button } from '../button';

	interface Props {
		items?: NavItem[];
	}

	let { items }: Props = $props();

	let open_menu = $state<boolean>(false);
	let passed_hero = $state<boolean>(false);
	let is_lg_screen = new MediaQuery('min-width: 1280px');

	$effect(() => {
		observe_hero();
	});

	$effect(() => {
		open_menu = !is_lg_screen.current && open_menu;
	});

	function observe_hero() {
		const target = document.getElementById('inicio');

		if (!target)
			return;

		const observer = new IntersectionObserver(
			([entry]) => {
				passed_hero = !entry.isIntersecting;
			},
			{
				root: null,
				threshold: 0.03,
			},
		);

		observer.observe(target);

		return {
			destroy() {
				observer.disconnect();
			},
		};
	}
</script>

<header
	class={`fixed top-0 z-50 w-full shadow backdrop-blur-2xl ${passed_hero ? 'bg-background/40' : 'bg-gradient-to-r from-secondary/20 to-primary/20 text-background'}`}
>
	<nav
		class={`relative mx-auto flex h-(--header-height) max-w-(--content-width) justify-between gap-x-16 px-(--content-x-spacing) ${
			open_menu ? 'border-b border-b-muted-foreground' : ''
		}`}
	>
		<div
			class='flex w-full items-center justify-between gap-x-12 xl:justify-start'
		>
			<!-- Logo -->
			<Link
				class='flex items-center gap-x-2 no-underline!'
				href='/'
				target='_self'
			>
				<enhanced:img
					class={`w-4 object-contain ${passed_hero ? 'invert-0' : 'invert-100'}`}
					alt='Owlio logo'
					src={OwlioLogo}
				/>
				<span class='text-xl font-bold tracking-widest uppercase'>
					Owlio
				</span>
			</Link>

			<!-- Desktop -->
			{#if items}
				<ul
					class='hidden items-center gap-x-8 font-medium capitalize xl:flex'
				>
					{#each items as item (item.label)}
						<li>
							<Link href={item.href}>
								{item.label}
							</Link>
						</li>
					{/each}
				</ul>
			{/if}

			<!-- Mobile -->
			<div class='block xl:hidden'>
				<Button
					class='rounded-md'
					onclick={() => (open_menu = !open_menu)}
					size='icon'
					variant='ghost'
				>
					<List
						class={`inline-block size-6 align-middle ${passed_hero ? 'fill-foreground' : 'fill-background'}`}
					/>
				</Button>
			</div>
		</div>

		<!-- Desktop -->
		<div class='hidden items-center gap-x-8 xl:flex'>
			<div class='xl:flex xl:items-center xl:gap-x-2'>
				{#each socials as social}
					{@const Logo = social.icon}
					<Link aria-label={social.label} href={social.href}>
						<Logo
							class={`size-7 ${passed_hero ? 'fill-foreground' : 'fill-background'} transition-colors group-focus-within:fill-accent group-hover:fill-accent`}
						/>
					</Link>
				{/each}
			</div>
			<Button
				class={passed_hero
					? 'focus-within:ring-offset-background hover:ring-offset-background'
					: 'focus-within:ring-offset-primary hover:ring-offset-primary'}
				variant='accent'
			>
				Contáctanos
			</Button>
		</div>
	</nav>

	<!-- Mobile -->
	{#if open_menu}
		<nav
			class={`mx-auto flex h-[calc(100dvh-var(--header-height))] max-w-(--content-width) flex-col gap-y-16 p-(--content-x-spacing) ${passed_hero ? 'bg-background/30' : 'bg-primary/30'}`}
			transition:fade={{ duration: 300 }}
		>
			{#if items}
				<ul
					class='flex flex-col items-center gap-x-8 font-medium text-muted-foreground capitalize'
				>
					{#each items as item (item.label)}
						<li class='w-full'>
							<Link
								class={`w-full content-center border-b ${passed_hero ? 'border-b-foreground text-muted focus-within:border-b-foreground focus-within:text-foreground hover:border-b-foreground hover:text-foreground' : 'border-b-muted-foreground text-muted-foreground focus-within:border-b-background focus-within:text-background hover:border-b-background hover:text-background'} px-4 py-2.5 no-underline!`}
								href={item.href}
								onclick={() => (open_menu = false)}
								target='_self'
							>
								{item.label}
							</Link>
						</li>
					{/each}
				</ul>
			{/if}

			<div class='flex items-center justify-center gap-x-3'>
				{#each socials as social}
					{@const Logo = social.icon}
					<Link
						aria-label={social.label}
						href={social.href}
						target='_self'
					>
						<Logo
							class={`size-7 ${passed_hero ? 'fill-foreground' : 'fill-background'} transition-colors group-focus-within:fill-accent group-hover:fill-accent`}
						/>
					</Link>
				{/each}
			</div>
		</nav>
	{/if}
</header>
