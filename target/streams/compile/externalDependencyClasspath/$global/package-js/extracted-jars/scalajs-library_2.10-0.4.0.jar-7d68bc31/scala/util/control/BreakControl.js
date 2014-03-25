/** @constructor */
ScalaJS.c.scala_util_control_BreakControl = (function() {
  ScalaJS.c.java_lang_Throwable.call(this)
});
ScalaJS.c.scala_util_control_BreakControl.prototype = new ScalaJS.inheritable.java_lang_Throwable();
ScalaJS.c.scala_util_control_BreakControl.prototype.constructor = ScalaJS.c.scala_util_control_BreakControl;
ScalaJS.c.scala_util_control_BreakControl.prototype.scala$util$control$NoStackTrace$$super$fillInStackTrace__Ljava_lang_Throwable = (function() {
  return ScalaJS.c.java_lang_Throwable.prototype.fillInStackTrace__Ljava_lang_Throwable.call(this)
});
ScalaJS.c.scala_util_control_BreakControl.prototype.fillInStackTrace__Ljava_lang_Throwable = (function() {
  return ScalaJS.impls.scala_util_control_NoStackTrace$class__fillInStackTrace__Lscala_util_control_NoStackTrace__Ljava_lang_Throwable(this)
});
ScalaJS.c.scala_util_control_BreakControl.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Throwable.prototype.init___.call(this);
  ScalaJS.impls.scala_util_control_NoStackTrace$class__$init$__Lscala_util_control_NoStackTrace__V(this);
  return this
});
ScalaJS.c.scala_util_control_BreakControl.prototype.scala$util$control$NoStackTrace$$super$fillInStackTrace__ = (function() {
  return this.scala$util$control$NoStackTrace$$super$fillInStackTrace__Ljava_lang_Throwable()
});
/** @constructor */
ScalaJS.inheritable.scala_util_control_BreakControl = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_control_BreakControl.prototype = ScalaJS.c.scala_util_control_BreakControl.prototype;
ScalaJS.is.scala_util_control_BreakControl = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_control_BreakControl)))
});
ScalaJS.as.scala_util_control_BreakControl = (function(obj) {
  if ((ScalaJS.is.scala_util_control_BreakControl(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.control.BreakControl")
  }
});
ScalaJS.isArrayOf.scala_util_control_BreakControl = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_control_BreakControl)))
});
ScalaJS.asArrayOf.scala_util_control_BreakControl = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_control_BreakControl(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.control.BreakControl;", depth)
  }
});
ScalaJS.data.scala_util_control_BreakControl = new ScalaJS.ClassTypeData({
  scala_util_control_BreakControl: 0
}, false, "scala.util.control.BreakControl", ScalaJS.data.java_lang_Throwable, {
  scala_util_control_BreakControl: 1,
  scala_util_control_ControlThrowable: 1,
  scala_util_control_NoStackTrace: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_control_BreakControl.prototype.$classData = ScalaJS.data.scala_util_control_BreakControl;
//@ sourceMappingURL=BreakControl.js.map
