/** @constructor */
ScalaJS.c.scala_sys_process_ProcessLogger$$anon$1 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.fout$1$1 = null;
  this.ferr$1$1 = null
});
ScalaJS.c.scala_sys_process_ProcessLogger$$anon$1.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_process_ProcessLogger$$anon$1.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessLogger$$anon$1;
ScalaJS.c.scala_sys_process_ProcessLogger$$anon$1.prototype.out__Lscala_Function0__V = (function(s) {
  this.fout$1$1.apply__O__O(s.apply__O())
});
ScalaJS.c.scala_sys_process_ProcessLogger$$anon$1.prototype.err__Lscala_Function0__V = (function(s) {
  this.ferr$1$1.apply__O__O(s.apply__O())
});
ScalaJS.c.scala_sys_process_ProcessLogger$$anon$1.prototype.buffer__Lscala_Function0__O = (function(f) {
  return f.apply__O()
});
ScalaJS.c.scala_sys_process_ProcessLogger$$anon$1.prototype.init___Lscala_Function1__Lscala_Function1 = (function(fout$1, ferr$1) {
  this.fout$1$1 = fout$1;
  this.ferr$1$1 = ferr$1;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_sys_process_ProcessLogger$$anon$1.prototype.buffer__Lscala_Function0__ = (function(f) {
  return this.buffer__Lscala_Function0__O(f)
});
ScalaJS.c.scala_sys_process_ProcessLogger$$anon$1.prototype.err__Lscala_Function0__ = (function(s) {
  return ScalaJS.bV(this.err__Lscala_Function0__V(s))
});
ScalaJS.c.scala_sys_process_ProcessLogger$$anon$1.prototype.out__Lscala_Function0__ = (function(s$2) {
  return ScalaJS.bV(this.out__Lscala_Function0__V(s$2))
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessLogger$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessLogger$$anon$1.prototype = ScalaJS.c.scala_sys_process_ProcessLogger$$anon$1.prototype;
ScalaJS.is.scala_sys_process_ProcessLogger$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessLogger$$anon$1)))
});
ScalaJS.as.scala_sys_process_ProcessLogger$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessLogger$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessLogger$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessLogger$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessLogger$$anon$1)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessLogger$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessLogger$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessLogger$$anon$1;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessLogger$$anon$1 = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessLogger$$anon$1: 0
}, false, "scala.sys.process.ProcessLogger$$anon$1", ScalaJS.data.java_lang_Object, {
  scala_sys_process_ProcessLogger$$anon$1: 1,
  scala_sys_process_ProcessLogger: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessLogger$$anon$1.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessLogger$$anon$1;
//@ sourceMappingURL=ProcessLogger$$anon$1.js.map
