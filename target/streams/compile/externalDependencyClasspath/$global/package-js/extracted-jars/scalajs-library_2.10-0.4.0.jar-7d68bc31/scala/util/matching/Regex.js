/** @constructor */
ScalaJS.c.scala_util_matching_Regex = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.scala$util$matching$Regex$$regex$f = null;
  this.scala$util$matching$Regex$$groupNames$f = null;
  this.pattern$1 = null
});
ScalaJS.c.scala_util_matching_Regex.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_matching_Regex.prototype.constructor = ScalaJS.c.scala_util_matching_Regex;
ScalaJS.c.scala_util_matching_Regex.prototype.pattern__Ljava_util_regex_Pattern = (function() {
  return this.pattern$1
});
ScalaJS.c.scala_util_matching_Regex.prototype.unapplySeq__O__Lscala_Option = (function(target) {
  var x1 = target;
  if (ScalaJS.is.java_lang_CharSequence(x1)) {
    var x2 = ScalaJS.as.java_lang_CharSequence(x1);
    var m = this.pattern__Ljava_util_regex_Pattern().matcher__Ljava_lang_CharSequence__Ljava_util_regex_Matcher(x2);
    if (this.runMatcher__Ljava_util_regex_Matcher__Z(m)) {
      return new ScalaJS.c.scala_Some().init___O(ScalaJS.modules.scala_runtime_RichInt().to$extension0__I__I__Lscala_collection_immutable_Range$Inclusive(ScalaJS.modules.scala_Predef().intWrapper__I__I(1), m.groupCount__I()).toList__Lscala_collection_immutable_List().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(m$1) {
        return (function(x$1) {
          x$1 = ScalaJS.uI(x$1);
          return m$1.group__I__T(x$1)
        })
      })(m)), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
    } else {
      return ScalaJS.modules.scala_None()
    }
  };
  if (ScalaJS.is.scala_util_matching_Regex$Match(x1)) {
    var x3 = ScalaJS.as.scala_util_matching_Regex$Match(x1);
    return this.unapplySeq__O__Lscala_Option(x3.matched__T())
  };
  return ScalaJS.modules.scala_None()
});
ScalaJS.c.scala_util_matching_Regex.prototype.runMatcher__Ljava_util_regex_Matcher__Z = (function(m) {
  return m.matches__Z()
});
ScalaJS.c.scala_util_matching_Regex.prototype.findAllIn__Ljava_lang_CharSequence__Lscala_util_matching_Regex$MatchIterator = (function(source) {
  return new ScalaJS.c.scala_util_matching_Regex$MatchIterator().init___Ljava_lang_CharSequence__Lscala_util_matching_Regex__Lscala_collection_Seq(source, this, this.scala$util$matching$Regex$$groupNames$f)
});
ScalaJS.c.scala_util_matching_Regex.prototype.findAllMatchIn__Ljava_lang_CharSequence__Lscala_collection_Iterator = (function(source) {
  var matchIterator = this.findAllIn__Ljava_lang_CharSequence__Lscala_util_matching_Regex$MatchIterator(source);
  return new ScalaJS.c.scala_util_matching_Regex$$anon$4().init___Lscala_util_matching_Regex__Lscala_util_matching_Regex$MatchIterator(this, matchIterator)
});
ScalaJS.c.scala_util_matching_Regex.prototype.findFirstIn__Ljava_lang_CharSequence__Lscala_Option = (function(source) {
  var m = this.pattern__Ljava_util_regex_Pattern().matcher__Ljava_lang_CharSequence__Ljava_util_regex_Matcher(source);
  if (m.find__Z()) {
    return new ScalaJS.c.scala_Some().init___O(m.group__T())
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_util_matching_Regex.prototype.findFirstMatchIn__Ljava_lang_CharSequence__Lscala_Option = (function(source) {
  var m = this.pattern__Ljava_util_regex_Pattern().matcher__Ljava_lang_CharSequence__Ljava_util_regex_Matcher(source);
  if (m.find__Z()) {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_util_matching_Regex$Match().init___Ljava_lang_CharSequence__Ljava_util_regex_Matcher__Lscala_collection_Seq(source, m, this.scala$util$matching$Regex$$groupNames$f))
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_util_matching_Regex.prototype.findPrefixOf__Ljava_lang_CharSequence__Lscala_Option = (function(source) {
  var m = this.pattern__Ljava_util_regex_Pattern().matcher__Ljava_lang_CharSequence__Ljava_util_regex_Matcher(source);
  if (m.lookingAt__Z()) {
    return new ScalaJS.c.scala_Some().init___O(m.group__T())
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_util_matching_Regex.prototype.findPrefixMatchOf__Ljava_lang_CharSequence__Lscala_Option = (function(source) {
  var m = this.pattern__Ljava_util_regex_Pattern().matcher__Ljava_lang_CharSequence__Ljava_util_regex_Matcher(source);
  if (m.lookingAt__Z()) {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_util_matching_Regex$Match().init___Ljava_lang_CharSequence__Ljava_util_regex_Matcher__Lscala_collection_Seq(source, m, this.scala$util$matching$Regex$$groupNames$f))
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_util_matching_Regex.prototype.replaceAllIn__Ljava_lang_CharSequence__T__T = (function(target, replacement) {
  var m = this.pattern__Ljava_util_regex_Pattern().matcher__Ljava_lang_CharSequence__Ljava_util_regex_Matcher(target);
  return m.replaceAll__T__T(replacement)
});
ScalaJS.c.scala_util_matching_Regex.prototype.replaceAllIn__Ljava_lang_CharSequence__Lscala_Function1__T = (function(target, replacer) {
  var it = new ScalaJS.c.scala_util_matching_Regex$MatchIterator().init___Ljava_lang_CharSequence__Lscala_util_matching_Regex__Lscala_collection_Seq(target, this, this.scala$util$matching$Regex$$groupNames$f).replacementData__Lscala_collection_AbstractIterator();
  it.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(replacer$1, it$1) {
    return (function(md) {
      return ScalaJS.as.scala_util_matching_Regex$Replacement(it$1).replace__T__Ljava_util_regex_Matcher(ScalaJS.as.java_lang_String(replacer$1.apply__O__O(md)))
    })
  })(replacer, it)));
  return ScalaJS.as.scala_util_matching_Regex$Replacement(it).replaced__T()
});
ScalaJS.c.scala_util_matching_Regex.prototype.replaceSomeIn__Ljava_lang_CharSequence__Lscala_Function1__T = (function(target, replacer) {
  var it = new ScalaJS.c.scala_util_matching_Regex$MatchIterator().init___Ljava_lang_CharSequence__Lscala_util_matching_Regex__Lscala_collection_Seq(target, this, this.scala$util$matching$Regex$$groupNames$f).replacementData__Lscala_collection_AbstractIterator();
  it.foreach__Lscala_Function1__V(new ScalaJS.c.scala_util_matching_Regex$$anonfun$replaceSomeIn$1().init___Lscala_util_matching_Regex__Lscala_Function1__Lscala_collection_AbstractIterator(this, replacer, it));
  return ScalaJS.as.scala_util_matching_Regex$Replacement(it).replaced__T()
});
ScalaJS.c.scala_util_matching_Regex.prototype.replaceFirstIn__Ljava_lang_CharSequence__T__T = (function(target, replacement) {
  var m = this.pattern__Ljava_util_regex_Pattern().matcher__Ljava_lang_CharSequence__Ljava_util_regex_Matcher(target);
  return m.replaceFirst__T__T(replacement)
});
ScalaJS.c.scala_util_matching_Regex.prototype.split__Ljava_lang_CharSequence__AT = (function(toSplit) {
  return this.pattern__Ljava_util_regex_Pattern().split__Ljava_lang_CharSequence__AT(toSplit)
});
ScalaJS.c.scala_util_matching_Regex.prototype.unanchored__Lscala_util_matching_UnanchoredRegex = (function() {
  return new ScalaJS.c.scala_util_matching_Regex$$anon$2().init___Lscala_util_matching_Regex(this)
});
ScalaJS.c.scala_util_matching_Regex.prototype.anchored__Lscala_util_matching_Regex = (function() {
  return this
});
ScalaJS.c.scala_util_matching_Regex.prototype.toString__T = (function() {
  return this.scala$util$matching$Regex$$regex$f
});
ScalaJS.c.scala_util_matching_Regex.prototype.init___T__Lscala_collection_Seq = (function(regex, groupNames) {
  this.scala$util$matching$Regex$$regex$f = regex;
  this.scala$util$matching$Regex$$groupNames$f = groupNames;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.pattern$1 = ScalaJS.modules.java_util_regex_Pattern().compile__T__Ljava_util_regex_Pattern(regex);
  return this
});
ScalaJS.c.scala_util_matching_Regex.prototype.anchored__ = (function() {
  return this.anchored__Lscala_util_matching_Regex()
});
ScalaJS.c.scala_util_matching_Regex.prototype.unanchored__ = (function() {
  return this.unanchored__Lscala_util_matching_UnanchoredRegex()
});
ScalaJS.c.scala_util_matching_Regex.prototype.split__Ljava_lang_CharSequence__ = (function(toSplit) {
  return this.split__Ljava_lang_CharSequence__AT(toSplit)
});
ScalaJS.c.scala_util_matching_Regex.prototype.replaceFirstIn__Ljava_lang_CharSequence__T__ = (function(target, replacement) {
  return this.replaceFirstIn__Ljava_lang_CharSequence__T__T(target, replacement)
});
ScalaJS.c.scala_util_matching_Regex.prototype.replaceSomeIn__Ljava_lang_CharSequence__Lscala_Function1__ = (function(target$2, replacer) {
  return this.replaceSomeIn__Ljava_lang_CharSequence__Lscala_Function1__T(target$2, replacer)
});
ScalaJS.c.scala_util_matching_Regex.prototype.replaceAllIn__Ljava_lang_CharSequence__Lscala_Function1__ = (function(target$3, replacer$2) {
  return this.replaceAllIn__Ljava_lang_CharSequence__Lscala_Function1__T(target$3, replacer$2)
});
ScalaJS.c.scala_util_matching_Regex.prototype.replaceAllIn__Ljava_lang_CharSequence__T__ = (function(target$4, replacement$2) {
  return this.replaceAllIn__Ljava_lang_CharSequence__T__T(target$4, replacement$2)
});
ScalaJS.c.scala_util_matching_Regex.prototype.findPrefixMatchOf__Ljava_lang_CharSequence__ = (function(source) {
  return this.findPrefixMatchOf__Ljava_lang_CharSequence__Lscala_Option(source)
});
ScalaJS.c.scala_util_matching_Regex.prototype.findPrefixOf__Ljava_lang_CharSequence__ = (function(source$2) {
  return this.findPrefixOf__Ljava_lang_CharSequence__Lscala_Option(source$2)
});
ScalaJS.c.scala_util_matching_Regex.prototype.findFirstMatchIn__Ljava_lang_CharSequence__ = (function(source$3) {
  return this.findFirstMatchIn__Ljava_lang_CharSequence__Lscala_Option(source$3)
});
ScalaJS.c.scala_util_matching_Regex.prototype.findFirstIn__Ljava_lang_CharSequence__ = (function(source$4) {
  return this.findFirstIn__Ljava_lang_CharSequence__Lscala_Option(source$4)
});
ScalaJS.c.scala_util_matching_Regex.prototype.findAllMatchIn__Ljava_lang_CharSequence__ = (function(source$5) {
  return this.findAllMatchIn__Ljava_lang_CharSequence__Lscala_collection_Iterator(source$5)
});
ScalaJS.c.scala_util_matching_Regex.prototype.findAllIn__Ljava_lang_CharSequence__ = (function(source$6) {
  return this.findAllIn__Ljava_lang_CharSequence__Lscala_util_matching_Regex$MatchIterator(source$6)
});
ScalaJS.c.scala_util_matching_Regex.prototype.runMatcher__Ljava_util_regex_Matcher__ = (function(m) {
  return ScalaJS.bZ(this.runMatcher__Ljava_util_regex_Matcher__Z(m))
});
ScalaJS.c.scala_util_matching_Regex.prototype.unapplySeq__O__ = (function(target$5) {
  return this.unapplySeq__O__Lscala_Option(target$5)
});
ScalaJS.c.scala_util_matching_Regex.prototype.pattern__ = (function() {
  return this.pattern__Ljava_util_regex_Pattern()
});
/** @constructor */
ScalaJS.inheritable.scala_util_matching_Regex = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_matching_Regex.prototype = ScalaJS.c.scala_util_matching_Regex.prototype;
ScalaJS.is.scala_util_matching_Regex = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_matching_Regex)))
});
ScalaJS.as.scala_util_matching_Regex = (function(obj) {
  if ((ScalaJS.is.scala_util_matching_Regex(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.matching.Regex")
  }
});
ScalaJS.isArrayOf.scala_util_matching_Regex = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_matching_Regex)))
});
ScalaJS.asArrayOf.scala_util_matching_Regex = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_matching_Regex(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.matching.Regex;", depth)
  }
});
ScalaJS.data.scala_util_matching_Regex = new ScalaJS.ClassTypeData({
  scala_util_matching_Regex: 0
}, false, "scala.util.matching.Regex", ScalaJS.data.java_lang_Object, {
  scala_util_matching_Regex: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_matching_Regex.prototype.$classData = ScalaJS.data.scala_util_matching_Regex;
//@ sourceMappingURL=Regex.js.map
