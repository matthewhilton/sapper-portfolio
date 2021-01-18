<script context="module">
	export async function preload(page, session) {
		const { unitcode } = page.params;
        return {unitcode}
	}
</script>

<script>
    export let unitcode;

    import { GET_UNIT_DATA } from '../../graphql/queries'
    import { query } from "svelte-apollo"
import Masonry from 'svelte-masonry/Masonry.svelte';
import WorkItem from '../../components/WorkItem.svelte';
import StackItem from '../../components/StackItem.svelte';

    const dataQuery = query(GET_UNIT_DATA, { variables: { "unitcode": unitcode }})

    $: dataQuery.refetch({ "unitcode": unitcode})
</script>

<style>
    .container {
        margin-left: 10px;
        margin-right: 10px;
    }

    h1 {
        color: white;
        padding: 10px;
    }

    .stackContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

</style>

<div class="container">
    {#if $dataQuery.loading}
    <p>Loading...</p>
    {:else if $dataQuery.error}
    <p> Error loading: {$dataQuery.error.message} </p>
    {:else}
        {#each [$dataQuery.data.studyunit] as unit (unit.id)}
            <h1 style={"background-color: " + unit.color}>{unit.title}</h1>
            <h2>{unit.code}</h2>
            <p>{unit.description}</p>

            {#if unit.workitems.length > 0}
                <h3>Artefacts</h3>
                <Masonry gridGap="10px">
                    {#each unit.workitems as artefact (artefact.id)}
                        <WorkItem data={artefact} maxWidth={300} />
                    {/each}
                </Masonry>
            {/if}

            {#if unit.stackitems.length > 0}
                <h3> Languages/Stack </h3>
                <div class="stackContainer">
                    {#each unit.stackitems as stackitem (stackitem.id)}
                        <StackItem data={stackitem} />
                    {/each}
                </div>
            {/if}
        {/each}
    {/if}
</div>