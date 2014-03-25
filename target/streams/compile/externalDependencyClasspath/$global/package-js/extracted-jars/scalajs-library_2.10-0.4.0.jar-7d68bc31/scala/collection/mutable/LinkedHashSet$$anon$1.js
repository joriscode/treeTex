/** @constructor */
ScalaJS.c.scala_collection_mutable_LinkedHashSet$$anon$1 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.cur$2 = null
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_mutable_LinkedHashSet$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_mutable_LinkedHashSet$$anon$1;
ScalaJS.c.scala_collection_mutable_LinkedHashSet$$anon$1.prototype.cur__p2__Lscala_collection_mutable_LinkedHashSet$Entry = (function() {
  return this.cur$2
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$$anon$1.prototype.cur$und$eq__p2__Lscala_collection_mutable_LinkedHashSet$Entry__V = (function(x$1) {
  this.cur$2 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$$anon$1.prototype.hasNext__Z = (function() {
  return (this.cur__p2__Lscala_collection_mutable_LinkedHashSet$Entry() !== null)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$$anon$1.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    var res = this.cur__p2__Lscala_collection_mutable_LinkedHashSet$Entry().key__O();
    this.cur$und$eq__p2__Lscala_collection_mutable_LinkedHashSet$Entry__V(this.cur__p2__Lscala_collection_mutable_LinkedHashSet$Entry().later__Lscala_collection_mutable_LinkedHashSet$Entry());
    return res
  } else {
    return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O()
  }
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$$anon$1.prototype.init___Lscala_collection_mutable_LinkedHashSet = (function($$outer) {
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.cur$2 = $$outer.firstEntry__Lscala_collection_mutable_LinkedHashSet$Entry();
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_LinkedHashSet$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_LinkedHashSet$$anon$1.prototype = ScalaJS.c.scala_collection_mutable_LinkedHashSet$$anon$1.prototype;
ScalaJS.is.scala_collection_mutable_LinkedHashSet$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_LinkedHashSet$$anon$1)))
});
ScalaJS.as.scala_collection_mutable_LinkedHashSet$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_LinkedHashSet$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.LinkedHashSet$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_LinkedHashSet$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_LinkedHashSet$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_mutable_LinkedHashSet$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_LinkedHashSet$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.LinkedHashSet$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_LinkedHashSet$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_LinkedHashSet$$anon$1: 0
}, false, "scala.collection.mutable.LinkedHashSet$$anon$1", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_mutable_LinkedHashSet$$anon$1: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_mutable_LinkedHashSet$$anon$1;
//@ sourceMappingURL=LinkedHashSet$$anon$1.js.map
