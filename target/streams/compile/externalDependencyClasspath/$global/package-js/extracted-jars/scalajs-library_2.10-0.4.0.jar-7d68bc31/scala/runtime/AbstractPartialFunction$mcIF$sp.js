/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcIF$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcIF$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcIF$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcIF$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcIF$sp.prototype.apply__F__I = (function(x$2) {
  return this.apply$mcIF$sp__F__I(x$2)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcIF$sp.prototype.apply$mcIF$sp__F__I = (function(x) {
  return ScalaJS.uI(this.applyOrElse__O__Lscala_Function1__O(ScalaJS.bF(x), ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction()))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcIF$sp.prototype.apply__O__O = (function(x) {
  return ScalaJS.bI(this.apply__F__I(ScalaJS.uF(x)))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcIF$sp.prototype.init___ = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.prototype.init___.call(this);
  ScalaJS.impls.scala_Function1$mcIF$sp$class__$init$__Lscala_Function1$mcIF$sp__V(this);
  return this
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcIF$sp.prototype.apply__F__ = (function(x) {
  return ScalaJS.bI(this.apply__F__I(x))
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcIF$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcIF$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcIF$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcIF$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcIF$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcIF$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcIF$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcIF$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcIF$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcIF$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcIF$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcIF$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcIF$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcIF$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcIF$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcIF$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcIF$sp: 1,
  scala_Function1$mcIF$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcIF$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcIF$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcIF$sp.js.map
