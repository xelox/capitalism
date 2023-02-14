<script lang="ts">
    let neuronsAmount = 83498;
</script>


<style>
    main{
        /* min-height: 120px; */
        position: relative;
        min-height: 170px;
        width: 100%;
    }
    .displayNeurons{
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
        padding: 8px;
    }
    .displayNeurons>img{
        width: 2rem;
    }
</style>

<main>
    <div class="displayNeurons">
        <img src="/static/assets/neuron.png" alt="">
        {neuronsAmount}
    </div>
</main>