/** @constructor */
ScalaJS.c.scala_xml_Node = (function() {
  ScalaJS.c.scala_xml_NodeSeq.call(this)
});
ScalaJS.c.scala_xml_Node.prototype = new ScalaJS.inheritable.scala_xml_NodeSeq();
ScalaJS.c.scala_xml_Node.prototype.constructor = ScalaJS.c.scala_xml_Node;
ScalaJS.c.scala_xml_Node.prototype.prefix__T = (function() {
  return null
});
ScalaJS.c.scala_xml_Node.prototype.isAtom__Z = (function() {
  return ScalaJS.is.scala_xml_Atom(this)
});
ScalaJS.c.scala_xml_Node.prototype.doCollectNamespaces__Z = (function() {
  return true
});
ScalaJS.c.scala_xml_Node.prototype.doTransform__Z = (function() {
  return true
});
ScalaJS.c.scala_xml_Node.prototype.scope__Lscala_xml_NamespaceBinding = (function() {
  return ScalaJS.modules.scala_xml_TopScope()
});
ScalaJS.c.scala_xml_Node.prototype.namespace__T = (function() {
  return this.getNamespace__T__T(this.prefix__T())
});
ScalaJS.c.scala_xml_Node.prototype.getNamespace__T__T = (function(pre) {
  if ((this.scope__Lscala_xml_NamespaceBinding() === null)) {
    return null
  } else {
    return this.scope__Lscala_xml_NamespaceBinding().getURI__T__T(pre)
  }
});
ScalaJS.c.scala_xml_Node.prototype.attribute__T__Lscala_Option = (function(key) {
  return this.attributes__Lscala_xml_MetaData().get__T__Lscala_Option(key)
});
ScalaJS.c.scala_xml_Node.prototype.attribute__T__T__Lscala_Option = (function(uri, key) {
  return this.attributes__Lscala_xml_MetaData().get__T__Lscala_xml_Node__T__Lscala_Option(uri, this, key)
});
ScalaJS.c.scala_xml_Node.prototype.attributes__Lscala_xml_MetaData = (function() {
  return ScalaJS.modules.scala_xml_Null()
});
ScalaJS.c.scala_xml_Node.prototype.nonEmptyChildren__Lscala_collection_Seq = (function() {
  return ScalaJS.as.scala_collection_Seq(this.child__Lscala_collection_Seq().filterNot__Lscala_Function1__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$1) {
      return ScalaJS.bZ(ScalaJS.anyRefEqEq(x$1.toString__T(), ""))
    })
  })())))
});
ScalaJS.c.scala_xml_Node.prototype.descendant__Lscala_collection_immutable_List = (function() {
  return ScalaJS.as.scala_collection_immutable_List(this.child__Lscala_collection_Seq().toList__Lscala_collection_immutable_List().flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x) {
      var x$2 = x;
      return x.descendant__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(x$2)
    })
  })()), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
});
ScalaJS.c.scala_xml_Node.prototype.descendant$undor$undself__Lscala_collection_immutable_List = (function() {
  var x$3 = this;
  return this.descendant__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(x$3)
});
ScalaJS.c.scala_xml_Node.prototype.canEqual__O__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_xml_Group(x1)) {
    return false
  };
  if (ScalaJS.is.scala_xml_Node(x1)) {
    return true
  };
  return false
});
ScalaJS.c.scala_xml_Node.prototype.basisForHashCode__Lscala_collection_Seq = (function() {
  var x$6 = this.prefix__T();
  var x$5 = this.label__T();
  var x$4 = this.attributes__Lscala_xml_MetaData();
  var jsx$2 = this.nonEmptyChildren__Lscala_collection_Seq().toList__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(x$4);
  var jsx$1 = jsx$2.$$colon$colon__O__Lscala_collection_immutable_List(x$5);
  return jsx$1.$$colon$colon__O__Lscala_collection_immutable_List(x$6)
});
ScalaJS.c.scala_xml_Node.prototype.strict$und$eq$eq__Lscala_xml_Equality__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_xml_Group(x1)) {
    return false
  };
  if (ScalaJS.is.scala_xml_Node(x1)) {
    var x3 = ScalaJS.as.scala_xml_Node(x1);
    return (((ScalaJS.anyRefEqEq(this.prefix__T(), x3.prefix__T()) && ScalaJS.anyRefEqEq(this.label__T(), x3.label__T())) && ScalaJS.anyRefEqEq(this.attributes__Lscala_xml_MetaData(), x3.attributes__Lscala_xml_MetaData())) && this.nonEmptyChildren__Lscala_collection_Seq().sameElements__Lscala_collection_GenIterable__Z(x3.nonEmptyChildren__Lscala_collection_Seq()))
  };
  return false
});
ScalaJS.c.scala_xml_Node.prototype.theSeq__Lscala_collection_Seq = (function() {
  var x$7 = this;
  return ScalaJS.modules.scala_collection_immutable_Nil().$$colon$colon__O__Lscala_collection_immutable_List(x$7)
});
ScalaJS.c.scala_xml_Node.prototype.buildString__Z__T = (function(stripComments) {
  var x$8 = this;
  var x$9 = stripComments;
  var x$10 = ScalaJS.modules.scala_xml_Utility().serialize$default$2__Lscala_xml_NamespaceBinding();
  var x$11 = ScalaJS.modules.scala_xml_Utility().serialize$default$3__Lscala_collection_mutable_StringBuilder();
  var x$12 = ScalaJS.modules.scala_xml_Utility().serialize$default$5__Z();
  var x$13 = ScalaJS.modules.scala_xml_Utility().serialize$default$6__Z();
  var x$14 = ScalaJS.modules.scala_xml_Utility().serialize$default$7__Lscala_Enumeration$Value();
  var jsx$3 = ScalaJS.modules.scala_xml_Utility().serialize__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Lscala_Enumeration$Value__Lscala_collection_mutable_StringBuilder(x$8, x$10, x$11, x$9, x$12, x$13, x$14);
  return jsx$3.toString__T()
});
ScalaJS.c.scala_xml_Node.prototype.toString__T = (function() {
  return this.buildString__Z__T(false)
});
ScalaJS.c.scala_xml_Node.prototype.nameToString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  if ((!ScalaJS.anyRefEqEq(null, this.prefix__T()))) {
    sb.append__T__Lscala_collection_mutable_StringBuilder(this.prefix__T());
    sb.append__C__Lscala_collection_mutable_StringBuilder(58)
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  return sb.append__T__Lscala_collection_mutable_StringBuilder(this.label__T())
});
ScalaJS.c.scala_xml_Node.prototype.xmlType__Lscala_xml_TypeSymbol = (function() {
  return null
});
ScalaJS.c.scala_xml_Node.prototype.text__T = (function() {
  return ScalaJS.c.scala_xml_NodeSeq.prototype.text__T.call(this)
});
ScalaJS.c.scala_xml_Node.prototype.xmlType__ = (function() {
  return this.xmlType__Lscala_xml_TypeSymbol()
});
ScalaJS.c.scala_xml_Node.prototype.nameToString__Lscala_collection_mutable_StringBuilder__ = (function(sb) {
  return this.nameToString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb)
});
ScalaJS.c.scala_xml_Node.prototype.buildString__Z__ = (function(stripComments) {
  return this.buildString__Z__T(stripComments)
});
ScalaJS.c.scala_xml_Node.prototype.descendant$undor$undself__ = (function() {
  return this.descendant$undor$undself__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_xml_Node.prototype.descendant__ = (function() {
  return this.descendant__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_xml_Node.prototype.nonEmptyChildren__ = (function() {
  return this.nonEmptyChildren__Lscala_collection_Seq()
});
ScalaJS.c.scala_xml_Node.prototype.attributes__ = (function() {
  return this.attributes__Lscala_xml_MetaData()
});
ScalaJS.c.scala_xml_Node.prototype.attribute__T__T__ = (function(uri, key) {
  return this.attribute__T__T__Lscala_Option(uri, key)
});
ScalaJS.c.scala_xml_Node.prototype.attribute__T__ = (function(key$2) {
  return this.attribute__T__Lscala_Option(key$2)
});
ScalaJS.c.scala_xml_Node.prototype.getNamespace__T__ = (function(pre) {
  return this.getNamespace__T__T(pre)
});
ScalaJS.c.scala_xml_Node.prototype.namespace__ = (function() {
  return this.namespace__T()
});
ScalaJS.c.scala_xml_Node.prototype.scope__ = (function() {
  return this.scope__Lscala_xml_NamespaceBinding()
});
ScalaJS.c.scala_xml_Node.prototype.doTransform__ = (function() {
  return ScalaJS.bZ(this.doTransform__Z())
});
ScalaJS.c.scala_xml_Node.prototype.doCollectNamespaces__ = (function() {
  return ScalaJS.bZ(this.doCollectNamespaces__Z())
});
ScalaJS.c.scala_xml_Node.prototype.isAtom__ = (function() {
  return ScalaJS.bZ(this.isAtom__Z())
});
ScalaJS.c.scala_xml_Node.prototype.prefix__ = (function() {
  return this.prefix__T()
});
ScalaJS.c.scala_xml_Node.prototype.child__ = (function() {
  return this.child__Lscala_collection_Seq()
});
ScalaJS.c.scala_xml_Node.prototype.label__ = (function() {
  return this.label__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_Node = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_Node.prototype = ScalaJS.c.scala_xml_Node.prototype;
ScalaJS.is.scala_xml_Node = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_Node)))
});
ScalaJS.as.scala_xml_Node = (function(obj) {
  if ((ScalaJS.is.scala_xml_Node(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.Node")
  }
});
ScalaJS.isArrayOf.scala_xml_Node = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_Node)))
});
ScalaJS.asArrayOf.scala_xml_Node = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_Node(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.Node;", depth)
  }
});
ScalaJS.data.scala_xml_Node = new ScalaJS.ClassTypeData({
  scala_xml_Node: 0
}, false, "scala.xml.Node", ScalaJS.data.scala_xml_NodeSeq, {
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
ScalaJS.c.scala_xml_Node.prototype.$classData = ScalaJS.data.scala_xml_Node;
//@ sourceMappingURL=Node.js.map
