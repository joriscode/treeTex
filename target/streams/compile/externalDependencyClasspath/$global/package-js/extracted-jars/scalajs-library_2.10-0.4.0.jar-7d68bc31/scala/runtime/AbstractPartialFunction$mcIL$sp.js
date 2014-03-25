/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcIL$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcIL$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcIL$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcIL$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcIL$sp.prototype.apply__O__I = (function(x$2) {
  return this.apply$mcIL$sp__O__I(x$2)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcIL$sp.prototype.apply$mcIL$sp__O__I = (function(x) {
  return ScalaJS.uI(this.applyOrElse__O__Lscala_Function1__O(x, ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction()))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcIL$sp.prototype.apply__O__O = (function(x) {
  return ScalaJS.bI(this.apply__O__I(x))
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcIL$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcIL$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcIL$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcIL$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcIL$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcIL$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcIL$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcIL$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcIL$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcIL$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcIL$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcIL$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcIL$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcIL$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcIL$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcIL$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcIL$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcIL$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcIL$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcIL$sp.js.map
