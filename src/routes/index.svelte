
<script>
	import FeaturedItem from "../components/FeaturedItem.svelte";
	import Hero from "../components/Hero.svelte"
</script>

<style>
	#main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>

<svelte:head>
	<title>Matthew Hilton</title>
</svelte:head>

<div id="main">
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
</div>
