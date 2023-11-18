import singleton from "./Singleton/Problem/index";
import solutionSingleton from "./Singleton/Solution/index";

singleton();

global.globalStore = { value: "Nothing" };

singleton();

solutionSingleton();

/* 
Import "./Visitor/Solution/index"; */
