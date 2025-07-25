<script lang='ts'>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Component, ComponentProps } from 'svelte';

	import TrendUp from 'phosphor-svelte/lib/TrendUp';
	import PiggyBank from 'phosphor-svelte/lib/PiggyBank';
	import Crosshair from 'phosphor-svelte/lib/Crosshair';
	import ArrowRight from 'phosphor-svelte/lib/ArrowRight';
	import BackgroundImage from '$lib/assets/images/giphy.gif';
	import RocketLaunch from 'phosphor-svelte/lib/RocketLaunch';

	import { cn } from '$lib/utils';
	import { Button, Card } from '$lib/components/ui';

	type CardProps = Omit<ComponentProps<typeof Card>, 'image'> & { image: Component };

	interface Props extends HTMLAttributes<HTMLElement> {};

	let { class: class_name, ...rest }: Props = $props();

	const items: CardProps[] = [
		{
			image: RocketLaunch,
			title: 'Aumenta la productividad',
			description: 'Optimiza procesos, automatiza tareas y acelera tu flujo de trabajo con herramientas inteligentes.',
		},
		{
			image: PiggyBank,
			title: 'Reduce costos operativos',
			description: 'Minimiza gastos y ahorra recursos con tecnologías de vanguardia, sin comprometer la calidad.',
		},
		{
			image: Crosshair,
			title: 'Elimina el error humano',
			description: 'Automatiza tus procesos, garantizando resultados consistentes entre operaciones.',
		},
		{
			image: TrendUp,
			title: 'Impulsa tu negocio',
			description: 'Acelera el crecimiento de tu empresa con soluciones escalables que te potencien en el mercado.',
		},
	];
</script>

<section class={cn('isolate size-full h-[1080px]', class_name)} {...rest}>
	<div
		style="grid-template-areas: 'container'"
		class='isolate grid size-full overflow-hidden'
	>
		<div
			style='grid-area: container'
			class='z-3 grid size-full place-items-center items-center justify-center'
		>
			<div class='grid grid-rows-2 place-items-center gap-y-16 px-[var(--section-padding-x)] pt-[calc(var(--section-padding-y)*1.5)] pb-[calc(var(--section-padding-y)*0.5)]'>
				<div class='w-full space-y-12 text-center'>
					<div class='space-y-8'>
						<h1 class='text-6xl leading-snug font-bold text-balance text-background-primary text-shadow-2xs'>
							Automatiza tus procesos y moderniza tu negocio con soluciones a tu medida
						</h1>

						<p class='mx-auto w-4/5 text-2xl text-balance text-background-primary/80'>
							Desde la estrategia hasta la implementación, ofrecemos soluciones prácticas en desarrollo y automatización que generan resultados positivos en tu empresa.
						</p>
					</div>

					<div class='flex items-center justify-center'>
						<Button class='h-12 px-12'>
							<span class='text-xl'>
								Contáctanos
							</span>
							<ArrowRight class='size-6' />
						</Button>
					</div>
				</div>

				<div class='grid grid-cols-4 gap-x-16'>
					{#each items as item}
						{@const Icon = item.image}
						<Card description={item.description} title={item.title}>
							{#snippet image()}
								<div class='w-fit rounded-md bg-separator p-2'>
									<Icon class='size-8' />
								</div>
							{/snippet}
						</Card>
					{/each}
				</div>
			</div>
		</div>

		<!-- Background image -->
		<div
			style='grid-area: container'
			class='z-1 h-full overflow-hidden bg-gradient-to-r from-indigo-800 to-black'
		>
			<img class='size-full opacity-80 brightness-50' alt='some alt text' src={BackgroundImage} />
		</div>
	</div>
</section>
