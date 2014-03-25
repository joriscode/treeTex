/** @constructor */
ScalaJS.c.scala_util_hashing_Hashing$$anon$1 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.f$1$1 = null
});
ScalaJS.c.scala_util_hashing_Hashing$$anon$1.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_hashing_Hashing$$anon$1.prototype.constructor = ScalaJS.c.scala_util_hashing_Hashing$$anon$1;
ScalaJS.c.scala_util_hashing_Hashing$$anon$1.prototype.hash__O__I = (function(x$2) {
  return ScalaJS.uI(this.f$1$1.apply__O__O(x$2))
});
ScalaJS.c.scala_util_hashing_Hashing$$anon$1.prototype.init___Lscala_Function1 = (function(f$1) {
  this.f$1$1 = f$1;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_util_hashing_Hashing$$anon$1.prototype.hash__O__ = (function(x) {
  return ScalaJS.bI(this.hash__O__I(x))
});
/** @constructor */
ScalaJS.inheritable.scala_util_hashing_Hashing$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_hashing_Hashing$$anon$1.prototype = ScalaJS.c.scala_util_hashing_Hashing$$anon$1.prototype;
ScalaJS.is.scala_util_hashing_Hashing$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_hashing_Hashing$$anon$1)))
});
ScalaJS.as.scala_util_hashing_Hashing$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_util_hashing_Hashing$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.hashing.Hashing$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_util_hashing_Hashing$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_hashing_Hashing$$anon$1)))
});
ScalaJS.asArrayOf.scala_util_hashing_Hashing$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_hashing_Hashing$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.hashing.Hashing$$anon$1;", depth)
  }
});
ScalaJS.data.scala_util_hashing_Hashing$$anon$1 = new ScalaJS.ClassTypeData({
  scala_util_hashing_Hashing$$anon$1: 0
}, false, "scala.util.hashing.Hashing$$anon$1", ScalaJS.data.java_lang_Object, {
  scala_util_hashing_Hashing$$anon$1: 1,
  scala_util_hashing_Hashing: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_hashing_Hashing$$anon$1.prototype.$classData = ScalaJS.data.scala_util_hashing_Hashing$$anon$1;
//@ sourceMappingURL=Hashing$$anon$1.js.map
