ScalaJS.impls.scala_concurrent_Future$class__scala$concurrent$Future$$internalExecutor__Lscala_concurrent_Future__Lscala_concurrent_ExecutionContext = (function($$this) {
  return ScalaJS.modules.scala_concurrent_Future$InternalCallbackExecutor()
});
ScalaJS.impls.scala_concurrent_Future$class__onSuccess__Lscala_concurrent_Future__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__V = (function($$this, pf, executor) {
  $$this.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(pf$1) {
    return (function(x0$1) {
      var x1 = x0$1;
      if (ScalaJS.is.scala_util_Success(x1)) {
        var x2 = ScalaJS.as.scala_util_Success(x1);
        var v = x2.value__O();
        if (pf$1.isDefinedAt__O__Z(v)) {
          return pf$1.apply__O__O(v)
        }
      };
      return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    })
  })(pf)), executor)
});
ScalaJS.impls.scala_concurrent_Future$class__onFailure__Lscala_concurrent_Future__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__V = (function($$this, callback, executor) {
  $$this.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(callback$1) {
    return (function(x0$2) {
      var x1 = x0$2;
      if (ScalaJS.is.scala_util_Failure(x1)) {
        var x2 = ScalaJS.as.scala_util_Failure(x1);
        var t = x2.exception__Ljava_lang_Throwable();
        if ((ScalaJS.modules.scala_util_control_NonFatal().apply__Ljava_lang_Throwable__Z(t) && callback$1.isDefinedAt__O__Z(t))) {
          return callback$1.apply__O__O(t)
        }
      };
      return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    })
  })(callback)), executor)
});
ScalaJS.impls.scala_concurrent_Future$class__failed__Lscala_concurrent_Future__Lscala_concurrent_Future = (function($$this) {
  var p = ScalaJS.modules.scala_concurrent_Promise().apply__Lscala_concurrent_Promise();
  $$this.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(p$1) {
    return (function(x0$3) {
      var x1 = x0$3;
      if (ScalaJS.is.scala_util_Failure(x1)) {
        var x2 = ScalaJS.as.scala_util_Failure(x1);
        var t = x2.exception__Ljava_lang_Throwable();
        return p$1.success__O__Lscala_concurrent_Promise(t)
      };
      if (ScalaJS.is.scala_util_Success(x1)) {
        return p$1.failure__Ljava_lang_Throwable__Lscala_concurrent_Promise(new ScalaJS.c.java_util_NoSuchElementException().init___T("Future.failed not completed with a throwable."))
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })(p)), ScalaJS.impls.scala_concurrent_Future$class__scala$concurrent$Future$$internalExecutor__Lscala_concurrent_Future__Lscala_concurrent_ExecutionContext($$this));
  return p.future__Lscala_concurrent_Future()
});
ScalaJS.impls.scala_concurrent_Future$class__foreach__Lscala_concurrent_Future__Lscala_Function1__Lscala_concurrent_ExecutionContext__V = (function($$this, f, executor) {
  $$this.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(f$1) {
    return (function(x0$4) {
      var x1 = x0$4;
      if (ScalaJS.is.scala_util_Success(x1)) {
        var x2 = ScalaJS.as.scala_util_Success(x1);
        var r = x2.value__O();
        return f$1.apply__O__O(r)
      };
      return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    })
  })(f)), executor)
});
ScalaJS.impls.scala_concurrent_Future$class__transform__Lscala_concurrent_Future__Lscala_Function1__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function($$this, s, f, executor) {
  var p = ScalaJS.modules.scala_concurrent_Promise().apply__Lscala_concurrent_Promise();
  $$this.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(p$2, s$1, f$2) {
    return (function(x0$5) {
      var x1$2 = x0$5;
      try {
        var x1 = x1$2;
        if (ScalaJS.is.scala_util_Failure(x1)) {
          var x2 = ScalaJS.as.scala_util_Failure(x1);
          var t = x2.exception__Ljava_lang_Throwable();
          return p$2.failure__Ljava_lang_Throwable__Lscala_concurrent_Promise(ScalaJS.as.java_lang_Throwable(f$2.apply__O__O(t)))
        };
        if (ScalaJS.is.scala_util_Success(x1)) {
          var x3 = ScalaJS.as.scala_util_Success(x1);
          var r = x3.value__O();
          return p$2.success__O__Lscala_concurrent_Promise(s$1.apply__O__O(r))
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1)
      } catch ($jsexc$) {
        $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
        var ex6 = $jsexc$;
        var x4 = ex6;
        var o11 = ScalaJS.modules.scala_util_control_NonFatal().unapply__Ljava_lang_Throwable__Lscala_Option(x4);
        if ((!o11.isEmpty__Z())) {
          var t$2 = ScalaJS.as.java_lang_Throwable(o11.get__O());
          return p$2.failure__Ljava_lang_Throwable__Lscala_concurrent_Promise(t$2)
        };
        throw ScalaJS.unwrapJavaScriptException(ex6)
      }
    })
  })(p, s, f)), executor);
  return p.future__Lscala_concurrent_Future()
});
ScalaJS.impls.scala_concurrent_Future$class__map__Lscala_concurrent_Future__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function($$this, f, executor) {
  var p = ScalaJS.modules.scala_concurrent_Promise().apply__Lscala_concurrent_Promise();
  $$this.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(p$3, f$3) {
    return (function(x0$6) {
      var x1$2 = x0$6;
      try {
        var x1 = x1$2;
        if (ScalaJS.is.scala_util_Success(x1)) {
          var x2 = ScalaJS.as.scala_util_Success(x1);
          var r = x2.value__O();
          return p$3.success__O__Lscala_concurrent_Promise(f$3.apply__O__O(r))
        };
        if (ScalaJS.is.scala_util_Failure(x1)) {
          var x3 = ScalaJS.as.scala_util_Failure(x1);
          return p$3.complete__Lscala_util_Try__Lscala_concurrent_Promise(x3)
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1)
      } catch ($jsexc$) {
        $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
        var ex6 = $jsexc$;
        var x4 = ex6;
        var o11 = ScalaJS.modules.scala_util_control_NonFatal().unapply__Ljava_lang_Throwable__Lscala_Option(x4);
        if ((!o11.isEmpty__Z())) {
          var t = ScalaJS.as.java_lang_Throwable(o11.get__O());
          return p$3.failure__Ljava_lang_Throwable__Lscala_concurrent_Promise(t)
        };
        throw ScalaJS.unwrapJavaScriptException(ex6)
      }
    })
  })(p, f)), executor);
  return p.future__Lscala_concurrent_Future()
});
ScalaJS.impls.scala_concurrent_Future$class__flatMap__Lscala_concurrent_Future__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function($$this, f, executor) {
  var p = ScalaJS.modules.scala_concurrent_Promise().apply__Lscala_concurrent_Promise();
  $$this.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(new ScalaJS.c.scala_concurrent_Future$$anonfun$flatMap$1().init___Lscala_concurrent_Future__Lscala_concurrent_Promise__Lscala_Function1($$this, p, f), executor);
  return p.future__Lscala_concurrent_Future()
});
ScalaJS.impls.scala_concurrent_Future$class__filter__Lscala_concurrent_Future__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function($$this, pred, executor) {
  var p = ScalaJS.modules.scala_concurrent_Promise().apply__Lscala_concurrent_Promise();
  $$this.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(p$5, pred$1) {
    return (function(x0$9) {
      var x1 = x0$9;
      if (ScalaJS.is.scala_util_Failure(x1)) {
        var x3 = ScalaJS.as.scala_util_Failure(x1);
        return p$5.complete__Lscala_util_Try__Lscala_concurrent_Promise(x3)
      };
      if (ScalaJS.is.scala_util_Success(x1)) {
        var x2 = ScalaJS.as.scala_util_Success(x1);
        var v = x2.value__O();
        try {
          if (ScalaJS.uZ(pred$1.apply__O__O(v))) {
            return p$5.success__O__Lscala_concurrent_Promise(v)
          } else {
            return p$5.failure__Ljava_lang_Throwable__Lscala_concurrent_Promise(new ScalaJS.c.java_util_NoSuchElementException().init___T("Future.filter predicate is not satisfied"))
          }
        } catch ($jsexc$) {
          $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
          var ex6 = $jsexc$;
          var x4 = ex6;
          var o11 = ScalaJS.modules.scala_util_control_NonFatal().unapply__Ljava_lang_Throwable__Lscala_Option(x4);
          if ((!o11.isEmpty__Z())) {
            var t = ScalaJS.as.java_lang_Throwable(o11.get__O());
            return p$5.failure__Ljava_lang_Throwable__Lscala_concurrent_Promise(t)
          };
          throw ScalaJS.unwrapJavaScriptException(ex6)
        }
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })(p, pred)), executor);
  return p.future__Lscala_concurrent_Future()
});
ScalaJS.impls.scala_concurrent_Future$class__withFilter__Lscala_concurrent_Future__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function($$this, p, executor) {
  return $$this.filter__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(p, executor)
});
ScalaJS.impls.scala_concurrent_Future$class__collect__Lscala_concurrent_Future__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function($$this, pf, executor) {
  var p = ScalaJS.modules.scala_concurrent_Promise().apply__Lscala_concurrent_Promise();
  $$this.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(p$6, pf$2) {
    return (function(x0$10) {
      var x1 = x0$10;
      if (ScalaJS.is.scala_util_Failure(x1)) {
        var x3 = ScalaJS.as.scala_util_Failure(x1);
        return p$6.complete__Lscala_util_Try__Lscala_concurrent_Promise(x3)
      };
      if (ScalaJS.is.scala_util_Success(x1)) {
        var x2 = ScalaJS.as.scala_util_Success(x1);
        var v = x2.value__O();
        try {
          if (pf$2.isDefinedAt__O__Z(v)) {
            return p$6.success__O__Lscala_concurrent_Promise(pf$2.apply__O__O(v))
          } else {
            return p$6.failure__Ljava_lang_Throwable__Lscala_concurrent_Promise(new ScalaJS.c.java_util_NoSuchElementException().init___T(("Future.collect partial function is not defined at: " + v)))
          }
        } catch ($jsexc$) {
          $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
          var ex6 = $jsexc$;
          var x4 = ex6;
          var o11 = ScalaJS.modules.scala_util_control_NonFatal().unapply__Ljava_lang_Throwable__Lscala_Option(x4);
          if ((!o11.isEmpty__Z())) {
            var t = ScalaJS.as.java_lang_Throwable(o11.get__O());
            return p$6.failure__Ljava_lang_Throwable__Lscala_concurrent_Promise(t)
          };
          throw ScalaJS.unwrapJavaScriptException(ex6)
        }
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })(p, pf)), executor);
  return p.future__Lscala_concurrent_Future()
});
ScalaJS.impls.scala_concurrent_Future$class__recover__Lscala_concurrent_Future__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function($$this, pf, executor) {
  var p = ScalaJS.modules.scala_concurrent_Promise().apply__Lscala_concurrent_Promise();
  $$this.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(p$7, pf$3) {
    return (function(x0$11) {
      var x1 = x0$11;
      return p$7.complete__Lscala_util_Try__Lscala_concurrent_Promise(x1.recover__Lscala_PartialFunction__Lscala_util_Try(pf$3))
    })
  })(p, pf)), executor);
  return p.future__Lscala_concurrent_Future()
});
ScalaJS.impls.scala_concurrent_Future$class__recoverWith__Lscala_concurrent_Future__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function($$this, pf, executor) {
  var p = ScalaJS.modules.scala_concurrent_Promise().apply__Lscala_concurrent_Promise();
  $$this.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(p$8, pf$4) {
    return (function(x0$12) {
      var x1 = x0$12;
      if (ScalaJS.is.scala_util_Failure(x1)) {
        var x2 = ScalaJS.as.scala_util_Failure(x1);
        var t = x2.exception__Ljava_lang_Throwable();
        if (pf$4.isDefinedAt__O__Z(t)) {
          try {
            return p$8.completeWith__Lscala_concurrent_Future__Lscala_concurrent_Promise(ScalaJS.as.scala_concurrent_Future(pf$4.apply__O__O(t)))
          } catch ($jsexc$) {
            $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
            var ex6 = $jsexc$;
            var x4 = ex6;
            var o11 = ScalaJS.modules.scala_util_control_NonFatal().unapply__Ljava_lang_Throwable__Lscala_Option(x4);
            if ((!o11.isEmpty__Z())) {
              var t$2 = ScalaJS.as.java_lang_Throwable(o11.get__O());
              return p$8.failure__Ljava_lang_Throwable__Lscala_concurrent_Promise(t$2)
            };
            throw ScalaJS.unwrapJavaScriptException(ex6)
          }
        }
      };
      return p$8.complete__Lscala_util_Try__Lscala_concurrent_Promise(x1)
    })
  })(p, pf)), executor);
  return p.future__Lscala_concurrent_Future()
});
ScalaJS.impls.scala_concurrent_Future$class__zip__Lscala_concurrent_Future__Lscala_concurrent_Future__Lscala_concurrent_Future = (function($$this, that) {
  var p = ScalaJS.modules.scala_concurrent_Promise().apply__Lscala_concurrent_Promise();
  $$this.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(new ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1().init___Lscala_concurrent_Future__Lscala_concurrent_Promise__Lscala_concurrent_Future($$this, p, that), ScalaJS.impls.scala_concurrent_Future$class__scala$concurrent$Future$$internalExecutor__Lscala_concurrent_Future__Lscala_concurrent_ExecutionContext($$this));
  return p.future__Lscala_concurrent_Future()
});
ScalaJS.impls.scala_concurrent_Future$class__fallbackTo__Lscala_concurrent_Future__Lscala_concurrent_Future__Lscala_concurrent_Future = (function($$this, that) {
  var p = ScalaJS.modules.scala_concurrent_Promise().apply__Lscala_concurrent_Promise();
  $$this.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(p$10, that$2) {
    return (function(x0$14) {
      var x1 = x0$14;
      if (ScalaJS.is.scala_util_Success(x1)) {
        var x3 = ScalaJS.as.scala_util_Success(x1);
        return p$10.complete__Lscala_util_Try__Lscala_concurrent_Promise(x3)
      };
      return p$10.completeWith__Lscala_concurrent_Future__Lscala_concurrent_Promise(that$2)
    })
  })(p, that)), ScalaJS.impls.scala_concurrent_Future$class__scala$concurrent$Future$$internalExecutor__Lscala_concurrent_Future__Lscala_concurrent_ExecutionContext($$this));
  return p.future__Lscala_concurrent_Future()
});
ScalaJS.impls.scala_concurrent_Future$class__mapTo__Lscala_concurrent_Future__Lscala_reflect_ClassTag__Lscala_concurrent_Future = (function($$this, tag) {
  var p = ScalaJS.modules.scala_concurrent_Promise().apply__Lscala_concurrent_Promise();
  $$this.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(new ScalaJS.c.scala_concurrent_Future$$anonfun$mapTo$1().init___Lscala_concurrent_Future__Lscala_concurrent_Promise__Lscala_reflect_ClassTag($$this, p, tag), ScalaJS.impls.scala_concurrent_Future$class__scala$concurrent$Future$$internalExecutor__Lscala_concurrent_Future__Lscala_concurrent_ExecutionContext($$this));
  return p.future__Lscala_concurrent_Future()
});
ScalaJS.impls.scala_concurrent_Future$class__andThen__Lscala_concurrent_Future__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function($$this, pf, executor) {
  var p = ScalaJS.modules.scala_concurrent_Promise().apply__Lscala_concurrent_Promise();
  $$this.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(p$12, pf$5) {
    return (function(x0$16) {
      var x1 = x0$16;
      try {
        if (pf$5.isDefinedAt__O__Z(x1)) {
          return pf$5.apply__O__O(x1)
        } else {
          return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
        }
      } finally {
        p$12.complete__Lscala_util_Try__Lscala_concurrent_Promise(x1)
      }
    })
  })(p, pf)), executor);
  return p.future__Lscala_concurrent_Future()
});
ScalaJS.impls.scala_concurrent_Future$class__boxedType$1__Lscala_concurrent_Future__Ljava_lang_Class__Ljava_lang_Class = (function($$this, c) {
  if (c.isPrimitive__Z()) {
    return ScalaJS.as.java_lang_Class(ScalaJS.modules.scala_concurrent_Future().toBoxed__Lscala_collection_immutable_Map().apply__O__O(c))
  } else {
    return c
  }
});
ScalaJS.impls.scala_concurrent_Future$class__$init$__Lscala_concurrent_Future__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=Future$class.js.map
