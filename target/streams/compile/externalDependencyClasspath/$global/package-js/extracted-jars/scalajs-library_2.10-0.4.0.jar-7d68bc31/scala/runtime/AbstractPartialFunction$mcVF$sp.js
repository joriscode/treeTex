/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVF$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVF$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVF$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVF$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVF$sp.prototype.apply__F__V = (function(x$2) {
  this.apply$mcVF$sp__F__V(x$2)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVF$sp.prototype.apply$mcVF$sp__F__V = (function(x) {
  this.applyOrElse__O__Lscala_Function1__O(ScalaJS.bF(x), ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction())
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVF$sp.prototype.apply__O__O = (function(x) {
  this.apply__F__V(ScalaJS.uF(x));
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVF$sp.prototype.init___ = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.prototype.init___.call(this);
  ScalaJS.impls.scala_Function1$mcVF$sp$class__$init$__Lscala_Function1$mcVF$sp__V(this);
  return this
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVF$sp.prototype.apply__F__ = (function(x) {
  return ScalaJS.bV(this.apply__F__V(x))
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcVF$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcVF$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVF$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcVF$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcVF$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcVF$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcVF$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcVF$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcVF$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcVF$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcVF$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcVF$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcVF$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcVF$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcVF$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcVF$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcVF$sp: 1,
  scala_Function1$mcVF$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVF$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcVF$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcVF$sp.js.map
