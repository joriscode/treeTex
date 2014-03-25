/** @constructor */
ScalaJS.c.scala_xml_Unparsed$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_xml_Unparsed$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_Unparsed$.prototype.constructor = ScalaJS.c.scala_xml_Unparsed$;
ScalaJS.c.scala_xml_Unparsed$.prototype.apply__T__Lscala_xml_Unparsed = (function(data) {
  return new ScalaJS.c.scala_xml_Unparsed().init___T(data)
});
ScalaJS.c.scala_xml_Unparsed$.prototype.unapply__Lscala_xml_Unparsed__Lscala_Some = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x.data__O())
});
ScalaJS.c.scala_xml_Unparsed$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_xml_Unparsed()
});
ScalaJS.c.scala_xml_Unparsed$.prototype.unapply__Lscala_xml_Unparsed__ = (function(x) {
  return this.unapply__Lscala_xml_Unparsed__Lscala_Some(x)
});
ScalaJS.c.scala_xml_Unparsed$.prototype.apply__T__ = (function(data) {
  return this.apply__T__Lscala_xml_Unparsed(data)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_Unparsed$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_Unparsed$.prototype = ScalaJS.c.scala_xml_Unparsed$.prototype;
ScalaJS.is.scala_xml_Unparsed$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_Unparsed$)))
});
ScalaJS.as.scala_xml_Unparsed$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_Unparsed$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.Unparsed")
  }
});
ScalaJS.isArrayOf.scala_xml_Unparsed$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_Unparsed$)))
});
ScalaJS.asArrayOf.scala_xml_Unparsed$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_Unparsed$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.Unparsed;", depth)
  }
});
ScalaJS.data.scala_xml_Unparsed$ = new ScalaJS.ClassTypeData({
  scala_xml_Unparsed$: 0
}, false, "scala.xml.Unparsed$", ScalaJS.data.java_lang_Object, {
  scala_xml_Unparsed$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_Unparsed$.prototype.$classData = ScalaJS.data.scala_xml_Unparsed$;
ScalaJS.moduleInstances.scala_xml_Unparsed = undefined;
ScalaJS.modules.scala_xml_Unparsed = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_Unparsed)) {
    ScalaJS.moduleInstances.scala_xml_Unparsed = new ScalaJS.c.scala_xml_Unparsed$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_Unparsed
});
//@ sourceMappingURL=Unparsed$.js.map
