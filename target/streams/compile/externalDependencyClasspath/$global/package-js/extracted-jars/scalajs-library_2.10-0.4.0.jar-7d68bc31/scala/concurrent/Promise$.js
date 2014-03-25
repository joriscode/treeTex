/** @constructor */
ScalaJS.c.scala_concurrent_Promise$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_concurrent_Promise$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_Promise$.prototype.constructor = ScalaJS.c.scala_concurrent_Promise$;
ScalaJS.c.scala_concurrent_Promise$.prototype.apply__Lscala_concurrent_Promise = (function() {
  return new ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise().init___()
});
ScalaJS.c.scala_concurrent_Promise$.prototype.failed__Ljava_lang_Throwable__Lscala_concurrent_Promise = (function(exception) {
  return new ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise().init___Lscala_util_Try(new ScalaJS.c.scala_util_Failure().init___Ljava_lang_Throwable(exception))
});
ScalaJS.c.scala_concurrent_Promise$.prototype.successful__O__Lscala_concurrent_Promise = (function(result) {
  return new ScalaJS.c.scala_concurrent_impl_Promise$KeptPromise().init___Lscala_util_Try(new ScalaJS.c.scala_util_Success().init___O(result))
});
ScalaJS.c.scala_concurrent_Promise$.prototype.successful__O__ = (function(result) {
  return this.successful__O__Lscala_concurrent_Promise(result)
});
ScalaJS.c.scala_concurrent_Promise$.prototype.failed__Ljava_lang_Throwable__ = (function(exception) {
  return this.failed__Ljava_lang_Throwable__Lscala_concurrent_Promise(exception)
});
ScalaJS.c.scala_concurrent_Promise$.prototype.apply__ = (function() {
  return this.apply__Lscala_concurrent_Promise()
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_Promise$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_Promise$.prototype = ScalaJS.c.scala_concurrent_Promise$.prototype;
ScalaJS.is.scala_concurrent_Promise$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_Promise$)))
});
ScalaJS.as.scala_concurrent_Promise$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_Promise$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.Promise")
  }
});
ScalaJS.isArrayOf.scala_concurrent_Promise$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_Promise$)))
});
ScalaJS.asArrayOf.scala_concurrent_Promise$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_Promise$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.Promise;", depth)
  }
});
ScalaJS.data.scala_concurrent_Promise$ = new ScalaJS.ClassTypeData({
  scala_concurrent_Promise$: 0
}, false, "scala.concurrent.Promise$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_Promise$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_Promise$.prototype.$classData = ScalaJS.data.scala_concurrent_Promise$;
ScalaJS.moduleInstances.scala_concurrent_Promise = undefined;
ScalaJS.modules.scala_concurrent_Promise = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_Promise)) {
    ScalaJS.moduleInstances.scala_concurrent_Promise = new ScalaJS.c.scala_concurrent_Promise$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_Promise
});
//@ sourceMappingURL=Promise$.js.map
