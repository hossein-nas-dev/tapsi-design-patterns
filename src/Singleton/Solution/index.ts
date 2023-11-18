import moduleA from "./moduleA";
import moduleB from "./moduleB";
import { Store } from "./store";

export default function () {
  const store = Store.getStore();
  moduleA();
  moduleB();

  console.log({
    firstName: store.getValue("firstName"),
    lastName: store.getValue("lastName"),
  });
}
