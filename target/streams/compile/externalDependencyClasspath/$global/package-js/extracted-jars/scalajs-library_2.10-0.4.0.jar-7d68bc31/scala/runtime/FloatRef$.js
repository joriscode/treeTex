/** @constructor */
ScalaJS.c.scala_runtime_FloatRef$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_FloatRef$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_FloatRef$.prototype.constructor = ScalaJS.c.scala_runtime_FloatRef$;
ScalaJS.c.scala_runtime_FloatRef$.prototype.create__F__Lscala_runtime_FloatRef = (function(elem) {
  return new ScalaJS.c.scala_runtime_FloatRef().init___F(elem)
});
ScalaJS.c.scala_runtime_FloatRef$.prototype.zero__Lscala_runtime_FloatRef = (function() {
  return new ScalaJS.c.scala_runtime_FloatRef().init___F(0.0)
});
ScalaJS.c.scala_runtime_FloatRef$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_runtime_FloatRef()
});
ScalaJS.c.scala_runtime_FloatRef$.prototype.zero__ = (function() {
  return this.zero__Lscala_runtime_FloatRef()
});
ScalaJS.c.scala_runtime_FloatRef$.prototype.create__F__ = (function(elem) {
  return this.create__F__Lscala_runtime_FloatRef(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_FloatRef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_FloatRef$.prototype = ScalaJS.c.scala_runtime_FloatRef$.prototype;
ScalaJS.is.scala_runtime_FloatRef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_FloatRef$)))
});
ScalaJS.as.scala_runtime_FloatRef$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_FloatRef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.FloatRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_FloatRef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_FloatRef$)))
});
ScalaJS.asArrayOf.scala_runtime_FloatRef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_FloatRef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.FloatRef;", depth)
  }
});
ScalaJS.data.scala_runtime_FloatRef$ = new ScalaJS.ClassTypeData({
  scala_runtime_FloatRef$: 0
}, false, "scala.runtime.FloatRef$", ScalaJS.data.java_lang_Object, {
  scala_runtime_FloatRef$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_FloatRef$.prototype.$classData = ScalaJS.data.scala_runtime_FloatRef$;
ScalaJS.moduleInstances.scala_runtime_FloatRef = undefined;
ScalaJS.modules.scala_runtime_FloatRef = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_FloatRef)) {
    ScalaJS.moduleInstances.scala_runtime_FloatRef = new ScalaJS.c.scala_runtime_FloatRef$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_FloatRef
});
//@ sourceMappingURL=FloatRef$.js.map
