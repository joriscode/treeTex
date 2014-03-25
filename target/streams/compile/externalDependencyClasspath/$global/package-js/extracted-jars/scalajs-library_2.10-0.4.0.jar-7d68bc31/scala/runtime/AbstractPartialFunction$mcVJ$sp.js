/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVJ$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVJ$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVJ$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVJ$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVJ$sp.prototype.apply__J__V = (function(x$2) {
  this.apply$mcVJ$sp__J__V(x$2)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVJ$sp.prototype.apply$mcVJ$sp__J__V = (function(x) {
  this.applyOrElse__O__Lscala_Function1__O(ScalaJS.bJ(x), ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction())
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVJ$sp.prototype.apply__O__O = (function(x) {
  this.apply__J__V(ScalaJS.uJ(x));
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVJ$sp.prototype.init___ = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.prototype.init___.call(this);
  ScalaJS.impls.scala_Function1$mcVJ$sp$class__$init$__Lscala_Function1$mcVJ$sp__V(this);
  return this
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVJ$sp.prototype.apply__J__ = (function(x) {
  return ScalaJS.bV(this.apply__J__V(x))
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcVJ$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcVJ$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVJ$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcVJ$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcVJ$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcVJ$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcVJ$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcVJ$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcVJ$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcVJ$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcVJ$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcVJ$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcVJ$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcVJ$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcVJ$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcVJ$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcVJ$sp: 1,
  scala_Function1$mcVJ$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVJ$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcVJ$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcVJ$sp.js.map
