/** @constructor */
ScalaJS.c.scala_xml_TopScope$ = (function() {
  ScalaJS.c.scala_xml_NamespaceBinding.call(this)
});
ScalaJS.c.scala_xml_TopScope$.prototype = new ScalaJS.inheritable.scala_xml_NamespaceBinding();
ScalaJS.c.scala_xml_TopScope$.prototype.constructor = ScalaJS.c.scala_xml_TopScope$;
ScalaJS.c.scala_xml_TopScope$.prototype.getURI__T__T = (function(prefix1) {
  if (ScalaJS.anyRefEqEq(prefix1, ScalaJS.modules.scala_xml_XML().xml__T())) {
    return ScalaJS.modules.scala_xml_XML().namespace__T()
  } else {
    return null
  }
});
ScalaJS.c.scala_xml_TopScope$.prototype.getPrefix__T__T = (function(uri1) {
  if (ScalaJS.anyRefEqEq(uri1, ScalaJS.modules.scala_xml_XML().namespace__T())) {
    return ScalaJS.modules.scala_xml_XML().xml__T()
  } else {
    return null
  }
});
ScalaJS.c.scala_xml_TopScope$.prototype.toString__T = (function() {
  return ""
});
ScalaJS.c.scala_xml_TopScope$.prototype.buildString__Lscala_xml_NamespaceBinding__T = (function(stop) {
  return ""
});
ScalaJS.c.scala_xml_TopScope$.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_xml_NamespaceBinding__V = (function(sb, ignore) {
  /*<skip>*/
});
ScalaJS.c.scala_xml_TopScope$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_TopScope()
});
ScalaJS.c.scala_xml_TopScope$.prototype.init___ = (function() {
  ScalaJS.c.scala_xml_NamespaceBinding.prototype.init___T__T__Lscala_xml_NamespaceBinding.call(this, null, null, null);
  ScalaJS.moduleInstances.scala_xml_TopScope = this;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_xml_TopScope$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_TopScope$.prototype = ScalaJS.c.scala_xml_TopScope$.prototype;
ScalaJS.is.scala_xml_TopScope$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_TopScope$)))
});
ScalaJS.as.scala_xml_TopScope$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_TopScope$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.TopScope")
  }
});
ScalaJS.isArrayOf.scala_xml_TopScope$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_TopScope$)))
});
ScalaJS.asArrayOf.scala_xml_TopScope$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_TopScope$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.TopScope;", depth)
  }
});
ScalaJS.data.scala_xml_TopScope$ = new ScalaJS.ClassTypeData({
  scala_xml_TopScope$: 0
}, false, "scala.xml.TopScope$", ScalaJS.data.scala_xml_NamespaceBinding, {
  scala_xml_TopScope$: 1,
  scala_xml_NamespaceBinding: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_xml_Equality: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_TopScope$.prototype.$classData = ScalaJS.data.scala_xml_TopScope$;
ScalaJS.moduleInstances.scala_xml_TopScope = undefined;
ScalaJS.modules.scala_xml_TopScope = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_TopScope)) {
    ScalaJS.moduleInstances.scala_xml_TopScope = new ScalaJS.c.scala_xml_TopScope$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_TopScope
});
//@ sourceMappingURL=TopScope$.js.map
