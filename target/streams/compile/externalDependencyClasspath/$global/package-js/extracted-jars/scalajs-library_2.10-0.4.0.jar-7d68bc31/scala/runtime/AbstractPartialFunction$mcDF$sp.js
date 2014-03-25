/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDF$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDF$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDF$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDF$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDF$sp.prototype.apply__F__D = (function(x$2) {
  return this.apply$mcDF$sp__F__D(x$2)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDF$sp.prototype.apply$mcDF$sp__F__D = (function(x) {
  return ScalaJS.uD(this.applyOrElse__O__Lscala_Function1__O(ScalaJS.bF(x), ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction()))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDF$sp.prototype.apply__O__O = (function(x) {
  return ScalaJS.bD(this.apply__F__D(ScalaJS.uF(x)))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDF$sp.prototype.init___ = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.prototype.init___.call(this);
  ScalaJS.impls.scala_Function1$mcDF$sp$class__$init$__Lscala_Function1$mcDF$sp__V(this);
  return this
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDF$sp.prototype.apply__F__ = (function(x) {
  return ScalaJS.bD(this.apply__F__D(x))
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcDF$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcDF$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDF$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcDF$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcDF$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcDF$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcDF$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcDF$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcDF$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcDF$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcDF$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcDF$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcDF$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcDF$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcDF$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcDF$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcDF$sp: 1,
  scala_Function1$mcDF$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDF$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcDF$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcDF$sp.js.map
