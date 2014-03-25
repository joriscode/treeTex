/** @constructor */
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$4 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$4.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$4.prototype.constructor = ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$4;
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$4.prototype.uncaughtException__Ljava_lang_Thread__Ljava_lang_Throwable__V = (function(thread$2, cause) {
  this.$$outer$1.scala$concurrent$impl$ExecutionContextImpl$$reporter$f.apply__O__O(cause)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$4.prototype.init___Lscala_concurrent_impl_ExecutionContextImpl = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$4.prototype.uncaughtException__Ljava_lang_Thread__Ljava_lang_Throwable__ = (function(thread, cause) {
  return ScalaJS.bV(this.uncaughtException__Ljava_lang_Thread__Ljava_lang_Throwable__V(thread, cause))
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_impl_ExecutionContextImpl$$anon$4 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_impl_ExecutionContextImpl$$anon$4.prototype = ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$4.prototype;
ScalaJS.is.scala_concurrent_impl_ExecutionContextImpl$$anon$4 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_impl_ExecutionContextImpl$$anon$4)))
});
ScalaJS.as.scala_concurrent_impl_ExecutionContextImpl$$anon$4 = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_impl_ExecutionContextImpl$$anon$4(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.impl.ExecutionContextImpl$$anon$4")
  }
});
ScalaJS.isArrayOf.scala_concurrent_impl_ExecutionContextImpl$$anon$4 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_impl_ExecutionContextImpl$$anon$4)))
});
ScalaJS.asArrayOf.scala_concurrent_impl_ExecutionContextImpl$$anon$4 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_impl_ExecutionContextImpl$$anon$4(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.impl.ExecutionContextImpl$$anon$4;", depth)
  }
});
ScalaJS.data.scala_concurrent_impl_ExecutionContextImpl$$anon$4 = new ScalaJS.ClassTypeData({
  scala_concurrent_impl_ExecutionContextImpl$$anon$4: 0
}, false, "scala.concurrent.impl.ExecutionContextImpl$$anon$4", ScalaJS.data.java_lang_Object, {
  scala_concurrent_impl_ExecutionContextImpl$$anon$4: 1,
  java_lang_Thread$UncaughtExceptionHandler: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$4.prototype.$classData = ScalaJS.data.scala_concurrent_impl_ExecutionContextImpl$$anon$4;
//@ sourceMappingURL=ExecutionContextImpl$$anon$4.js.map
