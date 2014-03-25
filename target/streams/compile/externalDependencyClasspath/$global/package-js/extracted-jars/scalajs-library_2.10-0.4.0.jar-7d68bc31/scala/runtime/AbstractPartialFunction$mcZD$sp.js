/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZD$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZD$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZD$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZD$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZD$sp.prototype.apply__D__Z = (function(x) {
  return this.apply$mcZD$sp__D__Z(x)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZD$sp.prototype.apply$mcZD$sp__D__Z = (function(x) {
  return ScalaJS.uZ(this.applyOrElse__O__Lscala_Function1__O(ScalaJS.bD(x), ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction()))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZD$sp.prototype.apply__O__O = (function(x) {
  return ScalaJS.bZ(this.apply__D__Z(ScalaJS.uD(x)))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZD$sp.prototype.init___ = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.prototype.init___.call(this);
  ScalaJS.impls.scala_Function1$mcZD$sp$class__$init$__Lscala_Function1$mcZD$sp__V(this);
  return this
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZD$sp.prototype.apply__D__ = (function(x) {
  return ScalaJS.bZ(this.apply__D__Z(x))
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcZD$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcZD$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZD$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcZD$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcZD$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcZD$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcZD$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcZD$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcZD$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcZD$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcZD$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcZD$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcZD$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcZD$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcZD$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcZD$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcZD$sp: 1,
  scala_Function1$mcZD$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZD$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcZD$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcZD$sp.js.map
