/** @constructor */
ScalaJS.c.scala_runtime_VolatileIntRef$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_VolatileIntRef$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_VolatileIntRef$.prototype.constructor = ScalaJS.c.scala_runtime_VolatileIntRef$;
ScalaJS.c.scala_runtime_VolatileIntRef$.prototype.create__I__Lscala_runtime_VolatileIntRef = (function(elem) {
  return new ScalaJS.c.scala_runtime_VolatileIntRef().init___I(elem)
});
ScalaJS.c.scala_runtime_VolatileIntRef$.prototype.zero__Lscala_runtime_VolatileIntRef = (function() {
  return new ScalaJS.c.scala_runtime_VolatileIntRef().init___I(0)
});
ScalaJS.c.scala_runtime_VolatileIntRef$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_runtime_VolatileIntRef()
});
ScalaJS.c.scala_runtime_VolatileIntRef$.prototype.zero__ = (function() {
  return this.zero__Lscala_runtime_VolatileIntRef()
});
ScalaJS.c.scala_runtime_VolatileIntRef$.prototype.create__I__ = (function(elem) {
  return this.create__I__Lscala_runtime_VolatileIntRef(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_VolatileIntRef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_VolatileIntRef$.prototype = ScalaJS.c.scala_runtime_VolatileIntRef$.prototype;
ScalaJS.is.scala_runtime_VolatileIntRef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_VolatileIntRef$)))
});
ScalaJS.as.scala_runtime_VolatileIntRef$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_VolatileIntRef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.VolatileIntRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_VolatileIntRef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_VolatileIntRef$)))
});
ScalaJS.asArrayOf.scala_runtime_VolatileIntRef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_VolatileIntRef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.VolatileIntRef;", depth)
  }
});
ScalaJS.data.scala_runtime_VolatileIntRef$ = new ScalaJS.ClassTypeData({
  scala_runtime_VolatileIntRef$: 0
}, false, "scala.runtime.VolatileIntRef$", ScalaJS.data.java_lang_Object, {
  scala_runtime_VolatileIntRef$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_VolatileIntRef$.prototype.$classData = ScalaJS.data.scala_runtime_VolatileIntRef$;
ScalaJS.moduleInstances.scala_runtime_VolatileIntRef = undefined;
ScalaJS.modules.scala_runtime_VolatileIntRef = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_VolatileIntRef)) {
    ScalaJS.moduleInstances.scala_runtime_VolatileIntRef = new ScalaJS.c.scala_runtime_VolatileIntRef$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_VolatileIntRef
});
//@ sourceMappingURL=VolatileIntRef$.js.map
