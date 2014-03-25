/** @constructor */
ScalaJS.c.scala_runtime_DoubleRef$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_DoubleRef$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_DoubleRef$.prototype.constructor = ScalaJS.c.scala_runtime_DoubleRef$;
ScalaJS.c.scala_runtime_DoubleRef$.prototype.create__D__Lscala_runtime_DoubleRef = (function(elem) {
  return new ScalaJS.c.scala_runtime_DoubleRef().init___D(elem)
});
ScalaJS.c.scala_runtime_DoubleRef$.prototype.zero__Lscala_runtime_DoubleRef = (function() {
  return new ScalaJS.c.scala_runtime_DoubleRef().init___D(0.0)
});
ScalaJS.c.scala_runtime_DoubleRef$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_runtime_DoubleRef()
});
ScalaJS.c.scala_runtime_DoubleRef$.prototype.zero__ = (function() {
  return this.zero__Lscala_runtime_DoubleRef()
});
ScalaJS.c.scala_runtime_DoubleRef$.prototype.create__D__ = (function(elem) {
  return this.create__D__Lscala_runtime_DoubleRef(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_DoubleRef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_DoubleRef$.prototype = ScalaJS.c.scala_runtime_DoubleRef$.prototype;
ScalaJS.is.scala_runtime_DoubleRef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_DoubleRef$)))
});
ScalaJS.as.scala_runtime_DoubleRef$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_DoubleRef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.DoubleRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_DoubleRef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_DoubleRef$)))
});
ScalaJS.asArrayOf.scala_runtime_DoubleRef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_DoubleRef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.DoubleRef;", depth)
  }
});
ScalaJS.data.scala_runtime_DoubleRef$ = new ScalaJS.ClassTypeData({
  scala_runtime_DoubleRef$: 0
}, false, "scala.runtime.DoubleRef$", ScalaJS.data.java_lang_Object, {
  scala_runtime_DoubleRef$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_DoubleRef$.prototype.$classData = ScalaJS.data.scala_runtime_DoubleRef$;
ScalaJS.moduleInstances.scala_runtime_DoubleRef = undefined;
ScalaJS.modules.scala_runtime_DoubleRef = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_DoubleRef)) {
    ScalaJS.moduleInstances.scala_runtime_DoubleRef = new ScalaJS.c.scala_runtime_DoubleRef$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_DoubleRef
});
//@ sourceMappingURL=DoubleRef$.js.map
