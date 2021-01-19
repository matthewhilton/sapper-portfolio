<script>
    export let data;
</script>

<style>
    img {
        width: auto;
        height: 30px;
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 5px;
        margin-right: 10px;
    }

    h4 {
        margin-left: 5px;
    }
</style>

<div>
    <img src={data.logo.url} alt="logo" />
    <h4>{data.title}</h4>
</div>