/** @constructor */
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFL$sp = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFL$sp.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFL$sp.prototype.constructor = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFL$sp;
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFL$sp.prototype.apply__O__F = (function(x$2) {
  return this.apply$mcFL$sp__O__F(x$2)
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFL$sp.prototype.apply$mcFL$sp__O__F = (function(x) {
  return ScalaJS.uF(this.applyOrElse__O__Lscala_Function1__O(x, ScalaJS.modules.scala_PartialFunction().empty__Lscala_PartialFunction()))
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFL$sp.prototype.apply__O__O = (function(x) {
  return ScalaJS.bF(this.apply__O__F(x))
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcFL$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcFL$sp.prototype = ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFL$sp.prototype;
ScalaJS.is.scala_runtime_AbstractPartialFunction$mcFL$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractPartialFunction$mcFL$sp)))
});
ScalaJS.as.scala_runtime_AbstractPartialFunction$mcFL$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractPartialFunction$mcFL$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractPartialFunction$mcFL$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcFL$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractPartialFunction$mcFL$sp)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractPartialFunction$mcFL$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractPartialFunction$mcFL$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractPartialFunction$mcFL$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractPartialFunction$mcFL$sp = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractPartialFunction$mcFL$sp: 0
}, false, "scala.runtime.AbstractPartialFunction$mcFL$sp", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_runtime_AbstractPartialFunction$mcFL$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractPartialFunction$mcFL$sp.prototype.$classData = ScalaJS.data.scala_runtime_AbstractPartialFunction$mcFL$sp;
//@ sourceMappingURL=AbstractPartialFunction$mcFL$sp.js.map
