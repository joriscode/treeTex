/** @constructor */
ScalaJS.c.scala_deprecated$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_deprecated$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_deprecated$.prototype.constructor = ScalaJS.c.scala_deprecated$;
ScalaJS.c.scala_deprecated$.prototype.$$lessinit$greater$default$1__T = (function() {
  return ""
});
ScalaJS.c.scala_deprecated$.prototype.$$lessinit$greater$default$2__T = (function() {
  return ""
});
/** @constructor */
ScalaJS.inheritable.scala_deprecated$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_deprecated$.prototype = ScalaJS.c.scala_deprecated$.prototype;
ScalaJS.is.scala_deprecated$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_deprecated$)))
});
ScalaJS.as.scala_deprecated$ = (function(obj) {
  if ((ScalaJS.is.scala_deprecated$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.deprecated")
  }
});
ScalaJS.isArrayOf.scala_deprecated$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_deprecated$)))
});
ScalaJS.asArrayOf.scala_deprecated$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_deprecated$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.deprecated;", depth)
  }
});
ScalaJS.data.scala_deprecated$ = new ScalaJS.ClassTypeData({
  scala_deprecated$: 0
}, false, "scala.deprecated$", ScalaJS.data.java_lang_Object, {
  scala_deprecated$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_deprecated$.prototype.$classData = ScalaJS.data.scala_deprecated$;
ScalaJS.moduleInstances.scala_deprecated = undefined;
ScalaJS.modules.scala_deprecated = (function() {
  if ((!ScalaJS.moduleInstances.scala_deprecated)) {
    ScalaJS.moduleInstances.scala_deprecated = new ScalaJS.c.scala_deprecated$().init___()
  };
  return ScalaJS.moduleInstances.scala_deprecated
});
//@ sourceMappingURL=deprecated$.js.map
