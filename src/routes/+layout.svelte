<script>
	import { EmitraProvider } from '$lib';
	import '$lib/styles.css';
</script>

<svelte:head>
	<title>Emitra UI</title>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-vsc-dark-plus.min.css"
	/>
</svelte:head>

<EmitraProvider>
	<slot />
</EmitraProvider>
