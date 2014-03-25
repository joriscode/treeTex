/** @constructor */
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$$anon$1 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.pos$2 = 0;
  this.node$2 = null
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_mutable_UnrolledBuffer$$anon$1;
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$$anon$1.prototype.pos__p2__I = (function() {
  return this.pos$2
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$$anon$1.prototype.pos$und$eq__p2__I__V = (function(x$1) {
  this.pos$2 = x$1
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$$anon$1.prototype.node__p2__Lscala_collection_mutable_UnrolledBuffer$Unrolled = (function() {
  return this.node$2
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$$anon$1.prototype.node$und$eq__p2__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V = (function(x$1) {
  this.node$2 = x$1
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$$anon$1.prototype.scan__p2__V = (function() {
  this.pos$und$eq__p2__I__V((this.pos__p2__I() + 1));
  while ((this.pos__p2__I() >= this.node__p2__Lscala_collection_mutable_UnrolledBuffer$Unrolled().size__I())) {
    this.pos$und$eq__p2__I__V(0);
    this.node$und$eq__p2__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V(this.node__p2__Lscala_collection_mutable_UnrolledBuffer$Unrolled().next__Lscala_collection_mutable_UnrolledBuffer$Unrolled());
    if ((this.node__p2__Lscala_collection_mutable_UnrolledBuffer$Unrolled() === null)) {
      return undefined
    }
  }
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$$anon$1.prototype.hasNext__Z = (function() {
  return (this.node__p2__Lscala_collection_mutable_UnrolledBuffer$Unrolled() !== null)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$$anon$1.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    var r = ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(this.node__p2__Lscala_collection_mutable_UnrolledBuffer$Unrolled().array__O(), this.pos__p2__I());
    this.scan__p2__V();
    return r
  } else {
    return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O()
  }
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$$anon$1.prototype.init___Lscala_collection_mutable_UnrolledBuffer = (function($$outer) {
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.pos$2 = -1;
  this.node$2 = $$outer.scala$collection$mutable$UnrolledBuffer$$headptr__Lscala_collection_mutable_UnrolledBuffer$Unrolled();
  this.scan__p2__V();
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_UnrolledBuffer$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_UnrolledBuffer$$anon$1.prototype = ScalaJS.c.scala_collection_mutable_UnrolledBuffer$$anon$1.prototype;
ScalaJS.is.scala_collection_mutable_UnrolledBuffer$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_UnrolledBuffer$$anon$1)))
});
ScalaJS.as.scala_collection_mutable_UnrolledBuffer$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_UnrolledBuffer$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.UnrolledBuffer$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_UnrolledBuffer$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_UnrolledBuffer$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_mutable_UnrolledBuffer$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_UnrolledBuffer$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.UnrolledBuffer$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_UnrolledBuffer$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_UnrolledBuffer$$anon$1: 0
}, false, "scala.collection.mutable.UnrolledBuffer$$anon$1", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_mutable_UnrolledBuffer$$anon$1: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_mutable_UnrolledBuffer$$anon$1;
//@ sourceMappingURL=UnrolledBuffer$$anon$1.js.map
