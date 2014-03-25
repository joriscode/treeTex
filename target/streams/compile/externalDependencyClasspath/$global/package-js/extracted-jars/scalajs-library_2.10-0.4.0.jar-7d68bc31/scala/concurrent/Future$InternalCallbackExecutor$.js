/** @constructor */
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.scala$concurrent$Future$InternalCallbackExecutor$$$undtasksLocal$1 = null
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$.prototype.constructor = ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$;
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$.prototype.prepare__Lscala_concurrent_ExecutionContext = (function() {
  return ScalaJS.impls.scala_concurrent_ExecutionContext$class__prepare__Lscala_concurrent_ExecutionContext__Lscala_concurrent_ExecutionContext(this)
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$.prototype.reportFailure__Ljava_lang_Throwable__V = (function(t) {
  throw new ScalaJS.c.java_lang_IllegalStateException().init___T__Ljava_lang_Throwable("problem in scala.concurrent internal callback", t)
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$.prototype.scala$concurrent$Future$InternalCallbackExecutor$$$undtasksLocal__Ljava_lang_ThreadLocal = (function() {
  return this.scala$concurrent$Future$InternalCallbackExecutor$$$undtasksLocal$1
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$.prototype.execute__Ljava_lang_Runnable__V = (function(runnable) {
  var x1 = runnable;
  matchEnd4: {
    if (ScalaJS.is.scala_concurrent_OnCompleteRunnable(x1)) {
      var x1$2 = ScalaJS.as.scala_collection_immutable_List(this.scala$concurrent$Future$InternalCallbackExecutor$$$undtasksLocal__Ljava_lang_ThreadLocal().get__O());
      if (ScalaJS.anyRefEqEq(null, x1$2)) {
        this.scala$concurrent$Future$InternalCallbackExecutor$$unbatchedExecute__Ljava_lang_Runnable__V(new ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch().init___Lscala_collection_immutable_List(ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Runnable.getArrayOf(), [runnable]), 1)))));
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd4
      };
      var jsx$2 = this.scala$concurrent$Future$InternalCallbackExecutor$$$undtasksLocal__Ljava_lang_ThreadLocal();
      var x$8 = runnable;
      var jsx$1 = x1$2.$$colon$colon__O__Lscala_collection_immutable_List(x$8);
      jsx$2.set__O__V(jsx$1);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd4
    };
    this.scala$concurrent$Future$InternalCallbackExecutor$$unbatchedExecute__Ljava_lang_Runnable__V(runnable);
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
    break matchEnd4
  }
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$.prototype.scala$concurrent$Future$InternalCallbackExecutor$$unbatchedExecute__Ljava_lang_Runnable__V = (function(r) {
  r.run__V()
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_concurrent_Future$InternalCallbackExecutor = this;
  ScalaJS.impls.scala_concurrent_ExecutionContext$class__$init$__Lscala_concurrent_ExecutionContext__V(this);
  this.scala$concurrent$Future$InternalCallbackExecutor$$$undtasksLocal$1 = new ScalaJS.c.java_lang_ThreadLocal().init___();
  return this
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$.prototype.prepare__ = (function() {
  return this.prepare__Lscala_concurrent_ExecutionContext()
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$.prototype.scala$concurrent$Future$InternalCallbackExecutor$$unbatchedExecute__Ljava_lang_Runnable__ = (function(r) {
  return ScalaJS.bV(this.scala$concurrent$Future$InternalCallbackExecutor$$unbatchedExecute__Ljava_lang_Runnable__V(r))
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$.prototype.execute__Ljava_lang_Runnable__ = (function(runnable) {
  return ScalaJS.bV(this.execute__Ljava_lang_Runnable__V(runnable))
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$.prototype.scala$concurrent$Future$InternalCallbackExecutor$$$undtasksLocal__ = (function() {
  return this.scala$concurrent$Future$InternalCallbackExecutor$$$undtasksLocal__Ljava_lang_ThreadLocal()
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$.prototype.reportFailure__Ljava_lang_Throwable__ = (function(t) {
  return ScalaJS.bV(this.reportFailure__Ljava_lang_Throwable__V(t))
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_Future$InternalCallbackExecutor$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_Future$InternalCallbackExecutor$.prototype = ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$.prototype;
ScalaJS.is.scala_concurrent_Future$InternalCallbackExecutor$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_Future$InternalCallbackExecutor$)))
});
ScalaJS.as.scala_concurrent_Future$InternalCallbackExecutor$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_Future$InternalCallbackExecutor$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.Future$InternalCallbackExecutor")
  }
});
ScalaJS.isArrayOf.scala_concurrent_Future$InternalCallbackExecutor$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_Future$InternalCallbackExecutor$)))
});
ScalaJS.asArrayOf.scala_concurrent_Future$InternalCallbackExecutor$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_Future$InternalCallbackExecutor$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.Future$InternalCallbackExecutor;", depth)
  }
});
ScalaJS.data.scala_concurrent_Future$InternalCallbackExecutor$ = new ScalaJS.ClassTypeData({
  scala_concurrent_Future$InternalCallbackExecutor$: 0
}, false, "scala.concurrent.Future$InternalCallbackExecutor$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_Future$InternalCallbackExecutor$: 1,
  java_util_concurrent_Executor: 1,
  scala_concurrent_ExecutionContext: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$.prototype.$classData = ScalaJS.data.scala_concurrent_Future$InternalCallbackExecutor$;
ScalaJS.moduleInstances.scala_concurrent_Future$InternalCallbackExecutor = undefined;
ScalaJS.modules.scala_concurrent_Future$InternalCallbackExecutor = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_Future$InternalCallbackExecutor)) {
    ScalaJS.moduleInstances.scala_concurrent_Future$InternalCallbackExecutor = new ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_Future$InternalCallbackExecutor
});
//@ sourceMappingURL=Future$InternalCallbackExecutor$.js.map
