/** @constructor */
ScalaJS.c.java_lang_ref_SoftReference = (function() {
  ScalaJS.c.java_lang_ref_Reference.call(this)
});
ScalaJS.c.java_lang_ref_SoftReference.prototype = new ScalaJS.inheritable.java_lang_ref_Reference();
ScalaJS.c.java_lang_ref_SoftReference.prototype.constructor = ScalaJS.c.java_lang_ref_SoftReference;
ScalaJS.c.java_lang_ref_SoftReference.prototype.init___O__Ljava_lang_ref_ReferenceQueue = (function(referent, queue) {
  ScalaJS.c.java_lang_ref_Reference.prototype.init___O.call(this, referent);
  return this
});
ScalaJS.c.java_lang_ref_SoftReference.prototype.init___O = (function(referent) {
  ScalaJS.c.java_lang_ref_SoftReference.prototype.init___O__Ljava_lang_ref_ReferenceQueue.call(this, referent, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_ref_SoftReference = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_ref_SoftReference.prototype = ScalaJS.c.java_lang_ref_SoftReference.prototype;
ScalaJS.is.java_lang_ref_SoftReference = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_ref_SoftReference)))
});
ScalaJS.as.java_lang_ref_SoftReference = (function(obj) {
  if ((ScalaJS.is.java_lang_ref_SoftReference(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.ref.SoftReference")
  }
});
ScalaJS.isArrayOf.java_lang_ref_SoftReference = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_ref_SoftReference)))
});
ScalaJS.asArrayOf.java_lang_ref_SoftReference = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_ref_SoftReference(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.ref.SoftReference;", depth)
  }
});
ScalaJS.data.java_lang_ref_SoftReference = new ScalaJS.ClassTypeData({
  java_lang_ref_SoftReference: 0
}, false, "java.lang.ref.SoftReference", ScalaJS.data.java_lang_ref_Reference, {
  java_lang_ref_SoftReference: 1,
  java_lang_ref_Reference: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_ref_SoftReference.prototype.$classData = ScalaJS.data.java_lang_ref_SoftReference;
//@ sourceMappingURL=SoftReference.js.map
