/** @constructor */
ScalaJS.c.example_ScalaJSExample$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.example_ScalaJSExample$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.example_ScalaJSExample$.prototype.constructor = ScalaJS.c.example_ScalaJSExample$;
ScalaJS.c.example_ScalaJSExample$.prototype.main__V = (function() {
  var paragraph = ScalaJS.g["document"]["createElement"]("p");
  paragraph["innerHTML"] = "<strong>It works!</strong>";
  ScalaJS.g["document"]["getElementById"]("playground")["appendChild"](paragraph)
});
ScalaJS.c.example_ScalaJSExample$.prototype.square__I__I = (function(x) {
  return (x * x)
});
ScalaJS.c.example_ScalaJSExample$.prototype.$$js$exported$meth$main__O = (function() {
  this.main__V()
});
ScalaJS.c.example_ScalaJSExample$.prototype["main"] = (function() {
  return this.$$js$exported$meth$main__O()
});
ScalaJS.c.example_ScalaJSExample$.prototype.square__I__ = (function(x) {
  return ScalaJS.bI(this.square__I__I(x))
});
ScalaJS.c.example_ScalaJSExample$.prototype.main__ = (function() {
  return ScalaJS.bV(this.main__V())
});
/** @constructor */
ScalaJS.inheritable.example_ScalaJSExample$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.example_ScalaJSExample$.prototype = ScalaJS.c.example_ScalaJSExample$.prototype;
ScalaJS.is.example_ScalaJSExample$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.example_ScalaJSExample$)))
});
ScalaJS.as.example_ScalaJSExample$ = (function(obj) {
  if ((ScalaJS.is.example_ScalaJSExample$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "example.ScalaJSExample")
  }
});
ScalaJS.isArrayOf.example_ScalaJSExample$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.example_ScalaJSExample$)))
});
ScalaJS.asArrayOf.example_ScalaJSExample$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.example_ScalaJSExample$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lexample.ScalaJSExample;", depth)
  }
});
ScalaJS.data.example_ScalaJSExample$ = new ScalaJS.ClassTypeData({
  example_ScalaJSExample$: 0
}, false, "example.ScalaJSExample$", ScalaJS.data.java_lang_Object, {
  example_ScalaJSExample$: 1,
  java_lang_Object: 1
});
ScalaJS.c.example_ScalaJSExample$.prototype.$classData = ScalaJS.data.example_ScalaJSExample$;
ScalaJS.moduleInstances.example_ScalaJSExample = undefined;
ScalaJS.modules.example_ScalaJSExample = (function() {
  if ((!ScalaJS.moduleInstances.example_ScalaJSExample)) {
    ScalaJS.moduleInstances.example_ScalaJSExample = new ScalaJS.c.example_ScalaJSExample$().init___()
  };
  return ScalaJS.moduleInstances.example_ScalaJSExample
});
ScalaJS.e["ScalaJSExample"] = ScalaJS.modules.example_ScalaJSExample;

//@ sourceMappingURL=example.js.map
