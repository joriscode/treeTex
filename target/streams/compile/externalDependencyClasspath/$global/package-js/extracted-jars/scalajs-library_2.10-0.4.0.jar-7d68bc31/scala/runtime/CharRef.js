/** @constructor */
ScalaJS.c.scala_runtime_CharRef = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.elem$1 = 0
});
ScalaJS.c.scala_runtime_CharRef.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_CharRef.prototype.constructor = ScalaJS.c.scala_runtime_CharRef;
ScalaJS.c.scala_runtime_CharRef.prototype.elem__C = (function() {
  return this.elem$1
});
ScalaJS.c.scala_runtime_CharRef.prototype.elem$und$eq__C__V = (function(x$1) {
  this.elem$1 = x$1
});
ScalaJS.c.scala_runtime_CharRef.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__C__T(this.elem__C())
});
ScalaJS.c.scala_runtime_CharRef.prototype.init___C = (function(elem) {
  this.elem$1 = elem;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_CharRef.prototype.elem$und$eq__C__ = (function(x$1) {
  return ScalaJS.bV(this.elem$und$eq__C__V(x$1))
});
ScalaJS.c.scala_runtime_CharRef.prototype.elem__ = (function() {
  return ScalaJS.bC(this.elem__C())
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_CharRef = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_CharRef.prototype = ScalaJS.c.scala_runtime_CharRef.prototype;
ScalaJS.is.scala_runtime_CharRef = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_CharRef)))
});
ScalaJS.as.scala_runtime_CharRef = (function(obj) {
  if ((ScalaJS.is.scala_runtime_CharRef(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.CharRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_CharRef = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_CharRef)))
});
ScalaJS.asArrayOf.scala_runtime_CharRef = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_CharRef(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.CharRef;", depth)
  }
});
ScalaJS.data.scala_runtime_CharRef = new ScalaJS.ClassTypeData({
  scala_runtime_CharRef: 0
}, false, "scala.runtime.CharRef", ScalaJS.data.java_lang_Object, {
  scala_runtime_CharRef: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_CharRef.prototype.$classData = ScalaJS.data.scala_runtime_CharRef;
//@ sourceMappingURL=CharRef.js.map
