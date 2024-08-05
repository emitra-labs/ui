<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLAnchorAttributes;

	const { class: className, href, ...rest } = $$restProps;
</script>

<a {href} class={twMerge('font-semibold leading-none', 'text-blue-600 dark:text-blue-300', className)} {...rest}>
	<slot />
</a>
