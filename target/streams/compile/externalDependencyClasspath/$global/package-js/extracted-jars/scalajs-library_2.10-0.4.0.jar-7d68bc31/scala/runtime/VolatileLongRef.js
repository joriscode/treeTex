/** @constructor */
ScalaJS.c.scala_runtime_VolatileLongRef = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.elem$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long()
});
ScalaJS.c.scala_runtime_VolatileLongRef.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_VolatileLongRef.prototype.constructor = ScalaJS.c.scala_runtime_VolatileLongRef;
ScalaJS.c.scala_runtime_VolatileLongRef.prototype.elem__J = (function() {
  return this.elem$1
});
ScalaJS.c.scala_runtime_VolatileLongRef.prototype.elem$und$eq__J__V = (function(x$1) {
  this.elem$1 = x$1
});
ScalaJS.c.scala_runtime_VolatileLongRef.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__J__T(this.elem__J())
});
ScalaJS.c.scala_runtime_VolatileLongRef.prototype.init___J = (function(elem) {
  this.elem$1 = elem;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_VolatileLongRef.prototype.elem$und$eq__J__ = (function(x$1) {
  return ScalaJS.bV(this.elem$und$eq__J__V(x$1))
});
ScalaJS.c.scala_runtime_VolatileLongRef.prototype.elem__ = (function() {
  return ScalaJS.bJ(this.elem__J())
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_VolatileLongRef = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_VolatileLongRef.prototype = ScalaJS.c.scala_runtime_VolatileLongRef.prototype;
ScalaJS.is.scala_runtime_VolatileLongRef = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_VolatileLongRef)))
});
ScalaJS.as.scala_runtime_VolatileLongRef = (function(obj) {
  if ((ScalaJS.is.scala_runtime_VolatileLongRef(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.VolatileLongRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_VolatileLongRef = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_VolatileLongRef)))
});
ScalaJS.asArrayOf.scala_runtime_VolatileLongRef = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_VolatileLongRef(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.VolatileLongRef;", depth)
  }
});
ScalaJS.data.scala_runtime_VolatileLongRef = new ScalaJS.ClassTypeData({
  scala_runtime_VolatileLongRef: 0
}, false, "scala.runtime.VolatileLongRef", ScalaJS.data.java_lang_Object, {
  scala_runtime_VolatileLongRef: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_VolatileLongRef.prototype.$classData = ScalaJS.data.scala_runtime_VolatileLongRef;
//@ sourceMappingURL=VolatileLongRef.js.map
