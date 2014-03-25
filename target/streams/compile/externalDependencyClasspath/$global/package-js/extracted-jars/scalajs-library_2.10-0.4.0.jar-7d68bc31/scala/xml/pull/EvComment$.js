/** @constructor */
ScalaJS.c.scala_xml_pull_EvComment$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.scala_xml_pull_EvComment$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_xml_pull_EvComment$.prototype.constructor = ScalaJS.c.scala_xml_pull_EvComment$;
ScalaJS.c.scala_xml_pull_EvComment$.prototype.toString__T = (function() {
  return "EvComment"
});
ScalaJS.c.scala_xml_pull_EvComment$.prototype.apply__T__Lscala_xml_pull_EvComment = (function(text) {
  return new ScalaJS.c.scala_xml_pull_EvComment().init___T(text)
});
ScalaJS.c.scala_xml_pull_EvComment$.prototype.unapply__Lscala_xml_pull_EvComment__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.text__T())
  }
});
ScalaJS.c.scala_xml_pull_EvComment$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_pull_EvComment()
});
ScalaJS.c.scala_xml_pull_EvComment$.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lscala_xml_pull_EvComment(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.scala_xml_pull_EvComment$.prototype.unapply__Lscala_xml_pull_EvComment__ = (function(x$0) {
  return this.unapply__Lscala_xml_pull_EvComment__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_pull_EvComment$.prototype.apply__T__ = (function(text) {
  return this.apply__T__Lscala_xml_pull_EvComment(text)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_pull_EvComment$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_pull_EvComment$.prototype = ScalaJS.c.scala_xml_pull_EvComment$.prototype;
ScalaJS.is.scala_xml_pull_EvComment$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_pull_EvComment$)))
});
ScalaJS.as.scala_xml_pull_EvComment$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_pull_EvComment$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.pull.EvComment")
  }
});
ScalaJS.isArrayOf.scala_xml_pull_EvComment$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_pull_EvComment$)))
});
ScalaJS.asArrayOf.scala_xml_pull_EvComment$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_pull_EvComment$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.pull.EvComment;", depth)
  }
});
ScalaJS.data.scala_xml_pull_EvComment$ = new ScalaJS.ClassTypeData({
  scala_xml_pull_EvComment$: 0
}, false, "scala.xml.pull.EvComment$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_xml_pull_EvComment$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_pull_EvComment$.prototype.$classData = ScalaJS.data.scala_xml_pull_EvComment$;
ScalaJS.moduleInstances.scala_xml_pull_EvComment = undefined;
ScalaJS.modules.scala_xml_pull_EvComment = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_pull_EvComment)) {
    ScalaJS.moduleInstances.scala_xml_pull_EvComment = new ScalaJS.c.scala_xml_pull_EvComment$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_pull_EvComment
});
//@ sourceMappingURL=EvComment$.js.map
