/** @constructor */
ScalaJS.c.scala_util_matching_Regex$MatchIterator = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.source$2 = null;
  this.regex$2 = null;
  this.groupNames$2 = null;
  this.matcher$2 = null;
  this.nextSeen$2 = false;
  this.scala$util$matching$Regex$MatchData$$nameToIndex$2 = null;
  this.bitmap$0$2 = false
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.constructor = ScalaJS.c.scala_util_matching_Regex$MatchIterator;
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.scala$util$matching$Regex$MatchData$$nameToIndex$lzycompute__p2__Lscala_collection_immutable_Map = (function() {
  if ((!this.bitmap$0$2)) {
    this.scala$util$matching$Regex$MatchData$$nameToIndex$2 = ScalaJS.impls.scala_util_matching_Regex$MatchData$class__scala$util$matching$Regex$MatchData$$nameToIndex__Lscala_util_matching_Regex$MatchData__Lscala_collection_immutable_Map(this);
    this.bitmap$0$2 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.scala$util$matching$Regex$MatchData$$nameToIndex$2
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.scala$util$matching$Regex$MatchData$$nameToIndex__Lscala_collection_immutable_Map = (function() {
  if ((!this.bitmap$0$2)) {
    return this.scala$util$matching$Regex$MatchData$$nameToIndex$lzycompute__p2__Lscala_collection_immutable_Map()
  } else {
    return this.scala$util$matching$Regex$MatchData$$nameToIndex$2
  }
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.matched__T = (function() {
  return ScalaJS.impls.scala_util_matching_Regex$MatchData$class__matched__Lscala_util_matching_Regex$MatchData__T(this)
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.group__I__T = (function(i) {
  return ScalaJS.impls.scala_util_matching_Regex$MatchData$class__group__Lscala_util_matching_Regex$MatchData__I__T(this, i)
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.subgroups__Lscala_collection_immutable_List = (function() {
  return ScalaJS.impls.scala_util_matching_Regex$MatchData$class__subgroups__Lscala_util_matching_Regex$MatchData__Lscala_collection_immutable_List(this)
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.before__Ljava_lang_CharSequence = (function() {
  return ScalaJS.impls.scala_util_matching_Regex$MatchData$class__before__Lscala_util_matching_Regex$MatchData__Ljava_lang_CharSequence(this)
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.before__I__Ljava_lang_CharSequence = (function(i) {
  return ScalaJS.impls.scala_util_matching_Regex$MatchData$class__before__Lscala_util_matching_Regex$MatchData__I__Ljava_lang_CharSequence(this, i)
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.after__Ljava_lang_CharSequence = (function() {
  return ScalaJS.impls.scala_util_matching_Regex$MatchData$class__after__Lscala_util_matching_Regex$MatchData__Ljava_lang_CharSequence(this)
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.after__I__Ljava_lang_CharSequence = (function(i) {
  return ScalaJS.impls.scala_util_matching_Regex$MatchData$class__after__Lscala_util_matching_Regex$MatchData__I__Ljava_lang_CharSequence(this, i)
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.group__T__T = (function(id) {
  return ScalaJS.impls.scala_util_matching_Regex$MatchData$class__group__Lscala_util_matching_Regex$MatchData__T__T(this, id)
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.source__Ljava_lang_CharSequence = (function() {
  return this.source$2
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.regex__Lscala_util_matching_Regex = (function() {
  return this.regex$2
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.groupNames__Lscala_collection_Seq = (function() {
  return this.groupNames$2
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.matcher__Ljava_util_regex_Matcher = (function() {
  return this.matcher$2
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.nextSeen__p2__Z = (function() {
  return this.nextSeen$2
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.nextSeen$und$eq__p2__Z__V = (function(x$1) {
  this.nextSeen$2 = x$1
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.hasNext__Z = (function() {
  if ((!this.nextSeen__p2__Z())) {
    this.nextSeen$und$eq__p2__Z__V(this.matcher__Ljava_util_regex_Matcher().find__Z())
  };
  return this.nextSeen__p2__Z()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.next__T = (function() {
  if ((!this.hasNext__Z())) {
    throw new ScalaJS.c.java_util_NoSuchElementException().init___()
  };
  this.nextSeen$und$eq__p2__Z__V(false);
  return this.matcher__Ljava_util_regex_Matcher().group__T()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__toString__Lscala_collection_Iterator__T(this)
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.start__I = (function() {
  return this.matcher__Ljava_util_regex_Matcher().start__I()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.start__I__I = (function(i) {
  return this.matcher__Ljava_util_regex_Matcher().start__I__I(i)
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.end__I = (function() {
  return this.matcher__Ljava_util_regex_Matcher().end__I()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.end__I__I = (function(i) {
  return this.matcher__Ljava_util_regex_Matcher().end__I__I(i)
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.groupCount__I = (function() {
  return this.matcher__Ljava_util_regex_Matcher().groupCount__I()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.matchData__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$3().init___Lscala_util_matching_Regex$MatchIterator(this)
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.replacementData__Lscala_collection_AbstractIterator = (function() {
  return new ScalaJS.c.scala_util_matching_Regex$MatchIterator$$anon$1().init___Lscala_util_matching_Regex$MatchIterator(this)
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.next__O = (function() {
  return this.next__T()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.init___Ljava_lang_CharSequence__Lscala_util_matching_Regex__Lscala_collection_Seq = (function(source, regex, groupNames) {
  this.source$2 = source;
  this.regex$2 = regex;
  this.groupNames$2 = groupNames;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  ScalaJS.impls.scala_util_matching_Regex$MatchData$class__$init$__Lscala_util_matching_Regex$MatchData__V(this);
  this.matcher$2 = regex.pattern__Ljava_util_regex_Pattern().matcher__Ljava_lang_CharSequence__Ljava_util_regex_Matcher(source);
  this.nextSeen$2 = false;
  return this
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.group__T__ = (function(id) {
  return this.group__T__T(id)
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.after__I__ = (function(i) {
  return this.after__I__Ljava_lang_CharSequence(i)
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.after__ = (function() {
  return this.after__Ljava_lang_CharSequence()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.before__I__ = (function(i$2) {
  return this.before__I__Ljava_lang_CharSequence(i$2)
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.before__ = (function() {
  return this.before__Ljava_lang_CharSequence()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.subgroups__ = (function() {
  return this.subgroups__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.group__I__ = (function(i$3) {
  return this.group__I__T(i$3)
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.matched__ = (function() {
  return this.matched__T()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.scala$util$matching$Regex$MatchData$$nameToIndex__ = (function() {
  return this.scala$util$matching$Regex$MatchData$$nameToIndex__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.replacementData__ = (function() {
  return this.replacementData__Lscala_collection_AbstractIterator()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.matchData__ = (function() {
  return this.matchData__Lscala_collection_Iterator()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.groupCount__ = (function() {
  return ScalaJS.bI(this.groupCount__I())
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.end__I__ = (function(i$4) {
  return ScalaJS.bI(this.end__I__I(i$4))
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.end__ = (function() {
  return ScalaJS.bI(this.end__I())
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.start__I__ = (function(i$5) {
  return ScalaJS.bI(this.start__I__I(i$5))
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.start__ = (function() {
  return ScalaJS.bI(this.start__I())
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.matcher__ = (function() {
  return this.matcher__Ljava_util_regex_Matcher()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.groupNames__ = (function() {
  return this.groupNames__Lscala_collection_Seq()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.regex__ = (function() {
  return this.regex__Lscala_util_matching_Regex()
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.source__ = (function() {
  return this.source__Ljava_lang_CharSequence()
});
/** @constructor */
ScalaJS.inheritable.scala_util_matching_Regex$MatchIterator = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_matching_Regex$MatchIterator.prototype = ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype;
ScalaJS.is.scala_util_matching_Regex$MatchIterator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_matching_Regex$MatchIterator)))
});
ScalaJS.as.scala_util_matching_Regex$MatchIterator = (function(obj) {
  if ((ScalaJS.is.scala_util_matching_Regex$MatchIterator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.matching.Regex$MatchIterator")
  }
});
ScalaJS.isArrayOf.scala_util_matching_Regex$MatchIterator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_matching_Regex$MatchIterator)))
});
ScalaJS.asArrayOf.scala_util_matching_Regex$MatchIterator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_matching_Regex$MatchIterator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.matching.Regex$MatchIterator;", depth)
  }
});
ScalaJS.data.scala_util_matching_Regex$MatchIterator = new ScalaJS.ClassTypeData({
  scala_util_matching_Regex$MatchIterator: 0
}, false, "scala.util.matching.Regex$MatchIterator", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_util_matching_Regex$MatchIterator: 1,
  scala_util_matching_Regex$MatchData: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_matching_Regex$MatchIterator.prototype.$classData = ScalaJS.data.scala_util_matching_Regex$MatchIterator;
//@ sourceMappingURL=Regex$MatchIterator.js.map
