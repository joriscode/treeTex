/** @constructor */
ScalaJS.c.scala_text_DocBreak$ = (function() {
  ScalaJS.c.scala_text_Document.call(this)
});
ScalaJS.c.scala_text_DocBreak$.prototype = new ScalaJS.inheritable.scala_text_Document();
ScalaJS.c.scala_text_DocBreak$.prototype.constructor = ScalaJS.c.scala_text_DocBreak$;
ScalaJS.c.scala_text_DocBreak$.prototype.productPrefix__T = (function() {
  return "DocBreak"
});
ScalaJS.c.scala_text_DocBreak$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.scala_text_DocBreak$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.scala_text_DocBreak$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_text_DocBreak$.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_text_DocBreak$(x$1)
});
ScalaJS.c.scala_text_DocBreak$.prototype.hashCode__I = (function() {
  return 879413959
});
ScalaJS.c.scala_text_DocBreak$.prototype.toString__T = (function() {
  return "DocBreak"
});
ScalaJS.c.scala_text_DocBreak$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_text_DocBreak()
});
ScalaJS.c.scala_text_DocBreak$.prototype.init___ = (function() {
  ScalaJS.c.scala_text_Document.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_text_DocBreak = this;
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_text_DocBreak$.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_text_DocBreak$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_text_DocBreak$.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_text_DocBreak$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_text_DocBreak$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
/** @constructor */
ScalaJS.inheritable.scala_text_DocBreak$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_text_DocBreak$.prototype = ScalaJS.c.scala_text_DocBreak$.prototype;
ScalaJS.is.scala_text_DocBreak$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_text_DocBreak$)))
});
ScalaJS.as.scala_text_DocBreak$ = (function(obj) {
  if ((ScalaJS.is.scala_text_DocBreak$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.text.DocBreak")
  }
});
ScalaJS.isArrayOf.scala_text_DocBreak$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_text_DocBreak$)))
});
ScalaJS.asArrayOf.scala_text_DocBreak$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_text_DocBreak$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.text.DocBreak;", depth)
  }
});
ScalaJS.data.scala_text_DocBreak$ = new ScalaJS.ClassTypeData({
  scala_text_DocBreak$: 0
}, false, "scala.text.DocBreak$", ScalaJS.data.scala_text_Document, {
  scala_text_DocBreak$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_text_Document: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_text_DocBreak$.prototype.$classData = ScalaJS.data.scala_text_DocBreak$;
ScalaJS.moduleInstances.scala_text_DocBreak = undefined;
ScalaJS.modules.scala_text_DocBreak = (function() {
  if ((!ScalaJS.moduleInstances.scala_text_DocBreak)) {
    ScalaJS.moduleInstances.scala_text_DocBreak = new ScalaJS.c.scala_text_DocBreak$().init___()
  };
  return ScalaJS.moduleInstances.scala_text_DocBreak
});
//@ sourceMappingURL=DocBreak$.js.map
