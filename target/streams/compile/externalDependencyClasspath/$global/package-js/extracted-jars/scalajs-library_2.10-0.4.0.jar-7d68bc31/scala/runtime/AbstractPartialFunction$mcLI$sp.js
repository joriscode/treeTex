/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcLI$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcLI$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcLI$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcLI$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcLI$sp.prototype.apply__I__O = (function(x$2) {
  return this.apply$mcLI$sp__I__O(x$2)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcLI$sp.prototype.apply$mcLI$sp__I__O = (function(x) {
  return this.applyOrElse__O__Lscala_Function1__O(ScalaJS.bI(x), ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction())
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcLI$sp.prototype.apply__O__O = (function(x) {
  return this.apply__I__O(ScalaJS.uI(x))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcLI$sp.prototype.apply__I__ = (function(x) {
  return this.apply__I__O(x)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcLI$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcLI$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcLI$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcLI$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcLI$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcLI$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcLI$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcLI$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcLI$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcLI$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcLI$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcLI$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcLI$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcLI$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcLI$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcLI$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcLI$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcLI$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcLI$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcLI$sp.js.map
