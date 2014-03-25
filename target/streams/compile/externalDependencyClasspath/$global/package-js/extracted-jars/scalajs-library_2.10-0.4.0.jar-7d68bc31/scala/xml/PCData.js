/** @constructor */
ScalaJS.c.scala_xml_PCData = (function() {
  ScalaJS.c.scala_xml_Atom.call(this)
});
ScalaJS.c.scala_xml_PCData.prototype = new ScalaJS.inheritable.scala_xml_Atom();
ScalaJS.c.scala_xml_PCData.prototype.constructor = ScalaJS.c.scala_xml_PCData;
ScalaJS.c.scala_xml_PCData.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  return sb.append__T__Lscala_collection_mutable_StringBuilder(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("<![CDATA[%s]]>")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.as.java_lang_String(ScalaJS.c.scala_xml_Atom.prototype.data__O.call(this))]))))
});
ScalaJS.c.scala_xml_PCData.prototype.init___T = (function(data) {
  ScalaJS.c.scala_xml_Atom.prototype.init___O.call(this, data);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_xml_PCData = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_PCData.prototype = ScalaJS.c.scala_xml_PCData.prototype;
ScalaJS.is.scala_xml_PCData = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_PCData)))
});
ScalaJS.as.scala_xml_PCData = (function(obj) {
  if ((ScalaJS.is.scala_xml_PCData(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.PCData")
  }
});
ScalaJS.isArrayOf.scala_xml_PCData = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_PCData)))
});
ScalaJS.asArrayOf.scala_xml_PCData = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_PCData(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.PCData;", depth)
  }
});
ScalaJS.data.scala_xml_PCData = new ScalaJS.ClassTypeData({
  scala_xml_PCData: 0
}, false, "scala.xml.PCData", ScalaJS.data.scala_xml_Atom, {
  scala_xml_PCData: 1,
  scala_xml_Atom: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
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
ScalaJS.c.scala_xml_PCData.prototype.$classData = ScalaJS.data.scala_xml_PCData;
//@ sourceMappingURL=PCData.js.map
