/** @constructor */
ScalaJS.c.scala_runtime_LongRef$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_LongRef$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_LongRef$.prototype.constructor = ScalaJS.c.scala_runtime_LongRef$;
ScalaJS.c.scala_runtime_LongRef$.prototype.create__J__Lscala_runtime_LongRef = (function(elem) {
  return new ScalaJS.c.scala_runtime_LongRef().init___J(elem)
});
ScalaJS.c.scala_runtime_LongRef$.prototype.zero__Lscala_runtime_LongRef = (function() {
  return new ScalaJS.c.scala_runtime_LongRef().init___J(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0))
});
ScalaJS.c.scala_runtime_LongRef$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_runtime_LongRef()
});
ScalaJS.c.scala_runtime_LongRef$.prototype.zero__ = (function() {
  return this.zero__Lscala_runtime_LongRef()
});
ScalaJS.c.scala_runtime_LongRef$.prototype.create__J__ = (function(elem) {
  return this.create__J__Lscala_runtime_LongRef(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_LongRef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_LongRef$.prototype = ScalaJS.c.scala_runtime_LongRef$.prototype;
ScalaJS.is.scala_runtime_LongRef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_LongRef$)))
});
ScalaJS.as.scala_runtime_LongRef$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_LongRef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.LongRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_LongRef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_LongRef$)))
});
ScalaJS.asArrayOf.scala_runtime_LongRef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_LongRef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.LongRef;", depth)
  }
});
ScalaJS.data.scala_runtime_LongRef$ = new ScalaJS.ClassTypeData({
  scala_runtime_LongRef$: 0
}, false, "scala.runtime.LongRef$", ScalaJS.data.java_lang_Object, {
  scala_runtime_LongRef$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_LongRef$.prototype.$classData = ScalaJS.data.scala_runtime_LongRef$;
ScalaJS.moduleInstances.scala_runtime_LongRef = undefined;
ScalaJS.modules.scala_runtime_LongRef = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_LongRef)) {
    ScalaJS.moduleInstances.scala_runtime_LongRef = new ScalaJS.c.scala_runtime_LongRef$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_LongRef
});
//@ sourceMappingURL=LongRef$.js.map
