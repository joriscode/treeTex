/** @constructor */
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName$.prototype.constructor = ScalaJS.c.scala_xml_dtd_ContentModel$ElemName$;
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName$.prototype.toString__T = (function() {
  return "ElemName"
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName$.prototype.apply__T__Lscala_xml_dtd_ContentModel$ElemName = (function(name) {
  return new ScalaJS.c.scala_xml_dtd_ContentModel$ElemName().init___T(name)
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName$.prototype.unapply__Lscala_xml_dtd_ContentModel$ElemName__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.name__T())
  }
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_dtd_ContentModel$ElemName()
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName$.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lscala_xml_dtd_ContentModel$ElemName(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName$.prototype.unapply__Lscala_xml_dtd_ContentModel$ElemName__ = (function(x$0) {
  return this.unapply__Lscala_xml_dtd_ContentModel$ElemName__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName$.prototype.apply__T__ = (function(name) {
  return this.apply__T__Lscala_xml_dtd_ContentModel$ElemName(name)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_ContentModel$ElemName$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_ContentModel$ElemName$.prototype = ScalaJS.c.scala_xml_dtd_ContentModel$ElemName$.prototype;
ScalaJS.is.scala_xml_dtd_ContentModel$ElemName$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_ContentModel$ElemName$)))
});
ScalaJS.as.scala_xml_dtd_ContentModel$ElemName$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_ContentModel$ElemName$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.ContentModel$ElemName")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_ContentModel$ElemName$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_ContentModel$ElemName$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_ContentModel$ElemName$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_ContentModel$ElemName$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.ContentModel$ElemName;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_ContentModel$ElemName$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_ContentModel$ElemName$: 0
}, false, "scala.xml.dtd.ContentModel$ElemName$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_xml_dtd_ContentModel$ElemName$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName$.prototype.$classData = ScalaJS.data.scala_xml_dtd_ContentModel$ElemName$;
ScalaJS.moduleInstances.scala_xml_dtd_ContentModel$ElemName = undefined;
ScalaJS.modules.scala_xml_dtd_ContentModel$ElemName = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_ContentModel$ElemName)) {
    ScalaJS.moduleInstances.scala_xml_dtd_ContentModel$ElemName = new ScalaJS.c.scala_xml_dtd_ContentModel$ElemName$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_ContentModel$ElemName
});
//@ sourceMappingURL=ContentModel$ElemName$.js.map
