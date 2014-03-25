/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDL$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDL$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDL$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDL$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDL$sp.prototype.apply__O__D = (function(x$2) {
  return this.apply$mcDL$sp__O__D(x$2)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDL$sp.prototype.apply$mcDL$sp__O__D = (function(x) {
  return ScalaJS.uD(this.applyOrElse__O__Lscala_Function1__O(x, ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction()))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDL$sp.prototype.apply__O__O = (function(x) {
  return ScalaJS.bD(this.apply__O__D(x))
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcDL$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcDL$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDL$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcDL$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcDL$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcDL$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcDL$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcDL$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcDL$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcDL$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcDL$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcDL$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcDL$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcDL$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcDL$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcDL$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcDL$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDL$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcDL$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcDL$sp.js.map
