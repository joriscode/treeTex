/** @constructor */
ScalaJS.c.scala_runtime_VolatileShortRef$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_VolatileShortRef$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_VolatileShortRef$.prototype.constructor = ScalaJS.c.scala_runtime_VolatileShortRef$;
ScalaJS.c.scala_runtime_VolatileShortRef$.prototype.create__S__Lscala_runtime_VolatileShortRef = (function(elem) {
  return new ScalaJS.c.scala_runtime_VolatileShortRef().init___S(elem)
});
ScalaJS.c.scala_runtime_VolatileShortRef$.prototype.zero__Lscala_runtime_VolatileShortRef = (function() {
  return new ScalaJS.c.scala_runtime_VolatileShortRef().init___S(0)
});
ScalaJS.c.scala_runtime_VolatileShortRef$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_runtime_VolatileShortRef()
});
ScalaJS.c.scala_runtime_VolatileShortRef$.prototype.zero__ = (function() {
  return this.zero__Lscala_runtime_VolatileShortRef()
});
ScalaJS.c.scala_runtime_VolatileShortRef$.prototype.create__S__ = (function(elem) {
  return this.create__S__Lscala_runtime_VolatileShortRef(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_VolatileShortRef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_VolatileShortRef$.prototype = ScalaJS.c.scala_runtime_VolatileShortRef$.prototype;
ScalaJS.is.scala_runtime_VolatileShortRef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_VolatileShortRef$)))
});
ScalaJS.as.scala_runtime_VolatileShortRef$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_VolatileShortRef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.VolatileShortRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_VolatileShortRef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_VolatileShortRef$)))
});
ScalaJS.asArrayOf.scala_runtime_VolatileShortRef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_VolatileShortRef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.VolatileShortRef;", depth)
  }
});
ScalaJS.data.scala_runtime_VolatileShortRef$ = new ScalaJS.ClassTypeData({
  scala_runtime_VolatileShortRef$: 0
}, false, "scala.runtime.VolatileShortRef$", ScalaJS.data.java_lang_Object, {
  scala_runtime_VolatileShortRef$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_VolatileShortRef$.prototype.$classData = ScalaJS.data.scala_runtime_VolatileShortRef$;
ScalaJS.moduleInstances.scala_runtime_VolatileShortRef = undefined;
ScalaJS.modules.scala_runtime_VolatileShortRef = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_VolatileShortRef)) {
    ScalaJS.moduleInstances.scala_runtime_VolatileShortRef = new ScalaJS.c.scala_runtime_VolatileShortRef$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_VolatileShortRef
});
//@ sourceMappingURL=VolatileShortRef$.js.map
