/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$6 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.i$2 = 0;
  this.end$2$2 = 0;
  this.step$1$2 = 0
});
ScalaJS.c.scala_collection_Iterator$$anon$6.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$6.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$6;
ScalaJS.c.scala_collection_Iterator$$anon$6.prototype.i__p2__I = (function() {
  return this.i$2
});
ScalaJS.c.scala_collection_Iterator$$anon$6.prototype.i$und$eq__p2__I__V = (function(x$1) {
  this.i$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$$anon$6.prototype.hasNext__Z = (function() {
  return (((this.step$1$2 <= 0) || (this.i__p2__I() < this.end$2$2)) && ((this.step$1$2 >= 0) || (this.i__p2__I() > this.end$2$2)))
});
ScalaJS.c.scala_collection_Iterator$$anon$6.prototype.next__I = (function() {
  if (this.hasNext__Z()) {
    var result = this.i__p2__I();
    this.i$und$eq__p2__I__V((this.i__p2__I() + this.step$1$2));
    return result
  } else {
    return ScalaJS.uI(ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O())
  }
});
ScalaJS.c.scala_collection_Iterator$$anon$6.prototype.next__O = (function() {
  return ScalaJS.bI(this.next__I())
});
ScalaJS.c.scala_collection_Iterator$$anon$6.prototype.init___I__I__I = (function(start$1, end$2, step$1) {
  this.end$2$2 = end$2;
  this.step$1$2 = step$1;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  if ((step$1 === 0)) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("zero step")
  };
  this.i$2 = start$1;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$6 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$6.prototype = ScalaJS.c.scala_collection_Iterator$$anon$6.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$6 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$6)))
});
ScalaJS.as.scala_collection_Iterator$$anon$6 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$6(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$6")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$6 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$6)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$6 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$6(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$6;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$6 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$6: 0
}, false, "scala.collection.Iterator$$anon$6", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$6: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$6.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$6;
//@ sourceMappingURL=Iterator$$anon$6.js.map
