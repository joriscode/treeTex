/** @constructor */
ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit = (function() {
  ScalaJS.c.scala_collection_mutable_WrappedArray.call(this);
  this.array$6 = null
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit.prototype = new ScalaJS.inheritable.scala_collection_mutable_WrappedArray();
ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit.prototype.constructor = ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit;
ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit.prototype.array__ALscala_runtime_BoxedUnit = (function() {
  return this.array$6
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit.prototype.elemTag__Lscala_reflect_ClassTag = (function() {
  return ScalaJS.modules.scala_reflect_ClassTag().Unit__Lscala_reflect_ClassTag()
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit.prototype.length__I = (function() {
  return this.array__ALscala_runtime_BoxedUnit().underlying.length
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit.prototype.apply__I__V = (function(index) {
  this.apply$mcVI$sp__I__V(index)
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit.prototype.update__I__Lscala_runtime_BoxedUnit__V = (function(index, elem) {
  this.array__ALscala_runtime_BoxedUnit().underlying[index] = elem
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit.prototype.apply$mcVI$sp__I__V = (function(index) {
  this.array__ALscala_runtime_BoxedUnit().underlying[index]
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit.prototype.update__I__O__V = (function(index, elem) {
  this.update__I__Lscala_runtime_BoxedUnit__V(index, ScalaJS.as.scala_runtime_BoxedUnit(elem))
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit.prototype.apply__O__O = (function(v1) {
  this.apply__I__V(ScalaJS.uI(v1));
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit.prototype.apply__I__O = (function(index) {
  this.apply__I__V(index);
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit.prototype.array__O = (function() {
  return this.array__ALscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit.prototype.init___ALscala_runtime_BoxedUnit = (function(array) {
  this.array$6 = array;
  ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit.prototype.update__I__Lscala_runtime_BoxedUnit__ = (function(index, elem) {
  return ScalaJS.bV(this.update__I__Lscala_runtime_BoxedUnit__V(index, elem))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_WrappedArray$ofUnit = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_WrappedArray$ofUnit.prototype = ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit.prototype;
ScalaJS.is.scala_collection_mutable_WrappedArray$ofUnit = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_WrappedArray$ofUnit)))
});
ScalaJS.as.scala_collection_mutable_WrappedArray$ofUnit = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_WrappedArray$ofUnit(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.WrappedArray$ofUnit")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_WrappedArray$ofUnit = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_WrappedArray$ofUnit)))
});
ScalaJS.asArrayOf.scala_collection_mutable_WrappedArray$ofUnit = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_WrappedArray$ofUnit(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.WrappedArray$ofUnit;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_WrappedArray$ofUnit = new ScalaJS.ClassTypeData({
  scala_collection_mutable_WrappedArray$ofUnit: 0
}, false, "scala.collection.mutable.WrappedArray$ofUnit", ScalaJS.data.scala_collection_mutable_WrappedArray, {
  scala_collection_mutable_WrappedArray$ofUnit: 1,
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
ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit.prototype.$classData = ScalaJS.data.scala_collection_mutable_WrappedArray$ofUnit;
//@ sourceMappingURL=WrappedArray$ofUnit.js.map
