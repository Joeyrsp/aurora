import styles from "/styles.module.css";

import onSearchInput from "/actions/onSearchInput";
import onFieldInput from "/actions/onFieldInput";
import setPreview from "/actions/setPreview";

import { goldToLevel, filterItems, itemType, describeSector } from "/utils";

export default (state) => (
    <div class={styles.app}>
        <div class={styles.header}>
            <div class={styles.logo}>
                <div>Aurora’s Emporium</div>
            </div>
            <div class={styles.search}>
                <input type="text" placeholder="Search..." value={state.filter.term} oninput={onSearchInput} />
            </div>
            <div class={styles.menu}>
                <div class={styles.button}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                        <path d={describeSector(50, 50, 50, 0, (goldToLevel(state.spent) / 6) * 359.9) + ""} />
                    </svg>
                    <div class={styles.level}>{goldToLevel(state.spent)}</div>
                </div>
            </div>
        </div>
        <div class={styles.filters}>
            <div>Filters</div>
            {["Rarity", "Type"].map((category) => [<div class={styles.category}>{category}</div>, ...Object.entries(state.filter.categories[category.toLowerCase()]).map(([filter, value]) => [<label for={filter}>{filter}</label>, <input type="checkbox" checked={value} id={filter} onchange={onFieldInput(category.toLowerCase(), filter)} />])])}
        </div>
        <div class={styles.items}>
            {filterItems(state).map((item) => (
                <div class={styles.item} onclick={[setPreview, item]}>
                    {/* temporarily putting type where price is. uncomment things and delete things */}
                    <div>
                        <div class={styles.rarity}>{item.rarity}</div>
                        {/* <div class={styles.type}>{itemType(item)}</div> */}
                    </div>
                    <div class={styles.price}>{itemType(item)}</div>
                    {/* <div class={styles.price}>{item.price / 100 || "Inquire\nFor Price"}</div> */}
                    <div class={styles.name}>{item.name}</div>
                </div>
            ))}
        </div>
        {state.preview && (
            <div class={styles.preview} onclick={[setPreview, undefined]}>
                <div class={styles.card}>
                    <div class={styles.name}>{state.preview.name}</div>
                    <div class={styles.details}>
                        <div class={styles.rarity}>{state.preview.rarity}</div>
                        <div class={styles.type}>{itemType(state.preview)}</div>
                    </div>
                    <div class={styles.description}>{state.preview.entries.map((entry) => (console.log(typeof entry), typeof entry == "string" ? <div>{entry}</div> : JSON.stringify(entry)))}</div>
                </div>
            </div>
        )}
    </div>
);
