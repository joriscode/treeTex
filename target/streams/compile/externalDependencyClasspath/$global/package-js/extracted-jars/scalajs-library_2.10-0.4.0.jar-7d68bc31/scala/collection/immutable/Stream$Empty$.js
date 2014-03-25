/** @constructor */
ScalaJS.c.scala_collection_immutable_Stream$Empty$ = (function() {
  ScalaJS.c.scala_collection_immutable_Stream.call(this)
});
ScalaJS.c.scala_collection_immutable_Stream$Empty$.prototype = new ScalaJS.inheritable.scala_collection_immutable_Stream();
ScalaJS.c.scala_collection_immutable_Stream$Empty$.prototype.constructor = ScalaJS.c.scala_collection_immutable_Stream$Empty$;
ScalaJS.c.scala_collection_immutable_Stream$Empty$.prototype.isEmpty__Z = (function() {
  return true
});
ScalaJS.c.scala_collection_immutable_Stream$Empty$.prototype.head__Lscala_Nothing = (function() {
  throw new ScalaJS.c.java_util_NoSuchElementException().init___T("head of empty stream")
});
ScalaJS.c.scala_collection_immutable_Stream$Empty$.prototype.tail__Lscala_Nothing = (function() {
  throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("tail of empty stream")
});
ScalaJS.c.scala_collection_immutable_Stream$Empty$.prototype.tailDefined__Z = (function() {
  return false
});
ScalaJS.c.scala_collection_immutable_Stream$Empty$.prototype.readResolve__p5__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_Stream$Empty()
});
ScalaJS.c.scala_collection_immutable_Stream$Empty$.prototype.tail__Lscala_collection_LinearSeqOptimized = (function() {
  return this.tail__Lscala_Nothing()
});
ScalaJS.c.scala_collection_immutable_Stream$Empty$.prototype.tail__O = (function() {
  return this.tail__Lscala_Nothing()
});
ScalaJS.c.scala_collection_immutable_Stream$Empty$.prototype.head__O = (function() {
  return this.head__Lscala_Nothing()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Stream$Empty$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Stream$Empty$.prototype = ScalaJS.c.scala_collection_immutable_Stream$Empty$.prototype;
ScalaJS.is.scala_collection_immutable_Stream$Empty$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Stream$Empty$)))
});
ScalaJS.as.scala_collection_immutable_Stream$Empty$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Stream$Empty$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Stream$Empty")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Stream$Empty$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Stream$Empty$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Stream$Empty$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Stream$Empty$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Stream$Empty;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Stream$Empty$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Stream$Empty$: 0
}, false, "scala.collection.immutable.Stream$Empty$", ScalaJS.data.scala_collection_immutable_Stream, {
  scala_collection_immutable_Stream$Empty$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_immutable_Stream: 1,
  scala_collection_LinearSeqOptimized: 1,
  scala_collection_immutable_LinearSeq: 1,
  scala_collection_LinearSeq: 1,
  scala_collection_LinearSeqLike: 1,
  scala_collection_immutable_Seq: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
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
ScalaJS.c.scala_collection_immutable_Stream$Empty$.prototype.$classData = ScalaJS.data.scala_collection_immutable_Stream$Empty$;
ScalaJS.moduleInstances.scala_collection_immutable_Stream$Empty = undefined;
ScalaJS.modules.scala_collection_immutable_Stream$Empty = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_Stream$Empty)) {
    ScalaJS.moduleInstances.scala_collection_immutable_Stream$Empty = new ScalaJS.c.scala_collection_immutable_Stream$Empty$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_Stream$Empty
});
//@ sourceMappingURL=Stream$Empty$.js.map
