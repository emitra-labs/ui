<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { twJoin, twMerge } from 'tailwind-merge';

	type $$Props = Omit<HTMLInputAttributes, 'size' | 'value'> & {
		size?: 'sm' | 'md';
		value?: string;
		hasError?: boolean;
	};

	export let size: $$Props['size'] = 'md';
	export let value: $$Props['value'] = '';
	export let hasError: $$Props['hasError'] = false;

	const { class: className, ...rest } = $$restProps;
</script>

<div class={twMerge('relative', className)}>
	<input
		class={twJoin(
			size === 'sm' && 'px-4 h-10 text-sm',
			size === 'md' && 'px-4 h-11 text-base',
			'w-full font-medium tracking-wide rounded-md outline-none leading-none',
			'bg-neutral-100/60 placeholder-neutral-500/70',
			'dark:bg-neutral-700/50 dark:placeholder-neutral-400',
			'border-0 ring-1 ring-inset ring-neutral-300/80 dark:ring-neutral-700/80',
			'focus-within:ring-2 focus-within:ring-inset',
			'focus-within:ring-blue-400 dark:focus-within:ring-blue-300',
			hasError && 'ring-red-500 focus-within:ring-red-500 dark:ring-red-400 dark:focus-within:ring-red-400'
		)}
		{...rest}
		bind:value
	/>
</div>
