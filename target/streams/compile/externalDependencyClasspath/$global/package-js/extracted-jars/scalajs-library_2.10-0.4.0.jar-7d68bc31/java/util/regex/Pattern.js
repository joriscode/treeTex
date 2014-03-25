/** @constructor */
ScalaJS.c.java_util_regex_Pattern = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.pattern0$1 = null;
  this.flags0$1 = 0;
  this.jspattern$1 = null;
  this.jsflags$1 = null
});
ScalaJS.c.java_util_regex_Pattern.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_util_regex_Pattern.prototype.constructor = ScalaJS.c.java_util_regex_Pattern;
ScalaJS.c.java_util_regex_Pattern.prototype.pattern__T = (function() {
  return this.pattern0$1
});
ScalaJS.c.java_util_regex_Pattern.prototype.flags__I = (function() {
  return this.flags0$1
});
ScalaJS.c.java_util_regex_Pattern.prototype.jspattern__T = (function() {
  return this.jspattern$1
});
ScalaJS.c.java_util_regex_Pattern.prototype.jsflags__T = (function() {
  return this.jsflags$1
});
ScalaJS.c.java_util_regex_Pattern.prototype.toString__T = (function() {
  return this.pattern0$1
});
ScalaJS.c.java_util_regex_Pattern.prototype.matcher__Ljava_lang_CharSequence__Ljava_util_regex_Matcher = (function(input) {
  return new ScalaJS.c.java_util_regex_Matcher().init___Ljava_util_regex_Pattern__Ljava_lang_CharSequence__I__I(this, input, 0, ScalaJS.charSequenceLength(input))
});
ScalaJS.c.java_util_regex_Pattern.prototype.split__Ljava_lang_CharSequence__AT = (function(input) {
  return this.split__Ljava_lang_CharSequence__I__AT(input, 0)
});
ScalaJS.c.java_util_regex_Pattern.prototype.split__Ljava_lang_CharSequence__I__AT = (function(input, limit) {
  var hasLimit = (limit > 0);
  if (hasLimit) {
    var lim = limit
  } else {
    var lim = 2147483647
  };
  var result = new ScalaJS.g["Array"](0);
  var inputStr = ScalaJS.objectToString(input);
  var matcher = this.matcher__Ljava_lang_CharSequence__Ljava_util_regex_Matcher(inputStr);
  var prevEnd = 0;
  while (((result["length"] < (lim - 1)) && matcher.find__Z())) {
    result["push"](ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(inputStr, prevEnd, matcher.start__I()));
    prevEnd = matcher.end__I()
  };
  result["push"](ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__T(inputStr, prevEnd));
  var len = (result["length"] | 0);
  if ((limit === 0)) {
    while (((len > 0) && ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__isEmpty__Lscala_scalajs_runtime_RuntimeString__Z(ScalaJS.as.java_lang_String(result[(len - 1)])))) {
      len = (len - 1)
    }
  };
  var actualResult = ScalaJS.newArrayObject(ScalaJS.data.java_lang_String.getArrayOf(), [len]);
  var i = 0;
  while ((i < len)) {
    actualResult.underlying[i] = ScalaJS.as.java_lang_String(result[i]);
    i = (i + 1)
  };
  return actualResult
});
ScalaJS.c.java_util_regex_Pattern.prototype.init___T__I = (function(pattern0, flags0) {
  this.pattern0$1 = pattern0;
  this.flags0$1 = flags0;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  if (((flags0 & 16) !== 0)) {
    var jsx$1 = ScalaJS.modules.java_util_regex_Pattern().quote__T__T(pattern0)
  } else {
    var m = ScalaJS.modules.java_util_regex_Pattern().java$util$regex$Pattern$$splitHackPat__Lscala_scalajs_js_RegExp()["exec"](pattern0);
    if ((m !== null)) {
      var jsx$1 = ScalaJS.modules.java_util_regex_Pattern().quote__T__T(m[1])
    } else {
      var jsx$1 = pattern0
    }
  };
  this.jspattern$1 = jsx$1;
  var f = "g";
  if (((this.flags__I() & 2) !== 0)) {
    f = (("" + f) + "i")
  };
  if (((this.flags__I() & 8) !== 0)) {
    f = (("" + f) + "m")
  };
  var jsx$2 = f;
  this.jsflags$1 = jsx$2;
  return this
});
ScalaJS.c.java_util_regex_Pattern.prototype.split__Ljava_lang_CharSequence__I__ = (function(input, limit) {
  return this.split__Ljava_lang_CharSequence__I__AT(input, limit)
});
ScalaJS.c.java_util_regex_Pattern.prototype.split__Ljava_lang_CharSequence__ = (function(input$2) {
  return this.split__Ljava_lang_CharSequence__AT(input$2)
});
ScalaJS.c.java_util_regex_Pattern.prototype.matcher__Ljava_lang_CharSequence__ = (function(input$3) {
  return this.matcher__Ljava_lang_CharSequence__Ljava_util_regex_Matcher(input$3)
});
ScalaJS.c.java_util_regex_Pattern.prototype.jsflags__ = (function() {
  return this.jsflags__T()
});
ScalaJS.c.java_util_regex_Pattern.prototype.jspattern__ = (function() {
  return this.jspattern__T()
});
ScalaJS.c.java_util_regex_Pattern.prototype.flags__ = (function() {
  return ScalaJS.bI(this.flags__I())
});
ScalaJS.c.java_util_regex_Pattern.prototype.pattern__ = (function() {
  return this.pattern__T()
});
/** @constructor */
ScalaJS.inheritable.java_util_regex_Pattern = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_regex_Pattern.prototype = ScalaJS.c.java_util_regex_Pattern.prototype;
ScalaJS.is.java_util_regex_Pattern = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_regex_Pattern)))
});
ScalaJS.as.java_util_regex_Pattern = (function(obj) {
  if ((ScalaJS.is.java_util_regex_Pattern(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.regex.Pattern")
  }
});
ScalaJS.isArrayOf.java_util_regex_Pattern = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_regex_Pattern)))
});
ScalaJS.asArrayOf.java_util_regex_Pattern = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_regex_Pattern(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.regex.Pattern;", depth)
  }
});
ScalaJS.data.java_util_regex_Pattern = new ScalaJS.ClassTypeData({
  java_util_regex_Pattern: 0
}, false, "java.util.regex.Pattern", ScalaJS.data.java_lang_Object, {
  java_util_regex_Pattern: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_regex_Pattern.prototype.$classData = ScalaJS.data.java_util_regex_Pattern;
//@ sourceMappingURL=Pattern.js.map
