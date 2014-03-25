/** @constructor */
ScalaJS.c.scala_runtime_ShortRef$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_ShortRef$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_ShortRef$.prototype.constructor = ScalaJS.c.scala_runtime_ShortRef$;
ScalaJS.c.scala_runtime_ShortRef$.prototype.create__S__Lscala_runtime_ShortRef = (function(elem) {
  return new ScalaJS.c.scala_runtime_ShortRef().init___S(elem)
});
ScalaJS.c.scala_runtime_ShortRef$.prototype.zero__Lscala_runtime_ShortRef = (function() {
  return new ScalaJS.c.scala_runtime_ShortRef().init___S(0)
});
ScalaJS.c.scala_runtime_ShortRef$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_runtime_ShortRef()
});
ScalaJS.c.scala_runtime_ShortRef$.prototype.zero__ = (function() {
  return this.zero__Lscala_runtime_ShortRef()
});
ScalaJS.c.scala_runtime_ShortRef$.prototype.create__S__ = (function(elem) {
  return this.create__S__Lscala_runtime_ShortRef(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_ShortRef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_ShortRef$.prototype = ScalaJS.c.scala_runtime_ShortRef$.prototype;
ScalaJS.is.scala_runtime_ShortRef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_ShortRef$)))
});
ScalaJS.as.scala_runtime_ShortRef$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_ShortRef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.ShortRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_ShortRef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_ShortRef$)))
});
ScalaJS.asArrayOf.scala_runtime_ShortRef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_ShortRef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.ShortRef;", depth)
  }
});
ScalaJS.data.scala_runtime_ShortRef$ = new ScalaJS.ClassTypeData({
  scala_runtime_ShortRef$: 0
}, false, "scala.runtime.ShortRef$", ScalaJS.data.java_lang_Object, {
  scala_runtime_ShortRef$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_ShortRef$.prototype.$classData = ScalaJS.data.scala_runtime_ShortRef$;
ScalaJS.moduleInstances.scala_runtime_ShortRef = undefined;
ScalaJS.modules.scala_runtime_ShortRef = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_ShortRef)) {
    ScalaJS.moduleInstances.scala_runtime_ShortRef = new ScalaJS.c.scala_runtime_ShortRef$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_ShortRef
});
//@ sourceMappingURL=ShortRef$.js.map
