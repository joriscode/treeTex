/** @constructor */
ScalaJS.c.scala_util_hashing_Hashing$Default = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_hashing_Hashing$Default.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_hashing_Hashing$Default.prototype.constructor = ScalaJS.c.scala_util_hashing_Hashing$Default;
ScalaJS.c.scala_util_hashing_Hashing$Default.prototype.hash__O__I = (function(x) {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().hash__O__I(x)
});
ScalaJS.c.scala_util_hashing_Hashing$Default.prototype.hash__O__ = (function(x) {
  return ScalaJS.bI(this.hash__O__I(x))
});
/** @constructor */
ScalaJS.inheritable.scala_util_hashing_Hashing$Default = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_hashing_Hashing$Default.prototype = ScalaJS.c.scala_util_hashing_Hashing$Default.prototype;
ScalaJS.is.scala_util_hashing_Hashing$Default = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_hashing_Hashing$Default)))
});
ScalaJS.as.scala_util_hashing_Hashing$Default = (function(obj) {
  if ((ScalaJS.is.scala_util_hashing_Hashing$Default(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.hashing.Hashing$Default")
  }
});
ScalaJS.isArrayOf.scala_util_hashing_Hashing$Default = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_hashing_Hashing$Default)))
});
ScalaJS.asArrayOf.scala_util_hashing_Hashing$Default = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_hashing_Hashing$Default(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.hashing.Hashing$Default;", depth)
  }
});
ScalaJS.data.scala_util_hashing_Hashing$Default = new ScalaJS.ClassTypeData({
  scala_util_hashing_Hashing$Default: 0
}, false, "scala.util.hashing.Hashing$Default", ScalaJS.data.java_lang_Object, {
  scala_util_hashing_Hashing$Default: 1,
  scala_util_hashing_Hashing: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_hashing_Hashing$Default.prototype.$classData = ScalaJS.data.scala_util_hashing_Hashing$Default;
//@ sourceMappingURL=Hashing$Default.js.map
