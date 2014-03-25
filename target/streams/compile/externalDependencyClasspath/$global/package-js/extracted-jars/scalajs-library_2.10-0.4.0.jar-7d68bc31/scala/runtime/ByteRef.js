/** @constructor */
ScalaJS.c.scala_runtime_ByteRef = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.elem$1 = 0
});
ScalaJS.c.scala_runtime_ByteRef.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_ByteRef.prototype.constructor = ScalaJS.c.scala_runtime_ByteRef;
ScalaJS.c.scala_runtime_ByteRef.prototype.elem__B = (function() {
  return this.elem$1
});
ScalaJS.c.scala_runtime_ByteRef.prototype.elem$und$eq__B__V = (function(x$1) {
  this.elem$1 = x$1
});
ScalaJS.c.scala_runtime_ByteRef.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__I__T(this.elem__B())
});
ScalaJS.c.scala_runtime_ByteRef.prototype.init___B = (function(elem) {
  this.elem$1 = elem;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_ByteRef.prototype.elem$und$eq__B__ = (function(x$1) {
  return ScalaJS.bV(this.elem$und$eq__B__V(x$1))
});
ScalaJS.c.scala_runtime_ByteRef.prototype.elem__ = (function() {
  return ScalaJS.bB(this.elem__B())
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_ByteRef = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_ByteRef.prototype = ScalaJS.c.scala_runtime_ByteRef.prototype;
ScalaJS.is.scala_runtime_ByteRef = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_ByteRef)))
});
ScalaJS.as.scala_runtime_ByteRef = (function(obj) {
  if ((ScalaJS.is.scala_runtime_ByteRef(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.ByteRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_ByteRef = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_ByteRef)))
});
ScalaJS.asArrayOf.scala_runtime_ByteRef = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_ByteRef(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.ByteRef;", depth)
  }
});
ScalaJS.data.scala_runtime_ByteRef = new ScalaJS.ClassTypeData({
  scala_runtime_ByteRef: 0
}, false, "scala.runtime.ByteRef", ScalaJS.data.java_lang_Object, {
  scala_runtime_ByteRef: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_ByteRef.prototype.$classData = ScalaJS.data.scala_runtime_ByteRef;
//@ sourceMappingURL=ByteRef.js.map
