/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.ui$2 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2;
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2.prototype.ui__p2__Ljava_util_Iterator = (function() {
  return this.ui$2
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2.prototype.hasNext__Z = (function() {
  return this.ui__p2__Ljava_util_Iterator().hasNext__Z()
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2.prototype.next__Lscala_Tuple2 = (function() {
  var e = ScalaJS.as.java_util_Map$Entry(this.ui__p2__Ljava_util_Iterator().next__O());
  return new ScalaJS.c.scala_Tuple2().init___O__O(e.getKey__O(), e.getValue__O())
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2.prototype.next__O = (function() {
  return this.next__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2.prototype.init___Lscala_collection_convert_Wrappers$JMapWrapperLike = (function($$outer) {
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.ui$2 = $$outer.underlying__Ljava_util_Map().entrySet__Ljava_util_Set().iterator__Ljava_util_Iterator();
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2.prototype = ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2)))
});
ScalaJS.as.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2 = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$JMapWrapperLike$$anon$2")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$JMapWrapperLike$$anon$2;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2 = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2: 0
}, false, "scala.collection.convert.Wrappers$JMapWrapperLike$$anon$2", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2;
//@ sourceMappingURL=Wrappers$JMapWrapperLike$$anon$2.js.map
