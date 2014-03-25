/** @constructor */
ScalaJS.c.scala_util_matching_Regex$Match = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.source$1 = null;
  this.scala$util$matching$Regex$Match$$matcher$f = null;
  this.groupNames$1 = null;
  this.start$1 = 0;
  this.end$1 = 0;
  this.starts$1 = null;
  this.ends$1 = null;
  this.scala$util$matching$Regex$MatchData$$nameToIndex$1 = null;
  this.bitmap$0$1 = 0
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_matching_Regex$Match.prototype.constructor = ScalaJS.c.scala_util_matching_Regex$Match;
ScalaJS.c.scala_util_matching_Regex$Match.prototype.starts$lzycompute__p1__AI = (function() {
  if (((this.bitmap$0$1 & 1) === 0)) {
    this.starts$1 = ScalaJS.asArrayOf.scala_Int(ScalaJS.as.scala_collection_TraversableOnce(ScalaJS.modules.scala_runtime_RichInt().to$extension0__I__I__Lscala_collection_immutable_Range$Inclusive(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), this.groupCount__I()).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
      return (function(x$1) {
        x$1 = ScalaJS.uI(x$1);
        return ScalaJS.bI(arg$outer.scala$util$matching$Regex$Match$$matcher$f.start__I__I(x$1))
      })
    })(this)), ScalaJS.modules.scala_collection_immutable_IndexedSeq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).toArray__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().Int__Lscala_reflect_ClassTag()), 1);
    this.bitmap$0$1 = (this.bitmap$0$1 | 1)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.starts$1
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.ends$lzycompute__p1__AI = (function() {
  if (((this.bitmap$0$1 & 2) === 0)) {
    this.ends$1 = ScalaJS.asArrayOf.scala_Int(ScalaJS.as.scala_collection_TraversableOnce(ScalaJS.modules.scala_runtime_RichInt().to$extension0__I__I__Lscala_collection_immutable_Range$Inclusive(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), this.groupCount__I()).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
      return (function(x$1) {
        x$1 = ScalaJS.uI(x$1);
        return ScalaJS.bI(arg$outer.scala$util$matching$Regex$Match$$matcher$f.end__I__I(x$1))
      })
    })(this)), ScalaJS.modules.scala_collection_immutable_IndexedSeq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).toArray__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().Int__Lscala_reflect_ClassTag()), 1);
    this.bitmap$0$1 = (this.bitmap$0$1 | 2)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.ends$1
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.scala$util$matching$Regex$MatchData$$nameToIndex$lzycompute__p1__Lscala_collection_immutable_Map = (function() {
  if (((this.bitmap$0$1 & 4) === 0)) {
    this.scala$util$matching$Regex$MatchData$$nameToIndex$1 = ScalaJS.impls.scala_util_matching_Regex$MatchData$class__scala$util$matching$Regex$MatchData$$nameToIndex__Lscala_util_matching_Regex$MatchData__Lscala_collection_immutable_Map(this);
    this.bitmap$0$1 = (this.bitmap$0$1 | 4)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.scala$util$matching$Regex$MatchData$$nameToIndex$1
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.scala$util$matching$Regex$MatchData$$nameToIndex__Lscala_collection_immutable_Map = (function() {
  if (((this.bitmap$0$1 & 4) === 0)) {
    return this.scala$util$matching$Regex$MatchData$$nameToIndex$lzycompute__p1__Lscala_collection_immutable_Map()
  } else {
    return this.scala$util$matching$Regex$MatchData$$nameToIndex$1
  }
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.matched__T = (function() {
  return ScalaJS.impls.scala_util_matching_Regex$MatchData$class__matched__Lscala_util_matching_Regex$MatchData__T(this)
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.group__I__T = (function(i) {
  return ScalaJS.impls.scala_util_matching_Regex$MatchData$class__group__Lscala_util_matching_Regex$MatchData__I__T(this, i)
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.subgroups__Lscala_collection_immutable_List = (function() {
  return ScalaJS.impls.scala_util_matching_Regex$MatchData$class__subgroups__Lscala_util_matching_Regex$MatchData__Lscala_collection_immutable_List(this)
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.before__Ljava_lang_CharSequence = (function() {
  return ScalaJS.impls.scala_util_matching_Regex$MatchData$class__before__Lscala_util_matching_Regex$MatchData__Ljava_lang_CharSequence(this)
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.before__I__Ljava_lang_CharSequence = (function(i) {
  return ScalaJS.impls.scala_util_matching_Regex$MatchData$class__before__Lscala_util_matching_Regex$MatchData__I__Ljava_lang_CharSequence(this, i)
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.after__Ljava_lang_CharSequence = (function() {
  return ScalaJS.impls.scala_util_matching_Regex$MatchData$class__after__Lscala_util_matching_Regex$MatchData__Ljava_lang_CharSequence(this)
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.after__I__Ljava_lang_CharSequence = (function(i) {
  return ScalaJS.impls.scala_util_matching_Regex$MatchData$class__after__Lscala_util_matching_Regex$MatchData__I__Ljava_lang_CharSequence(this, i)
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.group__T__T = (function(id) {
  return ScalaJS.impls.scala_util_matching_Regex$MatchData$class__group__Lscala_util_matching_Regex$MatchData__T__T(this, id)
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_util_matching_Regex$MatchData$class__toString__Lscala_util_matching_Regex$MatchData__T(this)
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.source__Ljava_lang_CharSequence = (function() {
  return this.source$1
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.groupNames__Lscala_collection_Seq = (function() {
  return this.groupNames$1
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.start__I = (function() {
  return this.start$1
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.end__I = (function() {
  return this.end$1
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.groupCount__I = (function() {
  return this.scala$util$matching$Regex$Match$$matcher$f.groupCount__I()
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.starts__p1__AI = (function() {
  if (((this.bitmap$0$1 & 1) === 0)) {
    return this.starts$lzycompute__p1__AI()
  } else {
    return this.starts$1
  }
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.ends__p1__AI = (function() {
  if (((this.bitmap$0$1 & 2) === 0)) {
    return this.ends$lzycompute__p1__AI()
  } else {
    return this.ends$1
  }
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.start__I__I = (function(i) {
  return this.starts__p1__AI().underlying[i]
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.end__I__I = (function(i) {
  return this.ends__p1__AI().underlying[i]
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.force__Lscala_util_matching_Regex$Match = (function() {
  this.starts__p1__AI();
  this.ends__p1__AI();
  return this
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.init___Ljava_lang_CharSequence__Ljava_util_regex_Matcher__Lscala_collection_Seq = (function(source, matcher, groupNames) {
  this.source$1 = source;
  this.scala$util$matching$Regex$Match$$matcher$f = matcher;
  this.groupNames$1 = groupNames;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_util_matching_Regex$MatchData$class__$init$__Lscala_util_matching_Regex$MatchData__V(this);
  this.start$1 = matcher.start__I();
  this.end$1 = matcher.end__I();
  return this
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.group__T__ = (function(id) {
  return this.group__T__T(id)
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.after__I__ = (function(i) {
  return this.after__I__Ljava_lang_CharSequence(i)
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.after__ = (function() {
  return this.after__Ljava_lang_CharSequence()
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.before__I__ = (function(i$2) {
  return this.before__I__Ljava_lang_CharSequence(i$2)
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.before__ = (function() {
  return this.before__Ljava_lang_CharSequence()
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.subgroups__ = (function() {
  return this.subgroups__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.group__I__ = (function(i$3) {
  return this.group__I__T(i$3)
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.matched__ = (function() {
  return this.matched__T()
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.scala$util$matching$Regex$MatchData$$nameToIndex__ = (function() {
  return this.scala$util$matching$Regex$MatchData$$nameToIndex__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.force__ = (function() {
  return this.force__Lscala_util_matching_Regex$Match()
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.end__I__ = (function(i$4) {
  return ScalaJS.bI(this.end__I__I(i$4))
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.start__I__ = (function(i$5) {
  return ScalaJS.bI(this.start__I__I(i$5))
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.groupCount__ = (function() {
  return ScalaJS.bI(this.groupCount__I())
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.end__ = (function() {
  return ScalaJS.bI(this.end__I())
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.start__ = (function() {
  return ScalaJS.bI(this.start__I())
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.groupNames__ = (function() {
  return this.groupNames__Lscala_collection_Seq()
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.source__ = (function() {
  return this.source__Ljava_lang_CharSequence()
});
/** @constructor */
ScalaJS.inheritable.scala_util_matching_Regex$Match = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_matching_Regex$Match.prototype = ScalaJS.c.scala_util_matching_Regex$Match.prototype;
ScalaJS.is.scala_util_matching_Regex$Match = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_matching_Regex$Match)))
});
ScalaJS.as.scala_util_matching_Regex$Match = (function(obj) {
  if ((ScalaJS.is.scala_util_matching_Regex$Match(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.matching.Regex$Match")
  }
});
ScalaJS.isArrayOf.scala_util_matching_Regex$Match = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_matching_Regex$Match)))
});
ScalaJS.asArrayOf.scala_util_matching_Regex$Match = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_matching_Regex$Match(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.matching.Regex$Match;", depth)
  }
});
ScalaJS.data.scala_util_matching_Regex$Match = new ScalaJS.ClassTypeData({
  scala_util_matching_Regex$Match: 0
}, false, "scala.util.matching.Regex$Match", ScalaJS.data.java_lang_Object, {
  scala_util_matching_Regex$Match: 1,
  scala_util_matching_Regex$MatchData: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_matching_Regex$Match.prototype.$classData = ScalaJS.data.scala_util_matching_Regex$Match;
//@ sourceMappingURL=Regex$Match.js.map
