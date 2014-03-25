/** @constructor */
ScalaJS.c.scala_math_Numeric$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_math_Numeric$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_math_Numeric$.prototype.constructor = ScalaJS.c.scala_math_Numeric$;
ScalaJS.c.scala_math_Numeric$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_math_Numeric()
});
/** @constructor */
ScalaJS.inheritable.scala_math_Numeric$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_Numeric$.prototype = ScalaJS.c.scala_math_Numeric$.prototype;
ScalaJS.is.scala_math_Numeric$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Numeric$)))
});
ScalaJS.as.scala_math_Numeric$ = (function(obj) {
  if ((ScalaJS.is.scala_math_Numeric$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Numeric")
  }
});
ScalaJS.isArrayOf.scala_math_Numeric$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Numeric$)))
});
ScalaJS.asArrayOf.scala_math_Numeric$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Numeric$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Numeric;", depth)
  }
});
ScalaJS.data.scala_math_Numeric$ = new ScalaJS.ClassTypeData({
  scala_math_Numeric$: 0
}, false, "scala.math.Numeric$", ScalaJS.data.java_lang_Object, {
  scala_math_Numeric$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_Numeric$.prototype.$classData = ScalaJS.data.scala_math_Numeric$;
ScalaJS.moduleInstances.scala_math_Numeric = undefined;
ScalaJS.modules.scala_math_Numeric = (function() {
  if ((!ScalaJS.moduleInstances.scala_math_Numeric)) {
    ScalaJS.moduleInstances.scala_math_Numeric = new ScalaJS.c.scala_math_Numeric$().init___()
  };
  return ScalaJS.moduleInstances.scala_math_Numeric
});
//@ sourceMappingURL=Numeric$.js.map
