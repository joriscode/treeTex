/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$10 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.remaining$2 = 0;
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_Iterator$$anon$10.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$10.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$10;
ScalaJS.c.scala_collection_Iterator$$anon$10.prototype.remaining__p2__I = (function() {
  return this.remaining$2
});
ScalaJS.c.scala_collection_Iterator$$anon$10.prototype.remaining$und$eq__p2__I__V = (function(x$1) {
  this.remaining$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$$anon$10.prototype.hasNext__Z = (function() {
  return ((this.remaining__p2__I() > 0) && this.$$outer$2.hasNext__Z())
});
ScalaJS.c.scala_collection_Iterator$$anon$10.prototype.next__O = (function() {
  if ((this.remaining__p2__I() > 0)) {
    this.remaining$und$eq__p2__I__V((this.remaining__p2__I() - 1));
    return this.$$outer$2.next__O()
  } else {
    return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O()
  }
});
ScalaJS.c.scala_collection_Iterator$$anon$10.prototype.init___Lscala_collection_Iterator__I__I = (function($$outer, lo$1, until$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.remaining$2 = (until$1 - lo$1);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$10 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$10.prototype = ScalaJS.c.scala_collection_Iterator$$anon$10.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$10 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$10)))
});
ScalaJS.as.scala_collection_Iterator$$anon$10 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$10(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$10")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$10 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$10)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$10 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$10(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$10;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$10 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$10: 0
}, false, "scala.collection.Iterator$$anon$10", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$10: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$10.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$10;
//@ sourceMappingURL=Iterator$$anon$10.js.map
