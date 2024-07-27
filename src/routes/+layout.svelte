<script>
	import { EmitraProvider } from '$lib';
	import '$lib/styles.css';
</script>

<svelte:head>
	<title>Emitra UI</title>
</svelte:head>

<EmitraProvider>
	<slot />
</EmitraProvider>
