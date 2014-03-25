/** @constructor */
ScalaJS.c.scala_math_Integral$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_math_Integral$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_math_Integral$.prototype.constructor = ScalaJS.c.scala_math_Integral$;
ScalaJS.c.scala_math_Integral$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_math_Integral()
});
/** @constructor */
ScalaJS.inheritable.scala_math_Integral$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_Integral$.prototype = ScalaJS.c.scala_math_Integral$.prototype;
ScalaJS.is.scala_math_Integral$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Integral$)))
});
ScalaJS.as.scala_math_Integral$ = (function(obj) {
  if ((ScalaJS.is.scala_math_Integral$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Integral")
  }
});
ScalaJS.isArrayOf.scala_math_Integral$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Integral$)))
});
ScalaJS.asArrayOf.scala_math_Integral$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Integral$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Integral;", depth)
  }
});
ScalaJS.data.scala_math_Integral$ = new ScalaJS.ClassTypeData({
  scala_math_Integral$: 0
}, false, "scala.math.Integral$", ScalaJS.data.java_lang_Object, {
  scala_math_Integral$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_Integral$.prototype.$classData = ScalaJS.data.scala_math_Integral$;
ScalaJS.moduleInstances.scala_math_Integral = undefined;
ScalaJS.modules.scala_math_Integral = (function() {
  if ((!ScalaJS.moduleInstances.scala_math_Integral)) {
    ScalaJS.moduleInstances.scala_math_Integral = new ScalaJS.c.scala_math_Integral$().init___()
  };
  return ScalaJS.moduleInstances.scala_math_Integral
});
//@ sourceMappingURL=Integral$.js.map
