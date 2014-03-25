/** @constructor */
ScalaJS.c.java_util_regex_Matcher$SealedResult = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.inputstr$1 = null;
  this.lastMatch$1 = null
});
ScalaJS.c.java_util_regex_Matcher$SealedResult.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_util_regex_Matcher$SealedResult.prototype.constructor = ScalaJS.c.java_util_regex_Matcher$SealedResult;
ScalaJS.c.java_util_regex_Matcher$SealedResult.prototype.groupCount__I = (function() {
  return ScalaJS.modules.java_util_regex_Matcher().java$util$regex$Matcher$$jsNumberToInt__Lscala_scalajs_js_Number__I((this.ensureLastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult()["length"] - 1))
});
ScalaJS.c.java_util_regex_Matcher$SealedResult.prototype.start__I = (function() {
  return ScalaJS.modules.java_util_regex_Matcher().java$util$regex$Matcher$$jsNumberToInt__Lscala_scalajs_js_Number__I(this.ensureLastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult()["index"])
});
ScalaJS.c.java_util_regex_Matcher$SealedResult.prototype.end__I = (function() {
  return (this.start__I() + ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(this.group__T()))
});
ScalaJS.c.java_util_regex_Matcher$SealedResult.prototype.group__T = (function() {
  return this.ensureLastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult()[0]
});
ScalaJS.c.java_util_regex_Matcher$SealedResult.prototype.start__I__I = (function(group) {
  if ((group === 0)) {
    return this.start__I()
  } else {
    var last = this.ensureLastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult();
    return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__indexOf__Lscala_scalajs_runtime_RuntimeString__T__I__I(this.inputstr$1, last[group], ScalaJS.modules.java_util_regex_Matcher().java$util$regex$Matcher$$jsNumberToInt__Lscala_scalajs_js_Number__I(last["index"]))
  }
});
ScalaJS.c.java_util_regex_Matcher$SealedResult.prototype.end__I__I = (function(group) {
  return (this.start__I__I(group) + ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(this.group__I__T(group)))
});
ScalaJS.c.java_util_regex_Matcher$SealedResult.prototype.group__I__T = (function(group) {
  return this.ensureLastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult()[group]
});
ScalaJS.c.java_util_regex_Matcher$SealedResult.prototype.ensureLastMatch__p1__Lscala_scalajs_js_RegExp$ExecResult = (function() {
  if ((this.lastMatch$1 === null)) {
    throw new ScalaJS.c.java_lang_IllegalStateException().init___T("No match available")
  };
  return this.lastMatch$1
});
ScalaJS.c.java_util_regex_Matcher$SealedResult.prototype.init___T__Lscala_scalajs_js_RegExp$ExecResult = (function(inputstr, lastMatch) {
  this.inputstr$1 = inputstr;
  this.lastMatch$1 = lastMatch;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.java_util_regex_Matcher$SealedResult.prototype.group__I__ = (function(group) {
  return this.group__I__T(group)
});
ScalaJS.c.java_util_regex_Matcher$SealedResult.prototype.end__I__ = (function(group$2) {
  return ScalaJS.bI(this.end__I__I(group$2))
});
ScalaJS.c.java_util_regex_Matcher$SealedResult.prototype.start__I__ = (function(group$3) {
  return ScalaJS.bI(this.start__I__I(group$3))
});
ScalaJS.c.java_util_regex_Matcher$SealedResult.prototype.group__ = (function() {
  return this.group__T()
});
ScalaJS.c.java_util_regex_Matcher$SealedResult.prototype.end__ = (function() {
  return ScalaJS.bI(this.end__I())
});
ScalaJS.c.java_util_regex_Matcher$SealedResult.prototype.start__ = (function() {
  return ScalaJS.bI(this.start__I())
});
ScalaJS.c.java_util_regex_Matcher$SealedResult.prototype.groupCount__ = (function() {
  return ScalaJS.bI(this.groupCount__I())
});
/** @constructor */
ScalaJS.inheritable.java_util_regex_Matcher$SealedResult = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_regex_Matcher$SealedResult.prototype = ScalaJS.c.java_util_regex_Matcher$SealedResult.prototype;
ScalaJS.is.java_util_regex_Matcher$SealedResult = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_regex_Matcher$SealedResult)))
});
ScalaJS.as.java_util_regex_Matcher$SealedResult = (function(obj) {
  if ((ScalaJS.is.java_util_regex_Matcher$SealedResult(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.regex.Matcher$SealedResult")
  }
});
ScalaJS.isArrayOf.java_util_regex_Matcher$SealedResult = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_regex_Matcher$SealedResult)))
});
ScalaJS.asArrayOf.java_util_regex_Matcher$SealedResult = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_regex_Matcher$SealedResult(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.regex.Matcher$SealedResult;", depth)
  }
});
ScalaJS.data.java_util_regex_Matcher$SealedResult = new ScalaJS.ClassTypeData({
  java_util_regex_Matcher$SealedResult: 0
}, false, "java.util.regex.Matcher$SealedResult", ScalaJS.data.java_lang_Object, {
  java_util_regex_Matcher$SealedResult: 1,
  java_util_regex_MatchResult: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_regex_Matcher$SealedResult.prototype.$classData = ScalaJS.data.java_util_regex_Matcher$SealedResult;
//@ sourceMappingURL=Matcher$SealedResult.js.map
