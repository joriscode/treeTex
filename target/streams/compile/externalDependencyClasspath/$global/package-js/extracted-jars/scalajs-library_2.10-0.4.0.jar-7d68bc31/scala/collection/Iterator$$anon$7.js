/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$7 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.first$2 = false;
  this.acc$2 = null;
  this.f$2$2 = null
});
ScalaJS.c.scala_collection_Iterator$$anon$7.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$7.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$7;
ScalaJS.c.scala_collection_Iterator$$anon$7.prototype.hasNext__Z = (function() {
  return true
});
ScalaJS.c.scala_collection_Iterator$$anon$7.prototype.next__O = (function() {
  if (this.first$2) {
    this.first$2 = false
  } else {
    this.acc$2 = this.f$2$2.apply__O__O(this.acc$2)
  };
  return this.acc$2
});
ScalaJS.c.scala_collection_Iterator$$anon$7.prototype.init___O__Lscala_Function1 = (function(start$2, f$2) {
  this.f$2$2 = f$2;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.first$2 = true;
  this.acc$2 = start$2;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$7 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$7.prototype = ScalaJS.c.scala_collection_Iterator$$anon$7.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$7 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$7)))
});
ScalaJS.as.scala_collection_Iterator$$anon$7 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$7(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$7")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$7 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$7)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$7 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$7(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$7;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$7 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$7: 0
}, false, "scala.collection.Iterator$$anon$7", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$7: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$7.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$7;
//@ sourceMappingURL=Iterator$$anon$7.js.map
