/** @constructor */
ScalaJS.c.java_util_Formatter$RegExpExtractor = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.regexp$1 = null;
  this.$$outer$f = null
});
ScalaJS.c.java_util_Formatter$RegExpExtractor.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_util_Formatter$RegExpExtractor.prototype.constructor = ScalaJS.c.java_util_Formatter$RegExpExtractor;
ScalaJS.c.java_util_Formatter$RegExpExtractor.prototype.regexp__Lscala_scalajs_js_RegExp = (function() {
  return this.regexp$1
});
ScalaJS.c.java_util_Formatter$RegExpExtractor.prototype.unapply__Lscala_scalajs_js_String__Lscala_Option = (function(str) {
  return ScalaJS.modules.scala_Option().apply__O__Lscala_Option(this.regexp__Lscala_scalajs_js_RegExp()["exec"](str))
});
ScalaJS.c.java_util_Formatter$RegExpExtractor.prototype.java$util$Formatter$RegExpExtractor$$$outer__Ljava_util_Formatter = (function() {
  return this.$$outer$f
});
ScalaJS.c.java_util_Formatter$RegExpExtractor.prototype.init___Ljava_util_Formatter__Lscala_scalajs_js_RegExp = (function($$outer, regexp) {
  this.regexp$1 = regexp;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.java_util_Formatter$RegExpExtractor.prototype.java$util$Formatter$RegExpExtractor$$$outer__ = (function() {
  return this.java$util$Formatter$RegExpExtractor$$$outer__Ljava_util_Formatter()
});
ScalaJS.c.java_util_Formatter$RegExpExtractor.prototype.unapply__Lscala_scalajs_js_String__ = (function(str) {
  return this.unapply__Lscala_scalajs_js_String__Lscala_Option(str)
});
ScalaJS.c.java_util_Formatter$RegExpExtractor.prototype.regexp__ = (function() {
  return this.regexp__Lscala_scalajs_js_RegExp()
});
/** @constructor */
ScalaJS.inheritable.java_util_Formatter$RegExpExtractor = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_Formatter$RegExpExtractor.prototype = ScalaJS.c.java_util_Formatter$RegExpExtractor.prototype;
ScalaJS.is.java_util_Formatter$RegExpExtractor = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_Formatter$RegExpExtractor)))
});
ScalaJS.as.java_util_Formatter$RegExpExtractor = (function(obj) {
  if ((ScalaJS.is.java_util_Formatter$RegExpExtractor(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.Formatter$RegExpExtractor")
  }
});
ScalaJS.isArrayOf.java_util_Formatter$RegExpExtractor = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_Formatter$RegExpExtractor)))
});
ScalaJS.asArrayOf.java_util_Formatter$RegExpExtractor = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_Formatter$RegExpExtractor(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.Formatter$RegExpExtractor;", depth)
  }
});
ScalaJS.data.java_util_Formatter$RegExpExtractor = new ScalaJS.ClassTypeData({
  java_util_Formatter$RegExpExtractor: 0
}, false, "java.util.Formatter$RegExpExtractor", ScalaJS.data.java_lang_Object, {
  java_util_Formatter$RegExpExtractor: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_Formatter$RegExpExtractor.prototype.$classData = ScalaJS.data.java_util_Formatter$RegExpExtractor;
//@ sourceMappingURL=Formatter$RegExpExtractor.js.map
