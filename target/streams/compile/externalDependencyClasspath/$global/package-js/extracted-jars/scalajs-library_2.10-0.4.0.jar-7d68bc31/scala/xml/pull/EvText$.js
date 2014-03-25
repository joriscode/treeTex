/** @constructor */
ScalaJS.c.scala_xml_pull_EvText$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.scala_xml_pull_EvText$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_xml_pull_EvText$.prototype.constructor = ScalaJS.c.scala_xml_pull_EvText$;
ScalaJS.c.scala_xml_pull_EvText$.prototype.toString__T = (function() {
  return "EvText"
});
ScalaJS.c.scala_xml_pull_EvText$.prototype.apply__T__Lscala_xml_pull_EvText = (function(text) {
  return new ScalaJS.c.scala_xml_pull_EvText().init___T(text)
});
ScalaJS.c.scala_xml_pull_EvText$.prototype.unapply__Lscala_xml_pull_EvText__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.text__T())
  }
});
ScalaJS.c.scala_xml_pull_EvText$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_pull_EvText()
});
ScalaJS.c.scala_xml_pull_EvText$.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lscala_xml_pull_EvText(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.scala_xml_pull_EvText$.prototype.unapply__Lscala_xml_pull_EvText__ = (function(x$0) {
  return this.unapply__Lscala_xml_pull_EvText__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_pull_EvText$.prototype.apply__T__ = (function(text) {
  return this.apply__T__Lscala_xml_pull_EvText(text)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_pull_EvText$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_pull_EvText$.prototype = ScalaJS.c.scala_xml_pull_EvText$.prototype;
ScalaJS.is.scala_xml_pull_EvText$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_pull_EvText$)))
});
ScalaJS.as.scala_xml_pull_EvText$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_pull_EvText$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.pull.EvText")
  }
});
ScalaJS.isArrayOf.scala_xml_pull_EvText$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_pull_EvText$)))
});
ScalaJS.asArrayOf.scala_xml_pull_EvText$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_pull_EvText$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.pull.EvText;", depth)
  }
});
ScalaJS.data.scala_xml_pull_EvText$ = new ScalaJS.ClassTypeData({
  scala_xml_pull_EvText$: 0
}, false, "scala.xml.pull.EvText$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_xml_pull_EvText$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_pull_EvText$.prototype.$classData = ScalaJS.data.scala_xml_pull_EvText$;
ScalaJS.moduleInstances.scala_xml_pull_EvText = undefined;
ScalaJS.modules.scala_xml_pull_EvText = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_pull_EvText)) {
    ScalaJS.moduleInstances.scala_xml_pull_EvText = new ScalaJS.c.scala_xml_pull_EvText$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_pull_EvText
});
//@ sourceMappingURL=EvText$.js.map
