<script lang='ts'>
	import type { NavItem } from '$lib/types';

	import List from 'phosphor-svelte/lib/List';
	import XLogo from 'phosphor-svelte/lib/XLogo';
	import FacebookLogo from 'phosphor-svelte/lib/FacebookLogo';
	import LinkedinLogo from 'phosphor-svelte/lib/LinkedinLogo';
	import OwlioLogo from '$lib/assets/images/owlio.png?enhanced';
	import InstagramLogo from 'phosphor-svelte/lib/InstagramLogo';
	import EnvelopeSimple from 'phosphor-svelte/lib/EnvelopeSimple';

	import { slide } from 'svelte/transition';

	import { Button } from '../button';

	interface Props {
		items?: NavItem[];
	}

	let { items }: Props = $props();

	let open_menu = $state<boolean>(false);
	let passed_hero = $state<boolean>(false);

	const socials = [
		{
			icon: EnvelopeSimple,
			href: 'mailto:owlio.contacto@gmail.com',
		},
		{
			icon: XLogo,
			href: 'https://x.com/owlio_cl',
		},
		{
			icon: InstagramLogo,
			href: 'https://www.instagram.com/owlio_cl/?hl=es',
		},
		{
			icon: FacebookLogo,
			href: 'https://web.facebook.com/profile.php?id=61578924622725',
		},
		{
			icon: LinkedinLogo,
			href: 'https://www.linkedin.com/company/owlio-cl',
		},
	];

	$effect(() => {
		observe_hero();
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
	class={`fixed top-0 z-50 w-full shadow backdrop-blur-2xl ${passed_hero ? 'bg-white/40 text-text-primary' : 'bg-gradient-to-r from-indigo-950/20 to-secondary-950/20 text-background-primary/90'}`}
>
	<div class='relative px-[var(--section-padding-x)]'>
		<nav class={`flex h-[var(--header-height)] justify-between gap-x-16 ${open_menu ? 'border-b border-separator' : ''}`}>
			<div class='flex w-full items-center justify-between gap-6 lg:justify-start'>
				<div class='pr-10'>
					<a class='flex items-center gap-2' href='/'>

						<div class='flex items-center gap-x-2'>
							<enhanced:img class={`w-4 object-contain ${passed_hero ? 'invert-0' : 'invert-100'}`} alt='Owlio logo' src={OwlioLogo} />
							<span
								class='text-xl font-bold tracking-widest uppercase'
							>
								Owl<span class='font-light'>io</span>
							</span>

						</div>
					</a>
				</div>
				<div class='hidden items-center pl-4 lg:flex'>
					{#if items}
						<ul
							class='flex items-center gap-x-8 font-medium capitalize'
						>
							{#each items as item (item.label)}
								<li>
									<a
										class='block cursor-pointer p-1 whitespace-nowrap'
										href={item.href}
									>
										{item.label}
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
				<div class='lg:hidden'>

					<button class='cursor-pointer rounded-md p-1' onclick={() => open_menu = !open_menu} type='button'>
						<List class='size-6 align-middle' />
					</button>
				</div>
			</div>

			<div class='hidden items-center gap-x-8 lg:flex'>
				<div class='lg:flex lg:items-center lg:gap-x-2'>
					{#each socials as social}
						{@const Logo = social.icon}
						<a class='block p-0.5' href={social.href} referrerpolicy='no-referrer' target='_blank'>
							<Logo class='size-7 transition-colors focus-within:fill-primary-500 hover:fill-primary-500' />
						</a>
					{/each}
				</div>
				<Button href='https://calendar.app.google/M7mnJfaFNC1N9Au3A' referrerpolicy='no-referrer' target='_blank'>Contáctanos</Button>
			</div>
		</nav>

		{#if open_menu}
			<nav class='h-[calc(100vh-var(--header-height))] py-8' transition:slide={{ axis: 'y' }}>
				{#if items}
					<ul
						class='flex flex-col items-center gap-x-8 font-medium capitalize'
					>
						{#each items as item (item.label)}
							<li class='w-full text-left'>
								<a
									class='block h-12 cursor-pointer p-1 whitespace-nowrap'
									href={item.href}
									onclick={() => open_menu = false}>{item.label}</a
								>
							</li>
						{/each}
					</ul>
				{/if}
			</nav>
		{/if}
	</div>
</header>
