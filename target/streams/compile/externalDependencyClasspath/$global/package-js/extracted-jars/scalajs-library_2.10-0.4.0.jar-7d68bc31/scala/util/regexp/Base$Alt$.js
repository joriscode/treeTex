/** @constructor */
ScalaJS.c.scala_util_regexp_Base$Alt$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_util_regexp_Base$Alt$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_regexp_Base$Alt$.prototype.constructor = ScalaJS.c.scala_util_regexp_Base$Alt$;
ScalaJS.c.scala_util_regexp_Base$Alt$.prototype.apply__Lscala_collection_Seq__Lscala_util_regexp_Base$Alt = (function(rs) {
  if ((rs.size__I() < 2)) {
    throw new ScalaJS.c.scala_util_regexp_SyntaxError().init___T("need at least 2 branches in Alt")
  } else {
    return new ScalaJS.c.scala_util_regexp_Base$Alt().init___Lscala_util_regexp_Base__Lscala_collection_Seq(this.$$outer$1, rs)
  }
});
ScalaJS.c.scala_util_regexp_Base$Alt$.prototype.unapplySeq__Lscala_util_regexp_Base$Alt__Lscala_Some = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x.rs__Lscala_collection_Seq())
});
ScalaJS.c.scala_util_regexp_Base$Alt$.prototype.init___Lscala_util_regexp_Base = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_util_regexp_Base$Alt$.prototype.unapplySeq__Lscala_util_regexp_Base$Alt__ = (function(x) {
  return this.unapplySeq__Lscala_util_regexp_Base$Alt__Lscala_Some(x)
});
ScalaJS.c.scala_util_regexp_Base$Alt$.prototype.apply__Lscala_collection_Seq__ = (function(rs) {
  return this.apply__Lscala_collection_Seq__Lscala_util_regexp_Base$Alt(rs)
});
/** @constructor */
ScalaJS.inheritable.scala_util_regexp_Base$Alt$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_regexp_Base$Alt$.prototype = ScalaJS.c.scala_util_regexp_Base$Alt$.prototype;
ScalaJS.is.scala_util_regexp_Base$Alt$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_regexp_Base$Alt$)))
});
ScalaJS.as.scala_util_regexp_Base$Alt$ = (function(obj) {
  if ((ScalaJS.is.scala_util_regexp_Base$Alt$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.regexp.Base$Alt")
  }
});
ScalaJS.isArrayOf.scala_util_regexp_Base$Alt$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_regexp_Base$Alt$)))
});
ScalaJS.asArrayOf.scala_util_regexp_Base$Alt$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_regexp_Base$Alt$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.regexp.Base$Alt;", depth)
  }
});
ScalaJS.data.scala_util_regexp_Base$Alt$ = new ScalaJS.ClassTypeData({
  scala_util_regexp_Base$Alt$: 0
}, false, "scala.util.regexp.Base$Alt$", ScalaJS.data.java_lang_Object, {
  scala_util_regexp_Base$Alt$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_regexp_Base$Alt$.prototype.$classData = ScalaJS.data.scala_util_regexp_Base$Alt$;
//@ sourceMappingURL=Base$Alt$.js.map
