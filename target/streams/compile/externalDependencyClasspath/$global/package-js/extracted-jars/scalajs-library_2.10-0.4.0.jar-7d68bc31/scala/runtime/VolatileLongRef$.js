/** @constructor */
ScalaJS.c.scala_runtime_VolatileLongRef$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_VolatileLongRef$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_VolatileLongRef$.prototype.constructor = ScalaJS.c.scala_runtime_VolatileLongRef$;
ScalaJS.c.scala_runtime_VolatileLongRef$.prototype.create__J__Lscala_runtime_VolatileLongRef = (function(elem) {
  return new ScalaJS.c.scala_runtime_VolatileLongRef().init___J(elem)
});
ScalaJS.c.scala_runtime_VolatileLongRef$.prototype.zero__Lscala_runtime_VolatileLongRef = (function() {
  return new ScalaJS.c.scala_runtime_VolatileLongRef().init___J(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0))
});
ScalaJS.c.scala_runtime_VolatileLongRef$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_runtime_VolatileLongRef()
});
ScalaJS.c.scala_runtime_VolatileLongRef$.prototype.zero__ = (function() {
  return this.zero__Lscala_runtime_VolatileLongRef()
});
ScalaJS.c.scala_runtime_VolatileLongRef$.prototype.create__J__ = (function(elem) {
  return this.create__J__Lscala_runtime_VolatileLongRef(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_VolatileLongRef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_VolatileLongRef$.prototype = ScalaJS.c.scala_runtime_VolatileLongRef$.prototype;
ScalaJS.is.scala_runtime_VolatileLongRef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_VolatileLongRef$)))
});
ScalaJS.as.scala_runtime_VolatileLongRef$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_VolatileLongRef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.VolatileLongRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_VolatileLongRef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_VolatileLongRef$)))
});
ScalaJS.asArrayOf.scala_runtime_VolatileLongRef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_VolatileLongRef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.VolatileLongRef;", depth)
  }
});
ScalaJS.data.scala_runtime_VolatileLongRef$ = new ScalaJS.ClassTypeData({
  scala_runtime_VolatileLongRef$: 0
}, false, "scala.runtime.VolatileLongRef$", ScalaJS.data.java_lang_Object, {
  scala_runtime_VolatileLongRef$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_VolatileLongRef$.prototype.$classData = ScalaJS.data.scala_runtime_VolatileLongRef$;
ScalaJS.moduleInstances.scala_runtime_VolatileLongRef = undefined;
ScalaJS.modules.scala_runtime_VolatileLongRef = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_VolatileLongRef)) {
    ScalaJS.moduleInstances.scala_runtime_VolatileLongRef = new ScalaJS.c.scala_runtime_VolatileLongRef$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_VolatileLongRef
});
//@ sourceMappingURL=VolatileLongRef$.js.map
