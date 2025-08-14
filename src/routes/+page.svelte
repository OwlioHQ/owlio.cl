<script lang='ts'>
	import CatGif from '$lib/assets/gifs/cat.gif';
	import HighwayGif from '$lib/assets/gifs/highway.gif';

	import { Toaster, toast } from 'svelte-sonner';
	import { ArrowRight } from '$lib/components/icons';
	import {
		company_size_options,
		contact_items,
		features,
		hero_card_items,
		questions,
		steps,
	} from '$lib/constants';
	import {
		Accordion,
		AccordionGroup,
		Button,
		Card,
		Error,
		FeatureItem,
		FormGroup,
		Input,
		Label,
		LogoSlider,
		Select,
		Textarea,
		Confetti,
	} from '$lib/components/ui';

	import { send_contact_data } from './index.remote';

	let contact_success = $derived(send_contact_data?.result?.success ?? null);

	$effect(() => {
		if (contact_success === null)
			return;

		if (!contact_success) {
			toast.error(send_contact_data?.result?.message!);
			return;
		}

		toast.success(send_contact_data?.result?.message!);
	});
</script>

<!-- User feedback on contact success -->
<Confetti duration={4000} show={contact_success ?? false} />
<Toaster position='bottom-center' />

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
				href='#contacto'
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
						<div
							class='w-fit rounded-md border border-accent/15 bg-accent/10 p-2'
						>
							<Icon class='size-8 fill-accent' />
						</div>
					{/snippet}
				</Card>
			{/each}
		</div>
	</div>
</section>

<!-- Servicios -->
<section id='servicios' class='relative isolate md:-scroll-m-8'>
	<div
		class='mx-auto max-w-(--content-width) px-(--content-x-spacing) pt-(--content-y-spacing) pb-10 lg:pb-16 xl:pb-26'
	>
		<div class='flex flex-col gap-y-20'>
			<hgroup class='mx-auto text-center md:w-2/3'>
				<h2 class='pb-6 text-3xl font-bold sm:text-4xl md:text-5xl'>
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
<section id='metodologia' class='relative isolate md:scroll-m-16'>
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
								<p
									class='text-lg leading-snug text-pretty text-muted'
								>
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
<section id='contacto' class='relative isolate scroll-m-16 xl:scroll-m-22'>
	<div
		class='mx-auto max-w-(--content-width) space-y-8 px-(--content-x-spacing) py-10 md:space-y-16 md:gap-y-16 lg:py-16 xl:py-26'
	>
		<div class='rounded-2xl bg-background'>
			<div
				class='grid grid-rows-[auto_auto] place-items-center items-center gap-6 md:gap-10 xl:grid-cols-2 xl:gap-16'
			>
				<div class='space-y-16'>
					<hgroup class='space-y-4'>
						<h2
							class='text-3xl leading-tight font-bold sm:text-4xl md:text-5xl'
						>
							¿Listo para transformar tu negocio con IA?
						</h2>
						<p
							class='text-left leading-snug text-pretty text-muted'
						>
							Contáctanos hoy mismo y uno de nuestros
							especialistas se comunicará contigo en menos de 24
							horas para explorar cómo nuestras soluciones de
							inteligencia artificial pueden automatizar tus
							procesos, reducir costos operativos y liberarte para
							enfocarte en lo que realmente importa para tu
							negocio.
						</p>
					</hgroup>
					<div class='space-y-10'>
						{#each contact_items as item (item.title)}
							<FeatureItem {...item} />
						{/each}
					</div>
				</div>

				<form
					{...send_contact_data}
					class='w-full rounded-2xl bg-muted-foreground p-6 shadow-md md:p-10 xl:p-16'
				>
					<div
						class='grid grid-cols-2 justify-between gap-(--content-x-spacing)'
					>
						<FormGroup>
							<Label for='name'>Nombre</Label>
							<Input
								name='name'
								placeholder='Ingrese su nombre'
							/>
							{#if send_contact_data.result?.errors?.name}
								<Error>{send_contact_data.result.errors.name}</Error>
							{/if}
						</FormGroup>

						<FormGroup>
							<Label for='email'>Correo electrónico</Label>
							<Input
								name='email'
								placeholder='Ingrese su correo'
								type='email'
							/>
							{#if send_contact_data.result?.errors?.email}
								<Error>{send_contact_data.result.errors.email}</Error>
							{/if}
						</FormGroup>
					</div>

					<FormGroup>
						<Label for='company_name'>Nombre de la empresa</Label>
						<Input
							name='company_name'
							placeholder='Ingrese nombre de la empresa'
						/>
						{#if send_contact_data.result?.errors?.company_name}
							<Error>{send_contact_data.result.errors.company_name}</Error>
						{/if}
					</FormGroup>

					<FormGroup>
						<Label for='company_size'>Tamaño de la empresa</Label>
						<Select
							name='company_size'
							options={company_size_options}
							placeholder='Seleccione tamaño de la empresa'
						/>
						{#if send_contact_data.result?.errors?.company_size}
							<Error>{send_contact_data.result.errors.company_size}</Error>
						{/if}
					</FormGroup>

					<FormGroup>
						<Label for='details'>Detalles</Label>
						<Textarea
							name='details'
							placeholder='¿En qué podemos ayudarte?'
							rows={4}
						/>
						{#if send_contact_data.result?.errors?.details}
							<Error>{send_contact_data.result.errors.details}</Error>
						{/if}
					</FormGroup>

					<Button class='mt-4 w-full' type='submit' variant='accent'>
						Contactar
					</Button>
				</form>
			</div>
		</div>
	</div>
</section>
