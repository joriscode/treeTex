/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$2 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this)
});
ScalaJS.c.scala_collection_Iterator$$anon$2.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$2.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$2;
ScalaJS.c.scala_collection_Iterator$$anon$2.prototype.hasNext__Z = (function() {
  return false
});
ScalaJS.c.scala_collection_Iterator$$anon$2.prototype.next__Lscala_Nothing = (function() {
  throw new ScalaJS.c.java_util_NoSuchElementException().init___T("next on empty iterator")
});
ScalaJS.c.scala_collection_Iterator$$anon$2.prototype.next__O = (function() {
  return this.next__Lscala_Nothing()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$2.prototype = ScalaJS.c.scala_collection_Iterator$$anon$2.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$2)))
});
ScalaJS.as.scala_collection_Iterator$$anon$2 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$2")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$2)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$2;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$2 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$2: 0
}, false, "scala.collection.Iterator$$anon$2", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$2: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$2.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$2;
//@ sourceMappingURL=Iterator$$anon$2.js.map