/** @constructor */
ScalaJS.c.scala_collection_SeqViewLike$$anon$10 = (function() {
  ScalaJS.c.scala_collection_SeqViewLike$AbstractTransformed.call(this);
  this.other$2 = null;
  this.thisElem$2 = null;
  this.thatElem$2 = null;
  this.$$outer$2 = null;
  this.thatSeq$2 = null;
  this.bitmap$0$2 = false
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype = new ScalaJS.inheritable.scala_collection_SeqViewLike$AbstractTransformed();
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype.constructor = ScalaJS.c.scala_collection_SeqViewLike$$anon$10;
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype.thatSeq$lzycompute__p2__Lscala_collection_Seq = (function() {
  if ((!this.bitmap$0$2)) {
    this.thatSeq$2 = ScalaJS.impls.scala_collection_GenSeqViewLike$ZippedAll$class__thatSeq__Lscala_collection_GenSeqViewLike$ZippedAll__Lscala_collection_Seq(this);
    this.bitmap$0$2 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.thatSeq$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype.thatSeq__Lscala_collection_Seq = (function() {
  if ((!this.bitmap$0$2)) {
    return this.thatSeq$lzycompute__p2__Lscala_collection_Seq()
  } else {
    return this.thatSeq$2
  }
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype.length__I = (function() {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$ZippedAll$class__length__Lscala_collection_GenSeqViewLike$ZippedAll__I(this)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype.apply__I__Lscala_Tuple2 = (function(idx) {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$ZippedAll$class__apply__Lscala_collection_GenSeqViewLike$ZippedAll__I__Lscala_Tuple2(this, idx)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype.viewIdentifier__T = (function() {
  return ScalaJS.impls.scala_collection_GenIterableViewLike$ZippedAll$class__viewIdentifier__Lscala_collection_GenIterableViewLike$ZippedAll__T(this)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_GenIterableViewLike$ZippedAll$class__iterator__Lscala_collection_GenIterableViewLike$ZippedAll__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype.other__Lscala_collection_GenIterable = (function() {
  return this.other$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype.thisElem__O = (function() {
  return this.thisElem$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype.thatElem__O = (function() {
  return this.thatElem$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype.scala$collection$GenSeqViewLike$ZippedAll$$$outer__Lscala_collection_GenSeqViewLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype.scala$collection$GenIterableViewLike$ZippedAll$$$outer__Lscala_collection_GenIterableViewLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype.apply__O__O = (function(v1) {
  return this.apply__I__Lscala_Tuple2(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype.apply__I__O = (function(idx) {
  return this.apply__I__Lscala_Tuple2(idx)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype.init___Lscala_collection_SeqViewLike__Lscala_collection_GenIterable__O__O = (function($$outer, that$3, _thisElem$1, _thatElem$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  var other = that$3;
  this.other$2 = other;
  var thisElem = _thisElem$1;
  this.thisElem$2 = thisElem;
  var thatElem = _thatElem$1;
  this.thatElem$2 = thatElem;
  ScalaJS.c.scala_collection_SeqViewLike$AbstractTransformed.prototype.init___Lscala_collection_SeqViewLike.call(this, $$outer);
  ScalaJS.impls.scala_collection_GenIterableViewLike$ZippedAll$class__$init$__Lscala_collection_GenIterableViewLike$ZippedAll__V(this);
  ScalaJS.impls.scala_collection_GenSeqViewLike$ZippedAll$class__$init$__Lscala_collection_GenSeqViewLike$ZippedAll__V(this);
  return this
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype.thatSeq__ = (function() {
  return this.thatSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype.scala$collection$GenIterableViewLike$ZippedAll$$$outer__ = (function() {
  return this.scala$collection$GenIterableViewLike$ZippedAll$$$outer__Lscala_collection_GenIterableViewLike()
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype.scala$collection$GenSeqViewLike$ZippedAll$$$outer__ = (function() {
  return this.scala$collection$GenSeqViewLike$ZippedAll$$$outer__Lscala_collection_GenSeqViewLike()
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype.thatElem__ = (function() {
  return this.thatElem__O()
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype.thisElem__ = (function() {
  return this.thisElem__O()
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype.other__ = (function() {
  return this.other__Lscala_collection_GenIterable()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_SeqViewLike$$anon$10 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_SeqViewLike$$anon$10.prototype = ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype;
ScalaJS.is.scala_collection_SeqViewLike$$anon$10 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_SeqViewLike$$anon$10)))
});
ScalaJS.as.scala_collection_SeqViewLike$$anon$10 = (function(obj) {
  if ((ScalaJS.is.scala_collection_SeqViewLike$$anon$10(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.SeqViewLike$$anon$10")
  }
});
ScalaJS.isArrayOf.scala_collection_SeqViewLike$$anon$10 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_SeqViewLike$$anon$10)))
});
ScalaJS.asArrayOf.scala_collection_SeqViewLike$$anon$10 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_SeqViewLike$$anon$10(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.SeqViewLike$$anon$10;", depth)
  }
});
ScalaJS.data.scala_collection_SeqViewLike$$anon$10 = new ScalaJS.ClassTypeData({
  scala_collection_SeqViewLike$$anon$10: 0
}, false, "scala.collection.SeqViewLike$$anon$10", ScalaJS.data.scala_collection_SeqViewLike$AbstractTransformed, {
  scala_collection_SeqViewLike$$anon$10: 1,
  scala_collection_SeqViewLike$ZippedAll: 1,
  scala_collection_GenSeqViewLike$ZippedAll: 1,
  scala_collection_IterableViewLike$ZippedAll: 1,
  scala_collection_GenIterableViewLike$ZippedAll: 1,
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
ScalaJS.c.scala_collection_SeqViewLike$$anon$10.prototype.$classData = ScalaJS.data.scala_collection_SeqViewLike$$anon$10;
//@ sourceMappingURL=SeqViewLike$$anon$10.js.map
