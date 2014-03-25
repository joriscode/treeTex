/** @constructor */
ScalaJS.c.scala_collection_mutable_LinkedHashMap$$anon$3 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.cur$2 = null
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$$anon$3.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_mutable_LinkedHashMap$$anon$3.prototype.constructor = ScalaJS.c.scala_collection_mutable_LinkedHashMap$$anon$3;
ScalaJS.c.scala_collection_mutable_LinkedHashMap$$anon$3.prototype.cur__p2__Lscala_collection_mutable_LinkedEntry = (function() {
  return this.cur$2
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$$anon$3.prototype.cur$und$eq__p2__Lscala_collection_mutable_LinkedEntry__V = (function(x$1) {
  this.cur$2 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$$anon$3.prototype.hasNext__Z = (function() {
  return (this.cur__p2__Lscala_collection_mutable_LinkedEntry() !== null)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$$anon$3.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    var res = this.cur__p2__Lscala_collection_mutable_LinkedEntry().value__O();
    this.cur$und$eq__p2__Lscala_collection_mutable_LinkedEntry__V(this.cur__p2__Lscala_collection_mutable_LinkedEntry().later__Lscala_collection_mutable_LinkedEntry());
    return res
  } else {
    return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O()
  }
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$$anon$3.prototype.init___Lscala_collection_mutable_LinkedHashMap = (function($$outer) {
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.cur$2 = $$outer.firstEntry__Lscala_collection_mutable_LinkedEntry();
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_LinkedHashMap$$anon$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_LinkedHashMap$$anon$3.prototype = ScalaJS.c.scala_collection_mutable_LinkedHashMap$$anon$3.prototype;
ScalaJS.is.scala_collection_mutable_LinkedHashMap$$anon$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_LinkedHashMap$$anon$3)))
});
ScalaJS.as.scala_collection_mutable_LinkedHashMap$$anon$3 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_LinkedHashMap$$anon$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.LinkedHashMap$$anon$3")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_LinkedHashMap$$anon$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_LinkedHashMap$$anon$3)))
});
ScalaJS.asArrayOf.scala_collection_mutable_LinkedHashMap$$anon$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_LinkedHashMap$$anon$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.LinkedHashMap$$anon$3;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_LinkedHashMap$$anon$3 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_LinkedHashMap$$anon$3: 0
}, false, "scala.collection.mutable.LinkedHashMap$$anon$3", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_mutable_LinkedHashMap$$anon$3: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$$anon$3.prototype.$classData = ScalaJS.data.scala_collection_mutable_LinkedHashMap$$anon$3;
//@ sourceMappingURL=LinkedHashMap$$anon$3.js.map
