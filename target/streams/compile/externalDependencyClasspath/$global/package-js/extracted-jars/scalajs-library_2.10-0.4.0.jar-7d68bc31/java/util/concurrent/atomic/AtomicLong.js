/** @constructor */
ScalaJS.c.java_util_concurrent_atomic_AtomicLong = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.value$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long()
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.constructor = ScalaJS.c.java_util_concurrent_atomic_AtomicLong;
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.value__J = (function() {
  return this.value$1
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.value$und$eq__J__V = (function(x$1) {
  this.value$1 = x$1
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.get__J = (function() {
  return this.value__J()
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.set__J__V = (function(newValue) {
  this.value$und$eq__J__V(newValue)
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.lazySet__J__V = (function(newValue) {
  this.set__J__V(newValue)
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.compareAndSet__J__J__Z = (function(expect, newValue) {
  if (expect.notEquals__O__Z(this.value__J())) {
    return false
  } else {
    this.value$und$eq__J__V(newValue);
    return true
  }
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.weakCompareAndSet__J__J__Z = (function(expect, newValue) {
  return this.compareAndSet__J__J__Z(expect, newValue)
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.getAndSet__J__J = (function(newValue) {
  var old = this.value__J();
  this.value$und$eq__J__V(newValue);
  return old
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.getAndIncrement__J = (function() {
  this.value$und$eq__J__V(this.value__J().$$plus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(1)));
  return this.value__J().$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(1))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.getAndDecrement__J = (function() {
  this.value$und$eq__J__V(this.value__J().$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(1)));
  return this.value__J().$$plus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(1))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.getAndAdd__J__J = (function(delta) {
  this.value$und$eq__J__V(this.value__J().$$plus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(delta));
  return this.value__J().$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(delta)
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.incrementAndGet__J = (function() {
  this.value$und$eq__J__V(this.value__J().$$plus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(1)));
  return this.value__J()
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.decrementAndGet__J = (function() {
  this.value$und$eq__J__V(this.value__J().$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(1)));
  return this.value__J()
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.addAndGet__J__J = (function(delta) {
  this.value$und$eq__J__V(this.value__J().$$plus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(delta));
  return this.value__J()
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.intValue__I = (function() {
  return this.value__J().toInt__I()
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.longValue__J = (function() {
  return this.value__J()
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.floatValue__F = (function() {
  return this.value__J().toFloat__F()
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.doubleValue__D = (function() {
  return this.value__J().toDouble__D()
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.init___J = (function(value) {
  this.value$1 = value;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.doubleValue__ = (function() {
  return ScalaJS.bD(this.doubleValue__D())
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.floatValue__ = (function() {
  return ScalaJS.bF(this.floatValue__F())
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.longValue__ = (function() {
  return ScalaJS.bJ(this.longValue__J())
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.intValue__ = (function() {
  return ScalaJS.bI(this.intValue__I())
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.addAndGet__J__ = (function(delta) {
  return ScalaJS.bJ(this.addAndGet__J__J(delta))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.decrementAndGet__ = (function() {
  return ScalaJS.bJ(this.decrementAndGet__J())
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.incrementAndGet__ = (function() {
  return ScalaJS.bJ(this.incrementAndGet__J())
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.getAndAdd__J__ = (function(delta$2) {
  return ScalaJS.bJ(this.getAndAdd__J__J(delta$2))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.getAndDecrement__ = (function() {
  return ScalaJS.bJ(this.getAndDecrement__J())
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.getAndIncrement__ = (function() {
  return ScalaJS.bJ(this.getAndIncrement__J())
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.getAndSet__J__ = (function(newValue) {
  return ScalaJS.bJ(this.getAndSet__J__J(newValue))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.weakCompareAndSet__J__J__ = (function(expect, newValue$2) {
  return ScalaJS.bZ(this.weakCompareAndSet__J__J__Z(expect, newValue$2))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.compareAndSet__J__J__ = (function(expect$2, newValue$3) {
  return ScalaJS.bZ(this.compareAndSet__J__J__Z(expect$2, newValue$3))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.lazySet__J__ = (function(newValue$4) {
  return ScalaJS.bV(this.lazySet__J__V(newValue$4))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.set__J__ = (function(newValue$5) {
  return ScalaJS.bV(this.set__J__V(newValue$5))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.get__ = (function() {
  return ScalaJS.bJ(this.get__J())
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.value$und$eq__J__ = (function(x$1) {
  return ScalaJS.bV(this.value$und$eq__J__V(x$1))
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.value__ = (function() {
  return ScalaJS.bJ(this.value__J())
});
/** @constructor */
ScalaJS.inheritable.java_util_concurrent_atomic_AtomicLong = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_concurrent_atomic_AtomicLong.prototype = ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype;
ScalaJS.is.java_util_concurrent_atomic_AtomicLong = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_concurrent_atomic_AtomicLong)))
});
ScalaJS.as.java_util_concurrent_atomic_AtomicLong = (function(obj) {
  if ((ScalaJS.is.java_util_concurrent_atomic_AtomicLong(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.concurrent.atomic.AtomicLong")
  }
});
ScalaJS.isArrayOf.java_util_concurrent_atomic_AtomicLong = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_concurrent_atomic_AtomicLong)))
});
ScalaJS.asArrayOf.java_util_concurrent_atomic_AtomicLong = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_concurrent_atomic_AtomicLong(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.concurrent.atomic.AtomicLong;", depth)
  }
});
ScalaJS.data.java_util_concurrent_atomic_AtomicLong = new ScalaJS.ClassTypeData({
  java_util_concurrent_atomic_AtomicLong: 0
}, false, "java.util.concurrent.atomic.AtomicLong", ScalaJS.data.java_lang_Object, {
  java_util_concurrent_atomic_AtomicLong: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_concurrent_atomic_AtomicLong.prototype.$classData = ScalaJS.data.java_util_concurrent_atomic_AtomicLong;
//@ sourceMappingURL=AtomicLong.js.map
