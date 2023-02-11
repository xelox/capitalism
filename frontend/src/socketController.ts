
const sok = new WebSocket(`wss://localhost/sok`);

sok.onopen = (e)=>{
    console.log('Socket connection opened');
    sok.send(JSON.stringify({req: 'trigger_init', body: {}}))
    sok.onmessage = msg => {
        const req = JSON.parse(msg.data);
        console.log(req);
    }
}

window.onbeforeunload = () => {
    sok.close();
}



export default sok;