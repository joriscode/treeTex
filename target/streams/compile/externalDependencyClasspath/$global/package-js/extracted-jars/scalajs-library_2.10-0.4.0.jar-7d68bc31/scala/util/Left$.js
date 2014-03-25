/** @constructor */
ScalaJS.c.scala_util_Left$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_Left$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_Left$.prototype.constructor = ScalaJS.c.scala_util_Left$;
ScalaJS.c.scala_util_Left$.prototype.toString__T = (function() {
  return "Left"
});
ScalaJS.c.scala_util_Left$.prototype.apply__O__Lscala_util_Left = (function(a) {
  return new ScalaJS.c.scala_util_Left().init___O(a)
});
ScalaJS.c.scala_util_Left$.prototype.unapply__Lscala_util_Left__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.a__O())
  }
});
ScalaJS.c.scala_util_Left$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_util_Left()
});
ScalaJS.c.scala_util_Left$.prototype.unapply__Lscala_util_Left__ = (function(x$0) {
  return this.unapply__Lscala_util_Left__Lscala_Option(x$0)
});
ScalaJS.c.scala_util_Left$.prototype.apply__O__ = (function(a) {
  return this.apply__O__Lscala_util_Left(a)
});
/** @constructor */
ScalaJS.inheritable.scala_util_Left$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_Left$.prototype = ScalaJS.c.scala_util_Left$.prototype;
ScalaJS.is.scala_util_Left$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_Left$)))
});
ScalaJS.as.scala_util_Left$ = (function(obj) {
  if ((ScalaJS.is.scala_util_Left$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.Left")
  }
});
ScalaJS.isArrayOf.scala_util_Left$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_Left$)))
});
ScalaJS.asArrayOf.scala_util_Left$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_Left$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.Left;", depth)
  }
});
ScalaJS.data.scala_util_Left$ = new ScalaJS.ClassTypeData({
  scala_util_Left$: 0
}, false, "scala.util.Left$", ScalaJS.data.java_lang_Object, {
  scala_util_Left$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_Left$.prototype.$classData = ScalaJS.data.scala_util_Left$;
ScalaJS.moduleInstances.scala_util_Left = undefined;
ScalaJS.modules.scala_util_Left = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_Left)) {
    ScalaJS.moduleInstances.scala_util_Left = new ScalaJS.c.scala_util_Left$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_Left
});
//@ sourceMappingURL=Left$.js.map
