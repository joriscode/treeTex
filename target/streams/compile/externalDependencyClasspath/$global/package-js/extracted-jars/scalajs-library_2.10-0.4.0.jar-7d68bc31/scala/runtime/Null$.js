/** @constructor */
ScalaJS.c.scala_runtime_Null$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_Null$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_Null$.prototype.constructor = ScalaJS.c.scala_runtime_Null$;
/** @constructor */
ScalaJS.inheritable.scala_runtime_Null$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_Null$.prototype = ScalaJS.c.scala_runtime_Null$.prototype;
ScalaJS.is.scala_runtime_Null$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_Null$)))
});
ScalaJS.as.scala_runtime_Null$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_Null$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.Null$")
  }
});
ScalaJS.isArrayOf.scala_runtime_Null$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_Null$)))
});
ScalaJS.asArrayOf.scala_runtime_Null$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_Null$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.Null$;", depth)
  }
});
ScalaJS.data.scala_runtime_Null$ = new ScalaJS.ClassTypeData({
  scala_runtime_Null$: 0
}, false, "scala.runtime.Null$", ScalaJS.data.java_lang_Object, {
  scala_runtime_Null$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_Null$.prototype.$classData = ScalaJS.data.scala_runtime_Null$;
//@ sourceMappingURL=Null$.js.map
