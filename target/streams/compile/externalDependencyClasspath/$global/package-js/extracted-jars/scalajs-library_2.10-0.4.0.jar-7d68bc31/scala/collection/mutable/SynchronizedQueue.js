/** @constructor */
ScalaJS.c.scala_collection_mutable_SynchronizedQueue = (function() {
  ScalaJS.c.scala_collection_mutable_Queue.call(this)
});
ScalaJS.c.scala_collection_mutable_SynchronizedQueue.prototype = new ScalaJS.inheritable.scala_collection_mutable_Queue();
ScalaJS.c.scala_collection_mutable_SynchronizedQueue.prototype.constructor = ScalaJS.c.scala_collection_mutable_SynchronizedQueue;
ScalaJS.c.scala_collection_mutable_SynchronizedQueue.prototype.isEmpty__Z = (function() {
  return ScalaJS.c.scala_collection_mutable_MutableList.prototype.isEmpty__Z.call(this)
});
ScalaJS.c.scala_collection_mutable_SynchronizedQueue.prototype.$$plus$eq__O__Lscala_collection_mutable_SynchronizedQueue = (function(elem) {
  return ScalaJS.as.scala_collection_mutable_SynchronizedQueue(ScalaJS.c.scala_collection_mutable_MutableList.prototype.$$plus$eq__O__Lscala_collection_mutable_MutableList.call(this, elem))
});
ScalaJS.c.scala_collection_mutable_SynchronizedQueue.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_SynchronizedQueue = (function(xs) {
  return ScalaJS.as.scala_collection_mutable_SynchronizedQueue(ScalaJS.impls.scala_collection_generic_Growable$class__$plus$plus$eq__Lscala_collection_generic_Growable__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this, xs))
});
ScalaJS.c.scala_collection_mutable_SynchronizedQueue.prototype.enqueue__Lscala_collection_Seq__V = (function(elems) {
  ScalaJS.impls.scala_collection_generic_Growable$class__$plus$plus$eq__Lscala_collection_generic_Growable__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this, elems)
});
ScalaJS.c.scala_collection_mutable_SynchronizedQueue.prototype.dequeue__O = (function() {
  return ScalaJS.c.scala_collection_mutable_Queue.prototype.dequeue__O.call(this)
});
ScalaJS.c.scala_collection_mutable_SynchronizedQueue.prototype.dequeueFirst__Lscala_Function1__Lscala_Option = (function(p) {
  return ScalaJS.c.scala_collection_mutable_Queue.prototype.dequeueFirst__Lscala_Function1__Lscala_Option.call(this, p)
});
ScalaJS.c.scala_collection_mutable_SynchronizedQueue.prototype.dequeueAll__Lscala_Function1__Lscala_collection_mutable_Seq = (function(p) {
  return ScalaJS.c.scala_collection_mutable_Queue.prototype.dequeueAll__Lscala_Function1__Lscala_collection_mutable_Seq.call(this, p)
});
ScalaJS.c.scala_collection_mutable_SynchronizedQueue.prototype.front__O = (function() {
  return ScalaJS.c.scala_collection_mutable_Queue.prototype.front__O.call(this)
});
ScalaJS.c.scala_collection_mutable_SynchronizedQueue.prototype.clear__V = (function() {
  ScalaJS.c.scala_collection_mutable_MutableList.prototype.clear__V.call(this)
});
ScalaJS.c.scala_collection_mutable_SynchronizedQueue.prototype.equals__O__Z = (function(that) {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__equals__Lscala_collection_GenSeqLike__O__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_SynchronizedQueue.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__toString__Lscala_collection_SeqLike__T(this)
});
ScalaJS.c.scala_collection_mutable_SynchronizedQueue.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable = (function(xs) {
  return this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_SynchronizedQueue(xs)
});
ScalaJS.c.scala_collection_mutable_SynchronizedQueue.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_SynchronizedQueue(elem)
});
ScalaJS.c.scala_collection_mutable_SynchronizedQueue.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_SynchronizedQueue(elem)
});
ScalaJS.c.scala_collection_mutable_SynchronizedQueue.prototype.$$plus$eq__O__Lscala_collection_mutable_MutableList = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_SynchronizedQueue(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_SynchronizedQueue = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_SynchronizedQueue.prototype = ScalaJS.c.scala_collection_mutable_SynchronizedQueue.prototype;
ScalaJS.is.scala_collection_mutable_SynchronizedQueue = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_SynchronizedQueue)))
});
ScalaJS.as.scala_collection_mutable_SynchronizedQueue = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_SynchronizedQueue(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.SynchronizedQueue")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_SynchronizedQueue = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_SynchronizedQueue)))
});
ScalaJS.asArrayOf.scala_collection_mutable_SynchronizedQueue = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_SynchronizedQueue(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.SynchronizedQueue;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_SynchronizedQueue = new ScalaJS.ClassTypeData({
  scala_collection_mutable_SynchronizedQueue: 0
}, false, "scala.collection.mutable.SynchronizedQueue", ScalaJS.data.scala_collection_mutable_Queue, {
  scala_collection_mutable_SynchronizedQueue: 1,
  scala_collection_mutable_Queue: 1,
  scala_collection_mutable_MutableList: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  scala_collection_LinearSeqOptimized: 1,
  scala_collection_mutable_LinearSeq: 1,
  scala_collection_LinearSeq: 1,
  scala_collection_LinearSeqLike: 1,
  scala_collection_mutable_AbstractSeq: 1,
  scala_collection_mutable_Seq: 1,
  scala_collection_mutable_SeqLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
  scala_collection_AbstractSeq: 1,
  scala_collection_Seq: 1,
  scala_collection_SeqLike: 1,
  scala_collection_GenSeq: 1,
  scala_collection_GenSeqLike: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
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
ScalaJS.c.scala_collection_mutable_SynchronizedQueue.prototype.$classData = ScalaJS.data.scala_collection_mutable_SynchronizedQueue;
//@ sourceMappingURL=SynchronizedQueue.js.map
