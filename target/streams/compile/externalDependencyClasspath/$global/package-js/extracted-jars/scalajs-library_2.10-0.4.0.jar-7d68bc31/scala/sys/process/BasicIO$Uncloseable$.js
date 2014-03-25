/** @constructor */
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$.prototype.constructor = ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$;
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$.prototype.apply__Ljava_io_InputStream__Ljava_io_InputStream = (function(in$2) {
  return new ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$$anon$2().init___Ljava_io_InputStream(in$2)
});
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$.prototype.apply__Ljava_io_OutputStream__Ljava_io_OutputStream = (function(out) {
  return new ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$$anon$1().init___Ljava_io_OutputStream(out)
});
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$.prototype.protect__Ljava_io_InputStream__Ljava_io_InputStream = (function(in$2) {
  if ((in$2 === ScalaJS.modules.scala_sys_process_package().stdin__Ljava_io_InputStream())) {
    return ScalaJS.modules.scala_sys_process_BasicIO$Uncloseable().apply__Ljava_io_InputStream__Ljava_io_InputStream(in$2)
  } else {
    return in$2
  }
});
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$.prototype.protect__Ljava_io_OutputStream__Ljava_io_OutputStream = (function(out) {
  if (((out === ScalaJS.modules.scala_sys_process_package().stdout__Ljava_io_PrintStream()) || (out === ScalaJS.modules.scala_sys_process_package().stderr__Ljava_io_PrintStream()))) {
    return ScalaJS.modules.scala_sys_process_BasicIO$Uncloseable().apply__Ljava_io_OutputStream__Ljava_io_OutputStream(out)
  } else {
    return out
  }
});
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$.prototype.protect__Ljava_io_OutputStream__ = (function(out) {
  return this.protect__Ljava_io_OutputStream__Ljava_io_OutputStream(out)
});
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$.prototype.protect__Ljava_io_InputStream__ = (function(in$2) {
  return this.protect__Ljava_io_InputStream__Ljava_io_InputStream(in$2)
});
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$.prototype.apply__Ljava_io_OutputStream__ = (function(out$2) {
  return this.apply__Ljava_io_OutputStream__Ljava_io_OutputStream(out$2)
});
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$.prototype.apply__Ljava_io_InputStream__ = (function(in$3) {
  return this.apply__Ljava_io_InputStream__Ljava_io_InputStream(in$3)
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_BasicIO$Uncloseable$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_BasicIO$Uncloseable$.prototype = ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$.prototype;
ScalaJS.is.scala_sys_process_BasicIO$Uncloseable$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_BasicIO$Uncloseable$)))
});
ScalaJS.as.scala_sys_process_BasicIO$Uncloseable$ = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_BasicIO$Uncloseable$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.BasicIO$Uncloseable")
  }
});
ScalaJS.isArrayOf.scala_sys_process_BasicIO$Uncloseable$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_BasicIO$Uncloseable$)))
});
ScalaJS.asArrayOf.scala_sys_process_BasicIO$Uncloseable$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_BasicIO$Uncloseable$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.BasicIO$Uncloseable;", depth)
  }
});
ScalaJS.data.scala_sys_process_BasicIO$Uncloseable$ = new ScalaJS.ClassTypeData({
  scala_sys_process_BasicIO$Uncloseable$: 0
}, false, "scala.sys.process.BasicIO$Uncloseable$", ScalaJS.data.java_lang_Object, {
  scala_sys_process_BasicIO$Uncloseable$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$.prototype.$classData = ScalaJS.data.scala_sys_process_BasicIO$Uncloseable$;
ScalaJS.moduleInstances.scala_sys_process_BasicIO$Uncloseable = undefined;
ScalaJS.modules.scala_sys_process_BasicIO$Uncloseable = (function() {
  if ((!ScalaJS.moduleInstances.scala_sys_process_BasicIO$Uncloseable)) {
    ScalaJS.moduleInstances.scala_sys_process_BasicIO$Uncloseable = new ScalaJS.c.scala_sys_process_BasicIO$Uncloseable$().init___()
  };
  return ScalaJS.moduleInstances.scala_sys_process_BasicIO$Uncloseable
});
//@ sourceMappingURL=BasicIO$Uncloseable$.js.map
