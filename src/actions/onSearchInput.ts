import setFilterTerm from "/actions/setFilterTerm";

const onSearchInput = (state, event) => [setFilterTerm, event.target.value];

export default onSearchInput;
