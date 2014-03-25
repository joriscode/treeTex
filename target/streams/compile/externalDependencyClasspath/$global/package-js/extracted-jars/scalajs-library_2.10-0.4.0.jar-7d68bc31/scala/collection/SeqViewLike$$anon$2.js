/** @constructor */
ScalaJS.c.scala_collection_SeqViewLike$$anon$2 = (function() {
  ScalaJS.c.scala_collection_SeqViewLike$AbstractTransformed.call(this);
  this.rest$2 = null;
  this.$$outer$2 = null;
  this.restSeq$2 = null;
  this.bitmap$0$2 = false
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$2.prototype = new ScalaJS.inheritable.scala_collection_SeqViewLike$AbstractTransformed();
ScalaJS.c.scala_collection_SeqViewLike$$anon$2.prototype.constructor = ScalaJS.c.scala_collection_SeqViewLike$$anon$2;
ScalaJS.c.scala_collection_SeqViewLike$$anon$2.prototype.restSeq$lzycompute__p2__Lscala_collection_GenSeq = (function() {
  if ((!this.bitmap$0$2)) {
    this.restSeq$2 = ScalaJS.impls.scala_collection_GenSeqViewLike$Appended$class__restSeq__Lscala_collection_GenSeqViewLike$Appended__Lscala_collection_GenSeq(this);
    this.bitmap$0$2 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.restSeq$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$2.prototype.restSeq__Lscala_collection_GenSeq = (function() {
  if ((!this.bitmap$0$2)) {
    return this.restSeq$lzycompute__p2__Lscala_collection_GenSeq()
  } else {
    return this.restSeq$2
  }
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$2.prototype.length__I = (function() {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Appended$class__length__Lscala_collection_GenSeqViewLike$Appended__I(this)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$2.prototype.apply__I__O = (function(idx) {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Appended$class__apply__Lscala_collection_GenSeqViewLike$Appended__I__O(this, idx)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$2.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_GenIterableViewLike$Appended$class__iterator__Lscala_collection_GenIterableViewLike$Appended__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$2.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_GenTraversableViewLike$Appended$class__foreach__Lscala_collection_GenTraversableViewLike$Appended__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$2.prototype.viewIdentifier__T = (function() {
  return ScalaJS.impls.scala_collection_GenTraversableViewLike$Appended$class__viewIdentifier__Lscala_collection_GenTraversableViewLike$Appended__T(this)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$2.prototype.rest__Lscala_collection_GenTraversable = (function() {
  return this.rest$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$2.prototype.scala$collection$GenSeqViewLike$Appended$$$outer__Lscala_collection_GenSeqViewLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$2.prototype.scala$collection$GenIterableViewLike$Appended$$$outer__Lscala_collection_GenIterableViewLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$2.prototype.scala$collection$GenTraversableViewLike$Appended$$$outer__Lscala_collection_GenTraversableViewLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$2.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$2.prototype.init___Lscala_collection_SeqViewLike__Lscala_collection_GenTraversable = (function($$outer, that$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  var rest = that$1;
  this.rest$2 = rest;
  ScalaJS.c.scala_collection_SeqViewLike$AbstractTransformed.prototype.init___Lscala_collection_SeqViewLike.call(this, $$outer);
  ScalaJS.impls.scala_collection_GenTraversableViewLike$Appended$class__$init$__Lscala_collection_GenTraversableViewLike$Appended__V(this);
  ScalaJS.impls.scala_collection_GenIterableViewLike$Appended$class__$init$__Lscala_collection_GenIterableViewLike$Appended__V(this);
  ScalaJS.impls.scala_collection_GenSeqViewLike$Appended$class__$init$__Lscala_collection_GenSeqViewLike$Appended__V(this);
  return this
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$2.prototype.restSeq__ = (function() {
  return this.restSeq__Lscala_collection_GenSeq()
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$2.prototype.scala$collection$GenTraversableViewLike$Appended$$$outer__ = (function() {
  return this.scala$collection$GenTraversableViewLike$Appended$$$outer__Lscala_collection_GenTraversableViewLike()
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$2.prototype.scala$collection$GenIterableViewLike$Appended$$$outer__ = (function() {
  return this.scala$collection$GenIterableViewLike$Appended$$$outer__Lscala_collection_GenIterableViewLike()
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$2.prototype.scala$collection$GenSeqViewLike$Appended$$$outer__ = (function() {
  return this.scala$collection$GenSeqViewLike$Appended$$$outer__Lscala_collection_GenSeqViewLike()
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$2.prototype.rest__ = (function() {
  return this.rest__Lscala_collection_GenTraversable()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_SeqViewLike$$anon$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_SeqViewLike$$anon$2.prototype = ScalaJS.c.scala_collection_SeqViewLike$$anon$2.prototype;
ScalaJS.is.scala_collection_SeqViewLike$$anon$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_SeqViewLike$$anon$2)))
});
ScalaJS.as.scala_collection_SeqViewLike$$anon$2 = (function(obj) {
  if ((ScalaJS.is.scala_collection_SeqViewLike$$anon$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.SeqViewLike$$anon$2")
  }
});
ScalaJS.isArrayOf.scala_collection_SeqViewLike$$anon$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_SeqViewLike$$anon$2)))
});
ScalaJS.asArrayOf.scala_collection_SeqViewLike$$anon$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_SeqViewLike$$anon$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.SeqViewLike$$anon$2;", depth)
  }
});
ScalaJS.data.scala_collection_SeqViewLike$$anon$2 = new ScalaJS.ClassTypeData({
  scala_collection_SeqViewLike$$anon$2: 0
}, false, "scala.collection.SeqViewLike$$anon$2", ScalaJS.data.scala_collection_SeqViewLike$AbstractTransformed, {
  scala_collection_SeqViewLike$$anon$2: 1,
  scala_collection_SeqViewLike$Appended: 1,
  scala_collection_GenSeqViewLike$Appended: 1,
  scala_collection_IterableViewLike$Appended: 1,
  scala_collection_GenIterableViewLike$Appended: 1,
  scala_collection_TraversableViewLike$Appended: 1,
  scala_collection_GenTraversableViewLike$Appended: 1,
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
ScalaJS.c.scala_collection_SeqViewLike$$anon$2.prototype.$classData = ScalaJS.data.scala_collection_SeqViewLike$$anon$2;
//@ sourceMappingURL=SeqViewLike$$anon$2.js.map
