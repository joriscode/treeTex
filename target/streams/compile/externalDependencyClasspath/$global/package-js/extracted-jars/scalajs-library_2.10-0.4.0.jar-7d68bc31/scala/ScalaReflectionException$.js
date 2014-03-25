/** @constructor */
ScalaJS.c.scala_ScalaReflectionException$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.scala_ScalaReflectionException$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_ScalaReflectionException$.prototype.constructor = ScalaJS.c.scala_ScalaReflectionException$;
ScalaJS.c.scala_ScalaReflectionException$.prototype.toString__T = (function() {
  return "ScalaReflectionException"
});
ScalaJS.c.scala_ScalaReflectionException$.prototype.apply__T__Lscala_ScalaReflectionException = (function(msg) {
  return new ScalaJS.c.scala_ScalaReflectionException().init___T(msg)
});
ScalaJS.c.scala_ScalaReflectionException$.prototype.unapply__Lscala_ScalaReflectionException__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.msg__T())
  }
});
ScalaJS.c.scala_ScalaReflectionException$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_ScalaReflectionException()
});
ScalaJS.c.scala_ScalaReflectionException$.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lscala_ScalaReflectionException(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.scala_ScalaReflectionException$.prototype.unapply__Lscala_ScalaReflectionException__ = (function(x$0) {
  return this.unapply__Lscala_ScalaReflectionException__Lscala_Option(x$0)
});
ScalaJS.c.scala_ScalaReflectionException$.prototype.apply__T__ = (function(msg) {
  return this.apply__T__Lscala_ScalaReflectionException(msg)
});
/** @constructor */
ScalaJS.inheritable.scala_ScalaReflectionException$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_ScalaReflectionException$.prototype = ScalaJS.c.scala_ScalaReflectionException$.prototype;
ScalaJS.is.scala_ScalaReflectionException$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_ScalaReflectionException$)))
});
ScalaJS.as.scala_ScalaReflectionException$ = (function(obj) {
  if ((ScalaJS.is.scala_ScalaReflectionException$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.ScalaReflectionException")
  }
});
ScalaJS.isArrayOf.scala_ScalaReflectionException$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_ScalaReflectionException$)))
});
ScalaJS.asArrayOf.scala_ScalaReflectionException$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_ScalaReflectionException$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.ScalaReflectionException;", depth)
  }
});
ScalaJS.data.scala_ScalaReflectionException$ = new ScalaJS.ClassTypeData({
  scala_ScalaReflectionException$: 0
}, false, "scala.ScalaReflectionException$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_ScalaReflectionException$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_ScalaReflectionException$.prototype.$classData = ScalaJS.data.scala_ScalaReflectionException$;
ScalaJS.moduleInstances.scala_ScalaReflectionException = undefined;
ScalaJS.modules.scala_ScalaReflectionException = (function() {
  if ((!ScalaJS.moduleInstances.scala_ScalaReflectionException)) {
    ScalaJS.moduleInstances.scala_ScalaReflectionException = new ScalaJS.c.scala_ScalaReflectionException$().init___()
  };
  return ScalaJS.moduleInstances.scala_ScalaReflectionException
});
//@ sourceMappingURL=ScalaReflectionException$.js.map
