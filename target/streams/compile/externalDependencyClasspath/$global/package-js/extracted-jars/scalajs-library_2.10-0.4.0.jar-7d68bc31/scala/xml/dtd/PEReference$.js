/** @constructor */
ScalaJS.c.scala_xml_dtd_PEReference$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.scala_xml_dtd_PEReference$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_xml_dtd_PEReference$.prototype.constructor = ScalaJS.c.scala_xml_dtd_PEReference$;
ScalaJS.c.scala_xml_dtd_PEReference$.prototype.toString__T = (function() {
  return "PEReference"
});
ScalaJS.c.scala_xml_dtd_PEReference$.prototype.apply__T__Lscala_xml_dtd_PEReference = (function(ent) {
  return new ScalaJS.c.scala_xml_dtd_PEReference().init___T(ent)
});
ScalaJS.c.scala_xml_dtd_PEReference$.prototype.unapply__Lscala_xml_dtd_PEReference__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.ent__T())
  }
});
ScalaJS.c.scala_xml_dtd_PEReference$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_dtd_PEReference()
});
ScalaJS.c.scala_xml_dtd_PEReference$.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lscala_xml_dtd_PEReference(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.scala_xml_dtd_PEReference$.prototype.unapply__Lscala_xml_dtd_PEReference__ = (function(x$0) {
  return this.unapply__Lscala_xml_dtd_PEReference__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_dtd_PEReference$.prototype.apply__T__ = (function(ent) {
  return this.apply__T__Lscala_xml_dtd_PEReference(ent)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_PEReference$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_PEReference$.prototype = ScalaJS.c.scala_xml_dtd_PEReference$.prototype;
ScalaJS.is.scala_xml_dtd_PEReference$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_PEReference$)))
});
ScalaJS.as.scala_xml_dtd_PEReference$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_PEReference$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.PEReference")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_PEReference$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_PEReference$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_PEReference$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_PEReference$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.PEReference;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_PEReference$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_PEReference$: 0
}, false, "scala.xml.dtd.PEReference$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_xml_dtd_PEReference$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_PEReference$.prototype.$classData = ScalaJS.data.scala_xml_dtd_PEReference$;
ScalaJS.moduleInstances.scala_xml_dtd_PEReference = undefined;
ScalaJS.modules.scala_xml_dtd_PEReference = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_PEReference)) {
    ScalaJS.moduleInstances.scala_xml_dtd_PEReference = new ScalaJS.c.scala_xml_dtd_PEReference$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_PEReference
});
//@ sourceMappingURL=PEReference$.js.map
