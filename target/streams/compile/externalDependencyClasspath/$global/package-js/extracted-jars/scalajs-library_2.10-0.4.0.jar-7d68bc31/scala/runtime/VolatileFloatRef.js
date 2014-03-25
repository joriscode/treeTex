/** @constructor */
ScalaJS.c.scala_runtime_VolatileFloatRef = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.elem$1 = 0.0
});
ScalaJS.c.scala_runtime_VolatileFloatRef.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_VolatileFloatRef.prototype.constructor = ScalaJS.c.scala_runtime_VolatileFloatRef;
ScalaJS.c.scala_runtime_VolatileFloatRef.prototype.elem__F = (function() {
  return this.elem$1
});
ScalaJS.c.scala_runtime_VolatileFloatRef.prototype.elem$und$eq__F__V = (function(x$1) {
  this.elem$1 = x$1
});
ScalaJS.c.scala_runtime_VolatileFloatRef.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__F__T(this.elem__F())
});
ScalaJS.c.scala_runtime_VolatileFloatRef.prototype.init___F = (function(elem) {
  this.elem$1 = elem;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_VolatileFloatRef.prototype.elem$und$eq__F__ = (function(x$1) {
  return ScalaJS.bV(this.elem$und$eq__F__V(x$1))
});
ScalaJS.c.scala_runtime_VolatileFloatRef.prototype.elem__ = (function() {
  return ScalaJS.bF(this.elem__F())
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_VolatileFloatRef = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_VolatileFloatRef.prototype = ScalaJS.c.scala_runtime_VolatileFloatRef.prototype;
ScalaJS.is.scala_runtime_VolatileFloatRef = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_VolatileFloatRef)))
});
ScalaJS.as.scala_runtime_VolatileFloatRef = (function(obj) {
  if ((ScalaJS.is.scala_runtime_VolatileFloatRef(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.VolatileFloatRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_VolatileFloatRef = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_VolatileFloatRef)))
});
ScalaJS.asArrayOf.scala_runtime_VolatileFloatRef = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_VolatileFloatRef(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.VolatileFloatRef;", depth)
  }
});
ScalaJS.data.scala_runtime_VolatileFloatRef = new ScalaJS.ClassTypeData({
  scala_runtime_VolatileFloatRef: 0
}, false, "scala.runtime.VolatileFloatRef", ScalaJS.data.java_lang_Object, {
  scala_runtime_VolatileFloatRef: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_VolatileFloatRef.prototype.$classData = ScalaJS.data.scala_runtime_VolatileFloatRef;
//@ sourceMappingURL=VolatileFloatRef.js.map
