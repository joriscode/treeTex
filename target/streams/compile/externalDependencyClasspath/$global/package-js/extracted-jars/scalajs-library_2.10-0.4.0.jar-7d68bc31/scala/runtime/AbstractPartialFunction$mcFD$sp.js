/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFD$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFD$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFD$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFD$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFD$sp.prototype.apply__D__F = (function(x) {
  return this.apply$mcFD$sp__D__F(x)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFD$sp.prototype.apply$mcFD$sp__D__F = (function(x) {
  return ScalaJS.uF(this.applyOrElse__O__Lscala_Function1__O(ScalaJS.bD(x), ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction()))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFD$sp.prototype.apply__O__O = (function(x) {
  return ScalaJS.bF(this.apply__D__F(ScalaJS.uD(x)))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFD$sp.prototype.init___ = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.prototype.init___.call(this);
  ScalaJS.impls.scala_Function1$mcFD$sp$class__$init$__Lscala_Function1$mcFD$sp__V(this);
  return this
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFD$sp.prototype.apply__D__ = (function(x) {
  return ScalaJS.bF(this.apply__D__F(x))
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcFD$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcFD$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFD$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcFD$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcFD$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcFD$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcFD$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcFD$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcFD$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcFD$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcFD$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcFD$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcFD$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcFD$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcFD$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcFD$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcFD$sp: 1,
  scala_Function1$mcFD$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFD$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcFD$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcFD$sp.js.map
