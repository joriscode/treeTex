/** @constructor */
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$3 = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$3.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$3.prototype.constructor = ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$3;
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$3.prototype.hash__Lscala_Product__I = (function(x$2) {
  return ScalaJS.modules.scala_util_hashing_MurmurHash3().productHash__Lscala_Product__I(x$2)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$3.prototype.hash__O__I = (function(x) {
  return this.hash__Lscala_Product__I(ScalaJS.as.scala_Product(x))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$3.prototype.hash__Lscala_Product__ = (function(x) {
  return ScalaJS.bI(this.hash__Lscala_Product__I(x))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$3.prototype.hash__O__ = (function(x$2) {
  return ScalaJS.bI(this.hash__O__I(x$2))
});
/** @constructor */
ScalaJS.inheritable.scala_util_hashing_MurmurHash3$$anon$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_hashing_MurmurHash3$$anon$3.prototype = ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$3.prototype;
ScalaJS.is.scala_util_hashing_MurmurHash3$$anon$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_hashing_MurmurHash3$$anon$3)))
});
ScalaJS.as.scala_util_hashing_MurmurHash3$$anon$3 = (function(obj) {
  if ((ScalaJS.is.scala_util_hashing_MurmurHash3$$anon$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.hashing.MurmurHash3$$anon$3")
  }
});
ScalaJS.isArrayOf.scala_util_hashing_MurmurHash3$$anon$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_hashing_MurmurHash3$$anon$3)))
});
ScalaJS.asArrayOf.scala_util_hashing_MurmurHash3$$anon$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_hashing_MurmurHash3$$anon$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.hashing.MurmurHash3$$anon$3;", depth)
  }
});
ScalaJS.data.scala_util_hashing_MurmurHash3$$anon$3 = new ScalaJS.ClassTypeData({
  scala_util_hashing_MurmurHash3$$anon$3: 0
}, false, "scala.util.hashing.MurmurHash3$$anon$3", ScalaJS.data.java_lang_Object, {
  scala_util_hashing_MurmurHash3$$anon$3: 1,
  scala_util_hashing_Hashing: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$3.prototype.$classData = ScalaJS.data.scala_util_hashing_MurmurHash3$$anon$3;
//@ sourceMappingURL=MurmurHash3$$anon$3.js.map
