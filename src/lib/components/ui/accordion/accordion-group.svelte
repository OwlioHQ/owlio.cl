<script lang='ts'>
	import type { Snippet } from 'svelte';

	import { set_accordion_ctx } from './context';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	let opened_accordion_id = $state({ current: '' });

	set_accordion_ctx(opened_accordion_id);
</script>

<div class='*:last:border-0'>
	{@render children()}
</div>
