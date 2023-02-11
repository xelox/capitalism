<script lang="ts">
    import { onMount } from "svelte";
    let width = 0;
    let height = 0;

    let canvasDom: HTMLCanvasElement | null = null;
    let canvasWrap = null;
    let ctx = null;
    onMount(()=>{
        ctx = canvasDom.getContext('2d');
        console.log(ctx);
        // window.onresize = onResize;
        onResize();
    })

    const onResize = () => {
        canvasDom.width = width;
        canvasDom.height = height;
        console.log(width, height);
    }
</script>
<style>
    *{
        margin: 0;
        border: 0;
        padding: 0;
    }
    main{
        background-color: #ddd;
        width: 100%;
    }
    canvas{
        background-color: #333;
    }
</style>
<main bind:clientWidth={width} bind:clientHeight={height} bind:this={canvasWrap}>
    <canvas bind:this={canvasDom}></canvas>
</main>