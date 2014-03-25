/** @constructor */
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$SequentialBuilder = (function() {
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$BasicBuilder.call(this);
  this.a$3 = null;
  this.b$3 = null;
  this.operatorString$3 = null
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$SequentialBuilder.prototype = new ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$BasicBuilder();
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$SequentialBuilder.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$SequentialBuilder;
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$SequentialBuilder.prototype.toString__T = (function() {
  return ((((((" ( " + this.a$3) + " ") + this.operatorString$3) + " ") + this.b$3) + " ) ")
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$SequentialBuilder.prototype.scala$sys$process$ProcessBuilderImpl$SequentialBuilder$$$outer__Lscala_sys_process_ProcessBuilder$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$SequentialBuilder.prototype.init___Lscala_sys_process_ProcessBuilder$__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder__T = (function($$outer, a, b, operatorString) {
  this.a$3 = a;
  this.b$3 = b;
  this.operatorString$3 = operatorString;
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$BasicBuilder.prototype.init___Lscala_sys_process_ProcessBuilder$.call(this, $$outer);
  this.checkNotThis__Lscala_sys_process_ProcessBuilder__V(a);
  this.checkNotThis__Lscala_sys_process_ProcessBuilder__V(b);
  return this
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$SequentialBuilder.prototype.scala$sys$process$ProcessBuilderImpl$SequentialBuilder$$$outer__ = (function() {
  return this.scala$sys$process$ProcessBuilderImpl$SequentialBuilder$$$outer__Lscala_sys_process_ProcessBuilder$()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$SequentialBuilder = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$SequentialBuilder.prototype = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$SequentialBuilder.prototype;
ScalaJS.is.scala_sys_process_ProcessBuilderImpl$SequentialBuilder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessBuilderImpl$SequentialBuilder)))
});
ScalaJS.as.scala_sys_process_ProcessBuilderImpl$SequentialBuilder = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessBuilderImpl$SequentialBuilder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessBuilderImpl$SequentialBuilder")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$SequentialBuilder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessBuilderImpl$SequentialBuilder)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessBuilderImpl$SequentialBuilder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$SequentialBuilder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessBuilderImpl$SequentialBuilder;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessBuilderImpl$SequentialBuilder = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessBuilderImpl$SequentialBuilder: 0
}, false, "scala.sys.process.ProcessBuilderImpl$SequentialBuilder", ScalaJS.data.scala_sys_process_ProcessBuilderImpl$BasicBuilder, {
  scala_sys_process_ProcessBuilderImpl$SequentialBuilder: 1,
  scala_sys_process_ProcessBuilderImpl$BasicBuilder: 1,
  scala_sys_process_ProcessBuilderImpl$AbstractBuilder: 1,
  scala_sys_process_ProcessBuilder: 1,
  scala_sys_process_ProcessBuilder$Sink: 1,
  scala_sys_process_ProcessBuilder$Source: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$SequentialBuilder.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessBuilderImpl$SequentialBuilder;
//@ sourceMappingURL=ProcessBuilderImpl$SequentialBuilder.js.map
