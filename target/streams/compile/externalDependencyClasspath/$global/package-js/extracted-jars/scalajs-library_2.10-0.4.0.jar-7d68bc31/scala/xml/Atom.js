/** @constructor */
ScalaJS.c.scala_xml_Atom = (function() {
  ScalaJS.c.scala_xml_SpecialNode.call(this);
  this.data$7 = null
});
ScalaJS.c.scala_xml_Atom.prototype = new ScalaJS.inheritable.scala_xml_SpecialNode();
ScalaJS.c.scala_xml_Atom.prototype.constructor = ScalaJS.c.scala_xml_Atom;
ScalaJS.c.scala_xml_Atom.prototype.data__O = (function() {
  return this.data$7
});
ScalaJS.c.scala_xml_Atom.prototype.basisForHashCode__Lscala_collection_Seq = (function() {
  return ScalaJS.as.scala_collection_Seq(ScalaJS.modules.scala_collection_Seq().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [this.data__O()]))))
});
ScalaJS.c.scala_xml_Atom.prototype.strict$und$eq$eq__Lscala_xml_Equality__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_xml_Atom(x1)) {
    var x2 = ScalaJS.as.scala_xml_Atom(x1);
    return ScalaJS.anyEqEq(this.data__O(), x2.data__O())
  };
  return false
});
ScalaJS.c.scala_xml_Atom.prototype.canEqual__O__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_xml_Atom(x1)) {
    return true
  };
  return false
});
ScalaJS.c.scala_xml_Atom.prototype.doCollectNamespaces__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_Atom.prototype.doTransform__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_Atom.prototype.label__T = (function() {
  return "#PCDATA"
});
ScalaJS.c.scala_xml_Atom.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  return ScalaJS.modules.scala_xml_Utility().escape__T__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(ScalaJS.objectToString(this.data__O()), sb)
});
ScalaJS.c.scala_xml_Atom.prototype.text__T = (function() {
  return ScalaJS.objectToString(this.data__O())
});
ScalaJS.c.scala_xml_Atom.prototype.init___O = (function(data) {
  this.data$7 = data;
  ScalaJS.c.scala_xml_SpecialNode.prototype.init___.call(this);
  if (ScalaJS.anyRefEqEq(data, null)) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T((("cannot construct " + ScalaJS.objectGetClass(this).getSimpleName__T()) + " with null"))
  };
  return this
});
ScalaJS.c.scala_xml_Atom.prototype.data__ = (function() {
  return this.data__O()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_Atom = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_Atom.prototype = ScalaJS.c.scala_xml_Atom.prototype;
ScalaJS.is.scala_xml_Atom = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_Atom)))
});
ScalaJS.as.scala_xml_Atom = (function(obj) {
  if ((ScalaJS.is.scala_xml_Atom(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.Atom")
  }
});
ScalaJS.isArrayOf.scala_xml_Atom = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_Atom)))
});
ScalaJS.asArrayOf.scala_xml_Atom = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_Atom(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.Atom;", depth)
  }
});
ScalaJS.data.scala_xml_Atom = new ScalaJS.ClassTypeData({
  scala_xml_Atom: 0
}, false, "scala.xml.Atom", ScalaJS.data.scala_xml_SpecialNode, {
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
ScalaJS.c.scala_xml_Atom.prototype.$classData = ScalaJS.data.scala_xml_Atom;
//@ sourceMappingURL=Atom.js.map
