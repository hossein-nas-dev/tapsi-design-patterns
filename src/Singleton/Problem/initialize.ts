import { Store } from "./store";

export default function () {
  const store = new Store();

  store.setValue("firstName", "Hossein");
  store.setValue("lastName", "Nasiri");

  global.globalStore = store;
}
