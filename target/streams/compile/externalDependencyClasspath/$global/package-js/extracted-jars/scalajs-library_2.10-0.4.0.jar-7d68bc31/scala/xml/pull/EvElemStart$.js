/** @constructor */
ScalaJS.c.scala_xml_pull_EvElemStart$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction4.call(this)
});
ScalaJS.c.scala_xml_pull_EvElemStart$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction4();
ScalaJS.c.scala_xml_pull_EvElemStart$.prototype.constructor = ScalaJS.c.scala_xml_pull_EvElemStart$;
ScalaJS.c.scala_xml_pull_EvElemStart$.prototype.toString__T = (function() {
  return "EvElemStart"
});
ScalaJS.c.scala_xml_pull_EvElemStart$.prototype.apply__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_xml_pull_EvElemStart = (function(pre, label, attrs, scope) {
  return new ScalaJS.c.scala_xml_pull_EvElemStart().init___T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding(pre, label, attrs, scope)
});
ScalaJS.c.scala_xml_pull_EvElemStart$.prototype.unapply__Lscala_xml_pull_EvElemStart__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple4().init___O__O__O__O(x$0.pre__T(), x$0.label__T(), x$0.attrs__Lscala_xml_MetaData(), x$0.scope__Lscala_xml_NamespaceBinding()))
  }
});
ScalaJS.c.scala_xml_pull_EvElemStart$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_pull_EvElemStart()
});
ScalaJS.c.scala_xml_pull_EvElemStart$.prototype.apply__O__O__O__O__O = (function(v1, v2, v3, v4) {
  return this.apply__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_xml_pull_EvElemStart(ScalaJS.as.java_lang_String(v1), ScalaJS.as.java_lang_String(v2), ScalaJS.as.scala_xml_MetaData(v3), ScalaJS.as.scala_xml_NamespaceBinding(v4))
});
ScalaJS.c.scala_xml_pull_EvElemStart$.prototype.unapply__Lscala_xml_pull_EvElemStart__ = (function(x$0) {
  return this.unapply__Lscala_xml_pull_EvElemStart__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_pull_EvElemStart$.prototype.apply__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__ = (function(pre, label, attrs, scope) {
  return this.apply__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_xml_pull_EvElemStart(pre, label, attrs, scope)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_pull_EvElemStart$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_pull_EvElemStart$.prototype = ScalaJS.c.scala_xml_pull_EvElemStart$.prototype;
ScalaJS.is.scala_xml_pull_EvElemStart$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_pull_EvElemStart$)))
});
ScalaJS.as.scala_xml_pull_EvElemStart$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_pull_EvElemStart$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.pull.EvElemStart")
  }
});
ScalaJS.isArrayOf.scala_xml_pull_EvElemStart$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_pull_EvElemStart$)))
});
ScalaJS.asArrayOf.scala_xml_pull_EvElemStart$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_pull_EvElemStart$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.pull.EvElemStart;", depth)
  }
});
ScalaJS.data.scala_xml_pull_EvElemStart$ = new ScalaJS.ClassTypeData({
  scala_xml_pull_EvElemStart$: 0
}, false, "scala.xml.pull.EvElemStart$", ScalaJS.data.scala_runtime_AbstractFunction4, {
  scala_xml_pull_EvElemStart$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction4: 1,
  scala_Function4: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_pull_EvElemStart$.prototype.$classData = ScalaJS.data.scala_xml_pull_EvElemStart$;
ScalaJS.moduleInstances.scala_xml_pull_EvElemStart = undefined;
ScalaJS.modules.scala_xml_pull_EvElemStart = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_pull_EvElemStart)) {
    ScalaJS.moduleInstances.scala_xml_pull_EvElemStart = new ScalaJS.c.scala_xml_pull_EvElemStart$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_pull_EvElemStart
});
//@ sourceMappingURL=EvElemStart$.js.map
