/** @constructor */
ScalaJS.c.scala_collection_SetLike$$anon$1 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.elms$2 = null;
  this.len$2 = 0;
  this.itr$2 = null;
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_SetLike$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_SetLike$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_SetLike$$anon$1;
ScalaJS.c.scala_collection_SetLike$$anon$1.prototype.elms__p2__Lscala_collection_immutable_IndexedSeq = (function() {
  return this.elms$2
});
ScalaJS.c.scala_collection_SetLike$$anon$1.prototype.len__p2__I = (function() {
  return this.len$2
});
ScalaJS.c.scala_collection_SetLike$$anon$1.prototype.len$und$eq__p2__I__V = (function(x$1) {
  this.len$2 = x$1
});
ScalaJS.c.scala_collection_SetLike$$anon$1.prototype.itr__p2__Lscala_collection_Iterator = (function() {
  return this.itr$2
});
ScalaJS.c.scala_collection_SetLike$$anon$1.prototype.itr$und$eq__p2__Lscala_collection_Iterator__V = (function(x$1) {
  this.itr$2 = x$1
});
ScalaJS.c.scala_collection_SetLike$$anon$1.prototype.hasNext__Z = (function() {
  return ((this.len__p2__I() <= this.elms__p2__Lscala_collection_immutable_IndexedSeq().size__I()) || this.itr__p2__Lscala_collection_Iterator().hasNext__Z())
});
ScalaJS.c.scala_collection_SetLike$$anon$1.prototype.next__Lscala_collection_Set = (function() {
  if ((!this.itr__p2__Lscala_collection_Iterator().hasNext__Z())) {
    if ((this.len__p2__I() > this.elms__p2__Lscala_collection_immutable_IndexedSeq().size__I())) {
      ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O()
    } else {
      this.itr$und$eq__p2__Lscala_collection_Iterator__V(new ScalaJS.c.scala_collection_SetLike$SubsetsItr().init___Lscala_collection_SetLike__Lscala_collection_IndexedSeq__I(this.$$outer$2, this.elms__p2__Lscala_collection_immutable_IndexedSeq(), this.len__p2__I()));
      this.len$und$eq__p2__I__V((this.len__p2__I() + 1));
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    }
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  return ScalaJS.as.scala_collection_Set(this.itr__p2__Lscala_collection_Iterator().next__O())
});
ScalaJS.c.scala_collection_SetLike$$anon$1.prototype.next__O = (function() {
  return this.next__Lscala_collection_Set()
});
ScalaJS.c.scala_collection_SetLike$$anon$1.prototype.init___Lscala_collection_SetLike = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.elms$2 = $$outer.toIndexedSeq__Lscala_collection_immutable_IndexedSeq();
  this.len$2 = 0;
  this.itr$2 = ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator();
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_SetLike$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_SetLike$$anon$1.prototype = ScalaJS.c.scala_collection_SetLike$$anon$1.prototype;
ScalaJS.is.scala_collection_SetLike$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_SetLike$$anon$1)))
});
ScalaJS.as.scala_collection_SetLike$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_SetLike$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.SetLike$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_SetLike$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_SetLike$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_SetLike$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_SetLike$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.SetLike$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_SetLike$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_SetLike$$anon$1: 0
}, false, "scala.collection.SetLike$$anon$1", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_SetLike$$anon$1: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_SetLike$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_SetLike$$anon$1;
//@ sourceMappingURL=SetLike$$anon$1.js.map
