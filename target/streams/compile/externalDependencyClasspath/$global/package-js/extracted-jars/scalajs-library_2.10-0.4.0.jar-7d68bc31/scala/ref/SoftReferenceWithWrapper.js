/** @constructor */
ScalaJS.c.scala_ref_SoftReferenceWithWrapper = (function() {
  ScalaJS.c.java_lang_ref_SoftReference.call(this);
  this.wrapper$3 = null
});
ScalaJS.c.scala_ref_SoftReferenceWithWrapper.prototype = new ScalaJS.inheritable.java_lang_ref_SoftReference();
ScalaJS.c.scala_ref_SoftReferenceWithWrapper.prototype.constructor = ScalaJS.c.scala_ref_SoftReferenceWithWrapper;
ScalaJS.c.scala_ref_SoftReferenceWithWrapper.prototype.wrapper__Lscala_ref_SoftReference = (function() {
  return this.wrapper$3
});
ScalaJS.c.scala_ref_SoftReferenceWithWrapper.prototype.wrapper__Lscala_ref_ReferenceWrapper = (function() {
  return this.wrapper__Lscala_ref_SoftReference()
});
ScalaJS.c.scala_ref_SoftReferenceWithWrapper.prototype.init___O__Lscala_ref_ReferenceQueue__Lscala_ref_SoftReference = (function(value, queue, wrapper) {
  this.wrapper$3 = wrapper;
  var jsx$3 = ScalaJS.c.java_lang_ref_SoftReference.prototype.init___O__Ljava_lang_ref_ReferenceQueue;
  var jsx$2 = value;
  if (ScalaJS.anyRefEqEq(queue, null)) {
    var jsx$1 = null
  } else {
    var jsx$1 = queue.underlying__Ljava_lang_ref_ReferenceQueue()
  };
  jsx$3.call(this, jsx$2, jsx$1);
  return this
});
ScalaJS.c.scala_ref_SoftReferenceWithWrapper.prototype.wrapper__ = (function() {
  return this.wrapper__Lscala_ref_SoftReference()
});
/** @constructor */
ScalaJS.inheritable.scala_ref_SoftReferenceWithWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_ref_SoftReferenceWithWrapper.prototype = ScalaJS.c.scala_ref_SoftReferenceWithWrapper.prototype;
ScalaJS.is.scala_ref_SoftReferenceWithWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_ref_SoftReferenceWithWrapper)))
});
ScalaJS.as.scala_ref_SoftReferenceWithWrapper = (function(obj) {
  if ((ScalaJS.is.scala_ref_SoftReferenceWithWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.ref.SoftReferenceWithWrapper")
  }
});
ScalaJS.isArrayOf.scala_ref_SoftReferenceWithWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_ref_SoftReferenceWithWrapper)))
});
ScalaJS.asArrayOf.scala_ref_SoftReferenceWithWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_ref_SoftReferenceWithWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.ref.SoftReferenceWithWrapper;", depth)
  }
});
ScalaJS.data.scala_ref_SoftReferenceWithWrapper = new ScalaJS.ClassTypeData({
  scala_ref_SoftReferenceWithWrapper: 0
}, false, "scala.ref.SoftReferenceWithWrapper", ScalaJS.data.java_lang_ref_SoftReference, {
  scala_ref_SoftReferenceWithWrapper: 1,
  scala_ref_ReferenceWithWrapper: 1,
  java_lang_ref_SoftReference: 1,
  java_lang_ref_Reference: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_ref_SoftReferenceWithWrapper.prototype.$classData = ScalaJS.data.scala_ref_SoftReferenceWithWrapper;
//@ sourceMappingURL=SoftReferenceWithWrapper.js.map
