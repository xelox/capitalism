<script lang="ts">
    import { onMount } from "svelte";
    let canvasWidth = 0;
    let canvasHeight = 0;


    let zoom = 1;
    let panX = 0;
    let panY = 0;

    let canvasDom: HTMLCanvasElement | null = null;
    let ctx = null;
    let minSize = 0;

    let boardX = 0;
    let boardY = 0;

    const tiles = new Array(40);

    const update = () => {
        ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'white';
        ctx.textBaseline = 'top'
        ctx.font = '14px "Source Code Pro"';
        drawRect(boardX, boardY, minSize, minSize);
        drawTiles();
        requestAnimationFrame(update);
    }

    const drawTiles = () => {
        let orientation = 0;
        let cursor = 0;
        const tileSize = minSize / 11;
        for(const tile of tiles) {
            if(cursor >= 11) {
                cursor = 1;
                orientation++;
            }
            let x: number, y: number;
            if(orientation === 0){
                x = cursor * tileSize;
                y = 0;
            }
            if(orientation === 1){
                x = 10 * tileSize;
                y = cursor * tileSize;
            }
            if(orientation === 2){
                x = 10 * tileSize - cursor * tileSize;
                y = 10 * tileSize;
            }
            if(orientation === 3){
                x = 0;
                y = 10 * tileSize - cursor * tileSize;
            }
            x = x + boardX;
            y = y + boardY;


            drawRect(x, y, tileSize, tileSize);
            ctx.fillText(tile.tag, x + 1, y + 1, tileSize); 
            if(tile.playerPfp) {
                ctx.save();
                ctx.beginPath();
                ctx.arc(x + tileSize - 15, y + tileSize - 15, 10, 0, 2 * Math.PI);
                ctx.clip(); 
                ctx.drawImage(tile.playerPfp, x + tileSize - 25, y + tileSize - 25, 20, 20);
                ctx.restore();
            }
            cursor++;
        }
    }

    onMount(()=>{
        ctx = canvasDom.getContext('2d');
        console.log(ctx);
        window.onresize = onResize;
        onResize();
        generateTiles();
        update();
    })

    const onResize = () => {
        canvasDom.width = canvasWidth;
        canvasDom.height = canvasHeight;
        minSize = Math.min(canvasWidth, canvasHeight);
        boardX = canvasWidth / 2 - minSize / 2;
        boardY = canvasHeight / 2 - minSize / 2;
    }

    const drawRect = (x: number, y: number, width: number, height: number,) => {
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.stroke();
    }
    const fillRect = (x: number, y: number, width: number, height: number,) => ctx.fillRect(x, y, width, height);

    const generateTiles = () => {
        for(let i = 0; i < tiles.length; i++) {
            tiles[i] = {
                tag: `#${i}`
            }
        }
        tiles[0].tag = 'start';
        tiles[2].tag = 'chest';
        tiles[4].tag = 'tax';
        tiles[5].tag = 'train';
        tiles[7].tag = 'chance';
        tiles[10].tag = 'horny jail';
        tiles[12].tag = 'utility';
        tiles[15].tag = 'train';
        tiles[17].tag = 'chest';
        tiles[20].tag = 'afk';
        tiles[22].tag = 'chance';
        tiles[25].tag = 'train';
        tiles[27].tag = 'utility';
        tiles[30].tag = 'go to horny Jail';
        tiles[32].tag = 'chest';
        tiles[35].tag = 'train';
        tiles[36].tag = 'chance';
        tiles[38].tag = 'big tax';

        const img = new Image();
        img.src = '/static/pfp/Lament.jpg';
        img.onload = () => {
            tiles[0].playerPfp = img;
        }
    }
</script>

<main bind:clientWidth={canvasWidth} bind:clientHeight={canvasHeight}>
    <canvas  bind:this={canvasDom}></canvas>
</main>


<style>
    canvas{
        position: relative;
    }
    main{
        margin: 0;
        border: 0;
        padding: 0;
        width: 100%;
        aspect-ratio: 1 / 1;
        background-color: var(--soft);
    }
</style>