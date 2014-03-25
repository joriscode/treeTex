/** @constructor */
ScalaJS.c.java_io_FilterOutputStream = (function() {
  ScalaJS.c.java_io_OutputStream.call(this);
  this.out$2 = null
});
ScalaJS.c.java_io_FilterOutputStream.prototype = new ScalaJS.inheritable.java_io_OutputStream();
ScalaJS.c.java_io_FilterOutputStream.prototype.constructor = ScalaJS.c.java_io_FilterOutputStream;
ScalaJS.c.java_io_FilterOutputStream.prototype.close__V = (function() {
  this.out$2.close__V()
});
ScalaJS.c.java_io_FilterOutputStream.prototype.flush__V = (function() {
  this.out$2.flush__V()
});
ScalaJS.c.java_io_FilterOutputStream.prototype.write__I__V = (function(b) {
  this.out$2.write__I__V(b)
});
ScalaJS.c.java_io_FilterOutputStream.prototype.init___Ljava_io_OutputStream = (function(out) {
  this.out$2 = out;
  ScalaJS.c.java_io_OutputStream.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_io_FilterOutputStream = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_io_FilterOutputStream.prototype = ScalaJS.c.java_io_FilterOutputStream.prototype;
ScalaJS.is.java_io_FilterOutputStream = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_io_FilterOutputStream)))
});
ScalaJS.as.java_io_FilterOutputStream = (function(obj) {
  if ((ScalaJS.is.java_io_FilterOutputStream(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.io.FilterOutputStream")
  }
});
ScalaJS.isArrayOf.java_io_FilterOutputStream = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_io_FilterOutputStream)))
});
ScalaJS.asArrayOf.java_io_FilterOutputStream = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_io_FilterOutputStream(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.io.FilterOutputStream;", depth)
  }
});
ScalaJS.data.java_io_FilterOutputStream = new ScalaJS.ClassTypeData({
  java_io_FilterOutputStream: 0
}, false, "java.io.FilterOutputStream", ScalaJS.data.java_io_OutputStream, {
  java_io_FilterOutputStream: 1,
  java_io_OutputStream: 1,
  java_io_Flushable: 1,
  java_io_Closeable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_io_FilterOutputStream.prototype.$classData = ScalaJS.data.java_io_FilterOutputStream;
//@ sourceMappingURL=FilterOutputStream.js.map
