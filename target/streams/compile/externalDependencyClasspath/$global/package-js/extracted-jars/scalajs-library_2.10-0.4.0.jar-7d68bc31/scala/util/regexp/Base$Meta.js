/** @constructor */
ScalaJS.c.scala_util_regexp_Base$Meta = (function() {
  ScalaJS.c.scala_util_regexp_Base$RegExp.call(this);
  this.r1$2 = null;
  this.isNullable$2 = false
});
ScalaJS.c.scala_util_regexp_Base$Meta.prototype = new ScalaJS.inheritable.scala_util_regexp_Base$RegExp();
ScalaJS.c.scala_util_regexp_Base$Meta.prototype.constructor = ScalaJS.c.scala_util_regexp_Base$Meta;
ScalaJS.c.scala_util_regexp_Base$Meta.prototype.isNullable__Z = (function() {
  return this.isNullable$2
});
ScalaJS.c.scala_util_regexp_Base$Meta.prototype.r__Lscala_util_regexp_Base$RegExp = (function() {
  return this.r1$2
});
ScalaJS.c.scala_util_regexp_Base$Meta.prototype.scala$util$regexp$Base$Meta$$$outer__Lscala_util_regexp_Base = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_util_regexp_Base$Meta.prototype.init___Lscala_util_regexp_Base__Lscala_util_regexp_Base$RegExp = (function($$outer, r1) {
  this.r1$2 = r1;
  ScalaJS.c.scala_util_regexp_Base$RegExp.prototype.init___Lscala_util_regexp_Base.call(this, $$outer);
  this.isNullable$2 = r1.isNullable__Z();
  return this
});
ScalaJS.c.scala_util_regexp_Base$Meta.prototype.scala$util$regexp$Base$Meta$$$outer__ = (function() {
  return this.scala$util$regexp$Base$Meta$$$outer__Lscala_util_regexp_Base()
});
ScalaJS.c.scala_util_regexp_Base$Meta.prototype.r__ = (function() {
  return this.r__Lscala_util_regexp_Base$RegExp()
});
/** @constructor */
ScalaJS.inheritable.scala_util_regexp_Base$Meta = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_regexp_Base$Meta.prototype = ScalaJS.c.scala_util_regexp_Base$Meta.prototype;
ScalaJS.is.scala_util_regexp_Base$Meta = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_regexp_Base$Meta)))
});
ScalaJS.as.scala_util_regexp_Base$Meta = (function(obj) {
  if ((ScalaJS.is.scala_util_regexp_Base$Meta(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.regexp.Base$Meta")
  }
});
ScalaJS.isArrayOf.scala_util_regexp_Base$Meta = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_regexp_Base$Meta)))
});
ScalaJS.asArrayOf.scala_util_regexp_Base$Meta = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_regexp_Base$Meta(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.regexp.Base$Meta;", depth)
  }
});
ScalaJS.data.scala_util_regexp_Base$Meta = new ScalaJS.ClassTypeData({
  scala_util_regexp_Base$Meta: 0
}, false, "scala.util.regexp.Base$Meta", ScalaJS.data.scala_util_regexp_Base$RegExp, {
  scala_util_regexp_Base$Meta: 1,
  scala_util_regexp_Base$RegExp: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_regexp_Base$Meta.prototype.$classData = ScalaJS.data.scala_util_regexp_Base$Meta;
//@ sourceMappingURL=Base$Meta.js.map
