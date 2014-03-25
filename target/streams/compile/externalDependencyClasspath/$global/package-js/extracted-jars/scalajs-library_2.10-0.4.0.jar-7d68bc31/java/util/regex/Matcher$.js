/** @constructor */
ScalaJS.c.java_util_regex_Matcher$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.java_util_regex_Matcher$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_util_regex_Matcher$.prototype.constructor = ScalaJS.c.java_util_regex_Matcher$;
ScalaJS.c.java_util_regex_Matcher$.prototype.java$util$regex$Matcher$$jsNumberToInt__Lscala_scalajs_js_Number__I = (function(i) {
  return (i | 0)
});
ScalaJS.c.java_util_regex_Matcher$.prototype.quoteReplacement__T__T = (function(s) {
  var result = "";
  var i = 0;
  while ((i < ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(s))) {
    var c = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(s, i);
    var jsx$2 = ("" + result);
    var x1 = c;
    switch (x1) {
      case 92:
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
ScalaJS.c.java_util_regex_Matcher$.prototype.quoteReplacement__T__ = (function(s) {
  return this.quoteReplacement__T__T(s)
});
ScalaJS.c.java_util_regex_Matcher$.prototype.java$util$regex$Matcher$$jsNumberToInt__Lscala_scalajs_js_Number__ = (function(i) {
  return ScalaJS.bI(this.java$util$regex$Matcher$$jsNumberToInt__Lscala_scalajs_js_Number__I(i))
});
/** @constructor */
ScalaJS.inheritable.java_util_regex_Matcher$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_regex_Matcher$.prototype = ScalaJS.c.java_util_regex_Matcher$.prototype;
ScalaJS.is.java_util_regex_Matcher$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_regex_Matcher$)))
});
ScalaJS.as.java_util_regex_Matcher$ = (function(obj) {
  if ((ScalaJS.is.java_util_regex_Matcher$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.regex.Matcher")
  }
});
ScalaJS.isArrayOf.java_util_regex_Matcher$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_regex_Matcher$)))
});
ScalaJS.asArrayOf.java_util_regex_Matcher$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_regex_Matcher$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.regex.Matcher;", depth)
  }
});
ScalaJS.data.java_util_regex_Matcher$ = new ScalaJS.ClassTypeData({
  java_util_regex_Matcher$: 0
}, false, "java.util.regex.Matcher$", ScalaJS.data.java_lang_Object, {
  java_util_regex_Matcher$: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_regex_Matcher$.prototype.$classData = ScalaJS.data.java_util_regex_Matcher$;
ScalaJS.moduleInstances.java_util_regex_Matcher = undefined;
ScalaJS.modules.java_util_regex_Matcher = (function() {
  if ((!ScalaJS.moduleInstances.java_util_regex_Matcher)) {
    ScalaJS.moduleInstances.java_util_regex_Matcher = new ScalaJS.c.java_util_regex_Matcher$().init___()
  };
  return ScalaJS.moduleInstances.java_util_regex_Matcher
});
//@ sourceMappingURL=Matcher$.js.map
