/** @constructor */
ScalaJS.c.java_lang_Runtime = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.java_lang_Runtime.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_Runtime.prototype.constructor = ScalaJS.c.java_lang_Runtime;
ScalaJS.c.java_lang_Runtime.prototype.exit__I__V = (function(status) {
  this.halt0__p1__I__V(status)
});
ScalaJS.c.java_lang_Runtime.prototype.addShutdownHook__Ljava_lang_Thread__V = (function(hook) {
  /*<skip>*/
});
ScalaJS.c.java_lang_Runtime.prototype.removeShutdownHook__Ljava_lang_Thread__V = (function(hook) {
  /*<skip>*/
});
ScalaJS.c.java_lang_Runtime.prototype.halt__I__V = (function(status) {
  this.halt0__p1__I__V(status)
});
ScalaJS.c.java_lang_Runtime.prototype.halt0__p1__I__V = (function(status) {
  throw new ScalaJS.c.java_lang_SecurityException().init___T("Cannot terminate a JavaScript program")
});
ScalaJS.c.java_lang_Runtime.prototype.availableProcessors__I = (function() {
  return 1
});
ScalaJS.c.java_lang_Runtime.prototype.freeMemory__J = (function() {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("Runtime.freeMemory() not implemented")
});
ScalaJS.c.java_lang_Runtime.prototype.totalMemory__J = (function() {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("Runtime.totalMemory() not implemented")
});
ScalaJS.c.java_lang_Runtime.prototype.maxMemory__J = (function() {
  return ScalaJS.modules.java_lang_Long().MAX$undVALUE__J()
});
ScalaJS.c.java_lang_Runtime.prototype.gc__V = (function() {
  /*<skip>*/
});
ScalaJS.c.java_lang_Runtime.prototype.runFinalization__V = (function() {
  /*<skip>*/
});
ScalaJS.c.java_lang_Runtime.prototype.traceInstructions__Z__V = (function(on) {
  /*<skip>*/
});
ScalaJS.c.java_lang_Runtime.prototype.traceMethodCalls__Z__V = (function(on) {
  /*<skip>*/
});
ScalaJS.c.java_lang_Runtime.prototype.load__T__V = (function(filename) {
  ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("Runtime.load() not implemented")
});
ScalaJS.c.java_lang_Runtime.prototype.loadLibrary__T__V = (function(filename) {
  ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("Runtime.loadLibrary() not implemented")
});
ScalaJS.c.java_lang_Runtime.prototype.loadLibrary__T__ = (function(filename) {
  return ScalaJS.bV(this.loadLibrary__T__V(filename))
});
ScalaJS.c.java_lang_Runtime.prototype.load__T__ = (function(filename$2) {
  return ScalaJS.bV(this.load__T__V(filename$2))
});
ScalaJS.c.java_lang_Runtime.prototype.traceMethodCalls__Z__ = (function(on) {
  return ScalaJS.bV(this.traceMethodCalls__Z__V(on))
});
ScalaJS.c.java_lang_Runtime.prototype.traceInstructions__Z__ = (function(on$2) {
  return ScalaJS.bV(this.traceInstructions__Z__V(on$2))
});
ScalaJS.c.java_lang_Runtime.prototype.runFinalization__ = (function() {
  return ScalaJS.bV(this.runFinalization__V())
});
ScalaJS.c.java_lang_Runtime.prototype.gc__ = (function() {
  return ScalaJS.bV(this.gc__V())
});
ScalaJS.c.java_lang_Runtime.prototype.maxMemory__ = (function() {
  return ScalaJS.bJ(this.maxMemory__J())
});
ScalaJS.c.java_lang_Runtime.prototype.totalMemory__ = (function() {
  return ScalaJS.bJ(this.totalMemory__J())
});
ScalaJS.c.java_lang_Runtime.prototype.freeMemory__ = (function() {
  return ScalaJS.bJ(this.freeMemory__J())
});
ScalaJS.c.java_lang_Runtime.prototype.availableProcessors__ = (function() {
  return ScalaJS.bI(this.availableProcessors__I())
});
ScalaJS.c.java_lang_Runtime.prototype.halt__I__ = (function(status) {
  return ScalaJS.bV(this.halt__I__V(status))
});
ScalaJS.c.java_lang_Runtime.prototype.removeShutdownHook__Ljava_lang_Thread__ = (function(hook) {
  return ScalaJS.bV(this.removeShutdownHook__Ljava_lang_Thread__V(hook))
});
ScalaJS.c.java_lang_Runtime.prototype.addShutdownHook__Ljava_lang_Thread__ = (function(hook$2) {
  return ScalaJS.bV(this.addShutdownHook__Ljava_lang_Thread__V(hook$2))
});
ScalaJS.c.java_lang_Runtime.prototype.exit__I__ = (function(status$2) {
  return ScalaJS.bV(this.exit__I__V(status$2))
});
/** @constructor */
ScalaJS.inheritable.java_lang_Runtime = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_Runtime.prototype = ScalaJS.c.java_lang_Runtime.prototype;
ScalaJS.is.java_lang_Runtime = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Runtime)))
});
ScalaJS.as.java_lang_Runtime = (function(obj) {
  if ((ScalaJS.is.java_lang_Runtime(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Runtime")
  }
});
ScalaJS.isArrayOf.java_lang_Runtime = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Runtime)))
});
ScalaJS.asArrayOf.java_lang_Runtime = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Runtime(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Runtime;", depth)
  }
});
ScalaJS.data.java_lang_Runtime = new ScalaJS.ClassTypeData({
  java_lang_Runtime: 0
}, false, "java.lang.Runtime", ScalaJS.data.java_lang_Object, {
  java_lang_Runtime: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_Runtime.prototype.$classData = ScalaJS.data.java_lang_Runtime;
//@ sourceMappingURL=Runtime.js.map
