/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$16 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.hasNext$2 = false;
  this.elem$2 = null;
  this.$$outer$2 = null;
  this.op$1$2 = null
});
ScalaJS.c.scala_collection_Iterator$$anon$16.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$16.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$16;
ScalaJS.c.scala_collection_Iterator$$anon$16.prototype.hasNext__Z = (function() {
  return this.hasNext$2
});
ScalaJS.c.scala_collection_Iterator$$anon$16.prototype.hasNext$und$eq__p2__Z__V = (function(x$1) {
  this.hasNext$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$$anon$16.prototype.elem__p2__O = (function() {
  return this.elem$2
});
ScalaJS.c.scala_collection_Iterator$$anon$16.prototype.elem$und$eq__p2__O__V = (function(x$1) {
  this.elem$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$$anon$16.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    var res = this.elem__p2__O();
    if (this.$$outer$2.hasNext__Z()) {
      this.elem$und$eq__p2__O__V(this.op$1$2.apply__O__O__O(this.elem__p2__O(), this.$$outer$2.next__O()))
    } else {
      this.hasNext$und$eq__p2__Z__V(false)
    };
    return res
  } else {
    return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O()
  }
});
ScalaJS.c.scala_collection_Iterator$$anon$16.prototype.init___Lscala_collection_Iterator__O__Lscala_Function2 = (function($$outer, z$1, op$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.op$1$2 = op$1;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.hasNext$2 = true;
  this.elem$2 = z$1;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$16 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$16.prototype = ScalaJS.c.scala_collection_Iterator$$anon$16.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$16 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$16)))
});
ScalaJS.as.scala_collection_Iterator$$anon$16 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$16(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$16")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$16 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$16)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$16 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$16(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$16;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$16 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$16: 0
}, false, "scala.collection.Iterator$$anon$16", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$16: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$16.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$16;
//@ sourceMappingURL=Iterator$$anon$16.js.map
