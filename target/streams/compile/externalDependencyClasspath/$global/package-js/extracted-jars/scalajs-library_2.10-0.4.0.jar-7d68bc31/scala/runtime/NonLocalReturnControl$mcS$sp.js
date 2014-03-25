/** @constructor */
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcS$sp = (function() {
  ScalaJS.c.scala_runtime_NonLocalReturnControl.call(this);
  this.value$mcS$sp$f = 0
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcS$sp.prototype = new ScalaJS.inheritable.scala_runtime_NonLocalReturnControl();
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcS$sp.prototype.constructor = ScalaJS.c.scala_runtime_NonLocalReturnControl$mcS$sp;
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcS$sp.prototype.value$mcS$sp__S = (function() {
  return this.value$mcS$sp$f
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcS$sp.prototype.value__S = (function() {
  return this.value$mcS$sp__S()
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcS$sp.prototype.specInstance$__Z = (function() {
  return true
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcS$sp.prototype.value__O = (function() {
  return ScalaJS.bS(this.value__S())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcS$sp.prototype.init___O__S = (function(key, value$mcS$sp) {
  this.value$mcS$sp$f = value$mcS$sp;
  ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.init___O__O.call(this, key, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_NonLocalReturnControl$mcS$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_NonLocalReturnControl$mcS$sp.prototype = ScalaJS.c.scala_runtime_NonLocalReturnControl$mcS$sp.prototype;
ScalaJS.is.scala_runtime_NonLocalReturnControl$mcS$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_NonLocalReturnControl$mcS$sp)))
});
ScalaJS.as.scala_runtime_NonLocalReturnControl$mcS$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_NonLocalReturnControl$mcS$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.NonLocalReturnControl$mcS$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_NonLocalReturnControl$mcS$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_NonLocalReturnControl$mcS$sp)))
});
ScalaJS.asArrayOf.scala_runtime_NonLocalReturnControl$mcS$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_NonLocalReturnControl$mcS$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.NonLocalReturnControl$mcS$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_NonLocalReturnControl$mcS$sp = new ScalaJS.ClassTypeData({
  scala_runtime_NonLocalReturnControl$mcS$sp: 0
}, false, "scala.runtime.NonLocalReturnControl$mcS$sp", ScalaJS.data.scala_runtime_NonLocalReturnControl, {
  scala_runtime_NonLocalReturnControl$mcS$sp: 1,
  scala_runtime_NonLocalReturnControl: 1,
  scala_util_control_ControlThrowable: 1,
  scala_util_control_NoStackTrace: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcS$sp.prototype.$classData = ScalaJS.data.scala_runtime_NonLocalReturnControl$mcS$sp;
//@ sourceMappingURL=NonLocalReturnControl$mcS$sp.js.map
