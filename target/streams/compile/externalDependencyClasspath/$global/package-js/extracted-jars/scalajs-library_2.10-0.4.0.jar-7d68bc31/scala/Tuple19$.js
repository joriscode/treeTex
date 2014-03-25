/** @constructor */
ScalaJS.c.scala_Tuple19$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Tuple19$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Tuple19$.prototype.constructor = ScalaJS.c.scala_Tuple19$;
ScalaJS.c.scala_Tuple19$.prototype.toString__T = (function() {
  return "Tuple19"
});
ScalaJS.c.scala_Tuple19$.prototype.apply__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__Lscala_Tuple19 = (function(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  return new ScalaJS.c.scala_Tuple19().init___O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19)
});
ScalaJS.c.scala_Tuple19$.prototype.unapply__Lscala_Tuple19__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple19().init___O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O(x$0.$$und1__O(), x$0.$$und2__O(), x$0.$$und3__O(), x$0.$$und4__O(), x$0.$$und5__O(), x$0.$$und6__O(), x$0.$$und7__O(), x$0.$$und8__O(), x$0.$$und9__O(), x$0.$$und10__O(), x$0.$$und11__O(), x$0.$$und12__O(), x$0.$$und13__O(), x$0.$$und14__O(), x$0.$$und15__O(), x$0.$$und16__O(), x$0.$$und17__O(), x$0.$$und18__O(), x$0.$$und19__O()))
  }
});
ScalaJS.c.scala_Tuple19$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_Tuple19()
});
ScalaJS.c.scala_Tuple19$.prototype.unapply__Lscala_Tuple19__ = (function(x$0) {
  return this.unapply__Lscala_Tuple19__Lscala_Option(x$0)
});
ScalaJS.c.scala_Tuple19$.prototype.apply__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__ = (function(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  return this.apply__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__Lscala_Tuple19(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19)
});
/** @constructor */
ScalaJS.inheritable.scala_Tuple19$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Tuple19$.prototype = ScalaJS.c.scala_Tuple19$.prototype;
ScalaJS.is.scala_Tuple19$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Tuple19$)))
});
ScalaJS.as.scala_Tuple19$ = (function(obj) {
  if ((ScalaJS.is.scala_Tuple19$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Tuple19")
  }
});
ScalaJS.isArrayOf.scala_Tuple19$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Tuple19$)))
});
ScalaJS.asArrayOf.scala_Tuple19$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Tuple19$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Tuple19;", depth)
  }
});
ScalaJS.data.scala_Tuple19$ = new ScalaJS.ClassTypeData({
  scala_Tuple19$: 0
}, false, "scala.Tuple19$", ScalaJS.data.java_lang_Object, {
  scala_Tuple19$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Tuple19$.prototype.$classData = ScalaJS.data.scala_Tuple19$;
ScalaJS.moduleInstances.scala_Tuple19 = undefined;
ScalaJS.modules.scala_Tuple19 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Tuple19)) {
    ScalaJS.moduleInstances.scala_Tuple19 = new ScalaJS.c.scala_Tuple19$().init___()
  };
  return ScalaJS.moduleInstances.scala_Tuple19
});
//@ sourceMappingURL=Tuple19$.js.map
