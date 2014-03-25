/** @constructor */
ScalaJS.c.scala_concurrent_JavaConversions$$anon$2 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.exec$2$1 = null
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$2.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_JavaConversions$$anon$2.prototype.constructor = ScalaJS.c.scala_concurrent_JavaConversions$$anon$2;
ScalaJS.c.scala_concurrent_JavaConversions$$anon$2.prototype.functionAsTask__Lscala_Function0__Ljava_lang_Runnable = (function(fun) {
  return new ScalaJS.c.scala_concurrent_JavaConversions$$anon$2$$anon$3().init___Lscala_concurrent_JavaConversions$$anon$2__Lscala_Function0(this, fun)
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$2.prototype.execute__Ljava_lang_Runnable__V = (function(task) {
  this.exec$2$1.execute__Ljava_lang_Runnable__V(task)
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$2.prototype.managedBlock__p1__Lscala_concurrent_ManagedBlocker__V = (function(blocker) {
  blocker.block__Z()
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$2.prototype.shutdown__V = (function() {
  /*<skip>*/
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$2.prototype.execute__O__V = (function(task) {
  this.execute__Ljava_lang_Runnable__V(ScalaJS.as.java_lang_Runnable(task))
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$2.prototype.functionAsTask__Lscala_Function0__O = (function(fun) {
  return this.functionAsTask__Lscala_Function0__Ljava_lang_Runnable(fun)
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$2.prototype.init___Ljava_util_concurrent_Executor = (function(exec$2) {
  this.exec$2$1 = exec$2;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$2.prototype.shutdown__ = (function() {
  return ScalaJS.bV(this.shutdown__V())
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$2.prototype.execute__Ljava_lang_Runnable__ = (function(task) {
  return ScalaJS.bV(this.execute__Ljava_lang_Runnable__V(task))
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$2.prototype.functionAsTask__Lscala_Function0__ = (function(fun) {
  return this.functionAsTask__Lscala_Function0__Ljava_lang_Runnable(fun)
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$2.prototype.execute__O__ = (function(task$2) {
  return ScalaJS.bV(this.execute__O__V(task$2))
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_JavaConversions$$anon$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_JavaConversions$$anon$2.prototype = ScalaJS.c.scala_concurrent_JavaConversions$$anon$2.prototype;
ScalaJS.is.scala_concurrent_JavaConversions$$anon$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_JavaConversions$$anon$2)))
});
ScalaJS.as.scala_concurrent_JavaConversions$$anon$2 = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_JavaConversions$$anon$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.JavaConversions$$anon$2")
  }
});
ScalaJS.isArrayOf.scala_concurrent_JavaConversions$$anon$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_JavaConversions$$anon$2)))
});
ScalaJS.asArrayOf.scala_concurrent_JavaConversions$$anon$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_JavaConversions$$anon$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.JavaConversions$$anon$2;", depth)
  }
});
ScalaJS.data.scala_concurrent_JavaConversions$$anon$2 = new ScalaJS.ClassTypeData({
  scala_concurrent_JavaConversions$$anon$2: 0
}, false, "scala.concurrent.JavaConversions$$anon$2", ScalaJS.data.java_lang_Object, {
  scala_concurrent_JavaConversions$$anon$2: 1,
  scala_concurrent_TaskRunner: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$2.prototype.$classData = ScalaJS.data.scala_concurrent_JavaConversions$$anon$2;
//@ sourceMappingURL=JavaConversions$$anon$2.js.map
