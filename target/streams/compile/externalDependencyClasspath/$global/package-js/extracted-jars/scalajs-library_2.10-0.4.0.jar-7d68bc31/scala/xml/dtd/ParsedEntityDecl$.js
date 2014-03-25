/** @constructor */
ScalaJS.c.scala_xml_dtd_ParsedEntityDecl$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this)
});
ScalaJS.c.scala_xml_dtd_ParsedEntityDecl$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.scala_xml_dtd_ParsedEntityDecl$.prototype.constructor = ScalaJS.c.scala_xml_dtd_ParsedEntityDecl$;
ScalaJS.c.scala_xml_dtd_ParsedEntityDecl$.prototype.toString__T = (function() {
  return "ParsedEntityDecl"
});
ScalaJS.c.scala_xml_dtd_ParsedEntityDecl$.prototype.apply__T__Lscala_xml_dtd_EntityDef__Lscala_xml_dtd_ParsedEntityDecl = (function(name, entdef) {
  return new ScalaJS.c.scala_xml_dtd_ParsedEntityDecl().init___T__Lscala_xml_dtd_EntityDef(name, entdef)
});
ScalaJS.c.scala_xml_dtd_ParsedEntityDecl$.prototype.unapply__Lscala_xml_dtd_ParsedEntityDecl__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.name__T(), x$0.entdef__Lscala_xml_dtd_EntityDef()))
  }
});
ScalaJS.c.scala_xml_dtd_ParsedEntityDecl$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_dtd_ParsedEntityDecl()
});
ScalaJS.c.scala_xml_dtd_ParsedEntityDecl$.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__T__Lscala_xml_dtd_EntityDef__Lscala_xml_dtd_ParsedEntityDecl(ScalaJS.as.java_lang_String(v1), ScalaJS.as.scala_xml_dtd_EntityDef(v2))
});
ScalaJS.c.scala_xml_dtd_ParsedEntityDecl$.prototype.unapply__Lscala_xml_dtd_ParsedEntityDecl__ = (function(x$0) {
  return this.unapply__Lscala_xml_dtd_ParsedEntityDecl__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_dtd_ParsedEntityDecl$.prototype.apply__T__Lscala_xml_dtd_EntityDef__ = (function(name, entdef) {
  return this.apply__T__Lscala_xml_dtd_EntityDef__Lscala_xml_dtd_ParsedEntityDecl(name, entdef)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_ParsedEntityDecl$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_ParsedEntityDecl$.prototype = ScalaJS.c.scala_xml_dtd_ParsedEntityDecl$.prototype;
ScalaJS.is.scala_xml_dtd_ParsedEntityDecl$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_ParsedEntityDecl$)))
});
ScalaJS.as.scala_xml_dtd_ParsedEntityDecl$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_ParsedEntityDecl$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.ParsedEntityDecl")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_ParsedEntityDecl$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_ParsedEntityDecl$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_ParsedEntityDecl$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_ParsedEntityDecl$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.ParsedEntityDecl;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_ParsedEntityDecl$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_ParsedEntityDecl$: 0
}, false, "scala.xml.dtd.ParsedEntityDecl$", ScalaJS.data.scala_runtime_AbstractFunction2, {
  scala_xml_dtd_ParsedEntityDecl$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_ParsedEntityDecl$.prototype.$classData = ScalaJS.data.scala_xml_dtd_ParsedEntityDecl$;
ScalaJS.moduleInstances.scala_xml_dtd_ParsedEntityDecl = undefined;
ScalaJS.modules.scala_xml_dtd_ParsedEntityDecl = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_ParsedEntityDecl)) {
    ScalaJS.moduleInstances.scala_xml_dtd_ParsedEntityDecl = new ScalaJS.c.scala_xml_dtd_ParsedEntityDecl$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_ParsedEntityDecl
});
//@ sourceMappingURL=ParsedEntityDecl$.js.map
