/** @constructor */
ScalaJS.c.scala_runtime_ObjectRef = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.elem$1 = null
});
ScalaJS.c.scala_runtime_ObjectRef.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_ObjectRef.prototype.constructor = ScalaJS.c.scala_runtime_ObjectRef;
ScalaJS.c.scala_runtime_ObjectRef.prototype.elem__O = (function() {
  return this.elem$1
});
ScalaJS.c.scala_runtime_ObjectRef.prototype.elem$und$eq__O__V = (function(x$1) {
  this.elem$1 = x$1
});
ScalaJS.c.scala_runtime_ObjectRef.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__O__T(this.elem__O())
});
ScalaJS.c.scala_runtime_ObjectRef.prototype.init___O = (function(elem) {
  this.elem$1 = elem;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_ObjectRef.prototype.elem$und$eq__O__ = (function(x$1) {
  return ScalaJS.bV(this.elem$und$eq__O__V(x$1))
});
ScalaJS.c.scala_runtime_ObjectRef.prototype.elem__ = (function() {
  return this.elem__O()
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_ObjectRef = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_ObjectRef.prototype = ScalaJS.c.scala_runtime_ObjectRef.prototype;
ScalaJS.is.scala_runtime_ObjectRef = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_ObjectRef)))
});
ScalaJS.as.scala_runtime_ObjectRef = (function(obj) {
  if ((ScalaJS.is.scala_runtime_ObjectRef(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.ObjectRef")
  }
});
ScalaJS.isArrayOf.scala_runtime_ObjectRef = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_ObjectRef)))
});
ScalaJS.asArrayOf.scala_runtime_ObjectRef = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_ObjectRef(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.ObjectRef;", depth)
  }
});
ScalaJS.data.scala_runtime_ObjectRef = new ScalaJS.ClassTypeData({
  scala_runtime_ObjectRef: 0
}, false, "scala.runtime.ObjectRef", ScalaJS.data.java_lang_Object, {
  scala_runtime_ObjectRef: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_ObjectRef.prototype.$classData = ScalaJS.data.scala_runtime_ObjectRef;
//@ sourceMappingURL=ObjectRef.js.map
