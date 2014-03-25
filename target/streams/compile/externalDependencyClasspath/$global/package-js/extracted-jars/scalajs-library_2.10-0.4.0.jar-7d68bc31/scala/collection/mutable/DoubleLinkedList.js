/** @constructor */
ScalaJS.c.scala_collection_mutable_DoubleLinkedList = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractSeq.call(this);
  this.prev$5 = null;
  this.elem$5 = null;
  this.next$5 = null
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractSeq();
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.constructor = ScalaJS.c.scala_collection_mutable_DoubleLinkedList;
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.prev__Lscala_collection_mutable_Seq = (function() {
  return this.prev$5
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.prev$und$eq__Lscala_collection_mutable_Seq__V = (function(x$1) {
  this.prev$5 = x$1
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.scala$collection$mutable$DoubleLinkedListLike$$super$insert__Lscala_collection_mutable_Seq__V = (function(that) {
  ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__insert__Lscala_collection_mutable_LinkedListLike__Lscala_collection_mutable_Seq__V(this, that)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.append__Lscala_collection_mutable_Seq__Lscala_collection_mutable_Seq = (function(that) {
  return ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__append__Lscala_collection_mutable_DoubleLinkedListLike__Lscala_collection_mutable_Seq__Lscala_collection_mutable_Seq(this, that)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.insert__Lscala_collection_mutable_Seq__V = (function(that) {
  ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__insert__Lscala_collection_mutable_DoubleLinkedListLike__Lscala_collection_mutable_Seq__V(this, that)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.remove__V = (function() {
  ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__remove__Lscala_collection_mutable_DoubleLinkedListLike__V(this)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.drop__I__Lscala_collection_mutable_Seq = (function(n) {
  return ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__drop__Lscala_collection_mutable_DoubleLinkedListLike__I__Lscala_collection_mutable_Seq(this, n)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.tail__Lscala_collection_mutable_Seq = (function() {
  return ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__tail__Lscala_collection_mutable_DoubleLinkedListLike__Lscala_collection_mutable_Seq(this)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.apply__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__apply__Lscala_collection_mutable_DoubleLinkedListLike__I__O(this, n)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.update__I__O__V = (function(n, x) {
  ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__update__Lscala_collection_mutable_DoubleLinkedListLike__I__O__V(this, n, x)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.get__I__Lscala_Option = (function(n) {
  return ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__get__Lscala_collection_mutable_DoubleLinkedListLike__I__Lscala_Option(this, n)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.elem__O = (function() {
  return this.elem$5
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.elem$und$eq__O__V = (function(x$1) {
  this.elem$5 = x$1
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.next__Lscala_collection_mutable_Seq = (function() {
  return this.next$5
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.next$und$eq__Lscala_collection_mutable_Seq__V = (function(x$1) {
  this.next$5 = x$1
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.isEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__isEmpty__Lscala_collection_mutable_LinkedListLike__Z(this)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.length__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__length__Lscala_collection_mutable_LinkedListLike__I(this)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.head__O = (function() {
  return ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__head__Lscala_collection_mutable_LinkedListLike__O(this)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__iterator__Lscala_collection_mutable_LinkedListLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__foreach__Lscala_collection_mutable_LinkedListLike__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.seq__Lscala_collection_mutable_LinearSeq = (function() {
  return ScalaJS.impls.scala_collection_mutable_LinearSeq$class__seq__Lscala_collection_mutable_LinearSeq__Lscala_collection_mutable_LinearSeq(this)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.thisCollection__Lscala_collection_LinearSeq = (function() {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__thisCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(this)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq = (function(repr) {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(this, repr)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__hashCode__Lscala_collection_LinearSeqLike__I(this)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.corresponds__Lscala_collection_GenSeq__Lscala_Function2__Z = (function(that, p) {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__corresponds__Lscala_collection_LinearSeqLike__Lscala_collection_GenSeq__Lscala_Function2__Z(this, that, p)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.modules.scala_collection_mutable_DoubleLinkedList()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.clone__Lscala_collection_mutable_DoubleLinkedList = (function() {
  var builder = this.newBuilder__Lscala_collection_mutable_Builder();
  builder.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this);
  return ScalaJS.as.scala_collection_mutable_DoubleLinkedList(builder.result__O())
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Seq(repr)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Seq(repr)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.thisCollection__Lscala_collection_Seq = (function() {
  return this.thisCollection__Lscala_collection_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_mutable_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_mutable_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_mutable_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_mutable_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.seq__Lscala_collection_mutable_Traversable = (function() {
  return this.seq__Lscala_collection_mutable_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.seq__Lscala_collection_mutable_Iterable = (function() {
  return this.seq__Lscala_collection_mutable_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.seq__Lscala_collection_mutable_Seq = (function() {
  return this.seq__Lscala_collection_mutable_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.seq__Lscala_collection_LinearSeq = (function() {
  return this.seq__Lscala_collection_mutable_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.tail__O = (function() {
  return this.tail__Lscala_collection_mutable_Seq()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.drop__I__O = (function(n) {
  return this.drop__I__Lscala_collection_mutable_Seq(n)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_DoubleLinkedList()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.clone__Lscala_collection_mutable_Seq = (function() {
  return this.clone__Lscala_collection_mutable_DoubleLinkedList()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_LinearSeqLike$class__$init$__Lscala_collection_LinearSeqLike__V(this);
  ScalaJS.impls.scala_collection_LinearSeq$class__$init$__Lscala_collection_LinearSeq__V(this);
  ScalaJS.impls.scala_collection_mutable_LinearSeq$class__$init$__Lscala_collection_mutable_LinearSeq__V(this);
  ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__$init$__Lscala_collection_mutable_LinkedListLike__V(this);
  ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__$init$__Lscala_collection_mutable_DoubleLinkedListLike__V(this);
  this.next$und$eq__Lscala_collection_mutable_Seq__V(this);
  return this
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.init___O__Lscala_collection_mutable_DoubleLinkedList = (function(elem, next) {
  ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.init___.call(this);
  if ((!ScalaJS.anyRefEqEq(next, null))) {
    this.elem$und$eq__O__V(elem);
    this.next$und$eq__Lscala_collection_mutable_Seq__V(next);
    ScalaJS.as.scala_collection_mutable_DoubleLinkedListLike(this.next__Lscala_collection_mutable_Seq()).prev$und$eq__Lscala_collection_mutable_Seq__V(this)
  };
  return this
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.toCollection__Lscala_collection_LinearSeqLike__ = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(repr)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.next$und$eq__Lscala_collection_mutable_Seq__ = (function(x$1) {
  return ScalaJS.bV(this.next$und$eq__Lscala_collection_mutable_Seq__V(x$1))
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.next__ = (function() {
  return this.next__Lscala_collection_mutable_Seq()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.elem$und$eq__O__ = (function(x$1$2) {
  return ScalaJS.bV(this.elem$und$eq__O__V(x$1$2))
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.elem__ = (function() {
  return this.elem__O()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.get__I__ = (function(n) {
  return this.get__I__Lscala_Option(n)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.remove__ = (function() {
  return ScalaJS.bV(this.remove__V())
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.insert__Lscala_collection_mutable_Seq__ = (function(that) {
  return ScalaJS.bV(this.insert__Lscala_collection_mutable_Seq__V(that))
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.append__Lscala_collection_mutable_Seq__ = (function(that$2) {
  return this.append__Lscala_collection_mutable_Seq__Lscala_collection_mutable_Seq(that$2)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.scala$collection$mutable$DoubleLinkedListLike$$super$insert__Lscala_collection_mutable_Seq__ = (function(that$3) {
  return ScalaJS.bV(this.scala$collection$mutable$DoubleLinkedListLike$$super$insert__Lscala_collection_mutable_Seq__V(that$3))
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.prev$und$eq__Lscala_collection_mutable_Seq__ = (function(x$1$3) {
  return ScalaJS.bV(this.prev$und$eq__Lscala_collection_mutable_Seq__V(x$1$3))
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.prev__ = (function() {
  return this.prev__Lscala_collection_mutable_Seq()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_DoubleLinkedList = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_DoubleLinkedList.prototype = ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype;
ScalaJS.is.scala_collection_mutable_DoubleLinkedList = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_DoubleLinkedList)))
});
ScalaJS.as.scala_collection_mutable_DoubleLinkedList = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_DoubleLinkedList(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.DoubleLinkedList")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_DoubleLinkedList = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_DoubleLinkedList)))
});
ScalaJS.asArrayOf.scala_collection_mutable_DoubleLinkedList = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_DoubleLinkedList(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.DoubleLinkedList;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_DoubleLinkedList = new ScalaJS.ClassTypeData({
  scala_collection_mutable_DoubleLinkedList: 0
}, false, "scala.collection.mutable.DoubleLinkedList", ScalaJS.data.scala_collection_mutable_AbstractSeq, {
  scala_collection_mutable_DoubleLinkedList: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_mutable_DoubleLinkedListLike: 1,
  scala_collection_mutable_LinkedListLike: 1,
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
ScalaJS.c.scala_collection_mutable_DoubleLinkedList.prototype.$classData = ScalaJS.data.scala_collection_mutable_DoubleLinkedList;
//@ sourceMappingURL=DoubleLinkedList.js.map
