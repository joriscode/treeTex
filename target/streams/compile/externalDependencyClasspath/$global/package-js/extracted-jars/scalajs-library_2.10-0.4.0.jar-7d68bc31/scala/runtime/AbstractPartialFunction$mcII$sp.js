/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcII$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcII$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcII$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcII$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcII$sp.prototype.apply__I__I = (function(x$2) {
  return this.apply$mcII$sp__I__I(x$2)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcII$sp.prototype.apply$mcII$sp__I__I = (function(x) {
  return ScalaJS.uI(this.applyOrElse__O__Lscala_Function1__O(ScalaJS.bI(x), ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction()))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcII$sp.prototype.apply__O__O = (function(x) {
  return ScalaJS.bI(this.apply__I__I(ScalaJS.uI(x)))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcII$sp.prototype.init___ = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.prototype.init___.call(this);
  ScalaJS.impls.scala_Function1$mcII$sp$class__$init$__Lscala_Function1$mcII$sp__V(this);
  return this
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcII$sp.prototype.apply__I__ = (function(x) {
  return ScalaJS.bI(this.apply__I__I(x))
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcII$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcII$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcII$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcII$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcII$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcII$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcII$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcII$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcII$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcII$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcII$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcII$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcII$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcII$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcII$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcII$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcII$sp: 1,
  scala_Function1$mcII$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcII$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcII$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcII$sp.js.map
