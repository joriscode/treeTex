/** @constructor */
ScalaJS.c.scala_xml_dtd_AttrDecl$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction3.call(this)
});
ScalaJS.c.scala_xml_dtd_AttrDecl$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction3();
ScalaJS.c.scala_xml_dtd_AttrDecl$.prototype.constructor = ScalaJS.c.scala_xml_dtd_AttrDecl$;
ScalaJS.c.scala_xml_dtd_AttrDecl$.prototype.toString__T = (function() {
  return "AttrDecl"
});
ScalaJS.c.scala_xml_dtd_AttrDecl$.prototype.apply__T__T__Lscala_xml_dtd_DefaultDecl__Lscala_xml_dtd_AttrDecl = (function(name, tpe, default$2) {
  return new ScalaJS.c.scala_xml_dtd_AttrDecl().init___T__T__Lscala_xml_dtd_DefaultDecl(name, tpe, default$2)
});
ScalaJS.c.scala_xml_dtd_AttrDecl$.prototype.unapply__Lscala_xml_dtd_AttrDecl__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple3().init___O__O__O(x$0.name__T(), x$0.tpe__T(), x$0.$default__Lscala_xml_dtd_DefaultDecl()))
  }
});
ScalaJS.c.scala_xml_dtd_AttrDecl$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_dtd_AttrDecl()
});
ScalaJS.c.scala_xml_dtd_AttrDecl$.prototype.apply__O__O__O__O = (function(v1, v2, v3) {
  return this.apply__T__T__Lscala_xml_dtd_DefaultDecl__Lscala_xml_dtd_AttrDecl(ScalaJS.as.java_lang_String(v1), ScalaJS.as.java_lang_String(v2), ScalaJS.as.scala_xml_dtd_DefaultDecl(v3))
});
ScalaJS.c.scala_xml_dtd_AttrDecl$.prototype.unapply__Lscala_xml_dtd_AttrDecl__ = (function(x$0) {
  return this.unapply__Lscala_xml_dtd_AttrDecl__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_dtd_AttrDecl$.prototype.apply__T__T__Lscala_xml_dtd_DefaultDecl__ = (function(name, tpe, default$2) {
  return this.apply__T__T__Lscala_xml_dtd_DefaultDecl__Lscala_xml_dtd_AttrDecl(name, tpe, default$2)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_AttrDecl$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_AttrDecl$.prototype = ScalaJS.c.scala_xml_dtd_AttrDecl$.prototype;
ScalaJS.is.scala_xml_dtd_AttrDecl$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_AttrDecl$)))
});
ScalaJS.as.scala_xml_dtd_AttrDecl$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_AttrDecl$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.AttrDecl")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_AttrDecl$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_AttrDecl$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_AttrDecl$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_AttrDecl$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.AttrDecl;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_AttrDecl$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_AttrDecl$: 0
}, false, "scala.xml.dtd.AttrDecl$", ScalaJS.data.scala_runtime_AbstractFunction3, {
  scala_xml_dtd_AttrDecl$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction3: 1,
  scala_Function3: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_AttrDecl$.prototype.$classData = ScalaJS.data.scala_xml_dtd_AttrDecl$;
ScalaJS.moduleInstances.scala_xml_dtd_AttrDecl = undefined;
ScalaJS.modules.scala_xml_dtd_AttrDecl = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_AttrDecl)) {
    ScalaJS.moduleInstances.scala_xml_dtd_AttrDecl = new ScalaJS.c.scala_xml_dtd_AttrDecl$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_AttrDecl
});
//@ sourceMappingURL=AttrDecl$.js.map
