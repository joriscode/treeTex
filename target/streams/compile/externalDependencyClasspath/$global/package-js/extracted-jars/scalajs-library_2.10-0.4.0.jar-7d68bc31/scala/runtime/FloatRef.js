/** @constructor */
ScalaJS.c.scala_runtime_FloatRef = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.elem$1 = 0.0
});
ScalaJS.c.scala_runtime_FloatRef.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_FloatRef.prototype.constructor = ScalaJS.c.scala_runtime_FloatRef;
ScalaJS.c.scala_runtime_FloatRef.prototype.elem__F = (function() {
  return this.elem$1
});
ScalaJS.c.scala_runtime_FloatRef.prototype.elem$und$eq__F__V = (function(x$1) {
  this.elem$1 = x$1
});
ScalaJS.c.scala_runtime_FloatRef.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__F__T(this.elem__F())
});
ScalaJS.c.scala_runtime_FloatRef.prototype.init___F = (function(elem) {
  this.elem$1 = elem;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_FloatRef.prototype.elem$und$eq__F__ = (function(x$1) {
  return ScalaJS.bV(this.elem$und$eq__F__V(x$1))
});
ScalaJS.c.scala_runtime_FloatRef.prototype.elem__ = (function() {
  return ScalaJS.bF(this.elem__F())
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_FloatRef = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_FloatRef.prototype = ScalaJS.c.scala_runtime_FloatRef.prototype;
ScalaJS.is.scala_runtime_FloatRef = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_FloatRef)))
});
ScalaJS.as.scala_runtime_FloatRef = (function(obj) {
  if ((ScalaJS.is.scala_runtime_FloatRef(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.FloatRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_FloatRef = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_FloatRef)))
});
ScalaJS.asArrayOf.scala_runtime_FloatRef = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_FloatRef(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.FloatRef;", depth)
  }
});
ScalaJS.data.scala_runtime_FloatRef = new ScalaJS.ClassTypeData({
  scala_runtime_FloatRef: 0
}, false, "scala.runtime.FloatRef", ScalaJS.data.java_lang_Object, {
  scala_runtime_FloatRef: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_FloatRef.prototype.$classData = ScalaJS.data.scala_runtime_FloatRef;
//@ sourceMappingURL=FloatRef.js.map
