/** @constructor */
ScalaJS.c.scala_runtime_package$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_package$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_package$.prototype.constructor = ScalaJS.c.scala_runtime_package$;
/** @constructor */
ScalaJS.inheritable.scala_runtime_package$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_package$.prototype = ScalaJS.c.scala_runtime_package$.prototype;
ScalaJS.is.scala_runtime_package$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_package$)))
});
ScalaJS.as.scala_runtime_package$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_package$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.package")
  }
});
ScalaJS.isArrayOf.scala_runtime_package$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_package$)))
});
ScalaJS.asArrayOf.scala_runtime_package$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_package$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.package;", depth)
  }
});
ScalaJS.data.scala_runtime_package$ = new ScalaJS.ClassTypeData({
  scala_runtime_package$: 0
}, false, "scala.runtime.package$", ScalaJS.data.java_lang_Object, {
  scala_runtime_package$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_package$.prototype.$classData = ScalaJS.data.scala_runtime_package$;
ScalaJS.moduleInstances.scala_runtime_package = undefined;
ScalaJS.modules.scala_runtime_package = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_package)) {
    ScalaJS.moduleInstances.scala_runtime_package = new ScalaJS.c.scala_runtime_package$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_package
});
//@ sourceMappingURL=package$.js.map
