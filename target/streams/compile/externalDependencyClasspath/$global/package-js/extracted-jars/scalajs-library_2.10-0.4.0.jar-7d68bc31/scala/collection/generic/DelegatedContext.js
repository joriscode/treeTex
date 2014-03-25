/** @constructor */
ScalaJS.c.scala_collection_generic_DelegatedContext = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.signalDelegate$1 = null
});
ScalaJS.c.scala_collection_generic_DelegatedContext.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_DelegatedContext.prototype.constructor = ScalaJS.c.scala_collection_generic_DelegatedContext;
ScalaJS.c.scala_collection_generic_DelegatedContext.prototype.isAborted__Z = (function() {
  return ScalaJS.impls.scala_collection_generic_DelegatedSignalling$class__isAborted__Lscala_collection_generic_DelegatedSignalling__Z(this)
});
ScalaJS.c.scala_collection_generic_DelegatedContext.prototype.abort__V = (function() {
  ScalaJS.impls.scala_collection_generic_DelegatedSignalling$class__abort__Lscala_collection_generic_DelegatedSignalling__V(this)
});
ScalaJS.c.scala_collection_generic_DelegatedContext.prototype.indexFlag__I = (function() {
  return ScalaJS.impls.scala_collection_generic_DelegatedSignalling$class__indexFlag__Lscala_collection_generic_DelegatedSignalling__I(this)
});
ScalaJS.c.scala_collection_generic_DelegatedContext.prototype.setIndexFlag__I__V = (function(f) {
  ScalaJS.impls.scala_collection_generic_DelegatedSignalling$class__setIndexFlag__Lscala_collection_generic_DelegatedSignalling__I__V(this, f)
});
ScalaJS.c.scala_collection_generic_DelegatedContext.prototype.setIndexFlagIfGreater__I__V = (function(f) {
  ScalaJS.impls.scala_collection_generic_DelegatedSignalling$class__setIndexFlagIfGreater__Lscala_collection_generic_DelegatedSignalling__I__V(this, f)
});
ScalaJS.c.scala_collection_generic_DelegatedContext.prototype.setIndexFlagIfLesser__I__V = (function(f) {
  ScalaJS.impls.scala_collection_generic_DelegatedSignalling$class__setIndexFlagIfLesser__Lscala_collection_generic_DelegatedSignalling__I__V(this, f)
});
ScalaJS.c.scala_collection_generic_DelegatedContext.prototype.tag__I = (function() {
  return ScalaJS.impls.scala_collection_generic_DelegatedSignalling$class__tag__Lscala_collection_generic_DelegatedSignalling__I(this)
});
ScalaJS.c.scala_collection_generic_DelegatedContext.prototype.signalDelegate__Lscala_collection_generic_Signalling = (function() {
  return this.signalDelegate$1
});
ScalaJS.c.scala_collection_generic_DelegatedContext.prototype.signalDelegate$und$eq__Lscala_collection_generic_Signalling__V = (function(x$1) {
  this.signalDelegate$1 = x$1
});
ScalaJS.c.scala_collection_generic_DelegatedContext.prototype.init___Lscala_collection_generic_Signalling = (function(signalDelegate) {
  this.signalDelegate$1 = signalDelegate;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_generic_DelegatedSignalling$class__$init$__Lscala_collection_generic_DelegatedSignalling__V(this);
  return this
});
ScalaJS.c.scala_collection_generic_DelegatedContext.prototype.tag__ = (function() {
  return ScalaJS.bI(this.tag__I())
});
ScalaJS.c.scala_collection_generic_DelegatedContext.prototype.setIndexFlagIfLesser__I__ = (function(f) {
  return ScalaJS.bV(this.setIndexFlagIfLesser__I__V(f))
});
ScalaJS.c.scala_collection_generic_DelegatedContext.prototype.setIndexFlagIfGreater__I__ = (function(f$2) {
  return ScalaJS.bV(this.setIndexFlagIfGreater__I__V(f$2))
});
ScalaJS.c.scala_collection_generic_DelegatedContext.prototype.setIndexFlag__I__ = (function(f$3) {
  return ScalaJS.bV(this.setIndexFlag__I__V(f$3))
});
ScalaJS.c.scala_collection_generic_DelegatedContext.prototype.indexFlag__ = (function() {
  return ScalaJS.bI(this.indexFlag__I())
});
ScalaJS.c.scala_collection_generic_DelegatedContext.prototype.abort__ = (function() {
  return ScalaJS.bV(this.abort__V())
});
ScalaJS.c.scala_collection_generic_DelegatedContext.prototype.isAborted__ = (function() {
  return ScalaJS.bZ(this.isAborted__Z())
});
ScalaJS.c.scala_collection_generic_DelegatedContext.prototype.signalDelegate$und$eq__Lscala_collection_generic_Signalling__ = (function(x$1) {
  return ScalaJS.bV(this.signalDelegate$und$eq__Lscala_collection_generic_Signalling__V(x$1))
});
ScalaJS.c.scala_collection_generic_DelegatedContext.prototype.signalDelegate__ = (function() {
  return this.signalDelegate__Lscala_collection_generic_Signalling()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_DelegatedContext = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_DelegatedContext.prototype = ScalaJS.c.scala_collection_generic_DelegatedContext.prototype;
ScalaJS.is.scala_collection_generic_DelegatedContext = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_DelegatedContext)))
});
ScalaJS.as.scala_collection_generic_DelegatedContext = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_DelegatedContext(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.DelegatedContext")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_DelegatedContext = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_DelegatedContext)))
});
ScalaJS.asArrayOf.scala_collection_generic_DelegatedContext = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_DelegatedContext(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.DelegatedContext;", depth)
  }
});
ScalaJS.data.scala_collection_generic_DelegatedContext = new ScalaJS.ClassTypeData({
  scala_collection_generic_DelegatedContext: 0
}, false, "scala.collection.generic.DelegatedContext", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_DelegatedContext: 1,
  scala_collection_generic_DelegatedSignalling: 1,
  scala_collection_generic_Signalling: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_DelegatedContext.prototype.$classData = ScalaJS.data.scala_collection_generic_DelegatedContext;
//@ sourceMappingURL=DelegatedContext.js.map
