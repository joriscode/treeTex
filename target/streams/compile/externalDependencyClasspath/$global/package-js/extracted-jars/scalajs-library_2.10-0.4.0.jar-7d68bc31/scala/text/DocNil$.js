/** @constructor */
ScalaJS.c.scala_text_DocNil$ = (function() {
  ScalaJS.c.scala_text_Document.call(this)
});
ScalaJS.c.scala_text_DocNil$.prototype = new ScalaJS.inheritable.scala_text_Document();
ScalaJS.c.scala_text_DocNil$.prototype.constructor = ScalaJS.c.scala_text_DocNil$;
ScalaJS.c.scala_text_DocNil$.prototype.productPrefix__T = (function() {
  return "DocNil"
});
ScalaJS.c.scala_text_DocNil$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.scala_text_DocNil$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.scala_text_DocNil$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_text_DocNil$.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_text_DocNil$(x$1)
});
ScalaJS.c.scala_text_DocNil$.prototype.hashCode__I = (function() {
  return 2052320729
});
ScalaJS.c.scala_text_DocNil$.prototype.toString__T = (function() {
  return "DocNil"
});
ScalaJS.c.scala_text_DocNil$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_text_DocNil()
});
ScalaJS.c.scala_text_DocNil$.prototype.init___ = (function() {
  ScalaJS.c.scala_text_Document.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_text_DocNil = this;
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_text_DocNil$.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_text_DocNil$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_text_DocNil$.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_text_DocNil$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_text_DocNil$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
/** @constructor */
ScalaJS.inheritable.scala_text_DocNil$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_text_DocNil$.prototype = ScalaJS.c.scala_text_DocNil$.prototype;
ScalaJS.is.scala_text_DocNil$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_text_DocNil$)))
});
ScalaJS.as.scala_text_DocNil$ = (function(obj) {
  if ((ScalaJS.is.scala_text_DocNil$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.text.DocNil")
  }
});
ScalaJS.isArrayOf.scala_text_DocNil$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_text_DocNil$)))
});
ScalaJS.asArrayOf.scala_text_DocNil$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_text_DocNil$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.text.DocNil;", depth)
  }
});
ScalaJS.data.scala_text_DocNil$ = new ScalaJS.ClassTypeData({
  scala_text_DocNil$: 0
}, false, "scala.text.DocNil$", ScalaJS.data.scala_text_Document, {
  scala_text_DocNil$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_text_Document: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_text_DocNil$.prototype.$classData = ScalaJS.data.scala_text_DocNil$;
ScalaJS.moduleInstances.scala_text_DocNil = undefined;
ScalaJS.modules.scala_text_DocNil = (function() {
  if ((!ScalaJS.moduleInstances.scala_text_DocNil)) {
    ScalaJS.moduleInstances.scala_text_DocNil = new ScalaJS.c.scala_text_DocNil$().init___()
  };
  return ScalaJS.moduleInstances.scala_text_DocNil
});
//@ sourceMappingURL=DocNil$.js.map
