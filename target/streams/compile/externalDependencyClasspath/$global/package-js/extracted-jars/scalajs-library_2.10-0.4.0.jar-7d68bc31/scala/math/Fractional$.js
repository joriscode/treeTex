/** @constructor */
ScalaJS.c.scala_math_Fractional$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_math_Fractional$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_math_Fractional$.prototype.constructor = ScalaJS.c.scala_math_Fractional$;
ScalaJS.c.scala_math_Fractional$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_math_Fractional()
});
/** @constructor */
ScalaJS.inheritable.scala_math_Fractional$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_Fractional$.prototype = ScalaJS.c.scala_math_Fractional$.prototype;
ScalaJS.is.scala_math_Fractional$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Fractional$)))
});
ScalaJS.as.scala_math_Fractional$ = (function(obj) {
  if ((ScalaJS.is.scala_math_Fractional$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Fractional")
  }
});
ScalaJS.isArrayOf.scala_math_Fractional$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Fractional$)))
});
ScalaJS.asArrayOf.scala_math_Fractional$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Fractional$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Fractional;", depth)
  }
});
ScalaJS.data.scala_math_Fractional$ = new ScalaJS.ClassTypeData({
  scala_math_Fractional$: 0
}, false, "scala.math.Fractional$", ScalaJS.data.java_lang_Object, {
  scala_math_Fractional$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_Fractional$.prototype.$classData = ScalaJS.data.scala_math_Fractional$;
ScalaJS.moduleInstances.scala_math_Fractional = undefined;
ScalaJS.modules.scala_math_Fractional = (function() {
  if ((!ScalaJS.moduleInstances.scala_math_Fractional)) {
    ScalaJS.moduleInstances.scala_math_Fractional = new ScalaJS.c.scala_math_Fractional$().init___()
  };
  return ScalaJS.moduleInstances.scala_math_Fractional
});
//@ sourceMappingURL=Fractional$.js.map
