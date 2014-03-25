/** @constructor */
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction3.call(this)
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction3();
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl$.prototype.constructor = ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl$;
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl$.prototype.toString__T = (function() {
  return "UnparsedEntityDecl"
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl$.prototype.apply__T__Lscala_xml_dtd_ExternalID__T__Lscala_xml_dtd_UnparsedEntityDecl = (function(name, extID, notation) {
  return new ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl().init___T__Lscala_xml_dtd_ExternalID__T(name, extID, notation)
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl$.prototype.unapply__Lscala_xml_dtd_UnparsedEntityDecl__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple3().init___O__O__O(x$0.name__T(), x$0.extID__Lscala_xml_dtd_ExternalID(), x$0.notation__T()))
  }
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_dtd_UnparsedEntityDecl()
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl$.prototype.apply__O__O__O__O = (function(v1, v2, v3) {
  return this.apply__T__Lscala_xml_dtd_ExternalID__T__Lscala_xml_dtd_UnparsedEntityDecl(ScalaJS.as.java_lang_String(v1), ScalaJS.as.scala_xml_dtd_ExternalID(v2), ScalaJS.as.java_lang_String(v3))
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl$.prototype.unapply__Lscala_xml_dtd_UnparsedEntityDecl__ = (function(x$0) {
  return this.unapply__Lscala_xml_dtd_UnparsedEntityDecl__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl$.prototype.apply__T__Lscala_xml_dtd_ExternalID__T__ = (function(name, extID, notation) {
  return this.apply__T__Lscala_xml_dtd_ExternalID__T__Lscala_xml_dtd_UnparsedEntityDecl(name, extID, notation)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_UnparsedEntityDecl$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_UnparsedEntityDecl$.prototype = ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl$.prototype;
ScalaJS.is.scala_xml_dtd_UnparsedEntityDecl$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_UnparsedEntityDecl$)))
});
ScalaJS.as.scala_xml_dtd_UnparsedEntityDecl$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_UnparsedEntityDecl$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.UnparsedEntityDecl")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_UnparsedEntityDecl$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_UnparsedEntityDecl$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_UnparsedEntityDecl$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_UnparsedEntityDecl$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.UnparsedEntityDecl;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_UnparsedEntityDecl$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_UnparsedEntityDecl$: 0
}, false, "scala.xml.dtd.UnparsedEntityDecl$", ScalaJS.data.scala_runtime_AbstractFunction3, {
  scala_xml_dtd_UnparsedEntityDecl$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction3: 1,
  scala_Function3: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl$.prototype.$classData = ScalaJS.data.scala_xml_dtd_UnparsedEntityDecl$;
ScalaJS.moduleInstances.scala_xml_dtd_UnparsedEntityDecl = undefined;
ScalaJS.modules.scala_xml_dtd_UnparsedEntityDecl = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_UnparsedEntityDecl)) {
    ScalaJS.moduleInstances.scala_xml_dtd_UnparsedEntityDecl = new ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_UnparsedEntityDecl
});
//@ sourceMappingURL=UnparsedEntityDecl$.js.map
