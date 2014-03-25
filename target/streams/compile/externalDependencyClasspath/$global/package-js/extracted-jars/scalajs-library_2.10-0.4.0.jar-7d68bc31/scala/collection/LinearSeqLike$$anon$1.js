/** @constructor */
ScalaJS.c.scala_collection_LinearSeqLike$$anon$1 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.these$2 = null;
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_LinearSeqLike$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_LinearSeqLike$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_LinearSeqLike$$anon$1;
ScalaJS.c.scala_collection_LinearSeqLike$$anon$1.prototype.these__p2__Lscala_collection_LinearSeqLike = (function() {
  return this.these$2
});
ScalaJS.c.scala_collection_LinearSeqLike$$anon$1.prototype.these$und$eq__p2__Lscala_collection_LinearSeqLike__V = (function(x$1) {
  this.these$2 = x$1
});
ScalaJS.c.scala_collection_LinearSeqLike$$anon$1.prototype.hasNext__Z = (function() {
  return (!this.these__p2__Lscala_collection_LinearSeqLike().isEmpty__Z())
});
ScalaJS.c.scala_collection_LinearSeqLike$$anon$1.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    var result = this.these__p2__Lscala_collection_LinearSeqLike().head__O();
    this.these$und$eq__p2__Lscala_collection_LinearSeqLike__V(ScalaJS.as.scala_collection_LinearSeqLike(this.these__p2__Lscala_collection_LinearSeqLike().tail__O()));
    return result
  } else {
    return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O()
  }
});
ScalaJS.c.scala_collection_LinearSeqLike$$anon$1.prototype.toList__Lscala_collection_immutable_List = (function() {
  var xs = this.these__p2__Lscala_collection_LinearSeqLike().toList__Lscala_collection_immutable_List();
  this.these$und$eq__p2__Lscala_collection_LinearSeqLike__V(ScalaJS.as.scala_collection_LinearSeqLike(this.$$outer$2.newBuilder__Lscala_collection_mutable_Builder().result__O()));
  return xs
});
ScalaJS.c.scala_collection_LinearSeqLike$$anon$1.prototype.init___Lscala_collection_LinearSeqLike = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.these$2 = $$outer;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_LinearSeqLike$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_LinearSeqLike$$anon$1.prototype = ScalaJS.c.scala_collection_LinearSeqLike$$anon$1.prototype;
ScalaJS.is.scala_collection_LinearSeqLike$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_LinearSeqLike$$anon$1)))
});
ScalaJS.as.scala_collection_LinearSeqLike$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_LinearSeqLike$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.LinearSeqLike$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_LinearSeqLike$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_LinearSeqLike$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_LinearSeqLike$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_LinearSeqLike$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.LinearSeqLike$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_LinearSeqLike$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_LinearSeqLike$$anon$1: 0
}, false, "scala.collection.LinearSeqLike$$anon$1", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_LinearSeqLike$$anon$1: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_LinearSeqLike$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_LinearSeqLike$$anon$1;
//@ sourceMappingURL=LinearSeqLike$$anon$1.js.map
