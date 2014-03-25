/** @constructor */
ScalaJS.c.scala_xml_package$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.XercesClassName$1 = null
});
ScalaJS.c.scala_xml_package$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_package$.prototype.constructor = ScalaJS.c.scala_xml_package$;
ScalaJS.c.scala_xml_package$.prototype.XercesClassName__T = (function() {
  return this.XercesClassName$1
});
ScalaJS.c.scala_xml_package$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_xml_package = this;
  this.XercesClassName$1 = "org.apache.xerces.parsers.SAXParser";
  return this
});
ScalaJS.c.scala_xml_package$.prototype.XercesClassName__ = (function() {
  return this.XercesClassName__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_package$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_package$.prototype = ScalaJS.c.scala_xml_package$.prototype;
ScalaJS.is.scala_xml_package$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_package$)))
});
ScalaJS.as.scala_xml_package$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_package$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.package")
  }
});
ScalaJS.isArrayOf.scala_xml_package$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_package$)))
});
ScalaJS.asArrayOf.scala_xml_package$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_package$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.package;", depth)
  }
});
ScalaJS.data.scala_xml_package$ = new ScalaJS.ClassTypeData({
  scala_xml_package$: 0
}, false, "scala.xml.package$", ScalaJS.data.java_lang_Object, {
  scala_xml_package$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_package$.prototype.$classData = ScalaJS.data.scala_xml_package$;
ScalaJS.moduleInstances.scala_xml_package = undefined;
ScalaJS.modules.scala_xml_package = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_package)) {
    ScalaJS.moduleInstances.scala_xml_package = new ScalaJS.c.scala_xml_package$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_package
});
//@ sourceMappingURL=package$.js.map
