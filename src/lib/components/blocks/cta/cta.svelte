<script lang='ts'>
	import type { HTMLAttributes } from 'svelte/elements';

	import Check from 'phosphor-svelte/lib/Check';
	import ArrowSquareOut from 'phosphor-svelte/lib/ArrowSquareOut';

	import { cn } from '$lib/utils';
	import { Button, IconBadge } from '$lib/components/ui';

	interface Props extends HTMLAttributes<HTMLElement> {}

	let { class: class_name, ...rest }: Props = $props();

	const items = ['Más eficiente', 'Reduce costos', 'Más moderno'];
</script>

<section
	class={cn('isolate size-full pb-[var(--section-padding-y)]', class_name)}
	{...rest}
>
	<div
		id='bg-hypnotic'
		class='bg-gradient-to-r from-secondary-900 to-secondary-950'
	>
		<div
			class='px-[var(--section-padding-x)] py-[var(--section-padding-y)]'
		>
			<div
				class='flex items-center rounded-2xl bg-background-primary p-20'
			>
				<div class='w-3/5 space-y-8'>
					<div class='space-y-4'>
						<h2
							class='text-5xl font-bold text-text-primary'
						>
							¿Preparado para transformar tu empresa?
						</h2>
						<p class='text-xl leading-snug whitespace-nowrap italic'>
							Póngase en contacto para obtener más información sobre cómo podemos ayudarlo.
						</p>
					</div>
					<div class='flex items-center gap-x-6'>
						{#each items as item}
							<div class='flex items-center gap-x-4 text-lg'>
								<div class='flex items-center gap-x-2'>
									<IconBadge class='size-6 p-0'>
										<Check />
									</IconBadge>
									<span class='italic'>{item}</span>
								</div>
							</div>
						{/each}
					</div>
				</div>
				<div class='ml-auto p-10'>
					<Button class='h-14 px-10 text-2xl'>
						<span>Contáctanos</span>
						<ArrowSquareOut class='size-5' />
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	#bg-hypnotic {
		background:
			radial-gradient(
				50% 50% at 100% 0,
				var(--color-secondary-600) 0% 5%,
				var(--color-indigo-900) 6% 15%,
				var(--color-secondary-600) 16% 25%,
				var(--color-indigo-900) 26% 35%,
				var(--color-secondary-600) 36% 45%,
				var(--color-indigo-900) 46% 55%,
				var(--color-secondary-600) 56% 65%,
				var(--color-indigo-900) 66% 75%,
				var(--color-secondary-600) 76% 85%,
				var(--color-indigo-900) 86% 95%,
				#0000 96%
			),
			radial-gradient(
				50% 50% at 0 100%,
				var(--color-secondary-600) 0% 5%,
				var(--color-indigo-900) 6% 15%,
				var(--color-secondary-600) 16% 25%,
				var(--color-indigo-900) 26% 35%,
				var(--color-secondary-600) 36% 45%,
				var(--color-indigo-900) 46% 55%,
				var(--color-secondary-600) 56% 65%,
				var(--color-indigo-900) 66% 75%,
				var(--color-secondary-600) 76% 85%,
				var(--color-indigo-900) 86% 95%,
				#0000 96%
			),
			radial-gradient(
				50% 50%,
				var(--color-secondary-600) 0% 5%,
				var(--color-indigo-900) 6% 15%,
				var(--color-secondary-600) 16% 25%,
				var(--color-indigo-900) 26% 35%,
				var(--color-secondary-600) 36% 45%,
				var(--color-indigo-900) 46% 55%,
				var(--color-secondary-600) 56% 65%,
				var(--color-indigo-900) 66% 75%,
				var(--color-secondary-600) 76% 85%,
				var(--color-indigo-900) 86% 95%,
				#0000 96%
			),
			radial-gradient(
					50% 50%,
					var(--color-secondary-600) 0% 5%,
					var(--color-indigo-900) 6% 15%,
					var(--color-secondary-600) 16% 25%,
					var(--color-indigo-900) 26% 35%,
					var(--color-secondary-600) 36% 45%,
					var(--color-indigo-900) 46% 55%,
					var(--color-secondary-600) 56% 65%,
					var(--color-indigo-900) 66% 75%,
					var(--color-secondary-600) 76% 85%,
					var(--color-indigo-900) 86% 95%,
					#0000 96%
				)
				32px 32px;
		background-size: 64px 64px;
		background-color: var(--color-secondary-600);
	}
</style>
