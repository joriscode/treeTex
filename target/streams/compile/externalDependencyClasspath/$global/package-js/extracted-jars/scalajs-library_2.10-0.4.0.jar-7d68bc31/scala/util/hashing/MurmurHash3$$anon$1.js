/** @constructor */
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$1 = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$1.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$1.prototype.constructor = ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$1;
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$1.prototype.hash__AB__I = (function(data) {
  return ScalaJS.modules.scala_util_hashing_MurmurHash3().bytesHash__AB__I(data)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$1.prototype.hash__O__I = (function(x) {
  return this.hash__AB__I(ScalaJS.asArrayOf.scala_Byte(x, 1))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$1.prototype.hash__AB__ = (function(data) {
  return ScalaJS.bI(this.hash__AB__I(data))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$1.prototype.hash__O__ = (function(x) {
  return ScalaJS.bI(this.hash__O__I(x))
});
/** @constructor */
ScalaJS.inheritable.scala_util_hashing_MurmurHash3$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_hashing_MurmurHash3$$anon$1.prototype = ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$1.prototype;
ScalaJS.is.scala_util_hashing_MurmurHash3$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_hashing_MurmurHash3$$anon$1)))
});
ScalaJS.as.scala_util_hashing_MurmurHash3$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_util_hashing_MurmurHash3$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.hashing.MurmurHash3$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_util_hashing_MurmurHash3$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_hashing_MurmurHash3$$anon$1)))
});
ScalaJS.asArrayOf.scala_util_hashing_MurmurHash3$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_hashing_MurmurHash3$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.hashing.MurmurHash3$$anon$1;", depth)
  }
});
ScalaJS.data.scala_util_hashing_MurmurHash3$$anon$1 = new ScalaJS.ClassTypeData({
  scala_util_hashing_MurmurHash3$$anon$1: 0
}, false, "scala.util.hashing.MurmurHash3$$anon$1", ScalaJS.data.java_lang_Object, {
  scala_util_hashing_MurmurHash3$$anon$1: 1,
  scala_util_hashing_Hashing: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$1.prototype.$classData = ScalaJS.data.scala_util_hashing_MurmurHash3$$anon$1;
//@ sourceMappingURL=MurmurHash3$$anon$1.js.map
