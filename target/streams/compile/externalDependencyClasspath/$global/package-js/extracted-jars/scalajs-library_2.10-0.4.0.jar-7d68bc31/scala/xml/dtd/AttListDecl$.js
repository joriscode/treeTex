/** @constructor */
ScalaJS.c.scala_xml_dtd_AttListDecl$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this)
});
ScalaJS.c.scala_xml_dtd_AttListDecl$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.scala_xml_dtd_AttListDecl$.prototype.constructor = ScalaJS.c.scala_xml_dtd_AttListDecl$;
ScalaJS.c.scala_xml_dtd_AttListDecl$.prototype.toString__T = (function() {
  return "AttListDecl"
});
ScalaJS.c.scala_xml_dtd_AttListDecl$.prototype.apply__T__Lscala_collection_immutable_List__Lscala_xml_dtd_AttListDecl = (function(name, attrs) {
  return new ScalaJS.c.scala_xml_dtd_AttListDecl().init___T__Lscala_collection_immutable_List(name, attrs)
});
ScalaJS.c.scala_xml_dtd_AttListDecl$.prototype.unapply__Lscala_xml_dtd_AttListDecl__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.name__T(), x$0.attrs__Lscala_collection_immutable_List()))
  }
});
ScalaJS.c.scala_xml_dtd_AttListDecl$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_dtd_AttListDecl()
});
ScalaJS.c.scala_xml_dtd_AttListDecl$.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__T__Lscala_collection_immutable_List__Lscala_xml_dtd_AttListDecl(ScalaJS.as.java_lang_String(v1), ScalaJS.as.scala_collection_immutable_List(v2))
});
ScalaJS.c.scala_xml_dtd_AttListDecl$.prototype.unapply__Lscala_xml_dtd_AttListDecl__ = (function(x$0) {
  return this.unapply__Lscala_xml_dtd_AttListDecl__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_dtd_AttListDecl$.prototype.apply__T__Lscala_collection_immutable_List__ = (function(name, attrs) {
  return this.apply__T__Lscala_collection_immutable_List__Lscala_xml_dtd_AttListDecl(name, attrs)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_AttListDecl$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_AttListDecl$.prototype = ScalaJS.c.scala_xml_dtd_AttListDecl$.prototype;
ScalaJS.is.scala_xml_dtd_AttListDecl$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_AttListDecl$)))
});
ScalaJS.as.scala_xml_dtd_AttListDecl$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_AttListDecl$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.AttListDecl")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_AttListDecl$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_AttListDecl$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_AttListDecl$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_AttListDecl$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.AttListDecl;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_AttListDecl$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_AttListDecl$: 0
}, false, "scala.xml.dtd.AttListDecl$", ScalaJS.data.scala_runtime_AbstractFunction2, {
  scala_xml_dtd_AttListDecl$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_AttListDecl$.prototype.$classData = ScalaJS.data.scala_xml_dtd_AttListDecl$;
ScalaJS.moduleInstances.scala_xml_dtd_AttListDecl = undefined;
ScalaJS.modules.scala_xml_dtd_AttListDecl = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_AttListDecl)) {
    ScalaJS.moduleInstances.scala_xml_dtd_AttListDecl = new ScalaJS.c.scala_xml_dtd_AttListDecl$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_AttListDecl
});
//@ sourceMappingURL=AttListDecl$.js.map
