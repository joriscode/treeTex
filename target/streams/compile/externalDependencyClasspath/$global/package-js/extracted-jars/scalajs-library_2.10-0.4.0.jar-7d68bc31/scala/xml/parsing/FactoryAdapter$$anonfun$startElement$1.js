/** @constructor */
ScalaJS.c.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1$mcVI$sp.call(this);
  this.$$outer$3 = null;
  this.attributes$1$3 = null;
  this.m$1$3 = null;
  this.scpe$1$3 = null
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1$mcVI$sp();
ScalaJS.c.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1.prototype.constructor = ScalaJS.c.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1;
ScalaJS.c.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1.prototype.apply__I__V = (function(i) {
  this.apply$mcVI$sp__I__V(i)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1.prototype.apply$mcVI$sp__I__V = (function(i) {
  var qname = this.attributes$1$3.getQName__I__T(i);
  var value = this.attributes$1$3.getValue__I__T(i);
  var x1 = this.$$outer$3.scala$xml$parsing$FactoryAdapter$$splitName__T__Lscala_Tuple2(qname);
  matchEnd3: {
    if ((x1 !== null)) {
      var pre = ScalaJS.as.java_lang_String(x1.$$und1__O());
      var key = ScalaJS.as.java_lang_String(x1.$$und2__O());
      var x$2 = new ScalaJS.c.scala_Tuple2().init___O__O(pre, key);
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  var pre$2 = ScalaJS.as.java_lang_String(x$2.$$und1__O());
  var key$2 = ScalaJS.as.java_lang_String(x$2.$$und2__O());
  if ((ScalaJS.anyRefEqEq(pre$2, "xmlns") || (ScalaJS.anyRefEqEq(pre$2, null) && ScalaJS.anyRefEqEq(qname, "xmlns")))) {
    if (ScalaJS.anyRefEqEq(pre$2, null)) {
      var arg = null
    } else {
      var arg = key$2
    };
    this.scpe$1$3.elem$1 = new ScalaJS.c.scala_xml_NamespaceBinding().init___T__T__Lscala_xml_NamespaceBinding(arg, this.nullIfEmpty$1__p3__T__T(value), ScalaJS.as.scala_xml_NamespaceBinding(this.scpe$1$3.elem$1))
  } else {
    this.m$1$3.elem$1 = ScalaJS.as.scala_xml_MetaData(ScalaJS.modules.scala_xml_Attribute().apply__Lscala_Option__T__Lscala_collection_Seq__Lscala_xml_MetaData__Lscala_xml_Attribute(ScalaJS.modules.scala_Option().apply__O__Lscala_Option(pre$2), key$2, ScalaJS.modules.scala_xml_Text().apply__T__Lscala_xml_Text(value), ScalaJS.as.scala_xml_MetaData(this.m$1$3.elem$1)))
  }
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1.prototype.apply__O__O = (function(v1) {
  this.apply__I__V(ScalaJS.uI(v1));
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1.prototype.nullIfEmpty$1__p3__T__T = (function(s) {
  if (ScalaJS.anyRefEqEq(s, "")) {
    return null
  } else {
    return s
  }
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1.prototype.init___Lscala_xml_parsing_FactoryAdapter__Lorg_xml_sax_Attributes__Lscala_runtime_ObjectRef__Lscala_runtime_ObjectRef = (function($$outer, attributes$1, m$1, scpe$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$3 = $$outer
  };
  this.attributes$1$3 = attributes$1;
  this.m$1$3 = m$1;
  this.scpe$1$3 = scpe$1;
  ScalaJS.c.scala_runtime_AbstractFunction1$mcVI$sp.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1.prototype = ScalaJS.c.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1.prototype;
ScalaJS.is.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1)))
});
ScalaJS.as.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1 = (function(obj) {
  if ((ScalaJS.is.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.parsing.FactoryAdapter$$anonfun$startElement$1")
  }
});
ScalaJS.isArrayOf.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1)))
});
ScalaJS.asArrayOf.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.parsing.FactoryAdapter$$anonfun$startElement$1;", depth)
  }
});
ScalaJS.data.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1 = new ScalaJS.ClassTypeData({
  scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1: 0
}, false, "scala.xml.parsing.FactoryAdapter$$anonfun$startElement$1", ScalaJS.data.scala_runtime_AbstractFunction1$mcVI$sp, {
  scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1$mcVI$sp: 1,
  scala_Function1$mcVI$sp: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1.prototype.$classData = ScalaJS.data.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1;
//@ sourceMappingURL=FactoryAdapter$$anonfun$startElement$1.js.map
