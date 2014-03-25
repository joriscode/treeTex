/** @constructor */
ScalaJS.c.scala_xml_Group$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.scala_xml_Group$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_xml_Group$.prototype.constructor = ScalaJS.c.scala_xml_Group$;
ScalaJS.c.scala_xml_Group$.prototype.toString__T = (function() {
  return "Group"
});
ScalaJS.c.scala_xml_Group$.prototype.apply__Lscala_collection_Seq__Lscala_xml_Group = (function(nodes) {
  return new ScalaJS.c.scala_xml_Group().init___Lscala_collection_Seq(nodes)
});
ScalaJS.c.scala_xml_Group$.prototype.unapply__Lscala_xml_Group__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.nodes__Lscala_collection_Seq())
  }
});
ScalaJS.c.scala_xml_Group$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_Group()
});
ScalaJS.c.scala_xml_Group$.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_collection_Seq__Lscala_xml_Group(ScalaJS.as.scala_collection_Seq(v1))
});
ScalaJS.c.scala_xml_Group$.prototype.unapply__Lscala_xml_Group__ = (function(x$0) {
  return this.unapply__Lscala_xml_Group__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_Group$.prototype.apply__Lscala_collection_Seq__ = (function(nodes) {
  return this.apply__Lscala_collection_Seq__Lscala_xml_Group(nodes)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_Group$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_Group$.prototype = ScalaJS.c.scala_xml_Group$.prototype;
ScalaJS.is.scala_xml_Group$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_Group$)))
});
ScalaJS.as.scala_xml_Group$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_Group$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.Group")
  }
});
ScalaJS.isArrayOf.scala_xml_Group$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_Group$)))
});
ScalaJS.asArrayOf.scala_xml_Group$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_Group$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.Group;", depth)
  }
});
ScalaJS.data.scala_xml_Group$ = new ScalaJS.ClassTypeData({
  scala_xml_Group$: 0
}, false, "scala.xml.Group$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_xml_Group$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_Group$.prototype.$classData = ScalaJS.data.scala_xml_Group$;
ScalaJS.moduleInstances.scala_xml_Group = undefined;
ScalaJS.modules.scala_xml_Group = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_Group)) {
    ScalaJS.moduleInstances.scala_xml_Group = new ScalaJS.c.scala_xml_Group$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_Group
});
//@ sourceMappingURL=Group$.js.map
