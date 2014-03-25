/** @constructor */
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.scala$concurrent$impl$ExecutionContextImpl$$reporter$f = null;
  this.scala$concurrent$impl$ExecutionContextImpl$$uncaughtExceptionHandler$f = null;
  this.executor$1 = null
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl.prototype.constructor = ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl;
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl.prototype.prepare__Lscala_concurrent_ExecutionContext = (function() {
  return ScalaJS.impls.scala_concurrent_ExecutionContext$class__prepare__Lscala_concurrent_ExecutionContext__Lscala_concurrent_ExecutionContext(this)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl.prototype.executor__Ljava_util_concurrent_Executor = (function() {
  return this.executor$1
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl.prototype.createExecutorService__Ljava_util_concurrent_ExecutorService = (function() {
  var desiredParallelism = this.range$1__p1__I__I__I__I(this.getInt$1__p1__T__Lscala_Function1__I("scala.concurrent.context.minThreads", new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$1) {
      return ScalaJS.bI(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(x$1)).toInt__I())
    })
  })())), this.getInt$1__p1__T__Lscala_Function1__I("scala.concurrent.context.numThreads", new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x0$1) {
      var x1 = x0$1;
      matchEnd5: {
        matchEnd8: {
          if (ScalaJS.anyRefEqEq(null, x1)) {
            var jsx$2 = true;
            break matchEnd8
          };
          if (ScalaJS.anyRefEqEq("", x1)) {
            var jsx$2 = true;
            break matchEnd8
          };
          var jsx$2 = false;
          break matchEnd8
        };
        if (jsx$2) {
          var jsx$1 = ScalaJS.modules.java_lang_Runtime().getRuntime__Ljava_lang_Runtime().availableProcessors__I();
          break matchEnd5
        };
        if ((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(x1, 0) === 120)) {
          var jsx$1 = (ScalaJS.modules.scala_runtime_RichDouble().ceil$extension__D__D(ScalaJS.modules.scala_Predef().doubleWrapper__D__D((ScalaJS.modules.java_lang_Runtime().getRuntime__Ljava_lang_Runtime().availableProcessors__I() * new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__T(x1, 1))).toDouble__D()))) | 0);
          break matchEnd5
        };
        var jsx$1 = new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(x1)).toInt__I();
        break matchEnd5
      };
      return ScalaJS.bI(jsx$1)
    })
  })())), this.getInt$1__p1__T__Lscala_Function1__I("scala.concurrent.context.maxThreads", new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$2) {
      return ScalaJS.bI(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(x$2)).toInt__I())
    })
  })())));
  var threadFactory = new ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory().init___Lscala_concurrent_impl_ExecutionContextImpl__Z(this, true);
  try {
    return new ScalaJS.c.scala_concurrent_forkjoin_ForkJoinPool().init___I__Lscala_concurrent_forkjoin_ForkJoinPool$ForkJoinWorkerThreadFactory__Ljava_lang_Thread$UncaughtExceptionHandler__Z(desiredParallelism, threadFactory, this.scala$concurrent$impl$ExecutionContextImpl$$uncaughtExceptionHandler$f, true)
  } catch ($jsexc$) {
    $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
    var ex6 = $jsexc$;
    var x4 = ex6;
    var o11 = ScalaJS.modules.scala_util_control_NonFatal().unapply__Ljava_lang_Throwable__Lscala_Option(x4);
    if ((!o11.isEmpty__Z())) {
      var t = ScalaJS.as.java_lang_Throwable(o11.get__O());
      ScalaJS.modules.java_lang_System().err__Ljava_io_PrintStream().println__T__V("Failed to create ForkJoinPool for the default ExecutionContext, falling back to ThreadPoolExecutor");
      t.printStackTrace__Ljava_io_PrintStream__V(ScalaJS.modules.java_lang_System().err__Ljava_io_PrintStream());
      var exec = new ScalaJS.c.java_util_concurrent_ThreadPoolExecutor().init___I__I__J__Ljava_util_concurrent_TimeUnit__Ljava_util_concurrent_BlockingQueue__Ljava_util_concurrent_ThreadFactory(desiredParallelism, desiredParallelism, ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(5, 0, 0), ScalaJS.modules.java_util_concurrent_TimeUnit().MINUTES__Ljava_util_concurrent_TimeUnit(), new ScalaJS.c.java_util_concurrent_LinkedBlockingQueue().init___(), threadFactory);
      exec.allowCoreThreadTimeOut__Z__V(true);
      return exec
    };
    throw ScalaJS.unwrapJavaScriptException(ex6)
  }
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl.prototype.execute__Ljava_lang_Runnable__V = (function(runnable) {
  var x1 = this.executor__Ljava_util_concurrent_Executor();
  matchEnd4: {
    if (ScalaJS.is.scala_concurrent_forkjoin_ForkJoinPool(x1)) {
      var x2 = ScalaJS.as.scala_concurrent_forkjoin_ForkJoinPool(x1);
      var x1$2 = runnable;
      matchEnd4$2: {
        if (ScalaJS.is.scala_concurrent_forkjoin_ForkJoinTask(x1$2)) {
          var x2$2 = ScalaJS.as.scala_concurrent_forkjoin_ForkJoinTask(x1$2);
          var fjt = x2$2;
          break matchEnd4$2
        };
        var fjt = new ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$3().init___Lscala_concurrent_impl_ExecutionContextImpl__Ljava_lang_Runnable(this, x1$2);
        break matchEnd4$2
      };
      var x1$3 = ScalaJS.modules.java_lang_Thread().currentThread__Ljava_lang_Thread();
      if (ScalaJS.is.scala_concurrent_forkjoin_ForkJoinWorkerThread(x1$3)) {
        var x2$3 = ScalaJS.as.scala_concurrent_forkjoin_ForkJoinWorkerThread(x1$3);
        if ((x2$3.getPool__Lscala_concurrent_forkjoin_ForkJoinPool() === x2)) {
          fjt.fork__Lscala_concurrent_forkjoin_ForkJoinTask();
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd4
        }
      };
      x2.execute__Lscala_concurrent_forkjoin_ForkJoinTask__V(fjt);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd4
    };
    x1.execute__Ljava_lang_Runnable__V(runnable);
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
    break matchEnd4
  }
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl.prototype.reportFailure__Ljava_lang_Throwable__V = (function(t) {
  this.scala$concurrent$impl$ExecutionContextImpl$$reporter$f.apply__O__O(t)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl.prototype.getInt$1__p1__T__Lscala_Function1__I = (function(name, f) {
  try {
    return ScalaJS.uI(f.apply__O__O(ScalaJS.modules.java_lang_System().getProperty__T__T(name)))
  } catch ($jsexc$) {
    $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
    if (ScalaJS.is.java_lang_Exception($jsexc$)) {
      var e = $jsexc$;
      return ScalaJS.modules.java_lang_Runtime().getRuntime__Ljava_lang_Runtime().availableProcessors__I()
    } else {
      throw ScalaJS.unwrapJavaScriptException($jsexc$)
    }
  }
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl.prototype.range$1__p1__I__I__I__I = (function(floor, desired, ceiling) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((ceiling < floor)) {
      var temp$floor = ceiling;
      var temp$ceiling = floor;
      floor = temp$floor;
      ceiling = temp$ceiling;
      continue tailCallLoop
    } else {
      return ScalaJS.modules.scala_math_package().min__I__I__I(ScalaJS.modules.scala_math_package().max__I__I__I(desired, floor), ceiling)
    }
  }
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl.prototype.init___Ljava_util_concurrent_Executor__Lscala_Function1 = (function(es, reporter) {
  this.scala$concurrent$impl$ExecutionContextImpl$$reporter$f = reporter;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_concurrent_ExecutionContext$class__$init$__Lscala_concurrent_ExecutionContext__V(this);
  this.scala$concurrent$impl$ExecutionContextImpl$$uncaughtExceptionHandler$f = new ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$4().init___Lscala_concurrent_impl_ExecutionContextImpl(this);
  var x1 = es;
  matchEnd4: {
    if (ScalaJS.anyRefEqEq(null, x1)) {
      var jsx$3 = this.createExecutorService__Ljava_util_concurrent_ExecutorService();
      break matchEnd4
    };
    var jsx$3 = x1;
    break matchEnd4
  };
  this.executor$1 = jsx$3;
  return this
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl.prototype.prepare__ = (function() {
  return this.prepare__Lscala_concurrent_ExecutionContext()
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl.prototype.reportFailure__Ljava_lang_Throwable__ = (function(t) {
  return ScalaJS.bV(this.reportFailure__Ljava_lang_Throwable__V(t))
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl.prototype.execute__Ljava_lang_Runnable__ = (function(runnable) {
  return ScalaJS.bV(this.execute__Ljava_lang_Runnable__V(runnable))
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl.prototype.createExecutorService__ = (function() {
  return this.createExecutorService__Ljava_util_concurrent_ExecutorService()
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl.prototype.executor__ = (function() {
  return this.executor__Ljava_util_concurrent_Executor()
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_impl_ExecutionContextImpl = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_impl_ExecutionContextImpl.prototype = ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl.prototype;
ScalaJS.is.scala_concurrent_impl_ExecutionContextImpl = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_impl_ExecutionContextImpl)))
});
ScalaJS.as.scala_concurrent_impl_ExecutionContextImpl = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_impl_ExecutionContextImpl(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.impl.ExecutionContextImpl")
  }
});
ScalaJS.isArrayOf.scala_concurrent_impl_ExecutionContextImpl = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_impl_ExecutionContextImpl)))
});
ScalaJS.asArrayOf.scala_concurrent_impl_ExecutionContextImpl = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_impl_ExecutionContextImpl(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.impl.ExecutionContextImpl;", depth)
  }
});
ScalaJS.data.scala_concurrent_impl_ExecutionContextImpl = new ScalaJS.ClassTypeData({
  scala_concurrent_impl_ExecutionContextImpl: 0
}, false, "scala.concurrent.impl.ExecutionContextImpl", ScalaJS.data.java_lang_Object, {
  scala_concurrent_impl_ExecutionContextImpl: 1,
  scala_concurrent_ExecutionContextExecutor: 1,
  java_util_concurrent_Executor: 1,
  scala_concurrent_ExecutionContext: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl.prototype.$classData = ScalaJS.data.scala_concurrent_impl_ExecutionContextImpl;
//@ sourceMappingURL=ExecutionContextImpl.js.map
