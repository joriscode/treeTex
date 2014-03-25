/** @constructor */
ScalaJS.c.scala_runtime_VolatileObjectRef$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_VolatileObjectRef$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_VolatileObjectRef$.prototype.constructor = ScalaJS.c.scala_runtime_VolatileObjectRef$;
ScalaJS.c.scala_runtime_VolatileObjectRef$.prototype.create__O__Lscala_runtime_VolatileObjectRef = (function(elem) {
  return new ScalaJS.c.scala_runtime_VolatileObjectRef().init___O(elem)
});
ScalaJS.c.scala_runtime_VolatileObjectRef$.prototype.zero__Lscala_runtime_VolatileObjectRef = (function() {
  return new ScalaJS.c.scala_runtime_VolatileObjectRef().init___O(null)
});
ScalaJS.c.scala_runtime_VolatileObjectRef$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_runtime_VolatileObjectRef()
});
ScalaJS.c.scala_runtime_VolatileObjectRef$.prototype.zero__ = (function() {
  return this.zero__Lscala_runtime_VolatileObjectRef()
});
ScalaJS.c.scala_runtime_VolatileObjectRef$.prototype.create__O__ = (function(elem) {
  return this.create__O__Lscala_runtime_VolatileObjectRef(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_VolatileObjectRef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_VolatileObjectRef$.prototype = ScalaJS.c.scala_runtime_VolatileObjectRef$.prototype;
ScalaJS.is.scala_runtime_VolatileObjectRef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_VolatileObjectRef$)))
});
ScalaJS.as.scala_runtime_VolatileObjectRef$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_VolatileObjectRef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.VolatileObjectRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_VolatileObjectRef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_VolatileObjectRef$)))
});
ScalaJS.asArrayOf.scala_runtime_VolatileObjectRef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_VolatileObjectRef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.VolatileObjectRef;", depth)
  }
});
ScalaJS.data.scala_runtime_VolatileObjectRef$ = new ScalaJS.ClassTypeData({
  scala_runtime_VolatileObjectRef$: 0
}, false, "scala.runtime.VolatileObjectRef$", ScalaJS.data.java_lang_Object, {
  scala_runtime_VolatileObjectRef$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_VolatileObjectRef$.prototype.$classData = ScalaJS.data.scala_runtime_VolatileObjectRef$;
ScalaJS.moduleInstances.scala_runtime_VolatileObjectRef = undefined;
ScalaJS.modules.scala_runtime_VolatileObjectRef = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_VolatileObjectRef)) {
    ScalaJS.moduleInstances.scala_runtime_VolatileObjectRef = new ScalaJS.c.scala_runtime_VolatileObjectRef$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_VolatileObjectRef
});
//@ sourceMappingURL=VolatileObjectRef$.js.map
