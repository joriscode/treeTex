/** @constructor */
ScalaJS.c.scala_util_matching_Regex$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_matching_Regex$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_matching_Regex$.prototype.constructor = ScalaJS.c.scala_util_matching_Regex$;
ScalaJS.c.scala_util_matching_Regex$.prototype.quoteReplacement__T__T = (function(text) {
  return ScalaJS.modules.java_util_regex_Matcher().quoteReplacement__T__T(text)
});
ScalaJS.c.scala_util_matching_Regex$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_util_matching_Regex()
});
ScalaJS.c.scala_util_matching_Regex$.prototype.quoteReplacement__T__ = (function(text) {
  return this.quoteReplacement__T__T(text)
});
/** @constructor */
ScalaJS.inheritable.scala_util_matching_Regex$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_matching_Regex$.prototype = ScalaJS.c.scala_util_matching_Regex$.prototype;
ScalaJS.is.scala_util_matching_Regex$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_matching_Regex$)))
});
ScalaJS.as.scala_util_matching_Regex$ = (function(obj) {
  if ((ScalaJS.is.scala_util_matching_Regex$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.matching.Regex")
  }
});
ScalaJS.isArrayOf.scala_util_matching_Regex$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_matching_Regex$)))
});
ScalaJS.asArrayOf.scala_util_matching_Regex$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_matching_Regex$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.matching.Regex;", depth)
  }
});
ScalaJS.data.scala_util_matching_Regex$ = new ScalaJS.ClassTypeData({
  scala_util_matching_Regex$: 0
}, false, "scala.util.matching.Regex$", ScalaJS.data.java_lang_Object, {
  scala_util_matching_Regex$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_matching_Regex$.prototype.$classData = ScalaJS.data.scala_util_matching_Regex$;
ScalaJS.moduleInstances.scala_util_matching_Regex = undefined;
ScalaJS.modules.scala_util_matching_Regex = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_matching_Regex)) {
    ScalaJS.moduleInstances.scala_util_matching_Regex = new ScalaJS.c.scala_util_matching_Regex$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_matching_Regex
});
//@ sourceMappingURL=Regex$.js.map
