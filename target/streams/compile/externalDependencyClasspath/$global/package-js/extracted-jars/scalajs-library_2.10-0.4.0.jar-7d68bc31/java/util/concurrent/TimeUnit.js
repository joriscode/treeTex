/** @constructor */
ScalaJS.c.java_util_concurrent_TimeUnit = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$undindex$1 = 0;
  this.$$undname$1 = null
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.constructor = ScalaJS.c.java_util_concurrent_TimeUnit;
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.excessNanos__J__J__I = (function(a, b) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("TimeUnit.excessNanos() is not available on JavaScript")
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.name__T = (function() {
  return this.$$undname$1
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.ordinal__I = (function() {
  return this.$$undindex$1
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.timedWait__O__J__V = (function(arg1, arg2) {
  ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("TimeUnit.timedWait() is not available on JavaScript")
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.timedJoin__Ljava_lang_Thread__J__V = (function(arg1, arg2) {
  ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("TimeUnit.timedJoin() is not available on JavaScript")
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.sleep__J__V = (function(arg1) {
  ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("TimeUnit.sleep() is not available on JavaScript")
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.toString__T = (function() {
  return this.name__T()
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.init___I__T = (function(_index, _name) {
  this.$$undindex$1 = _index;
  this.$$undname$1 = _name;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.sleep__J__ = (function(arg1) {
  return ScalaJS.bV(this.sleep__J__V(arg1))
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.timedJoin__Ljava_lang_Thread__J__ = (function(arg1$2, arg2) {
  return ScalaJS.bV(this.timedJoin__Ljava_lang_Thread__J__V(arg1$2, arg2))
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.timedWait__O__J__ = (function(arg1$3, arg2$2) {
  return ScalaJS.bV(this.timedWait__O__J__V(arg1$3, arg2$2))
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.ordinal__ = (function() {
  return ScalaJS.bI(this.ordinal__I())
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.name__ = (function() {
  return this.name__T()
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.excessNanos__J__J__ = (function(a, b) {
  return ScalaJS.bI(this.excessNanos__J__J__I(a, b))
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.toDays__J__ = (function(a$2) {
  return ScalaJS.bJ(this.toDays__J__J(a$2))
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.toHours__J__ = (function(a$3) {
  return ScalaJS.bJ(this.toHours__J__J(a$3))
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.toMinutes__J__ = (function(a$4) {
  return ScalaJS.bJ(this.toMinutes__J__J(a$4))
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.toSeconds__J__ = (function(a$5) {
  return ScalaJS.bJ(this.toSeconds__J__J(a$5))
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.toMillis__J__ = (function(a$6) {
  return ScalaJS.bJ(this.toMillis__J__J(a$6))
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.toMicros__J__ = (function(a$7) {
  return ScalaJS.bJ(this.toMicros__J__J(a$7))
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.toNanos__J__ = (function(a$8) {
  return ScalaJS.bJ(this.toNanos__J__J(a$8))
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.convert__J__Ljava_util_concurrent_TimeUnit__ = (function(a$9, u) {
  return ScalaJS.bJ(this.convert__J__Ljava_util_concurrent_TimeUnit__J(a$9, u))
});
/** @constructor */
ScalaJS.inheritable.java_util_concurrent_TimeUnit = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_concurrent_TimeUnit.prototype = ScalaJS.c.java_util_concurrent_TimeUnit.prototype;
ScalaJS.is.java_util_concurrent_TimeUnit = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_concurrent_TimeUnit)))
});
ScalaJS.as.java_util_concurrent_TimeUnit = (function(obj) {
  if ((ScalaJS.is.java_util_concurrent_TimeUnit(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.concurrent.TimeUnit")
  }
});
ScalaJS.isArrayOf.java_util_concurrent_TimeUnit = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_concurrent_TimeUnit)))
});
ScalaJS.asArrayOf.java_util_concurrent_TimeUnit = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_concurrent_TimeUnit(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.concurrent.TimeUnit;", depth)
  }
});
ScalaJS.data.java_util_concurrent_TimeUnit = new ScalaJS.ClassTypeData({
  java_util_concurrent_TimeUnit: 0
}, false, "java.util.concurrent.TimeUnit", ScalaJS.data.java_lang_Object, {
  java_util_concurrent_TimeUnit: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_concurrent_TimeUnit.prototype.$classData = ScalaJS.data.java_util_concurrent_TimeUnit;
//@ sourceMappingURL=TimeUnit.js.map
