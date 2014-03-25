/** @constructor */
ScalaJS.c.scala_util_Right$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_Right$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_Right$.prototype.constructor = ScalaJS.c.scala_util_Right$;
ScalaJS.c.scala_util_Right$.prototype.toString__T = (function() {
  return "Right"
});
ScalaJS.c.scala_util_Right$.prototype.apply__O__Lscala_util_Right = (function(b) {
  return new ScalaJS.c.scala_util_Right().init___O(b)
});
ScalaJS.c.scala_util_Right$.prototype.unapply__Lscala_util_Right__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.b__O())
  }
});
ScalaJS.c.scala_util_Right$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_util_Right()
});
ScalaJS.c.scala_util_Right$.prototype.unapply__Lscala_util_Right__ = (function(x$0) {
  return this.unapply__Lscala_util_Right__Lscala_Option(x$0)
});
ScalaJS.c.scala_util_Right$.prototype.apply__O__ = (function(b) {
  return this.apply__O__Lscala_util_Right(b)
});
/** @constructor */
ScalaJS.inheritable.scala_util_Right$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_Right$.prototype = ScalaJS.c.scala_util_Right$.prototype;
ScalaJS.is.scala_util_Right$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_Right$)))
});
ScalaJS.as.scala_util_Right$ = (function(obj) {
  if ((ScalaJS.is.scala_util_Right$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.Right")
  }
});
ScalaJS.isArrayOf.scala_util_Right$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_Right$)))
});
ScalaJS.asArrayOf.scala_util_Right$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_Right$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.Right;", depth)
  }
});
ScalaJS.data.scala_util_Right$ = new ScalaJS.ClassTypeData({
  scala_util_Right$: 0
}, false, "scala.util.Right$", ScalaJS.data.java_lang_Object, {
  scala_util_Right$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_Right$.prototype.$classData = ScalaJS.data.scala_util_Right$;
ScalaJS.moduleInstances.scala_util_Right = undefined;
ScalaJS.modules.scala_util_Right = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_Right)) {
    ScalaJS.moduleInstances.scala_util_Right = new ScalaJS.c.scala_util_Right$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_Right
});
//@ sourceMappingURL=Right$.js.map
