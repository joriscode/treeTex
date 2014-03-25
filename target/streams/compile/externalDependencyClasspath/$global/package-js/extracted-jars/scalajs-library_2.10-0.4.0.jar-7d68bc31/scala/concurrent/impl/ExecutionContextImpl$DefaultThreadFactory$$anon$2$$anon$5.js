/** @constructor */
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.isdone$1 = false;
  this.thunk$1$1 = null;
  this.result$1$1 = null
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5.prototype.constructor = ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5;
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5.prototype.isdone__p1__Z = (function() {
  return this.isdone$1
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5.prototype.isdone$und$eq__p1__Z__V = (function(x$1) {
  this.isdone$1 = x$1
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5.prototype.block__Z = (function() {
  var jsx$2 = this.result$1$1;
  try {
    var jsx$1 = this.thunk$1$1.apply__O()
  } finally {
    this.isdone$und$eq__p1__Z__V(true)
  };
  jsx$2.elem$1 = jsx$1;
  return true
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5.prototype.isReleasable__Z = (function() {
  return this.isdone__p1__Z()
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5.prototype.init___Lscala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2__Lscala_Function0__Lscala_runtime_ObjectRef = (function($$outer, thunk$1, result$1) {
  this.thunk$1$1 = thunk$1;
  this.result$1$1 = result$1;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.isdone$1 = false;
  return this
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5.prototype.isReleasable__ = (function() {
  return ScalaJS.bZ(this.isReleasable__Z())
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5.prototype.block__ = (function() {
  return ScalaJS.bZ(this.block__Z())
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5.prototype = ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5.prototype;
ScalaJS.is.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5)))
});
ScalaJS.as.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5 = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.impl.ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5")
  }
});
ScalaJS.isArrayOf.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5)))
});
ScalaJS.asArrayOf.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.impl.ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5;", depth)
  }
});
ScalaJS.data.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5 = new ScalaJS.ClassTypeData({
  scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5: 0
}, false, "scala.concurrent.impl.ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5", ScalaJS.data.java_lang_Object, {
  scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5: 1,
  scala_concurrent_forkjoin_ForkJoinPool$ManagedBlocker: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5.prototype.$classData = ScalaJS.data.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5;
//@ sourceMappingURL=ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5.js.map
