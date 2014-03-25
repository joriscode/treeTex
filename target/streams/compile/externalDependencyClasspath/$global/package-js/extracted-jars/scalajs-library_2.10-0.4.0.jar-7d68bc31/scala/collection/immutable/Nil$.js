/** @constructor */
ScalaJS.c.scala_collection_immutable_Nil$ = (function() {
  ScalaJS.c.scala_collection_immutable_List.call(this)
});
ScalaJS.c.scala_collection_immutable_Nil$.prototype = new ScalaJS.inheritable.scala_collection_immutable_List();
ScalaJS.c.scala_collection_immutable_Nil$.prototype.constructor = ScalaJS.c.scala_collection_immutable_Nil$;
ScalaJS.c.scala_collection_immutable_Nil$.prototype.isEmpty__Z = (function() {
  return true
});
ScalaJS.c.scala_collection_immutable_Nil$.prototype.head__Lscala_Nothing = (function() {
  throw new ScalaJS.c.java_util_NoSuchElementException().init___T("head of empty list")
});
ScalaJS.c.scala_collection_immutable_Nil$.prototype.tail__Lscala_collection_immutable_List = (function() {
  throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("tail of empty list")
});
ScalaJS.c.scala_collection_immutable_Nil$.prototype.equals__O__Z = (function(that) {
  var x1 = that;
  if (ScalaJS.is.scala_collection_GenSeq(x1)) {
    var x2 = ScalaJS.as.scala_collection_GenSeq(x1);
    return x2.isEmpty__Z()
  };
  return false
});
ScalaJS.c.scala_collection_immutable_Nil$.prototype.productPrefix__T = (function() {
  return "Nil"
});
ScalaJS.c.scala_collection_immutable_Nil$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.scala_collection_immutable_Nil$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.scala_collection_immutable_Nil$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_Nil$.prototype.readResolve__p5__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_Nil()
});
ScalaJS.c.scala_collection_immutable_Nil$.prototype.tail__Lscala_collection_LinearSeqOptimized = (function() {
  return this.tail__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_Nil$.prototype.tail__O = (function() {
  return this.tail__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_Nil$.prototype.head__O = (function() {
  return this.head__Lscala_Nothing()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Nil$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Nil$.prototype = ScalaJS.c.scala_collection_immutable_Nil$.prototype;
ScalaJS.is.scala_collection_immutable_Nil$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Nil$)))
});
ScalaJS.as.scala_collection_immutable_Nil$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Nil$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Nil")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Nil$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Nil$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Nil$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Nil$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Nil;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Nil$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Nil$: 0
}, false, "scala.collection.immutable.Nil$", ScalaJS.data.scala_collection_immutable_List, {
  scala_collection_immutable_Nil$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_immutable_List: 1,
  scala_collection_LinearSeqOptimized: 1,
  scala_Product: 1,
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
ScalaJS.c.scala_collection_immutable_Nil$.prototype.$classData = ScalaJS.data.scala_collection_immutable_Nil$;
ScalaJS.moduleInstances.scala_collection_immutable_Nil = undefined;
ScalaJS.modules.scala_collection_immutable_Nil = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_Nil)) {
    ScalaJS.moduleInstances.scala_collection_immutable_Nil = new ScalaJS.c.scala_collection_immutable_Nil$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_Nil
});
//@ sourceMappingURL=Nil$.js.map
