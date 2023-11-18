(() => {
  const SomeGlobalObject = {
    field1: "value1",
    field2: "value2",
  };

  global.globalObject = SomeGlobalObject;
})();

export {};
