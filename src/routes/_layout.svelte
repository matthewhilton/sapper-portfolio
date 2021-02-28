<script>
	import Nav from '../components/Nav.svelte';

	import { setClient } from "svelte-apollo";
	import { client } from '../graphql/apollo';
	import { onMount } from 'svelte';
	import { goto } from '@sapper/app'

	setClient(client);

	onMount(() => {
		window.onunhandledrejection = (e) => {
			// Redirect to error page if there is ever and error
			throw new Error(500, e.message)
		}
	})
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
	:global(*) {
		font-family: 'Roboto', sans-serif;
	}

	:global(html) {
		background-color: #283338;
	}

	:global(h1, h2, h3, p, a) {
		color: #8ae3a5;
		text-decoration: none;
	}

	#container {
		display: flex;
		justify-content: center;
		padding: 20px;
		margin-bottom: 300px;
	}

	main {
		max-width: 1200px;
	}

	#flex {
		width: 1200px;
	}

	

	@media only screen and (max-width: 1200px) {
		main {
			max-width: 100%;
		}

		#flex {
			max-width: 100%;
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