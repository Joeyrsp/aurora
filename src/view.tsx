import styles from "/src/styles.module.css";

console.log(styles);

export default (state) => (
    <div class={styles.app}>
        <div class={styles.header}>nav</div>
        <div>filters</div>
        <div>items</div>
        <div>{JSON.stringify(state)}</div>
    </div>
);
