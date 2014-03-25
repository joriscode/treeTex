/** @constructor */
ScalaJS.c.scala_text_DocGroup$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.scala_text_DocGroup$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_text_DocGroup$.prototype.constructor = ScalaJS.c.scala_text_DocGroup$;
ScalaJS.c.scala_text_DocGroup$.prototype.toString__T = (function() {
  return "DocGroup"
});
ScalaJS.c.scala_text_DocGroup$.prototype.apply__Lscala_text_Document__Lscala_text_DocGroup = (function(doc) {
  return new ScalaJS.c.scala_text_DocGroup().init___Lscala_text_Document(doc)
});
ScalaJS.c.scala_text_DocGroup$.prototype.unapply__Lscala_text_DocGroup__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.doc__Lscala_text_Document())
  }
});
ScalaJS.c.scala_text_DocGroup$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_text_DocGroup()
});
ScalaJS.c.scala_text_DocGroup$.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_text_Document__Lscala_text_DocGroup(ScalaJS.as.scala_text_Document(v1))
});
ScalaJS.c.scala_text_DocGroup$.prototype.unapply__Lscala_text_DocGroup__ = (function(x$0) {
  return this.unapply__Lscala_text_DocGroup__Lscala_Option(x$0)
});
ScalaJS.c.scala_text_DocGroup$.prototype.apply__Lscala_text_Document__ = (function(doc) {
  return this.apply__Lscala_text_Document__Lscala_text_DocGroup(doc)
});
/** @constructor */
ScalaJS.inheritable.scala_text_DocGroup$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_text_DocGroup$.prototype = ScalaJS.c.scala_text_DocGroup$.prototype;
ScalaJS.is.scala_text_DocGroup$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_text_DocGroup$)))
});
ScalaJS.as.scala_text_DocGroup$ = (function(obj) {
  if ((ScalaJS.is.scala_text_DocGroup$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.text.DocGroup")
  }
});
ScalaJS.isArrayOf.scala_text_DocGroup$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_text_DocGroup$)))
});
ScalaJS.asArrayOf.scala_text_DocGroup$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_text_DocGroup$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.text.DocGroup;", depth)
  }
});
ScalaJS.data.scala_text_DocGroup$ = new ScalaJS.ClassTypeData({
  scala_text_DocGroup$: 0
}, false, "scala.text.DocGroup$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_text_DocGroup$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_text_DocGroup$.prototype.$classData = ScalaJS.data.scala_text_DocGroup$;
ScalaJS.moduleInstances.scala_text_DocGroup = undefined;
ScalaJS.modules.scala_text_DocGroup = (function() {
  if ((!ScalaJS.moduleInstances.scala_text_DocGroup)) {
    ScalaJS.moduleInstances.scala_text_DocGroup = new ScalaJS.c.scala_text_DocGroup$().init___()
  };
  return ScalaJS.moduleInstances.scala_text_DocGroup
});
//@ sourceMappingURL=DocGroup$.js.map
