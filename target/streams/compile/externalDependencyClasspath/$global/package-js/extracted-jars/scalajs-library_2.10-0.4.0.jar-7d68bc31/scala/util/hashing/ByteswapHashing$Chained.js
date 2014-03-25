/** @constructor */
ScalaJS.c.scala_util_hashing_ByteswapHashing$Chained = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.h$1 = null
});
ScalaJS.c.scala_util_hashing_ByteswapHashing$Chained.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_hashing_ByteswapHashing$Chained.prototype.constructor = ScalaJS.c.scala_util_hashing_ByteswapHashing$Chained;
ScalaJS.c.scala_util_hashing_ByteswapHashing$Chained.prototype.hash__O__I = (function(v) {
  return ScalaJS.modules.scala_util_hashing_package().byteswap32__I__I(this.h$1.hash__O__I(v))
});
ScalaJS.c.scala_util_hashing_ByteswapHashing$Chained.prototype.init___Lscala_util_hashing_Hashing = (function(h) {
  this.h$1 = h;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_util_hashing_ByteswapHashing$Chained.prototype.hash__O__ = (function(v) {
  return ScalaJS.bI(this.hash__O__I(v))
});
/** @constructor */
ScalaJS.inheritable.scala_util_hashing_ByteswapHashing$Chained = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_hashing_ByteswapHashing$Chained.prototype = ScalaJS.c.scala_util_hashing_ByteswapHashing$Chained.prototype;
ScalaJS.is.scala_util_hashing_ByteswapHashing$Chained = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_hashing_ByteswapHashing$Chained)))
});
ScalaJS.as.scala_util_hashing_ByteswapHashing$Chained = (function(obj) {
  if ((ScalaJS.is.scala_util_hashing_ByteswapHashing$Chained(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.hashing.ByteswapHashing$Chained")
  }
});
ScalaJS.isArrayOf.scala_util_hashing_ByteswapHashing$Chained = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_hashing_ByteswapHashing$Chained)))
});
ScalaJS.asArrayOf.scala_util_hashing_ByteswapHashing$Chained = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_hashing_ByteswapHashing$Chained(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.hashing.ByteswapHashing$Chained;", depth)
  }
});
ScalaJS.data.scala_util_hashing_ByteswapHashing$Chained = new ScalaJS.ClassTypeData({
  scala_util_hashing_ByteswapHashing$Chained: 0
}, false, "scala.util.hashing.ByteswapHashing$Chained", ScalaJS.data.java_lang_Object, {
  scala_util_hashing_ByteswapHashing$Chained: 1,
  scala_util_hashing_Hashing: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_hashing_ByteswapHashing$Chained.prototype.$classData = ScalaJS.data.scala_util_hashing_ByteswapHashing$Chained;
//@ sourceMappingURL=ByteswapHashing$Chained.js.map
