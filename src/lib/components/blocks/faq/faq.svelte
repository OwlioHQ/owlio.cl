<script lang='ts'>
	import type { HTMLAttributes } from 'svelte/elements';

	import FaqGif from '$lib/assets/images/faq.gif';

	import { cn } from '$lib/utils';
	import { Accordion, AccordionGroup } from '$lib/components/ui';

	interface Props extends HTMLAttributes<HTMLElement> {}

	let { class: class_name, ...rest }: Props = $props();

	const items = [
		{
			title: '¿Cómo integramos con tus sistemas existentes?',
			description:
				'Adaptamos nuestras soluciones a tu infraestructura actual mediante aplicaciones y APIs. No necesitas reescribir ni migrar sistemas; trabajamos sobre lo que ya tienes.',
		},
		{
			title: '¿En cuánto tiempo se ven los primeros resultados operativos?',
			description:
				'Los primeros impactos son visibles en cuestión de días gracias a nuestra implementación progresiva. El tiempo exacto varía según la complejidad de cada caso, pero diseñamos nuestras soluciones para generar valor desde las primeras etapas del proyecto.',
		},
		{
			title: '¿Cómo logramos aumentar la productividad mediante automatización?',
			description:
				'Analizamos tus operaciones o datos para identificar tareas repetitivas y cuellos de botella críticos. Luego desarrollamos soluciones personalizadas que eliminan el trabajo manual y aceleran tus procesos clave.',
		},
		{
			title: '¿Qué nos diferencia de otras empresas?',
			description:
				'Nuestro enfoque técnico nos permite crear soluciones precisas y a medida para cada desafío específico, a diferencia de las soluciones genéricas del mercado.',
		},
		{
			title: '¿Cómo transformamos tus datos en insights accionables?',
			description:
				'Diseñamos dashboards interactivos que van más allá de la visualización básica: convertimos tus métricas críticas en herramientas de toma de decisiones. Nuestras soluciones de visualización se integran directamente con todas tus fuentes de datos.',
		},
		{
			title: '¿Cómo aseguramos calidad y seguridad en el código?',
			description:
				'Aplicamos revisiones estrictas, CI/CD automatizado, linters, pruebas unitarias y escaneos de seguridad en cada etapa del desarrollo. Todo el código sigue estándares robustos y auditables.',
		},
	];
</script>

<section class={cn('isolate size-full', class_name)} {...rest}>
	<div
		class='grid items-center justify-center gap-y-20 px-[var(--section-padding-x)] py-[var(--section-padding-y)]'
	>
		<div class='text-center'>
			<div>
				<h2
					class='text-3xl leading-loose font-bold text-text-primary sm:text-4xl md:text-5xl'
				>
					Preguntas frecuentes
				</h2>
				<p class='text-lg leading-snug text-balance'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente architecto qui, labore obcaecati delectus facere.
					Nesciunt quo earum debitis! Minus, officiis. Qui quibusdam
					fugit tenetur nostrum quo pariatur velit repellendus!
				</p>
			</div>
		</div>

		<div class='flex gap-16'>
			<div class='hidden overflow-hidden rounded-2xl lg:block lg:w-[40%]'>
				<img
					class='size-full object-cover'
					alt='some alt text'
					src={FaqGif}
				/>
			</div>
			<div class='w-full space-y-16 lg:w-[60%]'>
				<AccordionGroup>
					{#each items as item}
						<Accordion>
							{#snippet heading()}
								<h3
									class='py-4 text-left text-xl leading-snug font-semibold text-text-primary md:text-2xl'
								>
									{item.title}
								</h3>
							{/snippet}

							{#snippet content()}
								<p class='text-lg leading-snug text-pretty'>
									{item.description}
								</p>
							{/snippet}
						</Accordion>
					{/each}
				</AccordionGroup>
			</div>
		</div>
	</div>
</section>
