/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$21 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.count$2 = 0;
  this.$$outer$2 = null;
  this.len$3$2 = 0;
  this.elem$4$2 = null
});
ScalaJS.c.scala_collection_Iterator$$anon$21.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$21.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$21;
ScalaJS.c.scala_collection_Iterator$$anon$21.prototype.count__p2__I = (function() {
  return this.count$2
});
ScalaJS.c.scala_collection_Iterator$$anon$21.prototype.count$und$eq__p2__I__V = (function(x$1) {
  this.count$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$$anon$21.prototype.hasNext__Z = (function() {
  return (this.$$outer$2.hasNext__Z() || (this.count__p2__I() < this.len$3$2))
});
ScalaJS.c.scala_collection_Iterator$$anon$21.prototype.next__O = (function() {
  this.count$und$eq__p2__I__V((this.count__p2__I() + 1));
  if (this.$$outer$2.hasNext__Z()) {
    return this.$$outer$2.next__O()
  } else {
    if ((this.count__p2__I() <= this.len$3$2)) {
      return this.elem$4$2
    } else {
      return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O()
    }
  }
});
ScalaJS.c.scala_collection_Iterator$$anon$21.prototype.init___Lscala_collection_Iterator__I__O = (function($$outer, len$3, elem$4) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.len$3$2 = len$3;
  this.elem$4$2 = elem$4;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.count$2 = 0;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$21 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$21.prototype = ScalaJS.c.scala_collection_Iterator$$anon$21.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$21 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$21)))
});
ScalaJS.as.scala_collection_Iterator$$anon$21 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$21(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$21")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$21 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$21)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$21 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$21(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$21;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$21 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$21: 0
}, false, "scala.collection.Iterator$$anon$21", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$21: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$21.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$21;
//@ sourceMappingURL=Iterator$$anon$21.js.map
