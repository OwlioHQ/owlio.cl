<script lang='ts'>
	import { fade } from 'svelte/transition';
	import { Confetti } from 'svelte-confetti';

	interface Props {
		show: boolean;
		duration?: number;
	}

	let { show = $bindable(false), duration = 1000 }: Props = $props();

	$effect(() => {
		if (!show)
			return;

		setTimeout(() => {
			show = false;
		}, duration);
	});
</script>

{#if show}
	<div class='pointer-events-none fixed -top-12 left-0 z-50 flex h-screen w-screen justify-center overflow-hidden' transition:fade>
		<Confetti amount={350} {duration} fallDistance='120vh' infinite x={[-5, 5]} y={[0, 0.1]} />
	</div>
	<div class='pointer-events-none fixed -top-96 left-0 z-50 flex h-screen w-screen justify-center overflow-hidden' transition:fade>
		<Confetti amount={350} {duration} fallDistance='120vh' infinite x={[-5, 5]} y={[0, 0.1]} />
	</div>
{/if}
