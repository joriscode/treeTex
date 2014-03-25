/** @constructor */
ScalaJS.c.scala_concurrent_impl_AbstractPromise$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_concurrent_impl_AbstractPromise$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_impl_AbstractPromise$.prototype.constructor = ScalaJS.c.scala_concurrent_impl_AbstractPromise$;
ScalaJS.c.scala_concurrent_impl_AbstractPromise$.prototype.updater__Lscala_Nothing = (function() {
  return ScalaJS.modules.scala_Predef().$$qmark$qmark$qmark__Lscala_Nothing()
});
ScalaJS.c.scala_concurrent_impl_AbstractPromise$.prototype.updater__ = (function() {
  return this.updater__Lscala_Nothing()
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_impl_AbstractPromise$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_impl_AbstractPromise$.prototype = ScalaJS.c.scala_concurrent_impl_AbstractPromise$.prototype;
ScalaJS.is.scala_concurrent_impl_AbstractPromise$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_impl_AbstractPromise$)))
});
ScalaJS.as.scala_concurrent_impl_AbstractPromise$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_impl_AbstractPromise$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.impl.AbstractPromise")
  }
});
ScalaJS.isArrayOf.scala_concurrent_impl_AbstractPromise$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_impl_AbstractPromise$)))
});
ScalaJS.asArrayOf.scala_concurrent_impl_AbstractPromise$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_impl_AbstractPromise$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.impl.AbstractPromise;", depth)
  }
});
ScalaJS.data.scala_concurrent_impl_AbstractPromise$ = new ScalaJS.ClassTypeData({
  scala_concurrent_impl_AbstractPromise$: 0
}, false, "scala.concurrent.impl.AbstractPromise$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_impl_AbstractPromise$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_impl_AbstractPromise$.prototype.$classData = ScalaJS.data.scala_concurrent_impl_AbstractPromise$;
ScalaJS.moduleInstances.scala_concurrent_impl_AbstractPromise = undefined;
ScalaJS.modules.scala_concurrent_impl_AbstractPromise = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_impl_AbstractPromise)) {
    ScalaJS.moduleInstances.scala_concurrent_impl_AbstractPromise = new ScalaJS.c.scala_concurrent_impl_AbstractPromise$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_impl_AbstractPromise
});
//@ sourceMappingURL=AbstractPromise$.js.map
