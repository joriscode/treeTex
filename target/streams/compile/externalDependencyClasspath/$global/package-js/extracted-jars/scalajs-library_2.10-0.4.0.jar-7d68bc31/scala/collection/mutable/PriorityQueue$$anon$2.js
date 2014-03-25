/** @constructor */
ScalaJS.c.scala_collection_mutable_PriorityQueue$$anon$2 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.i$2 = 0;
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_mutable_PriorityQueue$$anon$2.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_mutable_PriorityQueue$$anon$2.prototype.constructor = ScalaJS.c.scala_collection_mutable_PriorityQueue$$anon$2;
ScalaJS.c.scala_collection_mutable_PriorityQueue$$anon$2.prototype.i__p2__I = (function() {
  return this.i$2
});
ScalaJS.c.scala_collection_mutable_PriorityQueue$$anon$2.prototype.i$und$eq__p2__I__V = (function(x$1) {
  this.i$2 = x$1
});
ScalaJS.c.scala_collection_mutable_PriorityQueue$$anon$2.prototype.hasNext__Z = (function() {
  return (this.i__p2__I() < this.$$outer$2.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undsize0__I())
});
ScalaJS.c.scala_collection_mutable_PriorityQueue$$anon$2.prototype.next__O = (function() {
  var n = this.$$outer$2.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undarray__AO().underlying[this.i__p2__I()];
  this.i$und$eq__p2__I__V((this.i__p2__I() + 1));
  return this.$$outer$2.scala$collection$mutable$PriorityQueue$$toA__O__O(n)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue$$anon$2.prototype.init___Lscala_collection_mutable_PriorityQueue = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.i$2 = 1;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_PriorityQueue$$anon$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_PriorityQueue$$anon$2.prototype = ScalaJS.c.scala_collection_mutable_PriorityQueue$$anon$2.prototype;
ScalaJS.is.scala_collection_mutable_PriorityQueue$$anon$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_PriorityQueue$$anon$2)))
});
ScalaJS.as.scala_collection_mutable_PriorityQueue$$anon$2 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_PriorityQueue$$anon$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.PriorityQueue$$anon$2")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_PriorityQueue$$anon$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_PriorityQueue$$anon$2)))
});
ScalaJS.asArrayOf.scala_collection_mutable_PriorityQueue$$anon$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_PriorityQueue$$anon$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.PriorityQueue$$anon$2;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_PriorityQueue$$anon$2 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_PriorityQueue$$anon$2: 0
}, false, "scala.collection.mutable.PriorityQueue$$anon$2", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_mutable_PriorityQueue$$anon$2: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_PriorityQueue$$anon$2.prototype.$classData = ScalaJS.data.scala_collection_mutable_PriorityQueue$$anon$2;
//@ sourceMappingURL=PriorityQueue$$anon$2.js.map
