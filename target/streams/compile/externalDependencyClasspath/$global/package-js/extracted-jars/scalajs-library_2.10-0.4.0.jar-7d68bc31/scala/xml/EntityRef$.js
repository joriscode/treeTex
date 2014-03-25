/** @constructor */
ScalaJS.c.scala_xml_EntityRef$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.scala_xml_EntityRef$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_xml_EntityRef$.prototype.constructor = ScalaJS.c.scala_xml_EntityRef$;
ScalaJS.c.scala_xml_EntityRef$.prototype.toString__T = (function() {
  return "EntityRef"
});
ScalaJS.c.scala_xml_EntityRef$.prototype.apply__T__Lscala_xml_EntityRef = (function(entityName) {
  return new ScalaJS.c.scala_xml_EntityRef().init___T(entityName)
});
ScalaJS.c.scala_xml_EntityRef$.prototype.unapply__Lscala_xml_EntityRef__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.entityName__T())
  }
});
ScalaJS.c.scala_xml_EntityRef$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_EntityRef()
});
ScalaJS.c.scala_xml_EntityRef$.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lscala_xml_EntityRef(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.scala_xml_EntityRef$.prototype.unapply__Lscala_xml_EntityRef__ = (function(x$0) {
  return this.unapply__Lscala_xml_EntityRef__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_EntityRef$.prototype.apply__T__ = (function(entityName) {
  return this.apply__T__Lscala_xml_EntityRef(entityName)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_EntityRef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_EntityRef$.prototype = ScalaJS.c.scala_xml_EntityRef$.prototype;
ScalaJS.is.scala_xml_EntityRef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_EntityRef$)))
});
ScalaJS.as.scala_xml_EntityRef$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_EntityRef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.EntityRef")
  }
});
ScalaJS.isArrayOf.scala_xml_EntityRef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_EntityRef$)))
});
ScalaJS.asArrayOf.scala_xml_EntityRef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_EntityRef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.EntityRef;", depth)
  }
});
ScalaJS.data.scala_xml_EntityRef$ = new ScalaJS.ClassTypeData({
  scala_xml_EntityRef$: 0
}, false, "scala.xml.EntityRef$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_xml_EntityRef$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_EntityRef$.prototype.$classData = ScalaJS.data.scala_xml_EntityRef$;
ScalaJS.moduleInstances.scala_xml_EntityRef = undefined;
ScalaJS.modules.scala_xml_EntityRef = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_EntityRef)) {
    ScalaJS.moduleInstances.scala_xml_EntityRef = new ScalaJS.c.scala_xml_EntityRef$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_EntityRef
});
//@ sourceMappingURL=EntityRef$.js.map
