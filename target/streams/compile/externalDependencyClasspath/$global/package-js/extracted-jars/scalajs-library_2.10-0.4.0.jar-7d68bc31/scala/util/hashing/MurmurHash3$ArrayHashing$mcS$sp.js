/** @constructor */
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp = (function() {
  ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing.call(this)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp.prototype = new ScalaJS.inheritable.scala_util_hashing_MurmurHash3$ArrayHashing();
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp.prototype.constructor = ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp;
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp.prototype.hash__AS__I = (function(a$2) {
  return this.hash$mcS$sp__AS__I(a$2)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp.prototype.hash$mcS$sp__AS__I = (function(a) {
  return ScalaJS.modules.scala_util_hashing_MurmurHash3().arrayHash$mSc$sp__AS__I(a)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp.prototype.hash__O__I = (function(a) {
  return this.hash__AS__I(ScalaJS.asArrayOf.scala_Short(a, 1))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp.prototype.hash__AS__ = (function(a) {
  return ScalaJS.bI(this.hash__AS__I(a))
});
/** @constructor */
ScalaJS.inheritable.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp.prototype = ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp.prototype;
ScalaJS.is.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp)))
});
ScalaJS.as.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp = (function(obj) {
  if ((ScalaJS.is.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.hashing.MurmurHash3$ArrayHashing$mcS$sp")
  }
});
ScalaJS.isArrayOf.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp)))
});
ScalaJS.asArrayOf.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.hashing.MurmurHash3$ArrayHashing$mcS$sp;", depth)
  }
});
ScalaJS.data.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp = new ScalaJS.ClassTypeData({
  scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp: 0
}, false, "scala.util.hashing.MurmurHash3$ArrayHashing$mcS$sp", ScalaJS.data.scala_util_hashing_MurmurHash3$ArrayHashing, {
  scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp: 1,
  scala_util_hashing_MurmurHash3$ArrayHashing: 1,
  scala_util_hashing_Hashing: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp.prototype.$classData = ScalaJS.data.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp;
//@ sourceMappingURL=MurmurHash3$ArrayHashing$mcS$sp.js.map
