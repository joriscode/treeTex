/** @constructor */
ScalaJS.c.scala_collection_immutable_ListMap$$anon$1 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.self$2 = null
});
ScalaJS.c.scala_collection_immutable_ListMap$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_immutable_ListMap$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_immutable_ListMap$$anon$1;
ScalaJS.c.scala_collection_immutable_ListMap$$anon$1.prototype.self__Lscala_collection_immutable_ListMap = (function() {
  return this.self$2
});
ScalaJS.c.scala_collection_immutable_ListMap$$anon$1.prototype.self$und$eq__Lscala_collection_immutable_ListMap__V = (function(x$1) {
  this.self$2 = x$1
});
ScalaJS.c.scala_collection_immutable_ListMap$$anon$1.prototype.hasNext__Z = (function() {
  return (!this.self__Lscala_collection_immutable_ListMap().isEmpty__Z())
});
ScalaJS.c.scala_collection_immutable_ListMap$$anon$1.prototype.next__Lscala_Tuple2 = (function() {
  if ((!this.hasNext__Z())) {
    throw new ScalaJS.c.java_util_NoSuchElementException().init___T("next on empty iterator")
  } else {
    var res = new ScalaJS.c.scala_Tuple2().init___O__O(this.self__Lscala_collection_immutable_ListMap().key__O(), this.self__Lscala_collection_immutable_ListMap().value__O());
    this.self$und$eq__Lscala_collection_immutable_ListMap__V(this.self__Lscala_collection_immutable_ListMap().tail__Lscala_collection_immutable_ListMap());
    return res
  }
});
ScalaJS.c.scala_collection_immutable_ListMap$$anon$1.prototype.next__O = (function() {
  return this.next__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_immutable_ListMap$$anon$1.prototype.init___Lscala_collection_immutable_ListMap = (function($$outer) {
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.self$2 = $$outer;
  return this
});
ScalaJS.c.scala_collection_immutable_ListMap$$anon$1.prototype.self$und$eq__Lscala_collection_immutable_ListMap__ = (function(x$1) {
  return ScalaJS.bV(this.self$und$eq__Lscala_collection_immutable_ListMap__V(x$1))
});
ScalaJS.c.scala_collection_immutable_ListMap$$anon$1.prototype.self__ = (function() {
  return this.self__Lscala_collection_immutable_ListMap()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_ListMap$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_ListMap$$anon$1.prototype = ScalaJS.c.scala_collection_immutable_ListMap$$anon$1.prototype;
ScalaJS.is.scala_collection_immutable_ListMap$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_ListMap$$anon$1)))
});
ScalaJS.as.scala_collection_immutable_ListMap$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_ListMap$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.ListMap$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_ListMap$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_ListMap$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_immutable_ListMap$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_ListMap$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.ListMap$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_ListMap$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_immutable_ListMap$$anon$1: 0
}, false, "scala.collection.immutable.ListMap$$anon$1", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_immutable_ListMap$$anon$1: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_ListMap$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_immutable_ListMap$$anon$1;
//@ sourceMappingURL=ListMap$$anon$1.js.map
