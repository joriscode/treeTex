/** @constructor */
ScalaJS.c.scala_reflect_NoManifest$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_reflect_NoManifest$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_reflect_NoManifest$.prototype.constructor = ScalaJS.c.scala_reflect_NoManifest$;
ScalaJS.c.scala_reflect_NoManifest$.prototype.toString__T = (function() {
  return "<?>"
});
ScalaJS.c.scala_reflect_NoManifest$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_reflect_NoManifest()
});
/** @constructor */
ScalaJS.inheritable.scala_reflect_NoManifest$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_reflect_NoManifest$.prototype = ScalaJS.c.scala_reflect_NoManifest$.prototype;
ScalaJS.is.scala_reflect_NoManifest$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_reflect_NoManifest$)))
});
ScalaJS.as.scala_reflect_NoManifest$ = (function(obj) {
  if ((ScalaJS.is.scala_reflect_NoManifest$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.reflect.NoManifest")
  }
});
ScalaJS.isArrayOf.scala_reflect_NoManifest$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_reflect_NoManifest$)))
});
ScalaJS.asArrayOf.scala_reflect_NoManifest$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_reflect_NoManifest$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.reflect.NoManifest;", depth)
  }
});
ScalaJS.data.scala_reflect_NoManifest$ = new ScalaJS.ClassTypeData({
  scala_reflect_NoManifest$: 0
}, false, "scala.reflect.NoManifest$", ScalaJS.data.java_lang_Object, {
  scala_reflect_NoManifest$: 1,
  scala_reflect_OptManifest: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_reflect_NoManifest$.prototype.$classData = ScalaJS.data.scala_reflect_NoManifest$;
ScalaJS.moduleInstances.scala_reflect_NoManifest = undefined;
ScalaJS.modules.scala_reflect_NoManifest = (function() {
  if ((!ScalaJS.moduleInstances.scala_reflect_NoManifest)) {
    ScalaJS.moduleInstances.scala_reflect_NoManifest = new ScalaJS.c.scala_reflect_NoManifest$().init___()
  };
  return ScalaJS.moduleInstances.scala_reflect_NoManifest
});
//@ sourceMappingURL=NoManifest$.js.map
