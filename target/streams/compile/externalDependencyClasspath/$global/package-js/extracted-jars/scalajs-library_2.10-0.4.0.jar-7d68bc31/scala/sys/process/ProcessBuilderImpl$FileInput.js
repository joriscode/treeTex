/** @constructor */
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$FileInput = (function() {
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$IStreamBuilder.call(this)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$FileInput.prototype = new ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$IStreamBuilder();
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$FileInput.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$FileInput;
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$FileInput.prototype.scala$sys$process$ProcessBuilderImpl$FileInput$$$outer__Lscala_sys_process_ProcessBuilder$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$FileInput.prototype.init___Lscala_sys_process_ProcessBuilder$__Ljava_io_File = (function($$outer, file) {
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$IStreamBuilder.prototype.init___Lscala_sys_process_ProcessBuilder$__Lscala_Function0__T.call(this, $$outer, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(file$2) {
    return (function() {
      return new ScalaJS.c.java_io_FileInputStream().init___Ljava_io_File(file$2)
    })
  })(file)), file.getAbsolutePath__T());
  return this
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$FileInput.prototype.scala$sys$process$ProcessBuilderImpl$FileInput$$$outer__ = (function() {
  return this.scala$sys$process$ProcessBuilderImpl$FileInput$$$outer__Lscala_sys_process_ProcessBuilder$()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$FileInput = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$FileInput.prototype = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$FileInput.prototype;
ScalaJS.is.scala_sys_process_ProcessBuilderImpl$FileInput = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessBuilderImpl$FileInput)))
});
ScalaJS.as.scala_sys_process_ProcessBuilderImpl$FileInput = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessBuilderImpl$FileInput(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessBuilderImpl$FileInput")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$FileInput = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessBuilderImpl$FileInput)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessBuilderImpl$FileInput = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$FileInput(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessBuilderImpl$FileInput;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessBuilderImpl$FileInput = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessBuilderImpl$FileInput: 0
}, false, "scala.sys.process.ProcessBuilderImpl$FileInput", ScalaJS.data.scala_sys_process_ProcessBuilderImpl$IStreamBuilder, {
  scala_sys_process_ProcessBuilderImpl$FileInput: 1,
  scala_sys_process_ProcessBuilderImpl$IStreamBuilder: 1,
  scala_sys_process_ProcessBuilderImpl$ThreadBuilder: 1,
  scala_sys_process_ProcessBuilderImpl$AbstractBuilder: 1,
  scala_sys_process_ProcessBuilder: 1,
  scala_sys_process_ProcessBuilder$Sink: 1,
  scala_sys_process_ProcessBuilder$Source: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$FileInput.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessBuilderImpl$FileInput;
//@ sourceMappingURL=ProcessBuilderImpl$FileInput.js.map
