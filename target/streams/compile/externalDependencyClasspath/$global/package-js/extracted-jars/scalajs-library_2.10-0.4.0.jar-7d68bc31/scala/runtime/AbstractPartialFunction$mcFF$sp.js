/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFF$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFF$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFF$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFF$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFF$sp.prototype.apply__F__F = (function(x$2) {
  return this.apply$mcFF$sp__F__F(x$2)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFF$sp.prototype.apply$mcFF$sp__F__F = (function(x) {
  return ScalaJS.uF(this.applyOrElse__O__Lscala_Function1__O(ScalaJS.bF(x), ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction()))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFF$sp.prototype.apply__O__O = (function(x) {
  return ScalaJS.bF(this.apply__F__F(ScalaJS.uF(x)))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFF$sp.prototype.init___ = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.prototype.init___.call(this);
  ScalaJS.impls.scala_Function1$mcFF$sp$class__$init$__Lscala_Function1$mcFF$sp__V(this);
  return this
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFF$sp.prototype.apply__F__ = (function(x) {
  return ScalaJS.bF(this.apply__F__F(x))
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcFF$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcFF$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFF$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcFF$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcFF$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcFF$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcFF$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcFF$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcFF$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcFF$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcFF$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcFF$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcFF$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcFF$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcFF$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcFF$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcFF$sp: 1,
  scala_Function1$mcFF$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFF$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcFF$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcFF$sp.js.map
