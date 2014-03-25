/** @constructor */
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$$anon$1 = (function() {
  ScalaJS.c.java_io_FilterOutputStream.call(this)
});
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$$anon$1.prototype = new ScalaJS.inheritable.java_io_FilterOutputStream();
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$$anon$1.prototype.constructor = ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$$anon$1;
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$$anon$1.prototype.close__V = (function() {
  ScalaJS.impls.scala_sys_process_BasicIO$Uncloseable$class__close__Lscala_sys_process_BasicIO$Uncloseable__V(this)
});
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$$anon$1.prototype.init___Ljava_io_OutputStream = (function(out$1) {
  ScalaJS.c.java_io_FilterOutputStream.prototype.init___Ljava_io_OutputStream.call(this, out$1);
  ScalaJS.impls.scala_sys_process_BasicIO$Uncloseable$class__$init$__Lscala_sys_process_BasicIO$Uncloseable__V(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_BasicIO$Uncloseable$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_BasicIO$Uncloseable$$anon$1.prototype = ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$$anon$1.prototype;
ScalaJS.is.scala_sys_process_BasicIO$Uncloseable$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_BasicIO$Uncloseable$$anon$1)))
});
ScalaJS.as.scala_sys_process_BasicIO$Uncloseable$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_BasicIO$Uncloseable$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.BasicIO$Uncloseable$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_sys_process_BasicIO$Uncloseable$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_BasicIO$Uncloseable$$anon$1)))
});
ScalaJS.asArrayOf.scala_sys_process_BasicIO$Uncloseable$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_BasicIO$Uncloseable$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.BasicIO$Uncloseable$$anon$1;", depth)
  }
});
ScalaJS.data.scala_sys_process_BasicIO$Uncloseable$$anon$1 = new ScalaJS.ClassTypeData({
  scala_sys_process_BasicIO$Uncloseable$$anon$1: 0
}, false, "scala.sys.process.BasicIO$Uncloseable$$anon$1", ScalaJS.data.java_io_FilterOutputStream, {
  scala_sys_process_BasicIO$Uncloseable$$anon$1: 1,
  scala_sys_process_BasicIO$Uncloseable: 1,
  java_io_FilterOutputStream: 1,
  java_io_OutputStream: 1,
  java_io_Flushable: 1,
  java_io_Closeable: 1,
  java_lang_AutoCloseable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$$anon$1.prototype.$classData = ScalaJS.data.scala_sys_process_BasicIO$Uncloseable$$anon$1;
//@ sourceMappingURL=BasicIO$Uncloseable$$anon$1.js.map
