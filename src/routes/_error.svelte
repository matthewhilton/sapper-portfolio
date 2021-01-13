<script>
	export let status;
	export let error;
	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	* {
		text-align: center;
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div>
	<h1>{status}</h1>
	<p>{error.message}</p>
</div>
