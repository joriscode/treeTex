/** @constructor */
ScalaJS.c.scala_collection_immutable_BitSet$BitSetN = (function() {
  ScalaJS.c.scala_collection_immutable_BitSet.call(this);
  this.elems$5 = null
});
ScalaJS.c.scala_collection_immutable_BitSet$BitSetN.prototype = new ScalaJS.inheritable.scala_collection_immutable_BitSet();
ScalaJS.c.scala_collection_immutable_BitSet$BitSetN.prototype.constructor = ScalaJS.c.scala_collection_immutable_BitSet$BitSetN;
ScalaJS.c.scala_collection_immutable_BitSet$BitSetN.prototype.elems__AJ = (function() {
  return this.elems$5
});
ScalaJS.c.scala_collection_immutable_BitSet$BitSetN.prototype.nwords__I = (function() {
  return this.elems__AJ().underlying.length
});
ScalaJS.c.scala_collection_immutable_BitSet$BitSetN.prototype.word__I__J = (function(idx) {
  if ((idx < this.nwords__I())) {
    return this.elems__AJ().underlying[idx]
  } else {
    return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0)
  }
});
ScalaJS.c.scala_collection_immutable_BitSet$BitSetN.prototype.updateWord__I__J__Lscala_collection_immutable_BitSet = (function(idx, w) {
  return this.fromBitMaskNoCopy__AJ__Lscala_collection_immutable_BitSet(ScalaJS.modules.scala_collection_BitSetLike().updateArray__AJ__I__J__AJ(this.elems__AJ(), idx, w))
});
ScalaJS.c.scala_collection_immutable_BitSet$BitSetN.prototype.init___AJ = (function(elems) {
  this.elems$5 = elems;
  ScalaJS.c.scala_collection_immutable_BitSet.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_immutable_BitSet$BitSetN.prototype.elems__ = (function() {
  return this.elems__AJ()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_BitSet$BitSetN = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_BitSet$BitSetN.prototype = ScalaJS.c.scala_collection_immutable_BitSet$BitSetN.prototype;
ScalaJS.is.scala_collection_immutable_BitSet$BitSetN = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_BitSet$BitSetN)))
});
ScalaJS.as.scala_collection_immutable_BitSet$BitSetN = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_BitSet$BitSetN(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.BitSet$BitSetN")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_BitSet$BitSetN = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_BitSet$BitSetN)))
});
ScalaJS.asArrayOf.scala_collection_immutable_BitSet$BitSetN = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_BitSet$BitSetN(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.BitSet$BitSetN;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_BitSet$BitSetN = new ScalaJS.ClassTypeData({
  scala_collection_immutable_BitSet$BitSetN: 0
}, false, "scala.collection.immutable.BitSet$BitSetN", ScalaJS.data.scala_collection_immutable_BitSet, {
  scala_collection_immutable_BitSet$BitSetN: 1,
  scala_collection_immutable_BitSet: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_BitSet: 1,
  scala_collection_BitSetLike: 1,
  scala_collection_immutable_SortedSet: 1,
  scala_collection_SortedSet: 1,
  scala_collection_SortedSetLike: 1,
  scala_collection_generic_Sorted: 1,
  scala_collection_immutable_Set: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
  scala_collection_AbstractSet: 1,
  scala_collection_Set: 1,
  scala_collection_SetLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_collection_GenSet: 1,
  scala_collection_generic_GenericSetTemplate: 1,
  scala_collection_GenSetLike: 1,
  scala_Function1: 1,
  scala_collection_AbstractIterable: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_AbstractTraversable: 1,
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
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_BitSet$BitSetN.prototype.$classData = ScalaJS.data.scala_collection_immutable_BitSet$BitSetN;
//@ sourceMappingURL=BitSet$BitSetN.js.map
