<script lang='ts'>
	import CatGif from '$lib/assets/gifs/cat.gif';
	import HighwayGif from '$lib/assets/gifs/highway.gif';

	import { ArrowRight } from '$lib/components/icons';
	import { features, hero_card_items, questions, steps } from '$lib/constants';
	import { Accordion, AccordionGroup, Button, Card, FeatureItem, LogoSlider } from '$lib/components/ui';
</script>

<!-- Inicio -->
<section id='inicio' class='relative isolate'>
	<!-- Background -->
	<div
		class='absolute inset-0 -z-10 bg-gradient-to-r from-secondary to-black'
	>
		<img
			class='size-full object-cover opacity-80 brightness-50'
			alt='Hero background'
			fetchpriority='high'
			loading='eager'
			src={HighwayGif}
		/>
	</div>

	<!-- Content -->
	<div
		class='mx-auto flex max-w-(--content-width) flex-col place-items-center gap-y-24 px-(--content-x-spacing) pt-[calc(var(--content-y-spacing)*2)] pb-10 md:pt-(--content-y-spacing) lg:pb-16 xl:pb-26'
	>
		<div class='space-y-12 text-center xl:h-full'>
			<hgroup class='space-y-8 text-balance'>
				<h1
					class='text-3xl leading-snug font-bold text-background md:text-4xl lg:text-5xl xl:text-6xl'
				>
					Automatiza tus procesos y moderniza tu negocio con
					soluciones a tu medida
				</h1>
				<p
					class='mx-auto text-lg text-muted-foreground md:w-4/5 md:text-xl xl:text-2xl'
				>
					Desde la estrategia hasta la implementación, ofrecemos
					soluciones prácticas en desarrollo y automatización que
					generan resultados positivos en tu empresa.
				</p>
			</hgroup>
			<Button
				class='w-full focus-within:ring-offset-primary hover:ring-offset-primary md:mx-auto md:w-fit'
				size='lg'
				variant='accent'
			>
				<span class='text-lg md:text-xl'>Contáctanos</span>
				<ArrowRight class='inline-block size-6 align-middle' />
			</Button>
		</div>

		<!-- Cards -->
		<div
			class='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 xl:gap-12'
		>
			{#each hero_card_items as { image: Icon, title, description }}
				<Card {description} {title}>
					{#snippet image()}
						<div class='w-fit rounded-md bg-muted-foreground p-2'>
							<Icon class='size-8' />
						</div>
					{/snippet}
				</Card>
			{/each}
		</div>
	</div>
</section>

<!-- Servicios -->
<section id='servicios' class='relative isolate'>
	<div
		class='mx-auto max-w-(--content-width) px-(--content-x-spacing) pt-(--content-y-spacing) pb-10 lg:pb-16 xl:pb-26'
	>
		<div class='flex flex-col gap-y-20'>
			<hgroup class='mx-auto text-center md:w-2/3'>
				<h2
					class='pb-6 text-3xl font-bold sm:text-4xl md:text-5xl'
				>
					Nuestros Servicios
				</h2>
				<p class='text-lg leading-snug text-balance text-muted'>
					Desarrollamos plataformas y herramientas a medida, basadas
					en los datos relevantes de tu empresa para potenciar tu
					marketing, mejorar tus ventas e impulsa el crecimiento de tu
					negocio.
				</p>
			</hgroup>
			<div
				class='grid grid-cols-1 place-content-center items-center gap-20 lg:grid-cols-2'
			>
				<div class='space-y-10'>
					{#each features as feature (feature.icon)}
						<FeatureItem {...feature} />
					{/each}
				</div>

				<!-- Logos -->
				<div class='aspect-square overflow-hidden'>
					<LogoSlider />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Como Trabajamos -->
<section id='metodologia' class='relative isolate'>
	<div
		class='mx-auto max-w-(--content-width) space-y-16 px-(--content-x-spacing) pt-(--content-y-spacing) pb-10 lg:pb-16 xl:pb-26'
	>
		<hgroup class='mx-auto text-center md:max-w-3/5'>
			<h2 class='pb-6 text-3xl font-bold sm:text-4xl md:text-5xl'>
				¿Cómo es trabajar con nosotros?
			</h2>
			<p class='text-lg leading-snug text-balance text-muted'>
				Trabajamos de la mano contigo en cada etapa del proyecto,
				asegurando transparencia, comunicación constante y resultados
				que superen tus expectativas.
			</p>
		</hgroup>
		<div
			class='relative flex flex-col items-center justify-between xl:flex-row xl:items-start'
		>
			{#each steps as step}
				{@const Icon = step.image}
				<Card
					class='z-2 max-w-80 place-items-center border-none text-center'
					description={step.description}
					title={step.title}
				>
					{#snippet image()}
						<div class='size-16 rounded-full bg-accent p-4'>
							<Icon class='size-full fill-background' />
						</div>
					{/snippet}
				</Card>
			{/each}

			<div
				style='
					background-image: repeating-linear-gradient(
					to right,
					currentColor 0px,
					currentColor 8px,
					transparent 8px,
					transparent 16px
					);
				'
				class='absolute top-[50%] left-0 hidden h-[2px] w-full text-accent xl:block'
			></div>
		</div>
	</div>
</section>

<!-- Preguntas frecuentes -->
<section id='preguntas' class='relative isolate'>
	<div
		class='mx-auto grid max-w-(--content-width) items-center justify-center gap-y-8 px-(--content-x-spacing) pt-(--content-y-spacing) pb-10 md:gap-y-16 lg:pb-16 xl:pb-26'
	>
		<div class='text-center'>
			<hgroup>
				<h2
					class='text-3xl leading-tight font-bold sm:text-4xl md:text-5xl'
				>
					Preguntas frecuentes
				</h2>
			</hgroup>
		</div>

		<div class='flex items-center gap-16'>
			<div class='hidden size-fit overflow-hidden rounded-2xl lg:block'>
				<img
					class='aspect-square object-cover'
					alt='Funny cat'
					fetchpriority='low'
					loading='lazy'
					src={CatGif}
				/>
			</div>
			<div class='w-full space-y-16'>
				<AccordionGroup>
					{#each questions as question}
						<Accordion>
							{#snippet heading()}
								<h3
									class='py-4 text-left text-xl leading-tight font-medium md:text-2xl'
								>
									{question.title}
								</h3>
							{/snippet}

							{#snippet content()}
								<p class='text-lg leading-snug text-pretty text-muted'>
									{question.description}
								</p>
							{/snippet}
						</Accordion>
					{/each}
				</AccordionGroup>
			</div>
		</div>
	</div>
</section>

<!-- Contacto -->
<section id='contacto' class='relative isolate'>
	<div
		class='mx-auto max-w-(--content-width) px-(--content-x-spacing) pt-(--content-y-spacing) pb-10 md:gap-y-16 lg:pb-16 xl:pb-26'
	>
		<!--  -->
	</div>
</section>
