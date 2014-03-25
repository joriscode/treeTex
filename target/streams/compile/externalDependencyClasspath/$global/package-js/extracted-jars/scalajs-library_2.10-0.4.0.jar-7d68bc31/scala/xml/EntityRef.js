/** @constructor */
ScalaJS.c.scala_xml_EntityRef = (function() {
  ScalaJS.c.scala_xml_SpecialNode.call(this);
  this.entityName$7 = null
});
ScalaJS.c.scala_xml_EntityRef.prototype = new ScalaJS.inheritable.scala_xml_SpecialNode();
ScalaJS.c.scala_xml_EntityRef.prototype.constructor = ScalaJS.c.scala_xml_EntityRef;
ScalaJS.c.scala_xml_EntityRef.prototype.entityName__T = (function() {
  return this.entityName$7
});
ScalaJS.c.scala_xml_EntityRef.prototype.doCollectNamespaces__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_EntityRef.prototype.doTransform__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_EntityRef.prototype.label__T = (function() {
  return "#ENTITY"
});
ScalaJS.c.scala_xml_EntityRef.prototype.text__T = (function() {
  var x1 = this.entityName__T();
  if (ScalaJS.anyRefEqEq("lt", x1)) {
    return "<"
  };
  if (ScalaJS.anyRefEqEq("gt", x1)) {
    return ">"
  };
  if (ScalaJS.anyRefEqEq("amp", x1)) {
    return "&"
  };
  if (ScalaJS.anyRefEqEq("apos", x1)) {
    return "'"
  };
  if (ScalaJS.anyRefEqEq("quot", x1)) {
    return "\""
  };
  return ScalaJS.modules.scala_xml_Utility().sbToString__Lscala_Function1__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(sb) {
      arg$outer.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb);
      return ScalaJS.bV(undefined)
    })
  })(this)))
});
ScalaJS.c.scala_xml_EntityRef.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  return sb.append__T__Lscala_collection_mutable_StringBuilder("&").append__T__Lscala_collection_mutable_StringBuilder(this.entityName__T()).append__T__Lscala_collection_mutable_StringBuilder(";")
});
ScalaJS.c.scala_xml_EntityRef.prototype.copy__T__Lscala_xml_EntityRef = (function(entityName) {
  return new ScalaJS.c.scala_xml_EntityRef().init___T(entityName)
});
ScalaJS.c.scala_xml_EntityRef.prototype.copy$default$1__T = (function() {
  return this.entityName__T()
});
ScalaJS.c.scala_xml_EntityRef.prototype.productPrefix__T = (function() {
  return "EntityRef"
});
ScalaJS.c.scala_xml_EntityRef.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_xml_EntityRef.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.entityName__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_EntityRef.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_EntityRef.prototype.init___T = (function(entityName) {
  this.entityName$7 = entityName;
  ScalaJS.c.scala_xml_SpecialNode.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_EntityRef.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_EntityRef.prototype.productElement__I__ = (function(x$1) {
  return this.productElement__I__O(x$1)
});
ScalaJS.c.scala_xml_EntityRef.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_EntityRef.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_EntityRef.prototype.copy__T__ = (function(entityName) {
  return this.copy__T__Lscala_xml_EntityRef(entityName)
});
ScalaJS.c.scala_xml_EntityRef.prototype.entityName__ = (function() {
  return this.entityName__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_EntityRef = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_EntityRef.prototype = ScalaJS.c.scala_xml_EntityRef.prototype;
ScalaJS.is.scala_xml_EntityRef = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_EntityRef)))
});
ScalaJS.as.scala_xml_EntityRef = (function(obj) {
  if ((ScalaJS.is.scala_xml_EntityRef(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.EntityRef")
  }
});
ScalaJS.isArrayOf.scala_xml_EntityRef = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_EntityRef)))
});
ScalaJS.asArrayOf.scala_xml_EntityRef = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_EntityRef(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.EntityRef;", depth)
  }
});
ScalaJS.data.scala_xml_EntityRef = new ScalaJS.ClassTypeData({
  scala_xml_EntityRef: 0
}, false, "scala.xml.EntityRef", ScalaJS.data.scala_xml_SpecialNode, {
  scala_xml_EntityRef: 1,
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
ScalaJS.c.scala_xml_EntityRef.prototype.$classData = ScalaJS.data.scala_xml_EntityRef;
//@ sourceMappingURL=EntityRef.js.map
