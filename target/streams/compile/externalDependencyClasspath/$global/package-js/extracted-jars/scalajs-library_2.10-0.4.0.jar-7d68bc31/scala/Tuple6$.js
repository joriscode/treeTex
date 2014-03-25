/** @constructor */
ScalaJS.c.scala_Tuple6$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Tuple6$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Tuple6$.prototype.constructor = ScalaJS.c.scala_Tuple6$;
ScalaJS.c.scala_Tuple6$.prototype.toString__T = (function() {
  return "Tuple6"
});
ScalaJS.c.scala_Tuple6$.prototype.apply__O__O__O__O__O__O__Lscala_Tuple6 = (function(_1, _2, _3, _4, _5, _6) {
  return new ScalaJS.c.scala_Tuple6().init___O__O__O__O__O__O(_1, _2, _3, _4, _5, _6)
});
ScalaJS.c.scala_Tuple6$.prototype.unapply__Lscala_Tuple6__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple6().init___O__O__O__O__O__O(x$0.$$und1__O(), x$0.$$und2__O(), x$0.$$und3__O(), x$0.$$und4__O(), x$0.$$und5__O(), x$0.$$und6__O()))
  }
});
ScalaJS.c.scala_Tuple6$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_Tuple6()
});
ScalaJS.c.scala_Tuple6$.prototype.unapply__Lscala_Tuple6__ = (function(x$0) {
  return this.unapply__Lscala_Tuple6__Lscala_Option(x$0)
});
ScalaJS.c.scala_Tuple6$.prototype.apply__O__O__O__O__O__O__ = (function(_1, _2, _3, _4, _5, _6) {
  return this.apply__O__O__O__O__O__O__Lscala_Tuple6(_1, _2, _3, _4, _5, _6)
});
/** @constructor */
ScalaJS.inheritable.scala_Tuple6$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Tuple6$.prototype = ScalaJS.c.scala_Tuple6$.prototype;
ScalaJS.is.scala_Tuple6$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Tuple6$)))
});
ScalaJS.as.scala_Tuple6$ = (function(obj) {
  if ((ScalaJS.is.scala_Tuple6$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Tuple6")
  }
});
ScalaJS.isArrayOf.scala_Tuple6$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Tuple6$)))
});
ScalaJS.asArrayOf.scala_Tuple6$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Tuple6$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Tuple6;", depth)
  }
});
ScalaJS.data.scala_Tuple6$ = new ScalaJS.ClassTypeData({
  scala_Tuple6$: 0
}, false, "scala.Tuple6$", ScalaJS.data.java_lang_Object, {
  scala_Tuple6$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Tuple6$.prototype.$classData = ScalaJS.data.scala_Tuple6$;
ScalaJS.moduleInstances.scala_Tuple6 = undefined;
ScalaJS.modules.scala_Tuple6 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Tuple6)) {
    ScalaJS.moduleInstances.scala_Tuple6 = new ScalaJS.c.scala_Tuple6$().init___()
  };
  return ScalaJS.moduleInstances.scala_Tuple6
});
//@ sourceMappingURL=Tuple6$.js.map
