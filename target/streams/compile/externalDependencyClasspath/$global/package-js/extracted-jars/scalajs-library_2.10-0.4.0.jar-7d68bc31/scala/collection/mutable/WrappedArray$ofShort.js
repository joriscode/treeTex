/** @constructor */
ScalaJS.c.scala_collection_mutable_WrappedArray$ofShort = (function() {
  ScalaJS.c.scala_collection_mutable_WrappedArray.call(this);
  this.array$6 = null
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofShort.prototype = new ScalaJS.inheritable.scala_collection_mutable_WrappedArray();
ScalaJS.c.scala_collection_mutable_WrappedArray$ofShort.prototype.constructor = ScalaJS.c.scala_collection_mutable_WrappedArray$ofShort;
ScalaJS.c.scala_collection_mutable_WrappedArray$ofShort.prototype.array__AS = (function() {
  return this.array$6
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofShort.prototype.elemTag__Lscala_reflect_ClassTag = (function() {
  return ScalaJS.modules.scala_reflect_ClassTag().Short__Lscala_reflect_ClassTag()
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofShort.prototype.length__I = (function() {
  return this.array__AS().underlying.length
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofShort.prototype.apply__I__S = (function(index) {
  return this.array__AS().underlying[index]
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofShort.prototype.update__I__S__V = (function(index, elem) {
  this.array__AS().underlying[index] = elem
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofShort.prototype.update__I__O__V = (function(index, elem) {
  this.update__I__S__V(index, ScalaJS.uS(elem))
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofShort.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bS(this.apply__I__S(ScalaJS.uI(v1)))
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofShort.prototype.apply__I__O = (function(index) {
  return ScalaJS.bS(this.apply__I__S(index))
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofShort.prototype.array__O = (function() {
  return this.array__AS()
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofShort.prototype.init___AS = (function(array) {
  this.array$6 = array;
  ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofShort.prototype.update__I__S__ = (function(index, elem) {
  return ScalaJS.bV(this.update__I__S__V(index, elem))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_WrappedArray$ofShort = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_WrappedArray$ofShort.prototype = ScalaJS.c.scala_collection_mutable_WrappedArray$ofShort.prototype;
ScalaJS.is.scala_collection_mutable_WrappedArray$ofShort = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_WrappedArray$ofShort)))
});
ScalaJS.as.scala_collection_mutable_WrappedArray$ofShort = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_WrappedArray$ofShort(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.WrappedArray$ofShort")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_WrappedArray$ofShort = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_WrappedArray$ofShort)))
});
ScalaJS.asArrayOf.scala_collection_mutable_WrappedArray$ofShort = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_WrappedArray$ofShort(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.WrappedArray$ofShort;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_WrappedArray$ofShort = new ScalaJS.ClassTypeData({
  scala_collection_mutable_WrappedArray$ofShort: 0
}, false, "scala.collection.mutable.WrappedArray$ofShort", ScalaJS.data.scala_collection_mutable_WrappedArray, {
  scala_collection_mutable_WrappedArray$ofShort: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_mutable_WrappedArray: 1,
  scala_collection_CustomParallelizable: 1,
  scala_collection_mutable_ArrayLike: 1,
  scala_collection_mutable_IndexedSeqOptimized: 1,
  scala_collection_IndexedSeqOptimized: 1,
  scala_collection_mutable_IndexedSeq: 1,
  scala_collection_mutable_IndexedSeqLike: 1,
  scala_collection_IndexedSeq: 1,
  scala_collection_IndexedSeqLike: 1,
  scala_collection_mutable_AbstractSeq: 1,
  scala_collection_mutable_Seq: 1,
  scala_collection_mutable_SeqLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
  scala_collection_AbstractSeq: 1,
  scala_collection_Seq: 1,
  scala_collection_SeqLike: 1,
  scala_collection_GenSeq: 1,
  scala_collection_GenSeqLike: 1,
  scala_PartialFunction: 1,
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
ScalaJS.c.scala_collection_mutable_WrappedArray$ofShort.prototype.$classData = ScalaJS.data.scala_collection_mutable_WrappedArray$ofShort;
//@ sourceMappingURL=WrappedArray$ofShort.js.map
