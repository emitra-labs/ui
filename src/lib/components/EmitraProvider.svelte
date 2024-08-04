<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Manrope:wght@200..800&display=swap"
		rel="stylesheet"
	/>

	<script>
		// Force dark theme
		document.documentElement.classList.add('dark');
		window.theme = 'dark';
	</script>
</svelte:head>

<slot />
