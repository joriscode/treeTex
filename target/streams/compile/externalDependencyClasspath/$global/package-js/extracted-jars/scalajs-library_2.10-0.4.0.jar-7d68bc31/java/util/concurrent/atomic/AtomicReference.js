/** @constructor */
ScalaJS.c.java_util_concurrent_atomic_AtomicReference = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.value$1 = null
});
ScalaJS.c.java_util_concurrent_atomic_AtomicReference.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_util_concurrent_atomic_AtomicReference.prototype.constructor = ScalaJS.c.java_util_concurrent_atomic_AtomicReference;
ScalaJS.c.java_util_concurrent_atomic_AtomicReference.prototype.value__O = (function() {
  return this.value$1
});
ScalaJS.c.java_util_concurrent_atomic_AtomicReference.prototype.value$und$eq__O__V = (function(x$1) {
  this.value$1 = x$1
});
ScalaJS.c.java_util_concurrent_atomic_AtomicReference.prototype.get__O = (function() {
  return this.value__O()
});
ScalaJS.c.java_util_concurrent_atomic_AtomicReference.prototype.set__O__V = (function(newValue) {
  this.value$und$eq__O__V(newValue)
});
ScalaJS.c.java_util_concurrent_atomic_AtomicReference.prototype.lazySet__O__V = (function(newValue) {
  this.set__O__V(newValue)
});
ScalaJS.c.java_util_concurrent_atomic_AtomicReference.prototype.compareAndSet__O__O__Z = (function(expect, newValue) {
  if ((!ScalaJS.anyEqEq(expect, this.value__O()))) {
    return false
  } else {
    this.value$und$eq__O__V(newValue);
    return true
  }
});
ScalaJS.c.java_util_concurrent_atomic_AtomicReference.prototype.weakCompareAndSet__O__O__Z = (function(expect, newValue) {
  return this.compareAndSet__O__O__Z(expect, newValue)
});
ScalaJS.c.java_util_concurrent_atomic_AtomicReference.prototype.getAndSet__O__O = (function(newValue) {
  var old = this.value__O();
  this.value$und$eq__O__V(newValue);
  return old
});
ScalaJS.c.java_util_concurrent_atomic_AtomicReference.prototype.init___O = (function(value) {
  this.value$1 = value;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.java_util_concurrent_atomic_AtomicReference.prototype.getAndSet__O__ = (function(newValue) {
  return this.getAndSet__O__O(newValue)
});
ScalaJS.c.java_util_concurrent_atomic_AtomicReference.prototype.weakCompareAndSet__O__O__ = (function(expect, newValue$2) {
  return ScalaJS.bZ(this.weakCompareAndSet__O__O__Z(expect, newValue$2))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicReference.prototype.compareAndSet__O__O__ = (function(expect$2, newValue$3) {
  return ScalaJS.bZ(this.compareAndSet__O__O__Z(expect$2, newValue$3))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicReference.prototype.lazySet__O__ = (function(newValue$4) {
  return ScalaJS.bV(this.lazySet__O__V(newValue$4))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicReference.prototype.set__O__ = (function(newValue$5) {
  return ScalaJS.bV(this.set__O__V(newValue$5))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicReference.prototype.get__ = (function() {
  return this.get__O()
});
ScalaJS.c.java_util_concurrent_atomic_AtomicReference.prototype.value$und$eq__O__ = (function(x$1) {
  return ScalaJS.bV(this.value$und$eq__O__V(x$1))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicReference.prototype.value__ = (function() {
  return this.value__O()
});
/** @constructor */
ScalaJS.inheritable.java_util_concurrent_atomic_AtomicReference = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_concurrent_atomic_AtomicReference.prototype = ScalaJS.c.java_util_concurrent_atomic_AtomicReference.prototype;
ScalaJS.is.java_util_concurrent_atomic_AtomicReference = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_concurrent_atomic_AtomicReference)))
});
ScalaJS.as.java_util_concurrent_atomic_AtomicReference = (function(obj) {
  if ((ScalaJS.is.java_util_concurrent_atomic_AtomicReference(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.concurrent.atomic.AtomicReference")
  }
});
ScalaJS.isArrayOf.java_util_concurrent_atomic_AtomicReference = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_concurrent_atomic_AtomicReference)))
});
ScalaJS.asArrayOf.java_util_concurrent_atomic_AtomicReference = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_concurrent_atomic_AtomicReference(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.concurrent.atomic.AtomicReference;", depth)
  }
});
ScalaJS.data.java_util_concurrent_atomic_AtomicReference = new ScalaJS.ClassTypeData({
  java_util_concurrent_atomic_AtomicReference: 0
}, false, "java.util.concurrent.atomic.AtomicReference", ScalaJS.data.java_lang_Object, {
  java_util_concurrent_atomic_AtomicReference: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_concurrent_atomic_AtomicReference.prototype.$classData = ScalaJS.data.java_util_concurrent_atomic_AtomicReference;
//@ sourceMappingURL=AtomicReference.js.map
