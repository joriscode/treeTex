/** @constructor */
ScalaJS.c.scala_collection_mutable_ArrayOps$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_ArrayOps$.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArrayOps$;
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$.prototype = ScalaJS.c.scala_collection_mutable_ArrayOps$.prototype;
ScalaJS.is.scala_collection_mutable_ArrayOps$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayOps$)))
});
ScalaJS.as.scala_collection_mutable_ArrayOps$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayOps$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayOps")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayOps$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayOps$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayOps;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayOps$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayOps$: 0
}, false, "scala.collection.mutable.ArrayOps$", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_ArrayOps$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ArrayOps$.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArrayOps$;
ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps = undefined;
ScalaJS.modules.scala_collection_mutable_ArrayOps = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps)) {
    ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps = new ScalaJS.c.scala_collection_mutable_ArrayOps$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps
});
//@ sourceMappingURL=ArrayOps$.js.map
