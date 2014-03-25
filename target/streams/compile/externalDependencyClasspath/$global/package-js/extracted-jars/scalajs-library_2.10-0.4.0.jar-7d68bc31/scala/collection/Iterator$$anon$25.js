/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$25 = (function() {
  ScalaJS.c.scala_collection_TraversableOnce$BufferedCanBuildFrom.call(this)
});
ScalaJS.c.scala_collection_Iterator$$anon$25.prototype = new ScalaJS.inheritable.scala_collection_TraversableOnce$BufferedCanBuildFrom();
ScalaJS.c.scala_collection_Iterator$$anon$25.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$25;
ScalaJS.c.scala_collection_Iterator$$anon$25.prototype.bufferToColl__Lscala_collection_mutable_ArrayBuffer__Lscala_collection_Iterator = (function(coll) {
  return coll.iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_Iterator$$anon$25.prototype.traversableToColl__Lscala_collection_GenTraversable__Lscala_collection_Iterator = (function(t) {
  return t.toIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_Iterator$$anon$25.prototype.traversableToColl__Lscala_collection_GenTraversable__Lscala_collection_TraversableOnce = (function(t) {
  return this.traversableToColl__Lscala_collection_GenTraversable__Lscala_collection_Iterator(t)
});
ScalaJS.c.scala_collection_Iterator$$anon$25.prototype.bufferToColl__Lscala_collection_mutable_ArrayBuffer__Lscala_collection_TraversableOnce = (function(buff) {
  return this.bufferToColl__Lscala_collection_mutable_ArrayBuffer__Lscala_collection_Iterator(buff)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$25 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$25.prototype = ScalaJS.c.scala_collection_Iterator$$anon$25.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$25 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$25)))
});
ScalaJS.as.scala_collection_Iterator$$anon$25 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$25(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$25")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$25 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$25)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$25 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$25(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$25;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$25 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$25: 0
}, false, "scala.collection.Iterator$$anon$25", ScalaJS.data.scala_collection_TraversableOnce$BufferedCanBuildFrom, {
  scala_collection_Iterator$$anon$25: 1,
  scala_collection_TraversableOnce$BufferedCanBuildFrom: 1,
  scala_collection_generic_CanBuildFrom: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$25.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$25;
//@ sourceMappingURL=Iterator$$anon$25.js.map
