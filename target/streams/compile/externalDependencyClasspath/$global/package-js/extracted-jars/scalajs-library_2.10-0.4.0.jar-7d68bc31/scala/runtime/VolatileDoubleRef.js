/** @constructor */
ScalaJS.c.scala_runtime_VolatileDoubleRef = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.elem$1 = 0.0
});
ScalaJS.c.scala_runtime_VolatileDoubleRef.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_VolatileDoubleRef.prototype.constructor = ScalaJS.c.scala_runtime_VolatileDoubleRef;
ScalaJS.c.scala_runtime_VolatileDoubleRef.prototype.elem__D = (function() {
  return this.elem$1
});
ScalaJS.c.scala_runtime_VolatileDoubleRef.prototype.elem$und$eq__D__V = (function(x$1) {
  this.elem$1 = x$1
});
ScalaJS.c.scala_runtime_VolatileDoubleRef.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__D__T(this.elem__D())
});
ScalaJS.c.scala_runtime_VolatileDoubleRef.prototype.init___D = (function(elem) {
  this.elem$1 = elem;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_VolatileDoubleRef.prototype.elem$und$eq__D__ = (function(x$1) {
  return ScalaJS.bV(this.elem$und$eq__D__V(x$1))
});
ScalaJS.c.scala_runtime_VolatileDoubleRef.prototype.elem__ = (function() {
  return ScalaJS.bD(this.elem__D())
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_VolatileDoubleRef = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_VolatileDoubleRef.prototype = ScalaJS.c.scala_runtime_VolatileDoubleRef.prototype;
ScalaJS.is.scala_runtime_VolatileDoubleRef = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_VolatileDoubleRef)))
});
ScalaJS.as.scala_runtime_VolatileDoubleRef = (function(obj) {
  if ((ScalaJS.is.scala_runtime_VolatileDoubleRef(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.VolatileDoubleRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_VolatileDoubleRef = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_VolatileDoubleRef)))
});
ScalaJS.asArrayOf.scala_runtime_VolatileDoubleRef = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_VolatileDoubleRef(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.VolatileDoubleRef;", depth)
  }
});
ScalaJS.data.scala_runtime_VolatileDoubleRef = new ScalaJS.ClassTypeData({
  scala_runtime_VolatileDoubleRef: 0
}, false, "scala.runtime.VolatileDoubleRef", ScalaJS.data.java_lang_Object, {
  scala_runtime_VolatileDoubleRef: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_VolatileDoubleRef.prototype.$classData = ScalaJS.data.scala_runtime_VolatileDoubleRef;
//@ sourceMappingURL=VolatileDoubleRef.js.map
