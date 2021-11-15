import { Subscription } from "hyperapp";

const subscriptionExampleSub = (dispatch, action) => {
    const runExample = () => {
        dispatch(action);
    };

    document.addEventListener("click", runExample);

    return () => {
        document.removeEventListener("click", runExample);
    };
};

const subscriptionExample = (action): Subscription<any> => [subscriptionExampleSub, action];

export default subscriptionExample;
