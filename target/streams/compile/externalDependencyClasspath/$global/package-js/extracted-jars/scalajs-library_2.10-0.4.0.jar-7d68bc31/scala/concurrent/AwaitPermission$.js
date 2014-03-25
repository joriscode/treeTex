/** @constructor */
ScalaJS.c.scala_concurrent_AwaitPermission$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_concurrent_AwaitPermission$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_AwaitPermission$.prototype.constructor = ScalaJS.c.scala_concurrent_AwaitPermission$;
/** @constructor */
ScalaJS.inheritable.scala_concurrent_AwaitPermission$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_AwaitPermission$.prototype = ScalaJS.c.scala_concurrent_AwaitPermission$.prototype;
ScalaJS.is.scala_concurrent_AwaitPermission$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_AwaitPermission$)))
});
ScalaJS.as.scala_concurrent_AwaitPermission$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_AwaitPermission$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.AwaitPermission")
  }
});
ScalaJS.isArrayOf.scala_concurrent_AwaitPermission$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_AwaitPermission$)))
});
ScalaJS.asArrayOf.scala_concurrent_AwaitPermission$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_AwaitPermission$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.AwaitPermission;", depth)
  }
});
ScalaJS.data.scala_concurrent_AwaitPermission$ = new ScalaJS.ClassTypeData({
  scala_concurrent_AwaitPermission$: 0
}, false, "scala.concurrent.AwaitPermission$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_AwaitPermission$: 1,
  scala_concurrent_CanAwait: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_AwaitPermission$.prototype.$classData = ScalaJS.data.scala_concurrent_AwaitPermission$;
ScalaJS.moduleInstances.scala_concurrent_AwaitPermission = undefined;
ScalaJS.modules.scala_concurrent_AwaitPermission = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_AwaitPermission)) {
    ScalaJS.moduleInstances.scala_concurrent_AwaitPermission = new ScalaJS.c.scala_concurrent_AwaitPermission$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_AwaitPermission
});
//@ sourceMappingURL=AwaitPermission$.js.map
