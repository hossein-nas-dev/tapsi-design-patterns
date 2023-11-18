import singleton from "./Singleton/Problem/index";

singleton();

global.globalStore = { value: "Nothing" };

singleton();
