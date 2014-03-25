/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$19 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.dropped$2 = false;
  this.self$4$2 = null;
  this.p$6$2 = null
});
ScalaJS.c.scala_collection_Iterator$$anon$19.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$19.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$19;
ScalaJS.c.scala_collection_Iterator$$anon$19.prototype.dropped__p2__Z = (function() {
  return this.dropped$2
});
ScalaJS.c.scala_collection_Iterator$$anon$19.prototype.dropped$und$eq__p2__Z__V = (function(x$1) {
  this.dropped$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$$anon$19.prototype.skip__p2__V = (function() {
  if ((!this.dropped__p2__Z())) {
    while ((this.self$4$2.hasNext__Z() && ScalaJS.uZ(this.p$6$2.apply__O__O(this.self$4$2.head__O())))) {
      this.self$4$2.next__O()
    };
    this.dropped$und$eq__p2__Z__V(true)
  }
});
ScalaJS.c.scala_collection_Iterator$$anon$19.prototype.hasNext__Z = (function() {
  this.skip__p2__V();
  return this.self$4$2.hasNext__Z()
});
ScalaJS.c.scala_collection_Iterator$$anon$19.prototype.next__O = (function() {
  this.skip__p2__V();
  return this.self$4$2.next__O()
});
ScalaJS.c.scala_collection_Iterator$$anon$19.prototype.init___Lscala_collection_Iterator__Lscala_collection_BufferedIterator__Lscala_Function1 = (function($$outer, self$4, p$6) {
  this.self$4$2 = self$4;
  this.p$6$2 = p$6;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.dropped$2 = false;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$19 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$19.prototype = ScalaJS.c.scala_collection_Iterator$$anon$19.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$19 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$19)))
});
ScalaJS.as.scala_collection_Iterator$$anon$19 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$19(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$19")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$19 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$19)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$19 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$19(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$19;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$19 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$19: 0
}, false, "scala.collection.Iterator$$anon$19", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$19: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$19.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$19;
//@ sourceMappingURL=Iterator$$anon$19.js.map
