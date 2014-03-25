/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$4 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.i$2 = 0;
  this.len$1$2 = 0;
  this.elem$2$2 = null
});
ScalaJS.c.scala_collection_Iterator$$anon$4.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$4.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$4;
ScalaJS.c.scala_collection_Iterator$$anon$4.prototype.i__p2__I = (function() {
  return this.i$2
});
ScalaJS.c.scala_collection_Iterator$$anon$4.prototype.i$und$eq__p2__I__V = (function(x$1) {
  this.i$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$$anon$4.prototype.hasNext__Z = (function() {
  return (this.i__p2__I() < this.len$1$2)
});
ScalaJS.c.scala_collection_Iterator$$anon$4.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    this.i$und$eq__p2__I__V((this.i__p2__I() + 1));
    return this.elem$2$2.apply__O()
  } else {
    return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O()
  }
});
ScalaJS.c.scala_collection_Iterator$$anon$4.prototype.init___I__Lscala_Function0 = (function(len$1, elem$2) {
  this.len$1$2 = len$1;
  this.elem$2$2 = elem$2;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.i$2 = 0;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$4 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$4.prototype = ScalaJS.c.scala_collection_Iterator$$anon$4.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$4 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$4)))
});
ScalaJS.as.scala_collection_Iterator$$anon$4 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$4(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$4")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$4 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$4)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$4 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$4(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$4;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$4 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$4: 0
}, false, "scala.collection.Iterator$$anon$4", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$4: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$4.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$4;
//@ sourceMappingURL=Iterator$$anon$4.js.map
