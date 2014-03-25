/** @constructor */
ScalaJS.c.scala_xml_include_CircularIncludeException = (function() {
  ScalaJS.c.scala_xml_include_XIncludeException.call(this)
});
ScalaJS.c.scala_xml_include_CircularIncludeException.prototype = new ScalaJS.inheritable.scala_xml_include_XIncludeException();
ScalaJS.c.scala_xml_include_CircularIncludeException.prototype.constructor = ScalaJS.c.scala_xml_include_CircularIncludeException;
ScalaJS.c.scala_xml_include_CircularIncludeException.prototype.init___T = (function(message) {
  ScalaJS.c.scala_xml_include_XIncludeException.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_xml_include_CircularIncludeException.prototype.init___ = (function() {
  ScalaJS.c.scala_xml_include_CircularIncludeException.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_xml_include_CircularIncludeException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_include_CircularIncludeException.prototype = ScalaJS.c.scala_xml_include_CircularIncludeException.prototype;
ScalaJS.is.scala_xml_include_CircularIncludeException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_include_CircularIncludeException)))
});
ScalaJS.as.scala_xml_include_CircularIncludeException = (function(obj) {
  if ((ScalaJS.is.scala_xml_include_CircularIncludeException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.include.CircularIncludeException")
  }
});
ScalaJS.isArrayOf.scala_xml_include_CircularIncludeException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_include_CircularIncludeException)))
});
ScalaJS.asArrayOf.scala_xml_include_CircularIncludeException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_include_CircularIncludeException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.include.CircularIncludeException;", depth)
  }
});
ScalaJS.data.scala_xml_include_CircularIncludeException = new ScalaJS.ClassTypeData({
  scala_xml_include_CircularIncludeException: 0
}, false, "scala.xml.include.CircularIncludeException", ScalaJS.data.scala_xml_include_XIncludeException, {
  scala_xml_include_CircularIncludeException: 1,
  scala_xml_include_XIncludeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_include_CircularIncludeException.prototype.$classData = ScalaJS.data.scala_xml_include_CircularIncludeException;
//@ sourceMappingURL=CircularIncludeException.js.map
