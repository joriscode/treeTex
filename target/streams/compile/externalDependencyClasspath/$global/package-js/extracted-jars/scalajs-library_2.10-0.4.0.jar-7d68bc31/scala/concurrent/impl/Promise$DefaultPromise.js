/** @constructor */
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise = (function() {
  ScalaJS.c.scala_concurrent_impl_AbstractPromise.call(this)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype = new ScalaJS.inheritable.scala_concurrent_impl_AbstractPromise();
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.constructor = ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise;
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.future__Lscala_concurrent_impl_Promise = (function() {
  return ScalaJS.impls.scala_concurrent_impl_Promise$class__future__Lscala_concurrent_impl_Promise__Lscala_concurrent_impl_Promise(this)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.onSuccess__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__V = (function(pf, executor) {
  ScalaJS.impls.scala_concurrent_Future$class__onSuccess__Lscala_concurrent_Future__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__V(this, pf, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.onFailure__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__V = (function(callback, executor) {
  ScalaJS.impls.scala_concurrent_Future$class__onFailure__Lscala_concurrent_Future__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__V(this, callback, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.failed__Lscala_concurrent_Future = (function() {
  return ScalaJS.impls.scala_concurrent_Future$class__failed__Lscala_concurrent_Future__Lscala_concurrent_Future(this)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.foreach__Lscala_Function1__Lscala_concurrent_ExecutionContext__V = (function(f, executor) {
  ScalaJS.impls.scala_concurrent_Future$class__foreach__Lscala_concurrent_Future__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(this, f, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.transform__Lscala_Function1__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(s, f, executor) {
  return ScalaJS.impls.scala_concurrent_Future$class__transform__Lscala_concurrent_Future__Lscala_Function1__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(this, s, f, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.map__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(f, executor) {
  return ScalaJS.impls.scala_concurrent_Future$class__map__Lscala_concurrent_Future__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(this, f, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.flatMap__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(f, executor) {
  return ScalaJS.impls.scala_concurrent_Future$class__flatMap__Lscala_concurrent_Future__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(this, f, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.filter__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(pred, executor) {
  return ScalaJS.impls.scala_concurrent_Future$class__filter__Lscala_concurrent_Future__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(this, pred, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.withFilter__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(p, executor) {
  return ScalaJS.impls.scala_concurrent_Future$class__withFilter__Lscala_concurrent_Future__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(this, p, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.collect__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(pf, executor) {
  return ScalaJS.impls.scala_concurrent_Future$class__collect__Lscala_concurrent_Future__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(this, pf, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.recover__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(pf, executor) {
  return ScalaJS.impls.scala_concurrent_Future$class__recover__Lscala_concurrent_Future__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(this, pf, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.recoverWith__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(pf, executor) {
  return ScalaJS.impls.scala_concurrent_Future$class__recoverWith__Lscala_concurrent_Future__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(this, pf, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.zip__Lscala_concurrent_Future__Lscala_concurrent_Future = (function(that) {
  return ScalaJS.impls.scala_concurrent_Future$class__zip__Lscala_concurrent_Future__Lscala_concurrent_Future__Lscala_concurrent_Future(this, that)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.fallbackTo__Lscala_concurrent_Future__Lscala_concurrent_Future = (function(that) {
  return ScalaJS.impls.scala_concurrent_Future$class__fallbackTo__Lscala_concurrent_Future__Lscala_concurrent_Future__Lscala_concurrent_Future(this, that)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.mapTo__Lscala_reflect_ClassTag__Lscala_concurrent_Future = (function(tag) {
  return ScalaJS.impls.scala_concurrent_Future$class__mapTo__Lscala_concurrent_Future__Lscala_reflect_ClassTag__Lscala_concurrent_Future(this, tag)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.andThen__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(pf, executor) {
  return ScalaJS.impls.scala_concurrent_Future$class__andThen__Lscala_concurrent_Future__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(this, pf, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.complete__Lscala_util_Try__Lscala_concurrent_Promise = (function(result) {
  return ScalaJS.impls.scala_concurrent_Promise$class__complete__Lscala_concurrent_Promise__Lscala_util_Try__Lscala_concurrent_Promise(this, result)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.completeWith__Lscala_concurrent_Future__Lscala_concurrent_Promise = (function(other) {
  return ScalaJS.impls.scala_concurrent_Promise$class__completeWith__Lscala_concurrent_Promise__Lscala_concurrent_Future__Lscala_concurrent_Promise(this, other)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.tryCompleteWith__Lscala_concurrent_Future__Lscala_concurrent_Promise = (function(other) {
  return ScalaJS.impls.scala_concurrent_Promise$class__tryCompleteWith__Lscala_concurrent_Promise__Lscala_concurrent_Future__Lscala_concurrent_Promise(this, other)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.success__O__Lscala_concurrent_Promise = (function(v) {
  return ScalaJS.impls.scala_concurrent_Promise$class__success__Lscala_concurrent_Promise__O__Lscala_concurrent_Promise(this, v)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.trySuccess__O__Z = (function(value) {
  return ScalaJS.impls.scala_concurrent_Promise$class__trySuccess__Lscala_concurrent_Promise__O__Z(this, value)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.failure__Ljava_lang_Throwable__Lscala_concurrent_Promise = (function(t) {
  return ScalaJS.impls.scala_concurrent_Promise$class__failure__Lscala_concurrent_Promise__Ljava_lang_Throwable__Lscala_concurrent_Promise(this, t)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.tryFailure__Ljava_lang_Throwable__Z = (function(t) {
  return ScalaJS.impls.scala_concurrent_Promise$class__tryFailure__Lscala_concurrent_Promise__Ljava_lang_Throwable__Z(this, t)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.tryAwait__Lscala_concurrent_duration_Duration__Z = (function(atMost) {
  var x1 = atMost;
  if ((x1 === ScalaJS.modules.scala_concurrent_duration_Duration().Undefined__Lscala_concurrent_duration_Duration$Infinite())) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("cannot wait for Undefined period")
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_concurrent_duration_Duration().Inf__Lscala_concurrent_duration_Duration$Infinite(), x1)) {
    return this.awaitUnbounded$1__p2__Z()
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_concurrent_duration_Duration().MinusInf__Lscala_concurrent_duration_Duration$Infinite(), x1)) {
    return this.isCompleted__Z()
  };
  if (ScalaJS.is.scala_concurrent_duration_FiniteDuration(x1)) {
    var x4 = ScalaJS.as.scala_concurrent_duration_FiniteDuration(x1);
    if (x4.$$greater__O__Z(ScalaJS.modules.scala_concurrent_duration_Duration().Zero__Lscala_concurrent_duration_FiniteDuration())) {
      return this.awaitUnsafe$1__p2__Lscala_concurrent_duration_Deadline__Lscala_concurrent_duration_FiniteDuration__Z(x4.fromNow__Lscala_concurrent_duration_Deadline(), x4)
    } else {
      return this.isCompleted__Z()
    }
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.ready__Lscala_concurrent_duration_Duration__Lscala_concurrent_CanAwait__Lscala_concurrent_impl_Promise$DefaultPromise = (function(atMost, permit) {
  if ((this.isCompleted__Z() || this.tryAwait__Lscala_concurrent_duration_Duration__Z(atMost))) {
    return this
  } else {
    throw new ScalaJS.c.java_util_concurrent_TimeoutException().init___T((("Futures timed out after [" + atMost) + "]"))
  }
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.result__Lscala_concurrent_duration_Duration__Lscala_concurrent_CanAwait__O = (function(atMost, permit) {
  var x1 = ScalaJS.as.scala_util_Try(this.ready__Lscala_concurrent_duration_Duration__Lscala_concurrent_CanAwait__Lscala_concurrent_impl_Promise$DefaultPromise(atMost, permit).value__Lscala_Option().get__O());
  if (ScalaJS.is.scala_util_Failure(x1)) {
    var x2 = ScalaJS.as.scala_util_Failure(x1);
    var e = x2.exception__Ljava_lang_Throwable();
    throw ScalaJS.unwrapJavaScriptException(e)
  };
  if (ScalaJS.is.scala_util_Success(x1)) {
    var x3 = ScalaJS.as.scala_util_Success(x1);
    var r = x3.value__O();
    return r
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.value__Lscala_Option = (function() {
  var x1 = this.getState__O();
  if (ScalaJS.is.scala_util_Try(x1)) {
    var x2 = ScalaJS.as.scala_util_Try(x1);
    return new ScalaJS.c.scala_Some().init___O(x2)
  };
  return ScalaJS.modules.scala_None()
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.isCompleted__Z = (function() {
  var x1 = this.getState__O();
  if (ScalaJS.is.scala_util_Try(x1)) {
    return true
  };
  return false
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.tryComplete__Lscala_util_Try__Z = (function(value) {
  var resolved = ScalaJS.modules.scala_concurrent_impl_Promise().scala$concurrent$impl$Promise$$resolveTry__Lscala_util_Try__Lscala_util_Try(value);
  try {
    var x1 = this.tryComplete$1__p2__Lscala_util_Try__Lscala_collection_immutable_List(resolved)
  } finally {
    ScalaJS.objectNotifyAll(this);
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  if (ScalaJS.anyRefEqEq(null, x1)) {
    return false
  };
  if (x1.isEmpty__Z()) {
    return true
  };
  x1.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(resolved$1) {
    return (function(r) {
      r.executeWithValue__Lscala_util_Try__V(resolved$1);
      return ScalaJS.bV(undefined)
    })
  })(resolved)));
  return true
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V = (function(func, executor) {
  var preparedEC = executor.prepare__Lscala_concurrent_ExecutionContext();
  var runnable = new ScalaJS.c.scala_concurrent_impl_CallbackRunnable().init___Lscala_concurrent_ExecutionContext__Lscala_Function1(preparedEC, func);
  this.dispatchOrAddCallback$1__p2__Lscala_concurrent_impl_CallbackRunnable__V(runnable)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.future__Lscala_concurrent_Future = (function() {
  return this.future__Lscala_concurrent_impl_Promise()
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.ready__Lscala_concurrent_duration_Duration__Lscala_concurrent_CanAwait__Lscala_concurrent_Awaitable = (function(atMost, permit) {
  return this.ready__Lscala_concurrent_duration_Duration__Lscala_concurrent_CanAwait__Lscala_concurrent_impl_Promise$DefaultPromise(atMost, permit)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.awaitUnsafe$1__p2__Lscala_concurrent_duration_Deadline__Lscala_concurrent_duration_FiniteDuration__Z = (function(deadline, nextWait) {
  var _$this = this;
  tailCallLoop: while (true) {
    if (((!_$this.isCompleted__Z()) && nextWait.$$greater__O__Z(ScalaJS.modules.scala_concurrent_duration_Duration().Zero__Lscala_concurrent_duration_FiniteDuration()))) {
      var ms = nextWait.toMillis__J();
      var ns = nextWait.toNanos__J().$$percent__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1000000, 0, 0)).toInt__I();
      if ((!_$this.isCompleted__Z())) {
        _$this.wait__J__I__V(ms, ns);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      } else {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      };
      nextWait = deadline.timeLeft__Lscala_concurrent_duration_FiniteDuration();
      continue tailCallLoop
    } else {
      return _$this.isCompleted__Z()
    }
  }
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.awaitUnbounded$1__p2__Z = (function() {
  var _$this = this;
  tailCallLoop: while (true) {
    if (_$this.isCompleted__Z()) {
      return true
    } else {
      if ((!_$this.isCompleted__Z())) {
        _$this.wait__V();
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      } else {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      };
      continue tailCallLoop
    }
  }
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.tryComplete$1__p2__Lscala_util_Try__Lscala_collection_immutable_List = (function(v) {
  var _$this = this;
  tailCallLoop: while (true) {
    var x1 = _$this.getState__O();
    if (ScalaJS.is.scala_collection_immutable_List(x1)) {
      var x2 = ScalaJS.as.scala_collection_immutable_List(x1);
      var cur = x2;
      if (_$this.updateState__O__O__Z(cur, v)) {
        return cur
      } else {
        continue tailCallLoop
      }
    };
    return null
  }
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.dispatchOrAddCallback$1__p2__Lscala_concurrent_impl_CallbackRunnable__V = (function(runnable$1) {
  var _$this = this;
  tailCallLoop: while (true) {
    var x1 = _$this.getState__O();
    matchEnd5: {
      if (ScalaJS.is.scala_util_Try(x1)) {
        var x2 = ScalaJS.as.scala_util_Try(x1);
        runnable$1.executeWithValue__Lscala_util_Try__V(x2);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd5
      };
      if (ScalaJS.is.scala_collection_immutable_List(x1)) {
        var x3 = ScalaJS.as.scala_collection_immutable_List(x1);
        var jsx$4 = _$this;
        var jsx$3 = x3;
        var x$1 = runnable$1;
        var jsx$2 = x3.$$colon$colon__O__Lscala_collection_immutable_List(x$1);
        var jsx$1 = jsx$4.updateState__O__O__Z(jsx$3, jsx$2);
        if (jsx$1) {
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd5
        } else {
          continue tailCallLoop;
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd5
        }
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    };
    return undefined
  }
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.init___ = (function() {
  ScalaJS.c.scala_concurrent_impl_AbstractPromise.prototype.init___.call(this);
  ScalaJS.impls.scala_concurrent_Promise$class__$init$__Lscala_concurrent_Promise__V(this);
  ScalaJS.impls.scala_concurrent_Future$class__$init$__Lscala_concurrent_Future__V(this);
  ScalaJS.impls.scala_concurrent_impl_Promise$class__$init$__Lscala_concurrent_impl_Promise__V(this);
  this.updateState__O__O__Z(null, ScalaJS.modules.scala_collection_immutable_Nil());
  return this
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.tryFailure__Ljava_lang_Throwable__ = (function(t) {
  return ScalaJS.bZ(this.tryFailure__Ljava_lang_Throwable__Z(t))
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.failure__Ljava_lang_Throwable__ = (function(t$2) {
  return this.failure__Ljava_lang_Throwable__Lscala_concurrent_Promise(t$2)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.trySuccess__O__ = (function(value) {
  return ScalaJS.bZ(this.trySuccess__O__Z(value))
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.success__O__ = (function(v) {
  return this.success__O__Lscala_concurrent_Promise(v)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.tryCompleteWith__Lscala_concurrent_Future__ = (function(other) {
  return this.tryCompleteWith__Lscala_concurrent_Future__Lscala_concurrent_Promise(other)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.completeWith__Lscala_concurrent_Future__ = (function(other$2) {
  return this.completeWith__Lscala_concurrent_Future__Lscala_concurrent_Promise(other$2)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.complete__Lscala_util_Try__ = (function(result) {
  return this.complete__Lscala_util_Try__Lscala_concurrent_Promise(result)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.andThen__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__ = (function(pf, executor) {
  return this.andThen__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(pf, executor)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.mapTo__Lscala_reflect_ClassTag__ = (function(tag) {
  return this.mapTo__Lscala_reflect_ClassTag__Lscala_concurrent_Future(tag)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.fallbackTo__Lscala_concurrent_Future__ = (function(that) {
  return this.fallbackTo__Lscala_concurrent_Future__Lscala_concurrent_Future(that)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.zip__Lscala_concurrent_Future__ = (function(that$2) {
  return this.zip__Lscala_concurrent_Future__Lscala_concurrent_Future(that$2)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.recoverWith__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__ = (function(pf$2, executor$2) {
  return this.recoverWith__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(pf$2, executor$2)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.recover__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__ = (function(pf$3, executor$3) {
  return this.recover__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(pf$3, executor$3)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.collect__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__ = (function(pf$4, executor$4) {
  return this.collect__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(pf$4, executor$4)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.withFilter__Lscala_Function1__Lscala_concurrent_ExecutionContext__ = (function(p, executor$5) {
  return this.withFilter__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(p, executor$5)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.filter__Lscala_Function1__Lscala_concurrent_ExecutionContext__ = (function(pred, executor$6) {
  return this.filter__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(pred, executor$6)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.flatMap__Lscala_Function1__Lscala_concurrent_ExecutionContext__ = (function(f, executor$7) {
  return this.flatMap__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(f, executor$7)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.map__Lscala_Function1__Lscala_concurrent_ExecutionContext__ = (function(f$2, executor$8) {
  return this.map__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(f$2, executor$8)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.transform__Lscala_Function1__Lscala_Function1__Lscala_concurrent_ExecutionContext__ = (function(s, f$3, executor$9) {
  return this.transform__Lscala_Function1__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(s, f$3, executor$9)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.foreach__Lscala_Function1__Lscala_concurrent_ExecutionContext__ = (function(f$4, executor$10) {
  return this.foreach__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(f$4, executor$10)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.failed__ = (function() {
  return this.failed__Lscala_concurrent_Future()
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.onFailure__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__ = (function(callback, executor$11) {
  return this.onFailure__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__V(callback, executor$11)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.onSuccess__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__ = (function(pf$5, executor$12) {
  return this.onSuccess__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__V(pf$5, executor$12)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.future__ = (function() {
  return this.future__Lscala_concurrent_impl_Promise()
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__ = (function(func, executor$13) {
  return ScalaJS.bV(this.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(func, executor$13))
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.tryComplete__Lscala_util_Try__ = (function(value$2) {
  return ScalaJS.bZ(this.tryComplete__Lscala_util_Try__Z(value$2))
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.isCompleted__ = (function() {
  return ScalaJS.bZ(this.isCompleted__Z())
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.value__ = (function() {
  return this.value__Lscala_Option()
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.result__Lscala_concurrent_duration_Duration__Lscala_concurrent_CanAwait__ = (function(atMost, permit) {
  return this.result__Lscala_concurrent_duration_Duration__Lscala_concurrent_CanAwait__O(atMost, permit)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.ready__Lscala_concurrent_duration_Duration__Lscala_concurrent_CanAwait__ = (function(atMost$2, permit$2) {
  return this.ready__Lscala_concurrent_duration_Duration__Lscala_concurrent_CanAwait__Lscala_concurrent_impl_Promise$DefaultPromise(atMost$2, permit$2)
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.tryAwait__Lscala_concurrent_duration_Duration__ = (function(atMost$3) {
  return ScalaJS.bZ(this.tryAwait__Lscala_concurrent_duration_Duration__Z(atMost$3))
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_impl_Promise$DefaultPromise = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_impl_Promise$DefaultPromise.prototype = ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype;
ScalaJS.is.scala_concurrent_impl_Promise$DefaultPromise = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_impl_Promise$DefaultPromise)))
});
ScalaJS.as.scala_concurrent_impl_Promise$DefaultPromise = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_impl_Promise$DefaultPromise(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.impl.Promise$DefaultPromise")
  }
});
ScalaJS.isArrayOf.scala_concurrent_impl_Promise$DefaultPromise = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_impl_Promise$DefaultPromise)))
});
ScalaJS.asArrayOf.scala_concurrent_impl_Promise$DefaultPromise = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_impl_Promise$DefaultPromise(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.impl.Promise$DefaultPromise;", depth)
  }
});
ScalaJS.data.scala_concurrent_impl_Promise$DefaultPromise = new ScalaJS.ClassTypeData({
  scala_concurrent_impl_Promise$DefaultPromise: 0
}, false, "scala.concurrent.impl.Promise$DefaultPromise", ScalaJS.data.scala_concurrent_impl_AbstractPromise, {
  scala_concurrent_impl_Promise$DefaultPromise: 1,
  scala_concurrent_impl_Promise: 1,
  scala_concurrent_Future: 1,
  scala_concurrent_Awaitable: 1,
  scala_concurrent_Promise: 1,
  scala_concurrent_impl_AbstractPromise: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise.prototype.$classData = ScalaJS.data.scala_concurrent_impl_Promise$DefaultPromise;
//@ sourceMappingURL=Promise$DefaultPromise.js.map
