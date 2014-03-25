/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$20 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.$$outer$2 = null;
  this.that$2$2 = null
});
ScalaJS.c.scala_collection_Iterator$$anon$20.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$20.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$20;
ScalaJS.c.scala_collection_Iterator$$anon$20.prototype.hasNext__Z = (function() {
  return (this.$$outer$2.hasNext__Z() && this.that$2$2.hasNext__Z())
});
ScalaJS.c.scala_collection_Iterator$$anon$20.prototype.next__Lscala_Tuple2 = (function() {
  return new ScalaJS.c.scala_Tuple2().init___O__O(this.$$outer$2.next__O(), this.that$2$2.next__O())
});
ScalaJS.c.scala_collection_Iterator$$anon$20.prototype.next__O = (function() {
  return this.next__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_Iterator$$anon$20.prototype.init___Lscala_collection_Iterator__Lscala_collection_Iterator = (function($$outer, that$2) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.that$2$2 = that$2;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$20 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$20.prototype = ScalaJS.c.scala_collection_Iterator$$anon$20.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$20 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$20)))
});
ScalaJS.as.scala_collection_Iterator$$anon$20 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$20(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$20")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$20 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$20)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$20 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$20(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$20;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$20 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$20: 0
}, false, "scala.collection.Iterator$$anon$20", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$20: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$20.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$20;
//@ sourceMappingURL=Iterator$$anon$20.js.map
