/** @constructor */
ScalaJS.c.scala_util_control_Exception$By = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.f$1 = null
});
ScalaJS.c.scala_util_control_Exception$By.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_control_Exception$By.prototype.constructor = ScalaJS.c.scala_util_control_Exception$By;
ScalaJS.c.scala_util_control_Exception$By.prototype.by__O__O = (function(x) {
  return this.f$1.apply__O__O(x)
});
ScalaJS.c.scala_util_control_Exception$By.prototype.init___Lscala_Function1 = (function(f) {
  this.f$1 = f;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_util_control_Exception$By.prototype.by__O__ = (function(x) {
  return this.by__O__O(x)
});
/** @constructor */
ScalaJS.inheritable.scala_util_control_Exception$By = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_control_Exception$By.prototype = ScalaJS.c.scala_util_control_Exception$By.prototype;
ScalaJS.is.scala_util_control_Exception$By = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_control_Exception$By)))
});
ScalaJS.as.scala_util_control_Exception$By = (function(obj) {
  if ((ScalaJS.is.scala_util_control_Exception$By(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.control.Exception$By")
  }
});
ScalaJS.isArrayOf.scala_util_control_Exception$By = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_control_Exception$By)))
});
ScalaJS.asArrayOf.scala_util_control_Exception$By = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_control_Exception$By(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.control.Exception$By;", depth)
  }
});
ScalaJS.data.scala_util_control_Exception$By = new ScalaJS.ClassTypeData({
  scala_util_control_Exception$By: 0
}, false, "scala.util.control.Exception$By", ScalaJS.data.java_lang_Object, {
  scala_util_control_Exception$By: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_control_Exception$By.prototype.$classData = ScalaJS.data.scala_util_control_Exception$By;
//@ sourceMappingURL=Exception$By.js.map
