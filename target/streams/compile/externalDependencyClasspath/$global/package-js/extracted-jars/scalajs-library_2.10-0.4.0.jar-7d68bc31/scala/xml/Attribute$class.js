ScalaJS.impls.scala_xml_Attribute$class__remove__Lscala_xml_Attribute__T__Lscala_xml_MetaData = (function($$this, key$5) {
  if (((!$$this.isPrefixed__Z()) && ScalaJS.anyRefEqEq($$this.key__T(), key$5))) {
    return $$this.next__Lscala_xml_MetaData()
  } else {
    return ScalaJS.as.scala_xml_MetaData($$this.copy__Lscala_xml_MetaData__Lscala_xml_Attribute($$this.next__Lscala_xml_MetaData().remove__T__Lscala_xml_MetaData(key$5)))
  }
});
ScalaJS.impls.scala_xml_Attribute$class__remove__Lscala_xml_Attribute__T__Lscala_xml_NamespaceBinding__T__Lscala_xml_MetaData = (function($$this, namespace, scope, key) {
  if ((ScalaJS.anyRefEqEq($$this.key__T(), key) && ScalaJS.anyRefEqEq(scope.getURI__T__T($$this.pre__T()), namespace))) {
    return $$this.next__Lscala_xml_MetaData()
  } else {
    return ScalaJS.as.scala_xml_MetaData($$this.copy__Lscala_xml_MetaData__Lscala_xml_Attribute($$this.next__Lscala_xml_MetaData().remove__T__Lscala_xml_NamespaceBinding__T__Lscala_xml_MetaData(namespace, scope, key)))
  }
});
ScalaJS.impls.scala_xml_Attribute$class__isPrefixed__Lscala_xml_Attribute__Z = (function($$this) {
  return (!ScalaJS.anyRefEqEq($$this.pre__T(), null))
});
ScalaJS.impls.scala_xml_Attribute$class__wellformed__Lscala_xml_Attribute__Lscala_xml_NamespaceBinding__Z = (function($$this, scope) {
  if ($$this.isPrefixed__Z()) {
    var arg = scope.getURI__T__T($$this.pre__T())
  } else {
    var arg = null
  };
  return (ScalaJS.anyRefEqEq($$this.next__Lscala_xml_MetaData().apply__T__Lscala_xml_NamespaceBinding__T__Lscala_collection_Seq(arg, scope, $$this.key__T()), null) && $$this.next__Lscala_xml_MetaData().wellformed__Lscala_xml_NamespaceBinding__Z(scope))
});
ScalaJS.impls.scala_xml_Attribute$class__iterator__Lscala_xml_Attribute__Lscala_collection_Iterator = (function($$this) {
  if (ScalaJS.anyRefEqEq($$this.value__Lscala_collection_Seq(), null)) {
    return $$this.next__Lscala_xml_MetaData().iterator__Lscala_collection_Iterator()
  } else {
    return ScalaJS.modules.scala_package().Iterator__Lscala_collection_Iterator$().single__O__Lscala_collection_Iterator($$this).$$plus$plus__Lscala_Function0__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
      return (function() {
        return arg$outer.next__Lscala_xml_MetaData().iterator__Lscala_collection_Iterator()
      })
    })($$this)))
  }
});
ScalaJS.impls.scala_xml_Attribute$class__size__Lscala_xml_Attribute__I = (function($$this) {
  if (ScalaJS.anyRefEqEq($$this.value__Lscala_collection_Seq(), null)) {
    return $$this.next__Lscala_xml_MetaData().size__I()
  } else {
    return (1 + $$this.next__Lscala_xml_MetaData().size__I())
  }
});
ScalaJS.impls.scala_xml_Attribute$class__toString1__Lscala_xml_Attribute__Lscala_collection_mutable_StringBuilder__V = (function($$this, sb) {
  if (ScalaJS.anyRefEqEq($$this.value__Lscala_collection_Seq(), null)) {
    return undefined
  };
  if ($$this.isPrefixed__Z()) {
    sb.append__T__Lscala_collection_mutable_StringBuilder($$this.pre__T()).append__C__Lscala_collection_mutable_StringBuilder(58)
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  sb.append__T__Lscala_collection_mutable_StringBuilder($$this.key__T()).append__C__Lscala_collection_mutable_StringBuilder(61);
  var sb2 = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  ScalaJS.modules.scala_xml_Utility().sequenceToXML__Lscala_collection_Seq__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Lscala_Enumeration$Value__V($$this.value__Lscala_collection_Seq(), ScalaJS.modules.scala_xml_TopScope(), sb2, true, ScalaJS.modules.scala_xml_Utility().sequenceToXML$default$5__Z(), ScalaJS.modules.scala_xml_Utility().sequenceToXML$default$6__Z(), ScalaJS.modules.scala_xml_Utility().sequenceToXML$default$7__Lscala_Enumeration$Value());
  ScalaJS.modules.scala_xml_Utility().appendQuoted__T__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb2.toString__T(), sb)
});
ScalaJS.impls.scala_xml_Attribute$class__$init$__Lscala_xml_Attribute__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=Attribute$class.js.map
