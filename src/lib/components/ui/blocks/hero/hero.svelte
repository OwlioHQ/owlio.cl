<script lang='ts'>
    import type { HTMLAttributes } from 'svelte/elements';

    import { cn } from '$lib/utils';

    interface Props extends HTMLAttributes<HTMLElement> {};

    let { class: class_name, ...rest }: Props = $props();
</script>

<section class={cn('size-full', class_name)} {...rest}>
    <div class='grid min-h-200 grid-cols-2'>
        <div>
            <h1 class='text-3xl font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h1>
            <span
            >Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur, animi, enim libero dolores necessitatibus dolorum
                quidem mollitia, tenetur id sint itaque cumque a? Nulla iusto
                blanditiis minima fugit cumque minus!</span
            >
        </div>
        <div class='bg-separator'></div>
    </div>
</section>
