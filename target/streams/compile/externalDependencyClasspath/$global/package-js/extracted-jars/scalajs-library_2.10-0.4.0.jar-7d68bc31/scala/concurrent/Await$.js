/** @constructor */
ScalaJS.c.scala_concurrent_Await$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_concurrent_Await$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_Await$.prototype.constructor = ScalaJS.c.scala_concurrent_Await$;
ScalaJS.c.scala_concurrent_Await$.prototype.ready__Lscala_concurrent_Awaitable__Lscala_concurrent_duration_Duration__Lscala_concurrent_Awaitable = (function(awaitable, atMost) {
  return ScalaJS.as.scala_concurrent_Awaitable(ScalaJS.modules.scala_concurrent_package().blocking__Lscala_Function0__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(awaitable$1, atMost$1) {
    return (function() {
      return awaitable$1.ready__Lscala_concurrent_duration_Duration__Lscala_concurrent_CanAwait__Lscala_concurrent_Awaitable(atMost$1, ScalaJS.modules.scala_concurrent_AwaitPermission())
    })
  })(awaitable, atMost))))
});
ScalaJS.c.scala_concurrent_Await$.prototype.result__Lscala_concurrent_Awaitable__Lscala_concurrent_duration_Duration__O = (function(awaitable, atMost) {
  return ScalaJS.modules.scala_concurrent_package().blocking__Lscala_Function0__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(awaitable$2, atMost$2) {
    return (function() {
      return awaitable$2.result__Lscala_concurrent_duration_Duration__Lscala_concurrent_CanAwait__O(atMost$2, ScalaJS.modules.scala_concurrent_AwaitPermission())
    })
  })(awaitable, atMost)))
});
ScalaJS.c.scala_concurrent_Await$.prototype.result__Lscala_concurrent_Awaitable__Lscala_concurrent_duration_Duration__ = (function(awaitable, atMost) {
  return this.result__Lscala_concurrent_Awaitable__Lscala_concurrent_duration_Duration__O(awaitable, atMost)
});
ScalaJS.c.scala_concurrent_Await$.prototype.ready__Lscala_concurrent_Awaitable__Lscala_concurrent_duration_Duration__ = (function(awaitable$2, atMost$2) {
  return this.ready__Lscala_concurrent_Awaitable__Lscala_concurrent_duration_Duration__Lscala_concurrent_Awaitable(awaitable$2, atMost$2)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_Await$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_Await$.prototype = ScalaJS.c.scala_concurrent_Await$.prototype;
ScalaJS.is.scala_concurrent_Await$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_Await$)))
});
ScalaJS.as.scala_concurrent_Await$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_Await$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.Await")
  }
});
ScalaJS.isArrayOf.scala_concurrent_Await$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_Await$)))
});
ScalaJS.asArrayOf.scala_concurrent_Await$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_Await$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.Await;", depth)
  }
});
ScalaJS.data.scala_concurrent_Await$ = new ScalaJS.ClassTypeData({
  scala_concurrent_Await$: 0
}, false, "scala.concurrent.Await$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_Await$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_Await$.prototype.$classData = ScalaJS.data.scala_concurrent_Await$;
ScalaJS.moduleInstances.scala_concurrent_Await = undefined;
ScalaJS.modules.scala_concurrent_Await = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_Await)) {
    ScalaJS.moduleInstances.scala_concurrent_Await = new ScalaJS.c.scala_concurrent_Await$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_Await
});
//@ sourceMappingURL=Await$.js.map
