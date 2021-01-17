<svelte:head>
	<title>Study | Matthew Hilton</title>
</svelte:head>

<script>
import UnitItem from "../../components/UnitItem.svelte";
import Masonry from 'svelte-masonry/Masonry.svelte'

</script>

<Masonry gridGap="10px">
    <UnitItem data={{title: "Building IT Systems", color: "blue", unitCode: "IFB104", tagline: "python programming"}} />
    <UnitItem data={{title: "Building IT Systems", color: "red", unitCode: "IFB104", tagline: "python programming"}} />
    <UnitItem data={{title: "Building IT Systems", color: "red", unitCode: "IFB104", tagline: "python programming and some other stuff that is cool"}} />
    <UnitItem data={{title: "Building IT Systems", color: "red", unitCode: "IFB104", tagline: "python programming"}} />
</Masonry>





