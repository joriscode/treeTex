/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$9 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.elem$3$2 = null
});
ScalaJS.c.scala_collection_Iterator$$anon$9.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$9.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$9;
ScalaJS.c.scala_collection_Iterator$$anon$9.prototype.hasNext__Z = (function() {
  return true
});
ScalaJS.c.scala_collection_Iterator$$anon$9.prototype.next__O = (function() {
  return this.elem$3$2.apply__O()
});
ScalaJS.c.scala_collection_Iterator$$anon$9.prototype.init___Lscala_Function0 = (function(elem$3) {
  this.elem$3$2 = elem$3;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$9 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$9.prototype = ScalaJS.c.scala_collection_Iterator$$anon$9.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$9 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$9)))
});
ScalaJS.as.scala_collection_Iterator$$anon$9 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$9(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$9")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$9 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$9)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$9 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$9(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$9;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$9 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$9: 0
}, false, "scala.collection.Iterator$$anon$9", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$9: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$9.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$9;
//@ sourceMappingURL=Iterator$$anon$9.js.map
