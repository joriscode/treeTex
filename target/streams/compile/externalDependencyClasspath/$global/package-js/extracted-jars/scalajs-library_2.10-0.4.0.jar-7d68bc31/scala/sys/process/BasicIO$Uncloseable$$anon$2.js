/** @constructor */
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$$anon$2 = (function() {
  ScalaJS.c.java_io_FilterInputStream.call(this)
});
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$$anon$2.prototype = new ScalaJS.inheritable.java_io_FilterInputStream();
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$$anon$2.prototype.constructor = ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$$anon$2;
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$$anon$2.prototype.close__V = (function() {
  ScalaJS.impls.scala_sys_process_BasicIO$Uncloseable$class__close__Lscala_sys_process_BasicIO$Uncloseable__V(this)
});
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$$anon$2.prototype.init___Ljava_io_InputStream = (function(in$1) {
  ScalaJS.c.java_io_FilterInputStream.prototype.init___Ljava_io_InputStream.call(this, in$1);
  ScalaJS.impls.scala_sys_process_BasicIO$Uncloseable$class__$init$__Lscala_sys_process_BasicIO$Uncloseable__V(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_BasicIO$Uncloseable$$anon$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_BasicIO$Uncloseable$$anon$2.prototype = ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$$anon$2.prototype;
ScalaJS.is.scala_sys_process_BasicIO$Uncloseable$$anon$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_BasicIO$Uncloseable$$anon$2)))
});
ScalaJS.as.scala_sys_process_BasicIO$Uncloseable$$anon$2 = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_BasicIO$Uncloseable$$anon$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.BasicIO$Uncloseable$$anon$2")
  }
});
ScalaJS.isArrayOf.scala_sys_process_BasicIO$Uncloseable$$anon$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_BasicIO$Uncloseable$$anon$2)))
});
ScalaJS.asArrayOf.scala_sys_process_BasicIO$Uncloseable$$anon$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_BasicIO$Uncloseable$$anon$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.BasicIO$Uncloseable$$anon$2;", depth)
  }
});
ScalaJS.data.scala_sys_process_BasicIO$Uncloseable$$anon$2 = new ScalaJS.ClassTypeData({
  scala_sys_process_BasicIO$Uncloseable$$anon$2: 0
}, false, "scala.sys.process.BasicIO$Uncloseable$$anon$2", ScalaJS.data.java_io_FilterInputStream, {
  scala_sys_process_BasicIO$Uncloseable$$anon$2: 1,
  scala_sys_process_BasicIO$Uncloseable: 1,
  java_io_FilterInputStream: 1,
  java_io_InputStream: 1,
  java_io_Closeable: 1,
  java_lang_AutoCloseable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$$anon$2.prototype.$classData = ScalaJS.data.scala_sys_process_BasicIO$Uncloseable$$anon$2;
//@ sourceMappingURL=BasicIO$Uncloseable$$anon$2.js.map
