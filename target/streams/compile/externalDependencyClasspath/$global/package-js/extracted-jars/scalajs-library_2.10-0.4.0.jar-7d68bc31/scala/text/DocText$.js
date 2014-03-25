/** @constructor */
ScalaJS.c.scala_text_DocText$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.scala_text_DocText$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_text_DocText$.prototype.constructor = ScalaJS.c.scala_text_DocText$;
ScalaJS.c.scala_text_DocText$.prototype.toString__T = (function() {
  return "DocText"
});
ScalaJS.c.scala_text_DocText$.prototype.apply__T__Lscala_text_DocText = (function(txt) {
  return new ScalaJS.c.scala_text_DocText().init___T(txt)
});
ScalaJS.c.scala_text_DocText$.prototype.unapply__Lscala_text_DocText__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.txt__T())
  }
});
ScalaJS.c.scala_text_DocText$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_text_DocText()
});
ScalaJS.c.scala_text_DocText$.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lscala_text_DocText(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.scala_text_DocText$.prototype.unapply__Lscala_text_DocText__ = (function(x$0) {
  return this.unapply__Lscala_text_DocText__Lscala_Option(x$0)
});
ScalaJS.c.scala_text_DocText$.prototype.apply__T__ = (function(txt) {
  return this.apply__T__Lscala_text_DocText(txt)
});
/** @constructor */
ScalaJS.inheritable.scala_text_DocText$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_text_DocText$.prototype = ScalaJS.c.scala_text_DocText$.prototype;
ScalaJS.is.scala_text_DocText$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_text_DocText$)))
});
ScalaJS.as.scala_text_DocText$ = (function(obj) {
  if ((ScalaJS.is.scala_text_DocText$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.text.DocText")
  }
});
ScalaJS.isArrayOf.scala_text_DocText$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_text_DocText$)))
});
ScalaJS.asArrayOf.scala_text_DocText$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_text_DocText$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.text.DocText;", depth)
  }
});
ScalaJS.data.scala_text_DocText$ = new ScalaJS.ClassTypeData({
  scala_text_DocText$: 0
}, false, "scala.text.DocText$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_text_DocText$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_text_DocText$.prototype.$classData = ScalaJS.data.scala_text_DocText$;
ScalaJS.moduleInstances.scala_text_DocText = undefined;
ScalaJS.modules.scala_text_DocText = (function() {
  if ((!ScalaJS.moduleInstances.scala_text_DocText)) {
    ScalaJS.moduleInstances.scala_text_DocText = new ScalaJS.c.scala_text_DocText$().init___()
  };
  return ScalaJS.moduleInstances.scala_text_DocText
});
//@ sourceMappingURL=DocText$.js.map
