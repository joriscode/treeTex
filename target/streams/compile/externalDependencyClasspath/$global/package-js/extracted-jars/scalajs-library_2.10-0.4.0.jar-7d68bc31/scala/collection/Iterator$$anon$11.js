/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$11 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.$$outer$2 = null;
  this.f$3$2 = null
});
ScalaJS.c.scala_collection_Iterator$$anon$11.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$11.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$11;
ScalaJS.c.scala_collection_Iterator$$anon$11.prototype.hasNext__Z = (function() {
  return this.$$outer$2.hasNext__Z()
});
ScalaJS.c.scala_collection_Iterator$$anon$11.prototype.next__O = (function() {
  return this.f$3$2.apply__O__O(this.$$outer$2.next__O())
});
ScalaJS.c.scala_collection_Iterator$$anon$11.prototype.init___Lscala_collection_Iterator__Lscala_Function1 = (function($$outer, f$3) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.f$3$2 = f$3;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$11 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$11.prototype = ScalaJS.c.scala_collection_Iterator$$anon$11.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$11 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$11)))
});
ScalaJS.as.scala_collection_Iterator$$anon$11 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$11(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$11")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$11 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$11)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$11 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$11(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$11;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$11 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$11: 0
}, false, "scala.collection.Iterator$$anon$11", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$11: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$11.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$11;
//@ sourceMappingURL=Iterator$$anon$11.js.map
