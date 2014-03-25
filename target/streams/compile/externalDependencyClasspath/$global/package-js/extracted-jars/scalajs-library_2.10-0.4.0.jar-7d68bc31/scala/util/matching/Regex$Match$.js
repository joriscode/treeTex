/** @constructor */
ScalaJS.c.scala_util_matching_Regex$Match$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_matching_Regex$Match$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_matching_Regex$Match$.prototype.constructor = ScalaJS.c.scala_util_matching_Regex$Match$;
ScalaJS.c.scala_util_matching_Regex$Match$.prototype.unapply__Lscala_util_matching_Regex$Match__Lscala_Some = (function(m) {
  return new ScalaJS.c.scala_Some().init___O(m.matched__T())
});
ScalaJS.c.scala_util_matching_Regex$Match$.prototype.unapply__Lscala_util_matching_Regex$Match__ = (function(m) {
  return this.unapply__Lscala_util_matching_Regex$Match__Lscala_Some(m)
});
/** @constructor */
ScalaJS.inheritable.scala_util_matching_Regex$Match$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_matching_Regex$Match$.prototype = ScalaJS.c.scala_util_matching_Regex$Match$.prototype;
ScalaJS.is.scala_util_matching_Regex$Match$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_matching_Regex$Match$)))
});
ScalaJS.as.scala_util_matching_Regex$Match$ = (function(obj) {
  if ((ScalaJS.is.scala_util_matching_Regex$Match$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.matching.Regex$Match")
  }
});
ScalaJS.isArrayOf.scala_util_matching_Regex$Match$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_matching_Regex$Match$)))
});
ScalaJS.asArrayOf.scala_util_matching_Regex$Match$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_matching_Regex$Match$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.matching.Regex$Match;", depth)
  }
});
ScalaJS.data.scala_util_matching_Regex$Match$ = new ScalaJS.ClassTypeData({
  scala_util_matching_Regex$Match$: 0
}, false, "scala.util.matching.Regex$Match$", ScalaJS.data.java_lang_Object, {
  scala_util_matching_Regex$Match$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_matching_Regex$Match$.prototype.$classData = ScalaJS.data.scala_util_matching_Regex$Match$;
ScalaJS.moduleInstances.scala_util_matching_Regex$Match = undefined;
ScalaJS.modules.scala_util_matching_Regex$Match = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_matching_Regex$Match)) {
    ScalaJS.moduleInstances.scala_util_matching_Regex$Match = new ScalaJS.c.scala_util_matching_Regex$Match$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_matching_Regex$Match
});
//@ sourceMappingURL=Regex$Match$.js.map
