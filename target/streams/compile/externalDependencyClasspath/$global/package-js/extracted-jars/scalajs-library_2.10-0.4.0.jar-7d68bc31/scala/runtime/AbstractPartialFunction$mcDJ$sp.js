/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDJ$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDJ$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDJ$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDJ$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDJ$sp.prototype.apply__J__D = (function(x$2) {
  return this.apply$mcDJ$sp__J__D(x$2)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDJ$sp.prototype.apply$mcDJ$sp__J__D = (function(x) {
  return ScalaJS.uD(this.applyOrElse__O__Lscala_Function1__O(ScalaJS.bJ(x), ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction()))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDJ$sp.prototype.apply__O__O = (function(x) {
  return ScalaJS.bD(this.apply__J__D(ScalaJS.uJ(x)))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDJ$sp.prototype.init___ = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.prototype.init___.call(this);
  ScalaJS.impls.scala_Function1$mcDJ$sp$class__$init$__Lscala_Function1$mcDJ$sp__V(this);
  return this
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDJ$sp.prototype.apply__J__ = (function(x) {
  return ScalaJS.bD(this.apply__J__D(x))
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcDJ$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcDJ$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDJ$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcDJ$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcDJ$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcDJ$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcDJ$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcDJ$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcDJ$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcDJ$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcDJ$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcDJ$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcDJ$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcDJ$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcDJ$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcDJ$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcDJ$sp: 1,
  scala_Function1$mcDJ$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcDJ$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcDJ$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcDJ$sp.js.map
