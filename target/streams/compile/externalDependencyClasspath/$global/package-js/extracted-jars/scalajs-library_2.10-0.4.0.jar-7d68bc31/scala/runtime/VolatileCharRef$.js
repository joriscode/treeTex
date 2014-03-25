/** @constructor */
ScalaJS.c.scala_runtime_VolatileCharRef$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_VolatileCharRef$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_VolatileCharRef$.prototype.constructor = ScalaJS.c.scala_runtime_VolatileCharRef$;
ScalaJS.c.scala_runtime_VolatileCharRef$.prototype.create__C__Lscala_runtime_VolatileCharRef = (function(elem) {
  return new ScalaJS.c.scala_runtime_VolatileCharRef().init___C(elem)
});
ScalaJS.c.scala_runtime_VolatileCharRef$.prototype.zero__Lscala_runtime_VolatileCharRef = (function() {
  return new ScalaJS.c.scala_runtime_VolatileCharRef().init___C((0 & 65535))
});
ScalaJS.c.scala_runtime_VolatileCharRef$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_runtime_VolatileCharRef()
});
ScalaJS.c.scala_runtime_VolatileCharRef$.prototype.zero__ = (function() {
  return this.zero__Lscala_runtime_VolatileCharRef()
});
ScalaJS.c.scala_runtime_VolatileCharRef$.prototype.create__C__ = (function(elem) {
  return this.create__C__Lscala_runtime_VolatileCharRef(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_VolatileCharRef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_VolatileCharRef$.prototype = ScalaJS.c.scala_runtime_VolatileCharRef$.prototype;
ScalaJS.is.scala_runtime_VolatileCharRef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_VolatileCharRef$)))
});
ScalaJS.as.scala_runtime_VolatileCharRef$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_VolatileCharRef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.VolatileCharRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_VolatileCharRef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_VolatileCharRef$)))
});
ScalaJS.asArrayOf.scala_runtime_VolatileCharRef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_VolatileCharRef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.VolatileCharRef;", depth)
  }
});
ScalaJS.data.scala_runtime_VolatileCharRef$ = new ScalaJS.ClassTypeData({
  scala_runtime_VolatileCharRef$: 0
}, false, "scala.runtime.VolatileCharRef$", ScalaJS.data.java_lang_Object, {
  scala_runtime_VolatileCharRef$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_VolatileCharRef$.prototype.$classData = ScalaJS.data.scala_runtime_VolatileCharRef$;
ScalaJS.moduleInstances.scala_runtime_VolatileCharRef = undefined;
ScalaJS.modules.scala_runtime_VolatileCharRef = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_VolatileCharRef)) {
    ScalaJS.moduleInstances.scala_runtime_VolatileCharRef = new ScalaJS.c.scala_runtime_VolatileCharRef$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_VolatileCharRef
});
//@ sourceMappingURL=VolatileCharRef$.js.map
