/** @constructor */
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$5 = (function() {
  ScalaJS.c.scala_collection_mutable_IndexedSeqView$AbstractTransformed.call(this);
  this.$$outer$3 = null
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$5.prototype = new ScalaJS.inheritable.scala_collection_mutable_IndexedSeqView$AbstractTransformed();
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$5.prototype.constructor = ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$5;
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$5.prototype.update__I__O__V = (function(idx, elem) {
  ScalaJS.impls.scala_collection_mutable_IndexedSeqView$Reversed$class__update__Lscala_collection_mutable_IndexedSeqView$Reversed__I__O__V(this, idx, elem)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$5.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Reversed$class__iterator__Lscala_collection_GenSeqViewLike$Reversed__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$5.prototype.length__I = (function() {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Reversed$class__length__Lscala_collection_GenSeqViewLike$Reversed__I(this)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$5.prototype.apply__I__O = (function(idx) {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Reversed$class__apply__Lscala_collection_GenSeqViewLike$Reversed__I__O(this, idx)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$5.prototype.viewIdentifier__T = (function() {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Reversed$class__viewIdentifier__Lscala_collection_GenSeqViewLike$Reversed__T(this)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$5.prototype.scala$collection$mutable$IndexedSeqView$Reversed$$$outer__Lscala_collection_mutable_IndexedSeqView = (function() {
  return this.$$outer$3
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$5.prototype.scala$collection$GenSeqViewLike$Reversed$$$outer__Lscala_collection_GenSeqViewLike = (function() {
  return this.$$outer$3
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$5.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$5.prototype.init___Lscala_collection_mutable_IndexedSeqView = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$3 = $$outer
  };
  ScalaJS.c.scala_collection_mutable_IndexedSeqView$AbstractTransformed.prototype.init___Lscala_collection_mutable_IndexedSeqView.call(this, $$outer);
  ScalaJS.impls.scala_collection_GenSeqViewLike$Reversed$class__$init$__Lscala_collection_GenSeqViewLike$Reversed__V(this);
  ScalaJS.impls.scala_collection_mutable_IndexedSeqView$Reversed$class__$init$__Lscala_collection_mutable_IndexedSeqView$Reversed__V(this);
  return this
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$5.prototype.scala$collection$GenSeqViewLike$Reversed$$$outer__ = (function() {
  return this.scala$collection$GenSeqViewLike$Reversed$$$outer__Lscala_collection_GenSeqViewLike()
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$5.prototype.scala$collection$mutable$IndexedSeqView$Reversed$$$outer__ = (function() {
  return this.scala$collection$mutable$IndexedSeqView$Reversed$$$outer__Lscala_collection_mutable_IndexedSeqView()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_IndexedSeqView$$anon$5 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_IndexedSeqView$$anon$5.prototype = ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$5.prototype;
ScalaJS.is.scala_collection_mutable_IndexedSeqView$$anon$5 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_IndexedSeqView$$anon$5)))
});
ScalaJS.as.scala_collection_mutable_IndexedSeqView$$anon$5 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_IndexedSeqView$$anon$5(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.IndexedSeqView$$anon$5")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_IndexedSeqView$$anon$5 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_IndexedSeqView$$anon$5)))
});
ScalaJS.asArrayOf.scala_collection_mutable_IndexedSeqView$$anon$5 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_IndexedSeqView$$anon$5(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.IndexedSeqView$$anon$5;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_IndexedSeqView$$anon$5 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_IndexedSeqView$$anon$5: 0
}, false, "scala.collection.mutable.IndexedSeqView$$anon$5", ScalaJS.data.scala_collection_mutable_IndexedSeqView$AbstractTransformed, {
  scala_collection_mutable_IndexedSeqView$$anon$5: 1,
  scala_collection_mutable_IndexedSeqView$Reversed: 1,
  scala_collection_SeqViewLike$Reversed: 1,
  scala_collection_GenSeqViewLike$Reversed: 1,
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
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$5.prototype.$classData = ScalaJS.data.scala_collection_mutable_IndexedSeqView$$anon$5;
//@ sourceMappingURL=IndexedSeqView$$anon$5.js.map
