/** @constructor */
ScalaJS.c.scala_xml_MalformedAttributeException$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.scala_xml_MalformedAttributeException$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_xml_MalformedAttributeException$.prototype.constructor = ScalaJS.c.scala_xml_MalformedAttributeException$;
ScalaJS.c.scala_xml_MalformedAttributeException$.prototype.toString__T = (function() {
  return "MalformedAttributeException"
});
ScalaJS.c.scala_xml_MalformedAttributeException$.prototype.apply__T__Lscala_xml_MalformedAttributeException = (function(msg) {
  return new ScalaJS.c.scala_xml_MalformedAttributeException().init___T(msg)
});
ScalaJS.c.scala_xml_MalformedAttributeException$.prototype.unapply__Lscala_xml_MalformedAttributeException__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.msg__T())
  }
});
ScalaJS.c.scala_xml_MalformedAttributeException$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_MalformedAttributeException()
});
ScalaJS.c.scala_xml_MalformedAttributeException$.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lscala_xml_MalformedAttributeException(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.scala_xml_MalformedAttributeException$.prototype.unapply__Lscala_xml_MalformedAttributeException__ = (function(x$0) {
  return this.unapply__Lscala_xml_MalformedAttributeException__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_MalformedAttributeException$.prototype.apply__T__ = (function(msg) {
  return this.apply__T__Lscala_xml_MalformedAttributeException(msg)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_MalformedAttributeException$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_MalformedAttributeException$.prototype = ScalaJS.c.scala_xml_MalformedAttributeException$.prototype;
ScalaJS.is.scala_xml_MalformedAttributeException$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_MalformedAttributeException$)))
});
ScalaJS.as.scala_xml_MalformedAttributeException$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_MalformedAttributeException$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.MalformedAttributeException")
  }
});
ScalaJS.isArrayOf.scala_xml_MalformedAttributeException$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_MalformedAttributeException$)))
});
ScalaJS.asArrayOf.scala_xml_MalformedAttributeException$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_MalformedAttributeException$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.MalformedAttributeException;", depth)
  }
});
ScalaJS.data.scala_xml_MalformedAttributeException$ = new ScalaJS.ClassTypeData({
  scala_xml_MalformedAttributeException$: 0
}, false, "scala.xml.MalformedAttributeException$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_xml_MalformedAttributeException$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_MalformedAttributeException$.prototype.$classData = ScalaJS.data.scala_xml_MalformedAttributeException$;
ScalaJS.moduleInstances.scala_xml_MalformedAttributeException = undefined;
ScalaJS.modules.scala_xml_MalformedAttributeException = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_MalformedAttributeException)) {
    ScalaJS.moduleInstances.scala_xml_MalformedAttributeException = new ScalaJS.c.scala_xml_MalformedAttributeException$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_MalformedAttributeException
});
//@ sourceMappingURL=MalformedAttributeException$.js.map
