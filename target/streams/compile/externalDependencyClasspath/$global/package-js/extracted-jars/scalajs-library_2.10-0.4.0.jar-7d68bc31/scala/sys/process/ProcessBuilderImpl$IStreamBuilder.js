/** @constructor */
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$IStreamBuilder = (function() {
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$ThreadBuilder.call(this)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$IStreamBuilder.prototype = new ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$ThreadBuilder();
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$IStreamBuilder.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$IStreamBuilder;
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$IStreamBuilder.prototype.hasExitValue__Z = (function() {
  return false
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$IStreamBuilder.prototype.scala$sys$process$ProcessBuilderImpl$IStreamBuilder$$$outer__Lscala_sys_process_ProcessBuilder$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$IStreamBuilder.prototype.init___Lscala_sys_process_ProcessBuilder$__Lscala_Function0__T = (function($$outer, stream, label) {
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$ThreadBuilder.prototype.init___Lscala_sys_process_ProcessBuilder$__T__Lscala_Function1.call(this, $$outer, label, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(stream$2) {
    return (function(x$2) {
      x$2.processOutput__Lscala_Function1().apply__O__O(ScalaJS.modules.scala_sys_process_BasicIO$Uncloseable().protect__Ljava_io_InputStream__Ljava_io_InputStream(ScalaJS.as.java_io_InputStream(stream$2.apply__O())));
      return ScalaJS.bV(undefined)
    })
  })(stream)));
  return this
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$IStreamBuilder.prototype.scala$sys$process$ProcessBuilderImpl$IStreamBuilder$$$outer__ = (function() {
  return this.scala$sys$process$ProcessBuilderImpl$IStreamBuilder$$$outer__Lscala_sys_process_ProcessBuilder$()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$IStreamBuilder = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$IStreamBuilder.prototype = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$IStreamBuilder.prototype;
ScalaJS.is.scala_sys_process_ProcessBuilderImpl$IStreamBuilder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessBuilderImpl$IStreamBuilder)))
});
ScalaJS.as.scala_sys_process_ProcessBuilderImpl$IStreamBuilder = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessBuilderImpl$IStreamBuilder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessBuilderImpl$IStreamBuilder")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$IStreamBuilder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessBuilderImpl$IStreamBuilder)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessBuilderImpl$IStreamBuilder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$IStreamBuilder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessBuilderImpl$IStreamBuilder;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessBuilderImpl$IStreamBuilder = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessBuilderImpl$IStreamBuilder: 0
}, false, "scala.sys.process.ProcessBuilderImpl$IStreamBuilder", ScalaJS.data.scala_sys_process_ProcessBuilderImpl$ThreadBuilder, {
  scala_sys_process_ProcessBuilderImpl$IStreamBuilder: 1,
  scala_sys_process_ProcessBuilderImpl$ThreadBuilder: 1,
  scala_sys_process_ProcessBuilderImpl$AbstractBuilder: 1,
  scala_sys_process_ProcessBuilder: 1,
  scala_sys_process_ProcessBuilder$Sink: 1,
  scala_sys_process_ProcessBuilder$Source: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$IStreamBuilder.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessBuilderImpl$IStreamBuilder;
//@ sourceMappingURL=ProcessBuilderImpl$IStreamBuilder.js.map
