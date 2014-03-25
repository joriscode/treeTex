/** @constructor */
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$3 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.$$outer$2 = null
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$3.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$3.prototype.constructor = ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$3;
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$3.prototype.hasNext__Z = (function() {
  return this.$$outer$2.hasNext__Z()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$3.prototype.next__Lscala_util_matching_Regex$Match = (function() {
  this.$$outer$2.next__T();
  return new ScalaJS.c.scala_util_matching_Regex$Match().init___Ljava_lang_CharSequence__Ljava_util_regex_Matcher__Lscala_collection_Seq(this.$$outer$2.source__Ljava_lang_CharSequence(), this.$$outer$2.matcher__Ljava_util_regex_Matcher(), this.$$outer$2.groupNames__Lscala_collection_Seq()).force__Lscala_util_matching_Regex$Match()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$3.prototype.next__O = (function() {
  return this.next__Lscala_util_matching_Regex$Match()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$3.prototype.init___Lscala_util_matching_Regex$MatchIterator = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_util_matching_Regex$MatchIterator$$anon$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_matching_Regex$MatchIterator$$anon$3.prototype = ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$3.prototype;
ScalaJS.is.scala_util_matching_Regex$MatchIterator$$anon$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_matching_Regex$MatchIterator$$anon$3)))
});
ScalaJS.as.scala_util_matching_Regex$MatchIterator$$anon$3 = (function(obj) {
  if ((ScalaJS.is.scala_util_matching_Regex$MatchIterator$$anon$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.matching.Regex$MatchIterator$$anon$3")
  }
});
ScalaJS.isArrayOf.scala_util_matching_Regex$MatchIterator$$anon$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_matching_Regex$MatchIterator$$anon$3)))
});
ScalaJS.asArrayOf.scala_util_matching_Regex$MatchIterator$$anon$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_matching_Regex$MatchIterator$$anon$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.matching.Regex$MatchIterator$$anon$3;", depth)
  }
});
ScalaJS.data.scala_util_matching_Regex$MatchIterator$$anon$3 = new ScalaJS.ClassTypeData({
  scala_util_matching_Regex$MatchIterator$$anon$3: 0
}, false, "scala.util.matching.Regex$MatchIterator$$anon$3", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_util_matching_Regex$MatchIterator$$anon$3: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$3.prototype.$classData = ScalaJS.data.scala_util_matching_Regex$MatchIterator$$anon$3;
//@ sourceMappingURL=Regex$MatchIterator$$anon$3.js.map
