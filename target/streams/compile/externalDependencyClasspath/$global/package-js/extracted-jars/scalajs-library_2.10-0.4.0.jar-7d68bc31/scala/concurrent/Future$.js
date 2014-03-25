/** @constructor */
ScalaJS.c.scala_concurrent_Future$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.toBoxed$1 = null
});
ScalaJS.c.scala_concurrent_Future$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_Future$.prototype.constructor = ScalaJS.c.scala_concurrent_Future$;
ScalaJS.c.scala_concurrent_Future$.prototype.toBoxed__Lscala_collection_immutable_Map = (function() {
  return this.toBoxed$1
});
ScalaJS.c.scala_concurrent_Future$.prototype.failed__Ljava_lang_Throwable__Lscala_concurrent_Future = (function(exception) {
  return ScalaJS.modules.scala_concurrent_Promise().failed__Ljava_lang_Throwable__Lscala_concurrent_Promise(exception).future__Lscala_concurrent_Future()
});
ScalaJS.c.scala_concurrent_Future$.prototype.successful__O__Lscala_concurrent_Future = (function(result) {
  return ScalaJS.modules.scala_concurrent_Promise().successful__O__Lscala_concurrent_Promise(result).future__Lscala_concurrent_Future()
});
ScalaJS.c.scala_concurrent_Future$.prototype.apply__Lscala_Function0__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(body, execctx) {
  return ScalaJS.modules.scala_concurrent_impl_Future().apply__Lscala_Function0__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(body, execctx)
});
ScalaJS.c.scala_concurrent_Future$.prototype.sequence__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(in$2, cbf, executor) {
  return ScalaJS.as.scala_concurrent_Future(in$2.foldLeft__O__Lscala_Function2__O(ScalaJS.modules.scala_concurrent_Promise().successful__O__Lscala_concurrent_Promise(cbf.apply__O__Lscala_collection_mutable_Builder(in$2)).future__Lscala_concurrent_Future(), new ScalaJS.c.scala_concurrent_Future$$anonfun$sequence$1().init___Lscala_concurrent_ExecutionContext(executor))).map__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$1) {
      return ScalaJS.as.scala_collection_TraversableOnce(x$1.result__O())
    })
  })()), executor)
});
ScalaJS.c.scala_concurrent_Future$.prototype.firstCompletedOf__Lscala_collection_TraversableOnce__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(futures, executor) {
  var p = ScalaJS.modules.scala_concurrent_Promise().apply__Lscala_concurrent_Promise();
  var completeFirst = new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(p$13) {
    return (function(x$2) {
      p$13.tryComplete__Lscala_util_Try__Z(x$2);
      return ScalaJS.bV(undefined)
    })
  })(p));
  futures.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(executor$2, completeFirst$1) {
    return (function(x$3) {
      x$3.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(completeFirst$1, executor$2);
      return ScalaJS.bV(undefined)
    })
  })(executor, completeFirst)));
  return p.future__Lscala_concurrent_Future()
});
ScalaJS.c.scala_concurrent_Future$.prototype.find__Lscala_collection_TraversableOnce__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(futurestravonce, predicate, executor) {
  var futures = futurestravonce.toBuffer__Lscala_collection_mutable_Buffer();
  if (futures.isEmpty__Z()) {
    return ScalaJS.modules.scala_concurrent_Promise().successful__O__Lscala_concurrent_Promise(ScalaJS.modules.scala_None()).future__Lscala_concurrent_Future()
  } else {
    var result = ScalaJS.modules.scala_concurrent_Promise().apply__Lscala_concurrent_Promise();
    var ref = new ScalaJS.c.java_util_concurrent_atomic_AtomicInteger().init___I(futures.size__I());
    var search = new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(predicate$1, result$1, ref$1) {
      return (function(v) {
        try {
          var x1 = v;
          matchEnd4: {
            if (ScalaJS.is.scala_util_Success(x1)) {
              var x2 = ScalaJS.as.scala_util_Success(x1);
              var r = x2.value__O();
              if (ScalaJS.uZ(predicate$1.apply__O__O(r))) {
                result$1.tryComplete__Lscala_util_Try__Z(new ScalaJS.c.scala_util_Success().init___O(new ScalaJS.c.scala_Some().init___O(r)));
                ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
                break matchEnd4
              } else {
                ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
                break matchEnd4
              }
            };
            ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
            break matchEnd4
          }
        } finally {
          if ((ref$1.decrementAndGet__I() === 0)) {
            result$1.tryComplete__Lscala_util_Try__Z(new ScalaJS.c.scala_util_Success().init___O(ScalaJS.modules.scala_None()))
          }
        };
        return ScalaJS.bV(undefined)
      })
    })(predicate, result, ref));
    futures.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(executor$3, search$1) {
      return (function(x$4) {
        x$4.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(search$1, executor$3);
        return ScalaJS.bV(undefined)
      })
    })(executor, search)));
    return result.future__Lscala_concurrent_Future()
  }
});
ScalaJS.c.scala_concurrent_Future$.prototype.fold__Lscala_collection_TraversableOnce__O__Lscala_Function2__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(futures, zero, foldFun, executor) {
  if (futures.isEmpty__Z()) {
    return ScalaJS.modules.scala_concurrent_Promise().successful__O__Lscala_concurrent_Promise(zero).future__Lscala_concurrent_Future()
  } else {
    return this.sequence__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(futures, ScalaJS.modules.scala_collection_TraversableOnce().OnceCanBuildFrom__Lscala_collection_TraversableOnce$OnceCanBuildFrom(), executor).map__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(zero$1, foldFun$1) {
      return (function(x$5) {
        return x$5.foldLeft__O__Lscala_Function2__O(zero$1, foldFun$1)
      })
    })(zero, foldFun)), executor)
  }
});
ScalaJS.c.scala_concurrent_Future$.prototype.reduce__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(futures, op, executor) {
  if (futures.isEmpty__Z()) {
    return ScalaJS.modules.scala_concurrent_Promise().apply__Lscala_concurrent_Promise().failure__Ljava_lang_Throwable__Lscala_concurrent_Promise(new ScalaJS.c.java_util_NoSuchElementException().init___T("reduce attempted on empty collection")).future__Lscala_concurrent_Future()
  } else {
    return this.sequence__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(futures, ScalaJS.modules.scala_collection_TraversableOnce().OnceCanBuildFrom__Lscala_collection_TraversableOnce$OnceCanBuildFrom(), executor).map__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(op$1) {
      return (function(x$6) {
        return x$6.reduceLeft__Lscala_Function2__O(op$1)
      })
    })(op)), executor)
  }
});
ScalaJS.c.scala_concurrent_Future$.prototype.traverse__Lscala_collection_TraversableOnce__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(in$2, fn, cbf, executor) {
  return ScalaJS.as.scala_concurrent_Future(in$2.foldLeft__O__Lscala_Function2__O(ScalaJS.modules.scala_concurrent_Promise().successful__O__Lscala_concurrent_Promise(cbf.apply__O__Lscala_collection_mutable_Builder(in$2)).future__Lscala_concurrent_Future(), new ScalaJS.c.scala_concurrent_Future$$anonfun$traverse$1().init___Lscala_Function1__Lscala_concurrent_ExecutionContext(fn, executor))).map__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$7) {
      return ScalaJS.as.scala_collection_TraversableOnce(x$7.result__O())
    })
  })()), executor)
});
ScalaJS.c.scala_concurrent_Future$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_concurrent_Future = this;
  this.toBoxed$1 = ScalaJS.as.scala_collection_immutable_Map(ScalaJS.modules.scala_Predef().Map__Lscala_collection_immutable_Map$().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), [ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.data.scala_Boolean.getClassOf()), ScalaJS.data.java_lang_Boolean.getClassOf()), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.data.scala_Byte.getClassOf()), ScalaJS.data.java_lang_Byte.getClassOf()), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.data.scala_Char.getClassOf()), ScalaJS.data.java_lang_Character.getClassOf()), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.data.scala_Short.getClassOf()), ScalaJS.data.java_lang_Short.getClassOf()), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.data.scala_Int.getClassOf()), ScalaJS.data.java_lang_Integer.getClassOf()), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.data.scala_Long.getClassOf()), ScalaJS.data.java_lang_Long.getClassOf()), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.data.scala_Float.getClassOf()), ScalaJS.data.java_lang_Float.getClassOf()), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.data.scala_Double.getClassOf()), ScalaJS.data.java_lang_Double.getClassOf()), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.data.scala_Unit.getClassOf()), ScalaJS.data.scala_runtime_BoxedUnit.getClassOf())]), 1))));
  return this
});
ScalaJS.c.scala_concurrent_Future$.prototype.traverse__Lscala_collection_TraversableOnce__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__Lscala_concurrent_ExecutionContext__ = (function(in$2, fn, cbf, executor) {
  return this.traverse__Lscala_collection_TraversableOnce__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(in$2, fn, cbf, executor)
});
ScalaJS.c.scala_concurrent_Future$.prototype.reduce__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_concurrent_ExecutionContext__ = (function(futures, op, executor$2) {
  return this.reduce__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(futures, op, executor$2)
});
ScalaJS.c.scala_concurrent_Future$.prototype.fold__Lscala_collection_TraversableOnce__O__Lscala_Function2__Lscala_concurrent_ExecutionContext__ = (function(futures$2, zero, foldFun, executor$3) {
  return this.fold__Lscala_collection_TraversableOnce__O__Lscala_Function2__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(futures$2, zero, foldFun, executor$3)
});
ScalaJS.c.scala_concurrent_Future$.prototype.find__Lscala_collection_TraversableOnce__Lscala_Function1__Lscala_concurrent_ExecutionContext__ = (function(futurestravonce, predicate, executor$4) {
  return this.find__Lscala_collection_TraversableOnce__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(futurestravonce, predicate, executor$4)
});
ScalaJS.c.scala_concurrent_Future$.prototype.firstCompletedOf__Lscala_collection_TraversableOnce__Lscala_concurrent_ExecutionContext__ = (function(futures$3, executor$5) {
  return this.firstCompletedOf__Lscala_collection_TraversableOnce__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(futures$3, executor$5)
});
ScalaJS.c.scala_concurrent_Future$.prototype.sequence__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__Lscala_concurrent_ExecutionContext__ = (function(in$3, cbf$2, executor$6) {
  return this.sequence__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(in$3, cbf$2, executor$6)
});
ScalaJS.c.scala_concurrent_Future$.prototype.apply__Lscala_Function0__Lscala_concurrent_ExecutionContext__ = (function(body, execctx) {
  return this.apply__Lscala_Function0__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(body, execctx)
});
ScalaJS.c.scala_concurrent_Future$.prototype.successful__O__ = (function(result) {
  return this.successful__O__Lscala_concurrent_Future(result)
});
ScalaJS.c.scala_concurrent_Future$.prototype.failed__Ljava_lang_Throwable__ = (function(exception) {
  return this.failed__Ljava_lang_Throwable__Lscala_concurrent_Future(exception)
});
ScalaJS.c.scala_concurrent_Future$.prototype.toBoxed__ = (function() {
  return this.toBoxed__Lscala_collection_immutable_Map()
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_Future$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_Future$.prototype = ScalaJS.c.scala_concurrent_Future$.prototype;
ScalaJS.is.scala_concurrent_Future$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_Future$)))
});
ScalaJS.as.scala_concurrent_Future$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_Future$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.Future")
  }
});
ScalaJS.isArrayOf.scala_concurrent_Future$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_Future$)))
});
ScalaJS.asArrayOf.scala_concurrent_Future$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_Future$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.Future;", depth)
  }
});
ScalaJS.data.scala_concurrent_Future$ = new ScalaJS.ClassTypeData({
  scala_concurrent_Future$: 0
}, false, "scala.concurrent.Future$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_Future$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_Future$.prototype.$classData = ScalaJS.data.scala_concurrent_Future$;
ScalaJS.moduleInstances.scala_concurrent_Future = undefined;
ScalaJS.modules.scala_concurrent_Future = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_Future)) {
    ScalaJS.moduleInstances.scala_concurrent_Future = new ScalaJS.c.scala_concurrent_Future$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_Future
});
//@ sourceMappingURL=Future$.js.map
