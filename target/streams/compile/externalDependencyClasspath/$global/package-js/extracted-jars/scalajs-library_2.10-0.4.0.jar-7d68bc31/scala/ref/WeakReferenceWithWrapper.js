/** @constructor */
ScalaJS.c.scala_ref_WeakReferenceWithWrapper = (function() {
  ScalaJS.c.java_lang_ref_WeakReference.call(this);
  this.wrapper$3 = null
});
ScalaJS.c.scala_ref_WeakReferenceWithWrapper.prototype = new ScalaJS.inheritable.java_lang_ref_WeakReference();
ScalaJS.c.scala_ref_WeakReferenceWithWrapper.prototype.constructor = ScalaJS.c.scala_ref_WeakReferenceWithWrapper;
ScalaJS.c.scala_ref_WeakReferenceWithWrapper.prototype.wrapper__Lscala_ref_WeakReference = (function() {
  return this.wrapper$3
});
ScalaJS.c.scala_ref_WeakReferenceWithWrapper.prototype.wrapper__Lscala_ref_ReferenceWrapper = (function() {
  return this.wrapper__Lscala_ref_WeakReference()
});
ScalaJS.c.scala_ref_WeakReferenceWithWrapper.prototype.init___O__Lscala_ref_ReferenceQueue__Lscala_ref_WeakReference = (function(value, queue, wrapper) {
  this.wrapper$3 = wrapper;
  var jsx$3 = ScalaJS.c.java_lang_ref_WeakReference.prototype.init___O__Ljava_lang_ref_ReferenceQueue;
  var jsx$2 = value;
  if (ScalaJS.anyRefEqEq(queue, null)) {
    var jsx$1 = null
  } else {
    var jsx$1 = queue.underlying__Ljava_lang_ref_ReferenceQueue()
  };
  jsx$3.call(this, jsx$2, jsx$1);
  return this
});
ScalaJS.c.scala_ref_WeakReferenceWithWrapper.prototype.wrapper__ = (function() {
  return this.wrapper__Lscala_ref_WeakReference()
});
/** @constructor */
ScalaJS.inheritable.scala_ref_WeakReferenceWithWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_ref_WeakReferenceWithWrapper.prototype = ScalaJS.c.scala_ref_WeakReferenceWithWrapper.prototype;
ScalaJS.is.scala_ref_WeakReferenceWithWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_ref_WeakReferenceWithWrapper)))
});
ScalaJS.as.scala_ref_WeakReferenceWithWrapper = (function(obj) {
  if ((ScalaJS.is.scala_ref_WeakReferenceWithWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.ref.WeakReferenceWithWrapper")
  }
});
ScalaJS.isArrayOf.scala_ref_WeakReferenceWithWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_ref_WeakReferenceWithWrapper)))
});
ScalaJS.asArrayOf.scala_ref_WeakReferenceWithWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_ref_WeakReferenceWithWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.ref.WeakReferenceWithWrapper;", depth)
  }
});
ScalaJS.data.scala_ref_WeakReferenceWithWrapper = new ScalaJS.ClassTypeData({
  scala_ref_WeakReferenceWithWrapper: 0
}, false, "scala.ref.WeakReferenceWithWrapper", ScalaJS.data.java_lang_ref_WeakReference, {
  scala_ref_WeakReferenceWithWrapper: 1,
  scala_ref_ReferenceWithWrapper: 1,
  java_lang_ref_WeakReference: 1,
  java_lang_ref_Reference: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_ref_WeakReferenceWithWrapper.prototype.$classData = ScalaJS.data.scala_ref_WeakReferenceWithWrapper;
//@ sourceMappingURL=WeakReferenceWithWrapper.js.map
