/** @constructor */
ScalaJS.c.scala_collection_generic_SeqFactory = (function() {
  ScalaJS.c.scala_collection_generic_GenSeqFactory.call(this)
});
ScalaJS.c.scala_collection_generic_SeqFactory.prototype = new ScalaJS.inheritable.scala_collection_generic_GenSeqFactory();
ScalaJS.c.scala_collection_generic_SeqFactory.prototype.constructor = ScalaJS.c.scala_collection_generic_SeqFactory;
ScalaJS.c.scala_collection_generic_SeqFactory.prototype.unapplySeq__Lscala_collection_Seq__Lscala_Some = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_collection_generic_SeqFactory.prototype.unapplySeq__Lscala_collection_Seq__ = (function(x) {
  return this.unapplySeq__Lscala_collection_Seq__Lscala_Some(x)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_SeqFactory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_SeqFactory.prototype = ScalaJS.c.scala_collection_generic_SeqFactory.prototype;
ScalaJS.is.scala_collection_generic_SeqFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_SeqFactory)))
});
ScalaJS.as.scala_collection_generic_SeqFactory = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_SeqFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.SeqFactory")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_SeqFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_SeqFactory)))
});
ScalaJS.asArrayOf.scala_collection_generic_SeqFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_SeqFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.SeqFactory;", depth)
  }
});
ScalaJS.data.scala_collection_generic_SeqFactory = new ScalaJS.ClassTypeData({
  scala_collection_generic_SeqFactory: 0
}, false, "scala.collection.generic.SeqFactory", ScalaJS.data.scala_collection_generic_GenSeqFactory, {
  scala_collection_generic_SeqFactory: 1,
  scala_collection_generic_TraversableFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSeqFactory: 1,
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_SeqFactory.prototype.$classData = ScalaJS.data.scala_collection_generic_SeqFactory;
//@ sourceMappingURL=SeqFactory.js.map
