/** @constructor */
ScalaJS.c.java_util_regex_Pattern$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.UNIX$undLINES$1 = 0;
  this.CASE$undINSENSITIVE$1 = 0;
  this.COMMENTS$1 = 0;
  this.MULTILINE$1 = 0;
  this.LITERAL$1 = 0;
  this.DOTALL$1 = 0;
  this.UNICODE$undCASE$1 = 0;
  this.CANON$undEQ$1 = 0;
  this.UNICODE$undCHARACTER$undCLASS$1 = 0;
  this.java$util$regex$Pattern$$splitHackPat$1 = null
});
ScalaJS.c.java_util_regex_Pattern$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_util_regex_Pattern$.prototype.constructor = ScalaJS.c.java_util_regex_Pattern$;
ScalaJS.c.java_util_regex_Pattern$.prototype.UNIX$undLINES__I = (function() {
  return 1
});
ScalaJS.c.java_util_regex_Pattern$.prototype.CASE$undINSENSITIVE__I = (function() {
  return 2
});
ScalaJS.c.java_util_regex_Pattern$.prototype.COMMENTS__I = (function() {
  return 4
});
ScalaJS.c.java_util_regex_Pattern$.prototype.MULTILINE__I = (function() {
  return 8
});
ScalaJS.c.java_util_regex_Pattern$.prototype.LITERAL__I = (function() {
  return 16
});
ScalaJS.c.java_util_regex_Pattern$.prototype.DOTALL__I = (function() {
  return 32
});
ScalaJS.c.java_util_regex_Pattern$.prototype.UNICODE$undCASE__I = (function() {
  return 64
});
ScalaJS.c.java_util_regex_Pattern$.prototype.CANON$undEQ__I = (function() {
  return 128
});
ScalaJS.c.java_util_regex_Pattern$.prototype.UNICODE$undCHARACTER$undCLASS__I = (function() {
  return 256
});
ScalaJS.c.java_util_regex_Pattern$.prototype.compile__T__I__Ljava_util_regex_Pattern = (function(regex, flags) {
  return new ScalaJS.c.java_util_regex_Pattern().init___T__I(regex, flags)
});
ScalaJS.c.java_util_regex_Pattern$.prototype.compile__T__Ljava_util_regex_Pattern = (function(regex) {
  return new ScalaJS.c.java_util_regex_Pattern().init___T__I(regex, 0)
});
ScalaJS.c.java_util_regex_Pattern$.prototype.matches__T__Ljava_lang_CharSequence__Z = (function(regex, input) {
  return this.compile__T__Ljava_util_regex_Pattern(regex).matcher__Ljava_lang_CharSequence__Ljava_util_regex_Matcher(input).matches__Z()
});
ScalaJS.c.java_util_regex_Pattern$.prototype.quote__T__T = (function(s) {
  var result = "";
  var i = 0;
  while ((i < ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(s))) {
    var c = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(s, i);
    var jsx$2 = ("" + result);
    var x1 = c;
    switch (x1) {
      case 92:
        /*<skip>*/;
      case 46:
        /*<skip>*/;
      case 40:
        /*<skip>*/;
      case 41:
        /*<skip>*/;
      case 91:
        /*<skip>*/;
      case 93:
        /*<skip>*/;
      case 123:
        /*<skip>*/;
      case 125:
        /*<skip>*/;
      case 124:
        /*<skip>*/;
      case 63:
        /*<skip>*/;
      case 42:
        /*<skip>*/;
      case 43:
        /*<skip>*/;
      case 94:
        /*<skip>*/;
      case 36:
        {
          var jsx$1 = ("\\" + ScalaJS.bC(c));
          break
        };
      default:
        var jsx$1 = ScalaJS.bC(c);
    };
    result = (jsx$2 + jsx$1);
    i = (i + 1)
  };
  return result
});
ScalaJS.c.java_util_regex_Pattern$.prototype.java$util$regex$Pattern$$splitHackPat__Lscala_scalajs_js_RegExp = (function() {
  return this.java$util$regex$Pattern$$splitHackPat$1
});
ScalaJS.c.java_util_regex_Pattern$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.java_util_regex_Pattern = this;
  this.java$util$regex$Pattern$$splitHackPat$1 = new ScalaJS.g["RegExp"]("^\\\\Q(.)\\\\E$");
  return this
});
ScalaJS.c.java_util_regex_Pattern$.prototype.java$util$regex$Pattern$$splitHackPat__ = (function() {
  return this.java$util$regex$Pattern$$splitHackPat__Lscala_scalajs_js_RegExp()
});
ScalaJS.c.java_util_regex_Pattern$.prototype.quote__T__ = (function(s) {
  return this.quote__T__T(s)
});
ScalaJS.c.java_util_regex_Pattern$.prototype.matches__T__Ljava_lang_CharSequence__ = (function(regex, input) {
  return ScalaJS.bZ(this.matches__T__Ljava_lang_CharSequence__Z(regex, input))
});
ScalaJS.c.java_util_regex_Pattern$.prototype.compile__T__ = (function(regex$2) {
  return this.compile__T__Ljava_util_regex_Pattern(regex$2)
});
ScalaJS.c.java_util_regex_Pattern$.prototype.compile__T__I__ = (function(regex$3, flags) {
  return this.compile__T__I__Ljava_util_regex_Pattern(regex$3, flags)
});
ScalaJS.c.java_util_regex_Pattern$.prototype.UNICODE$undCHARACTER$undCLASS__ = (function() {
  return ScalaJS.bI(this.UNICODE$undCHARACTER$undCLASS__I())
});
ScalaJS.c.java_util_regex_Pattern$.prototype.CANON$undEQ__ = (function() {
  return ScalaJS.bI(this.CANON$undEQ__I())
});
ScalaJS.c.java_util_regex_Pattern$.prototype.UNICODE$undCASE__ = (function() {
  return ScalaJS.bI(this.UNICODE$undCASE__I())
});
ScalaJS.c.java_util_regex_Pattern$.prototype.DOTALL__ = (function() {
  return ScalaJS.bI(this.DOTALL__I())
});
ScalaJS.c.java_util_regex_Pattern$.prototype.LITERAL__ = (function() {
  return ScalaJS.bI(this.LITERAL__I())
});
ScalaJS.c.java_util_regex_Pattern$.prototype.MULTILINE__ = (function() {
  return ScalaJS.bI(this.MULTILINE__I())
});
ScalaJS.c.java_util_regex_Pattern$.prototype.COMMENTS__ = (function() {
  return ScalaJS.bI(this.COMMENTS__I())
});
ScalaJS.c.java_util_regex_Pattern$.prototype.CASE$undINSENSITIVE__ = (function() {
  return ScalaJS.bI(this.CASE$undINSENSITIVE__I())
});
ScalaJS.c.java_util_regex_Pattern$.prototype.UNIX$undLINES__ = (function() {
  return ScalaJS.bI(this.UNIX$undLINES__I())
});
/** @constructor */
ScalaJS.inheritable.java_util_regex_Pattern$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_regex_Pattern$.prototype = ScalaJS.c.java_util_regex_Pattern$.prototype;
ScalaJS.is.java_util_regex_Pattern$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_regex_Pattern$)))
});
ScalaJS.as.java_util_regex_Pattern$ = (function(obj) {
  if ((ScalaJS.is.java_util_regex_Pattern$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.regex.Pattern")
  }
});
ScalaJS.isArrayOf.java_util_regex_Pattern$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_regex_Pattern$)))
});
ScalaJS.asArrayOf.java_util_regex_Pattern$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_regex_Pattern$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.regex.Pattern;", depth)
  }
});
ScalaJS.data.java_util_regex_Pattern$ = new ScalaJS.ClassTypeData({
  java_util_regex_Pattern$: 0
}, false, "java.util.regex.Pattern$", ScalaJS.data.java_lang_Object, {
  java_util_regex_Pattern$: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_regex_Pattern$.prototype.$classData = ScalaJS.data.java_util_regex_Pattern$;
ScalaJS.moduleInstances.java_util_regex_Pattern = undefined;
ScalaJS.modules.java_util_regex_Pattern = (function() {
  if ((!ScalaJS.moduleInstances.java_util_regex_Pattern)) {
    ScalaJS.moduleInstances.java_util_regex_Pattern = new ScalaJS.c.java_util_regex_Pattern$().init___()
  };
  return ScalaJS.moduleInstances.java_util_regex_Pattern
});
//@ sourceMappingURL=Pattern$.js.map
