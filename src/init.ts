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
        + 5000 // free level up
        + 0.5  // louis selling bolts
        + 2250  // selling thay books
        + 1200  // purchase spell scrolls
        + 300  // diamonds
        + 490 // jug, health pots x3, brewers supply, desert equipment x7
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
