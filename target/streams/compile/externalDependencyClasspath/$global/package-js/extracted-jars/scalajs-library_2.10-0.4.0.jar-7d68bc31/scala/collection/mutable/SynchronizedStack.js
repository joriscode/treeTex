/** @constructor */
ScalaJS.c.scala_collection_mutable_SynchronizedStack = (function() {
  ScalaJS.c.scala_collection_mutable_Stack.call(this)
});
ScalaJS.c.scala_collection_mutable_SynchronizedStack.prototype = new ScalaJS.inheritable.scala_collection_mutable_Stack();
ScalaJS.c.scala_collection_mutable_SynchronizedStack.prototype.constructor = ScalaJS.c.scala_collection_mutable_SynchronizedStack;
ScalaJS.c.scala_collection_mutable_SynchronizedStack.prototype.isEmpty__Z = (function() {
  return ScalaJS.c.scala_collection_mutable_Stack.prototype.isEmpty__Z.call(this)
});
ScalaJS.c.scala_collection_mutable_SynchronizedStack.prototype.push__O__Lscala_collection_mutable_SynchronizedStack = (function(elem) {
  return ScalaJS.as.scala_collection_mutable_SynchronizedStack(ScalaJS.c.scala_collection_mutable_Stack.prototype.push__O__Lscala_collection_mutable_Stack.call(this, elem))
});
ScalaJS.c.scala_collection_mutable_SynchronizedStack.prototype.push__O__O__Lscala_collection_Seq__Lscala_collection_mutable_SynchronizedStack = (function(elem1, elem2, elems) {
  return ScalaJS.as.scala_collection_mutable_SynchronizedStack(ScalaJS.c.scala_collection_mutable_Stack.prototype.push__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Stack.call(this, elem1, elem2, elems))
});
ScalaJS.c.scala_collection_mutable_SynchronizedStack.prototype.pushAll__Lscala_collection_TraversableOnce__Lscala_collection_mutable_SynchronizedStack = (function(xs) {
  return ScalaJS.as.scala_collection_mutable_SynchronizedStack(ScalaJS.c.scala_collection_mutable_Stack.prototype.pushAll__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Stack.call(this, this.elems__Lscala_collection_immutable_List()))
});
ScalaJS.c.scala_collection_mutable_SynchronizedStack.prototype.top__O = (function() {
  return ScalaJS.c.scala_collection_mutable_Stack.prototype.top__O.call(this)
});
ScalaJS.c.scala_collection_mutable_SynchronizedStack.prototype.pop__O = (function() {
  return ScalaJS.c.scala_collection_mutable_Stack.prototype.pop__O.call(this)
});
ScalaJS.c.scala_collection_mutable_SynchronizedStack.prototype.clear__V = (function() {
  ScalaJS.c.scala_collection_mutable_Stack.prototype.clear__V.call(this)
});
ScalaJS.c.scala_collection_mutable_SynchronizedStack.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.c.scala_collection_mutable_Stack.prototype.iterator__Lscala_collection_Iterator.call(this)
});
ScalaJS.c.scala_collection_mutable_SynchronizedStack.prototype.toList__Lscala_collection_immutable_List = (function() {
  return ScalaJS.c.scala_collection_mutable_Stack.prototype.toList__Lscala_collection_immutable_List.call(this)
});
ScalaJS.c.scala_collection_mutable_SynchronizedStack.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__toString__Lscala_collection_SeqLike__T(this)
});
ScalaJS.c.scala_collection_mutable_SynchronizedStack.prototype.pushAll__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Stack = (function(xs) {
  return this.pushAll__Lscala_collection_TraversableOnce__Lscala_collection_mutable_SynchronizedStack(xs)
});
ScalaJS.c.scala_collection_mutable_SynchronizedStack.prototype.push__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Stack = (function(elem1, elem2, elems) {
  return this.push__O__O__Lscala_collection_Seq__Lscala_collection_mutable_SynchronizedStack(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_SynchronizedStack.prototype.push__O__Lscala_collection_mutable_Stack = (function(elem) {
  return this.push__O__Lscala_collection_mutable_SynchronizedStack(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_SynchronizedStack = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_SynchronizedStack.prototype = ScalaJS.c.scala_collection_mutable_SynchronizedStack.prototype;
ScalaJS.is.scala_collection_mutable_SynchronizedStack = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_SynchronizedStack)))
});
ScalaJS.as.scala_collection_mutable_SynchronizedStack = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_SynchronizedStack(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.SynchronizedStack")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_SynchronizedStack = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_SynchronizedStack)))
});
ScalaJS.asArrayOf.scala_collection_mutable_SynchronizedStack = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_SynchronizedStack(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.SynchronizedStack;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_SynchronizedStack = new ScalaJS.ClassTypeData({
  scala_collection_mutable_SynchronizedStack: 0
}, false, "scala.collection.mutable.SynchronizedStack", ScalaJS.data.scala_collection_mutable_Stack, {
  scala_collection_mutable_SynchronizedStack: 1,
  scala_collection_mutable_Stack: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
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
ScalaJS.c.scala_collection_mutable_SynchronizedStack.prototype.$classData = ScalaJS.data.scala_collection_mutable_SynchronizedStack;
//@ sourceMappingURL=SynchronizedStack.js.map
