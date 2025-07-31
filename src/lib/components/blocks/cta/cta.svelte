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
				class='flex flex-col items-center gap-y-6 rounded-2xl bg-background-primary p-8 sm:p-14 xl:flex-row xl:p-20'
			>
				<div class='space-y-8 xl:w-3/5'>
					<div class='space-y-4'>
						<h2
							class='text-2xl font-bold text-wrap text-text-primary sm:text-4xl xl:text-5xl'
						>
							¿Preparado para transformar tu empresa?
						</h2>
						<p
							class='text-base leading-snug italic sm:text-lg xl:text-xl xl:whitespace-nowrap'
						>
							Póngase en contacto para obtener más información
							sobre cómo podemos ayudarlo.
						</p>
					</div>
					<div class='hidden items-center gap-x-6 sm:flex'>
						{#each items as item}
							<div class='flex items-center'>
								<div class='flex flex-col items-center gap-2 sm:flex-row'>
									<IconBadge class='size-8 p-0 sm:size-8 md:size-6 lg:size-6 xl:size-6'>
										<Check />
									</IconBadge>
									<span class='text-sm whitespace-nowrap italic xl:text-base'>{item}</span>
								</div>
							</div>
						{/each}
					</div>
				</div>
				<div class='xl:ml-auto xl:p-10'>
					<Button class='h-12 px-8 text-lg sm:text-xl xl:h-14 xl:px-10 xl:text-2xl' href='https://calendar.app.google/M7mnJfaFNC1N9Au3A' referrerpolicy='no-referrer' target='_blank'>
						<span>Contáctanos</span>
						<ArrowSquareOut class='size-4 xl:size-5' />
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
