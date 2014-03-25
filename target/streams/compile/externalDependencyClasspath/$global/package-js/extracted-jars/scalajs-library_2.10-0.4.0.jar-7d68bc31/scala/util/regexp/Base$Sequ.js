/** @constructor */
ScalaJS.c.scala_util_regexp_Base$Sequ = (function() {
  ScalaJS.c.scala_util_regexp_Base$RegExp.call(this);
  this.rs$2 = null;
  this.isNullable$2 = false
});
ScalaJS.c.scala_util_regexp_Base$Sequ.prototype = new ScalaJS.inheritable.scala_util_regexp_Base$RegExp();
ScalaJS.c.scala_util_regexp_Base$Sequ.prototype.constructor = ScalaJS.c.scala_util_regexp_Base$Sequ;
ScalaJS.c.scala_util_regexp_Base$Sequ.prototype.rs__Lscala_collection_Seq = (function() {
  return this.rs$2
});
ScalaJS.c.scala_util_regexp_Base$Sequ.prototype.isNullable__Z = (function() {
  return this.isNullable$2
});
ScalaJS.c.scala_util_regexp_Base$Sequ.prototype.scala$util$regexp$Base$Sequ$$$outer__Lscala_util_regexp_Base = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_util_regexp_Base$Sequ.prototype.init___Lscala_util_regexp_Base__Lscala_collection_Seq = (function($$outer, rs) {
  this.rs$2 = rs;
  ScalaJS.c.scala_util_regexp_Base$RegExp.prototype.init___Lscala_util_regexp_Base.call(this, $$outer);
  this.isNullable$2 = rs.forall__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$2) {
      return ScalaJS.bZ(x$2.isNullable__Z())
    })
  })()));
  return this
});
ScalaJS.c.scala_util_regexp_Base$Sequ.prototype.scala$util$regexp$Base$Sequ$$$outer__ = (function() {
  return this.scala$util$regexp$Base$Sequ$$$outer__Lscala_util_regexp_Base()
});
ScalaJS.c.scala_util_regexp_Base$Sequ.prototype.rs__ = (function() {
  return this.rs__Lscala_collection_Seq()
});
/** @constructor */
ScalaJS.inheritable.scala_util_regexp_Base$Sequ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_regexp_Base$Sequ.prototype = ScalaJS.c.scala_util_regexp_Base$Sequ.prototype;
ScalaJS.is.scala_util_regexp_Base$Sequ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_regexp_Base$Sequ)))
});
ScalaJS.as.scala_util_regexp_Base$Sequ = (function(obj) {
  if ((ScalaJS.is.scala_util_regexp_Base$Sequ(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.regexp.Base$Sequ")
  }
});
ScalaJS.isArrayOf.scala_util_regexp_Base$Sequ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_regexp_Base$Sequ)))
});
ScalaJS.asArrayOf.scala_util_regexp_Base$Sequ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_regexp_Base$Sequ(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.regexp.Base$Sequ;", depth)
  }
});
ScalaJS.data.scala_util_regexp_Base$Sequ = new ScalaJS.ClassTypeData({
  scala_util_regexp_Base$Sequ: 0
}, false, "scala.util.regexp.Base$Sequ", ScalaJS.data.scala_util_regexp_Base$RegExp, {
  scala_util_regexp_Base$Sequ: 1,
  scala_util_regexp_Base$RegExp: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_regexp_Base$Sequ.prototype.$classData = ScalaJS.data.scala_util_regexp_Base$Sequ;
//@ sourceMappingURL=Base$Sequ.js.map
