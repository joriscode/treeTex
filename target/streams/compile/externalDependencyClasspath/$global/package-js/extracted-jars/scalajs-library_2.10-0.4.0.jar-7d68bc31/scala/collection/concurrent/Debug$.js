/** @constructor */
ScalaJS.c.scala_collection_concurrent_Debug$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.logbuffer$1 = null;
  this.bitmap$0$1 = false
});
ScalaJS.c.scala_collection_concurrent_Debug$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_concurrent_Debug$.prototype.constructor = ScalaJS.c.scala_collection_concurrent_Debug$;
ScalaJS.c.scala_collection_concurrent_Debug$.prototype.logbuffer$lzycompute__p1__Ljava_util_concurrent_ConcurrentLinkedQueue = (function() {
  if ((!this.bitmap$0$1)) {
    this.logbuffer$1 = new ScalaJS.c.java_util_concurrent_ConcurrentLinkedQueue().init___();
    this.bitmap$0$1 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.logbuffer$1
});
ScalaJS.c.scala_collection_concurrent_Debug$.prototype.logbuffer__Ljava_util_concurrent_ConcurrentLinkedQueue = (function() {
  if ((!this.bitmap$0$1)) {
    return this.logbuffer$lzycompute__p1__Ljava_util_concurrent_ConcurrentLinkedQueue()
  } else {
    return this.logbuffer$1
  }
});
ScalaJS.c.scala_collection_concurrent_Debug$.prototype.log__O__Z = (function(s) {
  return this.logbuffer__Ljava_util_concurrent_ConcurrentLinkedQueue().add__O__Z(s)
});
ScalaJS.c.scala_collection_concurrent_Debug$.prototype.flush__V = (function() {
  ScalaJS.modules.scala_collection_JavaConversions().asScalaIterator__Ljava_util_Iterator__Lscala_collection_Iterator(this.logbuffer__Ljava_util_concurrent_ConcurrentLinkedQueue().iterator__Ljava_util_Iterator()).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(s) {
      ScalaJS.modules.scala_Console().out__Ljava_io_PrintStream().println__T__V(ScalaJS.objectToString(s));
      return ScalaJS.bV(undefined)
    })
  })()));
  this.logbuffer__Ljava_util_concurrent_ConcurrentLinkedQueue().clear__V()
});
ScalaJS.c.scala_collection_concurrent_Debug$.prototype.clear__V = (function() {
  this.logbuffer__Ljava_util_concurrent_ConcurrentLinkedQueue().clear__V()
});
ScalaJS.c.scala_collection_concurrent_Debug$.prototype.clear__ = (function() {
  return ScalaJS.bV(this.clear__V())
});
ScalaJS.c.scala_collection_concurrent_Debug$.prototype.flush__ = (function() {
  return ScalaJS.bV(this.flush__V())
});
ScalaJS.c.scala_collection_concurrent_Debug$.prototype.log__O__ = (function(s) {
  return ScalaJS.bZ(this.log__O__Z(s))
});
ScalaJS.c.scala_collection_concurrent_Debug$.prototype.logbuffer__ = (function() {
  return this.logbuffer__Ljava_util_concurrent_ConcurrentLinkedQueue()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_concurrent_Debug$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_concurrent_Debug$.prototype = ScalaJS.c.scala_collection_concurrent_Debug$.prototype;
ScalaJS.is.scala_collection_concurrent_Debug$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_concurrent_Debug$)))
});
ScalaJS.as.scala_collection_concurrent_Debug$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_concurrent_Debug$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.concurrent.Debug")
  }
});
ScalaJS.isArrayOf.scala_collection_concurrent_Debug$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_concurrent_Debug$)))
});
ScalaJS.asArrayOf.scala_collection_concurrent_Debug$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_concurrent_Debug$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.concurrent.Debug;", depth)
  }
});
ScalaJS.data.scala_collection_concurrent_Debug$ = new ScalaJS.ClassTypeData({
  scala_collection_concurrent_Debug$: 0
}, false, "scala.collection.concurrent.Debug$", ScalaJS.data.java_lang_Object, {
  scala_collection_concurrent_Debug$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_concurrent_Debug$.prototype.$classData = ScalaJS.data.scala_collection_concurrent_Debug$;
ScalaJS.moduleInstances.scala_collection_concurrent_Debug = undefined;
ScalaJS.modules.scala_collection_concurrent_Debug = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_concurrent_Debug)) {
    ScalaJS.moduleInstances.scala_collection_concurrent_Debug = new ScalaJS.c.scala_collection_concurrent_Debug$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_concurrent_Debug
});
//@ sourceMappingURL=Debug$.js.map
