/** @constructor */
ScalaJS.c.scala_runtime_Nothing$ = (function() {
  ScalaJS.c.java_lang_Throwable.call(this)
});
ScalaJS.c.scala_runtime_Nothing$.prototype = new ScalaJS.inheritable.java_lang_Throwable();
ScalaJS.c.scala_runtime_Nothing$.prototype.constructor = ScalaJS.c.scala_runtime_Nothing$;
/** @constructor */
ScalaJS.inheritable.scala_runtime_Nothing$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_Nothing$.prototype = ScalaJS.c.scala_runtime_Nothing$.prototype;
ScalaJS.is.scala_runtime_Nothing$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_Nothing$)))
});
ScalaJS.as.scala_runtime_Nothing$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_Nothing$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.Nothing$")
  }
});
ScalaJS.isArrayOf.scala_runtime_Nothing$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_Nothing$)))
});
ScalaJS.asArrayOf.scala_runtime_Nothing$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_Nothing$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.Nothing$;", depth)
  }
});
ScalaJS.data.scala_runtime_Nothing$ = new ScalaJS.ClassTypeData({
  scala_runtime_Nothing$: 0
}, false, "scala.runtime.Nothing$", ScalaJS.data.java_lang_Throwable, {
  scala_runtime_Nothing$: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_Nothing$.prototype.$classData = ScalaJS.data.scala_runtime_Nothing$;
//@ sourceMappingURL=Nothing$.js.map
