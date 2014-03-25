/** @constructor */
ScalaJS.c.scala_xml_dtd_ExtDef$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.scala_xml_dtd_ExtDef$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_xml_dtd_ExtDef$.prototype.constructor = ScalaJS.c.scala_xml_dtd_ExtDef$;
ScalaJS.c.scala_xml_dtd_ExtDef$.prototype.toString__T = (function() {
  return "ExtDef"
});
ScalaJS.c.scala_xml_dtd_ExtDef$.prototype.apply__Lscala_xml_dtd_ExternalID__Lscala_xml_dtd_ExtDef = (function(extID) {
  return new ScalaJS.c.scala_xml_dtd_ExtDef().init___Lscala_xml_dtd_ExternalID(extID)
});
ScalaJS.c.scala_xml_dtd_ExtDef$.prototype.unapply__Lscala_xml_dtd_ExtDef__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.extID__Lscala_xml_dtd_ExternalID())
  }
});
ScalaJS.c.scala_xml_dtd_ExtDef$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_dtd_ExtDef()
});
ScalaJS.c.scala_xml_dtd_ExtDef$.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_xml_dtd_ExternalID__Lscala_xml_dtd_ExtDef(ScalaJS.as.scala_xml_dtd_ExternalID(v1))
});
ScalaJS.c.scala_xml_dtd_ExtDef$.prototype.unapply__Lscala_xml_dtd_ExtDef__ = (function(x$0) {
  return this.unapply__Lscala_xml_dtd_ExtDef__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_dtd_ExtDef$.prototype.apply__Lscala_xml_dtd_ExternalID__ = (function(extID) {
  return this.apply__Lscala_xml_dtd_ExternalID__Lscala_xml_dtd_ExtDef(extID)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_ExtDef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_ExtDef$.prototype = ScalaJS.c.scala_xml_dtd_ExtDef$.prototype;
ScalaJS.is.scala_xml_dtd_ExtDef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_ExtDef$)))
});
ScalaJS.as.scala_xml_dtd_ExtDef$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_ExtDef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.ExtDef")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_ExtDef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_ExtDef$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_ExtDef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_ExtDef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.ExtDef;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_ExtDef$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_ExtDef$: 0
}, false, "scala.xml.dtd.ExtDef$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_xml_dtd_ExtDef$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_ExtDef$.prototype.$classData = ScalaJS.data.scala_xml_dtd_ExtDef$;
ScalaJS.moduleInstances.scala_xml_dtd_ExtDef = undefined;
ScalaJS.modules.scala_xml_dtd_ExtDef = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_ExtDef)) {
    ScalaJS.moduleInstances.scala_xml_dtd_ExtDef = new ScalaJS.c.scala_xml_dtd_ExtDef$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_ExtDef
});
//@ sourceMappingURL=ExtDef$.js.map
