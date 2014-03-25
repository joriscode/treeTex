/** @constructor */
ScalaJS.c.scala_sys_process_BasicIO$Streamed$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_sys_process_BasicIO$Streamed$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_process_BasicIO$Streamed$.prototype.constructor = ScalaJS.c.scala_sys_process_BasicIO$Streamed$;
ScalaJS.c.scala_sys_process_BasicIO$Streamed$.prototype.apply__Z__Lscala_sys_process_BasicIO$Streamed = (function(nonzeroException) {
  var q = new ScalaJS.c.java_util_concurrent_LinkedBlockingQueue().init___();
  return new ScalaJS.c.scala_sys_process_BasicIO$Streamed().init___Lscala_Function1__Lscala_Function1__Lscala_Function0(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(q$1) {
    return (function(s) {
      q$1.put__O__V(ScalaJS.modules.scala_package().Right__Lscala_util_Right$().apply__O__Lscala_util_Right(s));
      return ScalaJS.bV(undefined)
    })
  })(q)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(q$1) {
    return (function(code) {
      code = ScalaJS.uI(code);
      q$1.put__O__V(ScalaJS.modules.scala_package().Left__Lscala_util_Left$().apply__O__Lscala_util_Left(ScalaJS.bI(code)));
      return ScalaJS.bV(undefined)
    })
  })(q)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(nonzeroException$1, q$1) {
    return (function() {
      return ScalaJS.modules.scala_sys_process_BasicIO$Streamed().scala$sys$process$BasicIO$Streamed$$next$1__Z__Ljava_util_concurrent_LinkedBlockingQueue__Lscala_collection_immutable_Stream(nonzeroException$1, q$1)
    })
  })(nonzeroException, q)))
});
ScalaJS.c.scala_sys_process_BasicIO$Streamed$.prototype.scala$sys$process$BasicIO$Streamed$$next$1__Z__Ljava_util_concurrent_LinkedBlockingQueue__Lscala_collection_immutable_Stream = (function(nonzeroException$1, q$1) {
  var rc8 = false;
  var x3 = null;
  var x1 = ScalaJS.as.scala_util_Either(q$1.take__O());
  if (ScalaJS.is.scala_util_Left(x1)) {
    rc8 = true;
    x3 = ScalaJS.as.scala_util_Left(x1);
    var p2 = ScalaJS.uI(x3.a__O());
    if ((0 === p2)) {
      return ScalaJS.modules.scala_collection_immutable_Stream().empty__Lscala_collection_immutable_Stream()
    }
  };
  if (rc8) {
    var code = ScalaJS.uI(x3.a__O());
    if (nonzeroException$1) {
      return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing(("Nonzero exit code: " + ScalaJS.bI(code)))
    } else {
      return ScalaJS.modules.scala_collection_immutable_Stream().empty__Lscala_collection_immutable_Stream()
    }
  };
  if (ScalaJS.is.scala_util_Right(x1)) {
    var x5 = ScalaJS.as.scala_util_Right(x1);
    var s = x5.b__O();
    return ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(s, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(nonzeroException$1, q$1) {
      return (function() {
        return ScalaJS.modules.scala_sys_process_BasicIO$Streamed().scala$sys$process$BasicIO$Streamed$$next$1__Z__Ljava_util_concurrent_LinkedBlockingQueue__Lscala_collection_immutable_Stream(nonzeroException$1, q$1)
      })
    })(nonzeroException$1, q$1)))
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_sys_process_BasicIO$Streamed$.prototype.scala$sys$process$BasicIO$Streamed$$next$1__Z__Ljava_util_concurrent_LinkedBlockingQueue__ = (function(nonzeroException$1, q$1) {
  return this.scala$sys$process$BasicIO$Streamed$$next$1__Z__Ljava_util_concurrent_LinkedBlockingQueue__Lscala_collection_immutable_Stream(nonzeroException$1, q$1)
});
ScalaJS.c.scala_sys_process_BasicIO$Streamed$.prototype.apply__Z__ = (function(nonzeroException) {
  return this.apply__Z__Lscala_sys_process_BasicIO$Streamed(nonzeroException)
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_BasicIO$Streamed$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_BasicIO$Streamed$.prototype = ScalaJS.c.scala_sys_process_BasicIO$Streamed$.prototype;
ScalaJS.is.scala_sys_process_BasicIO$Streamed$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_BasicIO$Streamed$)))
});
ScalaJS.as.scala_sys_process_BasicIO$Streamed$ = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_BasicIO$Streamed$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.BasicIO$Streamed")
  }
});
ScalaJS.isArrayOf.scala_sys_process_BasicIO$Streamed$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_BasicIO$Streamed$)))
});
ScalaJS.asArrayOf.scala_sys_process_BasicIO$Streamed$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_BasicIO$Streamed$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.BasicIO$Streamed;", depth)
  }
});
ScalaJS.data.scala_sys_process_BasicIO$Streamed$ = new ScalaJS.ClassTypeData({
  scala_sys_process_BasicIO$Streamed$: 0
}, false, "scala.sys.process.BasicIO$Streamed$", ScalaJS.data.java_lang_Object, {
  scala_sys_process_BasicIO$Streamed$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_BasicIO$Streamed$.prototype.$classData = ScalaJS.data.scala_sys_process_BasicIO$Streamed$;
ScalaJS.moduleInstances.scala_sys_process_BasicIO$Streamed = undefined;
ScalaJS.modules.scala_sys_process_BasicIO$Streamed = (function() {
  if ((!ScalaJS.moduleInstances.scala_sys_process_BasicIO$Streamed)) {
    ScalaJS.moduleInstances.scala_sys_process_BasicIO$Streamed = new ScalaJS.c.scala_sys_process_BasicIO$Streamed$().init___()
  };
  return ScalaJS.moduleInstances.scala_sys_process_BasicIO$Streamed
});
//@ sourceMappingURL=BasicIO$Streamed$.js.map
