/** @constructor */
ScalaJS.c.scala_runtime_VolatileBooleanRef = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.elem$1 = false
});
ScalaJS.c.scala_runtime_VolatileBooleanRef.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_VolatileBooleanRef.prototype.constructor = ScalaJS.c.scala_runtime_VolatileBooleanRef;
ScalaJS.c.scala_runtime_VolatileBooleanRef.prototype.elem__Z = (function() {
  return this.elem$1
});
ScalaJS.c.scala_runtime_VolatileBooleanRef.prototype.elem$und$eq__Z__V = (function(x$1) {
  this.elem$1 = x$1
});
ScalaJS.c.scala_runtime_VolatileBooleanRef.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__Z__T(this.elem__Z())
});
ScalaJS.c.scala_runtime_VolatileBooleanRef.prototype.init___Z = (function(elem) {
  this.elem$1 = elem;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_VolatileBooleanRef.prototype.elem$und$eq__Z__ = (function(x$1) {
  return ScalaJS.bV(this.elem$und$eq__Z__V(x$1))
});
ScalaJS.c.scala_runtime_VolatileBooleanRef.prototype.elem__ = (function() {
  return ScalaJS.bZ(this.elem__Z())
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_VolatileBooleanRef = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_VolatileBooleanRef.prototype = ScalaJS.c.scala_runtime_VolatileBooleanRef.prototype;
ScalaJS.is.scala_runtime_VolatileBooleanRef = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_VolatileBooleanRef)))
});
ScalaJS.as.scala_runtime_VolatileBooleanRef = (function(obj) {
  if ((ScalaJS.is.scala_runtime_VolatileBooleanRef(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.VolatileBooleanRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_VolatileBooleanRef = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_VolatileBooleanRef)))
});
ScalaJS.asArrayOf.scala_runtime_VolatileBooleanRef = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_VolatileBooleanRef(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.VolatileBooleanRef;", depth)
  }
});
ScalaJS.data.scala_runtime_VolatileBooleanRef = new ScalaJS.ClassTypeData({
  scala_runtime_VolatileBooleanRef: 0
}, false, "scala.runtime.VolatileBooleanRef", ScalaJS.data.java_lang_Object, {
  scala_runtime_VolatileBooleanRef: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_VolatileBooleanRef.prototype.$classData = ScalaJS.data.scala_runtime_VolatileBooleanRef;
//@ sourceMappingURL=VolatileBooleanRef.js.map
