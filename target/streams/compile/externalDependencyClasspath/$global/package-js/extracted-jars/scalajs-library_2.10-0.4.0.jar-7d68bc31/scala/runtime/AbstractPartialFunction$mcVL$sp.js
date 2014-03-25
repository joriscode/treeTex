/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVL$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVL$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVL$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVL$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVL$sp.prototype.apply__O__V = (function(x$2) {
  this.apply$mcVL$sp__O__V(x$2)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVL$sp.prototype.apply$mcVL$sp__O__V = (function(x) {
  this.applyOrElse__O__Lscala_Function1__O(x, ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction())
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVL$sp.prototype.apply__O__O = (function(x) {
  this.apply__O__V(x);
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcVL$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcVL$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVL$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcVL$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcVL$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcVL$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcVL$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcVL$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcVL$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcVL$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcVL$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcVL$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcVL$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcVL$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcVL$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcVL$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcVL$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcVL$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcVL$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcVL$sp.js.map
