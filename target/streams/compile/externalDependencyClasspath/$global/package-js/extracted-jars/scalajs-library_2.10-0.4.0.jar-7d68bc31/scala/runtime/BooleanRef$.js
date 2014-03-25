/** @constructor */
ScalaJS.c.scala_runtime_BooleanRef$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_BooleanRef$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_BooleanRef$.prototype.constructor = ScalaJS.c.scala_runtime_BooleanRef$;
ScalaJS.c.scala_runtime_BooleanRef$.prototype.create__Z__Lscala_runtime_BooleanRef = (function(elem) {
  return new ScalaJS.c.scala_runtime_BooleanRef().init___Z(elem)
});
ScalaJS.c.scala_runtime_BooleanRef$.prototype.zero__Lscala_runtime_BooleanRef = (function() {
  return new ScalaJS.c.scala_runtime_BooleanRef().init___Z(false)
});
ScalaJS.c.scala_runtime_BooleanRef$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_runtime_BooleanRef()
});
ScalaJS.c.scala_runtime_BooleanRef$.prototype.zero__ = (function() {
  return this.zero__Lscala_runtime_BooleanRef()
});
ScalaJS.c.scala_runtime_BooleanRef$.prototype.create__Z__ = (function(elem) {
  return this.create__Z__Lscala_runtime_BooleanRef(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_BooleanRef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_BooleanRef$.prototype = ScalaJS.c.scala_runtime_BooleanRef$.prototype;
ScalaJS.is.scala_runtime_BooleanRef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_BooleanRef$)))
});
ScalaJS.as.scala_runtime_BooleanRef$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_BooleanRef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.BooleanRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_BooleanRef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_BooleanRef$)))
});
ScalaJS.asArrayOf.scala_runtime_BooleanRef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_BooleanRef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.BooleanRef;", depth)
  }
});
ScalaJS.data.scala_runtime_BooleanRef$ = new ScalaJS.ClassTypeData({
  scala_runtime_BooleanRef$: 0
}, false, "scala.runtime.BooleanRef$", ScalaJS.data.java_lang_Object, {
  scala_runtime_BooleanRef$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_BooleanRef$.prototype.$classData = ScalaJS.data.scala_runtime_BooleanRef$;
ScalaJS.moduleInstances.scala_runtime_BooleanRef = undefined;
ScalaJS.modules.scala_runtime_BooleanRef = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_BooleanRef)) {
    ScalaJS.moduleInstances.scala_runtime_BooleanRef = new ScalaJS.c.scala_runtime_BooleanRef$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_BooleanRef
});
//@ sourceMappingURL=BooleanRef$.js.map
