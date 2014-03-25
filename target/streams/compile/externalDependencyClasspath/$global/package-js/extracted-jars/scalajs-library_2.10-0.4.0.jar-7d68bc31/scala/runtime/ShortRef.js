/** @constructor */
ScalaJS.c.scala_runtime_ShortRef = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.elem$1 = 0
});
ScalaJS.c.scala_runtime_ShortRef.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_ShortRef.prototype.constructor = ScalaJS.c.scala_runtime_ShortRef;
ScalaJS.c.scala_runtime_ShortRef.prototype.elem__S = (function() {
  return this.elem$1
});
ScalaJS.c.scala_runtime_ShortRef.prototype.elem$und$eq__S__V = (function(x$1) {
  this.elem$1 = x$1
});
ScalaJS.c.scala_runtime_ShortRef.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__I__T(this.elem__S())
});
ScalaJS.c.scala_runtime_ShortRef.prototype.init___S = (function(elem) {
  this.elem$1 = elem;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_ShortRef.prototype.elem$und$eq__S__ = (function(x$1) {
  return ScalaJS.bV(this.elem$und$eq__S__V(x$1))
});
ScalaJS.c.scala_runtime_ShortRef.prototype.elem__ = (function() {
  return ScalaJS.bS(this.elem__S())
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_ShortRef = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_ShortRef.prototype = ScalaJS.c.scala_runtime_ShortRef.prototype;
ScalaJS.is.scala_runtime_ShortRef = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_ShortRef)))
});
ScalaJS.as.scala_runtime_ShortRef = (function(obj) {
  if ((ScalaJS.is.scala_runtime_ShortRef(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.ShortRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_ShortRef = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_ShortRef)))
});
ScalaJS.asArrayOf.scala_runtime_ShortRef = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_ShortRef(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.ShortRef;", depth)
  }
});
ScalaJS.data.scala_runtime_ShortRef = new ScalaJS.ClassTypeData({
  scala_runtime_ShortRef: 0
}, false, "scala.runtime.ShortRef", ScalaJS.data.java_lang_Object, {
  scala_runtime_ShortRef: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_ShortRef.prototype.$classData = ScalaJS.data.scala_runtime_ShortRef;
//@ sourceMappingURL=ShortRef.js.map
