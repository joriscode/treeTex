/** @constructor */
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10 = (function() {
  ScalaJS.c.scala_collection_immutable_StreamViewLike$AbstractTransformed.call(this);
  this.other$3 = null;
  this.thisElem$3 = null;
  this.thatElem$3 = null;
  this.$$outer$3 = null;
  this.thatSeq$3 = null;
  this.bitmap$0$3 = false
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype = new ScalaJS.inheritable.scala_collection_immutable_StreamViewLike$AbstractTransformed();
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype.constructor = ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10;
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype.thatSeq$lzycompute__p3__Lscala_collection_Seq = (function() {
  if ((!this.bitmap$0$3)) {
    this.thatSeq$3 = ScalaJS.impls.scala_collection_GenSeqViewLike$ZippedAll$class__thatSeq__Lscala_collection_GenSeqViewLike$ZippedAll__Lscala_collection_Seq(this);
    this.bitmap$0$3 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.thatSeq$3
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype.thatSeq__Lscala_collection_Seq = (function() {
  if ((!this.bitmap$0$3)) {
    return this.thatSeq$lzycompute__p3__Lscala_collection_Seq()
  } else {
    return this.thatSeq$3
  }
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype.length__I = (function() {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$ZippedAll$class__length__Lscala_collection_GenSeqViewLike$ZippedAll__I(this)
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype.apply__I__Lscala_Tuple2 = (function(idx) {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$ZippedAll$class__apply__Lscala_collection_GenSeqViewLike$ZippedAll__I__Lscala_Tuple2(this, idx)
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype.viewIdentifier__T = (function() {
  return ScalaJS.impls.scala_collection_GenIterableViewLike$ZippedAll$class__viewIdentifier__Lscala_collection_GenIterableViewLike$ZippedAll__T(this)
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_GenIterableViewLike$ZippedAll$class__iterator__Lscala_collection_GenIterableViewLike$ZippedAll__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype.other__Lscala_collection_GenIterable = (function() {
  return this.other$3
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype.thisElem__O = (function() {
  return this.thisElem$3
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype.thatElem__O = (function() {
  return this.thatElem$3
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype.scala$collection$GenSeqViewLike$ZippedAll$$$outer__Lscala_collection_GenSeqViewLike = (function() {
  return this.$$outer$3
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype.scala$collection$GenIterableViewLike$ZippedAll$$$outer__Lscala_collection_GenIterableViewLike = (function() {
  return this.$$outer$3
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype.apply__O__O = (function(v1) {
  return this.apply__I__Lscala_Tuple2(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype.apply__I__O = (function(idx) {
  return this.apply__I__Lscala_Tuple2(idx)
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype.init___Lscala_collection_immutable_StreamViewLike__Lscala_collection_GenIterable__O__O = (function($$outer, that$3, _thisElem$1, _thatElem$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$3 = $$outer
  };
  var other = that$3;
  this.other$3 = other;
  var thisElem = _thisElem$1;
  this.thisElem$3 = thisElem;
  var thatElem = _thatElem$1;
  this.thatElem$3 = thatElem;
  ScalaJS.c.scala_collection_immutable_StreamViewLike$AbstractTransformed.prototype.init___Lscala_collection_immutable_StreamViewLike.call(this, $$outer);
  ScalaJS.impls.scala_collection_GenIterableViewLike$ZippedAll$class__$init$__Lscala_collection_GenIterableViewLike$ZippedAll__V(this);
  ScalaJS.impls.scala_collection_GenSeqViewLike$ZippedAll$class__$init$__Lscala_collection_GenSeqViewLike$ZippedAll__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype.thatSeq__ = (function() {
  return this.thatSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype.scala$collection$GenIterableViewLike$ZippedAll$$$outer__ = (function() {
  return this.scala$collection$GenIterableViewLike$ZippedAll$$$outer__Lscala_collection_GenIterableViewLike()
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype.scala$collection$GenSeqViewLike$ZippedAll$$$outer__ = (function() {
  return this.scala$collection$GenSeqViewLike$ZippedAll$$$outer__Lscala_collection_GenSeqViewLike()
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype.thatElem__ = (function() {
  return this.thatElem__O()
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype.thisElem__ = (function() {
  return this.thisElem__O()
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype.other__ = (function() {
  return this.other__Lscala_collection_GenIterable()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_StreamViewLike$$anon$10 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_StreamViewLike$$anon$10.prototype = ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype;
ScalaJS.is.scala_collection_immutable_StreamViewLike$$anon$10 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_StreamViewLike$$anon$10)))
});
ScalaJS.as.scala_collection_immutable_StreamViewLike$$anon$10 = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_StreamViewLike$$anon$10(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.StreamViewLike$$anon$10")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_StreamViewLike$$anon$10 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_StreamViewLike$$anon$10)))
});
ScalaJS.asArrayOf.scala_collection_immutable_StreamViewLike$$anon$10 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_StreamViewLike$$anon$10(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.StreamViewLike$$anon$10;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_StreamViewLike$$anon$10 = new ScalaJS.ClassTypeData({
  scala_collection_immutable_StreamViewLike$$anon$10: 0
}, false, "scala.collection.immutable.StreamViewLike$$anon$10", ScalaJS.data.scala_collection_immutable_StreamViewLike$AbstractTransformed, {
  scala_collection_immutable_StreamViewLike$$anon$10: 1,
  scala_collection_immutable_StreamViewLike$ZippedAll: 1,
  scala_collection_SeqViewLike$ZippedAll: 1,
  scala_collection_GenSeqViewLike$ZippedAll: 1,
  scala_collection_IterableViewLike$ZippedAll: 1,
  scala_collection_GenIterableViewLike$ZippedAll: 1,
  scala_collection_immutable_StreamViewLike$AbstractTransformed: 1,
  scala_collection_immutable_StreamViewLike$Transformed: 1,
  scala_collection_immutable_StreamView: 1,
  scala_collection_immutable_StreamViewLike: 1,
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
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$10.prototype.$classData = ScalaJS.data.scala_collection_immutable_StreamViewLike$$anon$10;
//@ sourceMappingURL=StreamViewLike$$anon$10.js.map
