/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVI$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVI$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVI$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVI$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVI$sp.prototype.apply__I__V = (function(x$2) {
  this.apply$mcVI$sp__I__V(x$2)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVI$sp.prototype.apply$mcVI$sp__I__V = (function(x) {
  this.applyOrElse__O__Lscala_Function1__O(ScalaJS.bI(x), ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction())
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVI$sp.prototype.apply__O__O = (function(x) {
  this.apply__I__V(ScalaJS.uI(x));
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVI$sp.prototype.init___ = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.prototype.init___.call(this);
  ScalaJS.impls.scala_Function1$mcVI$sp$class__$init$__Lscala_Function1$mcVI$sp__V(this);
  return this
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVI$sp.prototype.apply__I__ = (function(x) {
  return ScalaJS.bV(this.apply__I__V(x))
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcVI$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcVI$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVI$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcVI$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcVI$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcVI$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcVI$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcVI$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcVI$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcVI$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcVI$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcVI$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcVI$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcVI$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcVI$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcVI$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcVI$sp: 1,
  scala_Function1$mcVI$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVI$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcVI$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcVI$sp.js.map
