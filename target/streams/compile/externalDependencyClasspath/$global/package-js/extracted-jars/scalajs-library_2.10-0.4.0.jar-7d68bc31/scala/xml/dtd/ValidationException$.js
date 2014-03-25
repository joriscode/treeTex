/** @constructor */
ScalaJS.c.scala_xml_dtd_ValidationException$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.scala_xml_dtd_ValidationException$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_xml_dtd_ValidationException$.prototype.constructor = ScalaJS.c.scala_xml_dtd_ValidationException$;
ScalaJS.c.scala_xml_dtd_ValidationException$.prototype.toString__T = (function() {
  return "ValidationException"
});
ScalaJS.c.scala_xml_dtd_ValidationException$.prototype.apply__T__Lscala_xml_dtd_ValidationException = (function(e) {
  return new ScalaJS.c.scala_xml_dtd_ValidationException().init___T(e)
});
ScalaJS.c.scala_xml_dtd_ValidationException$.prototype.unapply__Lscala_xml_dtd_ValidationException__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.e__T())
  }
});
ScalaJS.c.scala_xml_dtd_ValidationException$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_dtd_ValidationException()
});
ScalaJS.c.scala_xml_dtd_ValidationException$.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lscala_xml_dtd_ValidationException(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.scala_xml_dtd_ValidationException$.prototype.unapply__Lscala_xml_dtd_ValidationException__ = (function(x$0) {
  return this.unapply__Lscala_xml_dtd_ValidationException__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_dtd_ValidationException$.prototype.apply__T__ = (function(e) {
  return this.apply__T__Lscala_xml_dtd_ValidationException(e)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_ValidationException$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_ValidationException$.prototype = ScalaJS.c.scala_xml_dtd_ValidationException$.prototype;
ScalaJS.is.scala_xml_dtd_ValidationException$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_ValidationException$)))
});
ScalaJS.as.scala_xml_dtd_ValidationException$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_ValidationException$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.ValidationException")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_ValidationException$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_ValidationException$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_ValidationException$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_ValidationException$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.ValidationException;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_ValidationException$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_ValidationException$: 0
}, false, "scala.xml.dtd.ValidationException$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_xml_dtd_ValidationException$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_ValidationException$.prototype.$classData = ScalaJS.data.scala_xml_dtd_ValidationException$;
ScalaJS.moduleInstances.scala_xml_dtd_ValidationException = undefined;
ScalaJS.modules.scala_xml_dtd_ValidationException = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_ValidationException)) {
    ScalaJS.moduleInstances.scala_xml_dtd_ValidationException = new ScalaJS.c.scala_xml_dtd_ValidationException$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_ValidationException
});
//@ sourceMappingURL=ValidationException$.js.map
