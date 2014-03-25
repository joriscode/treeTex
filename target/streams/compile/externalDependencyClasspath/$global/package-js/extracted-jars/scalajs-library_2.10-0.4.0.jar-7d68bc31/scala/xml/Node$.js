/** @constructor */
ScalaJS.c.scala_xml_Node$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.EmptyNamespace$1 = null
});
ScalaJS.c.scala_xml_Node$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_Node$.prototype.constructor = ScalaJS.c.scala_xml_Node$;
ScalaJS.c.scala_xml_Node$.prototype.NoAttributes__Lscala_xml_MetaData = (function() {
  return ScalaJS.modules.scala_xml_Null()
});
ScalaJS.c.scala_xml_Node$.prototype.EmptyNamespace__T = (function() {
  return this.EmptyNamespace$1
});
ScalaJS.c.scala_xml_Node$.prototype.unapplySeq__Lscala_xml_Node__Lscala_Some = (function(n) {
  return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple3().init___O__O__O(n.label__T(), n.attributes__Lscala_xml_MetaData(), n.child__Lscala_collection_Seq()))
});
ScalaJS.c.scala_xml_Node$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_xml_Node = this;
  this.EmptyNamespace$1 = "";
  return this
});
ScalaJS.c.scala_xml_Node$.prototype.unapplySeq__Lscala_xml_Node__ = (function(n) {
  return this.unapplySeq__Lscala_xml_Node__Lscala_Some(n)
});
ScalaJS.c.scala_xml_Node$.prototype.EmptyNamespace__ = (function() {
  return this.EmptyNamespace__T()
});
ScalaJS.c.scala_xml_Node$.prototype.NoAttributes__ = (function() {
  return this.NoAttributes__Lscala_xml_MetaData()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_Node$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_Node$.prototype = ScalaJS.c.scala_xml_Node$.prototype;
ScalaJS.is.scala_xml_Node$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_Node$)))
});
ScalaJS.as.scala_xml_Node$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_Node$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.Node")
  }
});
ScalaJS.isArrayOf.scala_xml_Node$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_Node$)))
});
ScalaJS.asArrayOf.scala_xml_Node$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_Node$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.Node;", depth)
  }
});
ScalaJS.data.scala_xml_Node$ = new ScalaJS.ClassTypeData({
  scala_xml_Node$: 0
}, false, "scala.xml.Node$", ScalaJS.data.java_lang_Object, {
  scala_xml_Node$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_Node$.prototype.$classData = ScalaJS.data.scala_xml_Node$;
ScalaJS.moduleInstances.scala_xml_Node = undefined;
ScalaJS.modules.scala_xml_Node = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_Node)) {
    ScalaJS.moduleInstances.scala_xml_Node = new ScalaJS.c.scala_xml_Node$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_Node
});
//@ sourceMappingURL=Node$.js.map
