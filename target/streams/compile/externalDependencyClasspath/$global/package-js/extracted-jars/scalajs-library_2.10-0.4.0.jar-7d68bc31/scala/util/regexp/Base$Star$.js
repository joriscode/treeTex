/** @constructor */
ScalaJS.c.scala_util_regexp_Base$Star$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.$$outer$2 = null
});
ScalaJS.c.scala_util_regexp_Base$Star$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_util_regexp_Base$Star$.prototype.constructor = ScalaJS.c.scala_util_regexp_Base$Star$;
ScalaJS.c.scala_util_regexp_Base$Star$.prototype.toString__T = (function() {
  return "Star"
});
ScalaJS.c.scala_util_regexp_Base$Star$.prototype.apply__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_Base$Star = (function(r) {
  return new ScalaJS.c.scala_util_regexp_Base$Star().init___Lscala_util_regexp_Base__Lscala_util_regexp_Base$RegExp(this.$$outer$2, r)
});
ScalaJS.c.scala_util_regexp_Base$Star$.prototype.unapply__Lscala_util_regexp_Base$Star__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.r__Lscala_util_regexp_Base$RegExp())
  }
});
ScalaJS.c.scala_util_regexp_Base$Star$.prototype.readResolve__p2__O = (function() {
  return this.$$outer$2.Star__Lscala_util_regexp_Base$Star$()
});
ScalaJS.c.scala_util_regexp_Base$Star$.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_Base$Star(ScalaJS.as.scala_util_regexp_Base$RegExp(v1))
});
ScalaJS.c.scala_util_regexp_Base$Star$.prototype.init___Lscala_util_regexp_Base = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_util_regexp_Base$Star$.prototype.unapply__Lscala_util_regexp_Base$Star__ = (function(x$0) {
  return this.unapply__Lscala_util_regexp_Base$Star__Lscala_Option(x$0)
});
ScalaJS.c.scala_util_regexp_Base$Star$.prototype.apply__Lscala_util_regexp_Base$RegExp__ = (function(r) {
  return this.apply__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_Base$Star(r)
});
/** @constructor */
ScalaJS.inheritable.scala_util_regexp_Base$Star$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_regexp_Base$Star$.prototype = ScalaJS.c.scala_util_regexp_Base$Star$.prototype;
ScalaJS.is.scala_util_regexp_Base$Star$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_regexp_Base$Star$)))
});
ScalaJS.as.scala_util_regexp_Base$Star$ = (function(obj) {
  if ((ScalaJS.is.scala_util_regexp_Base$Star$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.regexp.Base$Star")
  }
});
ScalaJS.isArrayOf.scala_util_regexp_Base$Star$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_regexp_Base$Star$)))
});
ScalaJS.asArrayOf.scala_util_regexp_Base$Star$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_regexp_Base$Star$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.regexp.Base$Star;", depth)
  }
});
ScalaJS.data.scala_util_regexp_Base$Star$ = new ScalaJS.ClassTypeData({
  scala_util_regexp_Base$Star$: 0
}, false, "scala.util.regexp.Base$Star$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_util_regexp_Base$Star$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_regexp_Base$Star$.prototype.$classData = ScalaJS.data.scala_util_regexp_Base$Star$;
//@ sourceMappingURL=Base$Star$.js.map
