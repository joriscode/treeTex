/** @constructor */
ScalaJS.c.scala_xml_Elem = (function() {
  ScalaJS.c.scala_xml_Node.call(this);
  this.prefix$6 = null;
  this.label$6 = null;
  this.scope$6 = null;
  this.minimizeEmpty$6 = false;
  this.child$6 = null;
  this.attributes$6 = null
});
ScalaJS.c.scala_xml_Elem.prototype = new ScalaJS.inheritable.scala_xml_Node();
ScalaJS.c.scala_xml_Elem.prototype.constructor = ScalaJS.c.scala_xml_Elem;
ScalaJS.c.scala_xml_Elem.prototype.prefix__T = (function() {
  return this.prefix$6
});
ScalaJS.c.scala_xml_Elem.prototype.label__T = (function() {
  return this.label$6
});
ScalaJS.c.scala_xml_Elem.prototype.scope__Lscala_xml_NamespaceBinding = (function() {
  return this.scope$6
});
ScalaJS.c.scala_xml_Elem.prototype.minimizeEmpty__Z = (function() {
  return this.minimizeEmpty$6
});
ScalaJS.c.scala_xml_Elem.prototype.child__Lscala_collection_Seq = (function() {
  return this.child$6
});
ScalaJS.c.scala_xml_Elem.prototype.doCollectNamespaces__Z = (function() {
  return true
});
ScalaJS.c.scala_xml_Elem.prototype.doTransform__Z = (function() {
  return true
});
ScalaJS.c.scala_xml_Elem.prototype.attributes__Lscala_xml_MetaData = (function() {
  return this.attributes$6
});
ScalaJS.c.scala_xml_Elem.prototype.basisForHashCode__Lscala_collection_Seq = (function() {
  var x$3 = this.prefix__T();
  var x$2 = this.label__T();
  var x$1 = this.attributes__Lscala_xml_MetaData();
  var jsx$2 = this.child__Lscala_collection_Seq().toList__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(x$1);
  var jsx$1 = jsx$2.$$colon$colon__O__Lscala_collection_immutable_List(x$2);
  return jsx$1.$$colon$colon__O__Lscala_collection_immutable_List(x$3)
});
ScalaJS.c.scala_xml_Elem.prototype.$$percent__Lscala_xml_MetaData__Lscala_xml_Elem = (function(updates) {
  var x$5 = ScalaJS.modules.scala_xml_MetaData().update__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_xml_MetaData__Lscala_xml_MetaData(this.attributes__Lscala_xml_MetaData(), this.scope__Lscala_xml_NamespaceBinding(), updates);
  var x$6 = this.copy$default$1__T();
  var x$7 = this.copy$default$2__T();
  var x$8 = this.copy$default$4__Lscala_xml_NamespaceBinding();
  var x$9 = this.copy$default$5__Z();
  var x$10 = this.copy$default$6__Lscala_collection_Seq();
  return this.copy__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Z__Lscala_collection_Seq__Lscala_xml_Elem(x$6, x$7, x$5, x$8, x$9, x$10)
});
ScalaJS.c.scala_xml_Elem.prototype.copy__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Z__Lscala_collection_Seq__Lscala_xml_Elem = (function(prefix, label, attributes, scope, minimizeEmpty, child) {
  return ScalaJS.modules.scala_xml_Elem().apply__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Z__Lscala_collection_Seq__Lscala_xml_Elem(prefix, label, attributes, scope, minimizeEmpty, child)
});
ScalaJS.c.scala_xml_Elem.prototype.copy$default$1__T = (function() {
  return this.prefix__T()
});
ScalaJS.c.scala_xml_Elem.prototype.copy$default$2__T = (function() {
  return this.label__T()
});
ScalaJS.c.scala_xml_Elem.prototype.copy$default$3__Lscala_xml_MetaData = (function() {
  return this.attributes__Lscala_xml_MetaData()
});
ScalaJS.c.scala_xml_Elem.prototype.copy$default$4__Lscala_xml_NamespaceBinding = (function() {
  return this.scope__Lscala_xml_NamespaceBinding()
});
ScalaJS.c.scala_xml_Elem.prototype.copy$default$5__Z = (function() {
  return this.minimizeEmpty__Z()
});
ScalaJS.c.scala_xml_Elem.prototype.copy$default$6__Lscala_collection_Seq = (function() {
  return this.child__Lscala_collection_Seq().toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_xml_Elem.prototype.text__T = (function() {
  return ScalaJS.as.scala_collection_TraversableOnce(this.child__Lscala_collection_Seq().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$4) {
      return x$4.text__T()
    })
  })()), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).mkString__T()
});
ScalaJS.c.scala_xml_Elem.prototype.init___T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Z__Lscala_collection_Seq = (function(prefix, label, attributes1, scope, minimizeEmpty, child) {
  this.prefix$6 = prefix;
  this.label$6 = label;
  this.scope$6 = scope;
  this.minimizeEmpty$6 = minimizeEmpty;
  this.child$6 = child;
  ScalaJS.c.scala_xml_Node.prototype.init___.call(this);
  this.attributes$6 = ScalaJS.modules.scala_xml_MetaData().normalize__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_xml_MetaData(attributes1, scope);
  if (ScalaJS.anyRefEqEq(prefix, "")) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("prefix of zero length, use null instead")
  };
  if (ScalaJS.anyRefEqEq(scope, null)) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("scope is null, use scala.xml.TopScope for empty scope")
  };
  return this
});
ScalaJS.c.scala_xml_Elem.prototype.init___T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq = (function(prefix, label, attributes, scope, child) {
  ScalaJS.c.scala_xml_Elem.prototype.init___T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Z__Lscala_collection_Seq.call(this, prefix, label, attributes, scope, child.isEmpty__Z(), child);
  return this
});
ScalaJS.c.scala_xml_Elem.prototype.copy__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Z__Lscala_collection_Seq__ = (function(prefix, label, attributes, scope, minimizeEmpty, child) {
  return this.copy__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Z__Lscala_collection_Seq__Lscala_xml_Elem(prefix, label, attributes, scope, minimizeEmpty, child)
});
ScalaJS.c.scala_xml_Elem.prototype.$$percent__Lscala_xml_MetaData__ = (function(updates) {
  return this.$$percent__Lscala_xml_MetaData__Lscala_xml_Elem(updates)
});
ScalaJS.c.scala_xml_Elem.prototype.minimizeEmpty__ = (function() {
  return ScalaJS.bZ(this.minimizeEmpty__Z())
});
/** @constructor */
ScalaJS.inheritable.scala_xml_Elem = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_Elem.prototype = ScalaJS.c.scala_xml_Elem.prototype;
ScalaJS.is.scala_xml_Elem = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_Elem)))
});
ScalaJS.as.scala_xml_Elem = (function(obj) {
  if ((ScalaJS.is.scala_xml_Elem(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.Elem")
  }
});
ScalaJS.isArrayOf.scala_xml_Elem = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_Elem)))
});
ScalaJS.asArrayOf.scala_xml_Elem = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_Elem(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.Elem;", depth)
  }
});
ScalaJS.data.scala_xml_Elem = new ScalaJS.ClassTypeData({
  scala_xml_Elem: 0
}, false, "scala.xml.Elem", ScalaJS.data.scala_xml_Node, {
  scala_xml_Elem: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
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
ScalaJS.c.scala_xml_Elem.prototype.$classData = ScalaJS.data.scala_xml_Elem;
//@ sourceMappingURL=Elem.js.map
