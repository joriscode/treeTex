/** @constructor */
ScalaJS.c.scala_collection_MapLike$$anon$1 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.iter$2 = null
});
ScalaJS.c.scala_collection_MapLike$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_MapLike$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_MapLike$$anon$1;
ScalaJS.c.scala_collection_MapLike$$anon$1.prototype.iter__p2__Lscala_collection_Iterator = (function() {
  return this.iter$2
});
ScalaJS.c.scala_collection_MapLike$$anon$1.prototype.hasNext__Z = (function() {
  return this.iter__p2__Lscala_collection_Iterator().hasNext__Z()
});
ScalaJS.c.scala_collection_MapLike$$anon$1.prototype.next__O = (function() {
  return ScalaJS.as.scala_Tuple2(this.iter__p2__Lscala_collection_Iterator().next__O()).$$und1__O()
});
ScalaJS.c.scala_collection_MapLike$$anon$1.prototype.init___Lscala_collection_MapLike = (function($$outer) {
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.iter$2 = $$outer.iterator__Lscala_collection_Iterator();
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_MapLike$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_MapLike$$anon$1.prototype = ScalaJS.c.scala_collection_MapLike$$anon$1.prototype;
ScalaJS.is.scala_collection_MapLike$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_MapLike$$anon$1)))
});
ScalaJS.as.scala_collection_MapLike$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_MapLike$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.MapLike$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_MapLike$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_MapLike$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_MapLike$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_MapLike$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.MapLike$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_MapLike$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_MapLike$$anon$1: 0
}, false, "scala.collection.MapLike$$anon$1", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_MapLike$$anon$1: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_MapLike$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_MapLike$$anon$1;
//@ sourceMappingURL=MapLike$$anon$1.js.map
