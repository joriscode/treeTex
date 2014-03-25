/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$23 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.$$outer$2 = null;
  this.that$3$2 = null;
  this.thisElem$1$2 = null;
  this.thatElem$1$2 = null
});
ScalaJS.c.scala_collection_Iterator$$anon$23.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$23.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$23;
ScalaJS.c.scala_collection_Iterator$$anon$23.prototype.hasNext__Z = (function() {
  return (this.$$outer$2.hasNext__Z() || this.that$3$2.hasNext__Z())
});
ScalaJS.c.scala_collection_Iterator$$anon$23.prototype.next__Lscala_Tuple2 = (function() {
  if (this.$$outer$2.hasNext__Z()) {
    if (this.that$3$2.hasNext__Z()) {
      return new ScalaJS.c.scala_Tuple2().init___O__O(this.$$outer$2.next__O(), this.that$3$2.next__O())
    } else {
      return new ScalaJS.c.scala_Tuple2().init___O__O(this.$$outer$2.next__O(), this.thatElem$1$2)
    }
  } else {
    if (this.that$3$2.hasNext__Z()) {
      return new ScalaJS.c.scala_Tuple2().init___O__O(this.thisElem$1$2, this.that$3$2.next__O())
    } else {
      return ScalaJS.as.scala_Tuple2(ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O())
    }
  }
});
ScalaJS.c.scala_collection_Iterator$$anon$23.prototype.next__O = (function() {
  return this.next__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_Iterator$$anon$23.prototype.init___Lscala_collection_Iterator__Lscala_collection_Iterator__O__O = (function($$outer, that$3, thisElem$1, thatElem$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.that$3$2 = that$3;
  this.thisElem$1$2 = thisElem$1;
  this.thatElem$1$2 = thatElem$1;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$23 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$23.prototype = ScalaJS.c.scala_collection_Iterator$$anon$23.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$23 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$23)))
});
ScalaJS.as.scala_collection_Iterator$$anon$23 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$23(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$23")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$23 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$23)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$23 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$23(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$23;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$23 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$23: 0
}, false, "scala.collection.Iterator$$anon$23", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$23: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$23.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$23;
//@ sourceMappingURL=Iterator$$anon$23.js.map
