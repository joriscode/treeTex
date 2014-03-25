/** @constructor */
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$5 = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$5.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$5.prototype.constructor = ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$5;
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$5.prototype.hash__Lscala_collection_TraversableOnce__I = (function(xs) {
  return ScalaJS.modules.scala_util_hashing_MurmurHash3().unorderedHash__Lscala_collection_TraversableOnce__I(xs)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$5.prototype.hash__O__I = (function(x) {
  return this.hash__Lscala_collection_TraversableOnce__I(ScalaJS.as.scala_collection_TraversableOnce(x))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$5.prototype.hash__Lscala_collection_TraversableOnce__ = (function(xs) {
  return ScalaJS.bI(this.hash__Lscala_collection_TraversableOnce__I(xs))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$5.prototype.hash__O__ = (function(x) {
  return ScalaJS.bI(this.hash__O__I(x))
});
/** @constructor */
ScalaJS.inheritable.scala_util_hashing_MurmurHash3$$anon$5 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_hashing_MurmurHash3$$anon$5.prototype = ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$5.prototype;
ScalaJS.is.scala_util_hashing_MurmurHash3$$anon$5 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_hashing_MurmurHash3$$anon$5)))
});
ScalaJS.as.scala_util_hashing_MurmurHash3$$anon$5 = (function(obj) {
  if ((ScalaJS.is.scala_util_hashing_MurmurHash3$$anon$5(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.hashing.MurmurHash3$$anon$5")
  }
});
ScalaJS.isArrayOf.scala_util_hashing_MurmurHash3$$anon$5 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_hashing_MurmurHash3$$anon$5)))
});
ScalaJS.asArrayOf.scala_util_hashing_MurmurHash3$$anon$5 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_hashing_MurmurHash3$$anon$5(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.hashing.MurmurHash3$$anon$5;", depth)
  }
});
ScalaJS.data.scala_util_hashing_MurmurHash3$$anon$5 = new ScalaJS.ClassTypeData({
  scala_util_hashing_MurmurHash3$$anon$5: 0
}, false, "scala.util.hashing.MurmurHash3$$anon$5", ScalaJS.data.java_lang_Object, {
  scala_util_hashing_MurmurHash3$$anon$5: 1,
  scala_util_hashing_Hashing: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$5.prototype.$classData = ScalaJS.data.scala_util_hashing_MurmurHash3$$anon$5;
//@ sourceMappingURL=MurmurHash3$$anon$5.js.map
