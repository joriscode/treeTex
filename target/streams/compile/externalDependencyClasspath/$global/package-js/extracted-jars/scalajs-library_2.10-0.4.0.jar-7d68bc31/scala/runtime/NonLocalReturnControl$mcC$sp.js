/** @constructor */
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcC$sp = (function() {
  ScalaJS.c.scala_runtime_NonLocalReturnControl.call(this);
  this.value$mcC$sp$f = 0
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcC$sp.prototype = new ScalaJS.inheritable.scala_runtime_NonLocalReturnControl();
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcC$sp.prototype.constructor = ScalaJS.c.scala_runtime_NonLocalReturnControl$mcC$sp;
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcC$sp.prototype.value$mcC$sp__C = (function() {
  return this.value$mcC$sp$f
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcC$sp.prototype.value__C = (function() {
  return this.value$mcC$sp__C()
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcC$sp.prototype.specInstance$__Z = (function() {
  return true
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcC$sp.prototype.value__O = (function() {
  return ScalaJS.bC(this.value__C())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcC$sp.prototype.init___O__C = (function(key, value$mcC$sp) {
  this.value$mcC$sp$f = value$mcC$sp;
  ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.init___O__O.call(this, key, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_NonLocalReturnControl$mcC$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_NonLocalReturnControl$mcC$sp.prototype = ScalaJS.c.scala_runtime_NonLocalReturnControl$mcC$sp.prototype;
ScalaJS.is.scala_runtime_NonLocalReturnControl$mcC$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_NonLocalReturnControl$mcC$sp)))
});
ScalaJS.as.scala_runtime_NonLocalReturnControl$mcC$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_NonLocalReturnControl$mcC$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.NonLocalReturnControl$mcC$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_NonLocalReturnControl$mcC$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_NonLocalReturnControl$mcC$sp)))
});
ScalaJS.asArrayOf.scala_runtime_NonLocalReturnControl$mcC$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_NonLocalReturnControl$mcC$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.NonLocalReturnControl$mcC$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_NonLocalReturnControl$mcC$sp = new ScalaJS.ClassTypeData({
  scala_runtime_NonLocalReturnControl$mcC$sp: 0
}, false, "scala.runtime.NonLocalReturnControl$mcC$sp", ScalaJS.data.scala_runtime_NonLocalReturnControl, {
  scala_runtime_NonLocalReturnControl$mcC$sp: 1,
  scala_runtime_NonLocalReturnControl: 1,
  scala_util_control_ControlThrowable: 1,
  scala_util_control_NoStackTrace: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcC$sp.prototype.$classData = ScalaJS.data.scala_runtime_NonLocalReturnControl$mcC$sp;
//@ sourceMappingURL=NonLocalReturnControl$mcC$sp.js.map
