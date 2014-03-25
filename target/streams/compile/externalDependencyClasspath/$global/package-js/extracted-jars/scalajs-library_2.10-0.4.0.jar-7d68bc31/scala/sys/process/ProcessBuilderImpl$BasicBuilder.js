/** @constructor */
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$BasicBuilder = (function() {
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.call(this)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$BasicBuilder.prototype = new ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$AbstractBuilder();
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$BasicBuilder.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$BasicBuilder;
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$BasicBuilder.prototype.checkNotThis__Lscala_sys_process_ProcessBuilder__V = (function(a) {
  ScalaJS.modules.scala_Predef().require__Z__Lscala_Function0__V((!ScalaJS.anyRefEqEq(a, this)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(a$1) {
    return (function() {
      return (("Compound process '" + a$1) + "' cannot contain itself.")
    })
  })(a)))
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$BasicBuilder.prototype.run__Lscala_sys_process_ProcessIO__Lscala_sys_process_Process = (function(io) {
  var p = this.createProcess__Lscala_sys_process_ProcessIO__Lscala_sys_process_ProcessImpl$BasicProcess(io);
  p.start__V();
  return p
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$BasicBuilder.prototype.scala$sys$process$ProcessBuilderImpl$BasicBuilder$$$outer__Lscala_sys_process_ProcessBuilder$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$BasicBuilder.prototype.scala$sys$process$ProcessBuilderImpl$BasicBuilder$$$outer__ = (function() {
  return this.scala$sys$process$ProcessBuilderImpl$BasicBuilder$$$outer__Lscala_sys_process_ProcessBuilder$()
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$BasicBuilder.prototype.checkNotThis__Lscala_sys_process_ProcessBuilder__ = (function(a) {
  return ScalaJS.bV(this.checkNotThis__Lscala_sys_process_ProcessBuilder__V(a))
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$BasicBuilder.prototype.createProcess__Lscala_sys_process_ProcessIO__ = (function(io) {
  return this.createProcess__Lscala_sys_process_ProcessIO__Lscala_sys_process_ProcessImpl$BasicProcess(io)
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$BasicBuilder = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$BasicBuilder.prototype = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$BasicBuilder.prototype;
ScalaJS.is.scala_sys_process_ProcessBuilderImpl$BasicBuilder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessBuilderImpl$BasicBuilder)))
});
ScalaJS.as.scala_sys_process_ProcessBuilderImpl$BasicBuilder = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessBuilderImpl$BasicBuilder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessBuilderImpl$BasicBuilder")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$BasicBuilder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessBuilderImpl$BasicBuilder)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessBuilderImpl$BasicBuilder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$BasicBuilder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessBuilderImpl$BasicBuilder;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessBuilderImpl$BasicBuilder = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessBuilderImpl$BasicBuilder: 0
}, false, "scala.sys.process.ProcessBuilderImpl$BasicBuilder", ScalaJS.data.scala_sys_process_ProcessBuilderImpl$AbstractBuilder, {
  scala_sys_process_ProcessBuilderImpl$BasicBuilder: 1,
  scala_sys_process_ProcessBuilderImpl$AbstractBuilder: 1,
  scala_sys_process_ProcessBuilder: 1,
  scala_sys_process_ProcessBuilder$Sink: 1,
  scala_sys_process_ProcessBuilder$Source: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$BasicBuilder.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessBuilderImpl$BasicBuilder;
//@ sourceMappingURL=ProcessBuilderImpl$BasicBuilder.js.map
