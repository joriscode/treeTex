/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJL$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJL$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJL$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJL$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJL$sp.prototype.apply__O__J = (function(x$2) {
  return this.apply$mcJL$sp__O__J(x$2)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJL$sp.prototype.apply$mcJL$sp__O__J = (function(x) {
  return ScalaJS.uJ(this.applyOrElse__O__Lscala_Function1__O(x, ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction()))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJL$sp.prototype.apply__O__O = (function(x) {
  return ScalaJS.bJ(this.apply__O__J(x))
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcJL$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcJL$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJL$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcJL$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcJL$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcJL$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcJL$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcJL$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcJL$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcJL$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcJL$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcJL$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcJL$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcJL$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcJL$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcJL$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcJL$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJL$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcJL$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcJL$sp.js.map
