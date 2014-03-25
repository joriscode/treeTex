/** @constructor */
ScalaJS.c.scala_collection_TraversableOnce$OnceCanBuildFrom = (function() {
  ScalaJS.c.scala_collection_TraversableOnce$BufferedCanBuildFrom.call(this)
});
ScalaJS.c.scala_collection_TraversableOnce$OnceCanBuildFrom.prototype = new ScalaJS.inheritable.scala_collection_TraversableOnce$BufferedCanBuildFrom();
ScalaJS.c.scala_collection_TraversableOnce$OnceCanBuildFrom.prototype.constructor = ScalaJS.c.scala_collection_TraversableOnce$OnceCanBuildFrom;
ScalaJS.c.scala_collection_TraversableOnce$OnceCanBuildFrom.prototype.bufferToColl__Lscala_collection_mutable_ArrayBuffer__Lscala_collection_Iterator = (function(buff$2) {
  return buff$2.iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_TraversableOnce$OnceCanBuildFrom.prototype.traversableToColl__Lscala_collection_GenTraversable__Lscala_collection_Traversable = (function(t) {
  return t.seq__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_TraversableOnce$OnceCanBuildFrom.prototype.traversableToColl__Lscala_collection_GenTraversable__Lscala_collection_TraversableOnce = (function(t) {
  return this.traversableToColl__Lscala_collection_GenTraversable__Lscala_collection_Traversable(t)
});
ScalaJS.c.scala_collection_TraversableOnce$OnceCanBuildFrom.prototype.bufferToColl__Lscala_collection_mutable_ArrayBuffer__Lscala_collection_TraversableOnce = (function(buff) {
  return this.bufferToColl__Lscala_collection_mutable_ArrayBuffer__Lscala_collection_Iterator(buff)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_TraversableOnce$OnceCanBuildFrom = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_TraversableOnce$OnceCanBuildFrom.prototype = ScalaJS.c.scala_collection_TraversableOnce$OnceCanBuildFrom.prototype;
ScalaJS.is.scala_collection_TraversableOnce$OnceCanBuildFrom = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_TraversableOnce$OnceCanBuildFrom)))
});
ScalaJS.as.scala_collection_TraversableOnce$OnceCanBuildFrom = (function(obj) {
  if ((ScalaJS.is.scala_collection_TraversableOnce$OnceCanBuildFrom(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.TraversableOnce$OnceCanBuildFrom")
  }
});
ScalaJS.isArrayOf.scala_collection_TraversableOnce$OnceCanBuildFrom = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_TraversableOnce$OnceCanBuildFrom)))
});
ScalaJS.asArrayOf.scala_collection_TraversableOnce$OnceCanBuildFrom = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_TraversableOnce$OnceCanBuildFrom(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.TraversableOnce$OnceCanBuildFrom;", depth)
  }
});
ScalaJS.data.scala_collection_TraversableOnce$OnceCanBuildFrom = new ScalaJS.ClassTypeData({
  scala_collection_TraversableOnce$OnceCanBuildFrom: 0
}, false, "scala.collection.TraversableOnce$OnceCanBuildFrom", ScalaJS.data.scala_collection_TraversableOnce$BufferedCanBuildFrom, {
  scala_collection_TraversableOnce$OnceCanBuildFrom: 1,
  scala_collection_TraversableOnce$BufferedCanBuildFrom: 1,
  scala_collection_generic_CanBuildFrom: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_TraversableOnce$OnceCanBuildFrom.prototype.$classData = ScalaJS.data.scala_collection_TraversableOnce$OnceCanBuildFrom;
//@ sourceMappingURL=TraversableOnce$OnceCanBuildFrom.js.map
