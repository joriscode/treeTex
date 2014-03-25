/** @constructor */
ScalaJS.c.scala_xml_PrefixedAttribute$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_xml_PrefixedAttribute$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_PrefixedAttribute$.prototype.constructor = ScalaJS.c.scala_xml_PrefixedAttribute$;
ScalaJS.c.scala_xml_PrefixedAttribute$.prototype.unapply__Lscala_xml_PrefixedAttribute__Lscala_Some = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple4().init___O__O__O__O(x.pre__T(), x.key__T(), x.value__Lscala_collection_Seq(), x.next__Lscala_xml_MetaData()))
});
ScalaJS.c.scala_xml_PrefixedAttribute$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_xml_PrefixedAttribute()
});
ScalaJS.c.scala_xml_PrefixedAttribute$.prototype.unapply__Lscala_xml_PrefixedAttribute__ = (function(x) {
  return this.unapply__Lscala_xml_PrefixedAttribute__Lscala_Some(x)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_PrefixedAttribute$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_PrefixedAttribute$.prototype = ScalaJS.c.scala_xml_PrefixedAttribute$.prototype;
ScalaJS.is.scala_xml_PrefixedAttribute$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_PrefixedAttribute$)))
});
ScalaJS.as.scala_xml_PrefixedAttribute$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_PrefixedAttribute$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.PrefixedAttribute")
  }
});
ScalaJS.isArrayOf.scala_xml_PrefixedAttribute$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_PrefixedAttribute$)))
});
ScalaJS.asArrayOf.scala_xml_PrefixedAttribute$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_PrefixedAttribute$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.PrefixedAttribute;", depth)
  }
});
ScalaJS.data.scala_xml_PrefixedAttribute$ = new ScalaJS.ClassTypeData({
  scala_xml_PrefixedAttribute$: 0
}, false, "scala.xml.PrefixedAttribute$", ScalaJS.data.java_lang_Object, {
  scala_xml_PrefixedAttribute$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_PrefixedAttribute$.prototype.$classData = ScalaJS.data.scala_xml_PrefixedAttribute$;
ScalaJS.moduleInstances.scala_xml_PrefixedAttribute = undefined;
ScalaJS.modules.scala_xml_PrefixedAttribute = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_PrefixedAttribute)) {
    ScalaJS.moduleInstances.scala_xml_PrefixedAttribute = new ScalaJS.c.scala_xml_PrefixedAttribute$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_PrefixedAttribute
});
//@ sourceMappingURL=PrefixedAttribute$.js.map
