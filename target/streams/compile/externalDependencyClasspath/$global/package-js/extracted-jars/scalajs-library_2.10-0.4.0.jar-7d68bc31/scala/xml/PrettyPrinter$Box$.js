/** @constructor */
ScalaJS.c.scala_xml_PrettyPrinter$Box$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this);
  this.$$outer$2 = null
});
ScalaJS.c.scala_xml_PrettyPrinter$Box$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.scala_xml_PrettyPrinter$Box$.prototype.constructor = ScalaJS.c.scala_xml_PrettyPrinter$Box$;
ScalaJS.c.scala_xml_PrettyPrinter$Box$.prototype.toString__T = (function() {
  return "Box"
});
ScalaJS.c.scala_xml_PrettyPrinter$Box$.prototype.apply__I__T__Lscala_xml_PrettyPrinter$Box = (function(col, s) {
  return new ScalaJS.c.scala_xml_PrettyPrinter$Box().init___Lscala_xml_PrettyPrinter__I__T(this.$$outer$2, col, s)
});
ScalaJS.c.scala_xml_PrettyPrinter$Box$.prototype.unapply__Lscala_xml_PrettyPrinter$Box__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.bI(x$0.col__I()), x$0.s__T()))
  }
});
ScalaJS.c.scala_xml_PrettyPrinter$Box$.prototype.readResolve__p2__O = (function() {
  return this.$$outer$2.Box__Lscala_xml_PrettyPrinter$Box$()
});
ScalaJS.c.scala_xml_PrettyPrinter$Box$.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__I__T__Lscala_xml_PrettyPrinter$Box(ScalaJS.uI(v1), ScalaJS.as.java_lang_String(v2))
});
ScalaJS.c.scala_xml_PrettyPrinter$Box$.prototype.init___Lscala_xml_PrettyPrinter = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_runtime_AbstractFunction2.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_xml_PrettyPrinter$Box$.prototype.unapply__Lscala_xml_PrettyPrinter$Box__ = (function(x$0) {
  return this.unapply__Lscala_xml_PrettyPrinter$Box__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_PrettyPrinter$Box$.prototype.apply__I__T__ = (function(col, s) {
  return this.apply__I__T__Lscala_xml_PrettyPrinter$Box(col, s)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_PrettyPrinter$Box$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_PrettyPrinter$Box$.prototype = ScalaJS.c.scala_xml_PrettyPrinter$Box$.prototype;
ScalaJS.is.scala_xml_PrettyPrinter$Box$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_PrettyPrinter$Box$)))
});
ScalaJS.as.scala_xml_PrettyPrinter$Box$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_PrettyPrinter$Box$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.PrettyPrinter$Box")
  }
});
ScalaJS.isArrayOf.scala_xml_PrettyPrinter$Box$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_PrettyPrinter$Box$)))
});
ScalaJS.asArrayOf.scala_xml_PrettyPrinter$Box$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_PrettyPrinter$Box$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.PrettyPrinter$Box;", depth)
  }
});
ScalaJS.data.scala_xml_PrettyPrinter$Box$ = new ScalaJS.ClassTypeData({
  scala_xml_PrettyPrinter$Box$: 0
}, false, "scala.xml.PrettyPrinter$Box$", ScalaJS.data.scala_runtime_AbstractFunction2, {
  scala_xml_PrettyPrinter$Box$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_PrettyPrinter$Box$.prototype.$classData = ScalaJS.data.scala_xml_PrettyPrinter$Box$;
//@ sourceMappingURL=PrettyPrinter$Box$.js.map
