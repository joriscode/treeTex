/** @constructor */
ScalaJS.c.scala_util_control_NoStackTrace$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$undnoSuppression$1 = false
});
ScalaJS.c.scala_util_control_NoStackTrace$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_control_NoStackTrace$.prototype.constructor = ScalaJS.c.scala_util_control_NoStackTrace$;
ScalaJS.c.scala_util_control_NoStackTrace$.prototype.noSuppression__Z = (function() {
  return this.$$undnoSuppression__p1__Z()
});
ScalaJS.c.scala_util_control_NoStackTrace$.prototype.$$undnoSuppression__p1__Z = (function() {
  return this.$$undnoSuppression$1
});
ScalaJS.c.scala_util_control_NoStackTrace$.prototype.$$undnoSuppression$und$eq__p1__Z__V = (function(x$1) {
  this.$$undnoSuppression$1 = x$1
});
ScalaJS.c.scala_util_control_NoStackTrace$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_util_control_NoStackTrace()
});
ScalaJS.c.scala_util_control_NoStackTrace$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_util_control_NoStackTrace = this;
  this.$$undnoSuppression$1 = false;
  return this
});
ScalaJS.c.scala_util_control_NoStackTrace$.prototype.noSuppression__ = (function() {
  return ScalaJS.bZ(this.noSuppression__Z())
});
/** @constructor */
ScalaJS.inheritable.scala_util_control_NoStackTrace$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_control_NoStackTrace$.prototype = ScalaJS.c.scala_util_control_NoStackTrace$.prototype;
ScalaJS.is.scala_util_control_NoStackTrace$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_control_NoStackTrace$)))
});
ScalaJS.as.scala_util_control_NoStackTrace$ = (function(obj) {
  if ((ScalaJS.is.scala_util_control_NoStackTrace$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.control.NoStackTrace")
  }
});
ScalaJS.isArrayOf.scala_util_control_NoStackTrace$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_control_NoStackTrace$)))
});
ScalaJS.asArrayOf.scala_util_control_NoStackTrace$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_control_NoStackTrace$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.control.NoStackTrace;", depth)
  }
});
ScalaJS.data.scala_util_control_NoStackTrace$ = new ScalaJS.ClassTypeData({
  scala_util_control_NoStackTrace$: 0
}, false, "scala.util.control.NoStackTrace$", ScalaJS.data.java_lang_Object, {
  scala_util_control_NoStackTrace$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_control_NoStackTrace$.prototype.$classData = ScalaJS.data.scala_util_control_NoStackTrace$;
ScalaJS.moduleInstances.scala_util_control_NoStackTrace = undefined;
ScalaJS.modules.scala_util_control_NoStackTrace = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_control_NoStackTrace)) {
    ScalaJS.moduleInstances.scala_util_control_NoStackTrace = new ScalaJS.c.scala_util_control_NoStackTrace$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_control_NoStackTrace
});
//@ sourceMappingURL=NoStackTrace$.js.map
