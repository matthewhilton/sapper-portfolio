<svelte:head>
	<title>Study | Matthew Hilton</title>
</svelte:head>

<script>
    import UnitItem from "../../components/UnitItem.svelte";
    import Masonry from 'svelte-masonry/Masonry.svelte'
    import { GET_UNITS_LIST } from '../../graphql/queries'
    import { query } from "svelte-apollo"

    const units = query(GET_UNITS_LIST)
</script>

<style>
    .container {
        margin-top: 20px;
    }
</style>

<div class="container">
    {#if $units.loading}
    <p>Loading...</p>
    {:else if $units.error}
    <p> Error loading units: {$units.error.message} </p>
    {:else}
        {#each $units.data.studyunits as unit}
            <p> {unit.title} </p>
        {/each}
    {/if}
    <Masonry gridGap="10px">
        <UnitItem data={{title: "Building IT Systems", color: "blue", unitCode: "IFB104", tagline: "python programming"}} />
        <UnitItem data={{title: "Building IT Systems", color: "red", unitCode: "IFB104", tagline: "python programming"}} />
        <UnitItem data={{title: "Building IT Systems", color: "red", unitCode: "IFB104", tagline: "python programming and some other stuff that is cool"}} />
        <UnitItem data={{title: "Building IT Systems", color: "red", unitCode: "IFB104", tagline: "python programming"}} />
    </Masonry>
</div>





