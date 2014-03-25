/** @constructor */
ScalaJS.c.scala_util_Success$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_Success$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_Success$.prototype.constructor = ScalaJS.c.scala_util_Success$;
ScalaJS.c.scala_util_Success$.prototype.toString__T = (function() {
  return "Success"
});
ScalaJS.c.scala_util_Success$.prototype.apply__O__Lscala_util_Success = (function(value) {
  return new ScalaJS.c.scala_util_Success().init___O(value)
});
ScalaJS.c.scala_util_Success$.prototype.unapply__Lscala_util_Success__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.value__O())
  }
});
ScalaJS.c.scala_util_Success$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_util_Success()
});
ScalaJS.c.scala_util_Success$.prototype.unapply__Lscala_util_Success__ = (function(x$0) {
  return this.unapply__Lscala_util_Success__Lscala_Option(x$0)
});
ScalaJS.c.scala_util_Success$.prototype.apply__O__ = (function(value) {
  return this.apply__O__Lscala_util_Success(value)
});
/** @constructor */
ScalaJS.inheritable.scala_util_Success$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_Success$.prototype = ScalaJS.c.scala_util_Success$.prototype;
ScalaJS.is.scala_util_Success$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_Success$)))
});
ScalaJS.as.scala_util_Success$ = (function(obj) {
  if ((ScalaJS.is.scala_util_Success$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.Success")
  }
});
ScalaJS.isArrayOf.scala_util_Success$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_Success$)))
});
ScalaJS.asArrayOf.scala_util_Success$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_Success$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.Success;", depth)
  }
});
ScalaJS.data.scala_util_Success$ = new ScalaJS.ClassTypeData({
  scala_util_Success$: 0
}, false, "scala.util.Success$", ScalaJS.data.java_lang_Object, {
  scala_util_Success$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_Success$.prototype.$classData = ScalaJS.data.scala_util_Success$;
ScalaJS.moduleInstances.scala_util_Success = undefined;
ScalaJS.modules.scala_util_Success = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_Success)) {
    ScalaJS.moduleInstances.scala_util_Success = new ScalaJS.c.scala_util_Success$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_Success
});
//@ sourceMappingURL=Success$.js.map
