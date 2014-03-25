/** @constructor */
ScalaJS.c.scala_xml_QNode$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_xml_QNode$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_QNode$.prototype.constructor = ScalaJS.c.scala_xml_QNode$;
ScalaJS.c.scala_xml_QNode$.prototype.unapplySeq__Lscala_xml_Node__Lscala_Some = (function(n) {
  return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple4().init___O__O__O__O(n.scope__Lscala_xml_NamespaceBinding().getURI__T__T(n.prefix__T()), n.label__T(), n.attributes__Lscala_xml_MetaData(), n.child__Lscala_collection_Seq()))
});
ScalaJS.c.scala_xml_QNode$.prototype.unapplySeq__Lscala_xml_Node__ = (function(n) {
  return this.unapplySeq__Lscala_xml_Node__Lscala_Some(n)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_QNode$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_QNode$.prototype = ScalaJS.c.scala_xml_QNode$.prototype;
ScalaJS.is.scala_xml_QNode$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_QNode$)))
});
ScalaJS.as.scala_xml_QNode$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_QNode$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.QNode")
  }
});
ScalaJS.isArrayOf.scala_xml_QNode$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_QNode$)))
});
ScalaJS.asArrayOf.scala_xml_QNode$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_QNode$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.QNode;", depth)
  }
});
ScalaJS.data.scala_xml_QNode$ = new ScalaJS.ClassTypeData({
  scala_xml_QNode$: 0
}, false, "scala.xml.QNode$", ScalaJS.data.java_lang_Object, {
  scala_xml_QNode$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_QNode$.prototype.$classData = ScalaJS.data.scala_xml_QNode$;
ScalaJS.moduleInstances.scala_xml_QNode = undefined;
ScalaJS.modules.scala_xml_QNode = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_QNode)) {
    ScalaJS.moduleInstances.scala_xml_QNode = new ScalaJS.c.scala_xml_QNode$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_QNode
});
//@ sourceMappingURL=QNode$.js.map
