import { app } from "hyperapp";

import init from "/init";
import view from "/view";
import subscriptions from "/subscriptions";

app({
    init,
    view,
    subscriptions,
    node: document.getElementById("app"),
});
