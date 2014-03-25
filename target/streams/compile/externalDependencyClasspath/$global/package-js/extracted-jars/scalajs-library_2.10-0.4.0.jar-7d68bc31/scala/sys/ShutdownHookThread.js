/** @constructor */
ScalaJS.c.scala_sys_ShutdownHookThread = (function() {
  ScalaJS.c.java_lang_Thread.call(this)
});
ScalaJS.c.scala_sys_ShutdownHookThread.prototype = new ScalaJS.inheritable.java_lang_Thread();
ScalaJS.c.scala_sys_ShutdownHookThread.prototype.constructor = ScalaJS.c.scala_sys_ShutdownHookThread;
ScalaJS.c.scala_sys_ShutdownHookThread.prototype.remove__Z = (function() {
  return ScalaJS.modules.scala_sys_package().runtime__Ljava_lang_Runtime().removeShutdownHook__Ljava_lang_Thread__Z(this)
});
ScalaJS.c.scala_sys_ShutdownHookThread.prototype.remove__ = (function() {
  return ScalaJS.bZ(this.remove__Z())
});
/** @constructor */
ScalaJS.inheritable.scala_sys_ShutdownHookThread = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_ShutdownHookThread.prototype = ScalaJS.c.scala_sys_ShutdownHookThread.prototype;
ScalaJS.is.scala_sys_ShutdownHookThread = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_ShutdownHookThread)))
});
ScalaJS.as.scala_sys_ShutdownHookThread = (function(obj) {
  if ((ScalaJS.is.scala_sys_ShutdownHookThread(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.ShutdownHookThread")
  }
});
ScalaJS.isArrayOf.scala_sys_ShutdownHookThread = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_ShutdownHookThread)))
});
ScalaJS.asArrayOf.scala_sys_ShutdownHookThread = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_ShutdownHookThread(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.ShutdownHookThread;", depth)
  }
});
ScalaJS.data.scala_sys_ShutdownHookThread = new ScalaJS.ClassTypeData({
  scala_sys_ShutdownHookThread: 0
}, false, "scala.sys.ShutdownHookThread", ScalaJS.data.java_lang_Thread, {
  scala_sys_ShutdownHookThread: 1,
  java_lang_Thread: 1,
  java_lang_Runnable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_ShutdownHookThread.prototype.$classData = ScalaJS.data.scala_sys_ShutdownHookThread;
//@ sourceMappingURL=ShutdownHookThread.js.map
