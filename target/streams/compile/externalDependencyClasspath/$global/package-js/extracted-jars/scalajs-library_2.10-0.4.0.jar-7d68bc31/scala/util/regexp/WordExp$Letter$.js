/** @constructor */
ScalaJS.c.scala_util_regexp_WordExp$Letter$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.$$outer$2 = null
});
ScalaJS.c.scala_util_regexp_WordExp$Letter$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_util_regexp_WordExp$Letter$.prototype.constructor = ScalaJS.c.scala_util_regexp_WordExp$Letter$;
ScalaJS.c.scala_util_regexp_WordExp$Letter$.prototype.toString__T = (function() {
  return "Letter"
});
ScalaJS.c.scala_util_regexp_WordExp$Letter$.prototype.apply__Lscala_util_regexp_WordExp$Label__Lscala_util_regexp_WordExp$Letter = (function(a) {
  return new ScalaJS.c.scala_util_regexp_WordExp$Letter().init___Lscala_util_regexp_WordExp__Lscala_util_regexp_WordExp$Label(this.$$outer$2, a)
});
ScalaJS.c.scala_util_regexp_WordExp$Letter$.prototype.unapply__Lscala_util_regexp_WordExp$Letter__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.a__Lscala_util_regexp_WordExp$Label())
  }
});
ScalaJS.c.scala_util_regexp_WordExp$Letter$.prototype.readResolve__p2__O = (function() {
  return this.$$outer$2.Letter__Lscala_util_regexp_WordExp$Letter$()
});
ScalaJS.c.scala_util_regexp_WordExp$Letter$.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_util_regexp_WordExp$Label__Lscala_util_regexp_WordExp$Letter(ScalaJS.as.scala_util_regexp_WordExp$Label(v1))
});
ScalaJS.c.scala_util_regexp_WordExp$Letter$.prototype.init___Lscala_util_regexp_WordExp = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_util_regexp_WordExp$Letter$.prototype.unapply__Lscala_util_regexp_WordExp$Letter__ = (function(x$0) {
  return this.unapply__Lscala_util_regexp_WordExp$Letter__Lscala_Option(x$0)
});
ScalaJS.c.scala_util_regexp_WordExp$Letter$.prototype.apply__Lscala_util_regexp_WordExp$Label__ = (function(a) {
  return this.apply__Lscala_util_regexp_WordExp$Label__Lscala_util_regexp_WordExp$Letter(a)
});
/** @constructor */
ScalaJS.inheritable.scala_util_regexp_WordExp$Letter$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_regexp_WordExp$Letter$.prototype = ScalaJS.c.scala_util_regexp_WordExp$Letter$.prototype;
ScalaJS.is.scala_util_regexp_WordExp$Letter$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_regexp_WordExp$Letter$)))
});
ScalaJS.as.scala_util_regexp_WordExp$Letter$ = (function(obj) {
  if ((ScalaJS.is.scala_util_regexp_WordExp$Letter$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.regexp.WordExp$Letter")
  }
});
ScalaJS.isArrayOf.scala_util_regexp_WordExp$Letter$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_regexp_WordExp$Letter$)))
});
ScalaJS.asArrayOf.scala_util_regexp_WordExp$Letter$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_regexp_WordExp$Letter$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.regexp.WordExp$Letter;", depth)
  }
});
ScalaJS.data.scala_util_regexp_WordExp$Letter$ = new ScalaJS.ClassTypeData({
  scala_util_regexp_WordExp$Letter$: 0
}, false, "scala.util.regexp.WordExp$Letter$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_util_regexp_WordExp$Letter$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_regexp_WordExp$Letter$.prototype.$classData = ScalaJS.data.scala_util_regexp_WordExp$Letter$;
//@ sourceMappingURL=WordExp$Letter$.js.map
