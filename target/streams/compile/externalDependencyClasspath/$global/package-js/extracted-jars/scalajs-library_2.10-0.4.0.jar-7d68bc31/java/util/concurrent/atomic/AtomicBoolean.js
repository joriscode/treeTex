/** @constructor */
ScalaJS.c.java_util_concurrent_atomic_AtomicBoolean = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.value$1 = false
});
ScalaJS.c.java_util_concurrent_atomic_AtomicBoolean.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_util_concurrent_atomic_AtomicBoolean.prototype.constructor = ScalaJS.c.java_util_concurrent_atomic_AtomicBoolean;
ScalaJS.c.java_util_concurrent_atomic_AtomicBoolean.prototype.get__Z = (function() {
  return this.value$1
});
ScalaJS.c.java_util_concurrent_atomic_AtomicBoolean.prototype.set__Z__V = (function(newValue) {
  this.value$1 = newValue
});
ScalaJS.c.java_util_concurrent_atomic_AtomicBoolean.prototype.lazySet__Z__V = (function(newValue) {
  this.set__Z__V(newValue)
});
ScalaJS.c.java_util_concurrent_atomic_AtomicBoolean.prototype.compareAndSet__Z__Z__Z = (function(expect, newValue) {
  if ((expect !== this.value$1)) {
    return false
  } else {
    this.value$1 = newValue;
    return true
  }
});
ScalaJS.c.java_util_concurrent_atomic_AtomicBoolean.prototype.weakCompareAndSet__Z__Z__Z = (function(expect, newValue) {
  return this.compareAndSet__Z__Z__Z(expect, newValue)
});
ScalaJS.c.java_util_concurrent_atomic_AtomicBoolean.prototype.getAndSet__Z__Z = (function(newValue) {
  var old = this.value$1;
  this.value$1 = newValue;
  return old
});
ScalaJS.c.java_util_concurrent_atomic_AtomicBoolean.prototype.init___Z = (function(value) {
  this.value$1 = value;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.java_util_concurrent_atomic_AtomicBoolean.prototype.getAndSet__Z__ = (function(newValue) {
  return ScalaJS.bZ(this.getAndSet__Z__Z(newValue))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicBoolean.prototype.weakCompareAndSet__Z__Z__ = (function(expect, newValue$2) {
  return ScalaJS.bZ(this.weakCompareAndSet__Z__Z__Z(expect, newValue$2))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicBoolean.prototype.compareAndSet__Z__Z__ = (function(expect$2, newValue$3) {
  return ScalaJS.bZ(this.compareAndSet__Z__Z__Z(expect$2, newValue$3))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicBoolean.prototype.lazySet__Z__ = (function(newValue$4) {
  return ScalaJS.bV(this.lazySet__Z__V(newValue$4))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicBoolean.prototype.set__Z__ = (function(newValue$5) {
  return ScalaJS.bV(this.set__Z__V(newValue$5))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicBoolean.prototype.get__ = (function() {
  return ScalaJS.bZ(this.get__Z())
});
/** @constructor */
ScalaJS.inheritable.java_util_concurrent_atomic_AtomicBoolean = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_concurrent_atomic_AtomicBoolean.prototype = ScalaJS.c.java_util_concurrent_atomic_AtomicBoolean.prototype;
ScalaJS.is.java_util_concurrent_atomic_AtomicBoolean = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_concurrent_atomic_AtomicBoolean)))
});
ScalaJS.as.java_util_concurrent_atomic_AtomicBoolean = (function(obj) {
  if ((ScalaJS.is.java_util_concurrent_atomic_AtomicBoolean(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.concurrent.atomic.AtomicBoolean")
  }
});
ScalaJS.isArrayOf.java_util_concurrent_atomic_AtomicBoolean = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_concurrent_atomic_AtomicBoolean)))
});
ScalaJS.asArrayOf.java_util_concurrent_atomic_AtomicBoolean = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_concurrent_atomic_AtomicBoolean(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.concurrent.atomic.AtomicBoolean;", depth)
  }
});
ScalaJS.data.java_util_concurrent_atomic_AtomicBoolean = new ScalaJS.ClassTypeData({
  java_util_concurrent_atomic_AtomicBoolean: 0
}, false, "java.util.concurrent.atomic.AtomicBoolean", ScalaJS.data.java_lang_Object, {
  java_util_concurrent_atomic_AtomicBoolean: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_concurrent_atomic_AtomicBoolean.prototype.$classData = ScalaJS.data.java_util_concurrent_atomic_AtomicBoolean;
//@ sourceMappingURL=AtomicBoolean.js.map
