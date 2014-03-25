/** @constructor */
ScalaJS.c.scala_xml_pull_EvProcInstr$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this)
});
ScalaJS.c.scala_xml_pull_EvProcInstr$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.scala_xml_pull_EvProcInstr$.prototype.constructor = ScalaJS.c.scala_xml_pull_EvProcInstr$;
ScalaJS.c.scala_xml_pull_EvProcInstr$.prototype.toString__T = (function() {
  return "EvProcInstr"
});
ScalaJS.c.scala_xml_pull_EvProcInstr$.prototype.apply__T__T__Lscala_xml_pull_EvProcInstr = (function(target, text) {
  return new ScalaJS.c.scala_xml_pull_EvProcInstr().init___T__T(target, text)
});
ScalaJS.c.scala_xml_pull_EvProcInstr$.prototype.unapply__Lscala_xml_pull_EvProcInstr__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.target__T(), x$0.text__T()))
  }
});
ScalaJS.c.scala_xml_pull_EvProcInstr$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_pull_EvProcInstr()
});
ScalaJS.c.scala_xml_pull_EvProcInstr$.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__T__T__Lscala_xml_pull_EvProcInstr(ScalaJS.as.java_lang_String(v1), ScalaJS.as.java_lang_String(v2))
});
ScalaJS.c.scala_xml_pull_EvProcInstr$.prototype.unapply__Lscala_xml_pull_EvProcInstr__ = (function(x$0) {
  return this.unapply__Lscala_xml_pull_EvProcInstr__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_pull_EvProcInstr$.prototype.apply__T__T__ = (function(target, text) {
  return this.apply__T__T__Lscala_xml_pull_EvProcInstr(target, text)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_pull_EvProcInstr$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_pull_EvProcInstr$.prototype = ScalaJS.c.scala_xml_pull_EvProcInstr$.prototype;
ScalaJS.is.scala_xml_pull_EvProcInstr$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_pull_EvProcInstr$)))
});
ScalaJS.as.scala_xml_pull_EvProcInstr$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_pull_EvProcInstr$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.pull.EvProcInstr")
  }
});
ScalaJS.isArrayOf.scala_xml_pull_EvProcInstr$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_pull_EvProcInstr$)))
});
ScalaJS.asArrayOf.scala_xml_pull_EvProcInstr$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_pull_EvProcInstr$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.pull.EvProcInstr;", depth)
  }
});
ScalaJS.data.scala_xml_pull_EvProcInstr$ = new ScalaJS.ClassTypeData({
  scala_xml_pull_EvProcInstr$: 0
}, false, "scala.xml.pull.EvProcInstr$", ScalaJS.data.scala_runtime_AbstractFunction2, {
  scala_xml_pull_EvProcInstr$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_pull_EvProcInstr$.prototype.$classData = ScalaJS.data.scala_xml_pull_EvProcInstr$;
ScalaJS.moduleInstances.scala_xml_pull_EvProcInstr = undefined;
ScalaJS.modules.scala_xml_pull_EvProcInstr = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_pull_EvProcInstr)) {
    ScalaJS.moduleInstances.scala_xml_pull_EvProcInstr = new ScalaJS.c.scala_xml_pull_EvProcInstr$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_pull_EvProcInstr
});
//@ sourceMappingURL=EvProcInstr$.js.map
