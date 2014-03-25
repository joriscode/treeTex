/** @constructor */
ScalaJS.c.scala_util_regexp_Base$RegExp = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$f = null
});
ScalaJS.c.scala_util_regexp_Base$RegExp.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_regexp_Base$RegExp.prototype.constructor = ScalaJS.c.scala_util_regexp_Base$RegExp;
ScalaJS.c.scala_util_regexp_Base$RegExp.prototype.scala$util$regexp$Base$RegExp$$$outer__Lscala_util_regexp_Base = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_util_regexp_Base$RegExp.prototype.init___Lscala_util_regexp_Base = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_util_regexp_Base$RegExp.prototype.scala$util$regexp$Base$RegExp$$$outer__ = (function() {
  return this.scala$util$regexp$Base$RegExp$$$outer__Lscala_util_regexp_Base()
});
ScalaJS.c.scala_util_regexp_Base$RegExp.prototype.isNullable__ = (function() {
  return ScalaJS.bZ(this.isNullable__Z())
});
/** @constructor */
ScalaJS.inheritable.scala_util_regexp_Base$RegExp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_regexp_Base$RegExp.prototype = ScalaJS.c.scala_util_regexp_Base$RegExp.prototype;
ScalaJS.is.scala_util_regexp_Base$RegExp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_regexp_Base$RegExp)))
});
ScalaJS.as.scala_util_regexp_Base$RegExp = (function(obj) {
  if ((ScalaJS.is.scala_util_regexp_Base$RegExp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.regexp.Base$RegExp")
  }
});
ScalaJS.isArrayOf.scala_util_regexp_Base$RegExp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_regexp_Base$RegExp)))
});
ScalaJS.asArrayOf.scala_util_regexp_Base$RegExp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_regexp_Base$RegExp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.regexp.Base$RegExp;", depth)
  }
});
ScalaJS.data.scala_util_regexp_Base$RegExp = new ScalaJS.ClassTypeData({
  scala_util_regexp_Base$RegExp: 0
}, false, "scala.util.regexp.Base$RegExp", ScalaJS.data.java_lang_Object, {
  scala_util_regexp_Base$RegExp: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_regexp_Base$RegExp.prototype.$classData = ScalaJS.data.scala_util_regexp_Base$RegExp;
//@ sourceMappingURL=Base$RegExp.js.map
