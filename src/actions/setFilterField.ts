const setFilterField = (state, [category, field, value]) => {
    const beans = {
        ...state,
        filter: {
            ...state.filter,
            categories: {
                ...state.filter.categories,
                [category]: {
                    ...state.filter.categories[category],
                    [field]: value,
                },
            },
        },
    };

    console.log({
        ...state.filter.categories,
        [category]: {
            ...state.filter.categories[category],
            [field]: value,
        },
    });

    return beans;
};

export default setFilterField;
