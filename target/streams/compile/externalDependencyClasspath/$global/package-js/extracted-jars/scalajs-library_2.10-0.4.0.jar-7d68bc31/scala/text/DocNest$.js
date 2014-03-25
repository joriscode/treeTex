/** @constructor */
ScalaJS.c.scala_text_DocNest$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this)
});
ScalaJS.c.scala_text_DocNest$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.scala_text_DocNest$.prototype.constructor = ScalaJS.c.scala_text_DocNest$;
ScalaJS.c.scala_text_DocNest$.prototype.toString__T = (function() {
  return "DocNest"
});
ScalaJS.c.scala_text_DocNest$.prototype.apply__I__Lscala_text_Document__Lscala_text_DocNest = (function(indent, doc) {
  return new ScalaJS.c.scala_text_DocNest().init___I__Lscala_text_Document(indent, doc)
});
ScalaJS.c.scala_text_DocNest$.prototype.unapply__Lscala_text_DocNest__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.bI(x$0.indent__I()), x$0.doc__Lscala_text_Document()))
  }
});
ScalaJS.c.scala_text_DocNest$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_text_DocNest()
});
ScalaJS.c.scala_text_DocNest$.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__I__Lscala_text_Document__Lscala_text_DocNest(ScalaJS.uI(v1), ScalaJS.as.scala_text_Document(v2))
});
ScalaJS.c.scala_text_DocNest$.prototype.unapply__Lscala_text_DocNest__ = (function(x$0) {
  return this.unapply__Lscala_text_DocNest__Lscala_Option(x$0)
});
ScalaJS.c.scala_text_DocNest$.prototype.apply__I__Lscala_text_Document__ = (function(indent, doc) {
  return this.apply__I__Lscala_text_Document__Lscala_text_DocNest(indent, doc)
});
/** @constructor */
ScalaJS.inheritable.scala_text_DocNest$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_text_DocNest$.prototype = ScalaJS.c.scala_text_DocNest$.prototype;
ScalaJS.is.scala_text_DocNest$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_text_DocNest$)))
});
ScalaJS.as.scala_text_DocNest$ = (function(obj) {
  if ((ScalaJS.is.scala_text_DocNest$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.text.DocNest")
  }
});
ScalaJS.isArrayOf.scala_text_DocNest$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_text_DocNest$)))
});
ScalaJS.asArrayOf.scala_text_DocNest$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_text_DocNest$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.text.DocNest;", depth)
  }
});
ScalaJS.data.scala_text_DocNest$ = new ScalaJS.ClassTypeData({
  scala_text_DocNest$: 0
}, false, "scala.text.DocNest$", ScalaJS.data.scala_runtime_AbstractFunction2, {
  scala_text_DocNest$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_text_DocNest$.prototype.$classData = ScalaJS.data.scala_text_DocNest$;
ScalaJS.moduleInstances.scala_text_DocNest = undefined;
ScalaJS.modules.scala_text_DocNest = (function() {
  if ((!ScalaJS.moduleInstances.scala_text_DocNest)) {
    ScalaJS.moduleInstances.scala_text_DocNest = new ScalaJS.c.scala_text_DocNest$().init___()
  };
  return ScalaJS.moduleInstances.scala_text_DocNest
});
//@ sourceMappingURL=DocNest$.js.map
