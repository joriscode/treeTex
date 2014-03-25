/** @constructor */
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.value$1 = 0
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.constructor = ScalaJS.c.java_util_concurrent_atomic_AtomicInteger;
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.value__I = (function() {
  return this.value$1
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.value$und$eq__I__V = (function(x$1) {
  this.value$1 = x$1
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.get__I = (function() {
  return this.value__I()
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.set__I__V = (function(newValue) {
  this.value$und$eq__I__V(newValue)
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.lazySet__I__V = (function(newValue) {
  this.set__I__V(newValue)
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.compareAndSet__I__I__Z = (function(expect, newValue) {
  if ((expect !== this.value__I())) {
    return false
  } else {
    this.value$und$eq__I__V(newValue);
    return true
  }
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.weakCompareAndSet__I__I__Z = (function(expect, newValue) {
  return this.compareAndSet__I__I__Z(expect, newValue)
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.getAndSet__I__I = (function(newValue) {
  var old = this.value__I();
  this.value$und$eq__I__V(newValue);
  return old
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.getAndIncrement__I = (function() {
  this.value$und$eq__I__V((this.value__I() + 1));
  return (this.value__I() - 1)
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.getAndDecrement__I = (function() {
  this.value$und$eq__I__V((this.value__I() - 1));
  return (this.value__I() + 1)
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.getAndAdd__I__I = (function(delta) {
  this.value$und$eq__I__V((this.value__I() + delta));
  return (this.value__I() - delta)
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.incrementAndGet__I = (function() {
  this.value$und$eq__I__V((this.value__I() + 1));
  return this.value__I()
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.decrementAndGet__I = (function() {
  this.value$und$eq__I__V((this.value__I() - 1));
  return this.value__I()
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.addAndGet__I__I = (function(delta) {
  this.value$und$eq__I__V((this.value__I() + delta));
  return this.value__I()
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.intValue__I = (function() {
  return this.value__I()
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.longValue__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(this.value__I())
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.floatValue__F = (function() {
  return this.value__I()
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.doubleValue__D = (function() {
  return this.value__I()
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.init___I = (function(value) {
  this.value$1 = value;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.doubleValue__ = (function() {
  return ScalaJS.bD(this.doubleValue__D())
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.floatValue__ = (function() {
  return ScalaJS.bF(this.floatValue__F())
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.longValue__ = (function() {
  return ScalaJS.bJ(this.longValue__J())
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.intValue__ = (function() {
  return ScalaJS.bI(this.intValue__I())
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.addAndGet__I__ = (function(delta) {
  return ScalaJS.bI(this.addAndGet__I__I(delta))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.decrementAndGet__ = (function() {
  return ScalaJS.bI(this.decrementAndGet__I())
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.incrementAndGet__ = (function() {
  return ScalaJS.bI(this.incrementAndGet__I())
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.getAndAdd__I__ = (function(delta$2) {
  return ScalaJS.bI(this.getAndAdd__I__I(delta$2))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.getAndDecrement__ = (function() {
  return ScalaJS.bI(this.getAndDecrement__I())
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.getAndIncrement__ = (function() {
  return ScalaJS.bI(this.getAndIncrement__I())
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.getAndSet__I__ = (function(newValue) {
  return ScalaJS.bI(this.getAndSet__I__I(newValue))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.weakCompareAndSet__I__I__ = (function(expect, newValue$2) {
  return ScalaJS.bZ(this.weakCompareAndSet__I__I__Z(expect, newValue$2))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.compareAndSet__I__I__ = (function(expect$2, newValue$3) {
  return ScalaJS.bZ(this.compareAndSet__I__I__Z(expect$2, newValue$3))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.lazySet__I__ = (function(newValue$4) {
  return ScalaJS.bV(this.lazySet__I__V(newValue$4))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.set__I__ = (function(newValue$5) {
  return ScalaJS.bV(this.set__I__V(newValue$5))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.get__ = (function() {
  return ScalaJS.bI(this.get__I())
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.value$und$eq__I__ = (function(x$1) {
  return ScalaJS.bV(this.value$und$eq__I__V(x$1))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.value__ = (function() {
  return ScalaJS.bI(this.value__I())
});
/** @constructor */
ScalaJS.inheritable.java_util_concurrent_atomic_AtomicInteger = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_concurrent_atomic_AtomicInteger.prototype = ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype;
ScalaJS.is.java_util_concurrent_atomic_AtomicInteger = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_concurrent_atomic_AtomicInteger)))
});
ScalaJS.as.java_util_concurrent_atomic_AtomicInteger = (function(obj) {
  if ((ScalaJS.is.java_util_concurrent_atomic_AtomicInteger(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.concurrent.atomic.AtomicInteger")
  }
});
ScalaJS.isArrayOf.java_util_concurrent_atomic_AtomicInteger = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_concurrent_atomic_AtomicInteger)))
});
ScalaJS.asArrayOf.java_util_concurrent_atomic_AtomicInteger = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_concurrent_atomic_AtomicInteger(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.concurrent.atomic.AtomicInteger;", depth)
  }
});
ScalaJS.data.java_util_concurrent_atomic_AtomicInteger = new ScalaJS.ClassTypeData({
  java_util_concurrent_atomic_AtomicInteger: 0
}, false, "java.util.concurrent.atomic.AtomicInteger", ScalaJS.data.java_lang_Object, {
  java_util_concurrent_atomic_AtomicInteger: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_concurrent_atomic_AtomicInteger.prototype.$classData = ScalaJS.data.java_util_concurrent_atomic_AtomicInteger;
//@ sourceMappingURL=AtomicInteger.js.map
