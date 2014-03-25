/** @constructor */
ScalaJS.c.scala_collection_immutable_Queue$EmptyQueue$ = (function() {
  ScalaJS.c.scala_collection_immutable_Queue.call(this)
});
ScalaJS.c.scala_collection_immutable_Queue$EmptyQueue$.prototype = new ScalaJS.inheritable.scala_collection_immutable_Queue();
ScalaJS.c.scala_collection_immutable_Queue$EmptyQueue$.prototype.constructor = ScalaJS.c.scala_collection_immutable_Queue$EmptyQueue$;
ScalaJS.c.scala_collection_immutable_Queue$EmptyQueue$.prototype.readResolve__p5__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_Queue$EmptyQueue()
});
ScalaJS.c.scala_collection_immutable_Queue$EmptyQueue$.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_immutable_Queue.prototype.init___Lscala_collection_immutable_List__Lscala_collection_immutable_List.call(this, ScalaJS.modules.scala_collection_immutable_Nil(), ScalaJS.modules.scala_collection_immutable_Nil());
  ScalaJS.moduleInstances.scala_collection_immutable_Queue$EmptyQueue = this;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Queue$EmptyQueue$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Queue$EmptyQueue$.prototype = ScalaJS.c.scala_collection_immutable_Queue$EmptyQueue$.prototype;
ScalaJS.is.scala_collection_immutable_Queue$EmptyQueue$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Queue$EmptyQueue$)))
});
ScalaJS.as.scala_collection_immutable_Queue$EmptyQueue$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Queue$EmptyQueue$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Queue$EmptyQueue")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Queue$EmptyQueue$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Queue$EmptyQueue$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Queue$EmptyQueue$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Queue$EmptyQueue$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Queue$EmptyQueue;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Queue$EmptyQueue$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Queue$EmptyQueue$: 0
}, false, "scala.collection.immutable.Queue$EmptyQueue$", ScalaJS.data.scala_collection_immutable_Queue, {
  scala_collection_immutable_Queue$EmptyQueue$: 1,
  scala_collection_immutable_Queue: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
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
ScalaJS.c.scala_collection_immutable_Queue$EmptyQueue$.prototype.$classData = ScalaJS.data.scala_collection_immutable_Queue$EmptyQueue$;
ScalaJS.moduleInstances.scala_collection_immutable_Queue$EmptyQueue = undefined;
ScalaJS.modules.scala_collection_immutable_Queue$EmptyQueue = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_Queue$EmptyQueue)) {
    ScalaJS.moduleInstances.scala_collection_immutable_Queue$EmptyQueue = new ScalaJS.c.scala_collection_immutable_Queue$EmptyQueue$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_Queue$EmptyQueue
});
//@ sourceMappingURL=Queue$EmptyQueue$.js.map
