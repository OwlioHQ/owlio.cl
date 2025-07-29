<script lang='ts'>
	const logos = Object.entries(
		import.meta.glob('/src/lib/assets/logos/*.png', {
			eager: true,
			query: {
				enhanced: true,
			},
		}),
	) as [string, { default: any }][];

	const column_length = 8;
	const logo_columns = [0, 1, 2].map(i =>
		logos.slice(i * column_length, (i + 1) * column_length),
	);
</script>

<div class='flex size-full place-content-center items-center gap-x-6 md:gap-x-12'>
	{#each logo_columns as column, i}
		{@render carousel_column(column, i)}
	{/each}
</div>

{#snippet carousel_column(logos: [string, { default: any }][], index: number)}
	<div
		class='relative h-full w-36 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]'
	>
		<div
			class='absolute inset-x-0 grid gap-y-6'
			class:animate-down={index !== 1}
			class:animate-up={index === 1}
		>
			{#each logos as [path, module]}
				{@const name = path.split('/').at(-1)!.split('.').at(0)}
				<div
					class='flex size-24 flex-col items-center justify-center rounded-lg border border-separator bg-background-primary p-2 shadow sm:size-30 sm:p-4 md:size-36 md:p-6'
					aria-hidden='true'
				>
					<enhanced:img
						class='size-full object-contain'
						alt='{name} logo'
						src={module.default}
					/>
				</div>
			{/each}

			{#each logos as [path, module]}
				{@const name = path.split('/').at(-1)!.split('.').at(0)}
				<div
					class='flex size-24 flex-col items-center justify-center rounded-lg border border-separator bg-background-primary p-2 shadow sm:size-30 sm:p-4 md:size-36 md:p-6'
					aria-hidden='true'
				>
					<enhanced:img
						class='size-full object-contain'
						alt='{name} logo'
						src={module.default}
					/>
				</div>
			{/each}
		</div>
	</div>
{/snippet}

<style>
	@keyframes scroll-up {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(-50%);
		}
	}

	@keyframes scroll-down {
		from {
			transform: translateY(-50%);
		}
		to {
			transform: translateY(0);
		}
	}

	.animate-up {
		animation: scroll-up 40s linear infinite;
	}

	.animate-down {
		animation: scroll-down 40s linear infinite;
	}
</style>
