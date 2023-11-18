import { Store } from "./store";

export default function () {
  const store = Store.getStore();

  store.setValue("firstName", "Reza");
  store.setValue("lastName", "Sobhani");
}
