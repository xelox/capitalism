

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
];

const nouns = [
    'Peasant',
    'soup',
    'Lasagna',
    'Peanutbutter',
    'Panini',
    'Leek',
    'Waffles',
    'Audacity',
    'Egg',
    'Ramen',
    'Peperoni',
    'Pizza',
    'Whale',
    'Dolphin',
    'Enjoyer',
    'Bozo',
    'Loser',
    'Daddy',
    'Suger Daddy',
    'Mommy',
];

export const generateUsername = ():string => {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const numb = Math.floor(Math.random() * 100);
    return `${adj} ${noun} ${numb}`;
}
