/** @constructor */
ScalaJS.c.scala_xml_ProcInstr$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this)
});
ScalaJS.c.scala_xml_ProcInstr$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.scala_xml_ProcInstr$.prototype.constructor = ScalaJS.c.scala_xml_ProcInstr$;
ScalaJS.c.scala_xml_ProcInstr$.prototype.toString__T = (function() {
  return "ProcInstr"
});
ScalaJS.c.scala_xml_ProcInstr$.prototype.apply__T__T__Lscala_xml_ProcInstr = (function(target, proctext) {
  return new ScalaJS.c.scala_xml_ProcInstr().init___T__T(target, proctext)
});
ScalaJS.c.scala_xml_ProcInstr$.prototype.unapply__Lscala_xml_ProcInstr__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.target__T(), x$0.proctext__T()))
  }
});
ScalaJS.c.scala_xml_ProcInstr$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_ProcInstr()
});
ScalaJS.c.scala_xml_ProcInstr$.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__T__T__Lscala_xml_ProcInstr(ScalaJS.as.java_lang_String(v1), ScalaJS.as.java_lang_String(v2))
});
ScalaJS.c.scala_xml_ProcInstr$.prototype.unapply__Lscala_xml_ProcInstr__ = (function(x$0) {
  return this.unapply__Lscala_xml_ProcInstr__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_ProcInstr$.prototype.apply__T__T__ = (function(target, proctext) {
  return this.apply__T__T__Lscala_xml_ProcInstr(target, proctext)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_ProcInstr$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_ProcInstr$.prototype = ScalaJS.c.scala_xml_ProcInstr$.prototype;
ScalaJS.is.scala_xml_ProcInstr$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_ProcInstr$)))
});
ScalaJS.as.scala_xml_ProcInstr$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_ProcInstr$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.ProcInstr")
  }
});
ScalaJS.isArrayOf.scala_xml_ProcInstr$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_ProcInstr$)))
});
ScalaJS.asArrayOf.scala_xml_ProcInstr$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_ProcInstr$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.ProcInstr;", depth)
  }
});
ScalaJS.data.scala_xml_ProcInstr$ = new ScalaJS.ClassTypeData({
  scala_xml_ProcInstr$: 0
}, false, "scala.xml.ProcInstr$", ScalaJS.data.scala_runtime_AbstractFunction2, {
  scala_xml_ProcInstr$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_ProcInstr$.prototype.$classData = ScalaJS.data.scala_xml_ProcInstr$;
ScalaJS.moduleInstances.scala_xml_ProcInstr = undefined;
ScalaJS.modules.scala_xml_ProcInstr = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_ProcInstr)) {
    ScalaJS.moduleInstances.scala_xml_ProcInstr = new ScalaJS.c.scala_xml_ProcInstr$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_ProcInstr
});
//@ sourceMappingURL=ProcInstr$.js.map
