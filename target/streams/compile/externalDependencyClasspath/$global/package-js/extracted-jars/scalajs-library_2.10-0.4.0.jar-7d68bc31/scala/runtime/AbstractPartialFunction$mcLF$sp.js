/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcLF$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcLF$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcLF$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcLF$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcLF$sp.prototype.apply__F__O = (function(x$2) {
  return this.apply$mcLF$sp__F__O(x$2)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcLF$sp.prototype.apply$mcLF$sp__F__O = (function(x) {
  return this.applyOrElse__O__Lscala_Function1__O(ScalaJS.bF(x), ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction())
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcLF$sp.prototype.apply__O__O = (function(x) {
  return this.apply__F__O(ScalaJS.uF(x))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcLF$sp.prototype.apply__F__ = (function(x) {
  return this.apply__F__O(x)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcLF$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcLF$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcLF$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcLF$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcLF$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcLF$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcLF$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcLF$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcLF$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcLF$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcLF$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcLF$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcLF$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcLF$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcLF$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcLF$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcLF$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcLF$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcLF$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcLF$sp.js.map
