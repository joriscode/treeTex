/** @constructor */
ScalaJS.c.scala_xml_TextBuffer$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_xml_TextBuffer$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_TextBuffer$.prototype.constructor = ScalaJS.c.scala_xml_TextBuffer$;
ScalaJS.c.scala_xml_TextBuffer$.prototype.fromString__T__Lscala_xml_TextBuffer = (function(str) {
  return new ScalaJS.c.scala_xml_TextBuffer().init___().append__Lscala_collection_Seq__Lscala_xml_TextBuffer(ScalaJS.modules.scala_Predef().wrapString__T__Lscala_collection_immutable_WrappedString(str))
});
ScalaJS.c.scala_xml_TextBuffer$.prototype.fromString__T__ = (function(str) {
  return this.fromString__T__Lscala_xml_TextBuffer(str)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_TextBuffer$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_TextBuffer$.prototype = ScalaJS.c.scala_xml_TextBuffer$.prototype;
ScalaJS.is.scala_xml_TextBuffer$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_TextBuffer$)))
});
ScalaJS.as.scala_xml_TextBuffer$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_TextBuffer$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.TextBuffer")
  }
});
ScalaJS.isArrayOf.scala_xml_TextBuffer$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_TextBuffer$)))
});
ScalaJS.asArrayOf.scala_xml_TextBuffer$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_TextBuffer$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.TextBuffer;", depth)
  }
});
ScalaJS.data.scala_xml_TextBuffer$ = new ScalaJS.ClassTypeData({
  scala_xml_TextBuffer$: 0
}, false, "scala.xml.TextBuffer$", ScalaJS.data.java_lang_Object, {
  scala_xml_TextBuffer$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_TextBuffer$.prototype.$classData = ScalaJS.data.scala_xml_TextBuffer$;
ScalaJS.moduleInstances.scala_xml_TextBuffer = undefined;
ScalaJS.modules.scala_xml_TextBuffer = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_TextBuffer)) {
    ScalaJS.moduleInstances.scala_xml_TextBuffer = new ScalaJS.c.scala_xml_TextBuffer$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_TextBuffer
});
//@ sourceMappingURL=TextBuffer$.js.map
