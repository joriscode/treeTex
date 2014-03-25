/** @constructor */
ScalaJS.c.scala_UninitializedFieldError$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.scala_UninitializedFieldError$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_UninitializedFieldError$.prototype.constructor = ScalaJS.c.scala_UninitializedFieldError$;
ScalaJS.c.scala_UninitializedFieldError$.prototype.toString__T = (function() {
  return "UninitializedFieldError"
});
ScalaJS.c.scala_UninitializedFieldError$.prototype.apply__T__Lscala_UninitializedFieldError = (function(msg) {
  return new ScalaJS.c.scala_UninitializedFieldError().init___T(msg)
});
ScalaJS.c.scala_UninitializedFieldError$.prototype.unapply__Lscala_UninitializedFieldError__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.msg__T())
  }
});
ScalaJS.c.scala_UninitializedFieldError$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_UninitializedFieldError()
});
ScalaJS.c.scala_UninitializedFieldError$.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lscala_UninitializedFieldError(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.scala_UninitializedFieldError$.prototype.unapply__Lscala_UninitializedFieldError__ = (function(x$0) {
  return this.unapply__Lscala_UninitializedFieldError__Lscala_Option(x$0)
});
ScalaJS.c.scala_UninitializedFieldError$.prototype.apply__T__ = (function(msg) {
  return this.apply__T__Lscala_UninitializedFieldError(msg)
});
/** @constructor */
ScalaJS.inheritable.scala_UninitializedFieldError$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_UninitializedFieldError$.prototype = ScalaJS.c.scala_UninitializedFieldError$.prototype;
ScalaJS.is.scala_UninitializedFieldError$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_UninitializedFieldError$)))
});
ScalaJS.as.scala_UninitializedFieldError$ = (function(obj) {
  if ((ScalaJS.is.scala_UninitializedFieldError$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.UninitializedFieldError")
  }
});
ScalaJS.isArrayOf.scala_UninitializedFieldError$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_UninitializedFieldError$)))
});
ScalaJS.asArrayOf.scala_UninitializedFieldError$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_UninitializedFieldError$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.UninitializedFieldError;", depth)
  }
});
ScalaJS.data.scala_UninitializedFieldError$ = new ScalaJS.ClassTypeData({
  scala_UninitializedFieldError$: 0
}, false, "scala.UninitializedFieldError$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_UninitializedFieldError$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_UninitializedFieldError$.prototype.$classData = ScalaJS.data.scala_UninitializedFieldError$;
ScalaJS.moduleInstances.scala_UninitializedFieldError = undefined;
ScalaJS.modules.scala_UninitializedFieldError = (function() {
  if ((!ScalaJS.moduleInstances.scala_UninitializedFieldError)) {
    ScalaJS.moduleInstances.scala_UninitializedFieldError = new ScalaJS.c.scala_UninitializedFieldError$().init___()
  };
  return ScalaJS.moduleInstances.scala_UninitializedFieldError
});
//@ sourceMappingURL=UninitializedFieldError$.js.map
