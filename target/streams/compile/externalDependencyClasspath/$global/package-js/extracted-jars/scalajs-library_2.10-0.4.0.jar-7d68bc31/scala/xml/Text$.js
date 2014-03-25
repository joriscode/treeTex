/** @constructor */
ScalaJS.c.scala_xml_Text$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_xml_Text$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_Text$.prototype.constructor = ScalaJS.c.scala_xml_Text$;
ScalaJS.c.scala_xml_Text$.prototype.apply__T__Lscala_xml_Text = (function(data) {
  return new ScalaJS.c.scala_xml_Text().init___T(data)
});
ScalaJS.c.scala_xml_Text$.prototype.unapply__O__Lscala_Option = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_xml_Text(x1)) {
    var x2 = ScalaJS.as.scala_xml_Text(x1);
    return new ScalaJS.c.scala_Some().init___O(x2.data__O())
  };
  return ScalaJS.modules.scala_None()
});
ScalaJS.c.scala_xml_Text$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_xml_Text()
});
ScalaJS.c.scala_xml_Text$.prototype.unapply__O__ = (function(other) {
  return this.unapply__O__Lscala_Option(other)
});
ScalaJS.c.scala_xml_Text$.prototype.apply__T__ = (function(data) {
  return this.apply__T__Lscala_xml_Text(data)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_Text$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_Text$.prototype = ScalaJS.c.scala_xml_Text$.prototype;
ScalaJS.is.scala_xml_Text$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_Text$)))
});
ScalaJS.as.scala_xml_Text$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_Text$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.Text")
  }
});
ScalaJS.isArrayOf.scala_xml_Text$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_Text$)))
});
ScalaJS.asArrayOf.scala_xml_Text$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_Text$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.Text;", depth)
  }
});
ScalaJS.data.scala_xml_Text$ = new ScalaJS.ClassTypeData({
  scala_xml_Text$: 0
}, false, "scala.xml.Text$", ScalaJS.data.java_lang_Object, {
  scala_xml_Text$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_Text$.prototype.$classData = ScalaJS.data.scala_xml_Text$;
ScalaJS.moduleInstances.scala_xml_Text = undefined;
ScalaJS.modules.scala_xml_Text = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_Text)) {
    ScalaJS.moduleInstances.scala_xml_Text = new ScalaJS.c.scala_xml_Text$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_Text
});
//@ sourceMappingURL=Text$.js.map
