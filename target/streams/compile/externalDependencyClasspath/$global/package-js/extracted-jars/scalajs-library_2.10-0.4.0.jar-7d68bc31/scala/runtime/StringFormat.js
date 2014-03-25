/** @constructor */
ScalaJS.c.scala_runtime_StringFormat = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.self$1 = null
});
ScalaJS.c.scala_runtime_StringFormat.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_StringFormat.prototype.constructor = ScalaJS.c.scala_runtime_StringFormat;
ScalaJS.c.scala_runtime_StringFormat.prototype.self__O = (function() {
  return this.self$1
});
ScalaJS.c.scala_runtime_StringFormat.prototype.formatted__T__T = (function(fmtstr) {
  return ScalaJS.modules.scala_runtime_StringFormat().formatted$extension__O__T__T(this.self__O(), fmtstr)
});
ScalaJS.c.scala_runtime_StringFormat.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_StringFormat().hashCode$extension__O__I(this.self__O())
});
ScalaJS.c.scala_runtime_StringFormat.prototype.equals__O__Z = (function(x$1) {
  return ScalaJS.modules.scala_runtime_StringFormat().equals$extension__O__O__Z(this.self__O(), x$1)
});
ScalaJS.c.scala_runtime_StringFormat.prototype.init___O = (function(self) {
  this.self$1 = self;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_StringFormat.prototype.formatted__T__ = (function(fmtstr) {
  return this.formatted__T__T(fmtstr)
});
ScalaJS.c.scala_runtime_StringFormat.prototype.self__ = (function() {
  return this.self__O()
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_StringFormat = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_StringFormat.prototype = ScalaJS.c.scala_runtime_StringFormat.prototype;
ScalaJS.is.scala_runtime_StringFormat = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_StringFormat)))
});
ScalaJS.as.scala_runtime_StringFormat = (function(obj) {
  if ((ScalaJS.is.scala_runtime_StringFormat(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.StringFormat")
  }
});
ScalaJS.isArrayOf.scala_runtime_StringFormat = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_StringFormat)))
});
ScalaJS.asArrayOf.scala_runtime_StringFormat = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_StringFormat(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.StringFormat;", depth)
  }
});
ScalaJS.data.scala_runtime_StringFormat = new ScalaJS.ClassTypeData({
  scala_runtime_StringFormat: 0
}, false, "scala.runtime.StringFormat", ScalaJS.data.java_lang_Object, {
  scala_runtime_StringFormat: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_StringFormat.prototype.$classData = ScalaJS.data.scala_runtime_StringFormat;
//@ sourceMappingURL=StringFormat.js.map
