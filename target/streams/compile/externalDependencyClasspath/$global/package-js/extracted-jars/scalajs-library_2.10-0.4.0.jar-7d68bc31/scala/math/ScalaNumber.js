/** @constructor */
ScalaJS.c.scala_math_ScalaNumber = (function() {
  ScalaJS.c.java_lang_Number.call(this)
});
ScalaJS.c.scala_math_ScalaNumber.prototype = new ScalaJS.inheritable.java_lang_Number();
ScalaJS.c.scala_math_ScalaNumber.prototype.constructor = ScalaJS.c.scala_math_ScalaNumber;
ScalaJS.c.scala_math_ScalaNumber.prototype.underlying__ = (function() {
  return this.underlying__O()
});
ScalaJS.c.scala_math_ScalaNumber.prototype.isWhole__ = (function() {
  return ScalaJS.bZ(this.isWhole__Z())
});
/** @constructor */
ScalaJS.inheritable.scala_math_ScalaNumber = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_ScalaNumber.prototype = ScalaJS.c.scala_math_ScalaNumber.prototype;
ScalaJS.is.scala_math_ScalaNumber = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_ScalaNumber)))
});
ScalaJS.as.scala_math_ScalaNumber = (function(obj) {
  if ((ScalaJS.is.scala_math_ScalaNumber(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.ScalaNumber")
  }
});
ScalaJS.isArrayOf.scala_math_ScalaNumber = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_ScalaNumber)))
});
ScalaJS.asArrayOf.scala_math_ScalaNumber = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_ScalaNumber(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth)
  }
});
ScalaJS.data.scala_math_ScalaNumber = new ScalaJS.ClassTypeData({
  scala_math_ScalaNumber: 0
}, false, "scala.math.ScalaNumber", ScalaJS.data.java_lang_Number, {
  scala_math_ScalaNumber: 1,
  java_lang_Number: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_ScalaNumber.prototype.$classData = ScalaJS.data.scala_math_ScalaNumber;
//@ sourceMappingURL=ScalaNumber.js.map
