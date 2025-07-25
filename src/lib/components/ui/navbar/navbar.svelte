<script lang='ts'>
	import type { NavItem } from '$lib/types';

	import { Button } from '../button';

	interface Props {
		items?: NavItem[];
	}

	let { items }: Props = $props();

	let passed_hero = $state<boolean>(false);

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

	$effect(() => {
		observe_hero();
	});
</script>

<header class={`fixed top-0 z-50 w-full shadow backdrop-blur-2xl ${passed_hero ? 'bg-white/40 text-text-primary' : 'bg-gradient-to-r from-indigo-950/20 to-secondary-950/20 text-background-primary/90'}`}>
	<div class='relative px-[var(--section-padding-x)]'>
		<nav class='flex h-[var(--header-height)] justify-between gap-x-16'>
			<div class='flex items-center gap-6'>
				<div class='pr-10'>
					<a class='flex items-center gap-2' href='/'>
						<span
							class='text-xl font-bold tracking-widest uppercase'
						>
							Owl<span class='font-light'>io</span>
						</span>
					</a>
				</div>
				<div class='flex items-center pl-4'>
					{#if items}
						<ul class='flex items-center gap-x-8 font-medium capitalize'>
							{#each items as item (item.label)}
								<li>
									<a
										clasS='block cursor-pointer p-1 whitespace-nowrap'
										href={item.href}>{item.label}</a
									>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			</div>

			<div class='flex items-center gap-x-4'>
				<Button>Contáctanos</Button>
			</div>
		</nav>
	</div>
</header>
