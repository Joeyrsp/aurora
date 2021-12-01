export const goldToLevel = (gold: number) => {
    let rank = 0;

    [1, 5, 15, 25, 50, 100].forEach((step) => {
        gold -= step * 1000;

        if (gold > 0) {
            rank += 1;
        }
    });

    return rank;
};

export const itemType = (item) => item.type || (item.staff && "staff") || (item.wondrous && "wondrous");

// prettier-ignore
export const filterItems = (
    items /* : [{ name }] */, 
    filter /* : { term: string; type: {}; rarity: {} } */
) => items.filter(
    (item) => 
        item.name.toLowerCase().includes(filter.term.toLowerCase()) && 
        // Object.entries(filter.categories).every(([category, fields]) => !Object.values(fields).some(Boolean) || fields[item[category]])
        (!Object.values(filter.categories.type).some(Boolean) || filter.categories.type[itemType(item)]) &&
        (!Object.values(filter.categories.rarity).some(Boolean) || filter.categories.rarity[item.rarity])
);
