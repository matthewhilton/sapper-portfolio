<script>
    export let data = {};
    export let flipped = false;
    $: projectLink = "/item/" + data.id
</script>

<style>
    img {
       width: 60%;
       height: auto;
       max-width: 700px;
    }

    #outer {
        width: 80%;
        display: flex;
    }

    #inner {
        display: flex;
        flex-direction: column;
        margin-right: 25px;
        margin-left: 25px;
        flex-grow: 1;
        justify-content: flex-end;
    }

    .flipped {
        
        align-items: flex-end;
        text-align: end;
    }
    
    .reverseFlex {
        flex-direction: row-reverse;
    }

    p {
        max-width: 500px;
        font-size: 14px;
    }

    h1 {
        margin: 0;
    }

    @media only screen and (max-width: 1200px) {
      #outer {
          width: 100%;
          flex-wrap: wrap-reverse;
      }

      .flipped {
        flex-wrap: wrap;
      }

      img {
          width: 100%;
          max-width: 100%;
      }
    }
</style>

<div id="outer" class="{!flipped ? 'reverseFlex' : ''}">
    <div id="inner" class:flipped>
        <h1 class:flipped>{data.title}</h1>
        <p class:flipped>{data.shortDescription}</p>

        <a href={projectLink}> View Project </a>
    </div>

    <img src={data.coverImageUrl} alt={data.coverImageAlt} />
</div>
