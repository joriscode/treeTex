/** @constructor */
ScalaJS.c.scala_runtime_ObjectRef$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_ObjectRef$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_ObjectRef$.prototype.constructor = ScalaJS.c.scala_runtime_ObjectRef$;
ScalaJS.c.scala_runtime_ObjectRef$.prototype.create__O__Lscala_runtime_ObjectRef = (function(elem) {
  return new ScalaJS.c.scala_runtime_ObjectRef().init___O(elem)
});
ScalaJS.c.scala_runtime_ObjectRef$.prototype.zero__Lscala_runtime_ObjectRef = (function() {
  return new ScalaJS.c.scala_runtime_ObjectRef().init___O(null)
});
ScalaJS.c.scala_runtime_ObjectRef$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_runtime_ObjectRef()
});
ScalaJS.c.scala_runtime_ObjectRef$.prototype.zero__ = (function() {
  return this.zero__Lscala_runtime_ObjectRef()
});
ScalaJS.c.scala_runtime_ObjectRef$.prototype.create__O__ = (function(elem) {
  return this.create__O__Lscala_runtime_ObjectRef(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_ObjectRef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_ObjectRef$.prototype = ScalaJS.c.scala_runtime_ObjectRef$.prototype;
ScalaJS.is.scala_runtime_ObjectRef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_ObjectRef$)))
});
ScalaJS.as.scala_runtime_ObjectRef$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_ObjectRef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.ObjectRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_ObjectRef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_ObjectRef$)))
});
ScalaJS.asArrayOf.scala_runtime_ObjectRef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_ObjectRef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.ObjectRef;", depth)
  }
});
ScalaJS.data.scala_runtime_ObjectRef$ = new ScalaJS.ClassTypeData({
  scala_runtime_ObjectRef$: 0
}, false, "scala.runtime.ObjectRef$", ScalaJS.data.java_lang_Object, {
  scala_runtime_ObjectRef$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_ObjectRef$.prototype.$classData = ScalaJS.data.scala_runtime_ObjectRef$;
ScalaJS.moduleInstances.scala_runtime_ObjectRef = undefined;
ScalaJS.modules.scala_runtime_ObjectRef = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_ObjectRef)) {
    ScalaJS.moduleInstances.scala_runtime_ObjectRef = new ScalaJS.c.scala_runtime_ObjectRef$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_ObjectRef
});
//@ sourceMappingURL=ObjectRef$.js.map
