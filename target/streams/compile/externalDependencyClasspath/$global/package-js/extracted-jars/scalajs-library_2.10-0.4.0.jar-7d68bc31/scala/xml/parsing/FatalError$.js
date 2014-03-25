/** @constructor */
ScalaJS.c.scala_xml_parsing_FatalError$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.scala_xml_parsing_FatalError$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_xml_parsing_FatalError$.prototype.constructor = ScalaJS.c.scala_xml_parsing_FatalError$;
ScalaJS.c.scala_xml_parsing_FatalError$.prototype.toString__T = (function() {
  return "FatalError"
});
ScalaJS.c.scala_xml_parsing_FatalError$.prototype.apply__T__Lscala_xml_parsing_FatalError = (function(msg) {
  return new ScalaJS.c.scala_xml_parsing_FatalError().init___T(msg)
});
ScalaJS.c.scala_xml_parsing_FatalError$.prototype.unapply__Lscala_xml_parsing_FatalError__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.msg__T())
  }
});
ScalaJS.c.scala_xml_parsing_FatalError$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_parsing_FatalError()
});
ScalaJS.c.scala_xml_parsing_FatalError$.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lscala_xml_parsing_FatalError(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.scala_xml_parsing_FatalError$.prototype.unapply__Lscala_xml_parsing_FatalError__ = (function(x$0) {
  return this.unapply__Lscala_xml_parsing_FatalError__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_parsing_FatalError$.prototype.apply__T__ = (function(msg) {
  return this.apply__T__Lscala_xml_parsing_FatalError(msg)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_parsing_FatalError$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_parsing_FatalError$.prototype = ScalaJS.c.scala_xml_parsing_FatalError$.prototype;
ScalaJS.is.scala_xml_parsing_FatalError$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_parsing_FatalError$)))
});
ScalaJS.as.scala_xml_parsing_FatalError$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_parsing_FatalError$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.parsing.FatalError")
  }
});
ScalaJS.isArrayOf.scala_xml_parsing_FatalError$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_parsing_FatalError$)))
});
ScalaJS.asArrayOf.scala_xml_parsing_FatalError$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_parsing_FatalError$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.parsing.FatalError;", depth)
  }
});
ScalaJS.data.scala_xml_parsing_FatalError$ = new ScalaJS.ClassTypeData({
  scala_xml_parsing_FatalError$: 0
}, false, "scala.xml.parsing.FatalError$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_xml_parsing_FatalError$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_parsing_FatalError$.prototype.$classData = ScalaJS.data.scala_xml_parsing_FatalError$;
ScalaJS.moduleInstances.scala_xml_parsing_FatalError = undefined;
ScalaJS.modules.scala_xml_parsing_FatalError = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_parsing_FatalError)) {
    ScalaJS.moduleInstances.scala_xml_parsing_FatalError = new ScalaJS.c.scala_xml_parsing_FatalError$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_parsing_FatalError
});
//@ sourceMappingURL=FatalError$.js.map
