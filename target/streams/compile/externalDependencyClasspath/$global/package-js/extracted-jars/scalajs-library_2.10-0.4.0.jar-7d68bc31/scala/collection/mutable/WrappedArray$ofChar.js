/** @constructor */
ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar = (function() {
  ScalaJS.c.scala_collection_mutable_WrappedArray.call(this);
  this.array$6 = null
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar.prototype = new ScalaJS.inheritable.scala_collection_mutable_WrappedArray();
ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar.prototype.constructor = ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar;
ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar.prototype.array__AC = (function() {
  return this.array$6
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar.prototype.elemTag__Lscala_reflect_ClassTag = (function() {
  return ScalaJS.modules.scala_reflect_ClassTag().Char__Lscala_reflect_ClassTag()
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar.prototype.length__I = (function() {
  return this.array__AC().underlying.length
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar.prototype.apply__I__C = (function(index) {
  return this.array__AC().underlying[index]
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar.prototype.update__I__C__V = (function(index, elem) {
  this.array__AC().underlying[index] = elem
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar.prototype.update__I__O__V = (function(index, elem) {
  this.update__I__C__V(index, ScalaJS.uC(elem))
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bC(this.apply__I__C(ScalaJS.uI(v1)))
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar.prototype.apply__I__O = (function(index) {
  return ScalaJS.bC(this.apply__I__C(index))
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar.prototype.array__O = (function() {
  return this.array__AC()
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar.prototype.init___AC = (function(array) {
  this.array$6 = array;
  ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar.prototype.update__I__C__ = (function(index, elem) {
  return ScalaJS.bV(this.update__I__C__V(index, elem))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_WrappedArray$ofChar = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_WrappedArray$ofChar.prototype = ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar.prototype;
ScalaJS.is.scala_collection_mutable_WrappedArray$ofChar = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_WrappedArray$ofChar)))
});
ScalaJS.as.scala_collection_mutable_WrappedArray$ofChar = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_WrappedArray$ofChar(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.WrappedArray$ofChar")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_WrappedArray$ofChar = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_WrappedArray$ofChar)))
});
ScalaJS.asArrayOf.scala_collection_mutable_WrappedArray$ofChar = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_WrappedArray$ofChar(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.WrappedArray$ofChar;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_WrappedArray$ofChar = new ScalaJS.ClassTypeData({
  scala_collection_mutable_WrappedArray$ofChar: 0
}, false, "scala.collection.mutable.WrappedArray$ofChar", ScalaJS.data.scala_collection_mutable_WrappedArray, {
  scala_collection_mutable_WrappedArray$ofChar: 1,
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
ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar.prototype.$classData = ScalaJS.data.scala_collection_mutable_WrappedArray$ofChar;
//@ sourceMappingURL=WrappedArray$ofChar.js.map
