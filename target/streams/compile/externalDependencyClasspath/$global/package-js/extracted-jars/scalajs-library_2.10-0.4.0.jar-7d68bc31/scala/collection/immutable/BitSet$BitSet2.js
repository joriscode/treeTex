/** @constructor */
ScalaJS.c.scala_collection_immutable_BitSet$BitSet2 = (function() {
  ScalaJS.c.scala_collection_immutable_BitSet.call(this);
  this.elems0$5 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.elems1$5 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long()
});
ScalaJS.c.scala_collection_immutable_BitSet$BitSet2.prototype = new ScalaJS.inheritable.scala_collection_immutable_BitSet();
ScalaJS.c.scala_collection_immutable_BitSet$BitSet2.prototype.constructor = ScalaJS.c.scala_collection_immutable_BitSet$BitSet2;
ScalaJS.c.scala_collection_immutable_BitSet$BitSet2.prototype.elems0__J = (function() {
  return this.elems0$5
});
ScalaJS.c.scala_collection_immutable_BitSet$BitSet2.prototype.nwords__I = (function() {
  return 2
});
ScalaJS.c.scala_collection_immutable_BitSet$BitSet2.prototype.word__I__J = (function(idx) {
  if ((idx === 0)) {
    return this.elems0__J()
  } else {
    if ((idx === 1)) {
      return this.elems1$5
    } else {
      return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0)
    }
  }
});
ScalaJS.c.scala_collection_immutable_BitSet$BitSet2.prototype.updateWord__I__J__Lscala_collection_immutable_BitSet = (function(idx, w) {
  if ((idx === 0)) {
    return new ScalaJS.c.scala_collection_immutable_BitSet$BitSet2().init___J__J(w, this.elems1$5)
  } else {
    if ((idx === 1)) {
      return new ScalaJS.c.scala_collection_immutable_BitSet$BitSet2().init___J__J(this.elems0__J(), w)
    } else {
      return this.fromBitMaskNoCopy__AJ__Lscala_collection_immutable_BitSet(ScalaJS.modules.scala_collection_BitSetLike().updateArray__AJ__I__J__AJ(ScalaJS.modules.scala_Array().apply__J__Lscala_collection_Seq__AJ(this.elems0__J(), ScalaJS.modules.scala_Predef().wrapLongArray__AJ__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Long.getArrayOf(), [this.elems1$5]))), idx, w))
    }
  }
});
ScalaJS.c.scala_collection_immutable_BitSet$BitSet2.prototype.init___J__J = (function(elems0, elems1) {
  this.elems0$5 = elems0;
  this.elems1$5 = elems1;
  ScalaJS.c.scala_collection_immutable_BitSet.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_immutable_BitSet$BitSet2.prototype.elems0__ = (function() {
  return ScalaJS.bJ(this.elems0__J())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_BitSet$BitSet2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_BitSet$BitSet2.prototype = ScalaJS.c.scala_collection_immutable_BitSet$BitSet2.prototype;
ScalaJS.is.scala_collection_immutable_BitSet$BitSet2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_BitSet$BitSet2)))
});
ScalaJS.as.scala_collection_immutable_BitSet$BitSet2 = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_BitSet$BitSet2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.BitSet$BitSet2")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_BitSet$BitSet2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_BitSet$BitSet2)))
});
ScalaJS.asArrayOf.scala_collection_immutable_BitSet$BitSet2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_BitSet$BitSet2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.BitSet$BitSet2;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_BitSet$BitSet2 = new ScalaJS.ClassTypeData({
  scala_collection_immutable_BitSet$BitSet2: 0
}, false, "scala.collection.immutable.BitSet$BitSet2", ScalaJS.data.scala_collection_immutable_BitSet, {
  scala_collection_immutable_BitSet$BitSet2: 1,
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
ScalaJS.c.scala_collection_immutable_BitSet$BitSet2.prototype.$classData = ScalaJS.data.scala_collection_immutable_BitSet$BitSet2;
//@ sourceMappingURL=BitSet$BitSet2.js.map
