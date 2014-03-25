/** @constructor */
ScalaJS.c.java_lang_ThreadLocal = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.hasValue$1 = false;
  this.i$1 = null;
  this.v$1 = null;
  this.m$1 = null
});
ScalaJS.c.java_lang_ThreadLocal.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_ThreadLocal.prototype.constructor = ScalaJS.c.java_lang_ThreadLocal;
ScalaJS.c.java_lang_ThreadLocal.prototype.hasValue__p1__Z = (function() {
  return this.hasValue$1
});
ScalaJS.c.java_lang_ThreadLocal.prototype.hasValue$und$eq__p1__Z__V = (function(x$1) {
  this.hasValue$1 = x$1
});
ScalaJS.c.java_lang_ThreadLocal.prototype.i__p1__O = (function() {
  return this.i$1
});
ScalaJS.c.java_lang_ThreadLocal.prototype.i$und$eq__p1__O__V = (function(x$1) {
  this.i$1 = x$1
});
ScalaJS.c.java_lang_ThreadLocal.prototype.v__p1__O = (function() {
  return this.v$1
});
ScalaJS.c.java_lang_ThreadLocal.prototype.v$und$eq__p1__O__V = (function(x$1) {
  this.v$1 = x$1
});
ScalaJS.c.java_lang_ThreadLocal.prototype.m__p1__Ljava_lang_ThreadLocal$ThreadLocalMap = (function() {
  return this.m$1
});
ScalaJS.c.java_lang_ThreadLocal.prototype.m$und$eq__p1__Ljava_lang_ThreadLocal$ThreadLocalMap__V = (function(x$1) {
  this.m$1 = x$1
});
ScalaJS.c.java_lang_ThreadLocal.prototype.initialValue__O = (function() {
  return this.i__p1__O()
});
ScalaJS.c.java_lang_ThreadLocal.prototype.get__O = (function() {
  if ((!this.hasValue__p1__Z())) {
    this.set__O__V(this.initialValue__O())
  };
  return this.v__p1__O()
});
ScalaJS.c.java_lang_ThreadLocal.prototype.remove__V = (function() {
  this.hasValue$und$eq__p1__Z__V(false)
});
ScalaJS.c.java_lang_ThreadLocal.prototype.set__O__V = (function(o) {
  this.v$und$eq__p1__O__V(o);
  this.hasValue$und$eq__p1__Z__V(true)
});
ScalaJS.c.java_lang_ThreadLocal.prototype.childValue__O__O = (function(parentValue) {
  return parentValue
});
ScalaJS.c.java_lang_ThreadLocal.prototype.createMap__Ljava_lang_Thread__O__V = (function(t, firstValue) {
  /*<skip>*/
});
ScalaJS.c.java_lang_ThreadLocal.prototype.getMap__Ljava_lang_Thread__Ljava_lang_ThreadLocal$ThreadLocalMap = (function(t) {
  return this.m__p1__Ljava_lang_ThreadLocal$ThreadLocalMap()
});
ScalaJS.c.java_lang_ThreadLocal.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.hasValue$1 = false;
  this.m$1 = new ScalaJS.c.java_lang_ThreadLocal$ThreadLocalMap().init___();
  return this
});
ScalaJS.c.java_lang_ThreadLocal.prototype.getMap__Ljava_lang_Thread__ = (function(t) {
  return this.getMap__Ljava_lang_Thread__Ljava_lang_ThreadLocal$ThreadLocalMap(t)
});
ScalaJS.c.java_lang_ThreadLocal.prototype.createMap__Ljava_lang_Thread__O__ = (function(t$2, firstValue) {
  return ScalaJS.bV(this.createMap__Ljava_lang_Thread__O__V(t$2, firstValue))
});
ScalaJS.c.java_lang_ThreadLocal.prototype.childValue__O__ = (function(parentValue) {
  return this.childValue__O__O(parentValue)
});
ScalaJS.c.java_lang_ThreadLocal.prototype.set__O__ = (function(o) {
  return ScalaJS.bV(this.set__O__V(o))
});
ScalaJS.c.java_lang_ThreadLocal.prototype.remove__ = (function() {
  return ScalaJS.bV(this.remove__V())
});
ScalaJS.c.java_lang_ThreadLocal.prototype.get__ = (function() {
  return this.get__O()
});
ScalaJS.c.java_lang_ThreadLocal.prototype.initialValue__ = (function() {
  return this.initialValue__O()
});
/** @constructor */
ScalaJS.inheritable.java_lang_ThreadLocal = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_ThreadLocal.prototype = ScalaJS.c.java_lang_ThreadLocal.prototype;
ScalaJS.is.java_lang_ThreadLocal = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_ThreadLocal)))
});
ScalaJS.as.java_lang_ThreadLocal = (function(obj) {
  if ((ScalaJS.is.java_lang_ThreadLocal(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.ThreadLocal")
  }
});
ScalaJS.isArrayOf.java_lang_ThreadLocal = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_ThreadLocal)))
});
ScalaJS.asArrayOf.java_lang_ThreadLocal = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_ThreadLocal(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.ThreadLocal;", depth)
  }
});
ScalaJS.data.java_lang_ThreadLocal = new ScalaJS.ClassTypeData({
  java_lang_ThreadLocal: 0
}, false, "java.lang.ThreadLocal", ScalaJS.data.java_lang_Object, {
  java_lang_ThreadLocal: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_ThreadLocal.prototype.$classData = ScalaJS.data.java_lang_ThreadLocal;
//@ sourceMappingURL=ThreadLocal.js.map
