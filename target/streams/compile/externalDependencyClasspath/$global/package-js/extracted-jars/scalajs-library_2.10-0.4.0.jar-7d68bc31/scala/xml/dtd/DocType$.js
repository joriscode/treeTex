/** @constructor */
ScalaJS.c.scala_xml_dtd_DocType$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction3.call(this)
});
ScalaJS.c.scala_xml_dtd_DocType$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction3();
ScalaJS.c.scala_xml_dtd_DocType$.prototype.constructor = ScalaJS.c.scala_xml_dtd_DocType$;
ScalaJS.c.scala_xml_dtd_DocType$.prototype.toString__T = (function() {
  return "DocType"
});
ScalaJS.c.scala_xml_dtd_DocType$.prototype.apply__T__Lscala_xml_dtd_ExternalID__Lscala_collection_Seq__Lscala_xml_dtd_DocType = (function(name, extID, intSubset) {
  return new ScalaJS.c.scala_xml_dtd_DocType().init___T__Lscala_xml_dtd_ExternalID__Lscala_collection_Seq(name, extID, intSubset)
});
ScalaJS.c.scala_xml_dtd_DocType$.prototype.unapply__Lscala_xml_dtd_DocType__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple3().init___O__O__O(x$0.name__T(), x$0.extID__Lscala_xml_dtd_ExternalID(), x$0.intSubset__Lscala_collection_Seq()))
  }
});
ScalaJS.c.scala_xml_dtd_DocType$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_dtd_DocType()
});
ScalaJS.c.scala_xml_dtd_DocType$.prototype.apply__O__O__O__O = (function(v1, v2, v3) {
  return this.apply__T__Lscala_xml_dtd_ExternalID__Lscala_collection_Seq__Lscala_xml_dtd_DocType(ScalaJS.as.java_lang_String(v1), ScalaJS.as.scala_xml_dtd_ExternalID(v2), ScalaJS.as.scala_collection_Seq(v3))
});
ScalaJS.c.scala_xml_dtd_DocType$.prototype.unapply__Lscala_xml_dtd_DocType__ = (function(x$0) {
  return this.unapply__Lscala_xml_dtd_DocType__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_dtd_DocType$.prototype.apply__T__Lscala_xml_dtd_ExternalID__Lscala_collection_Seq__ = (function(name, extID, intSubset) {
  return this.apply__T__Lscala_xml_dtd_ExternalID__Lscala_collection_Seq__Lscala_xml_dtd_DocType(name, extID, intSubset)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_DocType$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_DocType$.prototype = ScalaJS.c.scala_xml_dtd_DocType$.prototype;
ScalaJS.is.scala_xml_dtd_DocType$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_DocType$)))
});
ScalaJS.as.scala_xml_dtd_DocType$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_DocType$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.DocType")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_DocType$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_DocType$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_DocType$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_DocType$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.DocType;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_DocType$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_DocType$: 0
}, false, "scala.xml.dtd.DocType$", ScalaJS.data.scala_runtime_AbstractFunction3, {
  scala_xml_dtd_DocType$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction3: 1,
  scala_Function3: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_DocType$.prototype.$classData = ScalaJS.data.scala_xml_dtd_DocType$;
ScalaJS.moduleInstances.scala_xml_dtd_DocType = undefined;
ScalaJS.modules.scala_xml_dtd_DocType = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_DocType)) {
    ScalaJS.moduleInstances.scala_xml_dtd_DocType = new ScalaJS.c.scala_xml_dtd_DocType$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_DocType
});
//@ sourceMappingURL=DocType$.js.map
