/** @constructor */
ScalaJS.c.scala_runtime_ByteRef$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_ByteRef$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_ByteRef$.prototype.constructor = ScalaJS.c.scala_runtime_ByteRef$;
ScalaJS.c.scala_runtime_ByteRef$.prototype.create__B__Lscala_runtime_ByteRef = (function(elem) {
  return new ScalaJS.c.scala_runtime_ByteRef().init___B(elem)
});
ScalaJS.c.scala_runtime_ByteRef$.prototype.zero__Lscala_runtime_ByteRef = (function() {
  return new ScalaJS.c.scala_runtime_ByteRef().init___B(0)
});
ScalaJS.c.scala_runtime_ByteRef$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_runtime_ByteRef()
});
ScalaJS.c.scala_runtime_ByteRef$.prototype.zero__ = (function() {
  return this.zero__Lscala_runtime_ByteRef()
});
ScalaJS.c.scala_runtime_ByteRef$.prototype.create__B__ = (function(elem) {
  return this.create__B__Lscala_runtime_ByteRef(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_ByteRef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_ByteRef$.prototype = ScalaJS.c.scala_runtime_ByteRef$.prototype;
ScalaJS.is.scala_runtime_ByteRef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_ByteRef$)))
});
ScalaJS.as.scala_runtime_ByteRef$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_ByteRef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.ByteRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_ByteRef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_ByteRef$)))
});
ScalaJS.asArrayOf.scala_runtime_ByteRef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_ByteRef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.ByteRef;", depth)
  }
});
ScalaJS.data.scala_runtime_ByteRef$ = new ScalaJS.ClassTypeData({
  scala_runtime_ByteRef$: 0
}, false, "scala.runtime.ByteRef$", ScalaJS.data.java_lang_Object, {
  scala_runtime_ByteRef$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_ByteRef$.prototype.$classData = ScalaJS.data.scala_runtime_ByteRef$;
ScalaJS.moduleInstances.scala_runtime_ByteRef = undefined;
ScalaJS.modules.scala_runtime_ByteRef = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_ByteRef)) {
    ScalaJS.moduleInstances.scala_runtime_ByteRef = new ScalaJS.c.scala_runtime_ByteRef$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_ByteRef
});
//@ sourceMappingURL=ByteRef$.js.map
