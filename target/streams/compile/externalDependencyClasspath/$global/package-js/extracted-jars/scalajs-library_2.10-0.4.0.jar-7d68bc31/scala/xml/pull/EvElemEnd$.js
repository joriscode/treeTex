/** @constructor */
ScalaJS.c.scala_xml_pull_EvElemEnd$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this)
});
ScalaJS.c.scala_xml_pull_EvElemEnd$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.scala_xml_pull_EvElemEnd$.prototype.constructor = ScalaJS.c.scala_xml_pull_EvElemEnd$;
ScalaJS.c.scala_xml_pull_EvElemEnd$.prototype.toString__T = (function() {
  return "EvElemEnd"
});
ScalaJS.c.scala_xml_pull_EvElemEnd$.prototype.apply__T__T__Lscala_xml_pull_EvElemEnd = (function(pre, label) {
  return new ScalaJS.c.scala_xml_pull_EvElemEnd().init___T__T(pre, label)
});
ScalaJS.c.scala_xml_pull_EvElemEnd$.prototype.unapply__Lscala_xml_pull_EvElemEnd__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.pre__T(), x$0.label__T()))
  }
});
ScalaJS.c.scala_xml_pull_EvElemEnd$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_pull_EvElemEnd()
});
ScalaJS.c.scala_xml_pull_EvElemEnd$.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__T__T__Lscala_xml_pull_EvElemEnd(ScalaJS.as.java_lang_String(v1), ScalaJS.as.java_lang_String(v2))
});
ScalaJS.c.scala_xml_pull_EvElemEnd$.prototype.unapply__Lscala_xml_pull_EvElemEnd__ = (function(x$0) {
  return this.unapply__Lscala_xml_pull_EvElemEnd__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_pull_EvElemEnd$.prototype.apply__T__T__ = (function(pre, label) {
  return this.apply__T__T__Lscala_xml_pull_EvElemEnd(pre, label)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_pull_EvElemEnd$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_pull_EvElemEnd$.prototype = ScalaJS.c.scala_xml_pull_EvElemEnd$.prototype;
ScalaJS.is.scala_xml_pull_EvElemEnd$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_pull_EvElemEnd$)))
});
ScalaJS.as.scala_xml_pull_EvElemEnd$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_pull_EvElemEnd$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.pull.EvElemEnd")
  }
});
ScalaJS.isArrayOf.scala_xml_pull_EvElemEnd$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_pull_EvElemEnd$)))
});
ScalaJS.asArrayOf.scala_xml_pull_EvElemEnd$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_pull_EvElemEnd$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.pull.EvElemEnd;", depth)
  }
});
ScalaJS.data.scala_xml_pull_EvElemEnd$ = new ScalaJS.ClassTypeData({
  scala_xml_pull_EvElemEnd$: 0
}, false, "scala.xml.pull.EvElemEnd$", ScalaJS.data.scala_runtime_AbstractFunction2, {
  scala_xml_pull_EvElemEnd$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_pull_EvElemEnd$.prototype.$classData = ScalaJS.data.scala_xml_pull_EvElemEnd$;
ScalaJS.moduleInstances.scala_xml_pull_EvElemEnd = undefined;
ScalaJS.modules.scala_xml_pull_EvElemEnd = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_pull_EvElemEnd)) {
    ScalaJS.moduleInstances.scala_xml_pull_EvElemEnd = new ScalaJS.c.scala_xml_pull_EvElemEnd$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_pull_EvElemEnd
});
//@ sourceMappingURL=EvElemEnd$.js.map
