ScalaJS.impls.scala_xml_Equality$class__strict$und$bang$eq__Lscala_xml_Equality__Lscala_xml_Equality__Z = (function($$this, other) {
  return (!$$this.strict$und$eq$eq__Lscala_xml_Equality__Z(other))
});
ScalaJS.impls.scala_xml_Equality$class__canEqual__Lscala_xml_Equality__O__Z = (function($$this, other) {
  var x1 = other;
  if (ScalaJS.is.scala_xml_Equality(x1)) {
    return true
  };
  return false
});
ScalaJS.impls.scala_xml_Equality$class__hashCode__Lscala_xml_Equality__I = (function($$this) {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().hash__O__I($$this.basisForHashCode__Lscala_collection_Seq())
});
ScalaJS.impls.scala_xml_Equality$class__equals__Lscala_xml_Equality__O__Z = (function($$this, other) {
  return ScalaJS.impls.scala_xml_Equality$class__doComparison__Lscala_xml_Equality__O__Z__Z($$this, other, false)
});
ScalaJS.impls.scala_xml_Equality$class__xml$und$eq$eq__Lscala_xml_Equality__O__Z = (function($$this, other) {
  return ScalaJS.impls.scala_xml_Equality$class__doComparison__Lscala_xml_Equality__O__Z__Z($$this, other, true)
});
ScalaJS.impls.scala_xml_Equality$class__xml$und$bang$eq__Lscala_xml_Equality__O__Z = (function($$this, other) {
  return (!$$this.xml$und$eq$eq__O__Z(other))
});
ScalaJS.impls.scala_xml_Equality$class__doComparison__Lscala_xml_Equality__O__Z__Z = (function($$this, other, blithe) {
  var x1 = other;
  matchEnd5: {
    if (ScalaJS.is.java_lang_Object(x1)) {
      var x2 = x1;
      if (($$this === x2)) {
        var strictlyEqual = true;
        break matchEnd5
      }
    };
    if (ScalaJS.is.scala_xml_Equality(x1)) {
      var x3 = ScalaJS.as.scala_xml_Equality(x1);
      var strictlyEqual = (x3.canEqual__O__Z($$this) && $$this.strict$und$eq$eq__Lscala_xml_Equality__Z(x3));
      break matchEnd5
    };
    var strictlyEqual = false;
    break matchEnd5
  };
  return (strictlyEqual || (blithe && ScalaJS.modules.scala_xml_Equality().compareBlithely__O__O__Z($$this, ScalaJS.modules.scala_xml_Equality().asRef__O__O(other))))
});
ScalaJS.impls.scala_xml_Equality$class__$init$__Lscala_xml_Equality__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=Equality$class.js.map
