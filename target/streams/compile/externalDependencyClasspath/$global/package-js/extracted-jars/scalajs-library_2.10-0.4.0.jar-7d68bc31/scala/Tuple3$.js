/** @constructor */
ScalaJS.c.scala_Tuple3$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Tuple3$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Tuple3$.prototype.constructor = ScalaJS.c.scala_Tuple3$;
ScalaJS.c.scala_Tuple3$.prototype.toString__T = (function() {
  return "Tuple3"
});
ScalaJS.c.scala_Tuple3$.prototype.apply__O__O__O__Lscala_Tuple3 = (function(_1, _2, _3) {
  return new ScalaJS.c.scala_Tuple3().init___O__O__O(_1, _2, _3)
});
ScalaJS.c.scala_Tuple3$.prototype.unapply__Lscala_Tuple3__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple3().init___O__O__O(x$0.$$und1__O(), x$0.$$und2__O(), x$0.$$und3__O()))
  }
});
ScalaJS.c.scala_Tuple3$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_Tuple3()
});
ScalaJS.c.scala_Tuple3$.prototype.unapply__Lscala_Tuple3__ = (function(x$0) {
  return this.unapply__Lscala_Tuple3__Lscala_Option(x$0)
});
ScalaJS.c.scala_Tuple3$.prototype.apply__O__O__O__ = (function(_1, _2, _3) {
  return this.apply__O__O__O__Lscala_Tuple3(_1, _2, _3)
});
/** @constructor */
ScalaJS.inheritable.scala_Tuple3$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Tuple3$.prototype = ScalaJS.c.scala_Tuple3$.prototype;
ScalaJS.is.scala_Tuple3$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Tuple3$)))
});
ScalaJS.as.scala_Tuple3$ = (function(obj) {
  if ((ScalaJS.is.scala_Tuple3$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Tuple3")
  }
});
ScalaJS.isArrayOf.scala_Tuple3$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Tuple3$)))
});
ScalaJS.asArrayOf.scala_Tuple3$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Tuple3$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Tuple3;", depth)
  }
});
ScalaJS.data.scala_Tuple3$ = new ScalaJS.ClassTypeData({
  scala_Tuple3$: 0
}, false, "scala.Tuple3$", ScalaJS.data.java_lang_Object, {
  scala_Tuple3$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Tuple3$.prototype.$classData = ScalaJS.data.scala_Tuple3$;
ScalaJS.moduleInstances.scala_Tuple3 = undefined;
ScalaJS.modules.scala_Tuple3 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Tuple3)) {
    ScalaJS.moduleInstances.scala_Tuple3 = new ScalaJS.c.scala_Tuple3$().init___()
  };
  return ScalaJS.moduleInstances.scala_Tuple3
});
//@ sourceMappingURL=Tuple3$.js.map
