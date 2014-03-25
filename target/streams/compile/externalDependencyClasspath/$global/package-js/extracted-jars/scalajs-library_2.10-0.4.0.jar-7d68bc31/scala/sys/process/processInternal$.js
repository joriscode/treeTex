/** @constructor */
ScalaJS.c.scala_sys_process_processInternal$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.processDebug$1 = false
});
ScalaJS.c.scala_sys_process_processInternal$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_process_processInternal$.prototype.constructor = ScalaJS.c.scala_sys_process_processInternal$;
ScalaJS.c.scala_sys_process_processInternal$.prototype.processDebug__Z = (function() {
  return this.processDebug$1
});
ScalaJS.c.scala_sys_process_processInternal$.prototype.onInterrupt__Lscala_Function0__Lscala_PartialFunction = (function(handler) {
  return new ScalaJS.c.scala_sys_process_processInternal$$anonfun$onInterrupt$1().init___Lscala_Function0(handler)
});
ScalaJS.c.scala_sys_process_processInternal$.prototype.ioFailure__Lscala_Function1__Lscala_PartialFunction = (function(handler) {
  return new ScalaJS.c.scala_sys_process_processInternal$$anonfun$ioFailure$1().init___Lscala_Function1(handler)
});
ScalaJS.c.scala_sys_process_processInternal$.prototype.dbg__Lscala_collection_Seq__V = (function(msgs) {
  if (this.processDebug__Z()) {
    ScalaJS.modules.scala_Console().println__O__V(("[process] " + msgs.mkString__T__T(" ")))
  }
});
ScalaJS.c.scala_sys_process_processInternal$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_sys_process_processInternal = this;
  this.processDebug$1 = ScalaJS.modules.scala_sys_package().props__Lscala_sys_SystemProperties().contains__T__Z("scala.process.debug");
  this.dbg__Lscala_collection_Seq__V(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), ["Initializing process package."])));
  return this
});
ScalaJS.c.scala_sys_process_processInternal$.prototype.dbg__Lscala_collection_Seq__ = (function(msgs) {
  return ScalaJS.bV(this.dbg__Lscala_collection_Seq__V(msgs))
});
ScalaJS.c.scala_sys_process_processInternal$.prototype.ioFailure__Lscala_Function1__ = (function(handler) {
  return this.ioFailure__Lscala_Function1__Lscala_PartialFunction(handler)
});
ScalaJS.c.scala_sys_process_processInternal$.prototype.onInterrupt__Lscala_Function0__ = (function(handler$2) {
  return this.onInterrupt__Lscala_Function0__Lscala_PartialFunction(handler$2)
});
ScalaJS.c.scala_sys_process_processInternal$.prototype.processDebug__ = (function() {
  return ScalaJS.bZ(this.processDebug__Z())
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_processInternal$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_processInternal$.prototype = ScalaJS.c.scala_sys_process_processInternal$.prototype;
ScalaJS.is.scala_sys_process_processInternal$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_processInternal$)))
});
ScalaJS.as.scala_sys_process_processInternal$ = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_processInternal$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.processInternal")
  }
});
ScalaJS.isArrayOf.scala_sys_process_processInternal$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_processInternal$)))
});
ScalaJS.asArrayOf.scala_sys_process_processInternal$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_processInternal$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.processInternal;", depth)
  }
});
ScalaJS.data.scala_sys_process_processInternal$ = new ScalaJS.ClassTypeData({
  scala_sys_process_processInternal$: 0
}, false, "scala.sys.process.processInternal$", ScalaJS.data.java_lang_Object, {
  scala_sys_process_processInternal$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_processInternal$.prototype.$classData = ScalaJS.data.scala_sys_process_processInternal$;
ScalaJS.moduleInstances.scala_sys_process_processInternal = undefined;
ScalaJS.modules.scala_sys_process_processInternal = (function() {
  if ((!ScalaJS.moduleInstances.scala_sys_process_processInternal)) {
    ScalaJS.moduleInstances.scala_sys_process_processInternal = new ScalaJS.c.scala_sys_process_processInternal$().init___()
  };
  return ScalaJS.moduleInstances.scala_sys_process_processInternal
});
//@ sourceMappingURL=processInternal$.js.map
