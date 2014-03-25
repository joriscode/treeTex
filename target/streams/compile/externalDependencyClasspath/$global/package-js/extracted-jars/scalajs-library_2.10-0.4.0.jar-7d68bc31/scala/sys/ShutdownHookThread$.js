/** @constructor */
ScalaJS.c.scala_sys_ShutdownHookThread$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.hookNameCount$1 = 0
});
ScalaJS.c.scala_sys_ShutdownHookThread$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_ShutdownHookThread$.prototype.constructor = ScalaJS.c.scala_sys_ShutdownHookThread$;
ScalaJS.c.scala_sys_ShutdownHookThread$.prototype.hookNameCount__p1__I = (function() {
  return this.hookNameCount$1
});
ScalaJS.c.scala_sys_ShutdownHookThread$.prototype.hookNameCount$und$eq__p1__I__V = (function(x$1) {
  this.hookNameCount$1 = x$1
});
ScalaJS.c.scala_sys_ShutdownHookThread$.prototype.scala$sys$ShutdownHookThread$$hookName__T = (function() {
  this.hookNameCount$und$eq__p1__I__V((this.hookNameCount__p1__I() + 1));
  return ("shutdownHook" + ScalaJS.bI(this.hookNameCount__p1__I()))
});
ScalaJS.c.scala_sys_ShutdownHookThread$.prototype.apply__Lscala_Function0__Lscala_sys_ShutdownHookThread = (function(body) {
  var t = new ScalaJS.c.scala_sys_ShutdownHookThread$$anon$1().init___Lscala_Function0(body);
  ScalaJS.modules.scala_sys_package().runtime__Ljava_lang_Runtime().addShutdownHook__Ljava_lang_Thread__V(t);
  return t
});
ScalaJS.c.scala_sys_ShutdownHookThread$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_sys_ShutdownHookThread = this;
  this.hookNameCount$1 = 0;
  return this
});
ScalaJS.c.scala_sys_ShutdownHookThread$.prototype.apply__Lscala_Function0__ = (function(body) {
  return this.apply__Lscala_Function0__Lscala_sys_ShutdownHookThread(body)
});
ScalaJS.c.scala_sys_ShutdownHookThread$.prototype.scala$sys$ShutdownHookThread$$hookName__ = (function() {
  return this.scala$sys$ShutdownHookThread$$hookName__T()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_ShutdownHookThread$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_ShutdownHookThread$.prototype = ScalaJS.c.scala_sys_ShutdownHookThread$.prototype;
ScalaJS.is.scala_sys_ShutdownHookThread$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_ShutdownHookThread$)))
});
ScalaJS.as.scala_sys_ShutdownHookThread$ = (function(obj) {
  if ((ScalaJS.is.scala_sys_ShutdownHookThread$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.ShutdownHookThread")
  }
});
ScalaJS.isArrayOf.scala_sys_ShutdownHookThread$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_ShutdownHookThread$)))
});
ScalaJS.asArrayOf.scala_sys_ShutdownHookThread$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_ShutdownHookThread$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.ShutdownHookThread;", depth)
  }
});
ScalaJS.data.scala_sys_ShutdownHookThread$ = new ScalaJS.ClassTypeData({
  scala_sys_ShutdownHookThread$: 0
}, false, "scala.sys.ShutdownHookThread$", ScalaJS.data.java_lang_Object, {
  scala_sys_ShutdownHookThread$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_ShutdownHookThread$.prototype.$classData = ScalaJS.data.scala_sys_ShutdownHookThread$;
ScalaJS.moduleInstances.scala_sys_ShutdownHookThread = undefined;
ScalaJS.modules.scala_sys_ShutdownHookThread = (function() {
  if ((!ScalaJS.moduleInstances.scala_sys_ShutdownHookThread)) {
    ScalaJS.moduleInstances.scala_sys_ShutdownHookThread = new ScalaJS.c.scala_sys_ShutdownHookThread$().init___()
  };
  return ScalaJS.moduleInstances.scala_sys_ShutdownHookThread
});
//@ sourceMappingURL=ShutdownHookThread$.js.map
