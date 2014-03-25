/** @constructor */
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11 = (function() {
  ScalaJS.c.scala_collection_immutable_StreamViewLike$AbstractTransformed.call(this);
  this.from$3 = 0;
  this.patch$3 = null;
  this.replaced$3 = 0;
  this.$$outer$3 = null;
  this.scala$collection$GenSeqViewLike$Patched$$plen$3 = 0;
  this.bitmap$0$3 = false
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11.prototype = new ScalaJS.inheritable.scala_collection_immutable_StreamViewLike$AbstractTransformed();
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11.prototype.constructor = ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11;
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11.prototype.scala$collection$GenSeqViewLike$Patched$$plen$lzycompute__p3__I = (function() {
  if ((!this.bitmap$0$3)) {
    this.scala$collection$GenSeqViewLike$Patched$$plen$3 = ScalaJS.impls.scala_collection_GenSeqViewLike$Patched$class__scala$collection$GenSeqViewLike$Patched$$plen__Lscala_collection_GenSeqViewLike$Patched__I(this);
    this.bitmap$0$3 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.scala$collection$GenSeqViewLike$Patched$$plen$3
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11.prototype.scala$collection$GenSeqViewLike$Patched$$plen__I = (function() {
  if ((!this.bitmap$0$3)) {
    return this.scala$collection$GenSeqViewLike$Patched$$plen$lzycompute__p3__I()
  } else {
    return this.scala$collection$GenSeqViewLike$Patched$$plen$3
  }
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Patched$class__iterator__Lscala_collection_GenSeqViewLike$Patched__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11.prototype.length__I = (function() {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Patched$class__length__Lscala_collection_GenSeqViewLike$Patched__I(this)
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11.prototype.apply__I__O = (function(idx) {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Patched$class__apply__Lscala_collection_GenSeqViewLike$Patched__I__O(this, idx)
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11.prototype.viewIdentifier__T = (function() {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Patched$class__viewIdentifier__Lscala_collection_GenSeqViewLike$Patched__T(this)
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11.prototype.from__I = (function() {
  return this.from$3
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11.prototype.patch__Lscala_collection_GenSeq = (function() {
  return this.patch$3
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11.prototype.replaced__I = (function() {
  return this.replaced$3
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11.prototype.scala$collection$GenSeqViewLike$Patched$$$outer__Lscala_collection_GenSeqViewLike = (function() {
  return this.$$outer$3
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11.prototype.init___Lscala_collection_immutable_StreamViewLike__I__Lscala_collection_GenSeq__I = (function($$outer, _from$1, _patch$1, _replaced$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$3 = $$outer
  };
  var from = _from$1;
  this.from$3 = from;
  var patch = _patch$1;
  this.patch$3 = patch;
  var replaced = _replaced$1;
  this.replaced$3 = replaced;
  ScalaJS.c.scala_collection_immutable_StreamViewLike$AbstractTransformed.prototype.init___Lscala_collection_immutable_StreamViewLike.call(this, $$outer);
  ScalaJS.impls.scala_collection_GenSeqViewLike$Patched$class__$init$__Lscala_collection_GenSeqViewLike$Patched__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11.prototype.scala$collection$GenSeqViewLike$Patched$$plen__ = (function() {
  return ScalaJS.bI(this.scala$collection$GenSeqViewLike$Patched$$plen__I())
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11.prototype.scala$collection$GenSeqViewLike$Patched$$$outer__ = (function() {
  return this.scala$collection$GenSeqViewLike$Patched$$$outer__Lscala_collection_GenSeqViewLike()
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11.prototype.replaced__ = (function() {
  return ScalaJS.bI(this.replaced__I())
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11.prototype.patch__ = (function() {
  return this.patch__Lscala_collection_GenSeq()
});
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11.prototype.from__ = (function() {
  return ScalaJS.bI(this.from__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_StreamViewLike$$anon$11 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_StreamViewLike$$anon$11.prototype = ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11.prototype;
ScalaJS.is.scala_collection_immutable_StreamViewLike$$anon$11 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_StreamViewLike$$anon$11)))
});
ScalaJS.as.scala_collection_immutable_StreamViewLike$$anon$11 = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_StreamViewLike$$anon$11(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.StreamViewLike$$anon$11")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_StreamViewLike$$anon$11 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_StreamViewLike$$anon$11)))
});
ScalaJS.asArrayOf.scala_collection_immutable_StreamViewLike$$anon$11 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_StreamViewLike$$anon$11(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.StreamViewLike$$anon$11;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_StreamViewLike$$anon$11 = new ScalaJS.ClassTypeData({
  scala_collection_immutable_StreamViewLike$$anon$11: 0
}, false, "scala.collection.immutable.StreamViewLike$$anon$11", ScalaJS.data.scala_collection_immutable_StreamViewLike$AbstractTransformed, {
  scala_collection_immutable_StreamViewLike$$anon$11: 1,
  scala_collection_immutable_StreamViewLike$Patched: 1,
  scala_collection_SeqViewLike$Patched: 1,
  scala_collection_GenSeqViewLike$Patched: 1,
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
ScalaJS.c.scala_collection_immutable_StreamViewLike$$anon$11.prototype.$classData = ScalaJS.data.scala_collection_immutable_StreamViewLike$$anon$11;
//@ sourceMappingURL=StreamViewLike$$anon$11.js.map
