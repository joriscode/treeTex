/** @constructor */
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1 = (function() {
  ScalaJS.c.scala_collection_mutable_IndexedSeqView$AbstractTransformed.call(this);
  this.pred$3 = null;
  this.$$outer$3 = null;
  this.index$3 = null;
  this.bitmap$0$3 = false
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_mutable_IndexedSeqView$AbstractTransformed();
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1;
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.update__I__O__V = (function(idx, elem) {
  ScalaJS.impls.scala_collection_mutable_IndexedSeqView$Filtered$class__update__Lscala_collection_mutable_IndexedSeqView$Filtered__I__O__V(this, idx, elem)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.index$lzycompute__p3__AI = (function() {
  if ((!this.bitmap$0$3)) {
    this.index$3 = ScalaJS.impls.scala_collection_GenSeqViewLike$Filtered$class__index__Lscala_collection_GenSeqViewLike$Filtered__AI(this);
    this.bitmap$0$3 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.index$3
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.index__AI = (function() {
  if ((!this.bitmap$0$3)) {
    return this.index$lzycompute__p3__AI()
  } else {
    return this.index$3
  }
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.length__I = (function() {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Filtered$class__length__Lscala_collection_GenSeqViewLike$Filtered__I(this)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.apply__I__O = (function(idx) {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Filtered$class__apply__Lscala_collection_GenSeqViewLike$Filtered__I__O(this, idx)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_GenIterableViewLike$Filtered$class__iterator__Lscala_collection_GenIterableViewLike$Filtered__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_GenTraversableViewLike$Filtered$class__foreach__Lscala_collection_GenTraversableViewLike$Filtered__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.viewIdentifier__T = (function() {
  return ScalaJS.impls.scala_collection_GenTraversableViewLike$Filtered$class__viewIdentifier__Lscala_collection_GenTraversableViewLike$Filtered__T(this)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.pred__Lscala_Function1 = (function() {
  return this.pred$3
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.scala$collection$mutable$IndexedSeqView$Filtered$$$outer__Lscala_collection_mutable_IndexedSeqView = (function() {
  return this.$$outer$3
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.scala$collection$GenSeqViewLike$Filtered$$$outer__Lscala_collection_GenSeqViewLike = (function() {
  return this.$$outer$3
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.scala$collection$GenIterableViewLike$Filtered$$$outer__Lscala_collection_GenIterableViewLike = (function() {
  return this.$$outer$3
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.scala$collection$GenTraversableViewLike$Filtered$$$outer__Lscala_collection_GenTraversableViewLike = (function() {
  return this.$$outer$3
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.init___Lscala_collection_mutable_IndexedSeqView__Lscala_Function1 = (function($$outer, p$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$3 = $$outer
  };
  var pred = p$1;
  this.pred$3 = pred;
  ScalaJS.c.scala_collection_mutable_IndexedSeqView$AbstractTransformed.prototype.init___Lscala_collection_mutable_IndexedSeqView.call(this, $$outer);
  ScalaJS.impls.scala_collection_GenTraversableViewLike$Filtered$class__$init$__Lscala_collection_GenTraversableViewLike$Filtered__V(this);
  ScalaJS.impls.scala_collection_GenIterableViewLike$Filtered$class__$init$__Lscala_collection_GenIterableViewLike$Filtered__V(this);
  ScalaJS.impls.scala_collection_GenSeqViewLike$Filtered$class__$init$__Lscala_collection_GenSeqViewLike$Filtered__V(this);
  ScalaJS.impls.scala_collection_mutable_IndexedSeqView$Filtered$class__$init$__Lscala_collection_mutable_IndexedSeqView$Filtered__V(this);
  return this
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.index__ = (function() {
  return this.index__AI()
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.scala$collection$GenTraversableViewLike$Filtered$$$outer__ = (function() {
  return this.scala$collection$GenTraversableViewLike$Filtered$$$outer__Lscala_collection_GenTraversableViewLike()
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.scala$collection$GenIterableViewLike$Filtered$$$outer__ = (function() {
  return this.scala$collection$GenIterableViewLike$Filtered$$$outer__Lscala_collection_GenIterableViewLike()
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.scala$collection$GenSeqViewLike$Filtered$$$outer__ = (function() {
  return this.scala$collection$GenSeqViewLike$Filtered$$$outer__Lscala_collection_GenSeqViewLike()
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.scala$collection$mutable$IndexedSeqView$Filtered$$$outer__ = (function() {
  return this.scala$collection$mutable$IndexedSeqView$Filtered$$$outer__Lscala_collection_mutable_IndexedSeqView()
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.pred__ = (function() {
  return this.pred__Lscala_Function1()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_IndexedSeqView$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_IndexedSeqView$$anon$1.prototype = ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype;
ScalaJS.is.scala_collection_mutable_IndexedSeqView$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_IndexedSeqView$$anon$1)))
});
ScalaJS.as.scala_collection_mutable_IndexedSeqView$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_IndexedSeqView$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.IndexedSeqView$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_IndexedSeqView$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_IndexedSeqView$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_mutable_IndexedSeqView$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_IndexedSeqView$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.IndexedSeqView$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_IndexedSeqView$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_IndexedSeqView$$anon$1: 0
}, false, "scala.collection.mutable.IndexedSeqView$$anon$1", ScalaJS.data.scala_collection_mutable_IndexedSeqView$AbstractTransformed, {
  scala_collection_mutable_IndexedSeqView$$anon$1: 1,
  scala_collection_mutable_IndexedSeqView$Filtered: 1,
  scala_collection_SeqViewLike$Filtered: 1,
  scala_collection_GenSeqViewLike$Filtered: 1,
  scala_collection_IterableViewLike$Filtered: 1,
  scala_collection_GenIterableViewLike$Filtered: 1,
  scala_collection_TraversableViewLike$Filtered: 1,
  scala_collection_GenTraversableViewLike$Filtered: 1,
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
ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_mutable_IndexedSeqView$$anon$1;
//@ sourceMappingURL=IndexedSeqView$$anon$1.js.map
