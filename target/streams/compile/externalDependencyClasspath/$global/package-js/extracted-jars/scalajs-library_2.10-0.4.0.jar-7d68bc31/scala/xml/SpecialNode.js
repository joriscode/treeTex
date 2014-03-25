/** @constructor */
ScalaJS.c.scala_xml_SpecialNode = (function() {
  ScalaJS.c.scala_xml_Node.call(this)
});
ScalaJS.c.scala_xml_SpecialNode.prototype = new ScalaJS.inheritable.scala_xml_Node();
ScalaJS.c.scala_xml_SpecialNode.prototype.constructor = ScalaJS.c.scala_xml_SpecialNode;
ScalaJS.c.scala_xml_SpecialNode.prototype.attributes__Lscala_xml_Null$ = (function() {
  return ScalaJS.modules.scala_xml_Null()
});
ScalaJS.c.scala_xml_SpecialNode.prototype.namespace__Lscala_Null = (function() {
  return null
});
ScalaJS.c.scala_xml_SpecialNode.prototype.child__Lscala_collection_immutable_Nil$ = (function() {
  return ScalaJS.modules.scala_collection_immutable_Nil()
});
ScalaJS.c.scala_xml_SpecialNode.prototype.child__Lscala_collection_Seq = (function() {
  return this.child__Lscala_collection_immutable_Nil$()
});
ScalaJS.c.scala_xml_SpecialNode.prototype.namespace__T = (function() {
  return this.namespace__Lscala_Null()
});
ScalaJS.c.scala_xml_SpecialNode.prototype.attributes__Lscala_xml_MetaData = (function() {
  return this.attributes__Lscala_xml_Null$()
});
ScalaJS.c.scala_xml_SpecialNode.prototype.buildString__Lscala_collection_mutable_StringBuilder__ = (function(sb) {
  return this.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_SpecialNode = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_SpecialNode.prototype = ScalaJS.c.scala_xml_SpecialNode.prototype;
ScalaJS.is.scala_xml_SpecialNode = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_SpecialNode)))
});
ScalaJS.as.scala_xml_SpecialNode = (function(obj) {
  if ((ScalaJS.is.scala_xml_SpecialNode(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.SpecialNode")
  }
});
ScalaJS.isArrayOf.scala_xml_SpecialNode = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_SpecialNode)))
});
ScalaJS.asArrayOf.scala_xml_SpecialNode = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_SpecialNode(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.SpecialNode;", depth)
  }
});
ScalaJS.data.scala_xml_SpecialNode = new ScalaJS.ClassTypeData({
  scala_xml_SpecialNode: 0
}, false, "scala.xml.SpecialNode", ScalaJS.data.scala_xml_Node, {
  scala_xml_SpecialNode: 1,
  scala_xml_pull_XMLEvent: 1,
  scala_xml_Node: 1,
  scala_xml_NodeSeq: 1,
  scala_xml_Equality: 1,
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
ScalaJS.c.scala_xml_SpecialNode.prototype.$classData = ScalaJS.data.scala_xml_SpecialNode;
//@ sourceMappingURL=SpecialNode.js.map
