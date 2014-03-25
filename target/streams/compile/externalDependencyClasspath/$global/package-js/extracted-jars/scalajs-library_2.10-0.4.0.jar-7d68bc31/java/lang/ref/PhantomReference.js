/** @constructor */
ScalaJS.c.java_lang_ref_PhantomReference = (function() {
  ScalaJS.c.java_lang_ref_Reference.call(this)
});
ScalaJS.c.java_lang_ref_PhantomReference.prototype = new ScalaJS.inheritable.java_lang_ref_Reference();
ScalaJS.c.java_lang_ref_PhantomReference.prototype.constructor = ScalaJS.c.java_lang_ref_PhantomReference;
ScalaJS.c.java_lang_ref_PhantomReference.prototype.get__O = (function() {
  return null
});
ScalaJS.c.java_lang_ref_PhantomReference.prototype.init___O__Ljava_lang_ref_ReferenceQueue = (function(referent, queue) {
  ScalaJS.c.java_lang_ref_Reference.prototype.init___O.call(this, referent);
  return this
});
ScalaJS.c.java_lang_ref_PhantomReference.prototype.init___O = (function(referent) {
  ScalaJS.c.java_lang_ref_PhantomReference.prototype.init___O__Ljava_lang_ref_ReferenceQueue.call(this, referent, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_ref_PhantomReference = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_ref_PhantomReference.prototype = ScalaJS.c.java_lang_ref_PhantomReference.prototype;
ScalaJS.is.java_lang_ref_PhantomReference = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_ref_PhantomReference)))
});
ScalaJS.as.java_lang_ref_PhantomReference = (function(obj) {
  if ((ScalaJS.is.java_lang_ref_PhantomReference(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.ref.PhantomReference")
  }
});
ScalaJS.isArrayOf.java_lang_ref_PhantomReference = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_ref_PhantomReference)))
});
ScalaJS.asArrayOf.java_lang_ref_PhantomReference = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_ref_PhantomReference(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.ref.PhantomReference;", depth)
  }
});
ScalaJS.data.java_lang_ref_PhantomReference = new ScalaJS.ClassTypeData({
  java_lang_ref_PhantomReference: 0
}, false, "java.lang.ref.PhantomReference", ScalaJS.data.java_lang_ref_Reference, {
  java_lang_ref_PhantomReference: 1,
  java_lang_ref_Reference: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_ref_PhantomReference.prototype.$classData = ScalaJS.data.java_lang_ref_PhantomReference;
//@ sourceMappingURL=PhantomReference.js.map
