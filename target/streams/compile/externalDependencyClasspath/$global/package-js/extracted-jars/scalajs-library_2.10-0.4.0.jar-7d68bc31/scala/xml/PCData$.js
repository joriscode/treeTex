/** @constructor */
ScalaJS.c.scala_xml_PCData$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_xml_PCData$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_PCData$.prototype.constructor = ScalaJS.c.scala_xml_PCData$;
ScalaJS.c.scala_xml_PCData$.prototype.apply__T__Lscala_xml_PCData = (function(data) {
  return new ScalaJS.c.scala_xml_PCData().init___T(data)
});
ScalaJS.c.scala_xml_PCData$.prototype.unapply__O__Lscala_Option = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_xml_PCData(x1)) {
    var x2 = ScalaJS.as.scala_xml_PCData(x1);
    return new ScalaJS.c.scala_Some().init___O(x2.data__O())
  };
  return ScalaJS.modules.scala_None()
});
ScalaJS.c.scala_xml_PCData$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_xml_PCData()
});
ScalaJS.c.scala_xml_PCData$.prototype.unapply__O__ = (function(other) {
  return this.unapply__O__Lscala_Option(other)
});
ScalaJS.c.scala_xml_PCData$.prototype.apply__T__ = (function(data) {
  return this.apply__T__Lscala_xml_PCData(data)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_PCData$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_PCData$.prototype = ScalaJS.c.scala_xml_PCData$.prototype;
ScalaJS.is.scala_xml_PCData$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_PCData$)))
});
ScalaJS.as.scala_xml_PCData$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_PCData$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.PCData")
  }
});
ScalaJS.isArrayOf.scala_xml_PCData$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_PCData$)))
});
ScalaJS.asArrayOf.scala_xml_PCData$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_PCData$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.PCData;", depth)
  }
});
ScalaJS.data.scala_xml_PCData$ = new ScalaJS.ClassTypeData({
  scala_xml_PCData$: 0
}, false, "scala.xml.PCData$", ScalaJS.data.java_lang_Object, {
  scala_xml_PCData$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_PCData$.prototype.$classData = ScalaJS.data.scala_xml_PCData$;
ScalaJS.moduleInstances.scala_xml_PCData = undefined;
ScalaJS.modules.scala_xml_PCData = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_PCData)) {
    ScalaJS.moduleInstances.scala_xml_PCData = new ScalaJS.c.scala_xml_PCData$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_PCData
});
//@ sourceMappingURL=PCData$.js.map
