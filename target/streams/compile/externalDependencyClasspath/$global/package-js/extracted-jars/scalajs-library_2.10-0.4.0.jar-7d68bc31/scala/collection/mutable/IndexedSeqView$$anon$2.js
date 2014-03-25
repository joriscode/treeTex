/** @constructor */
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2 = (function() {
  ScalaJS.c.scala_collection_mutable_IndexedSeqView$AbstractTransformed.call(this);
  this.endpoints$3 = null;
  this.$$outer$3 = null
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype = new ScalaJS.inheritable.scala_collection_mutable_IndexedSeqView$AbstractTransformed();
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.constructor = ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2;
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.length__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_IndexedSeqView$Sliced$class__length__Lscala_collection_mutable_IndexedSeqView$Sliced__I(this)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.update__I__O__V = (function(idx, elem) {
  ScalaJS.impls.scala_collection_mutable_IndexedSeqView$Sliced$class__update__Lscala_collection_mutable_IndexedSeqView$Sliced__I__O__V(this, idx, elem)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.apply__I__O = (function(idx) {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Sliced$class__apply__Lscala_collection_GenSeqViewLike$Sliced__I__O(this, idx)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_GenSeqViewLike$Sliced$class__foreach__Lscala_collection_GenSeqViewLike$Sliced__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Sliced$class__iterator__Lscala_collection_GenSeqViewLike$Sliced__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.from__I = (function() {
  return ScalaJS.impls.scala_collection_GenTraversableViewLike$Sliced$class__from__Lscala_collection_GenTraversableViewLike$Sliced__I(this)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.until__I = (function() {
  return ScalaJS.impls.scala_collection_GenTraversableViewLike$Sliced$class__until__Lscala_collection_GenTraversableViewLike$Sliced__I(this)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.viewIdentifier__T = (function() {
  return ScalaJS.impls.scala_collection_GenTraversableViewLike$Sliced$class__viewIdentifier__Lscala_collection_GenTraversableViewLike$Sliced__T(this)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.endpoints__Lscala_collection_generic_SliceInterval = (function() {
  return this.endpoints$3
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.scala$collection$mutable$IndexedSeqView$Sliced$$$outer__Lscala_collection_mutable_IndexedSeqView = (function() {
  return this.$$outer$3
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.scala$collection$GenSeqViewLike$Sliced$$$outer__Lscala_collection_GenSeqViewLike = (function() {
  return this.$$outer$3
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.scala$collection$GenIterableViewLike$Sliced$$$outer__Lscala_collection_GenIterableViewLike = (function() {
  return this.$$outer$3
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.scala$collection$GenTraversableViewLike$Sliced$$$outer__Lscala_collection_GenTraversableViewLike = (function() {
  return this.$$outer$3
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.init___Lscala_collection_mutable_IndexedSeqView__Lscala_collection_generic_SliceInterval = (function($$outer, _endpoints$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$3 = $$outer
  };
  var endpoints = _endpoints$1;
  this.endpoints$3 = endpoints;
  ScalaJS.c.scala_collection_mutable_IndexedSeqView$AbstractTransformed.prototype.init___Lscala_collection_mutable_IndexedSeqView.call(this, $$outer);
  ScalaJS.impls.scala_collection_GenTraversableViewLike$Sliced$class__$init$__Lscala_collection_GenTraversableViewLike$Sliced__V(this);
  ScalaJS.impls.scala_collection_GenIterableViewLike$Sliced$class__$init$__Lscala_collection_GenIterableViewLike$Sliced__V(this);
  ScalaJS.impls.scala_collection_GenSeqViewLike$Sliced$class__$init$__Lscala_collection_GenSeqViewLike$Sliced__V(this);
  ScalaJS.impls.scala_collection_mutable_IndexedSeqView$Sliced$class__$init$__Lscala_collection_mutable_IndexedSeqView$Sliced__V(this);
  return this
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.until__ = (function() {
  return ScalaJS.bI(this.until__I())
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.from__ = (function() {
  return ScalaJS.bI(this.from__I())
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.scala$collection$GenTraversableViewLike$Sliced$$$outer__ = (function() {
  return this.scala$collection$GenTraversableViewLike$Sliced$$$outer__Lscala_collection_GenTraversableViewLike()
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.scala$collection$GenIterableViewLike$Sliced$$$outer__ = (function() {
  return this.scala$collection$GenIterableViewLike$Sliced$$$outer__Lscala_collection_GenIterableViewLike()
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.scala$collection$GenSeqViewLike$Sliced$$$outer__ = (function() {
  return this.scala$collection$GenSeqViewLike$Sliced$$$outer__Lscala_collection_GenSeqViewLike()
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.scala$collection$mutable$IndexedSeqView$Sliced$$$outer__ = (function() {
  return this.scala$collection$mutable$IndexedSeqView$Sliced$$$outer__Lscala_collection_mutable_IndexedSeqView()
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.endpoints__ = (function() {
  return this.endpoints__Lscala_collection_generic_SliceInterval()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_IndexedSeqView$$anon$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_IndexedSeqView$$anon$2.prototype = ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype;
ScalaJS.is.scala_collection_mutable_IndexedSeqView$$anon$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_IndexedSeqView$$anon$2)))
});
ScalaJS.as.scala_collection_mutable_IndexedSeqView$$anon$2 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_IndexedSeqView$$anon$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.IndexedSeqView$$anon$2")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_IndexedSeqView$$anon$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_IndexedSeqView$$anon$2)))
});
ScalaJS.asArrayOf.scala_collection_mutable_IndexedSeqView$$anon$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_IndexedSeqView$$anon$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.IndexedSeqView$$anon$2;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_IndexedSeqView$$anon$2 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_IndexedSeqView$$anon$2: 0
}, false, "scala.collection.mutable.IndexedSeqView$$anon$2", ScalaJS.data.scala_collection_mutable_IndexedSeqView$AbstractTransformed, {
  scala_collection_mutable_IndexedSeqView$$anon$2: 1,
  scala_collection_mutable_IndexedSeqView$Sliced: 1,
  scala_collection_SeqViewLike$Sliced: 1,
  scala_collection_GenSeqViewLike$Sliced: 1,
  scala_collection_IterableViewLike$Sliced: 1,
  scala_collection_GenIterableViewLike$Sliced: 1,
  scala_collection_TraversableViewLike$Sliced: 1,
  scala_collection_GenTraversableViewLike$Sliced: 1,
  scala_collection_mutable_IndexedSeqView$AbstractTransformed: 1,
  scala_collection_mutable_IndexedSeqView$Transformed: 1,
  scala_collection_mutable_IndexedSeqView: 1,
  scala_collection_mutable_IndexedSeqOptimized: 1,
  scala_collection_IndexedSeqOptimized: 1,
  scala_collection_mutable_IndexedSeq: 1,
  scala_collection_mutable_IndexedSeqLike: 1,
  scala_collection_IndexedSeq: 1,
  scala_collection_IndexedSeqLike: 1,
  scala_collection_mutable_Seq: 1,
  scala_collection_mutable_SeqLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
  scala_collection_SeqViewLike$AbstractTransformed: 1,
  scala_collection_SeqViewLike$Transformed: 1,
  scala_collection_GenSeqViewLike$Transformed: 1,
  scala_collection_SeqView: 1,
  scala_collection_GenSeqView: 1,
  scala_collection_SeqViewLike: 1,
  scala_collection_GenSeqViewLike: 1,
  scala_collection_IterableViewLike$Transformed: 1,
  scala_collection_GenIterableViewLike$Transformed: 1,
  scala_collection_TraversableViewLike$Transformed: 1,
  scala_collection_GenTraversableViewLike$Transformed: 1,
  scala_collection_IterableView: 1,
  scala_collection_GenIterableView: 1,
  scala_collection_IterableViewLike: 1,
  scala_collection_GenIterableViewLike: 1,
  scala_collection_TraversableView: 1,
  scala_collection_GenTraversableView: 1,
  scala_collection_TraversableViewLike: 1,
  scala_collection_GenTraversableViewLike: 1,
  scala_collection_ViewMkString: 1,
  scala_collection_Seq: 1,
  scala_collection_SeqLike: 1,
  scala_collection_GenSeq: 1,
  scala_collection_GenSeqLike: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
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
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2.prototype.$classData = ScalaJS.data.scala_collection_mutable_IndexedSeqView$$anon$2;
//@ sourceMappingURL=IndexedSeqView$$anon$2.js.map
