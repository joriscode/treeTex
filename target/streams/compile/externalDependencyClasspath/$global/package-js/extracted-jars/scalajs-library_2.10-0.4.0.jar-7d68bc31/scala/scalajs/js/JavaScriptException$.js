/** @constructor */
ScalaJS.c.scala_scalajs_js_JavaScriptException$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.scala_scalajs_js_JavaScriptException$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_scalajs_js_JavaScriptException$.prototype.constructor = ScalaJS.c.scala_scalajs_js_JavaScriptException$;
ScalaJS.c.scala_scalajs_js_JavaScriptException$.prototype.toString__T = (function() {
  return "JavaScriptException"
});
ScalaJS.c.scala_scalajs_js_JavaScriptException$.prototype.apply__Lscala_scalajs_js_Any__Lscala_scalajs_js_JavaScriptException = (function(exception) {
  return new ScalaJS.c.scala_scalajs_js_JavaScriptException().init___Lscala_scalajs_js_Any(exception)
});
ScalaJS.c.scala_scalajs_js_JavaScriptException$.prototype.unapply__Lscala_scalajs_js_JavaScriptException__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.exception__Lscala_scalajs_js_Any())
  }
});
ScalaJS.c.scala_scalajs_js_JavaScriptException$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_scalajs_js_JavaScriptException()
});
ScalaJS.c.scala_scalajs_js_JavaScriptException$.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_scalajs_js_Any__Lscala_scalajs_js_JavaScriptException(v1)
});
ScalaJS.c.scala_scalajs_js_JavaScriptException$.prototype.unapply__Lscala_scalajs_js_JavaScriptException__ = (function(x$0) {
  return this.unapply__Lscala_scalajs_js_JavaScriptException__Lscala_Option(x$0)
});
ScalaJS.c.scala_scalajs_js_JavaScriptException$.prototype.apply__Lscala_scalajs_js_Any__ = (function(exception) {
  return this.apply__Lscala_scalajs_js_Any__Lscala_scalajs_js_JavaScriptException(exception)
});
/** @constructor */
ScalaJS.inheritable.scala_scalajs_js_JavaScriptException$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_scalajs_js_JavaScriptException$.prototype = ScalaJS.c.scala_scalajs_js_JavaScriptException$.prototype;
ScalaJS.is.scala_scalajs_js_JavaScriptException$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_js_JavaScriptException$)))
});
ScalaJS.as.scala_scalajs_js_JavaScriptException$ = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_js_JavaScriptException$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.js.JavaScriptException")
  }
});
ScalaJS.isArrayOf.scala_scalajs_js_JavaScriptException$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_js_JavaScriptException$)))
});
ScalaJS.asArrayOf.scala_scalajs_js_JavaScriptException$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_js_JavaScriptException$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth)
  }
});
ScalaJS.data.scala_scalajs_js_JavaScriptException$ = new ScalaJS.ClassTypeData({
  scala_scalajs_js_JavaScriptException$: 0
}, false, "scala.scalajs.js.JavaScriptException$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_scalajs_js_JavaScriptException$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_scalajs_js_JavaScriptException$.prototype.$classData = ScalaJS.data.scala_scalajs_js_JavaScriptException$;
ScalaJS.moduleInstances.scala_scalajs_js_JavaScriptException = undefined;
ScalaJS.modules.scala_scalajs_js_JavaScriptException = (function() {
  if ((!ScalaJS.moduleInstances.scala_scalajs_js_JavaScriptException)) {
    ScalaJS.moduleInstances.scala_scalajs_js_JavaScriptException = new ScalaJS.c.scala_scalajs_js_JavaScriptException$().init___()
  };
  return ScalaJS.moduleInstances.scala_scalajs_js_JavaScriptException
});
//@ sourceMappingURL=JavaScriptException$.js.map
