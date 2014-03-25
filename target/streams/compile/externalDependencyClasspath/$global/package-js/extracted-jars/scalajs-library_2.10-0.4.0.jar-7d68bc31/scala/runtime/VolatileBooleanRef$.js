/** @constructor */
ScalaJS.c.scala_runtime_VolatileBooleanRef$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_VolatileBooleanRef$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_VolatileBooleanRef$.prototype.constructor = ScalaJS.c.scala_runtime_VolatileBooleanRef$;
ScalaJS.c.scala_runtime_VolatileBooleanRef$.prototype.create__Z__Lscala_runtime_VolatileBooleanRef = (function(elem) {
  return new ScalaJS.c.scala_runtime_VolatileBooleanRef().init___Z(elem)
});
ScalaJS.c.scala_runtime_VolatileBooleanRef$.prototype.zero__Lscala_runtime_VolatileBooleanRef = (function() {
  return new ScalaJS.c.scala_runtime_VolatileBooleanRef().init___Z(false)
});
ScalaJS.c.scala_runtime_VolatileBooleanRef$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_runtime_VolatileBooleanRef()
});
ScalaJS.c.scala_runtime_VolatileBooleanRef$.prototype.zero__ = (function() {
  return this.zero__Lscala_runtime_VolatileBooleanRef()
});
ScalaJS.c.scala_runtime_VolatileBooleanRef$.prototype.create__Z__ = (function(elem) {
  return this.create__Z__Lscala_runtime_VolatileBooleanRef(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_VolatileBooleanRef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_VolatileBooleanRef$.prototype = ScalaJS.c.scala_runtime_VolatileBooleanRef$.prototype;
ScalaJS.is.scala_runtime_VolatileBooleanRef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_VolatileBooleanRef$)))
});
ScalaJS.as.scala_runtime_VolatileBooleanRef$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_VolatileBooleanRef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.VolatileBooleanRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_VolatileBooleanRef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_VolatileBooleanRef$)))
});
ScalaJS.asArrayOf.scala_runtime_VolatileBooleanRef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_VolatileBooleanRef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.VolatileBooleanRef;", depth)
  }
});
ScalaJS.data.scala_runtime_VolatileBooleanRef$ = new ScalaJS.ClassTypeData({
  scala_runtime_VolatileBooleanRef$: 0
}, false, "scala.runtime.VolatileBooleanRef$", ScalaJS.data.java_lang_Object, {
  scala_runtime_VolatileBooleanRef$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_VolatileBooleanRef$.prototype.$classData = ScalaJS.data.scala_runtime_VolatileBooleanRef$;
ScalaJS.moduleInstances.scala_runtime_VolatileBooleanRef = undefined;
ScalaJS.modules.scala_runtime_VolatileBooleanRef = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_VolatileBooleanRef)) {
    ScalaJS.moduleInstances.scala_runtime_VolatileBooleanRef = new ScalaJS.c.scala_runtime_VolatileBooleanRef$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_VolatileBooleanRef
});
//@ sourceMappingURL=VolatileBooleanRef$.js.map
