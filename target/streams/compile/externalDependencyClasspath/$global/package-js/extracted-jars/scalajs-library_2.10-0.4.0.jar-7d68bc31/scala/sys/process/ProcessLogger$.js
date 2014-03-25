/** @constructor */
ScalaJS.c.scala_sys_process_ProcessLogger$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_sys_process_ProcessLogger$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_process_ProcessLogger$.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessLogger$;
ScalaJS.c.scala_sys_process_ProcessLogger$.prototype.apply__Ljava_io_File__Lscala_sys_process_FileProcessLogger = (function(file) {
  return new ScalaJS.c.scala_sys_process_FileProcessLogger().init___Ljava_io_File(file)
});
ScalaJS.c.scala_sys_process_ProcessLogger$.prototype.apply__Lscala_Function1__Lscala_sys_process_ProcessLogger = (function(fn) {
  return this.apply__Lscala_Function1__Lscala_Function1__Lscala_sys_process_ProcessLogger(fn, fn)
});
ScalaJS.c.scala_sys_process_ProcessLogger$.prototype.apply__Lscala_Function1__Lscala_Function1__Lscala_sys_process_ProcessLogger = (function(fout, ferr) {
  return new ScalaJS.c.scala_sys_process_ProcessLogger$$anon$1().init___Lscala_Function1__Lscala_Function1(fout, ferr)
});
ScalaJS.c.scala_sys_process_ProcessLogger$.prototype.apply__Lscala_Function1__Lscala_Function1__ = (function(fout, ferr) {
  return this.apply__Lscala_Function1__Lscala_Function1__Lscala_sys_process_ProcessLogger(fout, ferr)
});
ScalaJS.c.scala_sys_process_ProcessLogger$.prototype.apply__Lscala_Function1__ = (function(fn) {
  return this.apply__Lscala_Function1__Lscala_sys_process_ProcessLogger(fn)
});
ScalaJS.c.scala_sys_process_ProcessLogger$.prototype.apply__Ljava_io_File__ = (function(file) {
  return this.apply__Ljava_io_File__Lscala_sys_process_FileProcessLogger(file)
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessLogger$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessLogger$.prototype = ScalaJS.c.scala_sys_process_ProcessLogger$.prototype;
ScalaJS.is.scala_sys_process_ProcessLogger$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessLogger$)))
});
ScalaJS.as.scala_sys_process_ProcessLogger$ = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessLogger$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessLogger")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessLogger$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessLogger$)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessLogger$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessLogger$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessLogger;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessLogger$ = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessLogger$: 0
}, false, "scala.sys.process.ProcessLogger$", ScalaJS.data.java_lang_Object, {
  scala_sys_process_ProcessLogger$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessLogger$.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessLogger$;
ScalaJS.moduleInstances.scala_sys_process_ProcessLogger = undefined;
ScalaJS.modules.scala_sys_process_ProcessLogger = (function() {
  if ((!ScalaJS.moduleInstances.scala_sys_process_ProcessLogger)) {
    ScalaJS.moduleInstances.scala_sys_process_ProcessLogger = new ScalaJS.c.scala_sys_process_ProcessLogger$().init___()
  };
  return ScalaJS.moduleInstances.scala_sys_process_ProcessLogger
});
//@ sourceMappingURL=ProcessLogger$.js.map
