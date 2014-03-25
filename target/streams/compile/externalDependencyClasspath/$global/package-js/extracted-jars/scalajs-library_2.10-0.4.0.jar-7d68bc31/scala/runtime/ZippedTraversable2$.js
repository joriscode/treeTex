/** @constructor */
ScalaJS.c.scala_runtime_ZippedTraversable2$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_ZippedTraversable2$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_ZippedTraversable2$.prototype.constructor = ScalaJS.c.scala_runtime_ZippedTraversable2$;
ScalaJS.c.scala_runtime_ZippedTraversable2$.prototype.zippedTraversable2ToTraversable__Lscala_runtime_ZippedTraversable2__Lscala_collection_Traversable = (function(zz) {
  return new ScalaJS.c.scala_runtime_ZippedTraversable2$$anon$1().init___Lscala_runtime_ZippedTraversable2(zz)
});
ScalaJS.c.scala_runtime_ZippedTraversable2$.prototype.zippedTraversable2ToTraversable__Lscala_runtime_ZippedTraversable2__ = (function(zz) {
  return this.zippedTraversable2ToTraversable__Lscala_runtime_ZippedTraversable2__Lscala_collection_Traversable(zz)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_ZippedTraversable2$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_ZippedTraversable2$.prototype = ScalaJS.c.scala_runtime_ZippedTraversable2$.prototype;
ScalaJS.is.scala_runtime_ZippedTraversable2$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_ZippedTraversable2$)))
});
ScalaJS.as.scala_runtime_ZippedTraversable2$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_ZippedTraversable2$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.ZippedTraversable2")
  }
});
ScalaJS.isArrayOf.scala_runtime_ZippedTraversable2$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_ZippedTraversable2$)))
});
ScalaJS.asArrayOf.scala_runtime_ZippedTraversable2$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_ZippedTraversable2$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.ZippedTraversable2;", depth)
  }
});
ScalaJS.data.scala_runtime_ZippedTraversable2$ = new ScalaJS.ClassTypeData({
  scala_runtime_ZippedTraversable2$: 0
}, false, "scala.runtime.ZippedTraversable2$", ScalaJS.data.java_lang_Object, {
  scala_runtime_ZippedTraversable2$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_ZippedTraversable2$.prototype.$classData = ScalaJS.data.scala_runtime_ZippedTraversable2$;
ScalaJS.moduleInstances.scala_runtime_ZippedTraversable2 = undefined;
ScalaJS.modules.scala_runtime_ZippedTraversable2 = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_ZippedTraversable2)) {
    ScalaJS.moduleInstances.scala_runtime_ZippedTraversable2 = new ScalaJS.c.scala_runtime_ZippedTraversable2$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_ZippedTraversable2
});
//@ sourceMappingURL=ZippedTraversable2$.js.map
