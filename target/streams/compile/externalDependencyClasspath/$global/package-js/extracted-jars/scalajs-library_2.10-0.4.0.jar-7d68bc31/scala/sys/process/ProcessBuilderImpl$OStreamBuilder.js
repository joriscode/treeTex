/** @constructor */
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OStreamBuilder = (function() {
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$ThreadBuilder.call(this)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OStreamBuilder.prototype = new ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$ThreadBuilder();
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OStreamBuilder.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OStreamBuilder;
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OStreamBuilder.prototype.hasExitValue__Z = (function() {
  return false
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OStreamBuilder.prototype.scala$sys$process$ProcessBuilderImpl$OStreamBuilder$$$outer__Lscala_sys_process_ProcessBuilder$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OStreamBuilder.prototype.init___Lscala_sys_process_ProcessBuilder$__Lscala_Function0__T = (function($$outer, stream, label) {
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$ThreadBuilder.prototype.init___Lscala_sys_process_ProcessBuilder$__T__Lscala_Function1.call(this, $$outer, label, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(stream$1) {
    return (function(x$1) {
      x$1.writeInput__Lscala_Function1().apply__O__O(ScalaJS.modules.scala_sys_process_BasicIO$Uncloseable().protect__Ljava_io_OutputStream__Ljava_io_OutputStream(ScalaJS.as.java_io_OutputStream(stream$1.apply__O())));
      return ScalaJS.bV(undefined)
    })
  })(stream)));
  return this
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OStreamBuilder.prototype.scala$sys$process$ProcessBuilderImpl$OStreamBuilder$$$outer__ = (function() {
  return this.scala$sys$process$ProcessBuilderImpl$OStreamBuilder$$$outer__Lscala_sys_process_ProcessBuilder$()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$OStreamBuilder = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$OStreamBuilder.prototype = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OStreamBuilder.prototype;
ScalaJS.is.scala_sys_process_ProcessBuilderImpl$OStreamBuilder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessBuilderImpl$OStreamBuilder)))
});
ScalaJS.as.scala_sys_process_ProcessBuilderImpl$OStreamBuilder = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessBuilderImpl$OStreamBuilder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessBuilderImpl$OStreamBuilder")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$OStreamBuilder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessBuilderImpl$OStreamBuilder)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessBuilderImpl$OStreamBuilder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$OStreamBuilder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessBuilderImpl$OStreamBuilder;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessBuilderImpl$OStreamBuilder = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessBuilderImpl$OStreamBuilder: 0
}, false, "scala.sys.process.ProcessBuilderImpl$OStreamBuilder", ScalaJS.data.scala_sys_process_ProcessBuilderImpl$ThreadBuilder, {
  scala_sys_process_ProcessBuilderImpl$OStreamBuilder: 1,
  scala_sys_process_ProcessBuilderImpl$ThreadBuilder: 1,
  scala_sys_process_ProcessBuilderImpl$AbstractBuilder: 1,
  scala_sys_process_ProcessBuilder: 1,
  scala_sys_process_ProcessBuilder$Sink: 1,
  scala_sys_process_ProcessBuilder$Source: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OStreamBuilder.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessBuilderImpl$OStreamBuilder;
//@ sourceMappingURL=ProcessBuilderImpl$OStreamBuilder.js.map
