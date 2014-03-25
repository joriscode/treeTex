/** @constructor */
ScalaJS.c.scala_concurrent_Lock = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.available$1 = false
});
ScalaJS.c.scala_concurrent_Lock.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_Lock.prototype.constructor = ScalaJS.c.scala_concurrent_Lock;
ScalaJS.c.scala_concurrent_Lock.prototype.available__Z = (function() {
  return this.available$1
});
ScalaJS.c.scala_concurrent_Lock.prototype.available$und$eq__Z__V = (function(x$1) {
  this.available$1 = x$1
});
ScalaJS.c.scala_concurrent_Lock.prototype.acquire__V = (function() {
  while ((!this.available__Z())) {
    this.wait__V()
  };
  this.available$und$eq__Z__V(false)
});
ScalaJS.c.scala_concurrent_Lock.prototype.release__V = (function() {
  this.available$und$eq__Z__V(true);
  ScalaJS.objectNotify(this)
});
ScalaJS.c.scala_concurrent_Lock.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.available$1 = true;
  return this
});
ScalaJS.c.scala_concurrent_Lock.prototype.release__ = (function() {
  return ScalaJS.bV(this.release__V())
});
ScalaJS.c.scala_concurrent_Lock.prototype.acquire__ = (function() {
  return ScalaJS.bV(this.acquire__V())
});
ScalaJS.c.scala_concurrent_Lock.prototype.available$und$eq__Z__ = (function(x$1) {
  return ScalaJS.bV(this.available$und$eq__Z__V(x$1))
});
ScalaJS.c.scala_concurrent_Lock.prototype.available__ = (function() {
  return ScalaJS.bZ(this.available__Z())
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_Lock = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_Lock.prototype = ScalaJS.c.scala_concurrent_Lock.prototype;
ScalaJS.is.scala_concurrent_Lock = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_Lock)))
});
ScalaJS.as.scala_concurrent_Lock = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_Lock(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.Lock")
  }
});
ScalaJS.isArrayOf.scala_concurrent_Lock = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_Lock)))
});
ScalaJS.asArrayOf.scala_concurrent_Lock = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_Lock(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.Lock;", depth)
  }
});
ScalaJS.data.scala_concurrent_Lock = new ScalaJS.ClassTypeData({
  scala_concurrent_Lock: 0
}, false, "scala.concurrent.Lock", ScalaJS.data.java_lang_Object, {
  scala_concurrent_Lock: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_Lock.prototype.$classData = ScalaJS.data.scala_concurrent_Lock;
//@ sourceMappingURL=Lock.js.map
