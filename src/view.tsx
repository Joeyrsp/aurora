import styles from "/styles.module.css";

import onSearchInput from "/actions/onSearchInput";
import onCheckFilter from "/actions/onFieldInput";

import { goldToLevel, filterItems, itemType } from "/utils";

export default (state) => (
    <div class={styles.app}>
        <div class={styles.header}>
            <div class={styles.logo}>
                <div>Aurora’s Emporium</div>
            </div>
            <div class={styles.search}>
                <input type="text" value={state.filter.term} oninput={onSearchInput} />
            </div>
            <div class={styles.menu}>
                <div>{goldToLevel(state.spent)}</div>
            </div>
        </div>
        <div class={styles.filters}>
            <div>Filters</div>
            {["Rarity", "Type"].map((category) => [
                <div>{category}</div>,
                ...Object.entries(state.filter.categories[category.toLowerCase()]).map(([filter, value]) => (
                    <div>
                        {filter}
                        <input type="checkbox" checked={value} onchange={onCheckFilter(category.toLowerCase(), filter)} />
                    </div>
                )),
            ])}
        </div>
        <div class={styles.items}>
            {filterItems(state.items, state.filter).map((item) => (
                <div class={styles.item}>
                    <div class={styles.type}>{itemType(item)}</div>
                    <div class={styles.rarity}>{item.rarity}</div>
                    {/* <div class={styles.price}>{item.price / 100 || ""}</div> */}
                    <div class={styles.name}>{item.name}</div>
                </div>
            ))}
        </div>
    </div>
);
