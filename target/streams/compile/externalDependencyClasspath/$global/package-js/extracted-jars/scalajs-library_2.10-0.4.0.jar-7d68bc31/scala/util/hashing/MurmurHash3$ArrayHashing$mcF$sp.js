/** @constructor */
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp = (function() {
  ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing.call(this)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp.prototype = new ScalaJS.inheritable.scala_util_hashing_MurmurHash3$ArrayHashing();
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp.prototype.constructor = ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp;
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp.prototype.hash__AF__I = (function(a$2) {
  return this.hash$mcF$sp__AF__I(a$2)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp.prototype.hash$mcF$sp__AF__I = (function(a) {
  return ScalaJS.modules.scala_util_hashing_MurmurHash3().arrayHash$mFc$sp__AF__I(a)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp.prototype.hash__O__I = (function(a) {
  return this.hash__AF__I(ScalaJS.asArrayOf.scala_Float(a, 1))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp.prototype.hash__AF__ = (function(a) {
  return ScalaJS.bI(this.hash__AF__I(a))
});
/** @constructor */
ScalaJS.inheritable.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp.prototype = ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp.prototype;
ScalaJS.is.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp)))
});
ScalaJS.as.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp = (function(obj) {
  if ((ScalaJS.is.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.hashing.MurmurHash3$ArrayHashing$mcF$sp")
  }
});
ScalaJS.isArrayOf.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp)))
});
ScalaJS.asArrayOf.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.hashing.MurmurHash3$ArrayHashing$mcF$sp;", depth)
  }
});
ScalaJS.data.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp = new ScalaJS.ClassTypeData({
  scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp: 0
}, false, "scala.util.hashing.MurmurHash3$ArrayHashing$mcF$sp", ScalaJS.data.scala_util_hashing_MurmurHash3$ArrayHashing, {
  scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp: 1,
  scala_util_hashing_MurmurHash3$ArrayHashing: 1,
  scala_util_hashing_Hashing: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp.prototype.$classData = ScalaJS.data.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp;
//@ sourceMappingURL=MurmurHash3$ArrayHashing$mcF$sp.js.map
