/** @constructor */
ScalaJS.c.scala_xml_include_XIncludeException = (function() {
  ScalaJS.c.java_lang_Exception.call(this);
  this.rootCause$3 = null
});
ScalaJS.c.scala_xml_include_XIncludeException.prototype = new ScalaJS.inheritable.java_lang_Exception();
ScalaJS.c.scala_xml_include_XIncludeException.prototype.constructor = ScalaJS.c.scala_xml_include_XIncludeException;
ScalaJS.c.scala_xml_include_XIncludeException.prototype.rootCause__p3__Ljava_lang_Throwable = (function() {
  return this.rootCause$3
});
ScalaJS.c.scala_xml_include_XIncludeException.prototype.rootCause$und$eq__p3__Ljava_lang_Throwable__V = (function(x$1) {
  this.rootCause$3 = x$1
});
ScalaJS.c.scala_xml_include_XIncludeException.prototype.setRootCause__Ljava_lang_Throwable__V = (function(nestedException) {
  this.rootCause$und$eq__p3__Ljava_lang_Throwable__V(nestedException)
});
ScalaJS.c.scala_xml_include_XIncludeException.prototype.getRootCause__Ljava_lang_Throwable = (function() {
  return this.rootCause__p3__Ljava_lang_Throwable()
});
ScalaJS.c.scala_xml_include_XIncludeException.prototype.init___T = (function(message) {
  ScalaJS.c.java_lang_Exception.prototype.init___T.call(this, message);
  this.rootCause$3 = null;
  return this
});
ScalaJS.c.scala_xml_include_XIncludeException.prototype.init___ = (function() {
  ScalaJS.c.scala_xml_include_XIncludeException.prototype.init___T.call(this, null);
  return this
});
ScalaJS.c.scala_xml_include_XIncludeException.prototype.getRootCause__ = (function() {
  return this.getRootCause__Ljava_lang_Throwable()
});
ScalaJS.c.scala_xml_include_XIncludeException.prototype.setRootCause__Ljava_lang_Throwable__ = (function(nestedException) {
  return ScalaJS.bV(this.setRootCause__Ljava_lang_Throwable__V(nestedException))
});
/** @constructor */
ScalaJS.inheritable.scala_xml_include_XIncludeException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_include_XIncludeException.prototype = ScalaJS.c.scala_xml_include_XIncludeException.prototype;
ScalaJS.is.scala_xml_include_XIncludeException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_include_XIncludeException)))
});
ScalaJS.as.scala_xml_include_XIncludeException = (function(obj) {
  if ((ScalaJS.is.scala_xml_include_XIncludeException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.include.XIncludeException")
  }
});
ScalaJS.isArrayOf.scala_xml_include_XIncludeException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_include_XIncludeException)))
});
ScalaJS.asArrayOf.scala_xml_include_XIncludeException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_include_XIncludeException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.include.XIncludeException;", depth)
  }
});
ScalaJS.data.scala_xml_include_XIncludeException = new ScalaJS.ClassTypeData({
  scala_xml_include_XIncludeException: 0
}, false, "scala.xml.include.XIncludeException", ScalaJS.data.java_lang_Exception, {
  scala_xml_include_XIncludeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_include_XIncludeException.prototype.$classData = ScalaJS.data.scala_xml_include_XIncludeException;
//@ sourceMappingURL=XIncludeException.js.map
