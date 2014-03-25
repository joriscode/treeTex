/** @constructor */
ScalaJS.c.scala_collection_mutable_HashMap$$anon$3 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.iter$2 = null
});
ScalaJS.c.scala_collection_mutable_HashMap$$anon$3.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_mutable_HashMap$$anon$3.prototype.constructor = ScalaJS.c.scala_collection_mutable_HashMap$$anon$3;
ScalaJS.c.scala_collection_mutable_HashMap$$anon$3.prototype.iter__p2__Lscala_collection_Iterator = (function() {
  return this.iter$2
});
ScalaJS.c.scala_collection_mutable_HashMap$$anon$3.prototype.hasNext__Z = (function() {
  return this.iter__p2__Lscala_collection_Iterator().hasNext__Z()
});
ScalaJS.c.scala_collection_mutable_HashMap$$anon$3.prototype.next__O = (function() {
  return ScalaJS.as.scala_collection_mutable_DefaultEntry(this.iter__p2__Lscala_collection_Iterator().next__O()).key__O()
});
ScalaJS.c.scala_collection_mutable_HashMap$$anon$3.prototype.init___Lscala_collection_mutable_HashMap = (function($$outer) {
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.iter$2 = $$outer.entriesIterator__Lscala_collection_Iterator();
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_HashMap$$anon$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_HashMap$$anon$3.prototype = ScalaJS.c.scala_collection_mutable_HashMap$$anon$3.prototype;
ScalaJS.is.scala_collection_mutable_HashMap$$anon$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_HashMap$$anon$3)))
});
ScalaJS.as.scala_collection_mutable_HashMap$$anon$3 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_HashMap$$anon$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.HashMap$$anon$3")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_HashMap$$anon$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_HashMap$$anon$3)))
});
ScalaJS.asArrayOf.scala_collection_mutable_HashMap$$anon$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_HashMap$$anon$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.HashMap$$anon$3;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_HashMap$$anon$3 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_HashMap$$anon$3: 0
}, false, "scala.collection.mutable.HashMap$$anon$3", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_mutable_HashMap$$anon$3: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_HashMap$$anon$3.prototype.$classData = ScalaJS.data.scala_collection_mutable_HashMap$$anon$3;
//@ sourceMappingURL=HashMap$$anon$3.js.map
