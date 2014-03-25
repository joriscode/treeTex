/** @constructor */
ScalaJS.c.scala_xml_NamespaceBinding = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.prefix$1 = null;
  this.uri$1 = null;
  this.parent$1 = null
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_NamespaceBinding.prototype.constructor = ScalaJS.c.scala_xml_NamespaceBinding;
ScalaJS.c.scala_xml_NamespaceBinding.prototype.strict$und$bang$eq__Lscala_xml_Equality__Z = (function(other) {
  return ScalaJS.impls.scala_xml_Equality$class__strict$und$bang$eq__Lscala_xml_Equality__Lscala_xml_Equality__Z(this, other)
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_xml_Equality$class__hashCode__Lscala_xml_Equality__I(this)
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.equals__O__Z = (function(other) {
  return ScalaJS.impls.scala_xml_Equality$class__equals__Lscala_xml_Equality__O__Z(this, other)
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.xml$und$eq$eq__O__Z = (function(other) {
  return ScalaJS.impls.scala_xml_Equality$class__xml$und$eq$eq__Lscala_xml_Equality__O__Z(this, other)
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.xml$und$bang$eq__O__Z = (function(other) {
  return ScalaJS.impls.scala_xml_Equality$class__xml$und$bang$eq__Lscala_xml_Equality__O__Z(this, other)
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.prefix__T = (function() {
  return this.prefix$1
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.uri__T = (function() {
  return this.uri$1
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.parent__Lscala_xml_NamespaceBinding = (function() {
  return this.parent$1
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.getURI__T__T = (function(_prefix) {
  if (ScalaJS.anyRefEqEq(this.prefix__T(), _prefix)) {
    return this.uri__T()
  } else {
    return this.parent__Lscala_xml_NamespaceBinding().getURI__T__T(_prefix)
  }
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.getPrefix__T__T = (function(_uri) {
  if (ScalaJS.anyRefEqEq(_uri, this.uri__T())) {
    return this.prefix__T()
  } else {
    return this.parent__Lscala_xml_NamespaceBinding().getPrefix__T__T(_uri)
  }
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_xml_Utility().sbToString__Lscala_Function1__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(x$1) {
      arg$outer.buildString__Lscala_collection_mutable_StringBuilder__Lscala_xml_NamespaceBinding__V(x$1, ScalaJS.modules.scala_xml_TopScope());
      return ScalaJS.bV(undefined)
    })
  })(this)))
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.canEqual__O__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_xml_NamespaceBinding(x1)) {
    return true
  };
  return false
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.strict$und$eq$eq__Lscala_xml_Equality__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_xml_NamespaceBinding(x1)) {
    var x2 = ScalaJS.as.scala_xml_NamespaceBinding(x1);
    return ((ScalaJS.anyRefEqEq(this.prefix__T(), x2.prefix__T()) && ScalaJS.anyRefEqEq(this.uri__T(), x2.uri__T())) && ScalaJS.anyRefEqEq(this.parent__Lscala_xml_NamespaceBinding(), x2.parent__Lscala_xml_NamespaceBinding()))
  };
  return false
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.basisForHashCode__Lscala_collection_Seq = (function() {
  return ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [this.prefix__T(), this.uri__T(), this.parent__Lscala_xml_NamespaceBinding()])))
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.buildString__Lscala_xml_NamespaceBinding__T = (function(stop) {
  return ScalaJS.modules.scala_xml_Utility().sbToString__Lscala_Function1__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, stop$1) {
    return (function(x$2) {
      arg$outer.buildString__Lscala_collection_mutable_StringBuilder__Lscala_xml_NamespaceBinding__V(x$2, stop$1);
      return ScalaJS.bV(undefined)
    })
  })(this, stop)))
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_xml_NamespaceBinding__V = (function(sb, stop) {
  if ((this === stop)) {
    return undefined
  };
  var jsx$8 = new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(" xmlns%s=\"%s\""));
  var jsx$7 = ScalaJS.modules.scala_Predef();
  var jsx$6 = ScalaJS.data.java_lang_Object.getArrayOf();
  if ((!ScalaJS.anyRefEqEq(this.prefix__T(), null))) {
    var jsx$5 = (":" + this.prefix__T())
  } else {
    var jsx$5 = ""
  };
  if ((!ScalaJS.anyRefEqEq(this.uri__T(), null))) {
    var jsx$4 = this.uri__T()
  } else {
    var jsx$4 = ""
  };
  var jsx$3 = [jsx$5, jsx$4];
  var jsx$2 = ScalaJS.makeNativeArrayWrapper(jsx$6, jsx$3);
  var jsx$1 = jsx$7.genericWrapArray__O__Lscala_collection_mutable_WrappedArray(jsx$2);
  var s = jsx$8.format__Lscala_collection_Seq__T(jsx$1);
  this.parent__Lscala_xml_NamespaceBinding().buildString__Lscala_collection_mutable_StringBuilder__Lscala_xml_NamespaceBinding__V(sb.append__T__Lscala_collection_mutable_StringBuilder(s), stop)
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.copy__T__T__Lscala_xml_NamespaceBinding__Lscala_xml_NamespaceBinding = (function(prefix, uri, parent) {
  return new ScalaJS.c.scala_xml_NamespaceBinding().init___T__T__Lscala_xml_NamespaceBinding(prefix, uri, parent)
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.copy$default$1__T = (function() {
  return this.prefix__T()
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.copy$default$2__T = (function() {
  return this.uri__T()
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.copy$default$3__Lscala_xml_NamespaceBinding = (function() {
  return this.parent__Lscala_xml_NamespaceBinding()
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.productPrefix__T = (function() {
  return "NamespaceBinding"
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.productArity__I = (function() {
  return 3
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.prefix__T();
        break
      };
    case 1:
      {
        return this.uri__T();
        break
      };
    case 2:
      {
        return this.parent__Lscala_xml_NamespaceBinding();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.init___T__T__Lscala_xml_NamespaceBinding = (function(prefix, uri, parent) {
  this.prefix$1 = prefix;
  this.uri$1 = uri;
  this.parent$1 = parent;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_xml_Equality$class__$init$__Lscala_xml_Equality__V(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  if (ScalaJS.anyRefEqEq(prefix, "")) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("zero length prefix not allowed")
  };
  return this
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.xml$und$bang$eq__O__ = (function(other) {
  return ScalaJS.bZ(this.xml$und$bang$eq__O__Z(other))
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.xml$und$eq$eq__O__ = (function(other$2) {
  return ScalaJS.bZ(this.xml$und$eq$eq__O__Z(other$2))
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.strict$und$bang$eq__Lscala_xml_Equality__ = (function(other$3) {
  return ScalaJS.bZ(this.strict$und$bang$eq__Lscala_xml_Equality__Z(other$3))
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.productElement__I__ = (function(x$1) {
  return this.productElement__I__O(x$1)
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.copy__T__T__Lscala_xml_NamespaceBinding__ = (function(prefix, uri, parent) {
  return this.copy__T__T__Lscala_xml_NamespaceBinding__Lscala_xml_NamespaceBinding(prefix, uri, parent)
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_xml_NamespaceBinding__ = (function(sb, stop) {
  return ScalaJS.bV(this.buildString__Lscala_collection_mutable_StringBuilder__Lscala_xml_NamespaceBinding__V(sb, stop))
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.buildString__Lscala_xml_NamespaceBinding__ = (function(stop$2) {
  return this.buildString__Lscala_xml_NamespaceBinding__T(stop$2)
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.basisForHashCode__ = (function() {
  return this.basisForHashCode__Lscala_collection_Seq()
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.strict$und$eq$eq__Lscala_xml_Equality__ = (function(other$4) {
  return ScalaJS.bZ(this.strict$und$eq$eq__Lscala_xml_Equality__Z(other$4))
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.canEqual__O__ = (function(other$5) {
  return ScalaJS.bZ(this.canEqual__O__Z(other$5))
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.getPrefix__T__ = (function(_uri) {
  return this.getPrefix__T__T(_uri)
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.getURI__T__ = (function(_prefix) {
  return this.getURI__T__T(_prefix)
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.parent__ = (function() {
  return this.parent__Lscala_xml_NamespaceBinding()
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.uri__ = (function() {
  return this.uri__T()
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.prefix__ = (function() {
  return this.prefix__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_NamespaceBinding = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_NamespaceBinding.prototype = ScalaJS.c.scala_xml_NamespaceBinding.prototype;
ScalaJS.is.scala_xml_NamespaceBinding = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_NamespaceBinding)))
});
ScalaJS.as.scala_xml_NamespaceBinding = (function(obj) {
  if ((ScalaJS.is.scala_xml_NamespaceBinding(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.NamespaceBinding")
  }
});
ScalaJS.isArrayOf.scala_xml_NamespaceBinding = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_NamespaceBinding)))
});
ScalaJS.asArrayOf.scala_xml_NamespaceBinding = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_NamespaceBinding(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.NamespaceBinding;", depth)
  }
});
ScalaJS.data.scala_xml_NamespaceBinding = new ScalaJS.ClassTypeData({
  scala_xml_NamespaceBinding: 0
}, false, "scala.xml.NamespaceBinding", ScalaJS.data.java_lang_Object, {
  scala_xml_NamespaceBinding: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_xml_Equality: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_NamespaceBinding.prototype.$classData = ScalaJS.data.scala_xml_NamespaceBinding;
//@ sourceMappingURL=NamespaceBinding.js.map
