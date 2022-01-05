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
export const filterItems = ({
    items /* : [{ name }] */, 
    filter /* : { term: string; type: {}; rarity: {} } */,
    spent,
}) => items.filter(
    (item) => 
        item.name.toLowerCase().includes(filter.term.toLowerCase()) && 
        // Object.entries(filter.categories).every(([category, fields]) => !Object.values(fields).some(Boolean) || fields[item[category]])
        (item.rank <= goldToLevel(spent)) &&
        (!Object.values(filter.categories.type).some(Boolean) || filter.categories.type[itemType(item)]) &&
        (!Object.values(filter.categories.rarity).some(Boolean) || filter.categories.rarity[item.rarity])
);

export const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    let angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
    };
};

export const describeSector = (x, y, radius, startAngle, endAngle) => {
    let start = polarToCartesian(x, y, radius, endAngle);
    let end = polarToCartesian(x, y, radius, startAngle);

    let largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    let d = ["M", start.x, start.y, "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y, "L", x, y, "Z"].join(" ");

    return d;
};
