/** @constructor */
ScalaJS.c.scala_runtime_VolatileFloatRef$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_VolatileFloatRef$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_VolatileFloatRef$.prototype.constructor = ScalaJS.c.scala_runtime_VolatileFloatRef$;
ScalaJS.c.scala_runtime_VolatileFloatRef$.prototype.create__F__Lscala_runtime_VolatileFloatRef = (function(elem) {
  return new ScalaJS.c.scala_runtime_VolatileFloatRef().init___F(elem)
});
ScalaJS.c.scala_runtime_VolatileFloatRef$.prototype.zero__Lscala_runtime_VolatileFloatRef = (function() {
  return new ScalaJS.c.scala_runtime_VolatileFloatRef().init___F(0.0)
});
ScalaJS.c.scala_runtime_VolatileFloatRef$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_runtime_VolatileFloatRef()
});
ScalaJS.c.scala_runtime_VolatileFloatRef$.prototype.zero__ = (function() {
  return this.zero__Lscala_runtime_VolatileFloatRef()
});
ScalaJS.c.scala_runtime_VolatileFloatRef$.prototype.create__F__ = (function(elem) {
  return this.create__F__Lscala_runtime_VolatileFloatRef(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_VolatileFloatRef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_VolatileFloatRef$.prototype = ScalaJS.c.scala_runtime_VolatileFloatRef$.prototype;
ScalaJS.is.scala_runtime_VolatileFloatRef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_VolatileFloatRef$)))
});
ScalaJS.as.scala_runtime_VolatileFloatRef$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_VolatileFloatRef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.VolatileFloatRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_VolatileFloatRef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_VolatileFloatRef$)))
});
ScalaJS.asArrayOf.scala_runtime_VolatileFloatRef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_VolatileFloatRef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.VolatileFloatRef;", depth)
  }
});
ScalaJS.data.scala_runtime_VolatileFloatRef$ = new ScalaJS.ClassTypeData({
  scala_runtime_VolatileFloatRef$: 0
}, false, "scala.runtime.VolatileFloatRef$", ScalaJS.data.java_lang_Object, {
  scala_runtime_VolatileFloatRef$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_VolatileFloatRef$.prototype.$classData = ScalaJS.data.scala_runtime_VolatileFloatRef$;
ScalaJS.moduleInstances.scala_runtime_VolatileFloatRef = undefined;
ScalaJS.modules.scala_runtime_VolatileFloatRef = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_VolatileFloatRef)) {
    ScalaJS.moduleInstances.scala_runtime_VolatileFloatRef = new ScalaJS.c.scala_runtime_VolatileFloatRef$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_VolatileFloatRef
});
//@ sourceMappingURL=VolatileFloatRef$.js.map
