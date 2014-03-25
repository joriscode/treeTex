/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$22 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.idx$2 = 0;
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_Iterator$$anon$22.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$22.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$22;
ScalaJS.c.scala_collection_Iterator$$anon$22.prototype.idx__p2__I = (function() {
  return this.idx$2
});
ScalaJS.c.scala_collection_Iterator$$anon$22.prototype.idx$und$eq__p2__I__V = (function(x$1) {
  this.idx$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$$anon$22.prototype.hasNext__Z = (function() {
  return this.$$outer$2.hasNext__Z()
});
ScalaJS.c.scala_collection_Iterator$$anon$22.prototype.next__Lscala_Tuple2 = (function() {
  var ret = new ScalaJS.c.scala_Tuple2().init___O__O(this.$$outer$2.next__O(), ScalaJS.bI(this.idx__p2__I()));
  this.idx$und$eq__p2__I__V((this.idx__p2__I() + 1));
  return ret
});
ScalaJS.c.scala_collection_Iterator$$anon$22.prototype.next__O = (function() {
  return this.next__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_Iterator$$anon$22.prototype.init___Lscala_collection_Iterator = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.idx$2 = 0;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$22 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$22.prototype = ScalaJS.c.scala_collection_Iterator$$anon$22.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$22 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$22)))
});
ScalaJS.as.scala_collection_Iterator$$anon$22 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$22(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$22")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$22 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$22)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$22 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$22(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$22;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$22 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$22: 0
}, false, "scala.collection.Iterator$$anon$22", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$22: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$22.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$22;
//@ sourceMappingURL=Iterator$$anon$22.js.map
