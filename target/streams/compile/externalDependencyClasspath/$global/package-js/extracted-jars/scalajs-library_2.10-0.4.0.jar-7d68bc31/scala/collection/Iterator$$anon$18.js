/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$18 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.it$2 = null;
  this.self$3$2 = null;
  this.leading$1$2 = null;
  this.bitmap$0$2 = false
});
ScalaJS.c.scala_collection_Iterator$$anon$18.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$18.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$18;
ScalaJS.c.scala_collection_Iterator$$anon$18.prototype.it$lzycompute__p2__Lscala_collection_BufferedIterator = (function() {
  if ((!this.bitmap$0$2)) {
    this.leading$1$2.finish__V();
    var jsx$1 = this.self$3$2;
    this.it$2 = jsx$1;
    this.bitmap$0$2 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  this.self$3$2 = null;
  this.leading$1$2 = null;
  return this.it$2
});
ScalaJS.c.scala_collection_Iterator$$anon$18.prototype.it__p2__Lscala_collection_BufferedIterator = (function() {
  if ((!this.bitmap$0$2)) {
    return this.it$lzycompute__p2__Lscala_collection_BufferedIterator()
  } else {
    return this.it$2
  }
});
ScalaJS.c.scala_collection_Iterator$$anon$18.prototype.hasNext__Z = (function() {
  return this.it__p2__Lscala_collection_BufferedIterator().hasNext__Z()
});
ScalaJS.c.scala_collection_Iterator$$anon$18.prototype.next__O = (function() {
  return this.it__p2__Lscala_collection_BufferedIterator().next__O()
});
ScalaJS.c.scala_collection_Iterator$$anon$18.prototype.toString__T = (function() {
  return "unknown-if-empty iterator"
});
ScalaJS.c.scala_collection_Iterator$$anon$18.prototype.init___Lscala_collection_Iterator__Lscala_collection_BufferedIterator__Lscala_collection_Iterator$Leading$1 = (function($$outer, self$3, leading$1) {
  this.self$3$2 = self$3;
  this.leading$1$2 = leading$1;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$18 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$18.prototype = ScalaJS.c.scala_collection_Iterator$$anon$18.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$18 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$18)))
});
ScalaJS.as.scala_collection_Iterator$$anon$18 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$18(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$18")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$18 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$18)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$18 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$18(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$18;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$18 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$18: 0
}, false, "scala.collection.Iterator$$anon$18", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$18: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$18.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$18;
//@ sourceMappingURL=Iterator$$anon$18.js.map
