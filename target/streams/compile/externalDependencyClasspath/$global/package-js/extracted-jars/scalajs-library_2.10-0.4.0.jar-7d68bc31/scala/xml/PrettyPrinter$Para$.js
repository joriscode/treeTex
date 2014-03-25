/** @constructor */
ScalaJS.c.scala_xml_PrettyPrinter$Para$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.$$outer$2 = null
});
ScalaJS.c.scala_xml_PrettyPrinter$Para$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_xml_PrettyPrinter$Para$.prototype.constructor = ScalaJS.c.scala_xml_PrettyPrinter$Para$;
ScalaJS.c.scala_xml_PrettyPrinter$Para$.prototype.toString__T = (function() {
  return "Para"
});
ScalaJS.c.scala_xml_PrettyPrinter$Para$.prototype.apply__T__Lscala_xml_PrettyPrinter$Para = (function(s) {
  return new ScalaJS.c.scala_xml_PrettyPrinter$Para().init___Lscala_xml_PrettyPrinter__T(this.$$outer$2, s)
});
ScalaJS.c.scala_xml_PrettyPrinter$Para$.prototype.unapply__Lscala_xml_PrettyPrinter$Para__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.s__T())
  }
});
ScalaJS.c.scala_xml_PrettyPrinter$Para$.prototype.readResolve__p2__O = (function() {
  return this.$$outer$2.Para__Lscala_xml_PrettyPrinter$Para$()
});
ScalaJS.c.scala_xml_PrettyPrinter$Para$.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lscala_xml_PrettyPrinter$Para(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.scala_xml_PrettyPrinter$Para$.prototype.init___Lscala_xml_PrettyPrinter = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_xml_PrettyPrinter$Para$.prototype.unapply__Lscala_xml_PrettyPrinter$Para__ = (function(x$0) {
  return this.unapply__Lscala_xml_PrettyPrinter$Para__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_PrettyPrinter$Para$.prototype.apply__T__ = (function(s) {
  return this.apply__T__Lscala_xml_PrettyPrinter$Para(s)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_PrettyPrinter$Para$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_PrettyPrinter$Para$.prototype = ScalaJS.c.scala_xml_PrettyPrinter$Para$.prototype;
ScalaJS.is.scala_xml_PrettyPrinter$Para$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_PrettyPrinter$Para$)))
});
ScalaJS.as.scala_xml_PrettyPrinter$Para$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_PrettyPrinter$Para$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.PrettyPrinter$Para")
  }
});
ScalaJS.isArrayOf.scala_xml_PrettyPrinter$Para$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_PrettyPrinter$Para$)))
});
ScalaJS.asArrayOf.scala_xml_PrettyPrinter$Para$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_PrettyPrinter$Para$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.PrettyPrinter$Para;", depth)
  }
});
ScalaJS.data.scala_xml_PrettyPrinter$Para$ = new ScalaJS.ClassTypeData({
  scala_xml_PrettyPrinter$Para$: 0
}, false, "scala.xml.PrettyPrinter$Para$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_xml_PrettyPrinter$Para$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_PrettyPrinter$Para$.prototype.$classData = ScalaJS.data.scala_xml_PrettyPrinter$Para$;
//@ sourceMappingURL=PrettyPrinter$Para$.js.map
