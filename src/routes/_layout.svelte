<script>
	import Nav from '../components/Nav.svelte';
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
	:global(*) {
		font-family: 'Roboto', sans-serif;
		background-color: rgb(245, 241, 237);
	}

	:global(h1, h2, h3, p, a) {
		color: black;
		text-decoration: none;
	}

	#container {
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-bottom: 300px;
	}

	main {
		max-width: 1200px;
	}

	#flex {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 1200px;
	}

	@media only screen and (max-width: 1200px) {
		main {
			width: 100%;
		}

		#flex {
			width: 100%;
		}
	}
</style>

<div id="container">
	<main>
		<Nav />
		<div id="flex">
			<slot>
				
			</slot>
		</div>
	</main>
</div>