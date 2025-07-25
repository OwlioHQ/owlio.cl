<script lang='ts'>
	const logos = Object.entries(import.meta.glob(
		'/src/lib/assets/logos/*.png',
		{
			eager: true,
			query: {
				enhanced: true,
			},
		},
	)) as [string, { default: any }][];

	const column_length = 0;
	const logo_columns = [0, 1, 2].map(i => logos.slice(i * column_length, (i + 1) * column_length));
</script>

<div class='flex place-content-center items-center gap-x-12'>
	{#each logo_columns as column}
		{@render carousel_column(column)}
	{/each}
</div>

{#snippet carousel_column(logos: [string, { default: any }][])}
	<div class='grid gap-y-6'>
		{#each logos as [path, module]}
			{@const name = path.split('/').at(-1)!.split('.').at(0)}
			<div class='flex size-36 flex-col items-center justify-center rounded-lg border border-separator bg-background-primary p-6 shadow'>
				<enhanced:img class='size-full object-contain' alt='some alt text' src={module.default} />
				<span class='p-2 text-lg font-medium text-text-primary capitalize'>{name}</span>
			</div>
		{/each}
	</div>
{/snippet}
