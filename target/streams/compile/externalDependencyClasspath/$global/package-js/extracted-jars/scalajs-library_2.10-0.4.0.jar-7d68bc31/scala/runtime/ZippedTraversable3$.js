/** @constructor */
ScalaJS.c.scala_runtime_ZippedTraversable3$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_ZippedTraversable3$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_ZippedTraversable3$.prototype.constructor = ScalaJS.c.scala_runtime_ZippedTraversable3$;
ScalaJS.c.scala_runtime_ZippedTraversable3$.prototype.zippedTraversable3ToTraversable__Lscala_runtime_ZippedTraversable3__Lscala_collection_Traversable = (function(zz) {
  return new ScalaJS.c.scala_runtime_ZippedTraversable3$$anon$1().init___Lscala_runtime_ZippedTraversable3(zz)
});
ScalaJS.c.scala_runtime_ZippedTraversable3$.prototype.zippedTraversable3ToTraversable__Lscala_runtime_ZippedTraversable3__ = (function(zz) {
  return this.zippedTraversable3ToTraversable__Lscala_runtime_ZippedTraversable3__Lscala_collection_Traversable(zz)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_ZippedTraversable3$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_ZippedTraversable3$.prototype = ScalaJS.c.scala_runtime_ZippedTraversable3$.prototype;
ScalaJS.is.scala_runtime_ZippedTraversable3$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_ZippedTraversable3$)))
});
ScalaJS.as.scala_runtime_ZippedTraversable3$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_ZippedTraversable3$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.ZippedTraversable3")
  }
});
ScalaJS.isArrayOf.scala_runtime_ZippedTraversable3$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_ZippedTraversable3$)))
});
ScalaJS.asArrayOf.scala_runtime_ZippedTraversable3$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_ZippedTraversable3$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.ZippedTraversable3;", depth)
  }
});
ScalaJS.data.scala_runtime_ZippedTraversable3$ = new ScalaJS.ClassTypeData({
  scala_runtime_ZippedTraversable3$: 0
}, false, "scala.runtime.ZippedTraversable3$", ScalaJS.data.java_lang_Object, {
  scala_runtime_ZippedTraversable3$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_ZippedTraversable3$.prototype.$classData = ScalaJS.data.scala_runtime_ZippedTraversable3$;
ScalaJS.moduleInstances.scala_runtime_ZippedTraversable3 = undefined;
ScalaJS.modules.scala_runtime_ZippedTraversable3 = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_ZippedTraversable3)) {
    ScalaJS.moduleInstances.scala_runtime_ZippedTraversable3 = new ScalaJS.c.scala_runtime_ZippedTraversable3$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_ZippedTraversable3
});
//@ sourceMappingURL=ZippedTraversable3$.js.map
