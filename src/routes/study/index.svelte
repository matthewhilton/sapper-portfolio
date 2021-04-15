<svelte:head>
	<title>Study | Matthew Hilton</title>
</svelte:head>

<script>
    import UnitItem from "../../components/UnitItem.svelte";
    import Masonry from 'svelte-masonry/Masonry.svelte'
    import { GET_UNITS_LIST, GET_UNIT_FILTERS } from '../../graphql/queries'
    import { query } from "svelte-apollo"

    const units = query(GET_UNITS_LIST)
    const unit_filters = query(GET_UNIT_FILTERS)

    let selected_filter;
</script>

<style>
    .container {
        margin-top: 20px;
    }

    select {
        margin-left: 10px;
        padding: 10px;
        background-color: #141a1c;
        color: white;
        font-size: 18px;
        border: none;
        appearance: none;
    }
</style>

<div class="container">
    {#if $units.loading || $unit_filters.loading}
    <p>Loading...</p>
    {:else if $units.error}
    <p> Error loading units: {$units.error.message} </p>
    {:else if $unit_filters.error}
    <p> Error loading unit filters: {$unit_filters.error.message} </p>
    {:else if $unit_filters.data && $units.data}
        <select name="Filter" bind:value={selected_filter}>
            <option value="none"> No Filter </option>
            {#each $unit_filters.data.studyunitFilters as unit_filter}
                <option value={unit_filter.slug}>{unit_filter.title}</option>
            {/each}
        </select>
        <Masonry gridGap="10px">
            {#each $units.data.studyunits as unit}
               
                <UnitItem data={unit} highlighted={(selected_filter === undefined || selected_filter === "none" || unit.studyunitFilters.some((filter) => filter.slug === selected_filter))}/>
                
            {/each}
        </Masonry>
    {/if}
</div>





