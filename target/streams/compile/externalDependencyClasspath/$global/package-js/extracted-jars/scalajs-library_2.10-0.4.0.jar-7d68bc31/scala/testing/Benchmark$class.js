ScalaJS.impls.scala_testing_Benchmark$class__runBenchmark__Lscala_testing_Benchmark__I__Lscala_collection_immutable_List = (function($$this, noTimes) {
  return ScalaJS.as.scala_collection_immutable_List(ScalaJS.as.scala_collection_TraversableLike(ScalaJS.modules.scala_collection_immutable_List().range__O__O__Lscala_math_Integral__Lscala_collection_GenTraversable(ScalaJS.bI(1), ScalaJS.bI((noTimes + 1)), ScalaJS.modules.scala_math_Numeric$IntIsIntegral())).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(i) {
      i = ScalaJS.uI(i);
      arg$outer.setUp__V();
      var startTime = ScalaJS.modules.scala_compat_Platform().currentTime__J();
      var i$2 = 0;
      while ((i$2 < arg$outer.multiplier__I())) {
        arg$outer.run__V();
        i$2 = (i$2 + 1)
      };
      var stopTime = ScalaJS.modules.scala_compat_Platform().currentTime__J();
      arg$outer.tearDown__V();
      ScalaJS.modules.scala_compat_Platform().collectGarbage__V();
      var jsx$1 = stopTime.$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(startTime);
      return ScalaJS.bJ(jsx$1)
    })
  })($$this)), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
});
ScalaJS.impls.scala_testing_Benchmark$class__setUp__Lscala_testing_Benchmark__V = (function($$this) {
  /*<skip>*/
});
ScalaJS.impls.scala_testing_Benchmark$class__tearDown__Lscala_testing_Benchmark__V = (function($$this) {
  /*<skip>*/
});
ScalaJS.impls.scala_testing_Benchmark$class__prefix__Lscala_testing_Benchmark__T = (function($$this) {
  return ScalaJS.objectGetClass($$this).getName__T()
});
ScalaJS.impls.scala_testing_Benchmark$class__main__Lscala_testing_Benchmark__AT__V = (function($$this, args) {
  if ((args.underlying.length > 0)) {
    var logFile = new ScalaJS.c.java_io_OutputStreamWriter().init___Ljava_io_OutputStream(ScalaJS.modules.java_lang_System().out__Ljava_io_PrintStream());
    if ((args.underlying.length > 1)) {
      $$this.multiplier$und$eq__I__V(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(args.underlying[1])).toInt__I())
    };
    logFile.write__T__V($$this.prefix__T());
    $$this.runBenchmark__I__Lscala_collection_immutable_List(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(args.underlying[0])).toInt__I()).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(logFile$1) {
      return (function(t) {
        t = ScalaJS.uJ(t);
        logFile$1.write__T__V(("\t" + ScalaJS.bJ(t)));
        return ScalaJS.bV(undefined)
      })
    })(logFile)));
    logFile.write__T__V(ScalaJS.modules.scala_compat_Platform().EOL__T());
    logFile.flush__V()
  } else {
    ScalaJS.modules.scala_Predef().println__O__V("Usage: scala benchmarks.program <runs> ");
    ScalaJS.modules.scala_Predef().println__O__V("   or: scala benchmarks.program <runs> <multiplier>");
    ScalaJS.modules.scala_Predef().println__O__V("\n    The benchmark is run <runs> times, forcing a garbage collection between runs. The optional\n    <multiplier> causes the benchmark to be repeated <multiplier> times, each time for <runs>\n    executions.\n      ")
  }
});
ScalaJS.impls.scala_testing_Benchmark$class__$init$__Lscala_testing_Benchmark__V = (function($$this) {
  $$this.multiplier$und$eq__I__V(1)
});
//@ sourceMappingURL=Benchmark$class.js.map
