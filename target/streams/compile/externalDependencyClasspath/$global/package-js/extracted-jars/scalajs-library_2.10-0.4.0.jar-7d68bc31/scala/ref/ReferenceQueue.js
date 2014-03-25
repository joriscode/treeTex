/** @constructor */
ScalaJS.c.scala_ref_ReferenceQueue = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.underlying$1 = null
});
ScalaJS.c.scala_ref_ReferenceQueue.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_ref_ReferenceQueue.prototype.constructor = ScalaJS.c.scala_ref_ReferenceQueue;
ScalaJS.c.scala_ref_ReferenceQueue.prototype.underlying__Ljava_lang_ref_ReferenceQueue = (function() {
  return this.underlying$1
});
ScalaJS.c.scala_ref_ReferenceQueue.prototype.toString__T = (function() {
  return ScalaJS.objectToString(this.underlying__Ljava_lang_ref_ReferenceQueue())
});
ScalaJS.c.scala_ref_ReferenceQueue.prototype.Wrapper__Ljava_lang_ref_Reference__Lscala_Option = (function(jref) {
  var x1 = jref;
  if (ScalaJS.anyRefEqEq(null, x1)) {
    return ScalaJS.modules.scala_None()
  };
  return new ScalaJS.c.scala_Some().init___O(ScalaJS.as.scala_ref_ReferenceWithWrapper(x1).wrapper__Lscala_ref_ReferenceWrapper())
});
ScalaJS.c.scala_ref_ReferenceQueue.prototype.poll__Lscala_Option = (function() {
  return this.Wrapper__Ljava_lang_ref_Reference__Lscala_Option(this.underlying__Ljava_lang_ref_ReferenceQueue().poll__Ljava_lang_ref_Reference())
});
ScalaJS.c.scala_ref_ReferenceQueue.prototype.remove__Lscala_Option = (function() {
  return this.Wrapper__Ljava_lang_ref_Reference__Lscala_Option(this.underlying__Ljava_lang_ref_ReferenceQueue().remove__Ljava_lang_ref_Reference())
});
ScalaJS.c.scala_ref_ReferenceQueue.prototype.remove__J__Lscala_Option = (function(timeout) {
  return this.Wrapper__Ljava_lang_ref_Reference__Lscala_Option(this.underlying__Ljava_lang_ref_ReferenceQueue().remove__J__Ljava_lang_ref_Reference(timeout))
});
ScalaJS.c.scala_ref_ReferenceQueue.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.underlying$1 = new ScalaJS.c.java_lang_ref_ReferenceQueue().init___();
  return this
});
ScalaJS.c.scala_ref_ReferenceQueue.prototype.remove__J__ = (function(timeout) {
  return this.remove__J__Lscala_Option(timeout)
});
ScalaJS.c.scala_ref_ReferenceQueue.prototype.remove__ = (function() {
  return this.remove__Lscala_Option()
});
ScalaJS.c.scala_ref_ReferenceQueue.prototype.poll__ = (function() {
  return this.poll__Lscala_Option()
});
ScalaJS.c.scala_ref_ReferenceQueue.prototype.Wrapper__Ljava_lang_ref_Reference__ = (function(jref) {
  return this.Wrapper__Ljava_lang_ref_Reference__Lscala_Option(jref)
});
ScalaJS.c.scala_ref_ReferenceQueue.prototype.underlying__ = (function() {
  return this.underlying__Ljava_lang_ref_ReferenceQueue()
});
/** @constructor */
ScalaJS.inheritable.scala_ref_ReferenceQueue = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_ref_ReferenceQueue.prototype = ScalaJS.c.scala_ref_ReferenceQueue.prototype;
ScalaJS.is.scala_ref_ReferenceQueue = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_ref_ReferenceQueue)))
});
ScalaJS.as.scala_ref_ReferenceQueue = (function(obj) {
  if ((ScalaJS.is.scala_ref_ReferenceQueue(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.ref.ReferenceQueue")
  }
});
ScalaJS.isArrayOf.scala_ref_ReferenceQueue = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_ref_ReferenceQueue)))
});
ScalaJS.asArrayOf.scala_ref_ReferenceQueue = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_ref_ReferenceQueue(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.ref.ReferenceQueue;", depth)
  }
});
ScalaJS.data.scala_ref_ReferenceQueue = new ScalaJS.ClassTypeData({
  scala_ref_ReferenceQueue: 0
}, false, "scala.ref.ReferenceQueue", ScalaJS.data.java_lang_Object, {
  scala_ref_ReferenceQueue: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_ref_ReferenceQueue.prototype.$classData = ScalaJS.data.scala_ref_ReferenceQueue;
//@ sourceMappingURL=ReferenceQueue.js.map
