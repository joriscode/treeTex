/** @constructor */
ScalaJS.c.scala_xml_dtd_SystemID$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.scala_xml_dtd_SystemID$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_xml_dtd_SystemID$.prototype.constructor = ScalaJS.c.scala_xml_dtd_SystemID$;
ScalaJS.c.scala_xml_dtd_SystemID$.prototype.toString__T = (function() {
  return "SystemID"
});
ScalaJS.c.scala_xml_dtd_SystemID$.prototype.apply__T__Lscala_xml_dtd_SystemID = (function(systemId) {
  return new ScalaJS.c.scala_xml_dtd_SystemID().init___T(systemId)
});
ScalaJS.c.scala_xml_dtd_SystemID$.prototype.unapply__Lscala_xml_dtd_SystemID__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.systemId__T())
  }
});
ScalaJS.c.scala_xml_dtd_SystemID$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_dtd_SystemID()
});
ScalaJS.c.scala_xml_dtd_SystemID$.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lscala_xml_dtd_SystemID(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.scala_xml_dtd_SystemID$.prototype.unapply__Lscala_xml_dtd_SystemID__ = (function(x$0) {
  return this.unapply__Lscala_xml_dtd_SystemID__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_dtd_SystemID$.prototype.apply__T__ = (function(systemId) {
  return this.apply__T__Lscala_xml_dtd_SystemID(systemId)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_SystemID$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_SystemID$.prototype = ScalaJS.c.scala_xml_dtd_SystemID$.prototype;
ScalaJS.is.scala_xml_dtd_SystemID$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_SystemID$)))
});
ScalaJS.as.scala_xml_dtd_SystemID$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_SystemID$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.SystemID")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_SystemID$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_SystemID$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_SystemID$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_SystemID$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.SystemID;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_SystemID$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_SystemID$: 0
}, false, "scala.xml.dtd.SystemID$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_xml_dtd_SystemID$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_SystemID$.prototype.$classData = ScalaJS.data.scala_xml_dtd_SystemID$;
ScalaJS.moduleInstances.scala_xml_dtd_SystemID = undefined;
ScalaJS.modules.scala_xml_dtd_SystemID = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_SystemID)) {
    ScalaJS.moduleInstances.scala_xml_dtd_SystemID = new ScalaJS.c.scala_xml_dtd_SystemID$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_SystemID
});
//@ sourceMappingURL=SystemID$.js.map
