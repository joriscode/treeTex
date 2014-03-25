/** @constructor */
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$FileOutput = (function() {
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OStreamBuilder.call(this)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$FileOutput.prototype = new ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$OStreamBuilder();
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$FileOutput.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$FileOutput;
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$FileOutput.prototype.scala$sys$process$ProcessBuilderImpl$FileOutput$$$outer__Lscala_sys_process_ProcessBuilder$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$FileOutput.prototype.init___Lscala_sys_process_ProcessBuilder$__Ljava_io_File__Z = (function($$outer, file, append) {
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OStreamBuilder.prototype.init___Lscala_sys_process_ProcessBuilder$__Lscala_Function0__T.call(this, $$outer, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(file$1, append$1) {
    return (function() {
      return new ScalaJS.c.java_io_FileOutputStream().init___Ljava_io_File__Z(file$1, append$1)
    })
  })(file, append)), file.getAbsolutePath__T());
  return this
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$FileOutput.prototype.scala$sys$process$ProcessBuilderImpl$FileOutput$$$outer__ = (function() {
  return this.scala$sys$process$ProcessBuilderImpl$FileOutput$$$outer__Lscala_sys_process_ProcessBuilder$()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$FileOutput = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$FileOutput.prototype = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$FileOutput.prototype;
ScalaJS.is.scala_sys_process_ProcessBuilderImpl$FileOutput = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessBuilderImpl$FileOutput)))
});
ScalaJS.as.scala_sys_process_ProcessBuilderImpl$FileOutput = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessBuilderImpl$FileOutput(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessBuilderImpl$FileOutput")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$FileOutput = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessBuilderImpl$FileOutput)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessBuilderImpl$FileOutput = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$FileOutput(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessBuilderImpl$FileOutput;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessBuilderImpl$FileOutput = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessBuilderImpl$FileOutput: 0
}, false, "scala.sys.process.ProcessBuilderImpl$FileOutput", ScalaJS.data.scala_sys_process_ProcessBuilderImpl$OStreamBuilder, {
  scala_sys_process_ProcessBuilderImpl$FileOutput: 1,
  scala_sys_process_ProcessBuilderImpl$OStreamBuilder: 1,
  scala_sys_process_ProcessBuilderImpl$ThreadBuilder: 1,
  scala_sys_process_ProcessBuilderImpl$AbstractBuilder: 1,
  scala_sys_process_ProcessBuilder: 1,
  scala_sys_process_ProcessBuilder$Sink: 1,
  scala_sys_process_ProcessBuilder$Source: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$FileOutput.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessBuilderImpl$FileOutput;
//@ sourceMappingURL=ProcessBuilderImpl$FileOutput.js.map
