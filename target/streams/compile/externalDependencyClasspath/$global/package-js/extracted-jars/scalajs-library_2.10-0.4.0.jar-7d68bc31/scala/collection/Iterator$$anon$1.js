/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$1 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.hd$2 = null;
  this.hdDefined$2 = false;
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_Iterator$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$1;
ScalaJS.c.scala_collection_Iterator$$anon$1.prototype.buffered__Lscala_collection_BufferedIterator = (function() {
  return ScalaJS.impls.scala_collection_BufferedIterator$class__buffered__Lscala_collection_BufferedIterator__Lscala_collection_BufferedIterator(this)
});
ScalaJS.c.scala_collection_Iterator$$anon$1.prototype.hd__p2__O = (function() {
  return this.hd$2
});
ScalaJS.c.scala_collection_Iterator$$anon$1.prototype.hd$und$eq__p2__O__V = (function(x$1) {
  this.hd$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$$anon$1.prototype.hdDefined__p2__Z = (function() {
  return this.hdDefined$2
});
ScalaJS.c.scala_collection_Iterator$$anon$1.prototype.hdDefined$und$eq__p2__Z__V = (function(x$1) {
  this.hdDefined$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$$anon$1.prototype.head__O = (function() {
  if ((!this.hdDefined__p2__Z())) {
    this.hd$und$eq__p2__O__V(this.next__O());
    this.hdDefined$und$eq__p2__Z__V(true)
  };
  return this.hd__p2__O()
});
ScalaJS.c.scala_collection_Iterator$$anon$1.prototype.hasNext__Z = (function() {
  return (this.hdDefined__p2__Z() || this.$$outer$2.hasNext__Z())
});
ScalaJS.c.scala_collection_Iterator$$anon$1.prototype.next__O = (function() {
  if (this.hdDefined__p2__Z()) {
    this.hdDefined$und$eq__p2__Z__V(false);
    return this.hd__p2__O()
  } else {
    return this.$$outer$2.next__O()
  }
});
ScalaJS.c.scala_collection_Iterator$$anon$1.prototype.init___Lscala_collection_Iterator = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_BufferedIterator$class__$init$__Lscala_collection_BufferedIterator__V(this);
  this.hdDefined$2 = false;
  return this
});
ScalaJS.c.scala_collection_Iterator$$anon$1.prototype.head__ = (function() {
  return this.head__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$1.prototype = ScalaJS.c.scala_collection_Iterator$$anon$1.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$1)))
});
ScalaJS.as.scala_collection_Iterator$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$1: 0
}, false, "scala.collection.Iterator$$anon$1", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$1: 1,
  scala_collection_BufferedIterator: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$1;
//@ sourceMappingURL=Iterator$$anon$1.js.map
