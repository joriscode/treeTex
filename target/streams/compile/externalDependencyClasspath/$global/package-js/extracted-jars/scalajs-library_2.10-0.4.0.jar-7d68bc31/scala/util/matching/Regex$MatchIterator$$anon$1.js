/** @constructor */
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$1 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.$$outer$2 = null;
  this.scala$util$matching$Regex$Replacement$$sb$2 = null
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$1.prototype.constructor = ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$1;
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$1.prototype.scala$util$matching$Regex$Replacement$$sb__Ljava_lang_StringBuffer = (function() {
  return this.scala$util$matching$Regex$Replacement$$sb$2
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$1.prototype.scala$util$matching$Regex$Replacement$$sb$und$eq__Ljava_lang_StringBuffer__V = (function(x$1) {
  this.scala$util$matching$Regex$Replacement$$sb$2 = x$1
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$1.prototype.replaced__T = (function() {
  return ScalaJS.impls.scala_util_matching_Regex$Replacement$class__replaced__Lscala_util_matching_Regex$Replacement__T(this)
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$1.prototype.replace__T__Ljava_util_regex_Matcher = (function(rs) {
  return ScalaJS.impls.scala_util_matching_Regex$Replacement$class__replace__Lscala_util_matching_Regex$Replacement__T__Ljava_util_regex_Matcher(this, rs)
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$1.prototype.matcher__Ljava_util_regex_Matcher = (function() {
  return this.$$outer$2.matcher__Ljava_util_regex_Matcher()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$1.prototype.hasNext__Z = (function() {
  return this.$$outer$2.hasNext__Z()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$1.prototype.next__Lscala_util_matching_Regex$Match = (function() {
  this.$$outer$2.next__T();
  return new ScalaJS.c.scala_util_matching_Regex$Match().init___Ljava_lang_CharSequence__Ljava_util_regex_Matcher__Lscala_collection_Seq(this.$$outer$2.source__Ljava_lang_CharSequence(), this.matcher__Ljava_util_regex_Matcher(), this.$$outer$2.groupNames__Lscala_collection_Seq()).force__Lscala_util_matching_Regex$Match()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$1.prototype.next__O = (function() {
  return this.next__Lscala_util_matching_Regex$Match()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$1.prototype.init___Lscala_util_matching_Regex$MatchIterator = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  ScalaJS.impls.scala_util_matching_Regex$Replacement$class__$init$__Lscala_util_matching_Regex$Replacement__V(this);
  return this
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$1.prototype.replace__T__ = (function(rs) {
  return this.replace__T__Ljava_util_regex_Matcher(rs)
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$1.prototype.replaced__ = (function() {
  return this.replaced__T()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$1.prototype.scala$util$matching$Regex$Replacement$$sb$und$eq__Ljava_lang_StringBuffer__ = (function(x$1) {
  return ScalaJS.bV(this.scala$util$matching$Regex$Replacement$$sb$und$eq__Ljava_lang_StringBuffer__V(x$1))
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$1.prototype.scala$util$matching$Regex$Replacement$$sb__ = (function() {
  return this.scala$util$matching$Regex$Replacement$$sb__Ljava_lang_StringBuffer()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$1.prototype.matcher__ = (function() {
  return this.matcher__Ljava_util_regex_Matcher()
});
/** @constructor */
ScalaJS.inheritable.scala_util_matching_Regex$MatchIterator$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_matching_Regex$MatchIterator$$anon$1.prototype = ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$1.prototype;
ScalaJS.is.scala_util_matching_Regex$MatchIterator$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_matching_Regex$MatchIterator$$anon$1)))
});
ScalaJS.as.scala_util_matching_Regex$MatchIterator$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_util_matching_Regex$MatchIterator$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.matching.Regex$MatchIterator$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_util_matching_Regex$MatchIterator$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_matching_Regex$MatchIterator$$anon$1)))
});
ScalaJS.asArrayOf.scala_util_matching_Regex$MatchIterator$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_matching_Regex$MatchIterator$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.matching.Regex$MatchIterator$$anon$1;", depth)
  }
});
ScalaJS.data.scala_util_matching_Regex$MatchIterator$$anon$1 = new ScalaJS.ClassTypeData({
  scala_util_matching_Regex$MatchIterator$$anon$1: 0
}, false, "scala.util.matching.Regex$MatchIterator$$anon$1", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_util_matching_Regex$MatchIterator$$anon$1: 1,
  scala_util_matching_Regex$Replacement: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$1.prototype.$classData = ScalaJS.data.scala_util_matching_Regex$MatchIterator$$anon$1;
//@ sourceMappingURL=Regex$MatchIterator$$anon$1.js.map
