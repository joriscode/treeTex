/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$24 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.origElems$2 = null;
  this.i$2 = 0;
  this.from$1$2 = 0;
  this.patchElems$1$2 = null;
  this.replaced$1$2 = 0
});
ScalaJS.c.scala_collection_Iterator$$anon$24.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$24.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$24;
ScalaJS.c.scala_collection_Iterator$$anon$24.prototype.origElems__p2__Lscala_collection_Iterator = (function() {
  return this.origElems$2
});
ScalaJS.c.scala_collection_Iterator$$anon$24.prototype.origElems$und$eq__p2__Lscala_collection_Iterator__V = (function(x$1) {
  this.origElems$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$$anon$24.prototype.i__p2__I = (function() {
  return this.i$2
});
ScalaJS.c.scala_collection_Iterator$$anon$24.prototype.i$und$eq__p2__I__V = (function(x$1) {
  this.i$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$$anon$24.prototype.hasNext__Z = (function() {
  if ((this.i__p2__I() < this.from$1$2)) {
    return this.origElems__p2__Lscala_collection_Iterator().hasNext__Z()
  } else {
    return (this.patchElems$1$2.hasNext__Z() || this.origElems__p2__Lscala_collection_Iterator().hasNext__Z())
  }
});
ScalaJS.c.scala_collection_Iterator$$anon$24.prototype.next__O = (function() {
  if ((this.i__p2__I() === this.from$1$2)) {
    this.origElems$und$eq__p2__Lscala_collection_Iterator__V(this.origElems__p2__Lscala_collection_Iterator().drop__I__Lscala_collection_Iterator(this.replaced$1$2))
  };
  if (((this.i__p2__I() < this.from$1$2) || (!this.patchElems$1$2.hasNext__Z()))) {
    var result = this.origElems__p2__Lscala_collection_Iterator().next__O()
  } else {
    var result = this.patchElems$1$2.next__O()
  };
  this.i$und$eq__p2__I__V((this.i__p2__I() + 1));
  return result
});
ScalaJS.c.scala_collection_Iterator$$anon$24.prototype.init___Lscala_collection_Iterator__I__Lscala_collection_Iterator__I = (function($$outer, from$1, patchElems$1, replaced$1) {
  this.from$1$2 = from$1;
  this.patchElems$1$2 = patchElems$1;
  this.replaced$1$2 = replaced$1;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.origElems$2 = $$outer;
  this.i$2 = 0;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$24 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$24.prototype = ScalaJS.c.scala_collection_Iterator$$anon$24.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$24 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$24)))
});
ScalaJS.as.scala_collection_Iterator$$anon$24 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$24(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$24")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$24 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$24)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$24 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$24(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$24;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$24 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$24: 0
}, false, "scala.collection.Iterator$$anon$24", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$24: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$24.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$24;
//@ sourceMappingURL=Iterator$$anon$24.js.map
