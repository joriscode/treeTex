/** @constructor */
ScalaJS.c.scala_collection_Iterator$PartitionIterator$1 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.p$2 = null;
  this.other$2 = null;
  this.lookahead$2 = null;
  this.$$outer$f = null;
  this.self$2$2 = null
});
ScalaJS.c.scala_collection_Iterator$PartitionIterator$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$PartitionIterator$1.prototype.constructor = ScalaJS.c.scala_collection_Iterator$PartitionIterator$1;
ScalaJS.c.scala_collection_Iterator$PartitionIterator$1.prototype.other__Lscala_collection_Iterator$PartitionIterator$1 = (function() {
  return this.other$2
});
ScalaJS.c.scala_collection_Iterator$PartitionIterator$1.prototype.other$und$eq__Lscala_collection_Iterator$PartitionIterator$1__V = (function(x$1) {
  this.other$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$PartitionIterator$1.prototype.lookahead__Lscala_collection_mutable_Queue = (function() {
  return this.lookahead$2
});
ScalaJS.c.scala_collection_Iterator$PartitionIterator$1.prototype.skip__V = (function() {
  while ((this.self$2$2.hasNext__Z() && (!ScalaJS.uZ(this.p$2.apply__O__O(this.self$2$2.head__O()))))) {
    this.other__Lscala_collection_Iterator$PartitionIterator$1().lookahead__Lscala_collection_mutable_Queue().$$plus$eq__O__Lscala_collection_mutable_MutableList(this.self$2$2.next__O())
  }
});
ScalaJS.c.scala_collection_Iterator$PartitionIterator$1.prototype.hasNext__Z = (function() {
  if ((!this.lookahead__Lscala_collection_mutable_Queue().isEmpty__Z())) {
    return true
  } else {
    this.skip__V();
    return this.self$2$2.hasNext__Z()
  }
});
ScalaJS.c.scala_collection_Iterator$PartitionIterator$1.prototype.next__O = (function() {
  if ((!this.lookahead__Lscala_collection_mutable_Queue().isEmpty__Z())) {
    return this.lookahead__Lscala_collection_mutable_Queue().dequeue__O()
  } else {
    this.skip__V();
    return this.self$2$2.next__O()
  }
});
ScalaJS.c.scala_collection_Iterator$PartitionIterator$1.prototype.scala$collection$Iterator$PartitionIterator$$$outer__Lscala_collection_Iterator = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_Iterator$PartitionIterator$1.prototype.init___Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_BufferedIterator = (function($$outer, p, self$2) {
  this.p$2 = p;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  this.self$2$2 = self$2;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.lookahead$2 = new ScalaJS.c.scala_collection_mutable_Queue().init___();
  return this
});
ScalaJS.c.scala_collection_Iterator$PartitionIterator$1.prototype.scala$collection$Iterator$PartitionIterator$$$outer__ = (function() {
  return this.scala$collection$Iterator$PartitionIterator$$$outer__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_Iterator$PartitionIterator$1.prototype.skip__ = (function() {
  return ScalaJS.bV(this.skip__V())
});
ScalaJS.c.scala_collection_Iterator$PartitionIterator$1.prototype.lookahead__ = (function() {
  return this.lookahead__Lscala_collection_mutable_Queue()
});
ScalaJS.c.scala_collection_Iterator$PartitionIterator$1.prototype.other$und$eq__Lscala_collection_Iterator$PartitionIterator$1__ = (function(x$1) {
  return ScalaJS.bV(this.other$und$eq__Lscala_collection_Iterator$PartitionIterator$1__V(x$1))
});
ScalaJS.c.scala_collection_Iterator$PartitionIterator$1.prototype.other__ = (function() {
  return this.other__Lscala_collection_Iterator$PartitionIterator$1()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$PartitionIterator$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$PartitionIterator$1.prototype = ScalaJS.c.scala_collection_Iterator$PartitionIterator$1.prototype;
ScalaJS.is.scala_collection_Iterator$PartitionIterator$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$PartitionIterator$1)))
});
ScalaJS.as.scala_collection_Iterator$PartitionIterator$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$PartitionIterator$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$PartitionIterator$1")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$PartitionIterator$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$PartitionIterator$1)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$PartitionIterator$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$PartitionIterator$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$PartitionIterator$1;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$PartitionIterator$1 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$PartitionIterator$1: 0
}, false, "scala.collection.Iterator$PartitionIterator$1", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$PartitionIterator$1: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$PartitionIterator$1.prototype.$classData = ScalaJS.data.scala_collection_Iterator$PartitionIterator$1;
//@ sourceMappingURL=Iterator$PartitionIterator$1.js.map
