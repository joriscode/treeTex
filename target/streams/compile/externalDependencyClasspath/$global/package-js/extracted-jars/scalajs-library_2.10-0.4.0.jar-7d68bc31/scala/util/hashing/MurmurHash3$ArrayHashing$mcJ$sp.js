/** @constructor */
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp = (function() {
  ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing.call(this)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp.prototype = new ScalaJS.inheritable.scala_util_hashing_MurmurHash3$ArrayHashing();
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp.prototype.constructor = ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp;
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp.prototype.hash__AJ__I = (function(a$2) {
  return this.hash$mcJ$sp__AJ__I(a$2)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp.prototype.hash$mcJ$sp__AJ__I = (function(a) {
  return ScalaJS.modules.scala_util_hashing_MurmurHash3().arrayHash$mJc$sp__AJ__I(a)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp.prototype.hash__O__I = (function(a) {
  return this.hash__AJ__I(ScalaJS.asArrayOf.scala_Long(a, 1))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp.prototype.hash__AJ__ = (function(a) {
  return ScalaJS.bI(this.hash__AJ__I(a))
});
/** @constructor */
ScalaJS.inheritable.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp.prototype = ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp.prototype;
ScalaJS.is.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp)))
});
ScalaJS.as.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp = (function(obj) {
  if ((ScalaJS.is.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.hashing.MurmurHash3$ArrayHashing$mcJ$sp")
  }
});
ScalaJS.isArrayOf.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp)))
});
ScalaJS.asArrayOf.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.hashing.MurmurHash3$ArrayHashing$mcJ$sp;", depth)
  }
});
ScalaJS.data.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp = new ScalaJS.ClassTypeData({
  scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp: 0
}, false, "scala.util.hashing.MurmurHash3$ArrayHashing$mcJ$sp", ScalaJS.data.scala_util_hashing_MurmurHash3$ArrayHashing, {
  scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp: 1,
  scala_util_hashing_MurmurHash3$ArrayHashing: 1,
  scala_util_hashing_Hashing: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp.prototype.$classData = ScalaJS.data.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp;
//@ sourceMappingURL=MurmurHash3$ArrayHashing$mcJ$sp.js.map
