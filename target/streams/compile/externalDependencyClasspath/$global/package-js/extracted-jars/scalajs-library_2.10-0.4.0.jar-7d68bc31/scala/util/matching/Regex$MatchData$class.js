ScalaJS.impls.scala_util_matching_Regex$MatchData$class__matched__Lscala_util_matching_Regex$MatchData__T = (function($$this) {
  if (($$this.start__I() >= 0)) {
    return ScalaJS.objectToString(ScalaJS.charSequenceSubSequence($$this.source__Ljava_lang_CharSequence(), $$this.start__I(), $$this.end__I()))
  } else {
    return null
  }
});
ScalaJS.impls.scala_util_matching_Regex$MatchData$class__group__Lscala_util_matching_Regex$MatchData__I__T = (function($$this, i) {
  if (($$this.start__I__I(i) >= 0)) {
    return ScalaJS.objectToString(ScalaJS.charSequenceSubSequence($$this.source__Ljava_lang_CharSequence(), $$this.start__I__I(i), $$this.end__I__I(i)))
  } else {
    return null
  }
});
ScalaJS.impls.scala_util_matching_Regex$MatchData$class__subgroups__Lscala_util_matching_Regex$MatchData__Lscala_collection_immutable_List = (function($$this) {
  return ScalaJS.as.scala_collection_immutable_List(ScalaJS.modules.scala_runtime_RichInt().to$extension0__I__I__Lscala_collection_immutable_Range$Inclusive(ScalaJS.modules.scala_Predef().intWrapper__I__I(1), $$this.groupCount__I()).toList__Lscala_collection_immutable_List().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(i) {
      i = ScalaJS.uI(i);
      return arg$outer.group__I__T(i)
    })
  })($$this)), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
});
ScalaJS.impls.scala_util_matching_Regex$MatchData$class__before__Lscala_util_matching_Regex$MatchData__Ljava_lang_CharSequence = (function($$this) {
  if (($$this.start__I() >= 0)) {
    return ScalaJS.charSequenceSubSequence($$this.source__Ljava_lang_CharSequence(), 0, $$this.start__I())
  } else {
    return null
  }
});
ScalaJS.impls.scala_util_matching_Regex$MatchData$class__before__Lscala_util_matching_Regex$MatchData__I__Ljava_lang_CharSequence = (function($$this, i) {
  if (($$this.start__I__I(i) >= 0)) {
    return ScalaJS.charSequenceSubSequence($$this.source__Ljava_lang_CharSequence(), 0, $$this.start__I__I(i))
  } else {
    return null
  }
});
ScalaJS.impls.scala_util_matching_Regex$MatchData$class__after__Lscala_util_matching_Regex$MatchData__Ljava_lang_CharSequence = (function($$this) {
  if (($$this.end__I() >= 0)) {
    return ScalaJS.charSequenceSubSequence($$this.source__Ljava_lang_CharSequence(), $$this.end__I(), ScalaJS.charSequenceLength($$this.source__Ljava_lang_CharSequence()))
  } else {
    return null
  }
});
ScalaJS.impls.scala_util_matching_Regex$MatchData$class__after__Lscala_util_matching_Regex$MatchData__I__Ljava_lang_CharSequence = (function($$this, i) {
  if (($$this.end__I__I(i) >= 0)) {
    return ScalaJS.charSequenceSubSequence($$this.source__Ljava_lang_CharSequence(), $$this.end__I__I(i), ScalaJS.charSequenceLength($$this.source__Ljava_lang_CharSequence()))
  } else {
    return null
  }
});
ScalaJS.impls.scala_util_matching_Regex$MatchData$class__scala$util$matching$Regex$MatchData$$nameToIndex__Lscala_util_matching_Regex$MatchData__Lscala_collection_immutable_Map = (function($$this) {
  var jsx$4 = ScalaJS.as.scala_collection_immutable_MapLike(ScalaJS.modules.scala_Predef().Map__Lscala_collection_immutable_Map$().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_collection_immutable_Nil()));
  var x$1 = "";
  var jsx$3 = $$this.groupNames__Lscala_collection_Seq().toList__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(x$1);
  var jsx$2 = jsx$3.zipWithIndex__Lscala_collection_generic_CanBuildFrom__O(ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom());
  var jsx$1 = ScalaJS.as.scala_collection_GenTraversableOnce(jsx$2);
  return jsx$4.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_Map(jsx$1)
});
ScalaJS.impls.scala_util_matching_Regex$MatchData$class__group__Lscala_util_matching_Regex$MatchData__T__T = (function($$this, id) {
  var x1 = $$this.scala$util$matching$Regex$MatchData$$nameToIndex__Lscala_collection_immutable_Map().get__O__Lscala_Option(id);
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
    throw new ScalaJS.c.java_util_NoSuchElementException().init___T((("group name " + id) + " not defined"))
  };
  if (ScalaJS.is.scala_Some(x1)) {
    var x2 = ScalaJS.as.scala_Some(x1);
    var index = ScalaJS.uI(x2.x__O());
    return $$this.group__I__T(index)
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.impls.scala_util_matching_Regex$MatchData$class__toString__Lscala_util_matching_Regex$MatchData__T = (function($$this) {
  return $$this.matched__T()
});
ScalaJS.impls.scala_util_matching_Regex$MatchData$class__$init$__Lscala_util_matching_Regex$MatchData__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=Regex$MatchData$class.js.map
