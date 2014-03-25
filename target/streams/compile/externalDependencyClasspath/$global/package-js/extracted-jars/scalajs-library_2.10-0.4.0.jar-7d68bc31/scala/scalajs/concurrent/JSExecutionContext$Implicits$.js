/** @constructor */
ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$Implicits$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.runNow$1 = null;
  this.queue$1 = null
});
ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$Implicits$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$Implicits$.prototype.constructor = ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$Implicits$;
ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$Implicits$.prototype.runNow__Lscala_concurrent_ExecutionContext = (function() {
  return this.runNow$1
});
ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$Implicits$.prototype.queue__Lscala_concurrent_ExecutionContext = (function() {
  return this.queue$1
});
ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$Implicits$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_scalajs_concurrent_JSExecutionContext$Implicits = this;
  this.runNow$1 = ScalaJS.modules.scala_scalajs_concurrent_JSExecutionContext().runNow__Lscala_scalajs_concurrent_RunNowExecutionContext$();
  this.queue$1 = ScalaJS.modules.scala_scalajs_concurrent_JSExecutionContext().queue__Lscala_scalajs_concurrent_QueueExecutionContext$();
  return this
});
ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$Implicits$.prototype.queue__ = (function() {
  return this.queue__Lscala_concurrent_ExecutionContext()
});
ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$Implicits$.prototype.runNow__ = (function() {
  return this.runNow__Lscala_concurrent_ExecutionContext()
});
/** @constructor */
ScalaJS.inheritable.scala_scalajs_concurrent_JSExecutionContext$Implicits$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_scalajs_concurrent_JSExecutionContext$Implicits$.prototype = ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$Implicits$.prototype;
ScalaJS.is.scala_scalajs_concurrent_JSExecutionContext$Implicits$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_concurrent_JSExecutionContext$Implicits$)))
});
ScalaJS.as.scala_scalajs_concurrent_JSExecutionContext$Implicits$ = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_concurrent_JSExecutionContext$Implicits$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.concurrent.JSExecutionContext$Implicits")
  }
});
ScalaJS.isArrayOf.scala_scalajs_concurrent_JSExecutionContext$Implicits$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_concurrent_JSExecutionContext$Implicits$)))
});
ScalaJS.asArrayOf.scala_scalajs_concurrent_JSExecutionContext$Implicits$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_concurrent_JSExecutionContext$Implicits$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.concurrent.JSExecutionContext$Implicits;", depth)
  }
});
ScalaJS.data.scala_scalajs_concurrent_JSExecutionContext$Implicits$ = new ScalaJS.ClassTypeData({
  scala_scalajs_concurrent_JSExecutionContext$Implicits$: 0
}, false, "scala.scalajs.concurrent.JSExecutionContext$Implicits$", ScalaJS.data.java_lang_Object, {
  scala_scalajs_concurrent_JSExecutionContext$Implicits$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$Implicits$.prototype.$classData = ScalaJS.data.scala_scalajs_concurrent_JSExecutionContext$Implicits$;
ScalaJS.moduleInstances.scala_scalajs_concurrent_JSExecutionContext$Implicits = undefined;
ScalaJS.modules.scala_scalajs_concurrent_JSExecutionContext$Implicits = (function() {
  if ((!ScalaJS.moduleInstances.scala_scalajs_concurrent_JSExecutionContext$Implicits)) {
    ScalaJS.moduleInstances.scala_scalajs_concurrent_JSExecutionContext$Implicits = new ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$Implicits$().init___()
  };
  return ScalaJS.moduleInstances.scala_scalajs_concurrent_JSExecutionContext$Implicits
});
//@ sourceMappingURL=JSExecutionContext$Implicits$.js.map
