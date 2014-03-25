/** @constructor */
ScalaJS.c.scala_AnyVal = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_AnyVal.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_AnyVal.prototype.constructor = ScalaJS.c.scala_AnyVal;
ScalaJS.c.scala_AnyVal.prototype.getClass__Ljava_lang_Class = (function() {
  return null
});
/** @constructor */
ScalaJS.inheritable.scala_AnyVal = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_AnyVal.prototype = ScalaJS.c.scala_AnyVal.prototype;
ScalaJS.is.scala_AnyVal = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_AnyVal)))
});
ScalaJS.as.scala_AnyVal = (function(obj) {
  if ((ScalaJS.is.scala_AnyVal(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.AnyVal")
  }
});
ScalaJS.isArrayOf.scala_AnyVal = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_AnyVal)))
});
ScalaJS.asArrayOf.scala_AnyVal = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_AnyVal(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.AnyVal;", depth)
  }
});
ScalaJS.data.scala_AnyVal = new ScalaJS.ClassTypeData({
  scala_AnyVal: 0
}, false, "scala.AnyVal", ScalaJS.data.java_lang_Object, {
  scala_AnyVal: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_AnyVal.prototype.$classData = ScalaJS.data.scala_AnyVal;
//@ sourceMappingURL=AnyVal.js.map
