<svelte:head>
	<title>Work | Matthew Hilton</title>
</svelte:head>

<script>
    import Masonry from 'svelte-masonry/Masonry.svelte'
    import Heading from '../../components/Heading.svelte';
    import WorkItem from '../../components/WorkItem.svelte';
</script>

<style>
    .header {
        margin-left: 10px;
        margin-right: 10px;
    }
</style>

<div class="header"><Heading title="Featured" /></div>
<Masonry gridGap="10px">
    <WorkItem data={{title: "Stocks API Viewer", imageUrl: "https://storage.googleapis.com/portfolio_imagestore/application::workitem.workitem/cc47f8f7bbb8480a9da04f7543829d9a.png"}}/>
    <WorkItem data={{title: "Photoshop Neon Sign", imageUrl: "https://storage.googleapis.com/portfolio_imagestore/workitem/IMG_20190614_173418.jpg"}}/>
</Masonry>
<div class="header" id="other"><Heading title="Other Projects" /></div>





