/** @constructor */
ScalaJS.c.scala_runtime_VolatileByteRef$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_VolatileByteRef$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_VolatileByteRef$.prototype.constructor = ScalaJS.c.scala_runtime_VolatileByteRef$;
ScalaJS.c.scala_runtime_VolatileByteRef$.prototype.create__B__Lscala_runtime_VolatileByteRef = (function(elem) {
  return new ScalaJS.c.scala_runtime_VolatileByteRef().init___B(elem)
});
ScalaJS.c.scala_runtime_VolatileByteRef$.prototype.zero__Lscala_runtime_VolatileByteRef = (function() {
  return new ScalaJS.c.scala_runtime_VolatileByteRef().init___B(0)
});
ScalaJS.c.scala_runtime_VolatileByteRef$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_runtime_VolatileByteRef()
});
ScalaJS.c.scala_runtime_VolatileByteRef$.prototype.zero__ = (function() {
  return this.zero__Lscala_runtime_VolatileByteRef()
});
ScalaJS.c.scala_runtime_VolatileByteRef$.prototype.create__B__ = (function(elem) {
  return this.create__B__Lscala_runtime_VolatileByteRef(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_VolatileByteRef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_VolatileByteRef$.prototype = ScalaJS.c.scala_runtime_VolatileByteRef$.prototype;
ScalaJS.is.scala_runtime_VolatileByteRef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_VolatileByteRef$)))
});
ScalaJS.as.scala_runtime_VolatileByteRef$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_VolatileByteRef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.VolatileByteRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_VolatileByteRef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_VolatileByteRef$)))
});
ScalaJS.asArrayOf.scala_runtime_VolatileByteRef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_VolatileByteRef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.VolatileByteRef;", depth)
  }
});
ScalaJS.data.scala_runtime_VolatileByteRef$ = new ScalaJS.ClassTypeData({
  scala_runtime_VolatileByteRef$: 0
}, false, "scala.runtime.VolatileByteRef$", ScalaJS.data.java_lang_Object, {
  scala_runtime_VolatileByteRef$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_VolatileByteRef$.prototype.$classData = ScalaJS.data.scala_runtime_VolatileByteRef$;
ScalaJS.moduleInstances.scala_runtime_VolatileByteRef = undefined;
ScalaJS.modules.scala_runtime_VolatileByteRef = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_VolatileByteRef)) {
    ScalaJS.moduleInstances.scala_runtime_VolatileByteRef = new ScalaJS.c.scala_runtime_VolatileByteRef$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_VolatileByteRef
});
//@ sourceMappingURL=VolatileByteRef$.js.map
