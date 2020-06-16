import { types, flow, addMiddleware, onSnapshot } from "mobx-state-tree";

const Application = types.model("Application", {
  loading: types.boolean,
});
