/** @constructor */
ScalaJS.c.scala_runtime_VolatileByteRef = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.elem$1 = 0
});
ScalaJS.c.scala_runtime_VolatileByteRef.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_VolatileByteRef.prototype.constructor = ScalaJS.c.scala_runtime_VolatileByteRef;
ScalaJS.c.scala_runtime_VolatileByteRef.prototype.elem__B = (function() {
  return this.elem$1
});
ScalaJS.c.scala_runtime_VolatileByteRef.prototype.elem$und$eq__B__V = (function(x$1) {
  this.elem$1 = x$1
});
ScalaJS.c.scala_runtime_VolatileByteRef.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__I__T(this.elem__B())
});
ScalaJS.c.scala_runtime_VolatileByteRef.prototype.init___B = (function(elem) {
  this.elem$1 = elem;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_VolatileByteRef.prototype.elem$und$eq__B__ = (function(x$1) {
  return ScalaJS.bV(this.elem$und$eq__B__V(x$1))
});
ScalaJS.c.scala_runtime_VolatileByteRef.prototype.elem__ = (function() {
  return ScalaJS.bB(this.elem__B())
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_VolatileByteRef = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_VolatileByteRef.prototype = ScalaJS.c.scala_runtime_VolatileByteRef.prototype;
ScalaJS.is.scala_runtime_VolatileByteRef = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_VolatileByteRef)))
});
ScalaJS.as.scala_runtime_VolatileByteRef = (function(obj) {
  if ((ScalaJS.is.scala_runtime_VolatileByteRef(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.VolatileByteRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_VolatileByteRef = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_VolatileByteRef)))
});
ScalaJS.asArrayOf.scala_runtime_VolatileByteRef = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_VolatileByteRef(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.VolatileByteRef;", depth)
  }
});
ScalaJS.data.scala_runtime_VolatileByteRef = new ScalaJS.ClassTypeData({
  scala_runtime_VolatileByteRef: 0
}, false, "scala.runtime.VolatileByteRef", ScalaJS.data.java_lang_Object, {
  scala_runtime_VolatileByteRef: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_VolatileByteRef.prototype.$classData = ScalaJS.data.scala_runtime_VolatileByteRef;
//@ sourceMappingURL=VolatileByteRef.js.map
