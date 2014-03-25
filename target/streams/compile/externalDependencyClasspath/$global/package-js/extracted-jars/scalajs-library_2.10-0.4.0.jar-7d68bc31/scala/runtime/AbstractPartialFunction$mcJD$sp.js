/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJD$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJD$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJD$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJD$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJD$sp.prototype.apply__D__J = (function(x) {
  return this.apply$mcJD$sp__D__J(x)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJD$sp.prototype.apply$mcJD$sp__D__J = (function(x) {
  return ScalaJS.uJ(this.applyOrElse__O__Lscala_Function1__O(ScalaJS.bD(x), ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction()))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJD$sp.prototype.apply__O__O = (function(x) {
  return ScalaJS.bJ(this.apply__D__J(ScalaJS.uD(x)))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJD$sp.prototype.init___ = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.prototype.init___.call(this);
  ScalaJS.impls.scala_Function1$mcJD$sp$class__$init$__Lscala_Function1$mcJD$sp__V(this);
  return this
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJD$sp.prototype.apply__D__ = (function(x) {
  return ScalaJS.bJ(this.apply__D__J(x))
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcJD$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcJD$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJD$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcJD$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcJD$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcJD$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcJD$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcJD$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcJD$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcJD$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcJD$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcJD$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcJD$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcJD$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcJD$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcJD$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcJD$sp: 1,
  scala_Function1$mcJD$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJD$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcJD$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcJD$sp.js.map
