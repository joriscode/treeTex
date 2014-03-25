/** @constructor */
ScalaJS.c.scala_collection_generic_DefaultSignalling = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.scala$collection$generic$VolatileAbort$$abortflag$1 = false
});
ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype.constructor = ScalaJS.c.scala_collection_generic_DefaultSignalling;
ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype.scala$collection$generic$VolatileAbort$$abortflag__Z = (function() {
  return this.scala$collection$generic$VolatileAbort$$abortflag$1
});
ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype.scala$collection$generic$VolatileAbort$$abortflag$und$eq__Z__V = (function(x$1) {
  this.scala$collection$generic$VolatileAbort$$abortflag$1 = x$1
});
ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype.isAborted__Z = (function() {
  return ScalaJS.impls.scala_collection_generic_VolatileAbort$class__isAborted__Lscala_collection_generic_VolatileAbort__Z(this)
});
ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype.abort__V = (function() {
  ScalaJS.impls.scala_collection_generic_VolatileAbort$class__abort__Lscala_collection_generic_VolatileAbort__V(this)
});
ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype.indexFlag__I = (function() {
  return -1
});
ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype.setIndexFlag__I__V = (function(f) {
  /*<skip>*/
});
ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype.setIndexFlagIfGreater__I__V = (function(f) {
  /*<skip>*/
});
ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype.setIndexFlagIfLesser__I__V = (function(f) {
  /*<skip>*/
});
ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype.tag__I = (function() {
  return -1
});
ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_generic_VolatileAbort$class__$init$__Lscala_collection_generic_VolatileAbort__V(this);
  return this
});
ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype.abort__ = (function() {
  return ScalaJS.bV(this.abort__V())
});
ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype.isAborted__ = (function() {
  return ScalaJS.bZ(this.isAborted__Z())
});
ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype.scala$collection$generic$VolatileAbort$$abortflag$und$eq__Z__ = (function(x$1) {
  return ScalaJS.bV(this.scala$collection$generic$VolatileAbort$$abortflag$und$eq__Z__V(x$1))
});
ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype.scala$collection$generic$VolatileAbort$$abortflag__ = (function() {
  return ScalaJS.bZ(this.scala$collection$generic$VolatileAbort$$abortflag__Z())
});
ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype.tag__ = (function() {
  return ScalaJS.bI(this.tag__I())
});
ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype.setIndexFlagIfLesser__I__ = (function(f) {
  return ScalaJS.bV(this.setIndexFlagIfLesser__I__V(f))
});
ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype.setIndexFlagIfGreater__I__ = (function(f$2) {
  return ScalaJS.bV(this.setIndexFlagIfGreater__I__V(f$2))
});
ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype.setIndexFlag__I__ = (function(f$3) {
  return ScalaJS.bV(this.setIndexFlag__I__V(f$3))
});
ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype.indexFlag__ = (function() {
  return ScalaJS.bI(this.indexFlag__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_DefaultSignalling = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_DefaultSignalling.prototype = ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype;
ScalaJS.is.scala_collection_generic_DefaultSignalling = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_DefaultSignalling)))
});
ScalaJS.as.scala_collection_generic_DefaultSignalling = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_DefaultSignalling(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.DefaultSignalling")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_DefaultSignalling = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_DefaultSignalling)))
});
ScalaJS.asArrayOf.scala_collection_generic_DefaultSignalling = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_DefaultSignalling(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.DefaultSignalling;", depth)
  }
});
ScalaJS.data.scala_collection_generic_DefaultSignalling = new ScalaJS.ClassTypeData({
  scala_collection_generic_DefaultSignalling: 0
}, false, "scala.collection.generic.DefaultSignalling", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_DefaultSignalling: 1,
  scala_collection_generic_VolatileAbort: 1,
  scala_collection_generic_Signalling: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_DefaultSignalling.prototype.$classData = ScalaJS.data.scala_collection_generic_DefaultSignalling;
//@ sourceMappingURL=DefaultSignalling.js.map
