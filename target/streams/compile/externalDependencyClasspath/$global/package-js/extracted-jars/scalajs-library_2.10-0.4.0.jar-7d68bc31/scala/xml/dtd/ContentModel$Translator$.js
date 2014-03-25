/** @constructor */
ScalaJS.c.scala_xml_dtd_ContentModel$Translator$ = (function() {
  ScalaJS.c.scala_util_automata_WordBerrySethi.call(this);
  this.lang$3 = null
});
ScalaJS.c.scala_xml_dtd_ContentModel$Translator$.prototype = new ScalaJS.inheritable.scala_util_automata_WordBerrySethi();
ScalaJS.c.scala_xml_dtd_ContentModel$Translator$.prototype.constructor = ScalaJS.c.scala_xml_dtd_ContentModel$Translator$;
ScalaJS.c.scala_xml_dtd_ContentModel$Translator$.prototype.lang__Lscala_xml_dtd_ContentModel$ = (function() {
  return this.lang$3
});
ScalaJS.c.scala_xml_dtd_ContentModel$Translator$.prototype.lang__Lscala_util_regexp_Base = (function() {
  return this.lang__Lscala_xml_dtd_ContentModel$()
});
ScalaJS.c.scala_xml_dtd_ContentModel$Translator$.prototype.lang__Lscala_util_regexp_WordExp = (function() {
  return this.lang__Lscala_xml_dtd_ContentModel$()
});
ScalaJS.c.scala_xml_dtd_ContentModel$Translator$.prototype.init___ = (function() {
  ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_xml_dtd_ContentModel$Translator = this;
  this.lang$3 = ScalaJS.modules.scala_xml_dtd_ContentModel();
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_ContentModel$Translator$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_ContentModel$Translator$.prototype = ScalaJS.c.scala_xml_dtd_ContentModel$Translator$.prototype;
ScalaJS.is.scala_xml_dtd_ContentModel$Translator$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_ContentModel$Translator$)))
});
ScalaJS.as.scala_xml_dtd_ContentModel$Translator$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_ContentModel$Translator$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.ContentModel$Translator")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_ContentModel$Translator$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_ContentModel$Translator$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_ContentModel$Translator$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_ContentModel$Translator$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.ContentModel$Translator;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_ContentModel$Translator$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_ContentModel$Translator$: 0
}, false, "scala.xml.dtd.ContentModel$Translator$", ScalaJS.data.scala_util_automata_WordBerrySethi, {
  scala_xml_dtd_ContentModel$Translator$: 1,
  scala_util_automata_WordBerrySethi: 1,
  scala_util_automata_BaseBerrySethi: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_ContentModel$Translator$.prototype.$classData = ScalaJS.data.scala_xml_dtd_ContentModel$Translator$;
ScalaJS.moduleInstances.scala_xml_dtd_ContentModel$Translator = undefined;
ScalaJS.modules.scala_xml_dtd_ContentModel$Translator = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_ContentModel$Translator)) {
    ScalaJS.moduleInstances.scala_xml_dtd_ContentModel$Translator = new ScalaJS.c.scala_xml_dtd_ContentModel$Translator$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_ContentModel$Translator
});
//@ sourceMappingURL=ContentModel$Translator$.js.map
