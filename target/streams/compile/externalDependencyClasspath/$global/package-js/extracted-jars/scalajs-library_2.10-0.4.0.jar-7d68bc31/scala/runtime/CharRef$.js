/** @constructor */
ScalaJS.c.scala_runtime_CharRef$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_CharRef$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_CharRef$.prototype.constructor = ScalaJS.c.scala_runtime_CharRef$;
ScalaJS.c.scala_runtime_CharRef$.prototype.create__C__Lscala_runtime_CharRef = (function(elem) {
  return new ScalaJS.c.scala_runtime_CharRef().init___C(elem)
});
ScalaJS.c.scala_runtime_CharRef$.prototype.zero__Lscala_runtime_CharRef = (function() {
  return new ScalaJS.c.scala_runtime_CharRef().init___C((0 & 65535))
});
ScalaJS.c.scala_runtime_CharRef$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_runtime_CharRef()
});
ScalaJS.c.scala_runtime_CharRef$.prototype.zero__ = (function() {
  return this.zero__Lscala_runtime_CharRef()
});
ScalaJS.c.scala_runtime_CharRef$.prototype.create__C__ = (function(elem) {
  return this.create__C__Lscala_runtime_CharRef(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_CharRef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_CharRef$.prototype = ScalaJS.c.scala_runtime_CharRef$.prototype;
ScalaJS.is.scala_runtime_CharRef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_CharRef$)))
});
ScalaJS.as.scala_runtime_CharRef$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_CharRef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.CharRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_CharRef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_CharRef$)))
});
ScalaJS.asArrayOf.scala_runtime_CharRef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_CharRef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.CharRef;", depth)
  }
});
ScalaJS.data.scala_runtime_CharRef$ = new ScalaJS.ClassTypeData({
  scala_runtime_CharRef$: 0
}, false, "scala.runtime.CharRef$", ScalaJS.data.java_lang_Object, {
  scala_runtime_CharRef$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_CharRef$.prototype.$classData = ScalaJS.data.scala_runtime_CharRef$;
ScalaJS.moduleInstances.scala_runtime_CharRef = undefined;
ScalaJS.modules.scala_runtime_CharRef = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_CharRef)) {
    ScalaJS.moduleInstances.scala_runtime_CharRef = new ScalaJS.c.scala_runtime_CharRef$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_CharRef
});
//@ sourceMappingURL=CharRef$.js.map
