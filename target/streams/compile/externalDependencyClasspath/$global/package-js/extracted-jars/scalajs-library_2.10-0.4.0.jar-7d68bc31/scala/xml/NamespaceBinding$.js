/** @constructor */
ScalaJS.c.scala_xml_NamespaceBinding$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction3.call(this)
});
ScalaJS.c.scala_xml_NamespaceBinding$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction3();
ScalaJS.c.scala_xml_NamespaceBinding$.prototype.constructor = ScalaJS.c.scala_xml_NamespaceBinding$;
ScalaJS.c.scala_xml_NamespaceBinding$.prototype.toString__T = (function() {
  return "NamespaceBinding"
});
ScalaJS.c.scala_xml_NamespaceBinding$.prototype.apply__T__T__Lscala_xml_NamespaceBinding__Lscala_xml_NamespaceBinding = (function(prefix, uri, parent) {
  return new ScalaJS.c.scala_xml_NamespaceBinding().init___T__T__Lscala_xml_NamespaceBinding(prefix, uri, parent)
});
ScalaJS.c.scala_xml_NamespaceBinding$.prototype.unapply__Lscala_xml_NamespaceBinding__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple3().init___O__O__O(x$0.prefix__T(), x$0.uri__T(), x$0.parent__Lscala_xml_NamespaceBinding()))
  }
});
ScalaJS.c.scala_xml_NamespaceBinding$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_NamespaceBinding()
});
ScalaJS.c.scala_xml_NamespaceBinding$.prototype.apply__O__O__O__O = (function(v1, v2, v3) {
  return this.apply__T__T__Lscala_xml_NamespaceBinding__Lscala_xml_NamespaceBinding(ScalaJS.as.java_lang_String(v1), ScalaJS.as.java_lang_String(v2), ScalaJS.as.scala_xml_NamespaceBinding(v3))
});
ScalaJS.c.scala_xml_NamespaceBinding$.prototype.unapply__Lscala_xml_NamespaceBinding__ = (function(x$0) {
  return this.unapply__Lscala_xml_NamespaceBinding__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_NamespaceBinding$.prototype.apply__T__T__Lscala_xml_NamespaceBinding__ = (function(prefix, uri, parent) {
  return this.apply__T__T__Lscala_xml_NamespaceBinding__Lscala_xml_NamespaceBinding(prefix, uri, parent)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_NamespaceBinding$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_NamespaceBinding$.prototype = ScalaJS.c.scala_xml_NamespaceBinding$.prototype;
ScalaJS.is.scala_xml_NamespaceBinding$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_NamespaceBinding$)))
});
ScalaJS.as.scala_xml_NamespaceBinding$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_NamespaceBinding$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.NamespaceBinding")
  }
});
ScalaJS.isArrayOf.scala_xml_NamespaceBinding$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_NamespaceBinding$)))
});
ScalaJS.asArrayOf.scala_xml_NamespaceBinding$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_NamespaceBinding$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.NamespaceBinding;", depth)
  }
});
ScalaJS.data.scala_xml_NamespaceBinding$ = new ScalaJS.ClassTypeData({
  scala_xml_NamespaceBinding$: 0
}, false, "scala.xml.NamespaceBinding$", ScalaJS.data.scala_runtime_AbstractFunction3, {
  scala_xml_NamespaceBinding$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction3: 1,
  scala_Function3: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_NamespaceBinding$.prototype.$classData = ScalaJS.data.scala_xml_NamespaceBinding$;
ScalaJS.moduleInstances.scala_xml_NamespaceBinding = undefined;
ScalaJS.modules.scala_xml_NamespaceBinding = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_NamespaceBinding)) {
    ScalaJS.moduleInstances.scala_xml_NamespaceBinding = new ScalaJS.c.scala_xml_NamespaceBinding$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_NamespaceBinding
});
//@ sourceMappingURL=NamespaceBinding$.js.map
