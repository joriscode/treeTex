/** @constructor */
ScalaJS.c.scala_sys_process_ProcessImpl$Spawn$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_sys_process_ProcessImpl$Spawn$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_process_ProcessImpl$Spawn$.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessImpl$Spawn$;
ScalaJS.c.scala_sys_process_ProcessImpl$Spawn$.prototype.apply__Lscala_Function0__Ljava_lang_Thread = (function(f) {
  return this.apply__Lscala_Function0__Z__Ljava_lang_Thread(f, false)
});
ScalaJS.c.scala_sys_process_ProcessImpl$Spawn$.prototype.apply__Lscala_Function0__Z__Ljava_lang_Thread = (function(f, daemon) {
  var thread = new ScalaJS.c.scala_sys_process_ProcessImpl$Spawn$$anon$1().init___Lscala_sys_process_ProcessImpl$Spawn$__Lscala_Function0(this, f);
  thread.setDaemon__Z__V(daemon);
  thread.start__V();
  return thread
});
ScalaJS.c.scala_sys_process_ProcessImpl$Spawn$.prototype.init___Lscala_sys_process_Process$ = (function($$outer) {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_sys_process_ProcessImpl$Spawn$.prototype.apply__Lscala_Function0__Z__ = (function(f, daemon) {
  return this.apply__Lscala_Function0__Z__Ljava_lang_Thread(f, daemon)
});
ScalaJS.c.scala_sys_process_ProcessImpl$Spawn$.prototype.apply__Lscala_Function0__ = (function(f$2) {
  return this.apply__Lscala_Function0__Ljava_lang_Thread(f$2)
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessImpl$Spawn$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessImpl$Spawn$.prototype = ScalaJS.c.scala_sys_process_ProcessImpl$Spawn$.prototype;
ScalaJS.is.scala_sys_process_ProcessImpl$Spawn$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessImpl$Spawn$)))
});
ScalaJS.as.scala_sys_process_ProcessImpl$Spawn$ = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessImpl$Spawn$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessImpl$Spawn")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$Spawn$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessImpl$Spawn$)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessImpl$Spawn$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$Spawn$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessImpl$Spawn;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessImpl$Spawn$ = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessImpl$Spawn$: 0
}, false, "scala.sys.process.ProcessImpl$Spawn$", ScalaJS.data.java_lang_Object, {
  scala_sys_process_ProcessImpl$Spawn$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessImpl$Spawn$.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessImpl$Spawn$;
//@ sourceMappingURL=ProcessImpl$Spawn$.js.map
