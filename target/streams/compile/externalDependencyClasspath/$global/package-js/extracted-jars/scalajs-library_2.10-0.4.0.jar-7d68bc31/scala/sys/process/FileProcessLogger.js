/** @constructor */
ScalaJS.c.scala_sys_process_FileProcessLogger = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.writer$1 = null
});
ScalaJS.c.scala_sys_process_FileProcessLogger.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_process_FileProcessLogger.prototype.constructor = ScalaJS.c.scala_sys_process_FileProcessLogger;
ScalaJS.c.scala_sys_process_FileProcessLogger.prototype.writer__p1__Ljava_io_PrintWriter = (function() {
  return this.writer$1
});
ScalaJS.c.scala_sys_process_FileProcessLogger.prototype.out__Lscala_Function0__V = (function(s) {
  this.writer__p1__Ljava_io_PrintWriter().println__T__V(ScalaJS.as.java_lang_String(s.apply__O()))
});
ScalaJS.c.scala_sys_process_FileProcessLogger.prototype.err__Lscala_Function0__V = (function(s) {
  this.writer__p1__Ljava_io_PrintWriter().println__T__V(ScalaJS.as.java_lang_String(s.apply__O()))
});
ScalaJS.c.scala_sys_process_FileProcessLogger.prototype.buffer__Lscala_Function0__O = (function(f) {
  return f.apply__O()
});
ScalaJS.c.scala_sys_process_FileProcessLogger.prototype.close__V = (function() {
  this.writer__p1__Ljava_io_PrintWriter().close__V()
});
ScalaJS.c.scala_sys_process_FileProcessLogger.prototype.flush__V = (function() {
  this.writer__p1__Ljava_io_PrintWriter().flush__V()
});
ScalaJS.c.scala_sys_process_FileProcessLogger.prototype.init___Ljava_io_File = (function(file) {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.writer$1 = new ScalaJS.c.java_io_PrintWriter().init___Ljava_io_Writer(new ScalaJS.c.java_io_BufferedWriter().init___Ljava_io_Writer(new ScalaJS.c.java_io_OutputStreamWriter().init___Ljava_io_OutputStream(new ScalaJS.c.java_io_FileOutputStream().init___Ljava_io_File__Z(file, true))));
  return this
});
ScalaJS.c.scala_sys_process_FileProcessLogger.prototype.flush__ = (function() {
  return ScalaJS.bV(this.flush__V())
});
ScalaJS.c.scala_sys_process_FileProcessLogger.prototype.close__ = (function() {
  return ScalaJS.bV(this.close__V())
});
ScalaJS.c.scala_sys_process_FileProcessLogger.prototype.buffer__Lscala_Function0__ = (function(f) {
  return this.buffer__Lscala_Function0__O(f)
});
ScalaJS.c.scala_sys_process_FileProcessLogger.prototype.err__Lscala_Function0__ = (function(s) {
  return ScalaJS.bV(this.err__Lscala_Function0__V(s))
});
ScalaJS.c.scala_sys_process_FileProcessLogger.prototype.out__Lscala_Function0__ = (function(s$2) {
  return ScalaJS.bV(this.out__Lscala_Function0__V(s$2))
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_FileProcessLogger = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_FileProcessLogger.prototype = ScalaJS.c.scala_sys_process_FileProcessLogger.prototype;
ScalaJS.is.scala_sys_process_FileProcessLogger = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_FileProcessLogger)))
});
ScalaJS.as.scala_sys_process_FileProcessLogger = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_FileProcessLogger(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.FileProcessLogger")
  }
});
ScalaJS.isArrayOf.scala_sys_process_FileProcessLogger = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_FileProcessLogger)))
});
ScalaJS.asArrayOf.scala_sys_process_FileProcessLogger = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_FileProcessLogger(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.FileProcessLogger;", depth)
  }
});
ScalaJS.data.scala_sys_process_FileProcessLogger = new ScalaJS.ClassTypeData({
  scala_sys_process_FileProcessLogger: 0
}, false, "scala.sys.process.FileProcessLogger", ScalaJS.data.java_lang_Object, {
  scala_sys_process_FileProcessLogger: 1,
  java_io_Flushable: 1,
  java_io_Closeable: 1,
  java_lang_AutoCloseable: 1,
  scala_sys_process_ProcessLogger: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_FileProcessLogger.prototype.$classData = ScalaJS.data.scala_sys_process_FileProcessLogger;
//@ sourceMappingURL=FileProcessLogger.js.map
