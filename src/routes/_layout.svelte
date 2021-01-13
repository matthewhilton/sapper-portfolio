<script>
	import Nav from '../components/Nav.svelte';
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
	:global(*) {
		font-family: 'Roboto', sans-serif;
		background-color: rgb(245, 241, 237);
		color: black;
	}
</style>

<Nav />

<main>
	<slot></slot>
</main>