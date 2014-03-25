/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJF$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJF$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJF$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJF$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJF$sp.prototype.apply__F__J = (function(x$2) {
  return this.apply$mcJF$sp__F__J(x$2)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJF$sp.prototype.apply$mcJF$sp__F__J = (function(x) {
  return ScalaJS.uJ(this.applyOrElse__O__Lscala_Function1__O(ScalaJS.bF(x), ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction()))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJF$sp.prototype.apply__O__O = (function(x) {
  return ScalaJS.bJ(this.apply__F__J(ScalaJS.uF(x)))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJF$sp.prototype.init___ = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.prototype.init___.call(this);
  ScalaJS.impls.scala_Function1$mcJF$sp$class__$init$__Lscala_Function1$mcJF$sp__V(this);
  return this
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJF$sp.prototype.apply__F__ = (function(x) {
  return ScalaJS.bJ(this.apply__F__J(x))
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcJF$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcJF$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJF$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcJF$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcJF$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcJF$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcJF$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcJF$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcJF$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcJF$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcJF$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcJF$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcJF$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcJF$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcJF$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcJF$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcJF$sp: 1,
  scala_Function1$mcJF$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcJF$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcJF$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcJF$sp.js.map
