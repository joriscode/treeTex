/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$3 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.hasnext$2 = false;
  this.elem$1$2 = null
});
ScalaJS.c.scala_collection_Iterator$$anon$3.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$3.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$3;
ScalaJS.c.scala_collection_Iterator$$anon$3.prototype.hasnext__p2__Z = (function() {
  return this.hasnext$2
});
ScalaJS.c.scala_collection_Iterator$$anon$3.prototype.hasnext$und$eq__p2__Z__V = (function(x$1) {
  this.hasnext$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$$anon$3.prototype.hasNext__Z = (function() {
  return this.hasnext__p2__Z()
});
ScalaJS.c.scala_collection_Iterator$$anon$3.prototype.next__O = (function() {
  if (this.hasnext__p2__Z()) {
    this.hasnext$und$eq__p2__Z__V(false);
    return this.elem$1$2
  } else {
    return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O()
  }
});
ScalaJS.c.scala_collection_Iterator$$anon$3.prototype.init___O = (function(elem$1) {
  this.elem$1$2 = elem$1;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.hasnext$2 = true;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$3.prototype = ScalaJS.c.scala_collection_Iterator$$anon$3.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$3)))
});
ScalaJS.as.scala_collection_Iterator$$anon$3 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$3")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$3)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$3;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$3 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$3: 0
}, false, "scala.collection.Iterator$$anon$3", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$3: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$3.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$3;
//@ sourceMappingURL=Iterator$$anon$3.js.map
