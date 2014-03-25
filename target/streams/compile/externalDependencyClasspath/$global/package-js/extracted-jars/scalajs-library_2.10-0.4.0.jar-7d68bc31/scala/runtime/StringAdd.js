/** @constructor */
ScalaJS.c.scala_runtime_StringAdd = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.self$1 = null
});
ScalaJS.c.scala_runtime_StringAdd.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_StringAdd.prototype.constructor = ScalaJS.c.scala_runtime_StringAdd;
ScalaJS.c.scala_runtime_StringAdd.prototype.self__O = (function() {
  return this.self$1
});
ScalaJS.c.scala_runtime_StringAdd.prototype.$$plus__T__T = (function(other) {
  return ScalaJS.modules.scala_runtime_StringAdd().$$plus$extension__O__T__T(this.self__O(), other)
});
ScalaJS.c.scala_runtime_StringAdd.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_StringAdd().hashCode$extension__O__I(this.self__O())
});
ScalaJS.c.scala_runtime_StringAdd.prototype.equals__O__Z = (function(x$1) {
  return ScalaJS.modules.scala_runtime_StringAdd().equals$extension__O__O__Z(this.self__O(), x$1)
});
ScalaJS.c.scala_runtime_StringAdd.prototype.init___O = (function(self) {
  this.self$1 = self;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_StringAdd.prototype.$$plus__T__ = (function(other) {
  return this.$$plus__T__T(other)
});
ScalaJS.c.scala_runtime_StringAdd.prototype.self__ = (function() {
  return this.self__O()
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_StringAdd = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_StringAdd.prototype = ScalaJS.c.scala_runtime_StringAdd.prototype;
ScalaJS.is.scala_runtime_StringAdd = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_StringAdd)))
});
ScalaJS.as.scala_runtime_StringAdd = (function(obj) {
  if ((ScalaJS.is.scala_runtime_StringAdd(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.StringAdd")
  }
});
ScalaJS.isArrayOf.scala_runtime_StringAdd = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_StringAdd)))
});
ScalaJS.asArrayOf.scala_runtime_StringAdd = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_StringAdd(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.StringAdd;", depth)
  }
});
ScalaJS.data.scala_runtime_StringAdd = new ScalaJS.ClassTypeData({
  scala_runtime_StringAdd: 0
}, false, "scala.runtime.StringAdd", ScalaJS.data.java_lang_Object, {
  scala_runtime_StringAdd: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_StringAdd.prototype.$classData = ScalaJS.data.scala_runtime_StringAdd;
//@ sourceMappingURL=StringAdd.js.map
