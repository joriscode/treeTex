/** @constructor */
ScalaJS.c.scala_text_Document$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_text_Document$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_text_Document$.prototype.constructor = ScalaJS.c.scala_text_Document$;
ScalaJS.c.scala_text_Document$.prototype.empty__Lscala_text_DocNil$ = (function() {
  return ScalaJS.modules.scala_text_DocNil()
});
ScalaJS.c.scala_text_Document$.prototype.$break__Lscala_text_DocBreak$ = (function() {
  return ScalaJS.modules.scala_text_DocBreak()
});
ScalaJS.c.scala_text_Document$.prototype.text__T__Lscala_text_Document = (function(s) {
  return new ScalaJS.c.scala_text_DocText().init___T(s)
});
ScalaJS.c.scala_text_Document$.prototype.group__Lscala_text_Document__Lscala_text_Document = (function(d) {
  return new ScalaJS.c.scala_text_DocGroup().init___Lscala_text_Document(d)
});
ScalaJS.c.scala_text_Document$.prototype.nest__I__Lscala_text_Document__Lscala_text_Document = (function(i, d) {
  return new ScalaJS.c.scala_text_DocNest().init___I__Lscala_text_Document(i, d)
});
ScalaJS.c.scala_text_Document$.prototype.nest__I__Lscala_text_Document__ = (function(i, d) {
  return this.nest__I__Lscala_text_Document__Lscala_text_Document(i, d)
});
ScalaJS.c.scala_text_Document$.prototype.group__Lscala_text_Document__ = (function(d$2) {
  return this.group__Lscala_text_Document__Lscala_text_Document(d$2)
});
ScalaJS.c.scala_text_Document$.prototype.text__T__ = (function(s) {
  return this.text__T__Lscala_text_Document(s)
});
ScalaJS.c.scala_text_Document$.prototype.$break__ = (function() {
  return this.$break__Lscala_text_DocBreak$()
});
ScalaJS.c.scala_text_Document$.prototype.empty__ = (function() {
  return this.empty__Lscala_text_DocNil$()
});
/** @constructor */
ScalaJS.inheritable.scala_text_Document$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_text_Document$.prototype = ScalaJS.c.scala_text_Document$.prototype;
ScalaJS.is.scala_text_Document$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_text_Document$)))
});
ScalaJS.as.scala_text_Document$ = (function(obj) {
  if ((ScalaJS.is.scala_text_Document$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.text.Document")
  }
});
ScalaJS.isArrayOf.scala_text_Document$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_text_Document$)))
});
ScalaJS.asArrayOf.scala_text_Document$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_text_Document$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.text.Document;", depth)
  }
});
ScalaJS.data.scala_text_Document$ = new ScalaJS.ClassTypeData({
  scala_text_Document$: 0
}, false, "scala.text.Document$", ScalaJS.data.java_lang_Object, {
  scala_text_Document$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_text_Document$.prototype.$classData = ScalaJS.data.scala_text_Document$;
ScalaJS.moduleInstances.scala_text_Document = undefined;
ScalaJS.modules.scala_text_Document = (function() {
  if ((!ScalaJS.moduleInstances.scala_text_Document)) {
    ScalaJS.moduleInstances.scala_text_Document = new ScalaJS.c.scala_text_Document$().init___()
  };
  return ScalaJS.moduleInstances.scala_text_Document
});
//@ sourceMappingURL=Document$.js.map
