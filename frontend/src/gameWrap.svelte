<script lang="ts">
    import ActionHistoryAreaWrap from './actionHistoryAreaWrap.svelte';
import CardsAreaWrap from './cardsAreaWrap.svelte';
import PlayersAreaWrap from './playersAreaWrap.svelte';
import Table from './table.svelte';
</script>


<style>
    main{
        display: flex;
        max-width: 100vw;
        height: 100vh;
    }
    .upperWrap{
        display: flex;
        flex-direction: column;
    }
    .tableWrap{
        flex: 1;
        display: flex;
        align-items: stretch;
    }
    .playersAreaWrap{
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
    .upperWrap>div{
        margin: 10px;
        border: 1px solid white;
    }
</style>

<main>
    <div class="upperWrap left">
        <div class="tableWrap">
            <Table/>
        </div>
        <div>
            <CardsAreaWrap/>
        </div>
    </div>

    <div class="upperWrap right">
        <div class=playersAreaWrap>
            <PlayersAreaWrap/>
        </div>
        <div>
            <ActionHistoryAreaWrap/>    
        </div>
    </div>
</main>