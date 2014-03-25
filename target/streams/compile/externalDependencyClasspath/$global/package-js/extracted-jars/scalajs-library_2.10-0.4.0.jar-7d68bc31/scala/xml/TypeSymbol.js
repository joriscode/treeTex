/** @constructor */
ScalaJS.c.scala_xml_TypeSymbol = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_xml_TypeSymbol.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_TypeSymbol.prototype.constructor = ScalaJS.c.scala_xml_TypeSymbol;
/** @constructor */
ScalaJS.inheritable.scala_xml_TypeSymbol = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_TypeSymbol.prototype = ScalaJS.c.scala_xml_TypeSymbol.prototype;
ScalaJS.is.scala_xml_TypeSymbol = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_TypeSymbol)))
});
ScalaJS.as.scala_xml_TypeSymbol = (function(obj) {
  if ((ScalaJS.is.scala_xml_TypeSymbol(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.TypeSymbol")
  }
});
ScalaJS.isArrayOf.scala_xml_TypeSymbol = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_TypeSymbol)))
});
ScalaJS.asArrayOf.scala_xml_TypeSymbol = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_TypeSymbol(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.TypeSymbol;", depth)
  }
});
ScalaJS.data.scala_xml_TypeSymbol = new ScalaJS.ClassTypeData({
  scala_xml_TypeSymbol: 0
}, false, "scala.xml.TypeSymbol", ScalaJS.data.java_lang_Object, {
  scala_xml_TypeSymbol: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_TypeSymbol.prototype.$classData = ScalaJS.data.scala_xml_TypeSymbol;
//@ sourceMappingURL=TypeSymbol.js.map
