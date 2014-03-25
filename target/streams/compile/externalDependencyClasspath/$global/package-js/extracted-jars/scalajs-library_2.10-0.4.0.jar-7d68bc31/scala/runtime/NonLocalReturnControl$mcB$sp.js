/** @constructor */
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcB$sp = (function() {
  ScalaJS.c.scala_runtime_NonLocalReturnControl.call(this);
  this.value$mcB$sp$f = 0
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcB$sp.prototype = new ScalaJS.inheritable.scala_runtime_NonLocalReturnControl();
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcB$sp.prototype.constructor = ScalaJS.c.scala_runtime_NonLocalReturnControl$mcB$sp;
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcB$sp.prototype.value$mcB$sp__B = (function() {
  return this.value$mcB$sp$f
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcB$sp.prototype.value__B = (function() {
  return this.value$mcB$sp__B()
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcB$sp.prototype.specInstance$__Z = (function() {
  return true
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcB$sp.prototype.value__O = (function() {
  return ScalaJS.bB(this.value__B())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcB$sp.prototype.init___O__B = (function(key, value$mcB$sp) {
  this.value$mcB$sp$f = value$mcB$sp;
  ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.init___O__O.call(this, key, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_NonLocalReturnControl$mcB$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_NonLocalReturnControl$mcB$sp.prototype = ScalaJS.c.scala_runtime_NonLocalReturnControl$mcB$sp.prototype;
ScalaJS.is.scala_runtime_NonLocalReturnControl$mcB$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_NonLocalReturnControl$mcB$sp)))
});
ScalaJS.as.scala_runtime_NonLocalReturnControl$mcB$sp = (function(obj) {
  if ((ScalaJS.is.scala_runtime_NonLocalReturnControl$mcB$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.NonLocalReturnControl$mcB$sp")
  }
});
ScalaJS.isArrayOf.scala_runtime_NonLocalReturnControl$mcB$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_NonLocalReturnControl$mcB$sp)))
});
ScalaJS.asArrayOf.scala_runtime_NonLocalReturnControl$mcB$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_NonLocalReturnControl$mcB$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.NonLocalReturnControl$mcB$sp;", depth)
  }
});
ScalaJS.data.scala_runtime_NonLocalReturnControl$mcB$sp = new ScalaJS.ClassTypeData({
  scala_runtime_NonLocalReturnControl$mcB$sp: 0
}, false, "scala.runtime.NonLocalReturnControl$mcB$sp", ScalaJS.data.scala_runtime_NonLocalReturnControl, {
  scala_runtime_NonLocalReturnControl$mcB$sp: 1,
  scala_runtime_NonLocalReturnControl: 1,
  scala_util_control_ControlThrowable: 1,
  scala_util_control_NoStackTrace: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_NonLocalReturnControl$mcB$sp.prototype.$classData = ScalaJS.data.scala_runtime_NonLocalReturnControl$mcB$sp;
//@ sourceMappingURL=NonLocalReturnControl$mcB$sp.js.map
