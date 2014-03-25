/** @constructor */
ScalaJS.c.scala_collection_TraversableOnce$FlattenOps$$anon$1 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.its$2 = null;
  this.it$2 = null
});
ScalaJS.c.scala_collection_TraversableOnce$FlattenOps$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_TraversableOnce$FlattenOps$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_TraversableOnce$FlattenOps$$anon$1;
ScalaJS.c.scala_collection_TraversableOnce$FlattenOps$$anon$1.prototype.its__p2__Lscala_collection_Iterator = (function() {
  return this.its$2
});
ScalaJS.c.scala_collection_TraversableOnce$FlattenOps$$anon$1.prototype.it__p2__Lscala_collection_Iterator = (function() {
  return this.it$2
});
ScalaJS.c.scala_collection_TraversableOnce$FlattenOps$$anon$1.prototype.it$und$eq__p2__Lscala_collection_Iterator__V = (function(x$1) {
  this.it$2 = x$1
});
ScalaJS.c.scala_collection_TraversableOnce$FlattenOps$$anon$1.prototype.hasNext__Z = (function() {
  var _$this = this;
  tailCallLoop: while (true) {
    if (_$this.it__p2__Lscala_collection_Iterator().hasNext__Z()) {
      return true
    } else {
      if (_$this.its__p2__Lscala_collection_Iterator().hasNext__Z()) {
        _$this.it$und$eq__p2__Lscala_collection_Iterator__V(ScalaJS.as.scala_collection_GenTraversableOnce(_$this.its__p2__Lscala_collection_Iterator().next__O()).toIterator__Lscala_collection_Iterator());
        continue tailCallLoop
      } else {
        return false
      }
    }
  }
});
ScalaJS.c.scala_collection_TraversableOnce$FlattenOps$$anon$1.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    return this.it__p2__Lscala_collection_Iterator().next__O()
  } else {
    return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O()
  }
});
ScalaJS.c.scala_collection_TraversableOnce$FlattenOps$$anon$1.prototype.init___Lscala_collection_TraversableOnce$FlattenOps = (function($$outer) {
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.its$2 = $$outer.scala$collection$TraversableOnce$FlattenOps$$travs$f.toIterator__Lscala_collection_Iterator();
  this.it$2 = ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator();
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_TraversableOnce$FlattenOps$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_TraversableOnce$FlattenOps$$anon$1.prototype = ScalaJS.c.scala_collection_TraversableOnce$FlattenOps$$anon$1.prototype;
ScalaJS.is.scala_collection_TraversableOnce$FlattenOps$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_TraversableOnce$FlattenOps$$anon$1)))
});
ScalaJS.as.scala_collection_TraversableOnce$FlattenOps$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_TraversableOnce$FlattenOps$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.TraversableOnce$FlattenOps$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_TraversableOnce$FlattenOps$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_TraversableOnce$FlattenOps$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_TraversableOnce$FlattenOps$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_TraversableOnce$FlattenOps$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.TraversableOnce$FlattenOps$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_TraversableOnce$FlattenOps$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_TraversableOnce$FlattenOps$$anon$1: 0
}, false, "scala.collection.TraversableOnce$FlattenOps$$anon$1", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_TraversableOnce$FlattenOps$$anon$1: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_TraversableOnce$FlattenOps$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_TraversableOnce$FlattenOps$$anon$1;
//@ sourceMappingURL=TraversableOnce$FlattenOps$$anon$1.js.map
