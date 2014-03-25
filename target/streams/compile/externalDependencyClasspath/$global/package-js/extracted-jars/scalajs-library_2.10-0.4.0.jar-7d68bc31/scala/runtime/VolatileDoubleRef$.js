/** @constructor */
ScalaJS.c.scala_runtime_VolatileDoubleRef$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_VolatileDoubleRef$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_VolatileDoubleRef$.prototype.constructor = ScalaJS.c.scala_runtime_VolatileDoubleRef$;
ScalaJS.c.scala_runtime_VolatileDoubleRef$.prototype.create__D__Lscala_runtime_VolatileDoubleRef = (function(elem) {
  return new ScalaJS.c.scala_runtime_VolatileDoubleRef().init___D(elem)
});
ScalaJS.c.scala_runtime_VolatileDoubleRef$.prototype.zero__Lscala_runtime_VolatileDoubleRef = (function() {
  return new ScalaJS.c.scala_runtime_VolatileDoubleRef().init___D(0.0)
});
ScalaJS.c.scala_runtime_VolatileDoubleRef$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_runtime_VolatileDoubleRef()
});
ScalaJS.c.scala_runtime_VolatileDoubleRef$.prototype.zero__ = (function() {
  return this.zero__Lscala_runtime_VolatileDoubleRef()
});
ScalaJS.c.scala_runtime_VolatileDoubleRef$.prototype.create__D__ = (function(elem) {
  return this.create__D__Lscala_runtime_VolatileDoubleRef(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_VolatileDoubleRef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_VolatileDoubleRef$.prototype = ScalaJS.c.scala_runtime_VolatileDoubleRef$.prototype;
ScalaJS.is.scala_runtime_VolatileDoubleRef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_VolatileDoubleRef$)))
});
ScalaJS.as.scala_runtime_VolatileDoubleRef$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_VolatileDoubleRef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.VolatileDoubleRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_VolatileDoubleRef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_VolatileDoubleRef$)))
});
ScalaJS.asArrayOf.scala_runtime_VolatileDoubleRef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_VolatileDoubleRef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.VolatileDoubleRef;", depth)
  }
});
ScalaJS.data.scala_runtime_VolatileDoubleRef$ = new ScalaJS.ClassTypeData({
  scala_runtime_VolatileDoubleRef$: 0
}, false, "scala.runtime.VolatileDoubleRef$", ScalaJS.data.java_lang_Object, {
  scala_runtime_VolatileDoubleRef$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_VolatileDoubleRef$.prototype.$classData = ScalaJS.data.scala_runtime_VolatileDoubleRef$;
ScalaJS.moduleInstances.scala_runtime_VolatileDoubleRef = undefined;
ScalaJS.modules.scala_runtime_VolatileDoubleRef = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_VolatileDoubleRef)) {
    ScalaJS.moduleInstances.scala_runtime_VolatileDoubleRef = new ScalaJS.c.scala_runtime_VolatileDoubleRef$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_VolatileDoubleRef
});
//@ sourceMappingURL=VolatileDoubleRef$.js.map
