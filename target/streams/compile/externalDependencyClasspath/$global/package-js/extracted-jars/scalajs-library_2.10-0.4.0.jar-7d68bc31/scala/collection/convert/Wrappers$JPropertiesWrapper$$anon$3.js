/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.ui$2 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3;
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3.prototype.ui__p2__Ljava_util_Iterator = (function() {
  return this.ui$2
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3.prototype.hasNext__Z = (function() {
  return this.ui__p2__Ljava_util_Iterator().hasNext__Z()
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3.prototype.next__Lscala_Tuple2 = (function() {
  var e = ScalaJS.as.java_util_Map$Entry(this.ui__p2__Ljava_util_Iterator().next__O());
  return new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.as.java_lang_String(e.getKey__O()), ScalaJS.as.java_lang_String(e.getValue__O()))
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3.prototype.next__O = (function() {
  return this.next__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3.prototype.init___Lscala_collection_convert_Wrappers$JPropertiesWrapper = (function($$outer) {
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.ui$2 = $$outer.underlying__Ljava_util_Properties().entrySet__Ljava_util_Set().iterator__Ljava_util_Iterator();
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3.prototype = ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3)))
});
ScalaJS.as.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3 = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$JPropertiesWrapper$$anon$3")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$JPropertiesWrapper$$anon$3;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3 = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3: 0
}, false, "scala.collection.convert.Wrappers$JPropertiesWrapper$$anon$3", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3;
//@ sourceMappingURL=Wrappers$JPropertiesWrapper$$anon$3.js.map
