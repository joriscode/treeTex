/** @constructor */
ScalaJS.c.scala_xml_MinimizeMode$ = (function() {
  ScalaJS.c.scala_Enumeration.call(this);
  this.Default$2 = null;
  this.Always$2 = null;
  this.Never$2 = null
});
ScalaJS.c.scala_xml_MinimizeMode$.prototype = new ScalaJS.inheritable.scala_Enumeration();
ScalaJS.c.scala_xml_MinimizeMode$.prototype.constructor = ScalaJS.c.scala_xml_MinimizeMode$;
ScalaJS.c.scala_xml_MinimizeMode$.prototype.Default__Lscala_Enumeration$Value = (function() {
  return this.Default$2
});
ScalaJS.c.scala_xml_MinimizeMode$.prototype.Always__Lscala_Enumeration$Value = (function() {
  return this.Always$2
});
ScalaJS.c.scala_xml_MinimizeMode$.prototype.Never__Lscala_Enumeration$Value = (function() {
  return this.Never$2
});
ScalaJS.c.scala_xml_MinimizeMode$.prototype.init___ = (function() {
  ScalaJS.c.scala_Enumeration.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_xml_MinimizeMode = this;
  this.Default$2 = this.Value__T__Lscala_Enumeration$Value("Default");
  this.Always$2 = this.Value__T__Lscala_Enumeration$Value("Always");
  this.Never$2 = this.Value__T__Lscala_Enumeration$Value("Never");
  return this
});
ScalaJS.c.scala_xml_MinimizeMode$.prototype.Never__ = (function() {
  return this.Never__Lscala_Enumeration$Value()
});
ScalaJS.c.scala_xml_MinimizeMode$.prototype.Always__ = (function() {
  return this.Always__Lscala_Enumeration$Value()
});
ScalaJS.c.scala_xml_MinimizeMode$.prototype.Default__ = (function() {
  return this.Default__Lscala_Enumeration$Value()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_MinimizeMode$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_MinimizeMode$.prototype = ScalaJS.c.scala_xml_MinimizeMode$.prototype;
ScalaJS.is.scala_xml_MinimizeMode$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_MinimizeMode$)))
});
ScalaJS.as.scala_xml_MinimizeMode$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_MinimizeMode$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.MinimizeMode")
  }
});
ScalaJS.isArrayOf.scala_xml_MinimizeMode$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_MinimizeMode$)))
});
ScalaJS.asArrayOf.scala_xml_MinimizeMode$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_MinimizeMode$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.MinimizeMode;", depth)
  }
});
ScalaJS.data.scala_xml_MinimizeMode$ = new ScalaJS.ClassTypeData({
  scala_xml_MinimizeMode$: 0
}, false, "scala.xml.MinimizeMode$", ScalaJS.data.scala_Enumeration, {
  scala_xml_MinimizeMode$: 1,
  scala_Enumeration: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_MinimizeMode$.prototype.$classData = ScalaJS.data.scala_xml_MinimizeMode$;
ScalaJS.moduleInstances.scala_xml_MinimizeMode = undefined;
ScalaJS.modules.scala_xml_MinimizeMode = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_MinimizeMode)) {
    ScalaJS.moduleInstances.scala_xml_MinimizeMode = new ScalaJS.c.scala_xml_MinimizeMode$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_MinimizeMode
});
//@ sourceMappingURL=MinimizeMode$.js.map
