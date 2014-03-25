/** @constructor */
ScalaJS.c.java_util_regex_Matcher = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.pattern0$1 = null;
  this.input0$1 = null;
  this.regionStart0$1 = 0;
  this.regionEnd0$1 = 0;
  this.regexp$1 = null;
  this.inputstr$1 = null;
  this.lastMatch$1 = null;
  this.lastMatchIsValid$1 = false;
  this.canStillFind$1 = false;
  this.appendPos$1 = 0
});
ScalaJS.c.java_util_regex_Matcher.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_util_regex_Matcher.prototype.constructor = ScalaJS.c.java_util_regex_Matcher;
ScalaJS.c.java_util_regex_Matcher.prototype.pattern0__p1__Ljava_util_regex_Pattern = (function() {
  return this.pattern0$1
});
ScalaJS.c.java_util_regex_Matcher.prototype.pattern0$und$eq__p1__Ljava_util_regex_Pattern__V = (function(x$1) {
  this.pattern0$1 = x$1
});
ScalaJS.c.java_util_regex_Matcher.prototype.input0__p1__Ljava_lang_CharSequence = (function() {
  return this.input0$1
});
ScalaJS.c.java_util_regex_Matcher.prototype.input0$und$eq__p1__Ljava_lang_CharSequence__V = (function(x$1) {
  this.input0$1 = x$1
});
ScalaJS.c.java_util_regex_Matcher.prototype.regionStart0__p1__I = (function() {
  return this.regionStart0$1
});
ScalaJS.c.java_util_regex_Matcher.prototype.regionStart0$und$eq__p1__I__V = (function(x$1) {
  this.regionStart0$1 = x$1
});
ScalaJS.c.java_util_regex_Matcher.prototype.regionEnd0__p1__I = (function() {
  return this.regionEnd0$1
});
ScalaJS.c.java_util_regex_Matcher.prototype.regionEnd0$und$eq__p1__I__V = (function(x$1) {
  this.regionEnd0$1 = x$1
});
ScalaJS.c.java_util_regex_Matcher.prototype.pattern__Ljava_util_regex_Pattern = (function() {
  return this.pattern0__p1__Ljava_util_regex_Pattern()
});
ScalaJS.c.java_util_regex_Matcher.prototype.regexp__p1__Lscala_scalajs_js_RegExp = (function() {
  return this.regexp$1
});
ScalaJS.c.java_util_regex_Matcher.prototype.regexp$und$eq__p1__Lscala_scalajs_js_RegExp__V = (function(x$1) {
  this.regexp$1 = x$1
});
ScalaJS.c.java_util_regex_Matcher.prototype.inputstr__p1__T = (function() {
  return this.inputstr$1
});
ScalaJS.c.java_util_regex_Matcher.prototype.inputstr$und$eq__p1__T__V = (function(x$1) {
  this.inputstr$1 = x$1
});
ScalaJS.c.java_util_regex_Matcher.prototype.lastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult = (function() {
  return this.lastMatch$1
});
ScalaJS.c.java_util_regex_Matcher.prototype.lastMatch$und$eq__p1__Lscala_scalajs_js_RegExp$ExecResult__V = (function(x$1) {
  this.lastMatch$1 = x$1
});
ScalaJS.c.java_util_regex_Matcher.prototype.lastMatchIsValid__p1__Z = (function() {
  return this.lastMatchIsValid$1
});
ScalaJS.c.java_util_regex_Matcher.prototype.lastMatchIsValid$und$eq__p1__Z__V = (function(x$1) {
  this.lastMatchIsValid$1 = x$1
});
ScalaJS.c.java_util_regex_Matcher.prototype.canStillFind__p1__Z = (function() {
  return this.canStillFind$1
});
ScalaJS.c.java_util_regex_Matcher.prototype.canStillFind$und$eq__p1__Z__V = (function(x$1) {
  this.canStillFind$1 = x$1
});
ScalaJS.c.java_util_regex_Matcher.prototype.appendPos__p1__I = (function() {
  return this.appendPos$1
});
ScalaJS.c.java_util_regex_Matcher.prototype.appendPos$und$eq__p1__I__V = (function(x$1) {
  this.appendPos$1 = x$1
});
ScalaJS.c.java_util_regex_Matcher.prototype.matches__Z = (function() {
  this.reset__Ljava_util_regex_Matcher();
  this.find__Z();
  if (((this.lastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult() !== null) && ((this.start__I() !== 0) || (this.end__I() !== ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(this.inputstr__p1__T()))))) {
    this.reset__Ljava_util_regex_Matcher()
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  return (this.lastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult() !== null)
});
ScalaJS.c.java_util_regex_Matcher.prototype.lookingAt__Z = (function() {
  this.reset__Ljava_util_regex_Matcher();
  this.find__Z();
  if (((this.lastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult() !== null) && (this.start__I() !== 0))) {
    this.reset__Ljava_util_regex_Matcher()
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  return (this.lastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult() !== null)
});
ScalaJS.c.java_util_regex_Matcher.prototype.find__Z = (function() {
  if (this.canStillFind__p1__Z()) {
    this.lastMatchIsValid$und$eq__p1__Z__V(true);
    this.lastMatch$und$eq__p1__Lscala_scalajs_js_RegExp$ExecResult__V(this.regexp__p1__Lscala_scalajs_js_RegExp()["exec"](this.inputstr__p1__T()));
    if ((this.lastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult() !== null)) {
      if (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__isEmpty__Lscala_scalajs_runtime_RuntimeString__Z(this.lastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult()[0])) {
        var ev$1 = this.regexp__p1__Lscala_scalajs_js_RegExp();
        ev$1["lastIndex"] = (ev$1["lastIndex"] + 1)
      }
    } else {
      this.canStillFind$und$eq__p1__Z__V(false)
    };
    return (this.lastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult() !== null)
  } else {
    return false
  }
});
ScalaJS.c.java_util_regex_Matcher.prototype.find__I__Z = (function(start) {
  this.reset__Ljava_util_regex_Matcher();
  this.regexp__p1__Lscala_scalajs_js_RegExp()["lastIndex"] = start;
  return this.find__Z()
});
ScalaJS.c.java_util_regex_Matcher.prototype.appendReplacement__Ljava_lang_StringBuffer__T__Ljava_util_regex_Matcher = (function(sb, replacement) {
  sb.append__T__Ljava_lang_StringBuffer(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(this.inputstr__p1__T(), this.appendPos__p1__I(), this.start__I()));
  var len = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(replacement);
  var i = 0;
  while ((i < len)) {
    var x1 = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(replacement, i);
    switch (x1) {
      case 36:
        {
          i = (i + 1);
          var j = i;
          while (((i < len) && this.isDigit$1__p1__C__Z(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(replacement, i)))) {
            i = (i + 1)
          };
          var group = ScalaJS.modules.java_lang_Integer().parseInt__T__I(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(replacement, j, i));
          sb.append__T__Ljava_lang_StringBuffer(this.group__I__T(group));
          break
        };
      case 92:
        {
          i = (i + 1);
          if ((i < len)) {
            sb.append__C__Ljava_lang_StringBuffer(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(replacement, i))
          } else {
            ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
          };
          i = (i + 1);
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break
        };
      default:
        {
          sb.append__C__Ljava_lang_StringBuffer(x1);
          i = (i + 1);
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
        };
    }
  };
  this.appendPos$und$eq__p1__I__V(this.end__I());
  return this
});
ScalaJS.c.java_util_regex_Matcher.prototype.appendTail__Ljava_lang_StringBuffer__Ljava_lang_StringBuffer = (function(sb) {
  sb.append__T__Ljava_lang_StringBuffer(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__T(this.inputstr__p1__T(), this.appendPos__p1__I()));
  this.appendPos$und$eq__p1__I__V(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(this.inputstr__p1__T()));
  return sb
});
ScalaJS.c.java_util_regex_Matcher.prototype.replaceFirst__T__T = (function(replacement) {
  this.reset__Ljava_util_regex_Matcher();
  if (this.find__Z()) {
    var sb = new ScalaJS.c.java_lang_StringBuffer().init___();
    this.appendReplacement__Ljava_lang_StringBuffer__T__Ljava_util_regex_Matcher(sb, replacement);
    this.appendTail__Ljava_lang_StringBuffer__Ljava_lang_StringBuffer(sb);
    return sb.toString__T()
  } else {
    return this.inputstr__p1__T()
  }
});
ScalaJS.c.java_util_regex_Matcher.prototype.replaceAll__T__T = (function(replacement) {
  this.reset__Ljava_util_regex_Matcher();
  var sb = new ScalaJS.c.java_lang_StringBuffer().init___();
  while (this.find__Z()) {
    this.appendReplacement__Ljava_lang_StringBuffer__T__Ljava_util_regex_Matcher(sb, replacement)
  };
  this.appendTail__Ljava_lang_StringBuffer__Ljava_lang_StringBuffer(sb);
  return sb.toString__T()
});
ScalaJS.c.java_util_regex_Matcher.prototype.reset__Ljava_util_regex_Matcher = (function() {
  this.regexp__p1__Lscala_scalajs_js_RegExp()["lastIndex"] = 0;
  this.lastMatch$und$eq__p1__Lscala_scalajs_js_RegExp$ExecResult__V(null);
  this.lastMatchIsValid$und$eq__p1__Z__V(false);
  this.canStillFind$und$eq__p1__Z__V(true);
  this.appendPos$und$eq__p1__I__V(0);
  return this
});
ScalaJS.c.java_util_regex_Matcher.prototype.reset__Ljava_lang_CharSequence__Ljava_util_regex_Matcher = (function(input) {
  this.regionStart0$und$eq__p1__I__V(0);
  this.regionEnd0$und$eq__p1__I__V(ScalaJS.charSequenceLength(input));
  this.input0$und$eq__p1__Ljava_lang_CharSequence__V(input);
  this.inputstr$und$eq__p1__T__V(ScalaJS.objectToString(this.input0__p1__Ljava_lang_CharSequence()));
  return this.reset__Ljava_util_regex_Matcher()
});
ScalaJS.c.java_util_regex_Matcher.prototype.usePattern__Ljava_util_regex_Pattern__Ljava_util_regex_Matcher = (function(pattern) {
  var prevLastIndex = this.regexp__p1__Lscala_scalajs_js_RegExp()["lastIndex"];
  this.pattern0$und$eq__p1__Ljava_util_regex_Pattern__V(pattern);
  this.regexp$und$eq__p1__Lscala_scalajs_js_RegExp__V(new ScalaJS.g["RegExp"](pattern.jspattern__T(), pattern.jsflags__T()));
  this.regexp__p1__Lscala_scalajs_js_RegExp()["lastIndex"] = prevLastIndex;
  this.lastMatch$und$eq__p1__Lscala_scalajs_js_RegExp$ExecResult__V(null);
  return this
});
ScalaJS.c.java_util_regex_Matcher.prototype.ensureLastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult = (function() {
  if ((this.lastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult() === null)) {
    throw new ScalaJS.c.java_lang_IllegalStateException().init___T("No match available")
  };
  return this.lastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult()
});
ScalaJS.c.java_util_regex_Matcher.prototype.groupCount__I = (function() {
  return ScalaJS.modules.java_util_regex_Matcher().java$util$regex$Matcher$$jsNumberToInt__Lscala_scalajs_js_Number__I((this.ensureLastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult()["length"] - 1))
});
ScalaJS.c.java_util_regex_Matcher.prototype.start__I = (function() {
  return ScalaJS.modules.java_util_regex_Matcher().java$util$regex$Matcher$$jsNumberToInt__Lscala_scalajs_js_Number__I(this.ensureLastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult()["index"])
});
ScalaJS.c.java_util_regex_Matcher.prototype.end__I = (function() {
  return (this.start__I() + ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(this.group__T()))
});
ScalaJS.c.java_util_regex_Matcher.prototype.group__T = (function() {
  return this.ensureLastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult()[0]
});
ScalaJS.c.java_util_regex_Matcher.prototype.start__I__I = (function(group) {
  if ((group === 0)) {
    return this.start__I()
  } else {
    var last = this.ensureLastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult();
    return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__indexOf__Lscala_scalajs_runtime_RuntimeString__T__I__I(this.inputstr__p1__T(), last[group], ScalaJS.modules.java_util_regex_Matcher().java$util$regex$Matcher$$jsNumberToInt__Lscala_scalajs_js_Number__I(last["index"]))
  }
});
ScalaJS.c.java_util_regex_Matcher.prototype.end__I__I = (function(group) {
  return (this.start__I__I(group) + ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(this.group__I__T(group)))
});
ScalaJS.c.java_util_regex_Matcher.prototype.group__I__T = (function(group) {
  return this.ensureLastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult()[group]
});
ScalaJS.c.java_util_regex_Matcher.prototype.toMatchResult__Ljava_util_regex_MatchResult = (function() {
  return new ScalaJS.c.java_util_regex_Matcher$SealedResult().init___T__Lscala_scalajs_js_RegExp$ExecResult(this.inputstr__p1__T(), this.lastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult())
});
ScalaJS.c.java_util_regex_Matcher.prototype.hitEnd__Z = (function() {
  return (this.lastMatchIsValid__p1__Z() && ((this.lastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult() === null) || (this.end__I() === ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(this.inputstr__p1__T()))))
});
ScalaJS.c.java_util_regex_Matcher.prototype.requireEnd__Z = (function() {
  return ScalaJS.modules.scala_Predef().$$qmark$qmark$qmark__Lscala_Nothing()
});
ScalaJS.c.java_util_regex_Matcher.prototype.regionStart__I = (function() {
  return this.regionStart0__p1__I()
});
ScalaJS.c.java_util_regex_Matcher.prototype.regionEnd__I = (function() {
  return this.regionEnd0__p1__I()
});
ScalaJS.c.java_util_regex_Matcher.prototype.region__I__I__Ljava_util_regex_Matcher = (function(start, end) {
  return new ScalaJS.c.java_util_regex_Matcher().init___Ljava_util_regex_Pattern__Ljava_lang_CharSequence__I__I(this.pattern0__p1__Ljava_util_regex_Pattern(), this.input0__p1__Ljava_lang_CharSequence(), start, end)
});
ScalaJS.c.java_util_regex_Matcher.prototype.hasTransparentBounds__Z = (function() {
  return false
});
ScalaJS.c.java_util_regex_Matcher.prototype.useTransparentBounds__Z__Ljava_util_regex_Matcher = (function(b) {
  return ScalaJS.modules.scala_Predef().$$qmark$qmark$qmark__Lscala_Nothing()
});
ScalaJS.c.java_util_regex_Matcher.prototype.hasAnchoringBounds__Z = (function() {
  return true
});
ScalaJS.c.java_util_regex_Matcher.prototype.useAnchoringBounds__Z__Ljava_util_regex_Matcher = (function(b) {
  return ScalaJS.modules.scala_Predef().$$qmark$qmark$qmark__Lscala_Nothing()
});
ScalaJS.c.java_util_regex_Matcher.prototype.isDigit$1__p1__C__Z = (function(c) {
  return ((c >= 48) && (c <= 57))
});
ScalaJS.c.java_util_regex_Matcher.prototype.init___Ljava_util_regex_Pattern__Ljava_lang_CharSequence__I__I = (function(pattern0, input0, regionStart0, regionEnd0) {
  this.pattern0$1 = pattern0;
  this.input0$1 = input0;
  this.regionStart0$1 = regionStart0;
  this.regionEnd0$1 = regionEnd0;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.regexp$1 = new ScalaJS.g["RegExp"](this.pattern0__p1__Ljava_util_regex_Pattern().jspattern__T(), this.pattern0__p1__Ljava_util_regex_Pattern().jsflags__T());
  this.inputstr$1 = ScalaJS.objectToString(ScalaJS.charSequenceSubSequence(this.input0__p1__Ljava_lang_CharSequence(), this.regionStart0__p1__I(), this.regionEnd0__p1__I()));
  this.lastMatch$1 = null;
  this.lastMatchIsValid$1 = false;
  this.canStillFind$1 = true;
  this.appendPos$1 = 0;
  return this
});
ScalaJS.c.java_util_regex_Matcher.prototype.useAnchoringBounds__Z__ = (function(b) {
  return this.useAnchoringBounds__Z__Ljava_util_regex_Matcher(b)
});
ScalaJS.c.java_util_regex_Matcher.prototype.hasAnchoringBounds__ = (function() {
  return ScalaJS.bZ(this.hasAnchoringBounds__Z())
});
ScalaJS.c.java_util_regex_Matcher.prototype.useTransparentBounds__Z__ = (function(b$2) {
  return this.useTransparentBounds__Z__Ljava_util_regex_Matcher(b$2)
});
ScalaJS.c.java_util_regex_Matcher.prototype.hasTransparentBounds__ = (function() {
  return ScalaJS.bZ(this.hasTransparentBounds__Z())
});
ScalaJS.c.java_util_regex_Matcher.prototype.region__I__I__ = (function(start, end) {
  return this.region__I__I__Ljava_util_regex_Matcher(start, end)
});
ScalaJS.c.java_util_regex_Matcher.prototype.regionEnd__ = (function() {
  return ScalaJS.bI(this.regionEnd__I())
});
ScalaJS.c.java_util_regex_Matcher.prototype.regionStart__ = (function() {
  return ScalaJS.bI(this.regionStart__I())
});
ScalaJS.c.java_util_regex_Matcher.prototype.requireEnd__ = (function() {
  return ScalaJS.bZ(this.requireEnd__Z())
});
ScalaJS.c.java_util_regex_Matcher.prototype.hitEnd__ = (function() {
  return ScalaJS.bZ(this.hitEnd__Z())
});
ScalaJS.c.java_util_regex_Matcher.prototype.toMatchResult__ = (function() {
  return this.toMatchResult__Ljava_util_regex_MatchResult()
});
ScalaJS.c.java_util_regex_Matcher.prototype.group__I__ = (function(group) {
  return this.group__I__T(group)
});
ScalaJS.c.java_util_regex_Matcher.prototype.end__I__ = (function(group$2) {
  return ScalaJS.bI(this.end__I__I(group$2))
});
ScalaJS.c.java_util_regex_Matcher.prototype.start__I__ = (function(group$3) {
  return ScalaJS.bI(this.start__I__I(group$3))
});
ScalaJS.c.java_util_regex_Matcher.prototype.group__ = (function() {
  return this.group__T()
});
ScalaJS.c.java_util_regex_Matcher.prototype.end__ = (function() {
  return ScalaJS.bI(this.end__I())
});
ScalaJS.c.java_util_regex_Matcher.prototype.start__ = (function() {
  return ScalaJS.bI(this.start__I())
});
ScalaJS.c.java_util_regex_Matcher.prototype.groupCount__ = (function() {
  return ScalaJS.bI(this.groupCount__I())
});
ScalaJS.c.java_util_regex_Matcher.prototype.usePattern__Ljava_util_regex_Pattern__ = (function(pattern) {
  return this.usePattern__Ljava_util_regex_Pattern__Ljava_util_regex_Matcher(pattern)
});
ScalaJS.c.java_util_regex_Matcher.prototype.reset__Ljava_lang_CharSequence__ = (function(input) {
  return this.reset__Ljava_lang_CharSequence__Ljava_util_regex_Matcher(input)
});
ScalaJS.c.java_util_regex_Matcher.prototype.reset__ = (function() {
  return this.reset__Ljava_util_regex_Matcher()
});
ScalaJS.c.java_util_regex_Matcher.prototype.replaceAll__T__ = (function(replacement) {
  return this.replaceAll__T__T(replacement)
});
ScalaJS.c.java_util_regex_Matcher.prototype.replaceFirst__T__ = (function(replacement$2) {
  return this.replaceFirst__T__T(replacement$2)
});
ScalaJS.c.java_util_regex_Matcher.prototype.appendTail__Ljava_lang_StringBuffer__ = (function(sb) {
  return this.appendTail__Ljava_lang_StringBuffer__Ljava_lang_StringBuffer(sb)
});
ScalaJS.c.java_util_regex_Matcher.prototype.appendReplacement__Ljava_lang_StringBuffer__T__ = (function(sb$2, replacement$3) {
  return this.appendReplacement__Ljava_lang_StringBuffer__T__Ljava_util_regex_Matcher(sb$2, replacement$3)
});
ScalaJS.c.java_util_regex_Matcher.prototype.find__I__ = (function(start$2) {
  return ScalaJS.bZ(this.find__I__Z(start$2))
});
ScalaJS.c.java_util_regex_Matcher.prototype.find__ = (function() {
  return ScalaJS.bZ(this.find__Z())
});
ScalaJS.c.java_util_regex_Matcher.prototype.lookingAt__ = (function() {
  return ScalaJS.bZ(this.lookingAt__Z())
});
ScalaJS.c.java_util_regex_Matcher.prototype.matches__ = (function() {
  return ScalaJS.bZ(this.matches__Z())
});
ScalaJS.c.java_util_regex_Matcher.prototype.pattern__ = (function() {
  return this.pattern__Ljava_util_regex_Pattern()
});
/** @constructor */
ScalaJS.inheritable.java_util_regex_Matcher = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_regex_Matcher.prototype = ScalaJS.c.java_util_regex_Matcher.prototype;
ScalaJS.is.java_util_regex_Matcher = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_regex_Matcher)))
});
ScalaJS.as.java_util_regex_Matcher = (function(obj) {
  if ((ScalaJS.is.java_util_regex_Matcher(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.regex.Matcher")
  }
});
ScalaJS.isArrayOf.java_util_regex_Matcher = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_regex_Matcher)))
});
ScalaJS.asArrayOf.java_util_regex_Matcher = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_regex_Matcher(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.regex.Matcher;", depth)
  }
});
ScalaJS.data.java_util_regex_Matcher = new ScalaJS.ClassTypeData({
  java_util_regex_Matcher: 0
}, false, "java.util.regex.Matcher", ScalaJS.data.java_lang_Object, {
  java_util_regex_Matcher: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_regex_Matcher.prototype.$classData = ScalaJS.data.java_util_regex_Matcher;
//@ sourceMappingURL=Matcher.js.map
