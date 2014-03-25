/** @constructor */
ScalaJS.c.scala_runtime_LongRef = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.elem$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long()
});
ScalaJS.c.scala_runtime_LongRef.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_LongRef.prototype.constructor = ScalaJS.c.scala_runtime_LongRef;
ScalaJS.c.scala_runtime_LongRef.prototype.elem__J = (function() {
  return this.elem$1
});
ScalaJS.c.scala_runtime_LongRef.prototype.elem$und$eq__J__V = (function(x$1) {
  this.elem$1 = x$1
});
ScalaJS.c.scala_runtime_LongRef.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__J__T(this.elem__J())
});
ScalaJS.c.scala_runtime_LongRef.prototype.init___J = (function(elem) {
  this.elem$1 = elem;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_LongRef.prototype.elem$und$eq__J__ = (function(x$1) {
  return ScalaJS.bV(this.elem$und$eq__J__V(x$1))
});
ScalaJS.c.scala_runtime_LongRef.prototype.elem__ = (function() {
  return ScalaJS.bJ(this.elem__J())
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_LongRef = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_LongRef.prototype = ScalaJS.c.scala_runtime_LongRef.prototype;
ScalaJS.is.scala_runtime_LongRef = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_LongRef)))
});
ScalaJS.as.scala_runtime_LongRef = (function(obj) {
  if ((ScalaJS.is.scala_runtime_LongRef(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.LongRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_LongRef = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_LongRef)))
});
ScalaJS.asArrayOf.scala_runtime_LongRef = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_LongRef(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.LongRef;", depth)
  }
});
ScalaJS.data.scala_runtime_LongRef = new ScalaJS.ClassTypeData({
  scala_runtime_LongRef: 0
}, false, "scala.runtime.LongRef", ScalaJS.data.java_lang_Object, {
  scala_runtime_LongRef: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_LongRef.prototype.$classData = ScalaJS.data.scala_runtime_LongRef;
//@ sourceMappingURL=LongRef.js.map
