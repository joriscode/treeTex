/** @constructor */
ScalaJS.c.scala_runtime_IntRef$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_IntRef$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_IntRef$.prototype.constructor = ScalaJS.c.scala_runtime_IntRef$;
ScalaJS.c.scala_runtime_IntRef$.prototype.create__I__Lscala_runtime_IntRef = (function(elem) {
  return new ScalaJS.c.scala_runtime_IntRef().init___I(elem)
});
ScalaJS.c.scala_runtime_IntRef$.prototype.zero__Lscala_runtime_IntRef = (function() {
  return new ScalaJS.c.scala_runtime_IntRef().init___I(0)
});
ScalaJS.c.scala_runtime_IntRef$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_runtime_IntRef()
});
ScalaJS.c.scala_runtime_IntRef$.prototype.zero__ = (function() {
  return this.zero__Lscala_runtime_IntRef()
});
ScalaJS.c.scala_runtime_IntRef$.prototype.create__I__ = (function(elem) {
  return this.create__I__Lscala_runtime_IntRef(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_IntRef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_IntRef$.prototype = ScalaJS.c.scala_runtime_IntRef$.prototype;
ScalaJS.is.scala_runtime_IntRef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_IntRef$)))
});
ScalaJS.as.scala_runtime_IntRef$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_IntRef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.IntRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_IntRef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_IntRef$)))
});
ScalaJS.asArrayOf.scala_runtime_IntRef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_IntRef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.IntRef;", depth)
  }
});
ScalaJS.data.scala_runtime_IntRef$ = new ScalaJS.ClassTypeData({
  scala_runtime_IntRef$: 0
}, false, "scala.runtime.IntRef$", ScalaJS.data.java_lang_Object, {
  scala_runtime_IntRef$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_IntRef$.prototype.$classData = ScalaJS.data.scala_runtime_IntRef$;
ScalaJS.moduleInstances.scala_runtime_IntRef = undefined;
ScalaJS.modules.scala_runtime_IntRef = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_IntRef)) {
    ScalaJS.moduleInstances.scala_runtime_IntRef = new ScalaJS.c.scala_runtime_IntRef$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_IntRef
});
//@ sourceMappingURL=IntRef$.js.map
