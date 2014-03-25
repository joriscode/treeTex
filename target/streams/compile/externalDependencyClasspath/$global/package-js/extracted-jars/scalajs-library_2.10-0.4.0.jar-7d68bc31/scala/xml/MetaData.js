/** @constructor */
ScalaJS.c.scala_xml_MetaData = (function() {
  ScalaJS.c.scala_collection_AbstractIterable.call(this)
});
ScalaJS.c.scala_xml_MetaData.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterable();
ScalaJS.c.scala_xml_MetaData.prototype.constructor = ScalaJS.c.scala_xml_MetaData;
ScalaJS.c.scala_xml_MetaData.prototype.strict$und$bang$eq__Lscala_xml_Equality__Z = (function(other) {
  return ScalaJS.impls.scala_xml_Equality$class__strict$und$bang$eq__Lscala_xml_Equality__Lscala_xml_Equality__Z(this, other)
});
ScalaJS.c.scala_xml_MetaData.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_xml_Equality$class__hashCode__Lscala_xml_Equality__I(this)
});
ScalaJS.c.scala_xml_MetaData.prototype.equals__O__Z = (function(other) {
  return ScalaJS.impls.scala_xml_Equality$class__equals__Lscala_xml_Equality__O__Z(this, other)
});
ScalaJS.c.scala_xml_MetaData.prototype.xml$und$eq$eq__O__Z = (function(other) {
  return ScalaJS.impls.scala_xml_Equality$class__xml$und$eq$eq__Lscala_xml_Equality__O__Z(this, other)
});
ScalaJS.c.scala_xml_MetaData.prototype.xml$und$bang$eq__O__Z = (function(other) {
  return ScalaJS.impls.scala_xml_Equality$class__xml$und$bang$eq__Lscala_xml_Equality__O__Z(this, other)
});
ScalaJS.c.scala_xml_MetaData.prototype.append__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_xml_MetaData = (function(updates, scope) {
  return ScalaJS.modules.scala_xml_MetaData().update__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_xml_MetaData__Lscala_xml_MetaData(this, scope, updates)
});
ScalaJS.c.scala_xml_MetaData.prototype.append$default$2__Lscala_xml_NamespaceBinding = (function() {
  return ScalaJS.modules.scala_xml_TopScope()
});
ScalaJS.c.scala_xml_MetaData.prototype.apply__T__Lscala_xml_Node__T__Lscala_collection_Seq = (function(namespace_uri, owner, key) {
  return this.apply__T__Lscala_xml_NamespaceBinding__T__Lscala_collection_Seq(namespace_uri, owner.scope__Lscala_xml_NamespaceBinding(), key)
});
ScalaJS.c.scala_xml_MetaData.prototype.hasNext__Z = (function() {
  return (!ScalaJS.anyRefEqEq(ScalaJS.modules.scala_xml_Null(), this.next__Lscala_xml_MetaData()))
});
ScalaJS.c.scala_xml_MetaData.prototype.length__I = (function() {
  return this.length__I__I(0)
});
ScalaJS.c.scala_xml_MetaData.prototype.length__I__I = (function(i) {
  return this.next__Lscala_xml_MetaData().length__I__I((i + 1))
});
ScalaJS.c.scala_xml_MetaData.prototype.canEqual__O__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_xml_MetaData(x1)) {
    return true
  };
  return false
});
ScalaJS.c.scala_xml_MetaData.prototype.strict$und$eq$eq__Lscala_xml_Equality__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_xml_MetaData(x1)) {
    var x2 = ScalaJS.as.scala_xml_MetaData(x1);
    return ScalaJS.anyRefEqEq(this.asAttrMap__Lscala_collection_immutable_Map(), x2.asAttrMap__Lscala_collection_immutable_Map())
  };
  return false
});
ScalaJS.c.scala_xml_MetaData.prototype.basisForHashCode__Lscala_collection_Seq = (function() {
  return ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_collection_immutable_Map.getArrayOf(), [this.asAttrMap__Lscala_collection_immutable_Map()]), 1)))
});
ScalaJS.c.scala_xml_MetaData.prototype.filter__Lscala_Function1__Lscala_xml_MetaData = (function(f) {
  if (ScalaJS.uZ(f.apply__O__O(this))) {
    return this.copy__Lscala_xml_MetaData__Lscala_xml_MetaData(this.next__Lscala_xml_MetaData().filter__Lscala_Function1__Lscala_xml_MetaData(f))
  } else {
    return this.next__Lscala_xml_MetaData().filter__Lscala_Function1__Lscala_xml_MetaData(f)
  }
});
ScalaJS.c.scala_xml_MetaData.prototype.prefixedKey__T = (function() {
  var x1 = this;
  if (ScalaJS.is.scala_xml_Attribute(x1)) {
    var x2 = ScalaJS.as.scala_xml_Attribute(x1);
    if (x2.isPrefixed__Z()) {
      return ((("" + x2.pre__T()) + ":") + this.key__T())
    }
  };
  return this.key__T()
});
ScalaJS.c.scala_xml_MetaData.prototype.asAttrMap__Lscala_collection_immutable_Map = (function() {
  return this.iterator__Lscala_collection_Iterator().map__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x) {
      return new ScalaJS.c.scala_Tuple2().init___O__O(x.prefixedKey__T(), ScalaJS.modules.scala_xml_NodeSeq().seqToNodeSeq__Lscala_collection_Seq__Lscala_xml_NodeSeq(x.value__Lscala_collection_Seq()).text__T())
    })
  })())).toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(ScalaJS.modules.scala_Predef().conforms__Lscala_Predef$$less$colon$less())
});
ScalaJS.c.scala_xml_MetaData.prototype.get__T__Lscala_Option = (function(key) {
  return ScalaJS.modules.scala_Option().apply__O__Lscala_Option(this.apply__T__Lscala_collection_Seq(key))
});
ScalaJS.c.scala_xml_MetaData.prototype.get__T__Lscala_xml_Node__T__Lscala_Option = (function(uri, owner, key) {
  return this.get__T__Lscala_xml_NamespaceBinding__T__Lscala_Option(uri, owner.scope__Lscala_xml_NamespaceBinding(), key)
});
ScalaJS.c.scala_xml_MetaData.prototype.get__T__Lscala_xml_NamespaceBinding__T__Lscala_Option = (function(uri, scope, key) {
  return ScalaJS.modules.scala_Option().apply__O__Lscala_Option(this.apply__T__Lscala_xml_NamespaceBinding__T__Lscala_collection_Seq(uri, scope, key))
});
ScalaJS.c.scala_xml_MetaData.prototype.toString1__T = (function() {
  return ScalaJS.modules.scala_xml_Utility().sbToString__Lscala_Function1__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(sb) {
      arg$outer.toString1__Lscala_collection_mutable_StringBuilder__V(sb);
      return ScalaJS.bV(undefined)
    })
  })(this)))
});
ScalaJS.c.scala_xml_MetaData.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_xml_Utility().sbToString__Lscala_Function1__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(sb) {
      arg$outer.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb);
      return ScalaJS.bV(undefined)
    })
  })(this)))
});
ScalaJS.c.scala_xml_MetaData.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  sb.append__C__Lscala_collection_mutable_StringBuilder(32);
  this.toString1__Lscala_collection_mutable_StringBuilder__V(sb);
  return this.next__Lscala_xml_MetaData().buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb)
});
ScalaJS.c.scala_xml_MetaData.prototype.remove__T__Lscala_xml_Node__T__Lscala_xml_MetaData = (function(namespace, owner, key) {
  return this.remove__T__Lscala_xml_NamespaceBinding__T__Lscala_xml_MetaData(namespace, owner.scope__Lscala_xml_NamespaceBinding(), key)
});
ScalaJS.c.scala_xml_MetaData.prototype.filter__Lscala_Function1__O = (function(p) {
  return this.filter__Lscala_Function1__Lscala_xml_MetaData(p)
});
ScalaJS.c.scala_xml_MetaData.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_AbstractIterable.prototype.init___.call(this);
  ScalaJS.impls.scala_xml_Equality$class__$init$__Lscala_xml_Equality__V(this);
  return this
});
ScalaJS.c.scala_xml_MetaData.prototype.xml$und$bang$eq__O__ = (function(other) {
  return ScalaJS.bZ(this.xml$und$bang$eq__O__Z(other))
});
ScalaJS.c.scala_xml_MetaData.prototype.xml$und$eq$eq__O__ = (function(other$2) {
  return ScalaJS.bZ(this.xml$und$eq$eq__O__Z(other$2))
});
ScalaJS.c.scala_xml_MetaData.prototype.strict$und$bang$eq__Lscala_xml_Equality__ = (function(other$3) {
  return ScalaJS.bZ(this.strict$und$bang$eq__Lscala_xml_Equality__Z(other$3))
});
ScalaJS.c.scala_xml_MetaData.prototype.remove__T__Lscala_xml_Node__T__ = (function(namespace, owner, key) {
  return this.remove__T__Lscala_xml_Node__T__Lscala_xml_MetaData(namespace, owner, key)
});
ScalaJS.c.scala_xml_MetaData.prototype.buildString__Lscala_collection_mutable_StringBuilder__ = (function(sb) {
  return this.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb)
});
ScalaJS.c.scala_xml_MetaData.prototype.toString1__ = (function() {
  return this.toString1__T()
});
ScalaJS.c.scala_xml_MetaData.prototype.get__T__Lscala_xml_NamespaceBinding__T__ = (function(uri, scope, key$2) {
  return this.get__T__Lscala_xml_NamespaceBinding__T__Lscala_Option(uri, scope, key$2)
});
ScalaJS.c.scala_xml_MetaData.prototype.get__T__Lscala_xml_Node__T__ = (function(uri$2, owner$2, key$3) {
  return this.get__T__Lscala_xml_Node__T__Lscala_Option(uri$2, owner$2, key$3)
});
ScalaJS.c.scala_xml_MetaData.prototype.get__T__ = (function(key$4) {
  return this.get__T__Lscala_Option(key$4)
});
ScalaJS.c.scala_xml_MetaData.prototype.asAttrMap__ = (function() {
  return this.asAttrMap__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_xml_MetaData.prototype.prefixedKey__ = (function() {
  return this.prefixedKey__T()
});
ScalaJS.c.scala_xml_MetaData.prototype.basisForHashCode__ = (function() {
  return this.basisForHashCode__Lscala_collection_Seq()
});
ScalaJS.c.scala_xml_MetaData.prototype.strict$und$eq$eq__Lscala_xml_Equality__ = (function(other$4) {
  return ScalaJS.bZ(this.strict$und$eq$eq__Lscala_xml_Equality__Z(other$4))
});
ScalaJS.c.scala_xml_MetaData.prototype.length__I__ = (function(i) {
  return ScalaJS.bI(this.length__I__I(i))
});
ScalaJS.c.scala_xml_MetaData.prototype.length__ = (function() {
  return ScalaJS.bI(this.length__I())
});
ScalaJS.c.scala_xml_MetaData.prototype.hasNext__ = (function() {
  return ScalaJS.bZ(this.hasNext__Z())
});
ScalaJS.c.scala_xml_MetaData.prototype.apply__T__Lscala_xml_Node__T__ = (function(namespace_uri, owner$3, key$5) {
  return this.apply__T__Lscala_xml_Node__T__Lscala_collection_Seq(namespace_uri, owner$3, key$5)
});
ScalaJS.c.scala_xml_MetaData.prototype.append__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__ = (function(updates, scope$2) {
  return this.append__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_xml_MetaData(updates, scope$2)
});
ScalaJS.c.scala_xml_MetaData.prototype.remove__T__Lscala_xml_NamespaceBinding__T__ = (function(namespace$2, scope$3, key$6) {
  return this.remove__T__Lscala_xml_NamespaceBinding__T__Lscala_xml_MetaData(namespace$2, scope$3, key$6)
});
ScalaJS.c.scala_xml_MetaData.prototype.remove__T__ = (function(key$7) {
  return this.remove__T__Lscala_xml_MetaData(key$7)
});
ScalaJS.c.scala_xml_MetaData.prototype.wellformed__Lscala_xml_NamespaceBinding__ = (function(scope$4) {
  return ScalaJS.bZ(this.wellformed__Lscala_xml_NamespaceBinding__Z(scope$4))
});
ScalaJS.c.scala_xml_MetaData.prototype.toString1__Lscala_collection_mutable_StringBuilder__ = (function(sb$2) {
  return ScalaJS.bV(this.toString1__Lscala_collection_mutable_StringBuilder__V(sb$2))
});
ScalaJS.c.scala_xml_MetaData.prototype.next__ = (function() {
  return this.next__Lscala_xml_MetaData()
});
ScalaJS.c.scala_xml_MetaData.prototype.value__ = (function() {
  return this.value__Lscala_collection_Seq()
});
ScalaJS.c.scala_xml_MetaData.prototype.key__ = (function() {
  return this.key__T()
});
ScalaJS.c.scala_xml_MetaData.prototype.isPrefixed__ = (function() {
  return ScalaJS.bZ(this.isPrefixed__Z())
});
ScalaJS.c.scala_xml_MetaData.prototype.getNamespace__Lscala_xml_Node__ = (function(owner$4) {
  return this.getNamespace__Lscala_xml_Node__T(owner$4)
});
ScalaJS.c.scala_xml_MetaData.prototype.copy__Lscala_xml_MetaData__ = (function(next) {
  return this.copy__Lscala_xml_MetaData__Lscala_xml_MetaData(next)
});
ScalaJS.c.scala_xml_MetaData.prototype.apply__T__Lscala_xml_NamespaceBinding__T__ = (function(namespace_uri$2, scp, k) {
  return this.apply__T__Lscala_xml_NamespaceBinding__T__Lscala_collection_Seq(namespace_uri$2, scp, k)
});
ScalaJS.c.scala_xml_MetaData.prototype.apply__T__ = (function(key$8) {
  return this.apply__T__Lscala_collection_Seq(key$8)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_MetaData = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_MetaData.prototype = ScalaJS.c.scala_xml_MetaData.prototype;
ScalaJS.is.scala_xml_MetaData = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_MetaData)))
});
ScalaJS.as.scala_xml_MetaData = (function(obj) {
  if ((ScalaJS.is.scala_xml_MetaData(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.MetaData")
  }
});
ScalaJS.isArrayOf.scala_xml_MetaData = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_MetaData)))
});
ScalaJS.asArrayOf.scala_xml_MetaData = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_MetaData(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.MetaData;", depth)
  }
});
ScalaJS.data.scala_xml_MetaData = new ScalaJS.ClassTypeData({
  scala_xml_MetaData: 0
}, false, "scala.xml.MetaData", ScalaJS.data.scala_collection_AbstractIterable, {
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
ScalaJS.c.scala_xml_MetaData.prototype.$classData = ScalaJS.data.scala_xml_MetaData;
//@ sourceMappingURL=MetaData.js.map
