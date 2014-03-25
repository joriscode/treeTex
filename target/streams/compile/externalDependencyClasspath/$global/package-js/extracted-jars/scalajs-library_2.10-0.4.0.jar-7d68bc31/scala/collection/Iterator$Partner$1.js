/** @constructor */
ScalaJS.c.scala_collection_Iterator$Partner$1 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.$$outer$f = null;
  this.gap$1$2 = null;
  this.ahead$1$2 = null
});
ScalaJS.c.scala_collection_Iterator$Partner$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$Partner$1.prototype.constructor = ScalaJS.c.scala_collection_Iterator$Partner$1;
ScalaJS.c.scala_collection_Iterator$Partner$1.prototype.hasNext__Z = (function() {
  return ScalaJS.uZ(ScalaJS.bZ((((this !== ScalaJS.as.scala_collection_Iterator(this.ahead$1$2.elem$1)) && (!this.gap$1$2.isEmpty__Z())) || this.scala$collection$Iterator$Partner$$$outer__Lscala_collection_Iterator().hasNext__Z())))
});
ScalaJS.c.scala_collection_Iterator$Partner$1.prototype.next__O = (function() {
  if (this.gap$1$2.isEmpty__Z()) {
    this.ahead$1$2.elem$1 = this
  };
  if ((this === ScalaJS.as.scala_collection_Iterator(this.ahead$1$2.elem$1))) {
    var e = this.scala$collection$Iterator$Partner$$$outer__Lscala_collection_Iterator().next__O();
    this.gap$1$2.enqueue__Lscala_collection_Seq__V(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [e])));
    return e
  } else {
    return this.gap$1$2.dequeue__O()
  }
});
ScalaJS.c.scala_collection_Iterator$Partner$1.prototype.compareGap__p2__Lscala_collection_mutable_Queue__Z = (function(queue) {
  return (this.gap$1$2 === queue)
});
ScalaJS.c.scala_collection_Iterator$Partner$1.prototype.hashCode__I = (function() {
  return this.gap$1$2.hashCode__I()
});
ScalaJS.c.scala_collection_Iterator$Partner$1.prototype.equals__O__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_collection_Iterator$Partner$1(x1)) {
    var x2 = ScalaJS.as.scala_collection_Iterator$Partner$1(x1);
    return (x2.compareGap__p2__Lscala_collection_mutable_Queue__Z(this.gap$1$2) && this.gap$1$2.isEmpty__Z())
  };
  return ScalaJS.c.java_lang_Object.prototype.equals__O__Z.call(this, other)
});
ScalaJS.c.scala_collection_Iterator$Partner$1.prototype.scala$collection$Iterator$Partner$$$outer__Lscala_collection_Iterator = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_Iterator$Partner$1.prototype.init___Lscala_collection_Iterator__Lscala_collection_mutable_Queue__Lscala_runtime_ObjectRef = (function($$outer, gap$1, ahead$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  this.gap$1$2 = gap$1;
  this.ahead$1$2 = ahead$1;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_Iterator$Partner$1.prototype.scala$collection$Iterator$Partner$$$outer__ = (function() {
  return this.scala$collection$Iterator$Partner$$$outer__Lscala_collection_Iterator()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$Partner$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$Partner$1.prototype = ScalaJS.c.scala_collection_Iterator$Partner$1.prototype;
ScalaJS.is.scala_collection_Iterator$Partner$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$Partner$1)))
});
ScalaJS.as.scala_collection_Iterator$Partner$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$Partner$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$Partner$1")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$Partner$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$Partner$1)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$Partner$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$Partner$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$Partner$1;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$Partner$1 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$Partner$1: 0
}, false, "scala.collection.Iterator$Partner$1", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$Partner$1: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$Partner$1.prototype.$classData = ScalaJS.data.scala_collection_Iterator$Partner$1;
//@ sourceMappingURL=Iterator$Partner$1.js.map
