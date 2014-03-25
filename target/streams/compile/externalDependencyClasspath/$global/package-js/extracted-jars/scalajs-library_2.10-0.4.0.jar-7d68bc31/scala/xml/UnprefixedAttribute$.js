/** @constructor */
ScalaJS.c.scala_xml_UnprefixedAttribute$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_xml_UnprefixedAttribute$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_UnprefixedAttribute$.prototype.constructor = ScalaJS.c.scala_xml_UnprefixedAttribute$;
ScalaJS.c.scala_xml_UnprefixedAttribute$.prototype.unapply__Lscala_xml_UnprefixedAttribute__Lscala_Some = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple3().init___O__O__O(x.key__T(), x.value__Lscala_collection_Seq(), x.next__Lscala_xml_MetaData()))
});
ScalaJS.c.scala_xml_UnprefixedAttribute$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_xml_UnprefixedAttribute()
});
ScalaJS.c.scala_xml_UnprefixedAttribute$.prototype.unapply__Lscala_xml_UnprefixedAttribute__ = (function(x) {
  return this.unapply__Lscala_xml_UnprefixedAttribute__Lscala_Some(x)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_UnprefixedAttribute$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_UnprefixedAttribute$.prototype = ScalaJS.c.scala_xml_UnprefixedAttribute$.prototype;
ScalaJS.is.scala_xml_UnprefixedAttribute$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_UnprefixedAttribute$)))
});
ScalaJS.as.scala_xml_UnprefixedAttribute$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_UnprefixedAttribute$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.UnprefixedAttribute")
  }
});
ScalaJS.isArrayOf.scala_xml_UnprefixedAttribute$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_UnprefixedAttribute$)))
});
ScalaJS.asArrayOf.scala_xml_UnprefixedAttribute$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_UnprefixedAttribute$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.UnprefixedAttribute;", depth)
  }
});
ScalaJS.data.scala_xml_UnprefixedAttribute$ = new ScalaJS.ClassTypeData({
  scala_xml_UnprefixedAttribute$: 0
}, false, "scala.xml.UnprefixedAttribute$", ScalaJS.data.java_lang_Object, {
  scala_xml_UnprefixedAttribute$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_UnprefixedAttribute$.prototype.$classData = ScalaJS.data.scala_xml_UnprefixedAttribute$;
ScalaJS.moduleInstances.scala_xml_UnprefixedAttribute = undefined;
ScalaJS.modules.scala_xml_UnprefixedAttribute = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_UnprefixedAttribute)) {
    ScalaJS.moduleInstances.scala_xml_UnprefixedAttribute = new ScalaJS.c.scala_xml_UnprefixedAttribute$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_UnprefixedAttribute
});
//@ sourceMappingURL=UnprefixedAttribute$.js.map
