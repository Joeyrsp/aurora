import setFilterField from "/actions/setFilterField";

const onFieldInput = (category, field) =>
    function onFieldInputInternal(state, event) {
        return [setFilterField, [category, field, event.target.checked]];
    };

export default onFieldInput;
