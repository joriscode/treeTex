/** @constructor */
ScalaJS.c.scala_sys_process_ProcessBuilder$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_sys_process_ProcessBuilder$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_process_ProcessBuilder$.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessBuilder$;
ScalaJS.c.scala_sys_process_ProcessBuilder$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_sys_process_ProcessBuilder = this;
  ScalaJS.impls.scala_sys_process_ProcessBuilderImpl$class__$init$__Lscala_sys_process_ProcessBuilder$__V(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessBuilder$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessBuilder$.prototype = ScalaJS.c.scala_sys_process_ProcessBuilder$.prototype;
ScalaJS.is.scala_sys_process_ProcessBuilder$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessBuilder$)))
});
ScalaJS.as.scala_sys_process_ProcessBuilder$ = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessBuilder$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessBuilder")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessBuilder$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessBuilder$)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessBuilder$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessBuilder$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessBuilder;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessBuilder$ = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessBuilder$: 0
}, false, "scala.sys.process.ProcessBuilder$", ScalaJS.data.java_lang_Object, {
  scala_sys_process_ProcessBuilder$: 1,
  scala_sys_process_ProcessBuilderImpl: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessBuilder$.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessBuilder$;
ScalaJS.moduleInstances.scala_sys_process_ProcessBuilder = undefined;
ScalaJS.modules.scala_sys_process_ProcessBuilder = (function() {
  if ((!ScalaJS.moduleInstances.scala_sys_process_ProcessBuilder)) {
    ScalaJS.moduleInstances.scala_sys_process_ProcessBuilder = new ScalaJS.c.scala_sys_process_ProcessBuilder$().init___()
  };
  return ScalaJS.moduleInstances.scala_sys_process_ProcessBuilder
});
//@ sourceMappingURL=ProcessBuilder$.js.map
