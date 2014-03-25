/** @constructor */
ScalaJS.c.scala_concurrent_ThreadRunner$$anon$1 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null;
  this.task$1$1 = null
});
ScalaJS.c.scala_concurrent_ThreadRunner$$anon$1.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_ThreadRunner$$anon$1.prototype.constructor = ScalaJS.c.scala_concurrent_ThreadRunner$$anon$1;
ScalaJS.c.scala_concurrent_ThreadRunner$$anon$1.prototype.run__V = (function() {
  this.$$outer$1.scala$concurrent$ThreadRunner$$tryCatch__Lscala_Function0__Lscala_util_Either(this.task$1$1)
});
ScalaJS.c.scala_concurrent_ThreadRunner$$anon$1.prototype.init___Lscala_concurrent_ThreadRunner__Lscala_Function0 = (function($$outer, task$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  this.task$1$1 = task$1;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_concurrent_ThreadRunner$$anon$1.prototype.run__ = (function() {
  return ScalaJS.bV(this.run__V())
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_ThreadRunner$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_ThreadRunner$$anon$1.prototype = ScalaJS.c.scala_concurrent_ThreadRunner$$anon$1.prototype;
ScalaJS.is.scala_concurrent_ThreadRunner$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_ThreadRunner$$anon$1)))
});
ScalaJS.as.scala_concurrent_ThreadRunner$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_ThreadRunner$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.ThreadRunner$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_concurrent_ThreadRunner$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_ThreadRunner$$anon$1)))
});
ScalaJS.asArrayOf.scala_concurrent_ThreadRunner$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_ThreadRunner$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.ThreadRunner$$anon$1;", depth)
  }
});
ScalaJS.data.scala_concurrent_ThreadRunner$$anon$1 = new ScalaJS.ClassTypeData({
  scala_concurrent_ThreadRunner$$anon$1: 0
}, false, "scala.concurrent.ThreadRunner$$anon$1", ScalaJS.data.java_lang_Object, {
  scala_concurrent_ThreadRunner$$anon$1: 1,
  java_lang_Runnable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_ThreadRunner$$anon$1.prototype.$classData = ScalaJS.data.scala_concurrent_ThreadRunner$$anon$1;
//@ sourceMappingURL=ThreadRunner$$anon$1.js.map
