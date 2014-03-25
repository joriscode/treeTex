/** @constructor */
ScalaJS.c.scala_runtime_VolatileObjectRef = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.elem$1 = null
});
ScalaJS.c.scala_runtime_VolatileObjectRef.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_VolatileObjectRef.prototype.constructor = ScalaJS.c.scala_runtime_VolatileObjectRef;
ScalaJS.c.scala_runtime_VolatileObjectRef.prototype.elem__O = (function() {
  return this.elem$1
});
ScalaJS.c.scala_runtime_VolatileObjectRef.prototype.elem$und$eq__O__V = (function(x$1) {
  this.elem$1 = x$1
});
ScalaJS.c.scala_runtime_VolatileObjectRef.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__O__T(this.elem__O())
});
ScalaJS.c.scala_runtime_VolatileObjectRef.prototype.init___O = (function(elem) {
  this.elem$1 = elem;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_VolatileObjectRef.prototype.elem$und$eq__O__ = (function(x$1) {
  return ScalaJS.bV(this.elem$und$eq__O__V(x$1))
});
ScalaJS.c.scala_runtime_VolatileObjectRef.prototype.elem__ = (function() {
  return this.elem__O()
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_VolatileObjectRef = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_VolatileObjectRef.prototype = ScalaJS.c.scala_runtime_VolatileObjectRef.prototype;
ScalaJS.is.scala_runtime_VolatileObjectRef = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_VolatileObjectRef)))
});
ScalaJS.as.scala_runtime_VolatileObjectRef = (function(obj) {
  if ((ScalaJS.is.scala_runtime_VolatileObjectRef(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.VolatileObjectRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_VolatileObjectRef = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_VolatileObjectRef)))
});
ScalaJS.asArrayOf.scala_runtime_VolatileObjectRef = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_VolatileObjectRef(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.VolatileObjectRef;", depth)
  }
});
ScalaJS.data.scala_runtime_VolatileObjectRef = new ScalaJS.ClassTypeData({
  scala_runtime_VolatileObjectRef: 0
}, false, "scala.runtime.VolatileObjectRef", ScalaJS.data.java_lang_Object, {
  scala_runtime_VolatileObjectRef: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_VolatileObjectRef.prototype.$classData = ScalaJS.data.scala_runtime_VolatileObjectRef;
//@ sourceMappingURL=VolatileObjectRef.js.map
