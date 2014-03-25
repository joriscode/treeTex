/** @constructor */
ScalaJS.c.scala_collection_concurrent_TrieMap$MangledHashing = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMap$MangledHashing.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_concurrent_TrieMap$MangledHashing.prototype.constructor = ScalaJS.c.scala_collection_concurrent_TrieMap$MangledHashing;
ScalaJS.c.scala_collection_concurrent_TrieMap$MangledHashing.prototype.hash__O__I = (function(k) {
  return ScalaJS.modules.scala_util_hashing_package().byteswap32__I__I(ScalaJS.modules.scala_runtime_ScalaRunTime().hash__O__I(k))
});
ScalaJS.c.scala_collection_concurrent_TrieMap$MangledHashing.prototype.hash__O__ = (function(k) {
  return ScalaJS.bI(this.hash__O__I(k))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_concurrent_TrieMap$MangledHashing = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_concurrent_TrieMap$MangledHashing.prototype = ScalaJS.c.scala_collection_concurrent_TrieMap$MangledHashing.prototype;
ScalaJS.is.scala_collection_concurrent_TrieMap$MangledHashing = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_concurrent_TrieMap$MangledHashing)))
});
ScalaJS.as.scala_collection_concurrent_TrieMap$MangledHashing = (function(obj) {
  if ((ScalaJS.is.scala_collection_concurrent_TrieMap$MangledHashing(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.concurrent.TrieMap$MangledHashing")
  }
});
ScalaJS.isArrayOf.scala_collection_concurrent_TrieMap$MangledHashing = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_concurrent_TrieMap$MangledHashing)))
});
ScalaJS.asArrayOf.scala_collection_concurrent_TrieMap$MangledHashing = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_concurrent_TrieMap$MangledHashing(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.concurrent.TrieMap$MangledHashing;", depth)
  }
});
ScalaJS.data.scala_collection_concurrent_TrieMap$MangledHashing = new ScalaJS.ClassTypeData({
  scala_collection_concurrent_TrieMap$MangledHashing: 0
}, false, "scala.collection.concurrent.TrieMap$MangledHashing", ScalaJS.data.java_lang_Object, {
  scala_collection_concurrent_TrieMap$MangledHashing: 1,
  scala_util_hashing_Hashing: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_concurrent_TrieMap$MangledHashing.prototype.$classData = ScalaJS.data.scala_collection_concurrent_TrieMap$MangledHashing;
//@ sourceMappingURL=TrieMap$MangledHashing.js.map
