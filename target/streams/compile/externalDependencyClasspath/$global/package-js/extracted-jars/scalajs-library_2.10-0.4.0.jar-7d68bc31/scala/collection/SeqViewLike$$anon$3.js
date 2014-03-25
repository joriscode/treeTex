/** @constructor */
ScalaJS.c.scala_collection_SeqViewLike$$anon$3 = (function() {
  ScalaJS.c.scala_collection_SeqViewLike$AbstractTransformed.call(this);
  this.mapping$2 = null;
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$3.prototype = new ScalaJS.inheritable.scala_collection_SeqViewLike$AbstractTransformed();
ScalaJS.c.scala_collection_SeqViewLike$$anon$3.prototype.constructor = ScalaJS.c.scala_collection_SeqViewLike$$anon$3;
ScalaJS.c.scala_collection_SeqViewLike$$anon$3.prototype.length__I = (function() {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Mapped$class__length__Lscala_collection_GenSeqViewLike$Mapped__I(this)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$3.prototype.apply__I__O = (function(idx) {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Mapped$class__apply__Lscala_collection_GenSeqViewLike$Mapped__I__O(this, idx)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$3.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_GenIterableViewLike$Mapped$class__iterator__Lscala_collection_GenIterableViewLike$Mapped__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$3.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_GenTraversableViewLike$Mapped$class__foreach__Lscala_collection_GenTraversableViewLike$Mapped__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$3.prototype.viewIdentifier__T = (function() {
  return ScalaJS.impls.scala_collection_GenTraversableViewLike$Mapped$class__viewIdentifier__Lscala_collection_GenTraversableViewLike$Mapped__T(this)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$3.prototype.mapping__Lscala_Function1 = (function() {
  return this.mapping$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$3.prototype.scala$collection$GenSeqViewLike$Mapped$$$outer__Lscala_collection_GenSeqViewLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$3.prototype.scala$collection$GenIterableViewLike$Mapped$$$outer__Lscala_collection_GenIterableViewLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$3.prototype.scala$collection$GenTraversableViewLike$Mapped$$$outer__Lscala_collection_GenTraversableViewLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$3.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$3.prototype.init___Lscala_collection_SeqViewLike__Lscala_Function1 = (function($$outer, f$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  var mapping = f$1;
  this.mapping$2 = mapping;
  ScalaJS.c.scala_collection_SeqViewLike$AbstractTransformed.prototype.init___Lscala_collection_SeqViewLike.call(this, $$outer);
  ScalaJS.impls.scala_collection_GenTraversableViewLike$Mapped$class__$init$__Lscala_collection_GenTraversableViewLike$Mapped__V(this);
  ScalaJS.impls.scala_collection_GenIterableViewLike$Mapped$class__$init$__Lscala_collection_GenIterableViewLike$Mapped__V(this);
  ScalaJS.impls.scala_collection_GenSeqViewLike$Mapped$class__$init$__Lscala_collection_GenSeqViewLike$Mapped__V(this);
  return this
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$3.prototype.scala$collection$GenTraversableViewLike$Mapped$$$outer__ = (function() {
  return this.scala$collection$GenTraversableViewLike$Mapped$$$outer__Lscala_collection_GenTraversableViewLike()
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$3.prototype.scala$collection$GenIterableViewLike$Mapped$$$outer__ = (function() {
  return this.scala$collection$GenIterableViewLike$Mapped$$$outer__Lscala_collection_GenIterableViewLike()
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$3.prototype.scala$collection$GenSeqViewLike$Mapped$$$outer__ = (function() {
  return this.scala$collection$GenSeqViewLike$Mapped$$$outer__Lscala_collection_GenSeqViewLike()
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$3.prototype.mapping__ = (function() {
  return this.mapping__Lscala_Function1()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_SeqViewLike$$anon$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_SeqViewLike$$anon$3.prototype = ScalaJS.c.scala_collection_SeqViewLike$$anon$3.prototype;
ScalaJS.is.scala_collection_SeqViewLike$$anon$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_SeqViewLike$$anon$3)))
});
ScalaJS.as.scala_collection_SeqViewLike$$anon$3 = (function(obj) {
  if ((ScalaJS.is.scala_collection_SeqViewLike$$anon$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.SeqViewLike$$anon$3")
  }
});
ScalaJS.isArrayOf.scala_collection_SeqViewLike$$anon$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_SeqViewLike$$anon$3)))
});
ScalaJS.asArrayOf.scala_collection_SeqViewLike$$anon$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_SeqViewLike$$anon$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.SeqViewLike$$anon$3;", depth)
  }
});
ScalaJS.data.scala_collection_SeqViewLike$$anon$3 = new ScalaJS.ClassTypeData({
  scala_collection_SeqViewLike$$anon$3: 0
}, false, "scala.collection.SeqViewLike$$anon$3", ScalaJS.data.scala_collection_SeqViewLike$AbstractTransformed, {
  scala_collection_SeqViewLike$$anon$3: 1,
  scala_collection_SeqViewLike$Mapped: 1,
  scala_collection_GenSeqViewLike$Mapped: 1,
  scala_collection_IterableViewLike$Mapped: 1,
  scala_collection_GenIterableViewLike$Mapped: 1,
  scala_collection_TraversableViewLike$Mapped: 1,
  scala_collection_GenTraversableViewLike$Mapped: 1,
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
ScalaJS.c.scala_collection_SeqViewLike$$anon$3.prototype.$classData = ScalaJS.data.scala_collection_SeqViewLike$$anon$3;
//@ sourceMappingURL=SeqViewLike$$anon$3.js.map
