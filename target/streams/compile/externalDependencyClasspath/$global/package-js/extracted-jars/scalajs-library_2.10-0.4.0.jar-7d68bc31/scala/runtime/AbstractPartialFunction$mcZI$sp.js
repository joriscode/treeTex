/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZI$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZI$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZI$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZI$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZI$sp.prototype.apply__I__Z = (function(x$2) {
  return this.apply$mcZI$sp__I__Z(x$2)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZI$sp.prototype.apply$mcZI$sp__I__Z = (function(x) {
  return ScalaJS.uZ(this.applyOrElse__O__Lscala_Function1__O(ScalaJS.bI(x), ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction()))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZI$sp.prototype.apply__O__O = (function(x) {
  return ScalaJS.bZ(this.apply__I__Z(ScalaJS.uI(x)))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZI$sp.prototype.init___ = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.prototype.init___.call(this);
  ScalaJS.impls.scala_Function1$mcZI$sp$class__$init$__Lscala_Function1$mcZI$sp__V(this);
  return this
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZI$sp.prototype.apply__I__ = (function(x) {
  return ScalaJS.bZ(this.apply__I__Z(x))
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcZI$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcZI$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZI$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcZI$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcZI$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcZI$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcZI$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcZI$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcZI$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcZI$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcZI$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcZI$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcZI$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcZI$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcZI$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcZI$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcZI$sp: 1,
  scala_Function1$mcZI$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZI$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcZI$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcZI$sp.js.map
