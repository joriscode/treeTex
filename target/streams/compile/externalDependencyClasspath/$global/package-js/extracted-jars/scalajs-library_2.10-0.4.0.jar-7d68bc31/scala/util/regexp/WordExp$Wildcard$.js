/** @constructor */
ScalaJS.c.scala_util_regexp_WordExp$Wildcard$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this);
  this.$$outer$2 = null
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.scala_util_regexp_WordExp$Wildcard$.prototype.constructor = ScalaJS.c.scala_util_regexp_WordExp$Wildcard$;
ScalaJS.c.scala_util_regexp_WordExp$Wildcard$.prototype.toString__T = (function() {
  return "Wildcard"
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard$.prototype.apply__Lscala_util_regexp_WordExp$Wildcard = (function() {
  return new ScalaJS.c.scala_util_regexp_WordExp$Wildcard().init___Lscala_util_regexp_WordExp(this.$$outer$2)
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard$.prototype.unapply__Lscala_util_regexp_WordExp$Wildcard__Z = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return false
  } else {
    return true
  }
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard$.prototype.readResolve__p2__O = (function() {
  return this.$$outer$2.Wildcard__Lscala_util_regexp_WordExp$Wildcard$()
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard$.prototype.apply__O = (function() {
  return this.apply__Lscala_util_regexp_WordExp$Wildcard()
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard$.prototype.init___Lscala_util_regexp_WordExp = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard$.prototype.unapply__Lscala_util_regexp_WordExp$Wildcard__ = (function(x$0) {
  return ScalaJS.bZ(this.unapply__Lscala_util_regexp_WordExp$Wildcard__Z(x$0))
});
/** @constructor */
ScalaJS.inheritable.scala_util_regexp_WordExp$Wildcard$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_regexp_WordExp$Wildcard$.prototype = ScalaJS.c.scala_util_regexp_WordExp$Wildcard$.prototype;
ScalaJS.is.scala_util_regexp_WordExp$Wildcard$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_regexp_WordExp$Wildcard$)))
});
ScalaJS.as.scala_util_regexp_WordExp$Wildcard$ = (function(obj) {
  if ((ScalaJS.is.scala_util_regexp_WordExp$Wildcard$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.regexp.WordExp$Wildcard")
  }
});
ScalaJS.isArrayOf.scala_util_regexp_WordExp$Wildcard$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_regexp_WordExp$Wildcard$)))
});
ScalaJS.asArrayOf.scala_util_regexp_WordExp$Wildcard$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_regexp_WordExp$Wildcard$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.regexp.WordExp$Wildcard;", depth)
  }
});
ScalaJS.data.scala_util_regexp_WordExp$Wildcard$ = new ScalaJS.ClassTypeData({
  scala_util_regexp_WordExp$Wildcard$: 0
}, false, "scala.util.regexp.WordExp$Wildcard$", ScalaJS.data.scala_runtime_AbstractFunction0, {
  scala_util_regexp_WordExp$Wildcard$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard$.prototype.$classData = ScalaJS.data.scala_util_regexp_WordExp$Wildcard$;
//@ sourceMappingURL=WordExp$Wildcard$.js.map
