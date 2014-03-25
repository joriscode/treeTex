/** @constructor */
ScalaJS.c.scala_util_Either$LeftProjection$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_Either$LeftProjection$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_Either$LeftProjection$.prototype.constructor = ScalaJS.c.scala_util_Either$LeftProjection$;
ScalaJS.c.scala_util_Either$LeftProjection$.prototype.toString__T = (function() {
  return "LeftProjection"
});
ScalaJS.c.scala_util_Either$LeftProjection$.prototype.apply__Lscala_util_Either__Lscala_util_Either$LeftProjection = (function(e) {
  return new ScalaJS.c.scala_util_Either$LeftProjection().init___Lscala_util_Either(e)
});
ScalaJS.c.scala_util_Either$LeftProjection$.prototype.unapply__Lscala_util_Either$LeftProjection__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.e__Lscala_util_Either())
  }
});
ScalaJS.c.scala_util_Either$LeftProjection$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_util_Either$LeftProjection()
});
ScalaJS.c.scala_util_Either$LeftProjection$.prototype.unapply__Lscala_util_Either$LeftProjection__ = (function(x$0) {
  return this.unapply__Lscala_util_Either$LeftProjection__Lscala_Option(x$0)
});
ScalaJS.c.scala_util_Either$LeftProjection$.prototype.apply__Lscala_util_Either__ = (function(e) {
  return this.apply__Lscala_util_Either__Lscala_util_Either$LeftProjection(e)
});
/** @constructor */
ScalaJS.inheritable.scala_util_Either$LeftProjection$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_Either$LeftProjection$.prototype = ScalaJS.c.scala_util_Either$LeftProjection$.prototype;
ScalaJS.is.scala_util_Either$LeftProjection$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_Either$LeftProjection$)))
});
ScalaJS.as.scala_util_Either$LeftProjection$ = (function(obj) {
  if ((ScalaJS.is.scala_util_Either$LeftProjection$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.Either$LeftProjection")
  }
});
ScalaJS.isArrayOf.scala_util_Either$LeftProjection$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_Either$LeftProjection$)))
});
ScalaJS.asArrayOf.scala_util_Either$LeftProjection$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_Either$LeftProjection$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.Either$LeftProjection;", depth)
  }
});
ScalaJS.data.scala_util_Either$LeftProjection$ = new ScalaJS.ClassTypeData({
  scala_util_Either$LeftProjection$: 0
}, false, "scala.util.Either$LeftProjection$", ScalaJS.data.java_lang_Object, {
  scala_util_Either$LeftProjection$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_Either$LeftProjection$.prototype.$classData = ScalaJS.data.scala_util_Either$LeftProjection$;
ScalaJS.moduleInstances.scala_util_Either$LeftProjection = undefined;
ScalaJS.modules.scala_util_Either$LeftProjection = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_Either$LeftProjection)) {
    ScalaJS.moduleInstances.scala_util_Either$LeftProjection = new ScalaJS.c.scala_util_Either$LeftProjection$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_Either$LeftProjection
});
//@ sourceMappingURL=Either$LeftProjection$.js.map
