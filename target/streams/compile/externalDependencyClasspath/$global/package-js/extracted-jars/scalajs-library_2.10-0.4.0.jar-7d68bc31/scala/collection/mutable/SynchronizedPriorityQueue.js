/** @constructor */
ScalaJS.c.scala_collection_mutable_SynchronizedPriorityQueue = (function() {
  ScalaJS.c.scala_collection_mutable_PriorityQueue.call(this)
});
ScalaJS.c.scala_collection_mutable_SynchronizedPriorityQueue.prototype = new ScalaJS.inheritable.scala_collection_mutable_PriorityQueue();
ScalaJS.c.scala_collection_mutable_SynchronizedPriorityQueue.prototype.constructor = ScalaJS.c.scala_collection_mutable_SynchronizedPriorityQueue;
ScalaJS.c.scala_collection_mutable_SynchronizedPriorityQueue.prototype.isEmpty__Z = (function() {
  return ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.isEmpty__Z.call(this)
});
ScalaJS.c.scala_collection_mutable_SynchronizedPriorityQueue.prototype.$$plus$eq__O__Lscala_collection_mutable_SynchronizedPriorityQueue = (function(elem) {
  ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.$$plus$eq__O__Lscala_collection_mutable_PriorityQueue.call(this, elem);
  return this
});
ScalaJS.c.scala_collection_mutable_SynchronizedPriorityQueue.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_SynchronizedPriorityQueue = (function(xs) {
  ScalaJS.impls.scala_collection_generic_Growable$class__$plus$plus$eq__Lscala_collection_generic_Growable__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this, xs);
  return this
});
ScalaJS.c.scala_collection_mutable_SynchronizedPriorityQueue.prototype.enqueue__Lscala_collection_Seq__V = (function(elems) {
  ScalaJS.impls.scala_collection_generic_Growable$class__$plus$plus$eq__Lscala_collection_generic_Growable__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this, elems)
});
ScalaJS.c.scala_collection_mutable_SynchronizedPriorityQueue.prototype.dequeue__O = (function() {
  return ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.dequeue__O.call(this)
});
ScalaJS.c.scala_collection_mutable_SynchronizedPriorityQueue.prototype.head__O = (function() {
  return ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.head__O.call(this)
});
ScalaJS.c.scala_collection_mutable_SynchronizedPriorityQueue.prototype.max__O = (function() {
  return ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.max__O.call(this)
});
ScalaJS.c.scala_collection_mutable_SynchronizedPriorityQueue.prototype.clear__V = (function() {
  ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.clear__V.call(this)
});
ScalaJS.c.scala_collection_mutable_SynchronizedPriorityQueue.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.iterator__Lscala_collection_Iterator.call(this)
});
ScalaJS.c.scala_collection_mutable_SynchronizedPriorityQueue.prototype.equals__O__Z = (function(that) {
  return ScalaJS.c.java_lang_Object.prototype.equals__O__Z.call(this, that)
});
ScalaJS.c.scala_collection_mutable_SynchronizedPriorityQueue.prototype.toString__T = (function() {
  return ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.toString__T.call(this)
});
ScalaJS.c.scala_collection_mutable_SynchronizedPriorityQueue.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable = (function(xs) {
  return this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_SynchronizedPriorityQueue(xs)
});
ScalaJS.c.scala_collection_mutable_SynchronizedPriorityQueue.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_SynchronizedPriorityQueue(elem)
});
ScalaJS.c.scala_collection_mutable_SynchronizedPriorityQueue.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_SynchronizedPriorityQueue(elem)
});
ScalaJS.c.scala_collection_mutable_SynchronizedPriorityQueue.prototype.$$plus$eq__O__Lscala_collection_mutable_PriorityQueue = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_SynchronizedPriorityQueue(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_SynchronizedPriorityQueue = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_SynchronizedPriorityQueue.prototype = ScalaJS.c.scala_collection_mutable_SynchronizedPriorityQueue.prototype;
ScalaJS.is.scala_collection_mutable_SynchronizedPriorityQueue = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_SynchronizedPriorityQueue)))
});
ScalaJS.as.scala_collection_mutable_SynchronizedPriorityQueue = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_SynchronizedPriorityQueue(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.SynchronizedPriorityQueue")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_SynchronizedPriorityQueue = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_SynchronizedPriorityQueue)))
});
ScalaJS.asArrayOf.scala_collection_mutable_SynchronizedPriorityQueue = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_SynchronizedPriorityQueue(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.SynchronizedPriorityQueue;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_SynchronizedPriorityQueue = new ScalaJS.ClassTypeData({
  scala_collection_mutable_SynchronizedPriorityQueue: 0
}, false, "scala.collection.mutable.SynchronizedPriorityQueue", ScalaJS.data.scala_collection_mutable_PriorityQueue, {
  scala_collection_mutable_SynchronizedPriorityQueue: 1,
  scala_collection_mutable_PriorityQueue: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  scala_collection_generic_GenericOrderedTraversableTemplate: 1,
  scala_collection_mutable_AbstractIterable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
  scala_collection_AbstractIterable: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_AbstractTraversable: 1,
  scala_collection_Traversable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_TraversableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  scala_collection_generic_FilterMonadic: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_SynchronizedPriorityQueue.prototype.$classData = ScalaJS.data.scala_collection_mutable_SynchronizedPriorityQueue;
//@ sourceMappingURL=SynchronizedPriorityQueue.js.map
