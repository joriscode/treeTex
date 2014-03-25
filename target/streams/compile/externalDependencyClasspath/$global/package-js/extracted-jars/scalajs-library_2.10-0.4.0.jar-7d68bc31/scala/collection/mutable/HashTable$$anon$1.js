/** @constructor */
ScalaJS.c.scala_collection_mutable_HashTable$$anon$1 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.iterTable$2 = null;
  this.idx$2 = 0;
  this.es$2 = null
});
ScalaJS.c.scala_collection_mutable_HashTable$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_mutable_HashTable$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_mutable_HashTable$$anon$1;
ScalaJS.c.scala_collection_mutable_HashTable$$anon$1.prototype.iterTable__p2__ALscala_collection_mutable_HashEntry = (function() {
  return this.iterTable$2
});
ScalaJS.c.scala_collection_mutable_HashTable$$anon$1.prototype.idx__p2__I = (function() {
  return this.idx$2
});
ScalaJS.c.scala_collection_mutable_HashTable$$anon$1.prototype.idx$und$eq__p2__I__V = (function(x$1) {
  this.idx$2 = x$1
});
ScalaJS.c.scala_collection_mutable_HashTable$$anon$1.prototype.es__p2__Lscala_collection_mutable_HashEntry = (function() {
  return this.es$2
});
ScalaJS.c.scala_collection_mutable_HashTable$$anon$1.prototype.es$und$eq__p2__Lscala_collection_mutable_HashEntry__V = (function(x$1) {
  this.es$2 = x$1
});
ScalaJS.c.scala_collection_mutable_HashTable$$anon$1.prototype.hasNext__Z = (function() {
  return (!ScalaJS.anyRefEqEq(this.es__p2__Lscala_collection_mutable_HashEntry(), null))
});
ScalaJS.c.scala_collection_mutable_HashTable$$anon$1.prototype.next__Lscala_collection_mutable_HashEntry = (function() {
  var res = this.es__p2__Lscala_collection_mutable_HashEntry();
  this.es$und$eq__p2__Lscala_collection_mutable_HashEntry__V(ScalaJS.as.scala_collection_mutable_HashEntry(this.es__p2__Lscala_collection_mutable_HashEntry().next__O()));
  while ((ScalaJS.anyRefEqEq(this.es__p2__Lscala_collection_mutable_HashEntry(), null) && (this.idx__p2__I() > 0))) {
    this.idx$und$eq__p2__I__V((this.idx__p2__I() - 1));
    this.es$und$eq__p2__Lscala_collection_mutable_HashEntry__V(this.iterTable__p2__ALscala_collection_mutable_HashEntry().underlying[this.idx__p2__I()])
  };
  return res
});
ScalaJS.c.scala_collection_mutable_HashTable$$anon$1.prototype.next__O = (function() {
  return this.next__Lscala_collection_mutable_HashEntry()
});
ScalaJS.c.scala_collection_mutable_HashTable$$anon$1.prototype.init___Lscala_collection_mutable_HashTable = (function($$outer) {
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.iterTable$2 = $$outer.table__ALscala_collection_mutable_HashEntry();
  this.idx$2 = ScalaJS.impls.scala_collection_mutable_HashTable$class__scala$collection$mutable$HashTable$$lastPopulatedIndex__Lscala_collection_mutable_HashTable__I($$outer);
  this.es$2 = this.iterTable__p2__ALscala_collection_mutable_HashEntry().underlying[this.idx__p2__I()];
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_HashTable$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_HashTable$$anon$1.prototype = ScalaJS.c.scala_collection_mutable_HashTable$$anon$1.prototype;
ScalaJS.is.scala_collection_mutable_HashTable$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_HashTable$$anon$1)))
});
ScalaJS.as.scala_collection_mutable_HashTable$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_HashTable$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.HashTable$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_HashTable$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_HashTable$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_mutable_HashTable$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_HashTable$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.HashTable$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_HashTable$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_HashTable$$anon$1: 0
}, false, "scala.collection.mutable.HashTable$$anon$1", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_mutable_HashTable$$anon$1: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_HashTable$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_mutable_HashTable$$anon$1;
//@ sourceMappingURL=HashTable$$anon$1.js.map
