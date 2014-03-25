/** @constructor */
ScalaJS.c.scala_runtime_NonLocalReturnControl = (function() {
  ScalaJS.c.java_lang_Throwable.call(this);
  this.key$2 = null;
  this.value$f = null
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype = new ScalaJS.inheritable.java_lang_Throwable();
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.constructor = ScalaJS.c.scala_runtime_NonLocalReturnControl;
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.scala$util$control$NoStackTrace$$super$fillInStackTrace__Ljava_lang_Throwable = (function() {
  return ScalaJS.c.java_lang_Throwable.prototype.fillInStackTrace__Ljava_lang_Throwable.call(this)
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.key__O = (function() {
  return this.key$2
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.value__O = (function() {
  return this.value$f
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.fillInStackTrace__Ljava_lang_Throwable = (function() {
  return this
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.value$mcZ$sp__Z = (function() {
  return ScalaJS.uZ(this.value__O())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.value$mcB$sp__B = (function() {
  return ScalaJS.uB(this.value__O())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.value$mcC$sp__C = (function() {
  return ScalaJS.uC(this.value__O())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.value$mcD$sp__D = (function() {
  return ScalaJS.uD(this.value__O())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.value$mcF$sp__F = (function() {
  return ScalaJS.uF(this.value__O())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.value$mcI$sp__I = (function() {
  return ScalaJS.uI(this.value__O())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.value$mcJ$sp__J = (function() {
  return ScalaJS.uJ(this.value__O())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.value$mcS$sp__S = (function() {
  return ScalaJS.uS(this.value__O())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.value$mcV$sp__V = (function() {
  this.value__O()
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.specInstance$__Z = (function() {
  return false
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.init___O__O = (function(key, value) {
  this.key$2 = key;
  this.value$f = value;
  ScalaJS.c.java_lang_Throwable.prototype.init___.call(this);
  ScalaJS.impls.scala_util_control_NoStackTrace$class__$init$__Lscala_util_control_NoStackTrace__V(this);
  return this
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.scala$util$control$NoStackTrace$$super$fillInStackTrace__ = (function() {
  return this.scala$util$control$NoStackTrace$$super$fillInStackTrace__Ljava_lang_Throwable()
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.specInstance$__ = (function() {
  return ScalaJS.bZ(this.specInstance$__Z())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.value$mcV$sp__ = (function() {
  return ScalaJS.bV(this.value$mcV$sp__V())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.value$mcS$sp__ = (function() {
  return ScalaJS.bS(this.value$mcS$sp__S())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.value$mcJ$sp__ = (function() {
  return ScalaJS.bJ(this.value$mcJ$sp__J())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.value$mcI$sp__ = (function() {
  return ScalaJS.bI(this.value$mcI$sp__I())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.value$mcF$sp__ = (function() {
  return ScalaJS.bF(this.value$mcF$sp__F())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.value$mcD$sp__ = (function() {
  return ScalaJS.bD(this.value$mcD$sp__D())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.value$mcC$sp__ = (function() {
  return ScalaJS.bC(this.value$mcC$sp__C())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.value$mcB$sp__ = (function() {
  return ScalaJS.bB(this.value$mcB$sp__B())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.value$mcZ$sp__ = (function() {
  return ScalaJS.bZ(this.value$mcZ$sp__Z())
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.value__ = (function() {
  return this.value__O()
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.key__ = (function() {
  return this.key__O()
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_NonLocalReturnControl = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_NonLocalReturnControl.prototype = ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype;
ScalaJS.is.scala_runtime_NonLocalReturnControl = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_NonLocalReturnControl)))
});
ScalaJS.as.scala_runtime_NonLocalReturnControl = (function(obj) {
  if ((ScalaJS.is.scala_runtime_NonLocalReturnControl(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.NonLocalReturnControl")
  }
});
ScalaJS.isArrayOf.scala_runtime_NonLocalReturnControl = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_NonLocalReturnControl)))
});
ScalaJS.asArrayOf.scala_runtime_NonLocalReturnControl = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_NonLocalReturnControl(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.NonLocalReturnControl;", depth)
  }
});
ScalaJS.data.scala_runtime_NonLocalReturnControl = new ScalaJS.ClassTypeData({
  scala_runtime_NonLocalReturnControl: 0
}, false, "scala.runtime.NonLocalReturnControl", ScalaJS.data.java_lang_Throwable, {
  scala_runtime_NonLocalReturnControl: 1,
  scala_util_control_ControlThrowable: 1,
  scala_util_control_NoStackTrace: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_NonLocalReturnControl.prototype.$classData = ScalaJS.data.scala_runtime_NonLocalReturnControl;
//@ sourceMappingURL=NonLocalReturnControl.js.map
