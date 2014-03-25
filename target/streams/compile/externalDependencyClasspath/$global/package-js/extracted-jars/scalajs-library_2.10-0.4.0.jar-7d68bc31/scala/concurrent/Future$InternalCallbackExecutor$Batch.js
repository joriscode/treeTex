/** @constructor */
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.initial$1 = null;
  this.scala$concurrent$Future$InternalCallbackExecutor$Batch$$parentBlockContext$f = null
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch.prototype.constructor = ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch;
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch.prototype.initial__Lscala_collection_immutable_List = (function() {
  return this.initial$1
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch.prototype.run__V = (function() {
  ScalaJS.modules.scala_Predef().require__Z__V((ScalaJS.modules.scala_concurrent_Future$InternalCallbackExecutor().scala$concurrent$Future$InternalCallbackExecutor$$$undtasksLocal__Ljava_lang_ThreadLocal().get__O() === null));
  var prevBlockContext = ScalaJS.modules.scala_concurrent_BlockContext().current__Lscala_concurrent_BlockContext();
  ScalaJS.modules.scala_concurrent_BlockContext().withBlockContext__Lscala_concurrent_BlockContext__Lscala_Function0__O(this, new ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1().init___Lscala_concurrent_Future$InternalCallbackExecutor$Batch__Lscala_concurrent_BlockContext(this, prevBlockContext))
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch.prototype.blockOn__Lscala_Function0__Lscala_concurrent_CanAwait__O = (function(thunk, permission) {
  var tasks = ScalaJS.as.scala_collection_immutable_List(ScalaJS.modules.scala_concurrent_Future$InternalCallbackExecutor().scala$concurrent$Future$InternalCallbackExecutor$$$undtasksLocal__Ljava_lang_ThreadLocal().get__O());
  ScalaJS.modules.scala_concurrent_Future$InternalCallbackExecutor().scala$concurrent$Future$InternalCallbackExecutor$$$undtasksLocal__Ljava_lang_ThreadLocal().set__O__V(ScalaJS.modules.scala_collection_immutable_Nil());
  if (((tasks !== null) && tasks.nonEmpty__Z())) {
    ScalaJS.modules.scala_concurrent_Future$InternalCallbackExecutor().scala$concurrent$Future$InternalCallbackExecutor$$unbatchedExecute__Ljava_lang_Runnable__V(new ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch().init___Lscala_collection_immutable_List(tasks))
  };
  ScalaJS.modules.scala_Predef().require__Z__V((this.scala$concurrent$Future$InternalCallbackExecutor$Batch$$parentBlockContext$f !== null));
  return this.scala$concurrent$Future$InternalCallbackExecutor$Batch$$parentBlockContext$f.blockOn__Lscala_Function0__Lscala_concurrent_CanAwait__O(thunk, permission)
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch.prototype.init___Lscala_collection_immutable_List = (function(initial) {
  this.initial$1 = initial;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch.prototype.blockOn__Lscala_Function0__Lscala_concurrent_CanAwait__ = (function(thunk, permission) {
  return this.blockOn__Lscala_Function0__Lscala_concurrent_CanAwait__O(thunk, permission)
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch.prototype.run__ = (function() {
  return ScalaJS.bV(this.run__V())
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch.prototype.initial__ = (function() {
  return this.initial__Lscala_collection_immutable_List()
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_Future$InternalCallbackExecutor$Batch = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_Future$InternalCallbackExecutor$Batch.prototype = ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch.prototype;
ScalaJS.is.scala_concurrent_Future$InternalCallbackExecutor$Batch = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_Future$InternalCallbackExecutor$Batch)))
});
ScalaJS.as.scala_concurrent_Future$InternalCallbackExecutor$Batch = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_Future$InternalCallbackExecutor$Batch(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.Future$InternalCallbackExecutor$Batch")
  }
});
ScalaJS.isArrayOf.scala_concurrent_Future$InternalCallbackExecutor$Batch = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_Future$InternalCallbackExecutor$Batch)))
});
ScalaJS.asArrayOf.scala_concurrent_Future$InternalCallbackExecutor$Batch = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_Future$InternalCallbackExecutor$Batch(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.Future$InternalCallbackExecutor$Batch;", depth)
  }
});
ScalaJS.data.scala_concurrent_Future$InternalCallbackExecutor$Batch = new ScalaJS.ClassTypeData({
  scala_concurrent_Future$InternalCallbackExecutor$Batch: 0
}, false, "scala.concurrent.Future$InternalCallbackExecutor$Batch", ScalaJS.data.java_lang_Object, {
  scala_concurrent_Future$InternalCallbackExecutor$Batch: 1,
  scala_concurrent_BlockContext: 1,
  java_lang_Runnable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch.prototype.$classData = ScalaJS.data.scala_concurrent_Future$InternalCallbackExecutor$Batch;
//@ sourceMappingURL=Future$InternalCallbackExecutor$Batch.js.map
