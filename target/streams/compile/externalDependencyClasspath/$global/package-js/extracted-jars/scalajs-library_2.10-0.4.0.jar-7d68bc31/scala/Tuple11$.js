/** @constructor */
ScalaJS.c.scala_Tuple11$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Tuple11$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Tuple11$.prototype.constructor = ScalaJS.c.scala_Tuple11$;
ScalaJS.c.scala_Tuple11$.prototype.toString__T = (function() {
  return "Tuple11"
});
ScalaJS.c.scala_Tuple11$.prototype.apply__O__O__O__O__O__O__O__O__O__O__O__Lscala_Tuple11 = (function(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  return new ScalaJS.c.scala_Tuple11().init___O__O__O__O__O__O__O__O__O__O__O(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11)
});
ScalaJS.c.scala_Tuple11$.prototype.unapply__Lscala_Tuple11__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple11().init___O__O__O__O__O__O__O__O__O__O__O(x$0.$$und1__O(), x$0.$$und2__O(), x$0.$$und3__O(), x$0.$$und4__O(), x$0.$$und5__O(), x$0.$$und6__O(), x$0.$$und7__O(), x$0.$$und8__O(), x$0.$$und9__O(), x$0.$$und10__O(), x$0.$$und11__O()))
  }
});
ScalaJS.c.scala_Tuple11$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_Tuple11()
});
ScalaJS.c.scala_Tuple11$.prototype.unapply__Lscala_Tuple11__ = (function(x$0) {
  return this.unapply__Lscala_Tuple11__Lscala_Option(x$0)
});
ScalaJS.c.scala_Tuple11$.prototype.apply__O__O__O__O__O__O__O__O__O__O__O__ = (function(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  return this.apply__O__O__O__O__O__O__O__O__O__O__O__Lscala_Tuple11(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11)
});
/** @constructor */
ScalaJS.inheritable.scala_Tuple11$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Tuple11$.prototype = ScalaJS.c.scala_Tuple11$.prototype;
ScalaJS.is.scala_Tuple11$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Tuple11$)))
});
ScalaJS.as.scala_Tuple11$ = (function(obj) {
  if ((ScalaJS.is.scala_Tuple11$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Tuple11")
  }
});
ScalaJS.isArrayOf.scala_Tuple11$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Tuple11$)))
});
ScalaJS.asArrayOf.scala_Tuple11$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Tuple11$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Tuple11;", depth)
  }
});
ScalaJS.data.scala_Tuple11$ = new ScalaJS.ClassTypeData({
  scala_Tuple11$: 0
}, false, "scala.Tuple11$", ScalaJS.data.java_lang_Object, {
  scala_Tuple11$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Tuple11$.prototype.$classData = ScalaJS.data.scala_Tuple11$;
ScalaJS.moduleInstances.scala_Tuple11 = undefined;
ScalaJS.modules.scala_Tuple11 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Tuple11)) {
    ScalaJS.moduleInstances.scala_Tuple11 = new ScalaJS.c.scala_Tuple11$().init___()
  };
  return ScalaJS.moduleInstances.scala_Tuple11
});
//@ sourceMappingURL=Tuple11$.js.map
