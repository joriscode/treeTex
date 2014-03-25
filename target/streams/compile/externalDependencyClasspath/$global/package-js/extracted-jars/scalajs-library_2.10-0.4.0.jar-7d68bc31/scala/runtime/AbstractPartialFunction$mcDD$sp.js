/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDD$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDD$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDD$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDD$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDD$sp.prototype.apply__D__D = (function(x$38) {
  return this.apply$mcDD$sp__D__D(x$38)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDD$sp.prototype.apply$mcDD$sp__D__D = (function(x) {
  return ScalaJS.uD(this.applyOrElse__O__Lscala_Function1__O(ScalaJS.bD(x), ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction()))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDD$sp.prototype.apply__O__O = (function(x) {
  return ScalaJS.bD(this.apply__D__D(ScalaJS.uD(x)))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDD$sp.prototype.init___ = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.prototype.init___.call(this);
  ScalaJS.impls.scala_Function1$mcDD$sp$class__$init$__Lscala_Function1$mcDD$sp__V(this);
  return this
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDD$sp.prototype.apply__D__ = (function(x) {
  return ScalaJS.bD(this.apply__D__D(x))
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcDD$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcDD$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDD$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcDD$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcDD$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcDD$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcDD$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcDD$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcDD$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcDD$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcDD$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcDD$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcDD$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcDD$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcDD$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcDD$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcDD$sp: 1,
  scala_Function1$mcDD$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDD$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcDD$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcDD$sp.js.map
