/** @constructor */
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcI$sp = (function() {
  ScalaJS.c.scala_runtime_NonLocalReturnControl.call(this);
  this.value$mcI$sp$f = 0
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcI$sp.prototype = new ScalaJS.inheritable.scala_runtime_NonLocalReturnControl();
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcI$sp.prototype.constructor = ScalaJS.c.scala_runtime_NonLocalReturnControl$mcI$sp;
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcI$sp.prototype.value$mcI$sp__I = (function() {
  return this.value$mcI$sp$f
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcI$sp.prototype.value__I = (function() {
  return this.value$mcI$sp__I()
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcI$sp.prototype.specInstance$__Z = (function() {
  return true
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcI$sp.prototype.value__O = (function() {
  return ScalaJS.bI(this.value__I())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcI$sp.prototype.init___O__I = (function(key, value$mcI$sp) {
  this.value$mcI$sp$f = value$mcI$sp;
  ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.init___O__O.call(this, key, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_NonLocalReturnControl$mcI$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_NonLocalReturnControl$mcI$sp.prototype = ScalaJS.c.scala_runtime_NonLocalReturnControl$mcI$sp.prototype;
ScalaJS.is.scala_runtime_NonLocalReturnControl$mcI$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_NonLocalReturnControl$mcI$sp)))
});
ScalaJS.as.scala_runtime_NonLocalReturnControl$mcI$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_NonLocalReturnControl$mcI$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.NonLocalReturnControl$mcI$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_NonLocalReturnControl$mcI$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_NonLocalReturnControl$mcI$sp)))
});
ScalaJS.asArrayOf.scala_runtime_NonLocalReturnControl$mcI$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_NonLocalReturnControl$mcI$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.NonLocalReturnControl$mcI$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_NonLocalReturnControl$mcI$sp = new ScalaJS.ClassTypeData({
  scala_runtime_NonLocalReturnControl$mcI$sp: 0
}, false, "scala.runtime.NonLocalReturnControl$mcI$sp", ScalaJS.data.scala_runtime_NonLocalReturnControl, {
  scala_runtime_NonLocalReturnControl$mcI$sp: 1,
  scala_runtime_NonLocalReturnControl: 1,
  scala_util_control_ControlThrowable: 1,
  scala_util_control_NoStackTrace: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcI$sp.prototype.$classData = ScalaJS.data.scala_runtime_NonLocalReturnControl$mcI$sp;
//@ sourceMappingURL=NonLocalReturnControl$mcI$sp.js.map
