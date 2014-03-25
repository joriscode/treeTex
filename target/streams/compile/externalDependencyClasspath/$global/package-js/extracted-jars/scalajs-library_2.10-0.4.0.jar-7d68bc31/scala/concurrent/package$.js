/** @constructor */
ScalaJS.c.scala_concurrent_package$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_concurrent_package$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_package$.prototype.constructor = ScalaJS.c.scala_concurrent_package$;
ScalaJS.c.scala_concurrent_package$.prototype.future__Lscala_Function0__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(body, execctx) {
  return ScalaJS.modules.scala_concurrent_Future().apply__Lscala_Function0__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(body, execctx)
});
ScalaJS.c.scala_concurrent_package$.prototype.promise__Lscala_concurrent_Promise = (function() {
  return ScalaJS.modules.scala_concurrent_Promise().apply__Lscala_concurrent_Promise()
});
ScalaJS.c.scala_concurrent_package$.prototype.blocking__Lscala_Function0__O = (function(body) {
  return ScalaJS.modules.scala_concurrent_BlockContext().current__Lscala_concurrent_BlockContext().blockOn__Lscala_Function0__Lscala_concurrent_CanAwait__O(body, ScalaJS.modules.scala_concurrent_AwaitPermission())
});
ScalaJS.c.scala_concurrent_package$.prototype.blocking__Lscala_Function0__ = (function(body) {
  return this.blocking__Lscala_Function0__O(body)
});
ScalaJS.c.scala_concurrent_package$.prototype.promise__ = (function() {
  return this.promise__Lscala_concurrent_Promise()
});
ScalaJS.c.scala_concurrent_package$.prototype.future__Lscala_Function0__Lscala_concurrent_ExecutionContext__ = (function(body$2, execctx) {
  return this.future__Lscala_Function0__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(body$2, execctx)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_package$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_package$.prototype = ScalaJS.c.scala_concurrent_package$.prototype;
ScalaJS.is.scala_concurrent_package$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_package$)))
});
ScalaJS.as.scala_concurrent_package$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_package$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.package")
  }
});
ScalaJS.isArrayOf.scala_concurrent_package$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_package$)))
});
ScalaJS.asArrayOf.scala_concurrent_package$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_package$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.package;", depth)
  }
});
ScalaJS.data.scala_concurrent_package$ = new ScalaJS.ClassTypeData({
  scala_concurrent_package$: 0
}, false, "scala.concurrent.package$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_package$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_package$.prototype.$classData = ScalaJS.data.scala_concurrent_package$;
ScalaJS.moduleInstances.scala_concurrent_package = undefined;
ScalaJS.modules.scala_concurrent_package = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_package)) {
    ScalaJS.moduleInstances.scala_concurrent_package = new ScalaJS.c.scala_concurrent_package$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_package
});
//@ sourceMappingURL=package$.js.map
