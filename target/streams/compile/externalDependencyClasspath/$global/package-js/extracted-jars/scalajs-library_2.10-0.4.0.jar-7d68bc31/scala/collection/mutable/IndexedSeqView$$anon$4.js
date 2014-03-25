/** @constructor */
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4 = (function() {
  ScalaJS.c.scala_collection_mutable_IndexedSeqView$AbstractTransformed.call(this);
  this.pred$3 = null;
  this.$$outer$3 = null;
  this.len$3 = 0;
  this.bitmap$0$3 = false
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype = new ScalaJS.inheritable.scala_collection_mutable_IndexedSeqView$AbstractTransformed();
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.constructor = ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4;
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.update__I__O__V = (function(idx, elem) {
  ScalaJS.impls.scala_collection_mutable_IndexedSeqView$TakenWhile$class__update__Lscala_collection_mutable_IndexedSeqView$TakenWhile__I__O__V(this, idx, elem)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.len$lzycompute__p3__I = (function() {
  if ((!this.bitmap$0$3)) {
    this.len$3 = ScalaJS.impls.scala_collection_GenSeqViewLike$TakenWhile$class__len__Lscala_collection_GenSeqViewLike$TakenWhile__I(this);
    this.bitmap$0$3 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.len$3
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.len__I = (function() {
  if ((!this.bitmap$0$3)) {
    return this.len$lzycompute__p3__I()
  } else {
    return this.len$3
  }
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.length__I = (function() {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$TakenWhile$class__length__Lscala_collection_GenSeqViewLike$TakenWhile__I(this)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.apply__I__O = (function(idx) {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$TakenWhile$class__apply__Lscala_collection_GenSeqViewLike$TakenWhile__I__O(this, idx)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_GenIterableViewLike$TakenWhile$class__iterator__Lscala_collection_GenIterableViewLike$TakenWhile__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_GenTraversableViewLike$TakenWhile$class__foreach__Lscala_collection_GenTraversableViewLike$TakenWhile__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.viewIdentifier__T = (function() {
  return ScalaJS.impls.scala_collection_GenTraversableViewLike$TakenWhile$class__viewIdentifier__Lscala_collection_GenTraversableViewLike$TakenWhile__T(this)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.pred__Lscala_Function1 = (function() {
  return this.pred$3
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.scala$collection$mutable$IndexedSeqView$TakenWhile$$$outer__Lscala_collection_mutable_IndexedSeqView = (function() {
  return this.$$outer$3
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.scala$collection$GenSeqViewLike$TakenWhile$$$outer__Lscala_collection_GenSeqViewLike = (function() {
  return this.$$outer$3
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.scala$collection$GenIterableViewLike$TakenWhile$$$outer__Lscala_collection_GenIterableViewLike = (function() {
  return this.$$outer$3
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.scala$collection$GenTraversableViewLike$TakenWhile$$$outer__Lscala_collection_GenTraversableViewLike = (function() {
  return this.$$outer$3
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.init___Lscala_collection_mutable_IndexedSeqView__Lscala_Function1 = (function($$outer, p$3) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$3 = $$outer
  };
  var pred = p$3;
  this.pred$3 = pred;
  ScalaJS.c.scala_collection_mutable_IndexedSeqView$AbstractTransformed.prototype.init___Lscala_collection_mutable_IndexedSeqView.call(this, $$outer);
  ScalaJS.impls.scala_collection_GenTraversableViewLike$TakenWhile$class__$init$__Lscala_collection_GenTraversableViewLike$TakenWhile__V(this);
  ScalaJS.impls.scala_collection_GenIterableViewLike$TakenWhile$class__$init$__Lscala_collection_GenIterableViewLike$TakenWhile__V(this);
  ScalaJS.impls.scala_collection_GenSeqViewLike$TakenWhile$class__$init$__Lscala_collection_GenSeqViewLike$TakenWhile__V(this);
  ScalaJS.impls.scala_collection_mutable_IndexedSeqView$TakenWhile$class__$init$__Lscala_collection_mutable_IndexedSeqView$TakenWhile__V(this);
  return this
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.len__ = (function() {
  return ScalaJS.bI(this.len__I())
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.scala$collection$GenTraversableViewLike$TakenWhile$$$outer__ = (function() {
  return this.scala$collection$GenTraversableViewLike$TakenWhile$$$outer__Lscala_collection_GenTraversableViewLike()
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.scala$collection$GenIterableViewLike$TakenWhile$$$outer__ = (function() {
  return this.scala$collection$GenIterableViewLike$TakenWhile$$$outer__Lscala_collection_GenIterableViewLike()
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.scala$collection$GenSeqViewLike$TakenWhile$$$outer__ = (function() {
  return this.scala$collection$GenSeqViewLike$TakenWhile$$$outer__Lscala_collection_GenSeqViewLike()
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.scala$collection$mutable$IndexedSeqView$TakenWhile$$$outer__ = (function() {
  return this.scala$collection$mutable$IndexedSeqView$TakenWhile$$$outer__Lscala_collection_mutable_IndexedSeqView()
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.pred__ = (function() {
  return this.pred__Lscala_Function1()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_IndexedSeqView$$anon$4 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_IndexedSeqView$$anon$4.prototype = ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype;
ScalaJS.is.scala_collection_mutable_IndexedSeqView$$anon$4 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_IndexedSeqView$$anon$4)))
});
ScalaJS.as.scala_collection_mutable_IndexedSeqView$$anon$4 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_IndexedSeqView$$anon$4(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.IndexedSeqView$$anon$4")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_IndexedSeqView$$anon$4 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_IndexedSeqView$$anon$4)))
});
ScalaJS.asArrayOf.scala_collection_mutable_IndexedSeqView$$anon$4 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_IndexedSeqView$$anon$4(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.IndexedSeqView$$anon$4;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_IndexedSeqView$$anon$4 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_IndexedSeqView$$anon$4: 0
}, false, "scala.collection.mutable.IndexedSeqView$$anon$4", ScalaJS.data.scala_collection_mutable_IndexedSeqView$AbstractTransformed, {
  scala_collection_mutable_IndexedSeqView$$anon$4: 1,
  scala_collection_mutable_IndexedSeqView$TakenWhile: 1,
  scala_collection_SeqViewLike$TakenWhile: 1,
  scala_collection_GenSeqViewLike$TakenWhile: 1,
  scala_collection_IterableViewLike$TakenWhile: 1,
  scala_collection_GenIterableViewLike$TakenWhile: 1,
  scala_collection_TraversableViewLike$TakenWhile: 1,
  scala_collection_GenTraversableViewLike$TakenWhile: 1,
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
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4.prototype.$classData = ScalaJS.data.scala_collection_mutable_IndexedSeqView$$anon$4;
//@ sourceMappingURL=IndexedSeqView$$anon$4.js.map
