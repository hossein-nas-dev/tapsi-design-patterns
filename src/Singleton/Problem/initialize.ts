(() => {
  const SomeGlobalObject = {
    field1: "value1",
    field2: "value2",
  };

  globalThis.globalObject = SomeGlobalObject;
})();

export {};
