/** @constructor */
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.value$1 = null
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.constructor = ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise;
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.future__Lscala_concurrent_impl_Promise = (function() {
  return ScalaJS.impls.scala_concurrent_impl_Promise$class__future__Lscala_concurrent_impl_Promise__Lscala_concurrent_impl_Promise(this)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.onSuccess__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__V = (function(pf, executor) {
  ScalaJS.impls.scala_concurrent_Future$class__onSuccess__Lscala_concurrent_Future__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__V(this, pf, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.onFailure__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__V = (function(callback, executor) {
  ScalaJS.impls.scala_concurrent_Future$class__onFailure__Lscala_concurrent_Future__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__V(this, callback, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.failed__Lscala_concurrent_Future = (function() {
  return ScalaJS.impls.scala_concurrent_Future$class__failed__Lscala_concurrent_Future__Lscala_concurrent_Future(this)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.foreach__Lscala_Function1__Lscala_concurrent_ExecutionContext__V = (function(f, executor) {
  ScalaJS.impls.scala_concurrent_Future$class__foreach__Lscala_concurrent_Future__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(this, f, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.transform__Lscala_Function1__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(s, f, executor) {
  return ScalaJS.impls.scala_concurrent_Future$class__transform__Lscala_concurrent_Future__Lscala_Function1__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(this, s, f, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.map__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(f, executor) {
  return ScalaJS.impls.scala_concurrent_Future$class__map__Lscala_concurrent_Future__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(this, f, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.flatMap__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(f, executor) {
  return ScalaJS.impls.scala_concurrent_Future$class__flatMap__Lscala_concurrent_Future__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(this, f, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.filter__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(pred, executor) {
  return ScalaJS.impls.scala_concurrent_Future$class__filter__Lscala_concurrent_Future__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(this, pred, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.withFilter__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(p, executor) {
  return ScalaJS.impls.scala_concurrent_Future$class__withFilter__Lscala_concurrent_Future__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(this, p, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.collect__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(pf, executor) {
  return ScalaJS.impls.scala_concurrent_Future$class__collect__Lscala_concurrent_Future__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(this, pf, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.recover__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(pf, executor) {
  return ScalaJS.impls.scala_concurrent_Future$class__recover__Lscala_concurrent_Future__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(this, pf, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.recoverWith__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(pf, executor) {
  return ScalaJS.impls.scala_concurrent_Future$class__recoverWith__Lscala_concurrent_Future__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(this, pf, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.zip__Lscala_concurrent_Future__Lscala_concurrent_Future = (function(that) {
  return ScalaJS.impls.scala_concurrent_Future$class__zip__Lscala_concurrent_Future__Lscala_concurrent_Future__Lscala_concurrent_Future(this, that)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.fallbackTo__Lscala_concurrent_Future__Lscala_concurrent_Future = (function(that) {
  return ScalaJS.impls.scala_concurrent_Future$class__fallbackTo__Lscala_concurrent_Future__Lscala_concurrent_Future__Lscala_concurrent_Future(this, that)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.mapTo__Lscala_reflect_ClassTag__Lscala_concurrent_Future = (function(tag) {
  return ScalaJS.impls.scala_concurrent_Future$class__mapTo__Lscala_concurrent_Future__Lscala_reflect_ClassTag__Lscala_concurrent_Future(this, tag)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.andThen__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(pf, executor) {
  return ScalaJS.impls.scala_concurrent_Future$class__andThen__Lscala_concurrent_Future__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(this, pf, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.complete__Lscala_util_Try__Lscala_concurrent_Promise = (function(result) {
  return ScalaJS.impls.scala_concurrent_Promise$class__complete__Lscala_concurrent_Promise__Lscala_util_Try__Lscala_concurrent_Promise(this, result)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.completeWith__Lscala_concurrent_Future__Lscala_concurrent_Promise = (function(other) {
  return ScalaJS.impls.scala_concurrent_Promise$class__completeWith__Lscala_concurrent_Promise__Lscala_concurrent_Future__Lscala_concurrent_Promise(this, other)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.tryCompleteWith__Lscala_concurrent_Future__Lscala_concurrent_Promise = (function(other) {
  return ScalaJS.impls.scala_concurrent_Promise$class__tryCompleteWith__Lscala_concurrent_Promise__Lscala_concurrent_Future__Lscala_concurrent_Promise(this, other)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.success__O__Lscala_concurrent_Promise = (function(v) {
  return ScalaJS.impls.scala_concurrent_Promise$class__success__Lscala_concurrent_Promise__O__Lscala_concurrent_Promise(this, v)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.trySuccess__O__Z = (function(value) {
  return ScalaJS.impls.scala_concurrent_Promise$class__trySuccess__Lscala_concurrent_Promise__O__Z(this, value)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.failure__Ljava_lang_Throwable__Lscala_concurrent_Promise = (function(t) {
  return ScalaJS.impls.scala_concurrent_Promise$class__failure__Lscala_concurrent_Promise__Ljava_lang_Throwable__Lscala_concurrent_Promise(this, t)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.tryFailure__Ljava_lang_Throwable__Z = (function(t) {
  return ScalaJS.impls.scala_concurrent_Promise$class__tryFailure__Lscala_concurrent_Promise__Ljava_lang_Throwable__Z(this, t)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.value__Lscala_Some = (function() {
  return this.value$1
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.isCompleted__Z = (function() {
  return true
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.tryComplete__Lscala_util_Try__Z = (function(value) {
  return false
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V = (function(func, executor) {
  var completedAs = ScalaJS.as.scala_util_Try(this.value__Lscala_Some().get__O());
  var preparedEC = executor.prepare__Lscala_concurrent_ExecutionContext();
  new ScalaJS.c.scala_concurrent_impl_CallbackRunnable().init___Lscala_concurrent_ExecutionContext__Lscala_Function1(preparedEC, func).executeWithValue__Lscala_util_Try__V(completedAs)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.ready__Lscala_concurrent_duration_Duration__Lscala_concurrent_CanAwait__Lscala_concurrent_impl_Promise$KeptPromise = (function(atMost, permit) {
  return this
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.result__Lscala_concurrent_duration_Duration__Lscala_concurrent_CanAwait__O = (function(atMost, permit) {
  return ScalaJS.as.scala_util_Try(this.value__Lscala_Some().get__O()).get__O()
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.future__Lscala_concurrent_Future = (function() {
  return this.future__Lscala_concurrent_impl_Promise()
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.ready__Lscala_concurrent_duration_Duration__Lscala_concurrent_CanAwait__Lscala_concurrent_Awaitable = (function(atMost, permit) {
  return this.ready__Lscala_concurrent_duration_Duration__Lscala_concurrent_CanAwait__Lscala_concurrent_impl_Promise$KeptPromise(atMost, permit)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.value__Lscala_Option = (function() {
  return this.value__Lscala_Some()
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.init___Lscala_util_Try = (function(suppliedValue) {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_concurrent_Promise$class__$init$__Lscala_concurrent_Promise__V(this);
  ScalaJS.impls.scala_concurrent_Future$class__$init$__Lscala_concurrent_Future__V(this);
  ScalaJS.impls.scala_concurrent_impl_Promise$class__$init$__Lscala_concurrent_impl_Promise__V(this);
  this.value$1 = new ScalaJS.c.scala_Some().init___O(ScalaJS.modules.scala_concurrent_impl_Promise().scala$concurrent$impl$Promise$$resolveTry__Lscala_util_Try__Lscala_util_Try(suppliedValue));
  return this
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.tryFailure__Ljava_lang_Throwable__ = (function(t) {
  return ScalaJS.bZ(this.tryFailure__Ljava_lang_Throwable__Z(t))
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.failure__Ljava_lang_Throwable__ = (function(t$2) {
  return this.failure__Ljava_lang_Throwable__Lscala_concurrent_Promise(t$2)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.trySuccess__O__ = (function(value) {
  return ScalaJS.bZ(this.trySuccess__O__Z(value))
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.success__O__ = (function(v) {
  return this.success__O__Lscala_concurrent_Promise(v)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.tryCompleteWith__Lscala_concurrent_Future__ = (function(other) {
  return this.tryCompleteWith__Lscala_concurrent_Future__Lscala_concurrent_Promise(other)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.completeWith__Lscala_concurrent_Future__ = (function(other$2) {
  return this.completeWith__Lscala_concurrent_Future__Lscala_concurrent_Promise(other$2)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.complete__Lscala_util_Try__ = (function(result) {
  return this.complete__Lscala_util_Try__Lscala_concurrent_Promise(result)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.andThen__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__ = (function(pf, executor) {
  return this.andThen__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(pf, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.mapTo__Lscala_reflect_ClassTag__ = (function(tag) {
  return this.mapTo__Lscala_reflect_ClassTag__Lscala_concurrent_Future(tag)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.fallbackTo__Lscala_concurrent_Future__ = (function(that) {
  return this.fallbackTo__Lscala_concurrent_Future__Lscala_concurrent_Future(that)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.zip__Lscala_concurrent_Future__ = (function(that$2) {
  return this.zip__Lscala_concurrent_Future__Lscala_concurrent_Future(that$2)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.recoverWith__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__ = (function(pf$2, executor$2) {
  return this.recoverWith__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(pf$2, executor$2)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.recover__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__ = (function(pf$3, executor$3) {
  return this.recover__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(pf$3, executor$3)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.collect__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__ = (function(pf$4, executor$4) {
  return this.collect__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(pf$4, executor$4)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.withFilter__Lscala_Function1__Lscala_concurrent_ExecutionContext__ = (function(p, executor$5) {
  return this.withFilter__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(p, executor$5)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.filter__Lscala_Function1__Lscala_concurrent_ExecutionContext__ = (function(pred, executor$6) {
  return this.filter__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(pred, executor$6)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.flatMap__Lscala_Function1__Lscala_concurrent_ExecutionContext__ = (function(f, executor$7) {
  return this.flatMap__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(f, executor$7)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.map__Lscala_Function1__Lscala_concurrent_ExecutionContext__ = (function(f$2, executor$8) {
  return this.map__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(f$2, executor$8)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.transform__Lscala_Function1__Lscala_Function1__Lscala_concurrent_ExecutionContext__ = (function(s, f$3, executor$9) {
  return this.transform__Lscala_Function1__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(s, f$3, executor$9)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.foreach__Lscala_Function1__Lscala_concurrent_ExecutionContext__ = (function(f$4, executor$10) {
  return this.foreach__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(f$4, executor$10)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.failed__ = (function() {
  return this.failed__Lscala_concurrent_Future()
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.onFailure__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__ = (function(callback, executor$11) {
  return this.onFailure__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__V(callback, executor$11)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.onSuccess__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__ = (function(pf$5, executor$12) {
  return this.onSuccess__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__V(pf$5, executor$12)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.future__ = (function() {
  return this.future__Lscala_concurrent_impl_Promise()
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.result__Lscala_concurrent_duration_Duration__Lscala_concurrent_CanAwait__ = (function(atMost, permit) {
  return this.result__Lscala_concurrent_duration_Duration__Lscala_concurrent_CanAwait__O(atMost, permit)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.ready__Lscala_concurrent_duration_Duration__Lscala_concurrent_CanAwait__ = (function(atMost$2, permit$2) {
  return this.ready__Lscala_concurrent_duration_Duration__Lscala_concurrent_CanAwait__Lscala_concurrent_impl_Promise$KeptPromise(atMost$2, permit$2)
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__ = (function(func, executor$13) {
  return ScalaJS.bV(this.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(func, executor$13))
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.tryComplete__Lscala_util_Try__ = (function(value$2) {
  return ScalaJS.bZ(this.tryComplete__Lscala_util_Try__Z(value$2))
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.isCompleted__ = (function() {
  return ScalaJS.bZ(this.isCompleted__Z())
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.value__ = (function() {
  return this.value__Lscala_Some()
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_impl_Promise$KeptPromise = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_impl_Promise$KeptPromise.prototype = ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype;
ScalaJS.is.scala_concurrent_impl_Promise$KeptPromise = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_impl_Promise$KeptPromise)))
});
ScalaJS.as.scala_concurrent_impl_Promise$KeptPromise = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_impl_Promise$KeptPromise(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.impl.Promise$KeptPromise")
  }
});
ScalaJS.isArrayOf.scala_concurrent_impl_Promise$KeptPromise = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_impl_Promise$KeptPromise)))
});
ScalaJS.asArrayOf.scala_concurrent_impl_Promise$KeptPromise = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_impl_Promise$KeptPromise(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.impl.Promise$KeptPromise;", depth)
  }
});
ScalaJS.data.scala_concurrent_impl_Promise$KeptPromise = new ScalaJS.ClassTypeData({
  scala_concurrent_impl_Promise$KeptPromise: 0
}, false, "scala.concurrent.impl.Promise$KeptPromise", ScalaJS.data.java_lang_Object, {
  scala_concurrent_impl_Promise$KeptPromise: 1,
  scala_concurrent_impl_Promise: 1,
  scala_concurrent_Future: 1,
  scala_concurrent_Awaitable: 1,
  scala_concurrent_Promise: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise.prototype.$classData = ScalaJS.data.scala_concurrent_impl_Promise$KeptPromise;
//@ sourceMappingURL=Promise$KeptPromise.js.map
