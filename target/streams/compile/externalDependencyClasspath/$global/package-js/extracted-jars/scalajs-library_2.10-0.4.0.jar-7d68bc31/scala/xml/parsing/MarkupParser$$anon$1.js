/** @constructor */
ScalaJS.c.scala_xml_parsing_MarkupParser$$anon$1 = (function() {
  ScalaJS.c.scala_xml_NodeSeq.call(this);
  this.theSeq$5 = null
});
ScalaJS.c.scala_xml_parsing_MarkupParser$$anon$1.prototype = new ScalaJS.inheritable.scala_xml_NodeSeq();
ScalaJS.c.scala_xml_parsing_MarkupParser$$anon$1.prototype.constructor = ScalaJS.c.scala_xml_parsing_MarkupParser$$anon$1;
ScalaJS.c.scala_xml_parsing_MarkupParser$$anon$1.prototype.theSeq__Lscala_collection_immutable_List = (function() {
  return this.theSeq$5
});
ScalaJS.c.scala_xml_parsing_MarkupParser$$anon$1.prototype.theSeq__Lscala_collection_Seq = (function() {
  return this.theSeq__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_xml_parsing_MarkupParser$$anon$1.prototype.init___Lscala_xml_parsing_MarkupHandler__Lscala_runtime_ObjectRef = (function($$outer, ts$1) {
  ScalaJS.c.scala_xml_NodeSeq.prototype.init___.call(this);
  this.theSeq$5 = ScalaJS.as.scala_xml_NodeBuffer(ts$1.elem$1).toList__Lscala_collection_immutable_List();
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_xml_parsing_MarkupParser$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_parsing_MarkupParser$$anon$1.prototype = ScalaJS.c.scala_xml_parsing_MarkupParser$$anon$1.prototype;
ScalaJS.is.scala_xml_parsing_MarkupParser$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_parsing_MarkupParser$$anon$1)))
});
ScalaJS.as.scala_xml_parsing_MarkupParser$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_xml_parsing_MarkupParser$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.parsing.MarkupParser$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_xml_parsing_MarkupParser$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_parsing_MarkupParser$$anon$1)))
});
ScalaJS.asArrayOf.scala_xml_parsing_MarkupParser$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_parsing_MarkupParser$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.parsing.MarkupParser$$anon$1;", depth)
  }
});
ScalaJS.data.scala_xml_parsing_MarkupParser$$anon$1 = new ScalaJS.ClassTypeData({
  scala_xml_parsing_MarkupParser$$anon$1: 0
}, false, "scala.xml.parsing.MarkupParser$$anon$1", ScalaJS.data.scala_xml_NodeSeq, {
  scala_xml_parsing_MarkupParser$$anon$1: 1,
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
ScalaJS.c.scala_xml_parsing_MarkupParser$$anon$1.prototype.$classData = ScalaJS.data.scala_xml_parsing_MarkupParser$$anon$1;
//@ sourceMappingURL=MarkupParser$$anon$1.js.map
