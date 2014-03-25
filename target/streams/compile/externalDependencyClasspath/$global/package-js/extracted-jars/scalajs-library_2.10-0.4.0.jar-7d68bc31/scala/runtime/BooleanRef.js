/** @constructor */
ScalaJS.c.scala_runtime_BooleanRef = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.elem$1 = false
});
ScalaJS.c.scala_runtime_BooleanRef.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_BooleanRef.prototype.constructor = ScalaJS.c.scala_runtime_BooleanRef;
ScalaJS.c.scala_runtime_BooleanRef.prototype.elem__Z = (function() {
  return this.elem$1
});
ScalaJS.c.scala_runtime_BooleanRef.prototype.elem$und$eq__Z__V = (function(x$1) {
  this.elem$1 = x$1
});
ScalaJS.c.scala_runtime_BooleanRef.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__Z__T(this.elem__Z())
});
ScalaJS.c.scala_runtime_BooleanRef.prototype.init___Z = (function(elem) {
  this.elem$1 = elem;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_BooleanRef.prototype.elem$und$eq__Z__ = (function(x$1) {
  return ScalaJS.bV(this.elem$und$eq__Z__V(x$1))
});
ScalaJS.c.scala_runtime_BooleanRef.prototype.elem__ = (function() {
  return ScalaJS.bZ(this.elem__Z())
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_BooleanRef = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_BooleanRef.prototype = ScalaJS.c.scala_runtime_BooleanRef.prototype;
ScalaJS.is.scala_runtime_BooleanRef = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_BooleanRef)))
});
ScalaJS.as.scala_runtime_BooleanRef = (function(obj) {
  if ((ScalaJS.is.scala_runtime_BooleanRef(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.BooleanRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_BooleanRef = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_BooleanRef)))
});
ScalaJS.asArrayOf.scala_runtime_BooleanRef = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_BooleanRef(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.BooleanRef;", depth)
  }
});
ScalaJS.data.scala_runtime_BooleanRef = new ScalaJS.ClassTypeData({
  scala_runtime_BooleanRef: 0
}, false, "scala.runtime.BooleanRef", ScalaJS.data.java_lang_Object, {
  scala_runtime_BooleanRef: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_BooleanRef.prototype.$classData = ScalaJS.data.scala_runtime_BooleanRef;
//@ sourceMappingURL=BooleanRef.js.map
