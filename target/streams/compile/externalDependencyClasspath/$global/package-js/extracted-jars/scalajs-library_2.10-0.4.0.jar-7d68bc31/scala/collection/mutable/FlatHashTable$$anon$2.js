/** @constructor */
ScalaJS.c.scala_collection_mutable_FlatHashTable$$anon$2 = (function() {
  ScalaJS.c.java_lang_ThreadLocal.call(this)
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$$anon$2.prototype = new ScalaJS.inheritable.java_lang_ThreadLocal();
ScalaJS.c.scala_collection_mutable_FlatHashTable$$anon$2.prototype.constructor = ScalaJS.c.scala_collection_mutable_FlatHashTable$$anon$2;
ScalaJS.c.scala_collection_mutable_FlatHashTable$$anon$2.prototype.initialValue__Lscala_util_Random = (function() {
  return new ScalaJS.c.scala_util_Random().init___()
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$$anon$2.prototype.initialValue__O = (function() {
  return this.initialValue__Lscala_util_Random()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_FlatHashTable$$anon$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_FlatHashTable$$anon$2.prototype = ScalaJS.c.scala_collection_mutable_FlatHashTable$$anon$2.prototype;
ScalaJS.is.scala_collection_mutable_FlatHashTable$$anon$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_FlatHashTable$$anon$2)))
});
ScalaJS.as.scala_collection_mutable_FlatHashTable$$anon$2 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_FlatHashTable$$anon$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.FlatHashTable$$anon$2")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_FlatHashTable$$anon$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_FlatHashTable$$anon$2)))
});
ScalaJS.asArrayOf.scala_collection_mutable_FlatHashTable$$anon$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_FlatHashTable$$anon$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.FlatHashTable$$anon$2;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_FlatHashTable$$anon$2 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_FlatHashTable$$anon$2: 0
}, false, "scala.collection.mutable.FlatHashTable$$anon$2", ScalaJS.data.java_lang_ThreadLocal, {
  scala_collection_mutable_FlatHashTable$$anon$2: 1,
  java_lang_ThreadLocal: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$$anon$2.prototype.$classData = ScalaJS.data.scala_collection_mutable_FlatHashTable$$anon$2;
//@ sourceMappingURL=FlatHashTable$$anon$2.js.map
