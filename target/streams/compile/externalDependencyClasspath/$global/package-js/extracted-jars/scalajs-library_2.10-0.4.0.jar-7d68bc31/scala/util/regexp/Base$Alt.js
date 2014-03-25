/** @constructor */
ScalaJS.c.scala_util_regexp_Base$Alt = (function() {
  ScalaJS.c.scala_util_regexp_Base$RegExp.call(this);
  this.rs$2 = null;
  this.isNullable$2 = false
});
ScalaJS.c.scala_util_regexp_Base$Alt.prototype = new ScalaJS.inheritable.scala_util_regexp_Base$RegExp();
ScalaJS.c.scala_util_regexp_Base$Alt.prototype.constructor = ScalaJS.c.scala_util_regexp_Base$Alt;
ScalaJS.c.scala_util_regexp_Base$Alt.prototype.rs__Lscala_collection_Seq = (function() {
  return this.rs$2
});
ScalaJS.c.scala_util_regexp_Base$Alt.prototype.isNullable__Z = (function() {
  return this.isNullable$2
});
ScalaJS.c.scala_util_regexp_Base$Alt.prototype.scala$util$regexp$Base$Alt$$$outer__Lscala_util_regexp_Base = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_util_regexp_Base$Alt.prototype.init___Lscala_util_regexp_Base__Lscala_collection_Seq = (function($$outer, rs) {
  this.rs$2 = rs;
  ScalaJS.c.scala_util_regexp_Base$RegExp.prototype.init___Lscala_util_regexp_Base.call(this, $$outer);
  this.isNullable$2 = rs.exists__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$1) {
      return ScalaJS.bZ(x$1.isNullable__Z())
    })
  })()));
  return this
});
ScalaJS.c.scala_util_regexp_Base$Alt.prototype.scala$util$regexp$Base$Alt$$$outer__ = (function() {
  return this.scala$util$regexp$Base$Alt$$$outer__Lscala_util_regexp_Base()
});
ScalaJS.c.scala_util_regexp_Base$Alt.prototype.rs__ = (function() {
  return this.rs__Lscala_collection_Seq()
});
/** @constructor */
ScalaJS.inheritable.scala_util_regexp_Base$Alt = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_regexp_Base$Alt.prototype = ScalaJS.c.scala_util_regexp_Base$Alt.prototype;
ScalaJS.is.scala_util_regexp_Base$Alt = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_regexp_Base$Alt)))
});
ScalaJS.as.scala_util_regexp_Base$Alt = (function(obj) {
  if ((ScalaJS.is.scala_util_regexp_Base$Alt(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.regexp.Base$Alt")
  }
});
ScalaJS.isArrayOf.scala_util_regexp_Base$Alt = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_regexp_Base$Alt)))
});
ScalaJS.asArrayOf.scala_util_regexp_Base$Alt = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_regexp_Base$Alt(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.regexp.Base$Alt;", depth)
  }
});
ScalaJS.data.scala_util_regexp_Base$Alt = new ScalaJS.ClassTypeData({
  scala_util_regexp_Base$Alt: 0
}, false, "scala.util.regexp.Base$Alt", ScalaJS.data.scala_util_regexp_Base$RegExp, {
  scala_util_regexp_Base$Alt: 1,
  scala_util_regexp_Base$RegExp: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_regexp_Base$Alt.prototype.$classData = ScalaJS.data.scala_util_regexp_Base$Alt;
//@ sourceMappingURL=Base$Alt.js.map
