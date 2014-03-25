/** @constructor */
ScalaJS.c.scala_collection_BitSetLike$$anon$1 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.current$2 = 0;
  this.end$2 = 0;
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_BitSetLike$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_BitSetLike$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_BitSetLike$$anon$1;
ScalaJS.c.scala_collection_BitSetLike$$anon$1.prototype.current__p2__I = (function() {
  return this.current$2
});
ScalaJS.c.scala_collection_BitSetLike$$anon$1.prototype.current$und$eq__p2__I__V = (function(x$1) {
  this.current$2 = x$1
});
ScalaJS.c.scala_collection_BitSetLike$$anon$1.prototype.end__p2__I = (function() {
  return this.end$2
});
ScalaJS.c.scala_collection_BitSetLike$$anon$1.prototype.hasNext__Z = (function() {
  while (((this.current__p2__I() < this.end__p2__I()) && (!this.$$outer$2.contains__I__Z(this.current__p2__I())))) {
    this.current$und$eq__p2__I__V((this.current__p2__I() + 1))
  };
  return (this.current__p2__I() < this.end__p2__I())
});
ScalaJS.c.scala_collection_BitSetLike$$anon$1.prototype.next__I = (function() {
  if (this.hasNext__Z()) {
    var r = this.current__p2__I();
    this.current$und$eq__p2__I__V((this.current__p2__I() + 1));
    return r
  } else {
    return ScalaJS.uI(ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O())
  }
});
ScalaJS.c.scala_collection_BitSetLike$$anon$1.prototype.next__O = (function() {
  return ScalaJS.bI(this.next__I())
});
ScalaJS.c.scala_collection_BitSetLike$$anon$1.prototype.init___Lscala_collection_BitSetLike = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.current$2 = 0;
  this.end$2 = ($$outer.nwords__I() * ScalaJS.modules.scala_collection_BitSetLike().scala$collection$BitSetLike$$WordLength__I());
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_BitSetLike$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_BitSetLike$$anon$1.prototype = ScalaJS.c.scala_collection_BitSetLike$$anon$1.prototype;
ScalaJS.is.scala_collection_BitSetLike$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_BitSetLike$$anon$1)))
});
ScalaJS.as.scala_collection_BitSetLike$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_BitSetLike$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.BitSetLike$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_BitSetLike$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_BitSetLike$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_BitSetLike$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_BitSetLike$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.BitSetLike$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_BitSetLike$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_BitSetLike$$anon$1: 0
}, false, "scala.collection.BitSetLike$$anon$1", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_BitSetLike$$anon$1: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_BitSetLike$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_BitSetLike$$anon$1;
//@ sourceMappingURL=BitSetLike$$anon$1.js.map
