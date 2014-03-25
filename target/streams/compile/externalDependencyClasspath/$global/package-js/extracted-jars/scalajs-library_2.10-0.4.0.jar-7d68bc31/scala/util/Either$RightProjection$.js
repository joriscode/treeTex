/** @constructor */
ScalaJS.c.scala_util_Either$RightProjection$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_Either$RightProjection$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_Either$RightProjection$.prototype.constructor = ScalaJS.c.scala_util_Either$RightProjection$;
ScalaJS.c.scala_util_Either$RightProjection$.prototype.toString__T = (function() {
  return "RightProjection"
});
ScalaJS.c.scala_util_Either$RightProjection$.prototype.apply__Lscala_util_Either__Lscala_util_Either$RightProjection = (function(e) {
  return new ScalaJS.c.scala_util_Either$RightProjection().init___Lscala_util_Either(e)
});
ScalaJS.c.scala_util_Either$RightProjection$.prototype.unapply__Lscala_util_Either$RightProjection__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.e__Lscala_util_Either())
  }
});
ScalaJS.c.scala_util_Either$RightProjection$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_util_Either$RightProjection()
});
ScalaJS.c.scala_util_Either$RightProjection$.prototype.unapply__Lscala_util_Either$RightProjection__ = (function(x$0) {
  return this.unapply__Lscala_util_Either$RightProjection__Lscala_Option(x$0)
});
ScalaJS.c.scala_util_Either$RightProjection$.prototype.apply__Lscala_util_Either__ = (function(e) {
  return this.apply__Lscala_util_Either__Lscala_util_Either$RightProjection(e)
});
/** @constructor */
ScalaJS.inheritable.scala_util_Either$RightProjection$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_Either$RightProjection$.prototype = ScalaJS.c.scala_util_Either$RightProjection$.prototype;
ScalaJS.is.scala_util_Either$RightProjection$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_Either$RightProjection$)))
});
ScalaJS.as.scala_util_Either$RightProjection$ = (function(obj) {
  if ((ScalaJS.is.scala_util_Either$RightProjection$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.Either$RightProjection")
  }
});
ScalaJS.isArrayOf.scala_util_Either$RightProjection$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_Either$RightProjection$)))
});
ScalaJS.asArrayOf.scala_util_Either$RightProjection$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_Either$RightProjection$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.Either$RightProjection;", depth)
  }
});
ScalaJS.data.scala_util_Either$RightProjection$ = new ScalaJS.ClassTypeData({
  scala_util_Either$RightProjection$: 0
}, false, "scala.util.Either$RightProjection$", ScalaJS.data.java_lang_Object, {
  scala_util_Either$RightProjection$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_Either$RightProjection$.prototype.$classData = ScalaJS.data.scala_util_Either$RightProjection$;
ScalaJS.moduleInstances.scala_util_Either$RightProjection = undefined;
ScalaJS.modules.scala_util_Either$RightProjection = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_Either$RightProjection)) {
    ScalaJS.moduleInstances.scala_util_Either$RightProjection = new ScalaJS.c.scala_util_Either$RightProjection$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_Either$RightProjection
});
//@ sourceMappingURL=Either$RightProjection$.js.map
