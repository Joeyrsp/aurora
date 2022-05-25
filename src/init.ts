import { itemType } from "/utils";

import tier1 from "/data/raw_items_1.json";
import tier2 from "/data/raw_items_2.json";

let items = [].concat(...[tier1, tier2].map((tier, index) => tier.map((item) => ({ ...item, rank: index + 1 }))));

console.log("logging items with cursed descriptions");
console.log(items.filter((item) => item.entries && item.entries.every((entry) => typeof entry == "string" && entry.includes("{"))).map((item) => item.name));

console.log("logging items with no prices");
console.log(items.filter((item) => !("price" in item)).map((item) => item.name));

export default () => ({
    // prettier-ignore
    spent: 
          3972 // from before
        + 2028 // FREE level up for fixing robot
        + 0.5 // louis selling bolts
        + 2250 // sell thay spell books
        + 1200 // spell scrolls
        + 300 // diamonds
        + 490 // jug, health pots x3, brewers supply, desert equipment x7
        + 100 // platinum rings x2
        + 10659.5 // FREE level up for headhunting zauryn the blacksmith
        + 25000 // sell book of +2 dex
        + 300 // diamonds
        + 4500 // flametongue
        + 50 // gauntlets
        + 6000 // gauntlets
        + 4000 // +2 shield
        + 4000 // +2 shield
        + 8000 // amulet of health
        + 2000 // bag of holding
        + 500 // helm of comprehending languages
        + 5000 // +2 bloodwell vial
        + 300 // diamonds
        + 0, // god damn comma
    items,
    filter: {
        term: "",
        categories: {
            type: Object.fromEntries([...items.reduce((collection: Set<"">, item) => collection.add(itemType(item)), new Set())].map((value) => [value, false])),
            rarity: Object.fromEntries([...items.reduce((collection: Set<"">, item) => collection.add(item.rarity), new Set())].map((value) => [value, false])),
        },
    },
});

