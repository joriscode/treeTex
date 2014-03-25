/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZF$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZF$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZF$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZF$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZF$sp.prototype.apply__F__Z = (function(x$2) {
  return this.apply$mcZF$sp__F__Z(x$2)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZF$sp.prototype.apply$mcZF$sp__F__Z = (function(x) {
  return ScalaJS.uZ(this.applyOrElse__O__Lscala_Function1__O(ScalaJS.bF(x), ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction()))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZF$sp.prototype.apply__O__O = (function(x) {
  return ScalaJS.bZ(this.apply__F__Z(ScalaJS.uF(x)))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZF$sp.prototype.init___ = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.prototype.init___.call(this);
  ScalaJS.impls.scala_Function1$mcZF$sp$class__$init$__Lscala_Function1$mcZF$sp__V(this);
  return this
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZF$sp.prototype.apply__F__ = (function(x) {
  return ScalaJS.bZ(this.apply__F__Z(x))
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcZF$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcZF$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZF$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcZF$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcZF$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcZF$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcZF$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcZF$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcZF$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcZF$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcZF$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcZF$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcZF$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcZF$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcZF$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcZF$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcZF$sp: 1,
  scala_Function1$mcZF$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZF$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcZF$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcZF$sp.js.map
