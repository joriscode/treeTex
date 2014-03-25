/** @constructor */
ScalaJS.c.scala_collection_concurrent_TrieMapIterator$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_concurrent_TrieMapIterator$.prototype.constructor = ScalaJS.c.scala_collection_concurrent_TrieMapIterator$;
ScalaJS.c.scala_collection_concurrent_TrieMapIterator$.prototype.$$lessinit$greater$default$3__Z = (function() {
  return true
});
/** @constructor */
ScalaJS.inheritable.scala_collection_concurrent_TrieMapIterator$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_concurrent_TrieMapIterator$.prototype = ScalaJS.c.scala_collection_concurrent_TrieMapIterator$.prototype;
ScalaJS.is.scala_collection_concurrent_TrieMapIterator$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_concurrent_TrieMapIterator$)))
});
ScalaJS.as.scala_collection_concurrent_TrieMapIterator$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_concurrent_TrieMapIterator$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.concurrent.TrieMapIterator")
  }
});
ScalaJS.isArrayOf.scala_collection_concurrent_TrieMapIterator$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_concurrent_TrieMapIterator$)))
});
ScalaJS.asArrayOf.scala_collection_concurrent_TrieMapIterator$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_concurrent_TrieMapIterator$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.concurrent.TrieMapIterator;", depth)
  }
});
ScalaJS.data.scala_collection_concurrent_TrieMapIterator$ = new ScalaJS.ClassTypeData({
  scala_collection_concurrent_TrieMapIterator$: 0
}, false, "scala.collection.concurrent.TrieMapIterator$", ScalaJS.data.java_lang_Object, {
  scala_collection_concurrent_TrieMapIterator$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator$.prototype.$classData = ScalaJS.data.scala_collection_concurrent_TrieMapIterator$;
ScalaJS.moduleInstances.scala_collection_concurrent_TrieMapIterator = undefined;
ScalaJS.modules.scala_collection_concurrent_TrieMapIterator = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_concurrent_TrieMapIterator)) {
    ScalaJS.moduleInstances.scala_collection_concurrent_TrieMapIterator = new ScalaJS.c.scala_collection_concurrent_TrieMapIterator$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_concurrent_TrieMapIterator
});
//@ sourceMappingURL=TrieMapIterator$.js.map
