/** @constructor */
ScalaJS.c.scala_xml_dtd_MIXED$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.scala_xml_dtd_MIXED$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_xml_dtd_MIXED$.prototype.constructor = ScalaJS.c.scala_xml_dtd_MIXED$;
ScalaJS.c.scala_xml_dtd_MIXED$.prototype.toString__T = (function() {
  return "MIXED"
});
ScalaJS.c.scala_xml_dtd_MIXED$.prototype.apply__Lscala_util_regexp_Base$RegExp__Lscala_xml_dtd_MIXED = (function(r) {
  return new ScalaJS.c.scala_xml_dtd_MIXED().init___Lscala_util_regexp_Base$RegExp(r)
});
ScalaJS.c.scala_xml_dtd_MIXED$.prototype.unapply__Lscala_xml_dtd_MIXED__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.r__Lscala_util_regexp_Base$RegExp())
  }
});
ScalaJS.c.scala_xml_dtd_MIXED$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_dtd_MIXED()
});
ScalaJS.c.scala_xml_dtd_MIXED$.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_util_regexp_Base$RegExp__Lscala_xml_dtd_MIXED(ScalaJS.as.scala_util_regexp_Base$RegExp(v1))
});
ScalaJS.c.scala_xml_dtd_MIXED$.prototype.unapply__Lscala_xml_dtd_MIXED__ = (function(x$0) {
  return this.unapply__Lscala_xml_dtd_MIXED__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_dtd_MIXED$.prototype.apply__Lscala_util_regexp_Base$RegExp__ = (function(r) {
  return this.apply__Lscala_util_regexp_Base$RegExp__Lscala_xml_dtd_MIXED(r)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_MIXED$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_MIXED$.prototype = ScalaJS.c.scala_xml_dtd_MIXED$.prototype;
ScalaJS.is.scala_xml_dtd_MIXED$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_MIXED$)))
});
ScalaJS.as.scala_xml_dtd_MIXED$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_MIXED$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.MIXED")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_MIXED$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_MIXED$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_MIXED$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_MIXED$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.MIXED;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_MIXED$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_MIXED$: 0
}, false, "scala.xml.dtd.MIXED$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_xml_dtd_MIXED$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_MIXED$.prototype.$classData = ScalaJS.data.scala_xml_dtd_MIXED$;
ScalaJS.moduleInstances.scala_xml_dtd_MIXED = undefined;
ScalaJS.modules.scala_xml_dtd_MIXED = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_MIXED)) {
    ScalaJS.moduleInstances.scala_xml_dtd_MIXED = new ScalaJS.c.scala_xml_dtd_MIXED$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_MIXED
});
//@ sourceMappingURL=MIXED$.js.map
