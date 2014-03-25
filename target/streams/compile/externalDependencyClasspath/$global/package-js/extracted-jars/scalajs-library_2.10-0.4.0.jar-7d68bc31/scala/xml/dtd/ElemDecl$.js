/** @constructor */
ScalaJS.c.scala_xml_dtd_ElemDecl$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this)
});
ScalaJS.c.scala_xml_dtd_ElemDecl$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.scala_xml_dtd_ElemDecl$.prototype.constructor = ScalaJS.c.scala_xml_dtd_ElemDecl$;
ScalaJS.c.scala_xml_dtd_ElemDecl$.prototype.toString__T = (function() {
  return "ElemDecl"
});
ScalaJS.c.scala_xml_dtd_ElemDecl$.prototype.apply__T__Lscala_xml_dtd_ContentModel__Lscala_xml_dtd_ElemDecl = (function(name, contentModel) {
  return new ScalaJS.c.scala_xml_dtd_ElemDecl().init___T__Lscala_xml_dtd_ContentModel(name, contentModel)
});
ScalaJS.c.scala_xml_dtd_ElemDecl$.prototype.unapply__Lscala_xml_dtd_ElemDecl__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.name__T(), x$0.contentModel__Lscala_xml_dtd_ContentModel()))
  }
});
ScalaJS.c.scala_xml_dtd_ElemDecl$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_dtd_ElemDecl()
});
ScalaJS.c.scala_xml_dtd_ElemDecl$.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__T__Lscala_xml_dtd_ContentModel__Lscala_xml_dtd_ElemDecl(ScalaJS.as.java_lang_String(v1), ScalaJS.as.scala_xml_dtd_ContentModel(v2))
});
ScalaJS.c.scala_xml_dtd_ElemDecl$.prototype.unapply__Lscala_xml_dtd_ElemDecl__ = (function(x$0) {
  return this.unapply__Lscala_xml_dtd_ElemDecl__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_dtd_ElemDecl$.prototype.apply__T__Lscala_xml_dtd_ContentModel__ = (function(name, contentModel) {
  return this.apply__T__Lscala_xml_dtd_ContentModel__Lscala_xml_dtd_ElemDecl(name, contentModel)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_ElemDecl$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_ElemDecl$.prototype = ScalaJS.c.scala_xml_dtd_ElemDecl$.prototype;
ScalaJS.is.scala_xml_dtd_ElemDecl$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_ElemDecl$)))
});
ScalaJS.as.scala_xml_dtd_ElemDecl$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_ElemDecl$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.ElemDecl")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_ElemDecl$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_ElemDecl$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_ElemDecl$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_ElemDecl$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.ElemDecl;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_ElemDecl$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_ElemDecl$: 0
}, false, "scala.xml.dtd.ElemDecl$", ScalaJS.data.scala_runtime_AbstractFunction2, {
  scala_xml_dtd_ElemDecl$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_ElemDecl$.prototype.$classData = ScalaJS.data.scala_xml_dtd_ElemDecl$;
ScalaJS.moduleInstances.scala_xml_dtd_ElemDecl = undefined;
ScalaJS.modules.scala_xml_dtd_ElemDecl = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_ElemDecl)) {
    ScalaJS.moduleInstances.scala_xml_dtd_ElemDecl = new ScalaJS.c.scala_xml_dtd_ElemDecl$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_ElemDecl
});
//@ sourceMappingURL=ElemDecl$.js.map
