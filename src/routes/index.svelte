
<script>
	import FeaturedItem from "../components/FeaturedItem.svelte";
	import Hero from "../components/Hero.svelte"
</script>

<svelte:head>
	<title>Matthew Hilton</title>
</svelte:head>

<style>
	h3 {
		background-color: #3d362f;
		color: white;
		margin: 0;
	}

	#more {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#more > div {
		background-color: #3d362f;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		border-radius: 8px;
		padding: 20px;
		margin-top: 50px;
	}
</style>

<Hero />

<FeaturedItem data={{
	id: 1,
	coverImageUrl: "https://storage.googleapis.com/portfolio_imagestore/application::workitem.workitem/c45736eaeb644e2aa3c6e4e67a08c7b6.png",
	coverImageAlt: "Petrichor task manager cover",
	title: "Petrichor Task Manager",
	shortDescription: "Driven by the amount of due dates and tasks to remember at university, I created Petrichor so I could easily keep track of these and access them anywhere.",
}} flipped={false}/>

<FeaturedItem data={{
	id: 1,
	coverImageUrl: "https://storage.googleapis.com/portfolio_imagestore/application::workitem.workitem/c45736eaeb644e2aa3c6e4e67a08c7b6.png",
	coverImageAlt: "Petrichor task manager cover",
	title: "Petrichor Task Manager",
	shortDescription: "Driven by the amount of due dates and tasks to remember at university, I created Petrichor so I could easily keep track of these and access them anywhere.",
}} flipped={true}/>

<a href="/work" id="more">
	<div>
		<h3> View More Projects </h3>
	</div>
</a>

