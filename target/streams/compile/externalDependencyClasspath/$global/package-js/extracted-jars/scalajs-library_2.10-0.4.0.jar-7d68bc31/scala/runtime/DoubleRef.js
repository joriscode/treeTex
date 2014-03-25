/** @constructor */
ScalaJS.c.scala_runtime_DoubleRef = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.elem$1 = 0.0
});
ScalaJS.c.scala_runtime_DoubleRef.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_DoubleRef.prototype.constructor = ScalaJS.c.scala_runtime_DoubleRef;
ScalaJS.c.scala_runtime_DoubleRef.prototype.elem__D = (function() {
  return this.elem$1
});
ScalaJS.c.scala_runtime_DoubleRef.prototype.elem$und$eq__D__V = (function(x$1) {
  this.elem$1 = x$1
});
ScalaJS.c.scala_runtime_DoubleRef.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__D__T(this.elem__D())
});
ScalaJS.c.scala_runtime_DoubleRef.prototype.init___D = (function(elem) {
  this.elem$1 = elem;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_DoubleRef.prototype.elem$und$eq__D__ = (function(x$1) {
  return ScalaJS.bV(this.elem$und$eq__D__V(x$1))
});
ScalaJS.c.scala_runtime_DoubleRef.prototype.elem__ = (function() {
  return ScalaJS.bD(this.elem__D())
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_DoubleRef = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_DoubleRef.prototype = ScalaJS.c.scala_runtime_DoubleRef.prototype;
ScalaJS.is.scala_runtime_DoubleRef = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_DoubleRef)))
});
ScalaJS.as.scala_runtime_DoubleRef = (function(obj) {
  if ((ScalaJS.is.scala_runtime_DoubleRef(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.DoubleRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_DoubleRef = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_DoubleRef)))
});
ScalaJS.asArrayOf.scala_runtime_DoubleRef = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_DoubleRef(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.DoubleRef;", depth)
  }
});
ScalaJS.data.scala_runtime_DoubleRef = new ScalaJS.ClassTypeData({
  scala_runtime_DoubleRef: 0
}, false, "scala.runtime.DoubleRef", ScalaJS.data.java_lang_Object, {
  scala_runtime_DoubleRef: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_DoubleRef.prototype.$classData = ScalaJS.data.scala_runtime_DoubleRef;
//@ sourceMappingURL=DoubleRef.js.map
