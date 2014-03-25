/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$8 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.i$2 = 0;
  this.step$2$2 = 0
});
ScalaJS.c.scala_collection_Iterator$$anon$8.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$8.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$8;
ScalaJS.c.scala_collection_Iterator$$anon$8.prototype.i__p2__I = (function() {
  return this.i$2
});
ScalaJS.c.scala_collection_Iterator$$anon$8.prototype.i$und$eq__p2__I__V = (function(x$1) {
  this.i$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$$anon$8.prototype.hasNext__Z = (function() {
  return true
});
ScalaJS.c.scala_collection_Iterator$$anon$8.prototype.next__I = (function() {
  var result = this.i__p2__I();
  this.i$und$eq__p2__I__V((this.i__p2__I() + this.step$2$2));
  return result
});
ScalaJS.c.scala_collection_Iterator$$anon$8.prototype.next__O = (function() {
  return ScalaJS.bI(this.next__I())
});
ScalaJS.c.scala_collection_Iterator$$anon$8.prototype.init___I__I = (function(start$3, step$2) {
  this.step$2$2 = step$2;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.i$2 = start$3;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$8 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$8.prototype = ScalaJS.c.scala_collection_Iterator$$anon$8.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$8 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$8)))
});
ScalaJS.as.scala_collection_Iterator$$anon$8 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$8(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$8")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$8 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$8)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$8 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$8(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$8;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$8 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$8: 0
}, false, "scala.collection.Iterator$$anon$8", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$8: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$8.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$8;
//@ sourceMappingURL=Iterator$$anon$8.js.map
