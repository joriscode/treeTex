/** @constructor */
ScalaJS.c.scala_collection_IndexedSeqOptimized$$anon$1 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.i$2 = 0;
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_IndexedSeqOptimized$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_IndexedSeqOptimized$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_IndexedSeqOptimized$$anon$1;
ScalaJS.c.scala_collection_IndexedSeqOptimized$$anon$1.prototype.i__p2__I = (function() {
  return this.i$2
});
ScalaJS.c.scala_collection_IndexedSeqOptimized$$anon$1.prototype.i$und$eq__p2__I__V = (function(x$1) {
  this.i$2 = x$1
});
ScalaJS.c.scala_collection_IndexedSeqOptimized$$anon$1.prototype.hasNext__Z = (function() {
  return (0 < this.i__p2__I())
});
ScalaJS.c.scala_collection_IndexedSeqOptimized$$anon$1.prototype.next__O = (function() {
  if ((0 < this.i__p2__I())) {
    this.i$und$eq__p2__I__V((this.i__p2__I() - 1));
    return this.$$outer$2.apply__I__O(this.i__p2__I())
  } else {
    return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O()
  }
});
ScalaJS.c.scala_collection_IndexedSeqOptimized$$anon$1.prototype.init___Lscala_collection_IndexedSeqOptimized = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.i$2 = $$outer.length__I();
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_IndexedSeqOptimized$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_IndexedSeqOptimized$$anon$1.prototype = ScalaJS.c.scala_collection_IndexedSeqOptimized$$anon$1.prototype;
ScalaJS.is.scala_collection_IndexedSeqOptimized$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_IndexedSeqOptimized$$anon$1)))
});
ScalaJS.as.scala_collection_IndexedSeqOptimized$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_IndexedSeqOptimized$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.IndexedSeqOptimized$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_IndexedSeqOptimized$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_IndexedSeqOptimized$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_IndexedSeqOptimized$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_IndexedSeqOptimized$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.IndexedSeqOptimized$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_IndexedSeqOptimized$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_IndexedSeqOptimized$$anon$1: 0
}, false, "scala.collection.IndexedSeqOptimized$$anon$1", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_IndexedSeqOptimized$$anon$1: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_IndexedSeqOptimized$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_IndexedSeqOptimized$$anon$1;
//@ sourceMappingURL=IndexedSeqOptimized$$anon$1.js.map
