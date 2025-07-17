<script lang='ts'>
	import type { NavItem } from '$lib/types';

	import { Button } from '../button';

	interface Props {
		items?: NavItem[];
	}

	let { items }: Props = $props();
</script>

<header class='sticky top-0 z-50 w-full bg-background-primary'>
	<div
		class='relative border-b border-b-separator px-[var(--section-padding-x)]'
	>
		<nav class='flex h-[var(--header-height)] justify-between gap-x-16'>
			<div class='flex items-center gap-6'>
				<a class='flex items-center gap-2' href='/'>
					<span
						class='text-xl tracking-widest text-text-secondary uppercase'
					>
						<span class='font-semibold text-text-primary'
						>Rapid</span
						>flow
					</span>
				</a>
				<div class='flex items-center'>
					<!--  -->
				</div>
			</div>

			<div class='flex items-center'>
				{#if items}
					<ul class='flex items-center gap-x-8'>
						{#each items as item (item.label)}
							<li class='text-text-secondary'>
								<a
									clasS='block cursor-pointer p-1 whitespace-nowrap'
									href={item.href}>{item.label}</a
								>
							</li>
						{/each}
					</ul>
				{/if}
			</div>

			<div class='flex items-center gap-x-4'>
				<Button>
					Lorem ipsum
				</Button>
			</div>
		</nav>
	</div>
</header>
