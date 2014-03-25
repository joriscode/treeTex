/** @constructor */
ScalaJS.c.scala_xml_dtd_NotationDecl$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this)
});
ScalaJS.c.scala_xml_dtd_NotationDecl$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.scala_xml_dtd_NotationDecl$.prototype.constructor = ScalaJS.c.scala_xml_dtd_NotationDecl$;
ScalaJS.c.scala_xml_dtd_NotationDecl$.prototype.toString__T = (function() {
  return "NotationDecl"
});
ScalaJS.c.scala_xml_dtd_NotationDecl$.prototype.apply__T__Lscala_xml_dtd_ExternalID__Lscala_xml_dtd_NotationDecl = (function(name, extID) {
  return new ScalaJS.c.scala_xml_dtd_NotationDecl().init___T__Lscala_xml_dtd_ExternalID(name, extID)
});
ScalaJS.c.scala_xml_dtd_NotationDecl$.prototype.unapply__Lscala_xml_dtd_NotationDecl__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.name__T(), x$0.extID__Lscala_xml_dtd_ExternalID()))
  }
});
ScalaJS.c.scala_xml_dtd_NotationDecl$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_dtd_NotationDecl()
});
ScalaJS.c.scala_xml_dtd_NotationDecl$.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__T__Lscala_xml_dtd_ExternalID__Lscala_xml_dtd_NotationDecl(ScalaJS.as.java_lang_String(v1), ScalaJS.as.scala_xml_dtd_ExternalID(v2))
});
ScalaJS.c.scala_xml_dtd_NotationDecl$.prototype.unapply__Lscala_xml_dtd_NotationDecl__ = (function(x$0) {
  return this.unapply__Lscala_xml_dtd_NotationDecl__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_dtd_NotationDecl$.prototype.apply__T__Lscala_xml_dtd_ExternalID__ = (function(name, extID) {
  return this.apply__T__Lscala_xml_dtd_ExternalID__Lscala_xml_dtd_NotationDecl(name, extID)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_NotationDecl$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_NotationDecl$.prototype = ScalaJS.c.scala_xml_dtd_NotationDecl$.prototype;
ScalaJS.is.scala_xml_dtd_NotationDecl$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_NotationDecl$)))
});
ScalaJS.as.scala_xml_dtd_NotationDecl$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_NotationDecl$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.NotationDecl")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_NotationDecl$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_NotationDecl$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_NotationDecl$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_NotationDecl$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.NotationDecl;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_NotationDecl$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_NotationDecl$: 0
}, false, "scala.xml.dtd.NotationDecl$", ScalaJS.data.scala_runtime_AbstractFunction2, {
  scala_xml_dtd_NotationDecl$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_NotationDecl$.prototype.$classData = ScalaJS.data.scala_xml_dtd_NotationDecl$;
ScalaJS.moduleInstances.scala_xml_dtd_NotationDecl = undefined;
ScalaJS.modules.scala_xml_dtd_NotationDecl = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_NotationDecl)) {
    ScalaJS.moduleInstances.scala_xml_dtd_NotationDecl = new ScalaJS.c.scala_xml_dtd_NotationDecl$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_NotationDecl
});
//@ sourceMappingURL=NotationDecl$.js.map
