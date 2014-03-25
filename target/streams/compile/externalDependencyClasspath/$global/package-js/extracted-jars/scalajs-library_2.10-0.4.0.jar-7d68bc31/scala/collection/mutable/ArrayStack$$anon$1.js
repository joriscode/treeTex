/** @constructor */
ScalaJS.c.scala_collection_mutable_ArrayStack$$anon$1 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.currentIndex$2 = 0;
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_mutable_ArrayStack$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_mutable_ArrayStack$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArrayStack$$anon$1;
ScalaJS.c.scala_collection_mutable_ArrayStack$$anon$1.prototype.currentIndex__p2__I = (function() {
  return this.currentIndex$2
});
ScalaJS.c.scala_collection_mutable_ArrayStack$$anon$1.prototype.currentIndex$und$eq__p2__I__V = (function(x$1) {
  this.currentIndex$2 = x$1
});
ScalaJS.c.scala_collection_mutable_ArrayStack$$anon$1.prototype.hasNext__Z = (function() {
  return (this.currentIndex__p2__I() > 0)
});
ScalaJS.c.scala_collection_mutable_ArrayStack$$anon$1.prototype.next__O = (function() {
  this.currentIndex$und$eq__p2__I__V((this.currentIndex__p2__I() - 1));
  return this.$$outer$2.scala$collection$mutable$ArrayStack$$table__AO().underlying[this.currentIndex__p2__I()]
});
ScalaJS.c.scala_collection_mutable_ArrayStack$$anon$1.prototype.init___Lscala_collection_mutable_ArrayStack = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.currentIndex$2 = $$outer.scala$collection$mutable$ArrayStack$$index__I();
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArrayStack$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArrayStack$$anon$1.prototype = ScalaJS.c.scala_collection_mutable_ArrayStack$$anon$1.prototype;
ScalaJS.is.scala_collection_mutable_ArrayStack$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayStack$$anon$1)))
});
ScalaJS.as.scala_collection_mutable_ArrayStack$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayStack$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayStack$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayStack$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayStack$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayStack$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayStack$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayStack$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayStack$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayStack$$anon$1: 0
}, false, "scala.collection.mutable.ArrayStack$$anon$1", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_mutable_ArrayStack$$anon$1: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ArrayStack$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArrayStack$$anon$1;
//@ sourceMappingURL=ArrayStack$$anon$1.js.map
