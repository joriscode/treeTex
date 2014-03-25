/** @constructor */
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this);
  this.$$outer$2 = null
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node$.prototype.constructor = ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node$;
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node$.prototype.toString__T = (function() {
  return "Node"
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node$.prototype.apply__O__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_PointedHedgeExp$Node = (function(label, r) {
  return new ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node().init___Lscala_util_regexp_PointedHedgeExp__O__Lscala_util_regexp_Base$RegExp(this.$$outer$2, label, r)
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node$.prototype.unapply__Lscala_util_regexp_PointedHedgeExp$Node__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.label__O(), x$0.r__Lscala_util_regexp_Base$RegExp()))
  }
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node$.prototype.readResolve__p2__O = (function() {
  return this.$$outer$2.Node__Lscala_util_regexp_PointedHedgeExp$Node$()
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node$.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__O__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_PointedHedgeExp$Node(v1, ScalaJS.as.scala_util_regexp_Base$RegExp(v2))
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node$.prototype.init___Lscala_util_regexp_PointedHedgeExp = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_runtime_AbstractFunction2.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node$.prototype.unapply__Lscala_util_regexp_PointedHedgeExp$Node__ = (function(x$0) {
  return this.unapply__Lscala_util_regexp_PointedHedgeExp$Node__Lscala_Option(x$0)
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node$.prototype.apply__O__Lscala_util_regexp_Base$RegExp__ = (function(label, r) {
  return this.apply__O__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_PointedHedgeExp$Node(label, r)
});
/** @constructor */
ScalaJS.inheritable.scala_util_regexp_PointedHedgeExp$Node$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_regexp_PointedHedgeExp$Node$.prototype = ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node$.prototype;
ScalaJS.is.scala_util_regexp_PointedHedgeExp$Node$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_regexp_PointedHedgeExp$Node$)))
});
ScalaJS.as.scala_util_regexp_PointedHedgeExp$Node$ = (function(obj) {
  if ((ScalaJS.is.scala_util_regexp_PointedHedgeExp$Node$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.regexp.PointedHedgeExp$Node")
  }
});
ScalaJS.isArrayOf.scala_util_regexp_PointedHedgeExp$Node$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_regexp_PointedHedgeExp$Node$)))
});
ScalaJS.asArrayOf.scala_util_regexp_PointedHedgeExp$Node$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_regexp_PointedHedgeExp$Node$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.regexp.PointedHedgeExp$Node;", depth)
  }
});
ScalaJS.data.scala_util_regexp_PointedHedgeExp$Node$ = new ScalaJS.ClassTypeData({
  scala_util_regexp_PointedHedgeExp$Node$: 0
}, false, "scala.util.regexp.PointedHedgeExp$Node$", ScalaJS.data.scala_runtime_AbstractFunction2, {
  scala_util_regexp_PointedHedgeExp$Node$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node$.prototype.$classData = ScalaJS.data.scala_util_regexp_PointedHedgeExp$Node$;
//@ sourceMappingURL=PointedHedgeExp$Node$.js.map
