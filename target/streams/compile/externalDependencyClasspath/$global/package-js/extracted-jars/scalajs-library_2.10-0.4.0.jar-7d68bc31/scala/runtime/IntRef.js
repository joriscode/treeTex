/** @constructor */
ScalaJS.c.scala_runtime_IntRef = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.elem$1 = 0
});
ScalaJS.c.scala_runtime_IntRef.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_IntRef.prototype.constructor = ScalaJS.c.scala_runtime_IntRef;
ScalaJS.c.scala_runtime_IntRef.prototype.elem__I = (function() {
  return this.elem$1
});
ScalaJS.c.scala_runtime_IntRef.prototype.elem$und$eq__I__V = (function(x$1) {
  this.elem$1 = x$1
});
ScalaJS.c.scala_runtime_IntRef.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__I__T(this.elem__I())
});
ScalaJS.c.scala_runtime_IntRef.prototype.init___I = (function(elem) {
  this.elem$1 = elem;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_IntRef.prototype.elem$und$eq__I__ = (function(x$1) {
  return ScalaJS.bV(this.elem$und$eq__I__V(x$1))
});
ScalaJS.c.scala_runtime_IntRef.prototype.elem__ = (function() {
  return ScalaJS.bI(this.elem__I())
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_IntRef = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_IntRef.prototype = ScalaJS.c.scala_runtime_IntRef.prototype;
ScalaJS.is.scala_runtime_IntRef = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_IntRef)))
});
ScalaJS.as.scala_runtime_IntRef = (function(obj) {
  if ((ScalaJS.is.scala_runtime_IntRef(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.IntRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_IntRef = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_IntRef)))
});
ScalaJS.asArrayOf.scala_runtime_IntRef = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_IntRef(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.IntRef;", depth)
  }
});
ScalaJS.data.scala_runtime_IntRef = new ScalaJS.ClassTypeData({
  scala_runtime_IntRef: 0
}, false, "scala.runtime.IntRef", ScalaJS.data.java_lang_Object, {
  scala_runtime_IntRef: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_IntRef.prototype.$classData = ScalaJS.data.scala_runtime_IntRef;
//@ sourceMappingURL=IntRef.js.map
