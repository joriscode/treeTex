/** @constructor */
ScalaJS.c.scala_xml_dtd_IntDef$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.scala_xml_dtd_IntDef$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_xml_dtd_IntDef$.prototype.constructor = ScalaJS.c.scala_xml_dtd_IntDef$;
ScalaJS.c.scala_xml_dtd_IntDef$.prototype.toString__T = (function() {
  return "IntDef"
});
ScalaJS.c.scala_xml_dtd_IntDef$.prototype.apply__T__Lscala_xml_dtd_IntDef = (function(value) {
  return new ScalaJS.c.scala_xml_dtd_IntDef().init___T(value)
});
ScalaJS.c.scala_xml_dtd_IntDef$.prototype.unapply__Lscala_xml_dtd_IntDef__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.value__T())
  }
});
ScalaJS.c.scala_xml_dtd_IntDef$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_dtd_IntDef()
});
ScalaJS.c.scala_xml_dtd_IntDef$.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lscala_xml_dtd_IntDef(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.scala_xml_dtd_IntDef$.prototype.unapply__Lscala_xml_dtd_IntDef__ = (function(x$0) {
  return this.unapply__Lscala_xml_dtd_IntDef__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_dtd_IntDef$.prototype.apply__T__ = (function(value) {
  return this.apply__T__Lscala_xml_dtd_IntDef(value)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_IntDef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_IntDef$.prototype = ScalaJS.c.scala_xml_dtd_IntDef$.prototype;
ScalaJS.is.scala_xml_dtd_IntDef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_IntDef$)))
});
ScalaJS.as.scala_xml_dtd_IntDef$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_IntDef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.IntDef")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_IntDef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_IntDef$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_IntDef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_IntDef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.IntDef;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_IntDef$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_IntDef$: 0
}, false, "scala.xml.dtd.IntDef$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_xml_dtd_IntDef$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_IntDef$.prototype.$classData = ScalaJS.data.scala_xml_dtd_IntDef$;
ScalaJS.moduleInstances.scala_xml_dtd_IntDef = undefined;
ScalaJS.modules.scala_xml_dtd_IntDef = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_IntDef)) {
    ScalaJS.moduleInstances.scala_xml_dtd_IntDef = new ScalaJS.c.scala_xml_dtd_IntDef$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_IntDef
});
//@ sourceMappingURL=IntDef$.js.map
