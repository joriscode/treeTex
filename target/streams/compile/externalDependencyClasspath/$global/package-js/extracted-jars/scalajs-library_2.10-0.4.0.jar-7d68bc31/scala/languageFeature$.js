/** @constructor */
ScalaJS.c.scala_languageFeature$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_languageFeature$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_languageFeature$.prototype.constructor = ScalaJS.c.scala_languageFeature$;
/** @constructor */
ScalaJS.inheritable.scala_languageFeature$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_languageFeature$.prototype = ScalaJS.c.scala_languageFeature$.prototype;
ScalaJS.is.scala_languageFeature$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_languageFeature$)))
});
ScalaJS.as.scala_languageFeature$ = (function(obj) {
  if ((ScalaJS.is.scala_languageFeature$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.languageFeature")
  }
});
ScalaJS.isArrayOf.scala_languageFeature$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_languageFeature$)))
});
ScalaJS.asArrayOf.scala_languageFeature$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_languageFeature$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.languageFeature;", depth)
  }
});
ScalaJS.data.scala_languageFeature$ = new ScalaJS.ClassTypeData({
  scala_languageFeature$: 0
}, false, "scala.languageFeature$", ScalaJS.data.java_lang_Object, {
  scala_languageFeature$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_languageFeature$.prototype.$classData = ScalaJS.data.scala_languageFeature$;
ScalaJS.moduleInstances.scala_languageFeature = undefined;
ScalaJS.modules.scala_languageFeature = (function() {
  if ((!ScalaJS.moduleInstances.scala_languageFeature)) {
    ScalaJS.moduleInstances.scala_languageFeature = new ScalaJS.c.scala_languageFeature$().init___()
  };
  return ScalaJS.moduleInstances.scala_languageFeature
});
//@ sourceMappingURL=languageFeature$.js.map
