<script lang="ts">
	import type { HTMLHtmlAttributes } from 'svelte/elements';

	type $$Props = HTMLHtmlAttributes & {
		strokeWidth?: number;
	};

	export let strokeWidth: $$Props['strokeWidth'] = 2.75;
</script>

<svg
	width="24"
	height="24"
	stroke="inherit"
	viewBox="0 0 24 24"
	xmlns="http://www.w3.org/2000/svg"
	{...$$restProps}
>
	<g class="spinner_V8m1">
		<circle cx="12" cy="12" r="9.5" fill="none" stroke-width={strokeWidth}></circle>
	</g>
</svg>
