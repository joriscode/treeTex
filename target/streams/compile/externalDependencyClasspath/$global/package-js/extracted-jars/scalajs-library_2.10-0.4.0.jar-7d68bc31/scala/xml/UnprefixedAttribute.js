/** @constructor */
ScalaJS.c.scala_xml_UnprefixedAttribute = (function() {
  ScalaJS.c.scala_xml_MetaData.call(this);
  this.key$4 = null;
  this.value$4 = null;
  this.pre$4 = null;
  this.next$4 = null
});
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype = new ScalaJS.inheritable.scala_xml_MetaData();
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.constructor = ScalaJS.c.scala_xml_UnprefixedAttribute;
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.remove__T__Lscala_xml_MetaData = (function(key) {
  return ScalaJS.impls.scala_xml_Attribute$class__remove__Lscala_xml_Attribute__T__Lscala_xml_MetaData(this, key)
});
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.remove__T__Lscala_xml_NamespaceBinding__T__Lscala_xml_MetaData = (function(namespace, scope, key) {
  return ScalaJS.impls.scala_xml_Attribute$class__remove__Lscala_xml_Attribute__T__Lscala_xml_NamespaceBinding__T__Lscala_xml_MetaData(this, namespace, scope, key)
});
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.isPrefixed__Z = (function() {
  return ScalaJS.impls.scala_xml_Attribute$class__isPrefixed__Lscala_xml_Attribute__Z(this)
});
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.wellformed__Lscala_xml_NamespaceBinding__Z = (function(scope) {
  return ScalaJS.impls.scala_xml_Attribute$class__wellformed__Lscala_xml_Attribute__Lscala_xml_NamespaceBinding__Z(this, scope)
});
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_xml_Attribute$class__iterator__Lscala_xml_Attribute__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.size__I = (function() {
  return ScalaJS.impls.scala_xml_Attribute$class__size__Lscala_xml_Attribute__I(this)
});
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.toString1__Lscala_collection_mutable_StringBuilder__V = (function(sb) {
  ScalaJS.impls.scala_xml_Attribute$class__toString1__Lscala_xml_Attribute__Lscala_collection_mutable_StringBuilder__V(this, sb)
});
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.key__T = (function() {
  return this.key$4
});
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.value__Lscala_collection_Seq = (function() {
  return this.value$4
});
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.pre__Lscala_Null = (function() {
  return null
});
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.next__Lscala_xml_MetaData = (function() {
  return this.next$4
});
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.copy__Lscala_xml_MetaData__Lscala_xml_UnprefixedAttribute = (function(next) {
  return new ScalaJS.c.scala_xml_UnprefixedAttribute().init___T__Lscala_collection_Seq__Lscala_xml_MetaData(this.key__T(), this.value__Lscala_collection_Seq(), next)
});
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.getNamespace__Lscala_xml_Node__T = (function(owner) {
  return null
});
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.apply__T__Lscala_collection_Seq = (function(key) {
  if (ScalaJS.anyRefEqEq(key, this.key__T())) {
    return this.value__Lscala_collection_Seq()
  } else {
    return this.next__Lscala_xml_MetaData().apply__T__Lscala_collection_Seq(key)
  }
});
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.apply__T__Lscala_xml_NamespaceBinding__T__Lscala_collection_Seq = (function(namespace, scope, key) {
  return this.next__Lscala_xml_MetaData().apply__T__Lscala_xml_NamespaceBinding__T__Lscala_collection_Seq(namespace, scope, key)
});
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.copy__Lscala_xml_MetaData__Lscala_xml_MetaData = (function(next) {
  return this.copy__Lscala_xml_MetaData__Lscala_xml_UnprefixedAttribute(next)
});
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.copy__Lscala_xml_MetaData__Lscala_xml_Attribute = (function(next) {
  return this.copy__Lscala_xml_MetaData__Lscala_xml_UnprefixedAttribute(next)
});
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.pre__T = (function() {
  return null
});
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.init___T__Lscala_collection_Seq__Lscala_xml_MetaData = (function(key, value, next1) {
  this.key$4 = key;
  this.value$4 = value;
  ScalaJS.c.scala_xml_MetaData.prototype.init___.call(this);
  ScalaJS.impls.scala_xml_Attribute$class__$init$__Lscala_xml_Attribute__V(this);
  if ((value !== null)) {
    var jsx$1 = next1
  } else {
    var jsx$1 = next1.remove__T__Lscala_xml_MetaData(key)
  };
  this.next$4 = jsx$1;
  return this
});
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.init___T__T__Lscala_xml_MetaData = (function(key, value, next) {
  var jsx$4 = ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.init___T__Lscala_collection_Seq__Lscala_xml_MetaData;
  var jsx$3 = key;
  if ((value !== null)) {
    var jsx$2 = ScalaJS.modules.scala_xml_Text().apply__T__Lscala_xml_Text(value)
  } else {
    var jsx$2 = null
  };
  jsx$4.call(this, jsx$3, jsx$2, next);
  return this
});
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.init___T__Lscala_Option__Lscala_xml_MetaData = (function(key, value, next) {
  ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.init___T__Lscala_collection_Seq__Lscala_xml_MetaData.call(this, key, ScalaJS.as.scala_collection_Seq(value.orNull__Lscala_Predef$$less$colon$less__O(ScalaJS.modules.scala_Predef().conforms__Lscala_Predef$$less$colon$less())), next);
  return this
});
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.pre__ = (function() {
  return this.pre__Lscala_Null()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_UnprefixedAttribute = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_UnprefixedAttribute.prototype = ScalaJS.c.scala_xml_UnprefixedAttribute.prototype;
ScalaJS.is.scala_xml_UnprefixedAttribute = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_UnprefixedAttribute)))
});
ScalaJS.as.scala_xml_UnprefixedAttribute = (function(obj) {
  if ((ScalaJS.is.scala_xml_UnprefixedAttribute(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.UnprefixedAttribute")
  }
});
ScalaJS.isArrayOf.scala_xml_UnprefixedAttribute = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_UnprefixedAttribute)))
});
ScalaJS.asArrayOf.scala_xml_UnprefixedAttribute = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_UnprefixedAttribute(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.UnprefixedAttribute;", depth)
  }
});
ScalaJS.data.scala_xml_UnprefixedAttribute = new ScalaJS.ClassTypeData({
  scala_xml_UnprefixedAttribute: 0
}, false, "scala.xml.UnprefixedAttribute", ScalaJS.data.scala_xml_MetaData, {
  scala_xml_UnprefixedAttribute: 1,
  scala_xml_Attribute: 1,
  scala_xml_MetaData: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_xml_Equality: 1,
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
ScalaJS.c.scala_xml_UnprefixedAttribute.prototype.$classData = ScalaJS.data.scala_xml_UnprefixedAttribute;
//@ sourceMappingURL=UnprefixedAttribute.js.map
