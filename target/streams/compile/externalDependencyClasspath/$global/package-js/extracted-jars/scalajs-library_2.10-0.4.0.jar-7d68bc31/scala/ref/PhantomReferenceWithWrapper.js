/** @constructor */
ScalaJS.c.scala_ref_PhantomReferenceWithWrapper = (function() {
  ScalaJS.c.java_lang_ref_PhantomReference.call(this);
  this.wrapper$3 = null
});
ScalaJS.c.scala_ref_PhantomReferenceWithWrapper.prototype = new ScalaJS.inheritable.java_lang_ref_PhantomReference();
ScalaJS.c.scala_ref_PhantomReferenceWithWrapper.prototype.constructor = ScalaJS.c.scala_ref_PhantomReferenceWithWrapper;
ScalaJS.c.scala_ref_PhantomReferenceWithWrapper.prototype.wrapper__Lscala_ref_PhantomReference = (function() {
  return this.wrapper$3
});
ScalaJS.c.scala_ref_PhantomReferenceWithWrapper.prototype.wrapper__Lscala_ref_ReferenceWrapper = (function() {
  return this.wrapper__Lscala_ref_PhantomReference()
});
ScalaJS.c.scala_ref_PhantomReferenceWithWrapper.prototype.init___O__Lscala_ref_ReferenceQueue__Lscala_ref_PhantomReference = (function(value, queue, wrapper) {
  this.wrapper$3 = wrapper;
  ScalaJS.c.java_lang_ref_PhantomReference.prototype.init___O__Ljava_lang_ref_ReferenceQueue.call(this, value, queue.underlying__Ljava_lang_ref_ReferenceQueue());
  return this
});
ScalaJS.c.scala_ref_PhantomReferenceWithWrapper.prototype.wrapper__ = (function() {
  return this.wrapper__Lscala_ref_PhantomReference()
});
/** @constructor */
ScalaJS.inheritable.scala_ref_PhantomReferenceWithWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_ref_PhantomReferenceWithWrapper.prototype = ScalaJS.c.scala_ref_PhantomReferenceWithWrapper.prototype;
ScalaJS.is.scala_ref_PhantomReferenceWithWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_ref_PhantomReferenceWithWrapper)))
});
ScalaJS.as.scala_ref_PhantomReferenceWithWrapper = (function(obj) {
  if ((ScalaJS.is.scala_ref_PhantomReferenceWithWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.ref.PhantomReferenceWithWrapper")
  }
});
ScalaJS.isArrayOf.scala_ref_PhantomReferenceWithWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_ref_PhantomReferenceWithWrapper)))
});
ScalaJS.asArrayOf.scala_ref_PhantomReferenceWithWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_ref_PhantomReferenceWithWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.ref.PhantomReferenceWithWrapper;", depth)
  }
});
ScalaJS.data.scala_ref_PhantomReferenceWithWrapper = new ScalaJS.ClassTypeData({
  scala_ref_PhantomReferenceWithWrapper: 0
}, false, "scala.ref.PhantomReferenceWithWrapper", ScalaJS.data.java_lang_ref_PhantomReference, {
  scala_ref_PhantomReferenceWithWrapper: 1,
  scala_ref_ReferenceWithWrapper: 1,
  java_lang_ref_PhantomReference: 1,
  java_lang_ref_Reference: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_ref_PhantomReferenceWithWrapper.prototype.$classData = ScalaJS.data.scala_ref_PhantomReferenceWithWrapper;
//@ sourceMappingURL=PhantomReferenceWithWrapper.js.map
