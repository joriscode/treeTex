/** @constructor */
ScalaJS.c.scala_collection_mutable_LinkedListLike$$anon$1 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.elems$2 = null
});
ScalaJS.c.scala_collection_mutable_LinkedListLike$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_mutable_LinkedListLike$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_mutable_LinkedListLike$$anon$1;
ScalaJS.c.scala_collection_mutable_LinkedListLike$$anon$1.prototype.elems__p2__Lscala_collection_mutable_LinkedListLike = (function() {
  return this.elems$2
});
ScalaJS.c.scala_collection_mutable_LinkedListLike$$anon$1.prototype.elems$und$eq__p2__Lscala_collection_mutable_LinkedListLike__V = (function(x$1) {
  this.elems$2 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedListLike$$anon$1.prototype.hasNext__Z = (function() {
  return this.elems__p2__Lscala_collection_mutable_LinkedListLike().nonEmpty__Z()
});
ScalaJS.c.scala_collection_mutable_LinkedListLike$$anon$1.prototype.next__O = (function() {
  var res = this.elems__p2__Lscala_collection_mutable_LinkedListLike().elem__O();
  this.elems$und$eq__p2__Lscala_collection_mutable_LinkedListLike__V(ScalaJS.as.scala_collection_mutable_LinkedListLike(this.elems__p2__Lscala_collection_mutable_LinkedListLike().next__Lscala_collection_mutable_Seq()));
  return res
});
ScalaJS.c.scala_collection_mutable_LinkedListLike$$anon$1.prototype.init___Lscala_collection_mutable_LinkedListLike = (function($$outer) {
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.elems$2 = $$outer;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_LinkedListLike$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_LinkedListLike$$anon$1.prototype = ScalaJS.c.scala_collection_mutable_LinkedListLike$$anon$1.prototype;
ScalaJS.is.scala_collection_mutable_LinkedListLike$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_LinkedListLike$$anon$1)))
});
ScalaJS.as.scala_collection_mutable_LinkedListLike$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_LinkedListLike$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.LinkedListLike$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_LinkedListLike$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_LinkedListLike$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_mutable_LinkedListLike$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_LinkedListLike$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.LinkedListLike$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_LinkedListLike$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_LinkedListLike$$anon$1: 0
}, false, "scala.collection.mutable.LinkedListLike$$anon$1", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_mutable_LinkedListLike$$anon$1: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_LinkedListLike$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_mutable_LinkedListLike$$anon$1;
//@ sourceMappingURL=LinkedListLike$$anon$1.js.map
