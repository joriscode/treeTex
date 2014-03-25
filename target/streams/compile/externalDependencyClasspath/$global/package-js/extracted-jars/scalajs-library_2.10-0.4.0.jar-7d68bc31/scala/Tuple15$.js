/** @constructor */
ScalaJS.c.scala_Tuple15$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Tuple15$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Tuple15$.prototype.constructor = ScalaJS.c.scala_Tuple15$;
ScalaJS.c.scala_Tuple15$.prototype.toString__T = (function() {
  return "Tuple15"
});
ScalaJS.c.scala_Tuple15$.prototype.apply__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__Lscala_Tuple15 = (function(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  return new ScalaJS.c.scala_Tuple15().init___O__O__O__O__O__O__O__O__O__O__O__O__O__O__O(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15)
});
ScalaJS.c.scala_Tuple15$.prototype.unapply__Lscala_Tuple15__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple15().init___O__O__O__O__O__O__O__O__O__O__O__O__O__O__O(x$0.$$und1__O(), x$0.$$und2__O(), x$0.$$und3__O(), x$0.$$und4__O(), x$0.$$und5__O(), x$0.$$und6__O(), x$0.$$und7__O(), x$0.$$und8__O(), x$0.$$und9__O(), x$0.$$und10__O(), x$0.$$und11__O(), x$0.$$und12__O(), x$0.$$und13__O(), x$0.$$und14__O(), x$0.$$und15__O()))
  }
});
ScalaJS.c.scala_Tuple15$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_Tuple15()
});
ScalaJS.c.scala_Tuple15$.prototype.unapply__Lscala_Tuple15__ = (function(x$0) {
  return this.unapply__Lscala_Tuple15__Lscala_Option(x$0)
});
ScalaJS.c.scala_Tuple15$.prototype.apply__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__ = (function(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  return this.apply__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__Lscala_Tuple15(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15)
});
/** @constructor */
ScalaJS.inheritable.scala_Tuple15$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Tuple15$.prototype = ScalaJS.c.scala_Tuple15$.prototype;
ScalaJS.is.scala_Tuple15$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Tuple15$)))
});
ScalaJS.as.scala_Tuple15$ = (function(obj) {
  if ((ScalaJS.is.scala_Tuple15$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Tuple15")
  }
});
ScalaJS.isArrayOf.scala_Tuple15$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Tuple15$)))
});
ScalaJS.asArrayOf.scala_Tuple15$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Tuple15$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Tuple15;", depth)
  }
});
ScalaJS.data.scala_Tuple15$ = new ScalaJS.ClassTypeData({
  scala_Tuple15$: 0
}, false, "scala.Tuple15$", ScalaJS.data.java_lang_Object, {
  scala_Tuple15$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Tuple15$.prototype.$classData = ScalaJS.data.scala_Tuple15$;
ScalaJS.moduleInstances.scala_Tuple15 = undefined;
ScalaJS.modules.scala_Tuple15 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Tuple15)) {
    ScalaJS.moduleInstances.scala_Tuple15 = new ScalaJS.c.scala_Tuple15$().init___()
  };
  return ScalaJS.moduleInstances.scala_Tuple15
});
//@ sourceMappingURL=Tuple15$.js.map
