const setFilterTerm = (state, term) => ({ ...state, filter: { ...state.filter, term } });

export default setFilterTerm;
