/** @constructor */
ScalaJS.c.scala_text_DocCons$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this)
});
ScalaJS.c.scala_text_DocCons$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.scala_text_DocCons$.prototype.constructor = ScalaJS.c.scala_text_DocCons$;
ScalaJS.c.scala_text_DocCons$.prototype.toString__T = (function() {
  return "DocCons"
});
ScalaJS.c.scala_text_DocCons$.prototype.apply__Lscala_text_Document__Lscala_text_Document__Lscala_text_DocCons = (function(hd, tl) {
  return new ScalaJS.c.scala_text_DocCons().init___Lscala_text_Document__Lscala_text_Document(hd, tl)
});
ScalaJS.c.scala_text_DocCons$.prototype.unapply__Lscala_text_DocCons__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.hd__Lscala_text_Document(), x$0.tl__Lscala_text_Document()))
  }
});
ScalaJS.c.scala_text_DocCons$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_text_DocCons()
});
ScalaJS.c.scala_text_DocCons$.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__Lscala_text_Document__Lscala_text_Document__Lscala_text_DocCons(ScalaJS.as.scala_text_Document(v1), ScalaJS.as.scala_text_Document(v2))
});
ScalaJS.c.scala_text_DocCons$.prototype.unapply__Lscala_text_DocCons__ = (function(x$0) {
  return this.unapply__Lscala_text_DocCons__Lscala_Option(x$0)
});
ScalaJS.c.scala_text_DocCons$.prototype.apply__Lscala_text_Document__Lscala_text_Document__ = (function(hd, tl) {
  return this.apply__Lscala_text_Document__Lscala_text_Document__Lscala_text_DocCons(hd, tl)
});
/** @constructor */
ScalaJS.inheritable.scala_text_DocCons$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_text_DocCons$.prototype = ScalaJS.c.scala_text_DocCons$.prototype;
ScalaJS.is.scala_text_DocCons$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_text_DocCons$)))
});
ScalaJS.as.scala_text_DocCons$ = (function(obj) {
  if ((ScalaJS.is.scala_text_DocCons$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.text.DocCons")
  }
});
ScalaJS.isArrayOf.scala_text_DocCons$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_text_DocCons$)))
});
ScalaJS.asArrayOf.scala_text_DocCons$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_text_DocCons$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.text.DocCons;", depth)
  }
});
ScalaJS.data.scala_text_DocCons$ = new ScalaJS.ClassTypeData({
  scala_text_DocCons$: 0
}, false, "scala.text.DocCons$", ScalaJS.data.scala_runtime_AbstractFunction2, {
  scala_text_DocCons$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_text_DocCons$.prototype.$classData = ScalaJS.data.scala_text_DocCons$;
ScalaJS.moduleInstances.scala_text_DocCons = undefined;
ScalaJS.modules.scala_text_DocCons = (function() {
  if ((!ScalaJS.moduleInstances.scala_text_DocCons)) {
    ScalaJS.moduleInstances.scala_text_DocCons = new ScalaJS.c.scala_text_DocCons$().init___()
  };
  return ScalaJS.moduleInstances.scala_text_DocCons
});
//@ sourceMappingURL=DocCons$.js.map
