<script lang="ts">
    import type { user_serial } from "../../backend/models/user";


    export let players: user_serial[] = []
</script>

<style>
    main{
        min-width: 300px;
        min-height: 200px;
        flex: 1;
        background-color: none;
    }
    .playerTagHandle{
        background-color: var(--soft);
        border-radius: 4px;
        padding: 8px;
        margin: 8px;
        border: 1px solid black;
        display: flex;
        align-items: center;
    }
    .playerIcon{
        border-radius: 9999px;
        background-color: var(--deepest);
        width: 46px;
        height: 46px;
        margin-right: 6px;
        overflow: hidden;
        border: 3px solid var(--accent);
    }
    .playerIcon>img{
        width: 100%;
    }
</style>

<main>
    {#each players as player}
        <div class=playerTagHandle> <div class="playerIcon"><img src="/static/{player.pfpPath}" alt=""></div> <div class="playerName">{player.name}</div></div>
    {/each}
</main>