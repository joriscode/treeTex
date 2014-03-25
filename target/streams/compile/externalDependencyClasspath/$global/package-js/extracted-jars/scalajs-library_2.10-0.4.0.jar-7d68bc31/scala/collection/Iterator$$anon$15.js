/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$15 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.self$1$2 = null;
  this.pf$1$2 = null
});
ScalaJS.c.scala_collection_Iterator$$anon$15.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$15.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$15;
ScalaJS.c.scala_collection_Iterator$$anon$15.prototype.skip__p2__V = (function() {
  while ((this.self$1$2.hasNext__Z() && (!this.pf$1$2.isDefinedAt__O__Z(this.self$1$2.head__O())))) {
    this.self$1$2.next__O()
  }
});
ScalaJS.c.scala_collection_Iterator$$anon$15.prototype.hasNext__Z = (function() {
  this.skip__p2__V();
  return this.self$1$2.hasNext__Z()
});
ScalaJS.c.scala_collection_Iterator$$anon$15.prototype.next__O = (function() {
  this.skip__p2__V();
  return this.pf$1$2.apply__O__O(this.self$1$2.next__O())
});
ScalaJS.c.scala_collection_Iterator$$anon$15.prototype.init___Lscala_collection_Iterator__Lscala_collection_BufferedIterator__Lscala_PartialFunction = (function($$outer, self$1, pf$1) {
  this.self$1$2 = self$1;
  this.pf$1$2 = pf$1;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$15 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$15.prototype = ScalaJS.c.scala_collection_Iterator$$anon$15.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$15 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$15)))
});
ScalaJS.as.scala_collection_Iterator$$anon$15 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$15(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$15")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$15 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$15)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$15 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$15(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$15;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$15 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$15: 0
}, false, "scala.collection.Iterator$$anon$15", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$15: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$15.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$15;
//@ sourceMappingURL=Iterator$$anon$15.js.map
