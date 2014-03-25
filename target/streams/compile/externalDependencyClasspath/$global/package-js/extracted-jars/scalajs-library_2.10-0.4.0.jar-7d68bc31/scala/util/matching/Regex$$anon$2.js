/** @constructor */
ScalaJS.c.scala_util_matching_Regex$$anon$2 = (function() {
  ScalaJS.c.scala_util_matching_Regex.call(this);
  this.$$outer$2 = null
});
ScalaJS.c.scala_util_matching_Regex$$anon$2.prototype = new ScalaJS.inheritable.scala_util_matching_Regex();
ScalaJS.c.scala_util_matching_Regex$$anon$2.prototype.constructor = ScalaJS.c.scala_util_matching_Regex$$anon$2;
ScalaJS.c.scala_util_matching_Regex$$anon$2.prototype.runMatcher__Ljava_util_regex_Matcher__Z = (function(m) {
  return ScalaJS.impls.scala_util_matching_UnanchoredRegex$class__runMatcher__Lscala_util_matching_UnanchoredRegex__Ljava_util_regex_Matcher__Z(this, m)
});
ScalaJS.c.scala_util_matching_Regex$$anon$2.prototype.unanchored__Lscala_util_matching_UnanchoredRegex = (function() {
  return ScalaJS.impls.scala_util_matching_UnanchoredRegex$class__unanchored__Lscala_util_matching_UnanchoredRegex__Lscala_util_matching_UnanchoredRegex(this)
});
ScalaJS.c.scala_util_matching_Regex$$anon$2.prototype.anchored__Lscala_util_matching_Regex = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_util_matching_Regex$$anon$2.prototype.init___Lscala_util_matching_Regex = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_util_matching_Regex.prototype.init___T__Lscala_collection_Seq.call(this, $$outer.scala$util$matching$Regex$$regex$f, $$outer.scala$util$matching$Regex$$groupNames$f);
  ScalaJS.impls.scala_util_matching_UnanchoredRegex$class__$init$__Lscala_util_matching_UnanchoredRegex__V(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_util_matching_Regex$$anon$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_matching_Regex$$anon$2.prototype = ScalaJS.c.scala_util_matching_Regex$$anon$2.prototype;
ScalaJS.is.scala_util_matching_Regex$$anon$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_matching_Regex$$anon$2)))
});
ScalaJS.as.scala_util_matching_Regex$$anon$2 = (function(obj) {
  if ((ScalaJS.is.scala_util_matching_Regex$$anon$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.matching.Regex$$anon$2")
  }
});
ScalaJS.isArrayOf.scala_util_matching_Regex$$anon$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_matching_Regex$$anon$2)))
});
ScalaJS.asArrayOf.scala_util_matching_Regex$$anon$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_matching_Regex$$anon$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.matching.Regex$$anon$2;", depth)
  }
});
ScalaJS.data.scala_util_matching_Regex$$anon$2 = new ScalaJS.ClassTypeData({
  scala_util_matching_Regex$$anon$2: 0
}, false, "scala.util.matching.Regex$$anon$2", ScalaJS.data.scala_util_matching_Regex, {
  scala_util_matching_Regex$$anon$2: 1,
  scala_util_matching_UnanchoredRegex: 1,
  scala_util_matching_Regex: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_matching_Regex$$anon$2.prototype.$classData = ScalaJS.data.scala_util_matching_Regex$$anon$2;
//@ sourceMappingURL=Regex$$anon$2.js.map
