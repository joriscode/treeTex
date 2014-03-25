/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$5 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.i$2 = 0;
  this.end$1$2 = 0;
  this.f$1$2 = null
});
ScalaJS.c.scala_collection_Iterator$$anon$5.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$5.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$5;
ScalaJS.c.scala_collection_Iterator$$anon$5.prototype.i__p2__I = (function() {
  return this.i$2
});
ScalaJS.c.scala_collection_Iterator$$anon$5.prototype.i$und$eq__p2__I__V = (function(x$1) {
  this.i$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$$anon$5.prototype.hasNext__Z = (function() {
  return (this.i__p2__I() < this.end$1$2)
});
ScalaJS.c.scala_collection_Iterator$$anon$5.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    var result = this.f$1$2.apply__O__O(ScalaJS.bI(this.i__p2__I()));
    this.i$und$eq__p2__I__V((this.i__p2__I() + 1));
    return result
  } else {
    return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O()
  }
});
ScalaJS.c.scala_collection_Iterator$$anon$5.prototype.init___I__Lscala_Function1 = (function(end$1, f$1) {
  this.end$1$2 = end$1;
  this.f$1$2 = f$1;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.i$2 = 0;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$5 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$5.prototype = ScalaJS.c.scala_collection_Iterator$$anon$5.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$5 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$5)))
});
ScalaJS.as.scala_collection_Iterator$$anon$5 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$5(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$5")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$5 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$5)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$5 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$5(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$5;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$5 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$5: 0
}, false, "scala.collection.Iterator$$anon$5", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$5: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$5.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$5;
//@ sourceMappingURL=Iterator$$anon$5.js.map
