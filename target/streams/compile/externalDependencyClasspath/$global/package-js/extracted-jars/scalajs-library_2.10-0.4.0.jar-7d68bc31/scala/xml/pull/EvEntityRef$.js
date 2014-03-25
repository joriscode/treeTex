/** @constructor */
ScalaJS.c.scala_xml_pull_EvEntityRef$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.scala_xml_pull_EvEntityRef$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_xml_pull_EvEntityRef$.prototype.constructor = ScalaJS.c.scala_xml_pull_EvEntityRef$;
ScalaJS.c.scala_xml_pull_EvEntityRef$.prototype.toString__T = (function() {
  return "EvEntityRef"
});
ScalaJS.c.scala_xml_pull_EvEntityRef$.prototype.apply__T__Lscala_xml_pull_EvEntityRef = (function(entity) {
  return new ScalaJS.c.scala_xml_pull_EvEntityRef().init___T(entity)
});
ScalaJS.c.scala_xml_pull_EvEntityRef$.prototype.unapply__Lscala_xml_pull_EvEntityRef__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.entity__T())
  }
});
ScalaJS.c.scala_xml_pull_EvEntityRef$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_pull_EvEntityRef()
});
ScalaJS.c.scala_xml_pull_EvEntityRef$.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lscala_xml_pull_EvEntityRef(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.scala_xml_pull_EvEntityRef$.prototype.unapply__Lscala_xml_pull_EvEntityRef__ = (function(x$0) {
  return this.unapply__Lscala_xml_pull_EvEntityRef__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_pull_EvEntityRef$.prototype.apply__T__ = (function(entity) {
  return this.apply__T__Lscala_xml_pull_EvEntityRef(entity)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_pull_EvEntityRef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_pull_EvEntityRef$.prototype = ScalaJS.c.scala_xml_pull_EvEntityRef$.prototype;
ScalaJS.is.scala_xml_pull_EvEntityRef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_pull_EvEntityRef$)))
});
ScalaJS.as.scala_xml_pull_EvEntityRef$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_pull_EvEntityRef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.pull.EvEntityRef")
  }
});
ScalaJS.isArrayOf.scala_xml_pull_EvEntityRef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_pull_EvEntityRef$)))
});
ScalaJS.asArrayOf.scala_xml_pull_EvEntityRef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_pull_EvEntityRef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.pull.EvEntityRef;", depth)
  }
});
ScalaJS.data.scala_xml_pull_EvEntityRef$ = new ScalaJS.ClassTypeData({
  scala_xml_pull_EvEntityRef$: 0
}, false, "scala.xml.pull.EvEntityRef$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_xml_pull_EvEntityRef$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_pull_EvEntityRef$.prototype.$classData = ScalaJS.data.scala_xml_pull_EvEntityRef$;
ScalaJS.moduleInstances.scala_xml_pull_EvEntityRef = undefined;
ScalaJS.modules.scala_xml_pull_EvEntityRef = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_pull_EvEntityRef)) {
    ScalaJS.moduleInstances.scala_xml_pull_EvEntityRef = new ScalaJS.c.scala_xml_pull_EvEntityRef$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_pull_EvEntityRef
});
//@ sourceMappingURL=EvEntityRef$.js.map
