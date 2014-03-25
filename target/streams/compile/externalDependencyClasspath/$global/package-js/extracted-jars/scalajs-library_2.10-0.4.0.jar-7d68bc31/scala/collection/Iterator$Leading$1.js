/** @constructor */
ScalaJS.c.scala_collection_Iterator$Leading$1 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.isDone$2 = false;
  this.lookahead$2 = null;
  this.$$outer$f = null;
  this.self$3$2 = null;
  this.p$5$2 = null
});
ScalaJS.c.scala_collection_Iterator$Leading$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$Leading$1.prototype.constructor = ScalaJS.c.scala_collection_Iterator$Leading$1;
ScalaJS.c.scala_collection_Iterator$Leading$1.prototype.isDone__p2__Z = (function() {
  return this.isDone$2
});
ScalaJS.c.scala_collection_Iterator$Leading$1.prototype.isDone$und$eq__p2__Z__V = (function(x$1) {
  this.isDone$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$Leading$1.prototype.lookahead__Lscala_collection_mutable_Queue = (function() {
  return this.lookahead$2
});
ScalaJS.c.scala_collection_Iterator$Leading$1.prototype.advance__Z = (function() {
  if ((this.self$3$2.hasNext__Z() && ScalaJS.uZ(this.p$5$2.apply__O__O(this.self$3$2.head__O())))) {
    this.lookahead__Lscala_collection_mutable_Queue().$$plus$eq__O__Lscala_collection_mutable_MutableList(this.self$3$2.next__O());
    return true
  } else {
    return false
  }
});
ScalaJS.c.scala_collection_Iterator$Leading$1.prototype.finish__V = (function() {
  while (this.advance__Z()) {
    /*<skip>*/
  };
  this.isDone$und$eq__p2__Z__V(true)
});
ScalaJS.c.scala_collection_Iterator$Leading$1.prototype.hasNext__Z = (function() {
  return (this.lookahead__Lscala_collection_mutable_Queue().nonEmpty__Z() || this.advance__Z())
});
ScalaJS.c.scala_collection_Iterator$Leading$1.prototype.next__O = (function() {
  if (this.lookahead__Lscala_collection_mutable_Queue().isEmpty__Z()) {
    ScalaJS.bZ(this.advance__Z())
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  return this.lookahead__Lscala_collection_mutable_Queue().dequeue__O()
});
ScalaJS.c.scala_collection_Iterator$Leading$1.prototype.scala$collection$Iterator$Leading$$$outer__Lscala_collection_Iterator = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_Iterator$Leading$1.prototype.init___Lscala_collection_Iterator__Lscala_collection_BufferedIterator__Lscala_Function1 = (function($$outer, self$3, p$5) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  this.self$3$2 = self$3;
  this.p$5$2 = p$5;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.isDone$2 = false;
  this.lookahead$2 = new ScalaJS.c.scala_collection_mutable_Queue().init___();
  return this
});
ScalaJS.c.scala_collection_Iterator$Leading$1.prototype.scala$collection$Iterator$Leading$$$outer__ = (function() {
  return this.scala$collection$Iterator$Leading$$$outer__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_Iterator$Leading$1.prototype.finish__ = (function() {
  return ScalaJS.bV(this.finish__V())
});
ScalaJS.c.scala_collection_Iterator$Leading$1.prototype.advance__ = (function() {
  return ScalaJS.bZ(this.advance__Z())
});
ScalaJS.c.scala_collection_Iterator$Leading$1.prototype.lookahead__ = (function() {
  return this.lookahead__Lscala_collection_mutable_Queue()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$Leading$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$Leading$1.prototype = ScalaJS.c.scala_collection_Iterator$Leading$1.prototype;
ScalaJS.is.scala_collection_Iterator$Leading$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$Leading$1)))
});
ScalaJS.as.scala_collection_Iterator$Leading$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$Leading$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$Leading$1")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$Leading$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$Leading$1)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$Leading$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$Leading$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$Leading$1;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$Leading$1 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$Leading$1: 0
}, false, "scala.collection.Iterator$Leading$1", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$Leading$1: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$Leading$1.prototype.$classData = ScalaJS.data.scala_collection_Iterator$Leading$1;
//@ sourceMappingURL=Iterator$Leading$1.js.map
