import { Store } from "./store";

export default function () {
  const store = Store.getStore();

  store.setValue("firstName", "Hossein");
  store.setValue("lastName", "Nasiri");
}
