<script lang='ts'>
    import type { Snippet } from 'svelte';
    import type { HTMLAttributes } from 'svelte/elements';

    import CaretDown from 'phosphor-svelte/lib/CaretDown';

    import { cn } from '$lib/utils';
    import { untrack } from 'svelte';

    import { Collapsible } from '../collapsible';

    import { get_accordion_ctx } from './context';

    interface Props extends HTMLAttributes<HTMLElement> {
        open?: boolean;
        heading: Snippet;
        content: Snippet;
    }

    let {
        open = $bindable(false),
        heading,
        content,
        class: class_name,
        ...rest
    }: Props = $props();

    const accordion_id = $props.id();

    let opened_accordion_id = get_accordion_ctx();

    $effect(() => {
        if (!opened_accordion_id)
            return;

        untrack(() => {
            if (opened_accordion_id.current === '') {
                opened_accordion_id.current = accordion_id;
            }
        });

        open = opened_accordion_id.current === accordion_id;
    });

    function handle_accordion_toggle() {
        if (!opened_accordion_id) {
            open = !open;
            return;
        }

        if (opened_accordion_id.current === accordion_id) {
            opened_accordion_id.current = '';
            return;
        }

        opened_accordion_id.current = accordion_id;
    }
</script>

<div class={cn('border-b border-b-separator', class_name)} {...rest}>
    <button class='flex w-full items-center justify-between gap-x-6' onclick={handle_accordion_toggle} type='button'>
        <div class='h-16 content-center text-lg font-medium'>
            {@render heading()}
        </div>

        <span>
            <CaretDown class={`${open ? 'rotate-180' : ''} transition-transform`} />
        </span>
    </button>
    <Collapsible class='pb-4 text-base text-text-secondary' bind:open>
        {@render content()}
    </Collapsible>
</div>
