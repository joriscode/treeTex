/** @constructor */
ScalaJS.c.scala_collection_concurrent_RestartException$ = (function() {
  ScalaJS.c.java_lang_Throwable.call(this)
});
ScalaJS.c.scala_collection_concurrent_RestartException$.prototype = new ScalaJS.inheritable.java_lang_Throwable();
ScalaJS.c.scala_collection_concurrent_RestartException$.prototype.constructor = ScalaJS.c.scala_collection_concurrent_RestartException$;
ScalaJS.c.scala_collection_concurrent_RestartException$.prototype.scala$util$control$NoStackTrace$$super$fillInStackTrace__Ljava_lang_Throwable = (function() {
  return ScalaJS.c.java_lang_Throwable.prototype.fillInStackTrace__Ljava_lang_Throwable.call(this)
});
ScalaJS.c.scala_collection_concurrent_RestartException$.prototype.fillInStackTrace__Ljava_lang_Throwable = (function() {
  return ScalaJS.impls.scala_util_control_NoStackTrace$class__fillInStackTrace__Lscala_util_control_NoStackTrace__Ljava_lang_Throwable(this)
});
ScalaJS.c.scala_collection_concurrent_RestartException$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_collection_concurrent_RestartException()
});
ScalaJS.c.scala_collection_concurrent_RestartException$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Throwable.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_concurrent_RestartException = this;
  ScalaJS.impls.scala_util_control_NoStackTrace$class__$init$__Lscala_util_control_NoStackTrace__V(this);
  return this
});
ScalaJS.c.scala_collection_concurrent_RestartException$.prototype.scala$util$control$NoStackTrace$$super$fillInStackTrace__ = (function() {
  return this.scala$util$control$NoStackTrace$$super$fillInStackTrace__Ljava_lang_Throwable()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_concurrent_RestartException$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_concurrent_RestartException$.prototype = ScalaJS.c.scala_collection_concurrent_RestartException$.prototype;
ScalaJS.is.scala_collection_concurrent_RestartException$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_concurrent_RestartException$)))
});
ScalaJS.as.scala_collection_concurrent_RestartException$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_concurrent_RestartException$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.concurrent.RestartException")
  }
});
ScalaJS.isArrayOf.scala_collection_concurrent_RestartException$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_concurrent_RestartException$)))
});
ScalaJS.asArrayOf.scala_collection_concurrent_RestartException$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_concurrent_RestartException$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.concurrent.RestartException;", depth)
  }
});
ScalaJS.data.scala_collection_concurrent_RestartException$ = new ScalaJS.ClassTypeData({
  scala_collection_concurrent_RestartException$: 0
}, false, "scala.collection.concurrent.RestartException$", ScalaJS.data.java_lang_Throwable, {
  scala_collection_concurrent_RestartException$: 1,
  scala_util_control_ControlThrowable: 1,
  scala_util_control_NoStackTrace: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_concurrent_RestartException$.prototype.$classData = ScalaJS.data.scala_collection_concurrent_RestartException$;
ScalaJS.moduleInstances.scala_collection_concurrent_RestartException = undefined;
ScalaJS.modules.scala_collection_concurrent_RestartException = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_concurrent_RestartException)) {
    ScalaJS.moduleInstances.scala_collection_concurrent_RestartException = new ScalaJS.c.scala_collection_concurrent_RestartException$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_concurrent_RestartException
});
//@ sourceMappingURL=RestartException$.js.map
