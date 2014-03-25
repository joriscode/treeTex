/** @constructor */
ScalaJS.c.java_io_OutputStream = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.java_io_OutputStream.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_io_OutputStream.prototype.constructor = ScalaJS.c.java_io_OutputStream;
ScalaJS.c.java_io_OutputStream.prototype.close__V = (function() {
  /*<skip>*/
});
ScalaJS.c.java_io_OutputStream.prototype.flush__V = (function() {
  /*<skip>*/
});
ScalaJS.c.java_io_OutputStream.prototype.write__AB__V = (function(b) {
  this.write__AB__I__I__V(b, 0, b.underlying.length)
});
ScalaJS.c.java_io_OutputStream.prototype.write__AB__I__I__V = (function(b, off, len) {
  var n = off;
  var stop = (off + len);
  while ((n < stop)) {
    this.write__I__V(b.underlying[n]);
    n = (n + 1)
  }
});
ScalaJS.c.java_io_OutputStream.prototype.write__AB__I__I__ = (function(b, off, len) {
  return ScalaJS.bV(this.write__AB__I__I__V(b, off, len))
});
ScalaJS.c.java_io_OutputStream.prototype.write__AB__ = (function(b$2) {
  return ScalaJS.bV(this.write__AB__V(b$2))
});
ScalaJS.c.java_io_OutputStream.prototype.flush__ = (function() {
  return ScalaJS.bV(this.flush__V())
});
ScalaJS.c.java_io_OutputStream.prototype.close__ = (function() {
  return ScalaJS.bV(this.close__V())
});
ScalaJS.c.java_io_OutputStream.prototype.write__I__ = (function(b$3) {
  return ScalaJS.bV(this.write__I__V(b$3))
});
/** @constructor */
ScalaJS.inheritable.java_io_OutputStream = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_io_OutputStream.prototype = ScalaJS.c.java_io_OutputStream.prototype;
ScalaJS.is.java_io_OutputStream = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_io_OutputStream)))
});
ScalaJS.as.java_io_OutputStream = (function(obj) {
  if ((ScalaJS.is.java_io_OutputStream(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.io.OutputStream")
  }
});
ScalaJS.isArrayOf.java_io_OutputStream = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_io_OutputStream)))
});
ScalaJS.asArrayOf.java_io_OutputStream = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_io_OutputStream(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.io.OutputStream;", depth)
  }
});
ScalaJS.data.java_io_OutputStream = new ScalaJS.ClassTypeData({
  java_io_OutputStream: 0
}, false, "java.io.OutputStream", ScalaJS.data.java_lang_Object, {
  java_io_OutputStream: 1,
  java_io_Flushable: 1,
  java_io_Closeable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_io_OutputStream.prototype.$classData = ScalaJS.data.java_io_OutputStream;
//@ sourceMappingURL=OutputStream.js.map
