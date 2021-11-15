import { app } from "hyperapp";

import init from "/src/init";
import view from "/src/view";
import subscriptions from "/src/subscriptions";

app({
    init,
    view,
    subscriptions,
    node: document.getElementById("app"),
});
