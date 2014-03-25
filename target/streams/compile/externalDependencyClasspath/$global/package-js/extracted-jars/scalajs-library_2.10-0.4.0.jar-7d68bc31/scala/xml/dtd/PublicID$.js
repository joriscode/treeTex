/** @constructor */
ScalaJS.c.scala_xml_dtd_PublicID$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this)
});
ScalaJS.c.scala_xml_dtd_PublicID$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.scala_xml_dtd_PublicID$.prototype.constructor = ScalaJS.c.scala_xml_dtd_PublicID$;
ScalaJS.c.scala_xml_dtd_PublicID$.prototype.toString__T = (function() {
  return "PublicID"
});
ScalaJS.c.scala_xml_dtd_PublicID$.prototype.apply__T__T__Lscala_xml_dtd_PublicID = (function(publicId, systemId) {
  return new ScalaJS.c.scala_xml_dtd_PublicID().init___T__T(publicId, systemId)
});
ScalaJS.c.scala_xml_dtd_PublicID$.prototype.unapply__Lscala_xml_dtd_PublicID__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.publicId__T(), x$0.systemId__T()))
  }
});
ScalaJS.c.scala_xml_dtd_PublicID$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_dtd_PublicID()
});
ScalaJS.c.scala_xml_dtd_PublicID$.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__T__T__Lscala_xml_dtd_PublicID(ScalaJS.as.java_lang_String(v1), ScalaJS.as.java_lang_String(v2))
});
ScalaJS.c.scala_xml_dtd_PublicID$.prototype.unapply__Lscala_xml_dtd_PublicID__ = (function(x$0) {
  return this.unapply__Lscala_xml_dtd_PublicID__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_dtd_PublicID$.prototype.apply__T__T__ = (function(publicId, systemId) {
  return this.apply__T__T__Lscala_xml_dtd_PublicID(publicId, systemId)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_PublicID$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_PublicID$.prototype = ScalaJS.c.scala_xml_dtd_PublicID$.prototype;
ScalaJS.is.scala_xml_dtd_PublicID$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_PublicID$)))
});
ScalaJS.as.scala_xml_dtd_PublicID$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_PublicID$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.PublicID")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_PublicID$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_PublicID$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_PublicID$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_PublicID$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.PublicID;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_PublicID$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_PublicID$: 0
}, false, "scala.xml.dtd.PublicID$", ScalaJS.data.scala_runtime_AbstractFunction2, {
  scala_xml_dtd_PublicID$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_PublicID$.prototype.$classData = ScalaJS.data.scala_xml_dtd_PublicID$;
ScalaJS.moduleInstances.scala_xml_dtd_PublicID = undefined;
ScalaJS.modules.scala_xml_dtd_PublicID = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_PublicID)) {
    ScalaJS.moduleInstances.scala_xml_dtd_PublicID = new ScalaJS.c.scala_xml_dtd_PublicID$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_PublicID
});
//@ sourceMappingURL=PublicID$.js.map
