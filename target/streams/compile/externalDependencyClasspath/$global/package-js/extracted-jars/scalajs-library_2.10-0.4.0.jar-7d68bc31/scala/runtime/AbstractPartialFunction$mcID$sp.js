/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcID$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcID$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcID$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcID$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcID$sp.prototype.apply__D__I = (function(x) {
  return this.apply$mcID$sp__D__I(x)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcID$sp.prototype.apply$mcID$sp__D__I = (function(x) {
  return ScalaJS.uI(this.applyOrElse__O__Lscala_Function1__O(ScalaJS.bD(x), ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction()))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcID$sp.prototype.apply__O__O = (function(x) {
  return ScalaJS.bI(this.apply__D__I(ScalaJS.uD(x)))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcID$sp.prototype.init___ = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.prototype.init___.call(this);
  ScalaJS.impls.scala_Function1$mcID$sp$class__$init$__Lscala_Function1$mcID$sp__V(this);
  return this
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcID$sp.prototype.apply__D__ = (function(x) {
  return ScalaJS.bI(this.apply__D__I(x))
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcID$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcID$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcID$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcID$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcID$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcID$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcID$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcID$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcID$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcID$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcID$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcID$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcID$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcID$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcID$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcID$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcID$sp: 1,
  scala_Function1$mcID$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcID$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcID$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcID$sp.js.map
