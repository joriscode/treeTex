/** @constructor */
ScalaJS.c.scala_xml_Null$ = (function() {
  ScalaJS.c.scala_xml_MetaData.call(this)
});
ScalaJS.c.scala_xml_Null$.prototype = new ScalaJS.inheritable.scala_xml_MetaData();
ScalaJS.c.scala_xml_Null$.prototype.constructor = ScalaJS.c.scala_xml_Null$;
ScalaJS.c.scala_xml_Null$.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_Null$.prototype.size__I = (function() {
  return 0
});
ScalaJS.c.scala_xml_Null$.prototype.append__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_xml_MetaData = (function(m, scope) {
  return m
});
ScalaJS.c.scala_xml_Null$.prototype.append$default$2__Lscala_xml_NamespaceBinding = (function() {
  return ScalaJS.modules.scala_xml_TopScope()
});
ScalaJS.c.scala_xml_Null$.prototype.filter__Lscala_Function1__Lscala_xml_MetaData = (function(f) {
  return this
});
ScalaJS.c.scala_xml_Null$.prototype.copy__Lscala_xml_MetaData__Lscala_xml_MetaData = (function(next) {
  return next
});
ScalaJS.c.scala_xml_Null$.prototype.getNamespace__Lscala_xml_Node__Lscala_Null = (function(owner) {
  return null
});
ScalaJS.c.scala_xml_Null$.prototype.hasNext__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_Null$.prototype.next__Lscala_Null = (function() {
  return null
});
ScalaJS.c.scala_xml_Null$.prototype.key__Lscala_Null = (function() {
  return null
});
ScalaJS.c.scala_xml_Null$.prototype.value__Lscala_Null = (function() {
  return null
});
ScalaJS.c.scala_xml_Null$.prototype.isPrefixed__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_Null$.prototype.length__I = (function() {
  return 0
});
ScalaJS.c.scala_xml_Null$.prototype.length__I__I = (function(i) {
  return i
});
ScalaJS.c.scala_xml_Null$.prototype.strict$und$eq$eq__Lscala_xml_Equality__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_xml_MetaData(x1)) {
    var x2 = ScalaJS.as.scala_xml_MetaData(x1);
    return (x2.length__I() === 0)
  };
  return false
});
ScalaJS.c.scala_xml_Null$.prototype.basisForHashCode__Lscala_collection_Seq = (function() {
  return ScalaJS.modules.scala_collection_immutable_Nil()
});
ScalaJS.c.scala_xml_Null$.prototype.apply__T__Lscala_xml_NamespaceBinding__T__Lscala_Null = (function(namespace, scope, key) {
  return null
});
ScalaJS.c.scala_xml_Null$.prototype.apply__T__Lscala_collection_Seq = (function(key) {
  if (ScalaJS.modules.scala_xml_Utility().isNameStart__C__Z(ScalaJS.uC(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(key)).head__O()))) {
    return null
  } else {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T((("not a valid attribute name '" + key) + "', so can never match !"))
  }
});
ScalaJS.c.scala_xml_Null$.prototype.toString1__Lscala_collection_mutable_StringBuilder__V = (function(sb) {
  /*<skip>*/
});
ScalaJS.c.scala_xml_Null$.prototype.toString1__T = (function() {
  return ""
});
ScalaJS.c.scala_xml_Null$.prototype.toString__T = (function() {
  return ""
});
ScalaJS.c.scala_xml_Null$.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  return sb
});
ScalaJS.c.scala_xml_Null$.prototype.wellformed__Lscala_xml_NamespaceBinding__Z = (function(scope) {
  return true
});
ScalaJS.c.scala_xml_Null$.prototype.remove__T__Lscala_xml_Null$ = (function(key) {
  return this
});
ScalaJS.c.scala_xml_Null$.prototype.remove__T__Lscala_xml_NamespaceBinding__T__Lscala_xml_Null$ = (function(namespace, scope, key) {
  return this
});
ScalaJS.c.scala_xml_Null$.prototype.productPrefix__T = (function() {
  return "Null"
});
ScalaJS.c.scala_xml_Null$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.scala_xml_Null$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.scala_xml_Null$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_Null$.prototype.readResolve__p4__O = (function() {
  return ScalaJS.modules.scala_xml_Null()
});
ScalaJS.c.scala_xml_Null$.prototype.remove__T__Lscala_xml_NamespaceBinding__T__Lscala_xml_MetaData = (function(namespace, scope, key) {
  return this.remove__T__Lscala_xml_NamespaceBinding__T__Lscala_xml_Null$(namespace, scope, key)
});
ScalaJS.c.scala_xml_Null$.prototype.remove__T__Lscala_xml_MetaData = (function(key) {
  return this.remove__T__Lscala_xml_Null$(key)
});
ScalaJS.c.scala_xml_Null$.prototype.apply__T__Lscala_xml_NamespaceBinding__T__Lscala_collection_Seq = (function(namespace_uri, scp, k) {
  return this.apply__T__Lscala_xml_NamespaceBinding__T__Lscala_Null(namespace_uri, scp, k)
});
ScalaJS.c.scala_xml_Null$.prototype.value__Lscala_collection_Seq = (function() {
  return this.value__Lscala_Null()
});
ScalaJS.c.scala_xml_Null$.prototype.key__T = (function() {
  return this.key__Lscala_Null()
});
ScalaJS.c.scala_xml_Null$.prototype.next__Lscala_xml_MetaData = (function() {
  return this.next__Lscala_Null()
});
ScalaJS.c.scala_xml_Null$.prototype.getNamespace__Lscala_xml_Node__T = (function(owner) {
  return this.getNamespace__Lscala_xml_Node__Lscala_Null(owner)
});
ScalaJS.c.scala_xml_Null$.prototype.filter__Lscala_Function1__O = (function(p) {
  return this.filter__Lscala_Function1__Lscala_xml_MetaData(p)
});
ScalaJS.c.scala_xml_Null$.prototype.init___ = (function() {
  ScalaJS.c.scala_xml_MetaData.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_xml_Null = this;
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_Null$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_Null$.prototype.productElement__I__ = (function(x$1) {
  return this.productElement__I__O(x$1)
});
ScalaJS.c.scala_xml_Null$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_Null$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_Null$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_Null$.prototype = ScalaJS.c.scala_xml_Null$.prototype;
ScalaJS.is.scala_xml_Null$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_Null$)))
});
ScalaJS.as.scala_xml_Null$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_Null$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.Null")
  }
});
ScalaJS.isArrayOf.scala_xml_Null$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_Null$)))
});
ScalaJS.asArrayOf.scala_xml_Null$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_Null$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.Null;", depth)
  }
});
ScalaJS.data.scala_xml_Null$ = new ScalaJS.ClassTypeData({
  scala_xml_Null$: 0
}, false, "scala.xml.Null$", ScalaJS.data.scala_xml_MetaData, {
  scala_xml_Null$: 1,
  scala_Product: 1,
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
ScalaJS.c.scala_xml_Null$.prototype.$classData = ScalaJS.data.scala_xml_Null$;
ScalaJS.moduleInstances.scala_xml_Null = undefined;
ScalaJS.modules.scala_xml_Null = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_Null)) {
    ScalaJS.moduleInstances.scala_xml_Null = new ScalaJS.c.scala_xml_Null$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_Null
});
//@ sourceMappingURL=Null$.js.map
