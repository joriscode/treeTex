/** @constructor */
ScalaJS.c.scala_collection_SeqViewLike$$anon$1 = (function() {
  ScalaJS.c.scala_collection_SeqViewLike$AbstractTransformed.call(this);
  this.forced$2 = null;
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_SeqViewLike$AbstractTransformed();
ScalaJS.c.scala_collection_SeqViewLike$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_SeqViewLike$$anon$1;
ScalaJS.c.scala_collection_SeqViewLike$$anon$1.prototype.length__I = (function() {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Forced$class__length__Lscala_collection_GenSeqViewLike$Forced__I(this)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$1.prototype.apply__I__O = (function(idx) {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Forced$class__apply__Lscala_collection_GenSeqViewLike$Forced__I__O(this, idx)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$1.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_GenIterableViewLike$Forced$class__iterator__Lscala_collection_GenIterableViewLike$Forced__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$1.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_GenTraversableViewLike$Forced$class__foreach__Lscala_collection_GenTraversableViewLike$Forced__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$1.prototype.viewIdentifier__T = (function() {
  return ScalaJS.impls.scala_collection_GenTraversableViewLike$Forced$class__viewIdentifier__Lscala_collection_GenTraversableViewLike$Forced__T(this)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$1.prototype.forced__Lscala_collection_GenSeq = (function() {
  return this.forced$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$1.prototype.scala$collection$GenSeqViewLike$Forced$$$outer__Lscala_collection_GenSeqViewLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$1.prototype.scala$collection$GenIterableViewLike$Forced$$$outer__Lscala_collection_GenIterableViewLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$1.prototype.scala$collection$GenTraversableViewLike$Forced$$$outer__Lscala_collection_GenTraversableViewLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$1.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$1.prototype.init___Lscala_collection_SeqViewLike__Lscala_Function0 = (function($$outer, xs$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  var forced = ScalaJS.as.scala_collection_GenSeq(xs$1.apply__O());
  this.forced$2 = forced;
  ScalaJS.c.scala_collection_SeqViewLike$AbstractTransformed.prototype.init___Lscala_collection_SeqViewLike.call(this, $$outer);
  ScalaJS.impls.scala_collection_GenTraversableViewLike$Forced$class__$init$__Lscala_collection_GenTraversableViewLike$Forced__V(this);
  ScalaJS.impls.scala_collection_GenIterableViewLike$Forced$class__$init$__Lscala_collection_GenIterableViewLike$Forced__V(this);
  ScalaJS.impls.scala_collection_GenSeqViewLike$Forced$class__$init$__Lscala_collection_GenSeqViewLike$Forced__V(this);
  return this
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$1.prototype.scala$collection$GenTraversableViewLike$Forced$$$outer__ = (function() {
  return this.scala$collection$GenTraversableViewLike$Forced$$$outer__Lscala_collection_GenTraversableViewLike()
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$1.prototype.scala$collection$GenIterableViewLike$Forced$$$outer__ = (function() {
  return this.scala$collection$GenIterableViewLike$Forced$$$outer__Lscala_collection_GenIterableViewLike()
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$1.prototype.scala$collection$GenSeqViewLike$Forced$$$outer__ = (function() {
  return this.scala$collection$GenSeqViewLike$Forced$$$outer__Lscala_collection_GenSeqViewLike()
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$1.prototype.forced__ = (function() {
  return this.forced__Lscala_collection_GenSeq()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_SeqViewLike$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_SeqViewLike$$anon$1.prototype = ScalaJS.c.scala_collection_SeqViewLike$$anon$1.prototype;
ScalaJS.is.scala_collection_SeqViewLike$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_SeqViewLike$$anon$1)))
});
ScalaJS.as.scala_collection_SeqViewLike$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_SeqViewLike$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.SeqViewLike$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_SeqViewLike$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_SeqViewLike$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_SeqViewLike$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_SeqViewLike$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.SeqViewLike$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_SeqViewLike$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_SeqViewLike$$anon$1: 0
}, false, "scala.collection.SeqViewLike$$anon$1", ScalaJS.data.scala_collection_SeqViewLike$AbstractTransformed, {
  scala_collection_SeqViewLike$$anon$1: 1,
  scala_collection_SeqViewLike$Forced: 1,
  scala_collection_GenSeqViewLike$Forced: 1,
  scala_collection_IterableViewLike$Forced: 1,
  scala_collection_GenIterableViewLike$Forced: 1,
  scala_collection_TraversableViewLike$Forced: 1,
  scala_collection_GenTraversableViewLike$Forced: 1,
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
ScalaJS.c.scala_collection_SeqViewLike$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_SeqViewLike$$anon$1;
//@ sourceMappingURL=SeqViewLike$$anon$1.js.map
