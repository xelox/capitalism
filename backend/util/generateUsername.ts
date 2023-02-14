

const adjectives = [
    'Attrocious', 
    'Vile', 
    'Outrageous', 
    'Scrumptious', 
    'Crunchy', 
    'Soggy', 
    'Moldy', 
    'Sassy', 
    'Giggling', 
    'Bodatious',
    'Bolding',
    'Feral', 
    'Rancid', 
    'Rabbid', 
    'Skunkly',
    'Morbid',
    'Sus',
    'Suspicious',
    'Stinky',
    'Bitchless',
    'Maidenless',
    'Fatherless',
    'Edgy',
    'Emo',
    'Inflatable',
    'Horny'
];

const nouns = [
    'Peasant',          // ( x )
    'Soup',             // ( x )
    'Lasagna',          // ( x )
    'Peanutbutter',     // ( x )
    'Panini',           // ( x )
    'Leek',             // ( x )
    'Waffles',          // ( x )
    'Audacity',         // ( x )
    'Egg',              // ( x )
    'Ramen',            // ( x )
    'Peperoni',         // ( x )
    'Pizza',            // ( x )
    'Whale',            // ( x )
    'Dolphin',          // ( x )
    'Enjoyer',          // ( x )
    'Bozo',             // ( x )
    'Loser',            // ( x )
    'Daddy',            // ( x )
    'SugerDaddy',       // ( x )
    'SugerMommy',       // ( x )
    'DiscordKitten',    // ( x )
    'Mommy',            // ( x )
    'Banana',           // ( x )
    'Kitten',           // ( x )
    'Lament',           // ( x )
];

const pfps: {[index: string]: string} = {
    Peasant:            'pfp/Peasant.png',
    Soup:               'pfp/Soup.png',
    Lasagna:            'pfp/Lasagna.png',
    Peanutbutter:       'pfp/Peanutbutter.png',
    Panini:             'pfp/Panini.png',      
    Leek:               'pfp/Leek.png',        
    Waffles:            'pfp/Waffles.png',     
    Audacity:           'pfp/Audacity.jpg',    
    Egg:                'pfp/Egg.png',         
    Ramen:              'pfp/Ramen.png',       
    Peperoni:           'pfp/Peperoni.png',    
    Pizza:              'pfp/Pizza.png',       
    Whale:              'pfp/Whale.png',     
    Dolphin:            'pfp/Dolphin.png',     
    Enjoyer:            'pfp/Enjoyer.png',     
    Bozo:               'pfp/Bozo.jpg',        
    Loser:              'pfp/Loser.png',       
    Daddy:              'pfp/Daddy.png',       
    SugerDaddy:         'pfp/SugerDaddy.png',  
    SugerMommy:         'pfp/SugerMommy.png',  
    DiscordKitten:      'pfp/DiscordKitten.png',
    Mommy:              'pfp/Mommy.png',       
    Banana:             'pfp/Banana.png',      
    Kitten:             'pfp/Kitten.png',      
    Lament:             'pfp/Lament.jpg',      
}

export const generateUsernameAndPfp = ():{name: string, pfpPath: string} => {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const numb = Math.floor(Math.random() * 1200) - 100;
    const pfpPath = pfps[noun] ?? 'pfp/default.png';
    return {
        name: `${adj}${noun}${numb}`,
        pfpPath,
    };
}
