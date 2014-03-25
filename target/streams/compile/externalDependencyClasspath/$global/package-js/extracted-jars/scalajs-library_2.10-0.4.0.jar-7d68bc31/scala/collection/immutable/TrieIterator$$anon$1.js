/** @constructor */
ScalaJS.c.scala_collection_immutable_TrieIterator$$anon$1 = (function() {
  ScalaJS.c.scala_collection_immutable_TrieIterator.call(this);
  this.$$outer$3 = null
});
ScalaJS.c.scala_collection_immutable_TrieIterator$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_immutable_TrieIterator();
ScalaJS.c.scala_collection_immutable_TrieIterator$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_immutable_TrieIterator$$anon$1;
ScalaJS.c.scala_collection_immutable_TrieIterator$$anon$1.prototype.getElem__O__O = (function(x) {
  return this.$$outer$3.getElem__O__O(x)
});
ScalaJS.c.scala_collection_immutable_TrieIterator$$anon$1.prototype.init___Lscala_collection_immutable_TrieIterator__ALscala_collection_immutable_Iterable = (function($$outer, xs$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$3 = $$outer
  };
  ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.init___ALscala_collection_immutable_Iterable.call(this, xs$1);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_TrieIterator$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_TrieIterator$$anon$1.prototype = ScalaJS.c.scala_collection_immutable_TrieIterator$$anon$1.prototype;
ScalaJS.is.scala_collection_immutable_TrieIterator$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_TrieIterator$$anon$1)))
});
ScalaJS.as.scala_collection_immutable_TrieIterator$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_TrieIterator$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.TrieIterator$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_TrieIterator$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_TrieIterator$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_immutable_TrieIterator$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_TrieIterator$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.TrieIterator$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_TrieIterator$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_immutable_TrieIterator$$anon$1: 0
}, false, "scala.collection.immutable.TrieIterator$$anon$1", ScalaJS.data.scala_collection_immutable_TrieIterator, {
  scala_collection_immutable_TrieIterator$$anon$1: 1,
  scala_collection_immutable_TrieIterator: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_TrieIterator$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_immutable_TrieIterator$$anon$1;
//@ sourceMappingURL=TrieIterator$$anon$1.js.map
