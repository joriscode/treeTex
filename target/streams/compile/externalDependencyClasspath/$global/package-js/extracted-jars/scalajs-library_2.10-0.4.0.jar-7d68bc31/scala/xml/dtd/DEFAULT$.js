/** @constructor */
ScalaJS.c.scala_xml_dtd_DEFAULT$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this)
});
ScalaJS.c.scala_xml_dtd_DEFAULT$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.scala_xml_dtd_DEFAULT$.prototype.constructor = ScalaJS.c.scala_xml_dtd_DEFAULT$;
ScalaJS.c.scala_xml_dtd_DEFAULT$.prototype.toString__T = (function() {
  return "DEFAULT"
});
ScalaJS.c.scala_xml_dtd_DEFAULT$.prototype.apply__Z__T__Lscala_xml_dtd_DEFAULT = (function(fixed, attValue) {
  return new ScalaJS.c.scala_xml_dtd_DEFAULT().init___Z__T(fixed, attValue)
});
ScalaJS.c.scala_xml_dtd_DEFAULT$.prototype.unapply__Lscala_xml_dtd_DEFAULT__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.bZ(x$0.fixed__Z()), x$0.attValue__T()))
  }
});
ScalaJS.c.scala_xml_dtd_DEFAULT$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_dtd_DEFAULT()
});
ScalaJS.c.scala_xml_dtd_DEFAULT$.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__Z__T__Lscala_xml_dtd_DEFAULT(ScalaJS.uZ(v1), ScalaJS.as.java_lang_String(v2))
});
ScalaJS.c.scala_xml_dtd_DEFAULT$.prototype.unapply__Lscala_xml_dtd_DEFAULT__ = (function(x$0) {
  return this.unapply__Lscala_xml_dtd_DEFAULT__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_dtd_DEFAULT$.prototype.apply__Z__T__ = (function(fixed, attValue) {
  return this.apply__Z__T__Lscala_xml_dtd_DEFAULT(fixed, attValue)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_DEFAULT$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_DEFAULT$.prototype = ScalaJS.c.scala_xml_dtd_DEFAULT$.prototype;
ScalaJS.is.scala_xml_dtd_DEFAULT$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_DEFAULT$)))
});
ScalaJS.as.scala_xml_dtd_DEFAULT$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_DEFAULT$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.DEFAULT")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_DEFAULT$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_DEFAULT$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_DEFAULT$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_DEFAULT$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.DEFAULT;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_DEFAULT$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_DEFAULT$: 0
}, false, "scala.xml.dtd.DEFAULT$", ScalaJS.data.scala_runtime_AbstractFunction2, {
  scala_xml_dtd_DEFAULT$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_DEFAULT$.prototype.$classData = ScalaJS.data.scala_xml_dtd_DEFAULT$;
ScalaJS.moduleInstances.scala_xml_dtd_DEFAULT = undefined;
ScalaJS.modules.scala_xml_dtd_DEFAULT = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_DEFAULT)) {
    ScalaJS.moduleInstances.scala_xml_dtd_DEFAULT = new ScalaJS.c.scala_xml_dtd_DEFAULT$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_DEFAULT
});
//@ sourceMappingURL=DEFAULT$.js.map
