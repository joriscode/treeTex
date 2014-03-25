/** @constructor */
ScalaJS.c.scala_runtime_VolatileIntRef = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.elem$1 = 0
});
ScalaJS.c.scala_runtime_VolatileIntRef.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_VolatileIntRef.prototype.constructor = ScalaJS.c.scala_runtime_VolatileIntRef;
ScalaJS.c.scala_runtime_VolatileIntRef.prototype.elem__I = (function() {
  return this.elem$1
});
ScalaJS.c.scala_runtime_VolatileIntRef.prototype.elem$und$eq__I__V = (function(x$1) {
  this.elem$1 = x$1
});
ScalaJS.c.scala_runtime_VolatileIntRef.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__I__T(this.elem__I())
});
ScalaJS.c.scala_runtime_VolatileIntRef.prototype.init___I = (function(elem) {
  this.elem$1 = elem;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_VolatileIntRef.prototype.elem$und$eq__I__ = (function(x$1) {
  return ScalaJS.bV(this.elem$und$eq__I__V(x$1))
});
ScalaJS.c.scala_runtime_VolatileIntRef.prototype.elem__ = (function() {
  return ScalaJS.bI(this.elem__I())
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_VolatileIntRef = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_VolatileIntRef.prototype = ScalaJS.c.scala_runtime_VolatileIntRef.prototype;
ScalaJS.is.scala_runtime_VolatileIntRef = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_VolatileIntRef)))
});
ScalaJS.as.scala_runtime_VolatileIntRef = (function(obj) {
  if ((ScalaJS.is.scala_runtime_VolatileIntRef(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.VolatileIntRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_VolatileIntRef = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_VolatileIntRef)))
});
ScalaJS.asArrayOf.scala_runtime_VolatileIntRef = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_VolatileIntRef(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.VolatileIntRef;", depth)
  }
});
ScalaJS.data.scala_runtime_VolatileIntRef = new ScalaJS.ClassTypeData({
  scala_runtime_VolatileIntRef: 0
}, false, "scala.runtime.VolatileIntRef", ScalaJS.data.java_lang_Object, {
  scala_runtime_VolatileIntRef: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_VolatileIntRef.prototype.$classData = ScalaJS.data.scala_runtime_VolatileIntRef;
//@ sourceMappingURL=VolatileIntRef.js.map
