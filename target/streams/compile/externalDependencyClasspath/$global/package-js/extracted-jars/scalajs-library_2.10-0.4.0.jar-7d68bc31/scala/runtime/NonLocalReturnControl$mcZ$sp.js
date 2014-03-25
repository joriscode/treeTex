/** @constructor */
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcZ$sp = (function() {
  ScalaJS.c.scala_runtime_NonLocalReturnControl.call(this);
  this.value$mcZ$sp$f = false
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcZ$sp.prototype = new ScalaJS.inheritable.scala_runtime_NonLocalReturnControl();
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcZ$sp.prototype.constructor = ScalaJS.c.scala_runtime_NonLocalReturnControl$mcZ$sp;
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcZ$sp.prototype.value$mcZ$sp__Z = (function() {
  return this.value$mcZ$sp$f
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcZ$sp.prototype.value__Z = (function() {
  return this.value$mcZ$sp__Z()
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcZ$sp.prototype.specInstance$__Z = (function() {
  return true
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcZ$sp.prototype.value__O = (function() {
  return ScalaJS.bZ(this.value__Z())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcZ$sp.prototype.init___O__Z = (function(key, value$mcZ$sp) {
  this.value$mcZ$sp$f = value$mcZ$sp;
  ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.init___O__O.call(this, key, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_NonLocalReturnControl$mcZ$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_NonLocalReturnControl$mcZ$sp.prototype = ScalaJS.c.scala_runtime_NonLocalReturnControl$mcZ$sp.prototype;
ScalaJS.is.scala_runtime_NonLocalReturnControl$mcZ$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_NonLocalReturnControl$mcZ$sp)))
});
ScalaJS.as.scala_runtime_NonLocalReturnControl$mcZ$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_NonLocalReturnControl$mcZ$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.NonLocalReturnControl$mcZ$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_NonLocalReturnControl$mcZ$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_NonLocalReturnControl$mcZ$sp)))
});
ScalaJS.asArrayOf.scala_runtime_NonLocalReturnControl$mcZ$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_NonLocalReturnControl$mcZ$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.NonLocalReturnControl$mcZ$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_NonLocalReturnControl$mcZ$sp = new ScalaJS.ClassTypeData({
  scala_runtime_NonLocalReturnControl$mcZ$sp: 0
}, false, "scala.runtime.NonLocalReturnControl$mcZ$sp", ScalaJS.data.scala_runtime_NonLocalReturnControl, {
  scala_runtime_NonLocalReturnControl$mcZ$sp: 1,
  scala_runtime_NonLocalReturnControl: 1,
  scala_util_control_ControlThrowable: 1,
  scala_util_control_NoStackTrace: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcZ$sp.prototype.$classData = ScalaJS.data.scala_runtime_NonLocalReturnControl$mcZ$sp;
//@ sourceMappingURL=NonLocalReturnControl$mcZ$sp.js.map
