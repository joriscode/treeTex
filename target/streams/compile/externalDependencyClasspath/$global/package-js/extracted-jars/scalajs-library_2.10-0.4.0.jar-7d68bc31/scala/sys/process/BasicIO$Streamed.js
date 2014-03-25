/** @constructor */
ScalaJS.c.scala_sys_process_BasicIO$Streamed = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.process$1 = null;
  this.done$1 = null;
  this.stream$1 = null
});
ScalaJS.c.scala_sys_process_BasicIO$Streamed.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_process_BasicIO$Streamed.prototype.constructor = ScalaJS.c.scala_sys_process_BasicIO$Streamed;
ScalaJS.c.scala_sys_process_BasicIO$Streamed.prototype.process__Lscala_Function1 = (function() {
  return this.process$1
});
ScalaJS.c.scala_sys_process_BasicIO$Streamed.prototype.done__Lscala_Function1 = (function() {
  return this.done$1
});
ScalaJS.c.scala_sys_process_BasicIO$Streamed.prototype.stream__Lscala_Function0 = (function() {
  return this.stream$1
});
ScalaJS.c.scala_sys_process_BasicIO$Streamed.prototype.init___Lscala_Function1__Lscala_Function1__Lscala_Function0 = (function(process, done, stream) {
  this.process$1 = process;
  this.done$1 = done;
  this.stream$1 = stream;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_sys_process_BasicIO$Streamed.prototype.stream__ = (function() {
  return this.stream__Lscala_Function0()
});
ScalaJS.c.scala_sys_process_BasicIO$Streamed.prototype.done__ = (function() {
  return this.done__Lscala_Function1()
});
ScalaJS.c.scala_sys_process_BasicIO$Streamed.prototype.process__ = (function() {
  return this.process__Lscala_Function1()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_BasicIO$Streamed = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_BasicIO$Streamed.prototype = ScalaJS.c.scala_sys_process_BasicIO$Streamed.prototype;
ScalaJS.is.scala_sys_process_BasicIO$Streamed = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_BasicIO$Streamed)))
});
ScalaJS.as.scala_sys_process_BasicIO$Streamed = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_BasicIO$Streamed(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.BasicIO$Streamed")
  }
});
ScalaJS.isArrayOf.scala_sys_process_BasicIO$Streamed = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_BasicIO$Streamed)))
});
ScalaJS.asArrayOf.scala_sys_process_BasicIO$Streamed = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_BasicIO$Streamed(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.BasicIO$Streamed;", depth)
  }
});
ScalaJS.data.scala_sys_process_BasicIO$Streamed = new ScalaJS.ClassTypeData({
  scala_sys_process_BasicIO$Streamed: 0
}, false, "scala.sys.process.BasicIO$Streamed", ScalaJS.data.java_lang_Object, {
  scala_sys_process_BasicIO$Streamed: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_BasicIO$Streamed.prototype.$classData = ScalaJS.data.scala_sys_process_BasicIO$Streamed;
//@ sourceMappingURL=BasicIO$Streamed.js.map
