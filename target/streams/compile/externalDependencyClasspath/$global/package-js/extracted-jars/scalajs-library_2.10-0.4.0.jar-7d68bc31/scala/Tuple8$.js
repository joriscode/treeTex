/** @constructor */
ScalaJS.c.scala_Tuple8$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Tuple8$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Tuple8$.prototype.constructor = ScalaJS.c.scala_Tuple8$;
ScalaJS.c.scala_Tuple8$.prototype.toString__T = (function() {
  return "Tuple8"
});
ScalaJS.c.scala_Tuple8$.prototype.apply__O__O__O__O__O__O__O__O__Lscala_Tuple8 = (function(_1, _2, _3, _4, _5, _6, _7, _8) {
  return new ScalaJS.c.scala_Tuple8().init___O__O__O__O__O__O__O__O(_1, _2, _3, _4, _5, _6, _7, _8)
});
ScalaJS.c.scala_Tuple8$.prototype.unapply__Lscala_Tuple8__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple8().init___O__O__O__O__O__O__O__O(x$0.$$und1__O(), x$0.$$und2__O(), x$0.$$und3__O(), x$0.$$und4__O(), x$0.$$und5__O(), x$0.$$und6__O(), x$0.$$und7__O(), x$0.$$und8__O()))
  }
});
ScalaJS.c.scala_Tuple8$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_Tuple8()
});
ScalaJS.c.scala_Tuple8$.prototype.unapply__Lscala_Tuple8__ = (function(x$0) {
  return this.unapply__Lscala_Tuple8__Lscala_Option(x$0)
});
ScalaJS.c.scala_Tuple8$.prototype.apply__O__O__O__O__O__O__O__O__ = (function(_1, _2, _3, _4, _5, _6, _7, _8) {
  return this.apply__O__O__O__O__O__O__O__O__Lscala_Tuple8(_1, _2, _3, _4, _5, _6, _7, _8)
});
/** @constructor */
ScalaJS.inheritable.scala_Tuple8$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Tuple8$.prototype = ScalaJS.c.scala_Tuple8$.prototype;
ScalaJS.is.scala_Tuple8$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Tuple8$)))
});
ScalaJS.as.scala_Tuple8$ = (function(obj) {
  if ((ScalaJS.is.scala_Tuple8$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Tuple8")
  }
});
ScalaJS.isArrayOf.scala_Tuple8$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Tuple8$)))
});
ScalaJS.asArrayOf.scala_Tuple8$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Tuple8$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Tuple8;", depth)
  }
});
ScalaJS.data.scala_Tuple8$ = new ScalaJS.ClassTypeData({
  scala_Tuple8$: 0
}, false, "scala.Tuple8$", ScalaJS.data.java_lang_Object, {
  scala_Tuple8$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Tuple8$.prototype.$classData = ScalaJS.data.scala_Tuple8$;
ScalaJS.moduleInstances.scala_Tuple8 = undefined;
ScalaJS.modules.scala_Tuple8 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Tuple8)) {
    ScalaJS.moduleInstances.scala_Tuple8 = new ScalaJS.c.scala_Tuple8$().init___()
  };
  return ScalaJS.moduleInstances.scala_Tuple8
});
//@ sourceMappingURL=Tuple8$.js.map
