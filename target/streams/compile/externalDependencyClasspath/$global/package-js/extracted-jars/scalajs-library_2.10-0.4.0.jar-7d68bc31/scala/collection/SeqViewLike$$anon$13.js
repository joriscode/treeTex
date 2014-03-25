/** @constructor */
ScalaJS.c.scala_collection_SeqViewLike$$anon$13 = (function() {
  ScalaJS.c.scala_collection_SeqViewLike$AbstractTransformed.call(this);
  this.fst$2 = null;
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$13.prototype = new ScalaJS.inheritable.scala_collection_SeqViewLike$AbstractTransformed();
ScalaJS.c.scala_collection_SeqViewLike$$anon$13.prototype.constructor = ScalaJS.c.scala_collection_SeqViewLike$$anon$13;
ScalaJS.c.scala_collection_SeqViewLike$$anon$13.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Prepended$class__iterator__Lscala_collection_GenSeqViewLike$Prepended__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$13.prototype.length__I = (function() {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Prepended$class__length__Lscala_collection_GenSeqViewLike$Prepended__I(this)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$13.prototype.apply__I__O = (function(idx) {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Prepended$class__apply__Lscala_collection_GenSeqViewLike$Prepended__I__O(this, idx)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$13.prototype.viewIdentifier__T = (function() {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Prepended$class__viewIdentifier__Lscala_collection_GenSeqViewLike$Prepended__T(this)
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$13.prototype.fst__O = (function() {
  return this.fst$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$13.prototype.scala$collection$GenSeqViewLike$Prepended$$$outer__Lscala_collection_GenSeqViewLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$13.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$13.prototype.init___Lscala_collection_SeqViewLike__O = (function($$outer, elem$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  var fst = elem$1;
  this.fst$2 = fst;
  ScalaJS.c.scala_collection_SeqViewLike$AbstractTransformed.prototype.init___Lscala_collection_SeqViewLike.call(this, $$outer);
  ScalaJS.impls.scala_collection_GenSeqViewLike$Prepended$class__$init$__Lscala_collection_GenSeqViewLike$Prepended__V(this);
  return this
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$13.prototype.scala$collection$GenSeqViewLike$Prepended$$$outer__ = (function() {
  return this.scala$collection$GenSeqViewLike$Prepended$$$outer__Lscala_collection_GenSeqViewLike()
});
ScalaJS.c.scala_collection_SeqViewLike$$anon$13.prototype.fst__ = (function() {
  return this.fst__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_SeqViewLike$$anon$13 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_SeqViewLike$$anon$13.prototype = ScalaJS.c.scala_collection_SeqViewLike$$anon$13.prototype;
ScalaJS.is.scala_collection_SeqViewLike$$anon$13 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_SeqViewLike$$anon$13)))
});
ScalaJS.as.scala_collection_SeqViewLike$$anon$13 = (function(obj) {
  if ((ScalaJS.is.scala_collection_SeqViewLike$$anon$13(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.SeqViewLike$$anon$13")
  }
});
ScalaJS.isArrayOf.scala_collection_SeqViewLike$$anon$13 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_SeqViewLike$$anon$13)))
});
ScalaJS.asArrayOf.scala_collection_SeqViewLike$$anon$13 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_SeqViewLike$$anon$13(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.SeqViewLike$$anon$13;", depth)
  }
});
ScalaJS.data.scala_collection_SeqViewLike$$anon$13 = new ScalaJS.ClassTypeData({
  scala_collection_SeqViewLike$$anon$13: 0
}, false, "scala.collection.SeqViewLike$$anon$13", ScalaJS.data.scala_collection_SeqViewLike$AbstractTransformed, {
  scala_collection_SeqViewLike$$anon$13: 1,
  scala_collection_SeqViewLike$Prepended: 1,
  scala_collection_GenSeqViewLike$Prepended: 1,
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
ScalaJS.c.scala_collection_SeqViewLike$$anon$13.prototype.$classData = ScalaJS.data.scala_collection_SeqViewLike$$anon$13;
//@ sourceMappingURL=SeqViewLike$$anon$13.js.map
