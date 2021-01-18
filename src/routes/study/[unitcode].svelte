<script context="module">
	export async function preload(page, session) {
		const { unitcode } = page.params;
        return {unitcode}
	}
</script>

<script>
    export let unitcode;
</script>

<p>{unitcode}</p>