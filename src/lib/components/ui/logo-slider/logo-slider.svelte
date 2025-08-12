<script lang='ts'>
	const COLUMN_COUNT = 3;
	const LOGOS_PER_COLUMN = 8;

	const all_logos = Object.entries(
		import.meta.glob('/src/lib/assets/logos/*.png', {
			eager: true,
			import: 'default',
			query: {
				enhanced: true,
			},
		}),
	);

	const logo_columns = Array.from({ length: COLUMN_COUNT }, (_, index) =>
		all_logos.slice(
			index * LOGOS_PER_COLUMN,
			(index + 1) * LOGOS_PER_COLUMN,
		));

	function get_logo_name(path: string): string {
		return path.split('/').pop()?.split('.')[0] || '';
	}
</script>

<div class='flex size-full items-center justify-center gap-2 xl:gap-6'>
	{#each logo_columns as logos, index}
		<div
			class='relative h-full w-36 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]'
		>
			<div
				class={`absolute inset-x-0 grid gap-6 ${
					index % 2 === 0 ? 'animate-down' : 'animate-up'
				}`}
			>
				<!-- To get a seamless loop -->
				{#each [logos, logos] as logo_set}
					{#each logo_set as [path, module]}
						<div
							class='flex aspect-square size-full max-w-32 flex-col items-center justify-center rounded-lg border border-muted-foreground bg-background p-6 shadow'
						>
							<enhanced:img
								class='size-full object-contain'
								alt='{get_logo_name(path)} logo'
								src={module}
							/>
						</div>
					{/each}
				{/each}
			</div>
		</div>
	{/each}
</div>
