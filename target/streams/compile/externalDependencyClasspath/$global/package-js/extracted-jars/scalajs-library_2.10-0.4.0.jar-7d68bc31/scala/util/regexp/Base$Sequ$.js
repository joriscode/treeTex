/** @constructor */
ScalaJS.c.scala_util_regexp_Base$Sequ$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_util_regexp_Base$Sequ$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_regexp_Base$Sequ$.prototype.constructor = ScalaJS.c.scala_util_regexp_Base$Sequ$;
ScalaJS.c.scala_util_regexp_Base$Sequ$.prototype.apply__Lscala_collection_Seq__Lscala_util_regexp_Base$RegExp = (function(rs) {
  if (rs.isEmpty__Z()) {
    return this.$$outer$1.Eps__Lscala_util_regexp_Base$Eps$()
  } else {
    return new ScalaJS.c.scala_util_regexp_Base$Sequ().init___Lscala_util_regexp_Base__Lscala_collection_Seq(this.$$outer$1, rs)
  }
});
ScalaJS.c.scala_util_regexp_Base$Sequ$.prototype.unapplySeq__Lscala_util_regexp_Base$Sequ__Lscala_Some = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x.rs__Lscala_collection_Seq())
});
ScalaJS.c.scala_util_regexp_Base$Sequ$.prototype.init___Lscala_util_regexp_Base = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_util_regexp_Base$Sequ$.prototype.unapplySeq__Lscala_util_regexp_Base$Sequ__ = (function(x) {
  return this.unapplySeq__Lscala_util_regexp_Base$Sequ__Lscala_Some(x)
});
ScalaJS.c.scala_util_regexp_Base$Sequ$.prototype.apply__Lscala_collection_Seq__ = (function(rs) {
  return this.apply__Lscala_collection_Seq__Lscala_util_regexp_Base$RegExp(rs)
});
/** @constructor */
ScalaJS.inheritable.scala_util_regexp_Base$Sequ$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_regexp_Base$Sequ$.prototype = ScalaJS.c.scala_util_regexp_Base$Sequ$.prototype;
ScalaJS.is.scala_util_regexp_Base$Sequ$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_regexp_Base$Sequ$)))
});
ScalaJS.as.scala_util_regexp_Base$Sequ$ = (function(obj) {
  if ((ScalaJS.is.scala_util_regexp_Base$Sequ$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.regexp.Base$Sequ")
  }
});
ScalaJS.isArrayOf.scala_util_regexp_Base$Sequ$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_regexp_Base$Sequ$)))
});
ScalaJS.asArrayOf.scala_util_regexp_Base$Sequ$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_regexp_Base$Sequ$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.regexp.Base$Sequ;", depth)
  }
});
ScalaJS.data.scala_util_regexp_Base$Sequ$ = new ScalaJS.ClassTypeData({
  scala_util_regexp_Base$Sequ$: 0
}, false, "scala.util.regexp.Base$Sequ$", ScalaJS.data.java_lang_Object, {
  scala_util_regexp_Base$Sequ$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_regexp_Base$Sequ$.prototype.$classData = ScalaJS.data.scala_util_regexp_Base$Sequ$;
//@ sourceMappingURL=Base$Sequ$.js.map
