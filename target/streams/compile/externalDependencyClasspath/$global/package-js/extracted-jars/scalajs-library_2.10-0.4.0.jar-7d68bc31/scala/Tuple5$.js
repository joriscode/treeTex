/** @constructor */
ScalaJS.c.scala_Tuple5$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Tuple5$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Tuple5$.prototype.constructor = ScalaJS.c.scala_Tuple5$;
ScalaJS.c.scala_Tuple5$.prototype.toString__T = (function() {
  return "Tuple5"
});
ScalaJS.c.scala_Tuple5$.prototype.apply__O__O__O__O__O__Lscala_Tuple5 = (function(_1, _2, _3, _4, _5) {
  return new ScalaJS.c.scala_Tuple5().init___O__O__O__O__O(_1, _2, _3, _4, _5)
});
ScalaJS.c.scala_Tuple5$.prototype.unapply__Lscala_Tuple5__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple5().init___O__O__O__O__O(x$0.$$und1__O(), x$0.$$und2__O(), x$0.$$und3__O(), x$0.$$und4__O(), x$0.$$und5__O()))
  }
});
ScalaJS.c.scala_Tuple5$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_Tuple5()
});
ScalaJS.c.scala_Tuple5$.prototype.unapply__Lscala_Tuple5__ = (function(x$0) {
  return this.unapply__Lscala_Tuple5__Lscala_Option(x$0)
});
ScalaJS.c.scala_Tuple5$.prototype.apply__O__O__O__O__O__ = (function(_1, _2, _3, _4, _5) {
  return this.apply__O__O__O__O__O__Lscala_Tuple5(_1, _2, _3, _4, _5)
});
/** @constructor */
ScalaJS.inheritable.scala_Tuple5$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Tuple5$.prototype = ScalaJS.c.scala_Tuple5$.prototype;
ScalaJS.is.scala_Tuple5$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Tuple5$)))
});
ScalaJS.as.scala_Tuple5$ = (function(obj) {
  if ((ScalaJS.is.scala_Tuple5$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Tuple5")
  }
});
ScalaJS.isArrayOf.scala_Tuple5$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Tuple5$)))
});
ScalaJS.asArrayOf.scala_Tuple5$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Tuple5$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Tuple5;", depth)
  }
});
ScalaJS.data.scala_Tuple5$ = new ScalaJS.ClassTypeData({
  scala_Tuple5$: 0
}, false, "scala.Tuple5$", ScalaJS.data.java_lang_Object, {
  scala_Tuple5$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Tuple5$.prototype.$classData = ScalaJS.data.scala_Tuple5$;
ScalaJS.moduleInstances.scala_Tuple5 = undefined;
ScalaJS.modules.scala_Tuple5 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Tuple5)) {
    ScalaJS.moduleInstances.scala_Tuple5 = new ScalaJS.c.scala_Tuple5$().init___()
  };
  return ScalaJS.moduleInstances.scala_Tuple5
});
//@ sourceMappingURL=Tuple5$.js.map
