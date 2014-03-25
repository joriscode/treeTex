/** @constructor */
ScalaJS.c.scala_collection_SeqViewLike$$anon$4 = (function() {
  ScalaJS.c.scala_collection_SeqViewLike$AbstractTransformed.call(this);
  this.mapping$2 = null;
  this.$$outer$2 = null;
  this.index$2 = null;
  this.bitmap$0$2 = false
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype = new ScalaJS.inheritable.scala_collection_SeqViewLike$AbstractTransformed();
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype.constructor = ScalaJS.c.scala_collection_SeqViewLike$$anon$4;
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype.index$lzycompute__p2__AI = (function() {
  if ((!this.bitmap$0$2)) {
    this.index$2 = ScalaJS.impls.scala_collection_GenSeqViewLike$FlatMapped$class__index__Lscala_collection_GenSeqViewLike$FlatMapped__AI(this);
    this.bitmap$0$2 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.index$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype.index__AI = (function() {
  if ((!this.bitmap$0$2)) {
    return this.index$lzycompute__p2__AI()
  } else {
    return this.index$2
  }
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype.findRow__I__I__I__I = (function(idx, lo, hi) {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$FlatMapped$class__findRow__Lscala_collection_GenSeqViewLike$FlatMapped__I__I__I__I(this, idx, lo, hi)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype.length__I = (function() {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$FlatMapped$class__length__Lscala_collection_GenSeqViewLike$FlatMapped__I(this)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype.apply__I__O = (function(idx) {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$FlatMapped$class__apply__Lscala_collection_GenSeqViewLike$FlatMapped__I__O(this, idx)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_GenIterableViewLike$FlatMapped$class__iterator__Lscala_collection_GenIterableViewLike$FlatMapped__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_GenTraversableViewLike$FlatMapped$class__foreach__Lscala_collection_GenTraversableViewLike$FlatMapped__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype.viewIdentifier__T = (function() {
  return ScalaJS.impls.scala_collection_GenTraversableViewLike$FlatMapped$class__viewIdentifier__Lscala_collection_GenTraversableViewLike$FlatMapped__T(this)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype.mapping__Lscala_Function1 = (function() {
  return this.mapping$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype.scala$collection$GenSeqViewLike$FlatMapped$$$outer__Lscala_collection_GenSeqViewLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype.scala$collection$GenIterableViewLike$FlatMapped$$$outer__Lscala_collection_GenIterableViewLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype.scala$collection$GenTraversableViewLike$FlatMapped$$$outer__Lscala_collection_GenTraversableViewLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype.init___Lscala_collection_SeqViewLike__Lscala_Function1 = (function($$outer, f$2) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  var mapping = f$2;
  this.mapping$2 = mapping;
  ScalaJS.c.scala_collection_SeqViewLike$AbstractTransformed.prototype.init___Lscala_collection_SeqViewLike.call(this, $$outer);
  ScalaJS.impls.scala_collection_GenTraversableViewLike$FlatMapped$class__$init$__Lscala_collection_GenTraversableViewLike$FlatMapped__V(this);
  ScalaJS.impls.scala_collection_GenIterableViewLike$FlatMapped$class__$init$__Lscala_collection_GenIterableViewLike$FlatMapped__V(this);
  ScalaJS.impls.scala_collection_GenSeqViewLike$FlatMapped$class__$init$__Lscala_collection_GenSeqViewLike$FlatMapped__V(this);
  return this
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype.findRow__I__I__I__ = (function(idx, lo, hi) {
  return ScalaJS.bI(this.findRow__I__I__I__I(idx, lo, hi))
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype.index__ = (function() {
  return this.index__AI()
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype.scala$collection$GenTraversableViewLike$FlatMapped$$$outer__ = (function() {
  return this.scala$collection$GenTraversableViewLike$FlatMapped$$$outer__Lscala_collection_GenTraversableViewLike()
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype.scala$collection$GenIterableViewLike$FlatMapped$$$outer__ = (function() {
  return this.scala$collection$GenIterableViewLike$FlatMapped$$$outer__Lscala_collection_GenIterableViewLike()
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype.scala$collection$GenSeqViewLike$FlatMapped$$$outer__ = (function() {
  return this.scala$collection$GenSeqViewLike$FlatMapped$$$outer__Lscala_collection_GenSeqViewLike()
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype.mapping__ = (function() {
  return this.mapping__Lscala_Function1()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_SeqViewLike$$anon$4 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_SeqViewLike$$anon$4.prototype = ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype;
ScalaJS.is.scala_collection_SeqViewLike$$anon$4 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_SeqViewLike$$anon$4)))
});
ScalaJS.as.scala_collection_SeqViewLike$$anon$4 = (function(obj) {
  if ((ScalaJS.is.scala_collection_SeqViewLike$$anon$4(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.SeqViewLike$$anon$4")
  }
});
ScalaJS.isArrayOf.scala_collection_SeqViewLike$$anon$4 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_SeqViewLike$$anon$4)))
});
ScalaJS.asArrayOf.scala_collection_SeqViewLike$$anon$4 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_SeqViewLike$$anon$4(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.SeqViewLike$$anon$4;", depth)
  }
});
ScalaJS.data.scala_collection_SeqViewLike$$anon$4 = new ScalaJS.ClassTypeData({
  scala_collection_SeqViewLike$$anon$4: 0
}, false, "scala.collection.SeqViewLike$$anon$4", ScalaJS.data.scala_collection_SeqViewLike$AbstractTransformed, {
  scala_collection_SeqViewLike$$anon$4: 1,
  scala_collection_SeqViewLike$FlatMapped: 1,
  scala_collection_GenSeqViewLike$FlatMapped: 1,
  scala_collection_IterableViewLike$FlatMapped: 1,
  scala_collection_GenIterableViewLike$FlatMapped: 1,
  scala_collection_TraversableViewLike$FlatMapped: 1,
  scala_collection_GenTraversableViewLike$FlatMapped: 1,
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
ScalaJS.c.scala_collection_SeqViewLike$$anon$4.prototype.$classData = ScalaJS.data.scala_collection_SeqViewLike$$anon$4;
//@ sourceMappingURL=SeqViewLike$$anon$4.js.map
