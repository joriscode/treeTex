/** @constructor */
ScalaJS.c.scala_languageFeature$experimental$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_languageFeature$experimental$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_languageFeature$experimental$.prototype.constructor = ScalaJS.c.scala_languageFeature$experimental$;
/** @constructor */
ScalaJS.inheritable.scala_languageFeature$experimental$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_languageFeature$experimental$.prototype = ScalaJS.c.scala_languageFeature$experimental$.prototype;
ScalaJS.is.scala_languageFeature$experimental$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_languageFeature$experimental$)))
});
ScalaJS.as.scala_languageFeature$experimental$ = (function(obj) {
  if ((ScalaJS.is.scala_languageFeature$experimental$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.languageFeature$experimental")
  }
});
ScalaJS.isArrayOf.scala_languageFeature$experimental$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_languageFeature$experimental$)))
});
ScalaJS.asArrayOf.scala_languageFeature$experimental$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_languageFeature$experimental$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.languageFeature$experimental;", depth)
  }
});
ScalaJS.data.scala_languageFeature$experimental$ = new ScalaJS.ClassTypeData({
  scala_languageFeature$experimental$: 0
}, false, "scala.languageFeature$experimental$", ScalaJS.data.java_lang_Object, {
  scala_languageFeature$experimental$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_languageFeature$experimental$.prototype.$classData = ScalaJS.data.scala_languageFeature$experimental$;
ScalaJS.moduleInstances.scala_languageFeature$experimental = undefined;
ScalaJS.modules.scala_languageFeature$experimental = (function() {
  if ((!ScalaJS.moduleInstances.scala_languageFeature$experimental)) {
    ScalaJS.moduleInstances.scala_languageFeature$experimental = new ScalaJS.c.scala_languageFeature$experimental$().init___()
  };
  return ScalaJS.moduleInstances.scala_languageFeature$experimental
});
//@ sourceMappingURL=languageFeature$experimental$.js.map
