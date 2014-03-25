/** @constructor */
ScalaJS.c.scala_xml_Comment = (function() {
  ScalaJS.c.scala_xml_SpecialNode.call(this);
  this.commentText$7 = null
});
ScalaJS.c.scala_xml_Comment.prototype = new ScalaJS.inheritable.scala_xml_SpecialNode();
ScalaJS.c.scala_xml_Comment.prototype.constructor = ScalaJS.c.scala_xml_Comment;
ScalaJS.c.scala_xml_Comment.prototype.commentText__T = (function() {
  return this.commentText$7
});
ScalaJS.c.scala_xml_Comment.prototype.label__T = (function() {
  return "#REM"
});
ScalaJS.c.scala_xml_Comment.prototype.text__T = (function() {
  return ""
});
ScalaJS.c.scala_xml_Comment.prototype.doCollectNamespaces__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_Comment.prototype.doTransform__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_Comment.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  return sb.append__T__Lscala_collection_mutable_StringBuilder("<!--").append__T__Lscala_collection_mutable_StringBuilder(this.commentText__T()).append__T__Lscala_collection_mutable_StringBuilder("-->")
});
ScalaJS.c.scala_xml_Comment.prototype.copy__T__Lscala_xml_Comment = (function(commentText) {
  return new ScalaJS.c.scala_xml_Comment().init___T(commentText)
});
ScalaJS.c.scala_xml_Comment.prototype.copy$default$1__T = (function() {
  return this.commentText__T()
});
ScalaJS.c.scala_xml_Comment.prototype.productPrefix__T = (function() {
  return "Comment"
});
ScalaJS.c.scala_xml_Comment.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_xml_Comment.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.commentText__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_Comment.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_Comment.prototype.init___T = (function(commentText) {
  this.commentText$7 = commentText;
  ScalaJS.c.scala_xml_SpecialNode.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  if (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__contains__Lscala_scalajs_runtime_RuntimeString__Ljava_lang_CharSequence__Z(commentText, "--")) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("text contains \"--\"")
  };
  return this
});
ScalaJS.c.scala_xml_Comment.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_Comment.prototype.productElement__I__ = (function(x$1) {
  return this.productElement__I__O(x$1)
});
ScalaJS.c.scala_xml_Comment.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_Comment.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_Comment.prototype.copy__T__ = (function(commentText) {
  return this.copy__T__Lscala_xml_Comment(commentText)
});
ScalaJS.c.scala_xml_Comment.prototype.commentText__ = (function() {
  return this.commentText__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_Comment = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_Comment.prototype = ScalaJS.c.scala_xml_Comment.prototype;
ScalaJS.is.scala_xml_Comment = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_Comment)))
});
ScalaJS.as.scala_xml_Comment = (function(obj) {
  if ((ScalaJS.is.scala_xml_Comment(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.Comment")
  }
});
ScalaJS.isArrayOf.scala_xml_Comment = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_Comment)))
});
ScalaJS.asArrayOf.scala_xml_Comment = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_Comment(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.Comment;", depth)
  }
});
ScalaJS.data.scala_xml_Comment = new ScalaJS.ClassTypeData({
  scala_xml_Comment: 0
}, false, "scala.xml.Comment", ScalaJS.data.scala_xml_SpecialNode, {
  scala_xml_Comment: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
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
ScalaJS.c.scala_xml_Comment.prototype.$classData = ScalaJS.data.scala_xml_Comment;
//@ sourceMappingURL=Comment.js.map
