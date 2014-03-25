/** @constructor */
ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.runNow$1 = null;
  this.queue$1 = null
});
ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$.prototype.constructor = ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$;
ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$.prototype.runNow__Lscala_scalajs_concurrent_RunNowExecutionContext$ = (function() {
  return this.runNow$1
});
ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$.prototype.queue__Lscala_scalajs_concurrent_QueueExecutionContext$ = (function() {
  return this.queue$1
});
ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_scalajs_concurrent_JSExecutionContext = this;
  this.runNow$1 = ScalaJS.modules.scala_scalajs_concurrent_RunNowExecutionContext();
  this.queue$1 = ScalaJS.modules.scala_scalajs_concurrent_QueueExecutionContext();
  return this
});
ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$.prototype.queue__ = (function() {
  return this.queue__Lscala_scalajs_concurrent_QueueExecutionContext$()
});
ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$.prototype.runNow__ = (function() {
  return this.runNow__Lscala_scalajs_concurrent_RunNowExecutionContext$()
});
/** @constructor */
ScalaJS.inheritable.scala_scalajs_concurrent_JSExecutionContext$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_scalajs_concurrent_JSExecutionContext$.prototype = ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$.prototype;
ScalaJS.is.scala_scalajs_concurrent_JSExecutionContext$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_concurrent_JSExecutionContext$)))
});
ScalaJS.as.scala_scalajs_concurrent_JSExecutionContext$ = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_concurrent_JSExecutionContext$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.concurrent.JSExecutionContext")
  }
});
ScalaJS.isArrayOf.scala_scalajs_concurrent_JSExecutionContext$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_concurrent_JSExecutionContext$)))
});
ScalaJS.asArrayOf.scala_scalajs_concurrent_JSExecutionContext$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_concurrent_JSExecutionContext$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.concurrent.JSExecutionContext;", depth)
  }
});
ScalaJS.data.scala_scalajs_concurrent_JSExecutionContext$ = new ScalaJS.ClassTypeData({
  scala_scalajs_concurrent_JSExecutionContext$: 0
}, false, "scala.scalajs.concurrent.JSExecutionContext$", ScalaJS.data.java_lang_Object, {
  scala_scalajs_concurrent_JSExecutionContext$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$.prototype.$classData = ScalaJS.data.scala_scalajs_concurrent_JSExecutionContext$;
ScalaJS.moduleInstances.scala_scalajs_concurrent_JSExecutionContext = undefined;
ScalaJS.modules.scala_scalajs_concurrent_JSExecutionContext = (function() {
  if ((!ScalaJS.moduleInstances.scala_scalajs_concurrent_JSExecutionContext)) {
    ScalaJS.moduleInstances.scala_scalajs_concurrent_JSExecutionContext = new ScalaJS.c.scala_scalajs_concurrent_JSExecutionContext$().init___()
  };
  return ScalaJS.moduleInstances.scala_scalajs_concurrent_JSExecutionContext
});
//@ sourceMappingURL=JSExecutionContext$.js.map
