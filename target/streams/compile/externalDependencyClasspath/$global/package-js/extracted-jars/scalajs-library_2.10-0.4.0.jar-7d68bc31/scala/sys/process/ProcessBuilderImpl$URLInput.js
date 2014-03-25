/** @constructor */
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$URLInput = (function() {
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$IStreamBuilder.call(this)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$URLInput.prototype = new ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$IStreamBuilder();
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$URLInput.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$URLInput;
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$URLInput.prototype.scala$sys$process$ProcessBuilderImpl$URLInput$$$outer__Lscala_sys_process_ProcessBuilder$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$URLInput.prototype.init___Lscala_sys_process_ProcessBuilder$__Ljava_net_URL = (function($$outer, url) {
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$IStreamBuilder.prototype.init___Lscala_sys_process_ProcessBuilder$__Lscala_Function0__T.call(this, $$outer, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(url$1) {
    return (function() {
      return url$1.openStream__Ljava_io_InputStream()
    })
  })(url)), url.toString__T());
  return this
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$URLInput.prototype.scala$sys$process$ProcessBuilderImpl$URLInput$$$outer__ = (function() {
  return this.scala$sys$process$ProcessBuilderImpl$URLInput$$$outer__Lscala_sys_process_ProcessBuilder$()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$URLInput = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$URLInput.prototype = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$URLInput.prototype;
ScalaJS.is.scala_sys_process_ProcessBuilderImpl$URLInput = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessBuilderImpl$URLInput)))
});
ScalaJS.as.scala_sys_process_ProcessBuilderImpl$URLInput = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessBuilderImpl$URLInput(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessBuilderImpl$URLInput")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$URLInput = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessBuilderImpl$URLInput)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessBuilderImpl$URLInput = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$URLInput(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessBuilderImpl$URLInput;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessBuilderImpl$URLInput = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessBuilderImpl$URLInput: 0
}, false, "scala.sys.process.ProcessBuilderImpl$URLInput", ScalaJS.data.scala_sys_process_ProcessBuilderImpl$IStreamBuilder, {
  scala_sys_process_ProcessBuilderImpl$URLInput: 1,
  scala_sys_process_ProcessBuilderImpl$IStreamBuilder: 1,
  scala_sys_process_ProcessBuilderImpl$ThreadBuilder: 1,
  scala_sys_process_ProcessBuilderImpl$AbstractBuilder: 1,
  scala_sys_process_ProcessBuilder: 1,
  scala_sys_process_ProcessBuilder$Sink: 1,
  scala_sys_process_ProcessBuilder$Source: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$URLInput.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessBuilderImpl$URLInput;
//@ sourceMappingURL=ProcessBuilderImpl$URLInput.js.map
