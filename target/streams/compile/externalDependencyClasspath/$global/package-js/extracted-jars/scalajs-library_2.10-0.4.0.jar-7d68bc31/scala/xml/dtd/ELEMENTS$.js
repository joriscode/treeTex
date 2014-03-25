/** @constructor */
ScalaJS.c.scala_xml_dtd_ELEMENTS$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.scala_xml_dtd_ELEMENTS$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_xml_dtd_ELEMENTS$.prototype.constructor = ScalaJS.c.scala_xml_dtd_ELEMENTS$;
ScalaJS.c.scala_xml_dtd_ELEMENTS$.prototype.toString__T = (function() {
  return "ELEMENTS"
});
ScalaJS.c.scala_xml_dtd_ELEMENTS$.prototype.apply__Lscala_util_regexp_Base$RegExp__Lscala_xml_dtd_ELEMENTS = (function(r) {
  return new ScalaJS.c.scala_xml_dtd_ELEMENTS().init___Lscala_util_regexp_Base$RegExp(r)
});
ScalaJS.c.scala_xml_dtd_ELEMENTS$.prototype.unapply__Lscala_xml_dtd_ELEMENTS__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.r__Lscala_util_regexp_Base$RegExp())
  }
});
ScalaJS.c.scala_xml_dtd_ELEMENTS$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_dtd_ELEMENTS()
});
ScalaJS.c.scala_xml_dtd_ELEMENTS$.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_util_regexp_Base$RegExp__Lscala_xml_dtd_ELEMENTS(ScalaJS.as.scala_util_regexp_Base$RegExp(v1))
});
ScalaJS.c.scala_xml_dtd_ELEMENTS$.prototype.unapply__Lscala_xml_dtd_ELEMENTS__ = (function(x$0) {
  return this.unapply__Lscala_xml_dtd_ELEMENTS__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_dtd_ELEMENTS$.prototype.apply__Lscala_util_regexp_Base$RegExp__ = (function(r) {
  return this.apply__Lscala_util_regexp_Base$RegExp__Lscala_xml_dtd_ELEMENTS(r)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_ELEMENTS$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_ELEMENTS$.prototype = ScalaJS.c.scala_xml_dtd_ELEMENTS$.prototype;
ScalaJS.is.scala_xml_dtd_ELEMENTS$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_ELEMENTS$)))
});
ScalaJS.as.scala_xml_dtd_ELEMENTS$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_ELEMENTS$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.ELEMENTS")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_ELEMENTS$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_ELEMENTS$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_ELEMENTS$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_ELEMENTS$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.ELEMENTS;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_ELEMENTS$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_ELEMENTS$: 0
}, false, "scala.xml.dtd.ELEMENTS$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_xml_dtd_ELEMENTS$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_ELEMENTS$.prototype.$classData = ScalaJS.data.scala_xml_dtd_ELEMENTS$;
ScalaJS.moduleInstances.scala_xml_dtd_ELEMENTS = undefined;
ScalaJS.modules.scala_xml_dtd_ELEMENTS = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_ELEMENTS)) {
    ScalaJS.moduleInstances.scala_xml_dtd_ELEMENTS = new ScalaJS.c.scala_xml_dtd_ELEMENTS$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_ELEMENTS
});
//@ sourceMappingURL=ELEMENTS$.js.map
