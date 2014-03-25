/** @constructor */
ScalaJS.c.scala_collection_immutable_Stream$Cons = (function() {
  ScalaJS.c.scala_collection_immutable_Stream.call(this);
  this.hd$5 = null;
  this.tl$5 = null;
  this.tlVal$5 = null
});
ScalaJS.c.scala_collection_immutable_Stream$Cons.prototype = new ScalaJS.inheritable.scala_collection_immutable_Stream();
ScalaJS.c.scala_collection_immutable_Stream$Cons.prototype.constructor = ScalaJS.c.scala_collection_immutable_Stream$Cons;
ScalaJS.c.scala_collection_immutable_Stream$Cons.prototype.isEmpty__Z = (function() {
  return false
});
ScalaJS.c.scala_collection_immutable_Stream$Cons.prototype.head__O = (function() {
  return this.hd$5
});
ScalaJS.c.scala_collection_immutable_Stream$Cons.prototype.tailDefined__Z = (function() {
  return (this.tlVal$5 !== null)
});
ScalaJS.c.scala_collection_immutable_Stream$Cons.prototype.tail__Lscala_collection_immutable_Stream = (function() {
  if ((!this.tailDefined__Z())) {
    if ((!this.tailDefined__Z())) {
      this.tlVal$5 = ScalaJS.as.scala_collection_immutable_Stream(this.tl$5.apply__O());
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    } else {
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    }
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  return this.tlVal$5
});
ScalaJS.c.scala_collection_immutable_Stream$Cons.prototype.tail__Lscala_collection_LinearSeqOptimized = (function() {
  return this.tail__Lscala_collection_immutable_Stream()
});
ScalaJS.c.scala_collection_immutable_Stream$Cons.prototype.tail__O = (function() {
  return this.tail__Lscala_collection_immutable_Stream()
});
ScalaJS.c.scala_collection_immutable_Stream$Cons.prototype.init___O__Lscala_Function0 = (function(hd, tl) {
  this.hd$5 = hd;
  this.tl$5 = tl;
  ScalaJS.c.scala_collection_immutable_Stream.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Stream$Cons = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Stream$Cons.prototype = ScalaJS.c.scala_collection_immutable_Stream$Cons.prototype;
ScalaJS.is.scala_collection_immutable_Stream$Cons = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Stream$Cons)))
});
ScalaJS.as.scala_collection_immutable_Stream$Cons = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Stream$Cons(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Stream$Cons")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Stream$Cons = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Stream$Cons)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Stream$Cons = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Stream$Cons(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Stream$Cons;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Stream$Cons = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Stream$Cons: 0
}, false, "scala.collection.immutable.Stream$Cons", ScalaJS.data.scala_collection_immutable_Stream, {
  scala_collection_immutable_Stream$Cons: 1,
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
ScalaJS.c.scala_collection_immutable_Stream$Cons.prototype.$classData = ScalaJS.data.scala_collection_immutable_Stream$Cons;
//@ sourceMappingURL=Stream$Cons.js.map
