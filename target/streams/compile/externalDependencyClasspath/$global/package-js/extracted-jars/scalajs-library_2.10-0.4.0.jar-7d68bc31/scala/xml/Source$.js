/** @constructor */
ScalaJS.c.scala_xml_Source$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_xml_Source$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_Source$.prototype.constructor = ScalaJS.c.scala_xml_Source$;
ScalaJS.c.scala_xml_Source$.prototype.fromFile__Ljava_io_File__Lorg_xml_sax_InputSource = (function(file) {
  return new ScalaJS.c.org_xml_sax_InputSource().init___Ljava_io_InputStream(new ScalaJS.c.java_io_FileInputStream().init___Ljava_io_File(file))
});
ScalaJS.c.scala_xml_Source$.prototype.fromFile__Ljava_io_FileDescriptor__Lorg_xml_sax_InputSource = (function(fd) {
  return new ScalaJS.c.org_xml_sax_InputSource().init___Ljava_io_InputStream(new ScalaJS.c.java_io_FileInputStream().init___Ljava_io_FileDescriptor(fd))
});
ScalaJS.c.scala_xml_Source$.prototype.fromFile__T__Lorg_xml_sax_InputSource = (function(name) {
  return new ScalaJS.c.org_xml_sax_InputSource().init___Ljava_io_InputStream(new ScalaJS.c.java_io_FileInputStream().init___T(name))
});
ScalaJS.c.scala_xml_Source$.prototype.fromInputStream__Ljava_io_InputStream__Lorg_xml_sax_InputSource = (function(is) {
  return new ScalaJS.c.org_xml_sax_InputSource().init___Ljava_io_InputStream(is)
});
ScalaJS.c.scala_xml_Source$.prototype.fromReader__Ljava_io_Reader__Lorg_xml_sax_InputSource = (function(reader) {
  return new ScalaJS.c.org_xml_sax_InputSource().init___Ljava_io_Reader(reader)
});
ScalaJS.c.scala_xml_Source$.prototype.fromSysId__T__Lorg_xml_sax_InputSource = (function(sysID) {
  return new ScalaJS.c.org_xml_sax_InputSource().init___T(sysID)
});
ScalaJS.c.scala_xml_Source$.prototype.fromString__T__Lorg_xml_sax_InputSource = (function(string) {
  return this.fromReader__Ljava_io_Reader__Lorg_xml_sax_InputSource(new ScalaJS.c.java_io_StringReader().init___T(string))
});
ScalaJS.c.scala_xml_Source$.prototype.fromString__T__ = (function(string) {
  return this.fromString__T__Lorg_xml_sax_InputSource(string)
});
ScalaJS.c.scala_xml_Source$.prototype.fromSysId__T__ = (function(sysID) {
  return this.fromSysId__T__Lorg_xml_sax_InputSource(sysID)
});
ScalaJS.c.scala_xml_Source$.prototype.fromReader__Ljava_io_Reader__ = (function(reader) {
  return this.fromReader__Ljava_io_Reader__Lorg_xml_sax_InputSource(reader)
});
ScalaJS.c.scala_xml_Source$.prototype.fromInputStream__Ljava_io_InputStream__ = (function(is) {
  return this.fromInputStream__Ljava_io_InputStream__Lorg_xml_sax_InputSource(is)
});
ScalaJS.c.scala_xml_Source$.prototype.fromFile__T__ = (function(name) {
  return this.fromFile__T__Lorg_xml_sax_InputSource(name)
});
ScalaJS.c.scala_xml_Source$.prototype.fromFile__Ljava_io_FileDescriptor__ = (function(fd) {
  return this.fromFile__Ljava_io_FileDescriptor__Lorg_xml_sax_InputSource(fd)
});
ScalaJS.c.scala_xml_Source$.prototype.fromFile__Ljava_io_File__ = (function(file) {
  return this.fromFile__Ljava_io_File__Lorg_xml_sax_InputSource(file)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_Source$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_Source$.prototype = ScalaJS.c.scala_xml_Source$.prototype;
ScalaJS.is.scala_xml_Source$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_Source$)))
});
ScalaJS.as.scala_xml_Source$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_Source$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.Source")
  }
});
ScalaJS.isArrayOf.scala_xml_Source$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_Source$)))
});
ScalaJS.asArrayOf.scala_xml_Source$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_Source$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.Source;", depth)
  }
});
ScalaJS.data.scala_xml_Source$ = new ScalaJS.ClassTypeData({
  scala_xml_Source$: 0
}, false, "scala.xml.Source$", ScalaJS.data.java_lang_Object, {
  scala_xml_Source$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_Source$.prototype.$classData = ScalaJS.data.scala_xml_Source$;
ScalaJS.moduleInstances.scala_xml_Source = undefined;
ScalaJS.modules.scala_xml_Source = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_Source)) {
    ScalaJS.moduleInstances.scala_xml_Source = new ScalaJS.c.scala_xml_Source$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_Source
});
//@ sourceMappingURL=Source$.js.map
