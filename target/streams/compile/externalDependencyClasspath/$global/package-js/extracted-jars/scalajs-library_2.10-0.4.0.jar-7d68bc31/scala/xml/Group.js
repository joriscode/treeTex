/** @constructor */
ScalaJS.c.scala_xml_Group = (function() {
  ScalaJS.c.scala_xml_Node.call(this);
  this.nodes$6 = null
});
ScalaJS.c.scala_xml_Group.prototype = new ScalaJS.inheritable.scala_xml_Node();
ScalaJS.c.scala_xml_Group.prototype.constructor = ScalaJS.c.scala_xml_Group;
ScalaJS.c.scala_xml_Group.prototype.nodes__Lscala_collection_Seq = (function() {
  return this.nodes$6
});
ScalaJS.c.scala_xml_Group.prototype.theSeq__Lscala_collection_Seq = (function() {
  return this.nodes__Lscala_collection_Seq()
});
ScalaJS.c.scala_xml_Group.prototype.canEqual__O__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_xml_Group(x1)) {
    return true
  };
  return false
});
ScalaJS.c.scala_xml_Group.prototype.strict$und$eq$eq__Lscala_xml_Equality__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_xml_Group(x1)) {
    var x2 = ScalaJS.as.scala_xml_Group(x1);
    var xs = x2.nodes__Lscala_collection_Seq();
    return this.nodes__Lscala_collection_Seq().sameElements__Lscala_collection_GenIterable__Z(xs)
  };
  return false
});
ScalaJS.c.scala_xml_Group.prototype.basisForHashCode__Lscala_collection_Seq = (function() {
  return this.nodes__Lscala_collection_Seq()
});
ScalaJS.c.scala_xml_Group.prototype.fail__p6__T__Lscala_Nothing = (function(msg) {
  throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("class Group does not support method '%s'")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [msg]))))
});
ScalaJS.c.scala_xml_Group.prototype.label__Lscala_Nothing = (function() {
  return this.fail__p6__T__Lscala_Nothing("label")
});
ScalaJS.c.scala_xml_Group.prototype.attributes__Lscala_Nothing = (function() {
  return this.fail__p6__T__Lscala_Nothing("attributes")
});
ScalaJS.c.scala_xml_Group.prototype.namespace__Lscala_Nothing = (function() {
  return this.fail__p6__T__Lscala_Nothing("namespace")
});
ScalaJS.c.scala_xml_Group.prototype.child__Lscala_Nothing = (function() {
  return this.fail__p6__T__Lscala_Nothing("child")
});
ScalaJS.c.scala_xml_Group.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_Nothing = (function(sb) {
  return this.fail__p6__T__Lscala_Nothing("toString(StringBuilder)")
});
ScalaJS.c.scala_xml_Group.prototype.copy__Lscala_collection_Seq__Lscala_xml_Group = (function(nodes) {
  return new ScalaJS.c.scala_xml_Group().init___Lscala_collection_Seq(nodes)
});
ScalaJS.c.scala_xml_Group.prototype.copy$default$1__Lscala_collection_Seq = (function() {
  return this.nodes__Lscala_collection_Seq()
});
ScalaJS.c.scala_xml_Group.prototype.productPrefix__T = (function() {
  return "Group"
});
ScalaJS.c.scala_xml_Group.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_xml_Group.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.nodes__Lscala_collection_Seq();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_Group.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_Group.prototype.child__Lscala_collection_Seq = (function() {
  return this.child__Lscala_Nothing()
});
ScalaJS.c.scala_xml_Group.prototype.namespace__T = (function() {
  return this.namespace__Lscala_Nothing()
});
ScalaJS.c.scala_xml_Group.prototype.attributes__Lscala_xml_MetaData = (function() {
  return this.attributes__Lscala_Nothing()
});
ScalaJS.c.scala_xml_Group.prototype.label__T = (function() {
  return this.label__Lscala_Nothing()
});
ScalaJS.c.scala_xml_Group.prototype.init___Lscala_collection_Seq = (function(nodes) {
  this.nodes$6 = nodes;
  ScalaJS.c.scala_xml_Node.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_Group.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_Group.prototype.productElement__I__ = (function(x$1) {
  return this.productElement__I__O(x$1)
});
ScalaJS.c.scala_xml_Group.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_Group.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_Group.prototype.copy__Lscala_collection_Seq__ = (function(nodes) {
  return this.copy__Lscala_collection_Seq__Lscala_xml_Group(nodes)
});
ScalaJS.c.scala_xml_Group.prototype.buildString__Lscala_collection_mutable_StringBuilder__ = (function(sb) {
  return this.buildString__Lscala_collection_mutable_StringBuilder__Lscala_Nothing(sb)
});
ScalaJS.c.scala_xml_Group.prototype.nodes__ = (function() {
  return this.nodes__Lscala_collection_Seq()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_Group = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_Group.prototype = ScalaJS.c.scala_xml_Group.prototype;
ScalaJS.is.scala_xml_Group = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_Group)))
});
ScalaJS.as.scala_xml_Group = (function(obj) {
  if ((ScalaJS.is.scala_xml_Group(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.Group")
  }
});
ScalaJS.isArrayOf.scala_xml_Group = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_Group)))
});
ScalaJS.asArrayOf.scala_xml_Group = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_Group(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.Group;", depth)
  }
});
ScalaJS.data.scala_xml_Group = new ScalaJS.ClassTypeData({
  scala_xml_Group: 0
}, false, "scala.xml.Group", ScalaJS.data.scala_xml_Node, {
  scala_xml_Group: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
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
ScalaJS.c.scala_xml_Group.prototype.$classData = ScalaJS.data.scala_xml_Group;
//@ sourceMappingURL=Group.js.map
