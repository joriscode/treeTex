/** @constructor */
ScalaJS.c.scala_concurrent_BlockContext$DefaultBlockContext$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_concurrent_BlockContext$DefaultBlockContext$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_BlockContext$DefaultBlockContext$.prototype.constructor = ScalaJS.c.scala_concurrent_BlockContext$DefaultBlockContext$;
ScalaJS.c.scala_concurrent_BlockContext$DefaultBlockContext$.prototype.blockOn__Lscala_Function0__Lscala_concurrent_CanAwait__O = (function(thunk, permission) {
  return thunk.apply__O()
});
ScalaJS.c.scala_concurrent_BlockContext$DefaultBlockContext$.prototype.blockOn__Lscala_Function0__Lscala_concurrent_CanAwait__ = (function(thunk, permission) {
  return this.blockOn__Lscala_Function0__Lscala_concurrent_CanAwait__O(thunk, permission)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_BlockContext$DefaultBlockContext$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_BlockContext$DefaultBlockContext$.prototype = ScalaJS.c.scala_concurrent_BlockContext$DefaultBlockContext$.prototype;
ScalaJS.is.scala_concurrent_BlockContext$DefaultBlockContext$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_BlockContext$DefaultBlockContext$)))
});
ScalaJS.as.scala_concurrent_BlockContext$DefaultBlockContext$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_BlockContext$DefaultBlockContext$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.BlockContext$DefaultBlockContext")
  }
});
ScalaJS.isArrayOf.scala_concurrent_BlockContext$DefaultBlockContext$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_BlockContext$DefaultBlockContext$)))
});
ScalaJS.asArrayOf.scala_concurrent_BlockContext$DefaultBlockContext$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_BlockContext$DefaultBlockContext$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.BlockContext$DefaultBlockContext;", depth)
  }
});
ScalaJS.data.scala_concurrent_BlockContext$DefaultBlockContext$ = new ScalaJS.ClassTypeData({
  scala_concurrent_BlockContext$DefaultBlockContext$: 0
}, false, "scala.concurrent.BlockContext$DefaultBlockContext$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_BlockContext$DefaultBlockContext$: 1,
  scala_concurrent_BlockContext: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_BlockContext$DefaultBlockContext$.prototype.$classData = ScalaJS.data.scala_concurrent_BlockContext$DefaultBlockContext$;
ScalaJS.moduleInstances.scala_concurrent_BlockContext$DefaultBlockContext = undefined;
ScalaJS.modules.scala_concurrent_BlockContext$DefaultBlockContext = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_BlockContext$DefaultBlockContext)) {
    ScalaJS.moduleInstances.scala_concurrent_BlockContext$DefaultBlockContext = new ScalaJS.c.scala_concurrent_BlockContext$DefaultBlockContext$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_BlockContext$DefaultBlockContext
});
//@ sourceMappingURL=BlockContext$DefaultBlockContext$.js.map
