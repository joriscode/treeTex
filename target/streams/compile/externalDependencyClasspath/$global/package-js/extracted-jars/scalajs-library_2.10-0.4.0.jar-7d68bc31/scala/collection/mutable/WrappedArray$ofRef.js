/** @constructor */
ScalaJS.c.scala_collection_mutable_WrappedArray$ofRef = (function() {
  ScalaJS.c.scala_collection_mutable_WrappedArray.call(this);
  this.array$6 = null;
  this.elemTag$6 = null;
  this.bitmap$0$6 = false
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofRef.prototype = new ScalaJS.inheritable.scala_collection_mutable_WrappedArray();
ScalaJS.c.scala_collection_mutable_WrappedArray$ofRef.prototype.constructor = ScalaJS.c.scala_collection_mutable_WrappedArray$ofRef;
ScalaJS.c.scala_collection_mutable_WrappedArray$ofRef.prototype.elemTag$lzycompute__p6__Lscala_reflect_ClassTag = (function() {
  if ((!this.bitmap$0$6)) {
    this.elemTag$6 = ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.modules.scala_runtime_ScalaRunTime().arrayElementClass__O__Ljava_lang_Class(ScalaJS.objectGetClass(this.array__AO())));
    this.bitmap$0$6 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.elemTag$6
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofRef.prototype.array__AO = (function() {
  return this.array$6
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofRef.prototype.elemTag__Lscala_reflect_ClassTag = (function() {
  if ((!this.bitmap$0$6)) {
    return this.elemTag$lzycompute__p6__Lscala_reflect_ClassTag()
  } else {
    return this.elemTag$6
  }
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofRef.prototype.length__I = (function() {
  return this.array__AO().underlying.length
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofRef.prototype.apply__I__O = (function(index) {
  return this.array__AO().underlying[index]
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofRef.prototype.update__I__O__V = (function(index, elem) {
  this.array__AO().underlying[index] = elem
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofRef.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofRef.prototype.array__O = (function() {
  return this.array__AO()
});
ScalaJS.c.scala_collection_mutable_WrappedArray$ofRef.prototype.init___AO = (function(array) {
  this.array$6 = array;
  ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_WrappedArray$ofRef = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_WrappedArray$ofRef.prototype = ScalaJS.c.scala_collection_mutable_WrappedArray$ofRef.prototype;
ScalaJS.is.scala_collection_mutable_WrappedArray$ofRef = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_WrappedArray$ofRef)))
});
ScalaJS.as.scala_collection_mutable_WrappedArray$ofRef = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_WrappedArray$ofRef(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.WrappedArray$ofRef")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_WrappedArray$ofRef = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_WrappedArray$ofRef)))
});
ScalaJS.asArrayOf.scala_collection_mutable_WrappedArray$ofRef = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_WrappedArray$ofRef(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.WrappedArray$ofRef;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_WrappedArray$ofRef = new ScalaJS.ClassTypeData({
  scala_collection_mutable_WrappedArray$ofRef: 0
}, false, "scala.collection.mutable.WrappedArray$ofRef", ScalaJS.data.scala_collection_mutable_WrappedArray, {
  scala_collection_mutable_WrappedArray$ofRef: 1,
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
ScalaJS.c.scala_collection_mutable_WrappedArray$ofRef.prototype.$classData = ScalaJS.data.scala_collection_mutable_WrappedArray$ofRef;
//@ sourceMappingURL=WrappedArray$ofRef.js.map
