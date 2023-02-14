<script lang="ts">
    import ActionHistoryAreaWrap from './actionHistoryAreaWrap.svelte';
    import CardsAreaWrap from './cardsAreaWrap.svelte';
    import PlayersAreaWrap from './playersAreaWrap.svelte';
    import Table from './table.svelte';
    import type { sokMsg, user_serial } from '../../backend/models/user';

    const sok = new WebSocket(`wss://gorodoro.dev/sok`);

    sok.onopen = (e)=>{
        console.log('Socket connection opened');
        sok.send(JSON.stringify({req: 'trigger_init', body: {}}))
        sok.onmessage = msg => {
            const req: sokMsg = JSON.parse(msg.data);
            console.log(req);

            if(req.req === 'init'){
                players = req.body.game.players;
            }
        }
    }

    window.onbeforeunload = () => {
        sok.close();
    }

    let players: user_serial[];

</script>


<style>
    main{
        display: flex;
        width: calc(100% - 20px);
        height: calc(100vh - 20px);
    }
    .upperWrap{
        display: flex;
        flex-direction: column;
    }
    .upperWrap>div{
        margin: 5px;
        border: 1px solid var(--soft);
        border-radius: 6px;
        background-color: var(--deepest);
        overflow: hidden;
    }
    .tableWrap{
        flex: 1;
        overflow: show;
        display: flex;
        align-items: stretch;
        background-color: transparent !important;
    }
    .actionHistoryWrap{
        flex: 1;
        display: flex;
        align-items: stretch;
    }
    .left{
        flex: 1;
    }
    .right{
        
        max-width: max-content;
    }
</style>

<main>
    <div class="upperWrap left">
         <div class="tableWrap" >
            <Table/>
        </div>
        <div class=cardsAreasWrap>
            <CardsAreaWrap/>
        </div>
       
    </div>

    <div class="upperWrap right">
        <div class=playersAreaWrap>
            <PlayersAreaWrap players={players}/>
        </div>
        <div class=actionHistoryWrap>
            <ActionHistoryAreaWrap/>    
        </div>
    </div>
</main>