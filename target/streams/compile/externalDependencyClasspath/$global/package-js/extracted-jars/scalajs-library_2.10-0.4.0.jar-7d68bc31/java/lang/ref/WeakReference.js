/** @constructor */
ScalaJS.c.java_lang_ref_WeakReference = (function() {
  ScalaJS.c.java_lang_ref_Reference.call(this)
});
ScalaJS.c.java_lang_ref_WeakReference.prototype = new ScalaJS.inheritable.java_lang_ref_Reference();
ScalaJS.c.java_lang_ref_WeakReference.prototype.constructor = ScalaJS.c.java_lang_ref_WeakReference;
ScalaJS.c.java_lang_ref_WeakReference.prototype.init___O__Ljava_lang_ref_ReferenceQueue = (function(referent, queue) {
  ScalaJS.c.java_lang_ref_Reference.prototype.init___O.call(this, referent);
  return this
});
ScalaJS.c.java_lang_ref_WeakReference.prototype.init___O = (function(referent) {
  ScalaJS.c.java_lang_ref_WeakReference.prototype.init___O__Ljava_lang_ref_ReferenceQueue.call(this, referent, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_ref_WeakReference = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_ref_WeakReference.prototype = ScalaJS.c.java_lang_ref_WeakReference.prototype;
ScalaJS.is.java_lang_ref_WeakReference = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_ref_WeakReference)))
});
ScalaJS.as.java_lang_ref_WeakReference = (function(obj) {
  if ((ScalaJS.is.java_lang_ref_WeakReference(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.ref.WeakReference")
  }
});
ScalaJS.isArrayOf.java_lang_ref_WeakReference = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_ref_WeakReference)))
});
ScalaJS.asArrayOf.java_lang_ref_WeakReference = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_ref_WeakReference(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.ref.WeakReference;", depth)
  }
});
ScalaJS.data.java_lang_ref_WeakReference = new ScalaJS.ClassTypeData({
  java_lang_ref_WeakReference: 0
}, false, "java.lang.ref.WeakReference", ScalaJS.data.java_lang_ref_Reference, {
  java_lang_ref_WeakReference: 1,
  java_lang_ref_Reference: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_ref_WeakReference.prototype.$classData = ScalaJS.data.java_lang_ref_WeakReference;
//@ sourceMappingURL=WeakReference.js.map
