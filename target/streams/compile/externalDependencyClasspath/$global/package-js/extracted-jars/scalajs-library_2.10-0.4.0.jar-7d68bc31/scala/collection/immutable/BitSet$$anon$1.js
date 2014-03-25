/** @constructor */
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.b$1 = null
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_immutable_BitSet$$anon$1;
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.sizeHint__I__V = (function(size) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__I__V(this, size)
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.sizeHint__Lscala_collection_TraversableLike__V = (function(coll) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__V(this, coll)
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.sizeHint__Lscala_collection_TraversableLike__I__V = (function(coll, delta) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__I__V(this, coll, delta)
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__V = (function(size, boundingColl) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHintBounded__Lscala_collection_mutable_Builder__I__Lscala_collection_TraversableLike__V(this, size, boundingColl)
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder = (function(f) {
  return ScalaJS.impls.scala_collection_mutable_Builder$class__mapResult__Lscala_collection_mutable_Builder__Lscala_Function1__Lscala_collection_mutable_Builder(this, f)
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable = (function(elem1, elem2, elems) {
  return ScalaJS.impls.scala_collection_generic_Growable$class__$plus$eq__Lscala_collection_generic_Growable__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(this, elem1, elem2, elems)
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable = (function(xs) {
  return ScalaJS.impls.scala_collection_generic_Growable$class__$plus$plus$eq__Lscala_collection_generic_Growable__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this, xs)
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.$$plus$eq__I__Lscala_collection_immutable_BitSet$$anon$1 = (function(x) {
  this.b$1.$$plus$eq__I__Lscala_collection_mutable_BitSet(x);
  return this
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.clear__V = (function() {
  this.b$1.clear__V()
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.result__Lscala_collection_immutable_BitSet = (function() {
  return this.b$1.toImmutable__Lscala_collection_immutable_BitSet()
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.result__O = (function() {
  return this.result__Lscala_collection_immutable_BitSet()
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__I__Lscala_collection_immutable_BitSet$$anon$1(ScalaJS.uI(elem))
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__I__Lscala_collection_immutable_BitSet$$anon$1(ScalaJS.uI(elem))
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_generic_Growable$class__$init$__Lscala_collection_generic_Growable__V(this);
  ScalaJS.impls.scala_collection_mutable_Builder$class__$init$__Lscala_collection_mutable_Builder__V(this);
  this.b$1 = new ScalaJS.c.scala_collection_mutable_BitSet().init___();
  return this
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__ = (function(xs) {
  return this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(xs)
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.$$plus$eq__O__O__Lscala_collection_Seq__ = (function(elem1, elem2, elems) {
  return this.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.mapResult__Lscala_Function1__ = (function(f) {
  return this.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(f)
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__ = (function(size, boundingColl) {
  return ScalaJS.bV(this.sizeHintBounded__I__Lscala_collection_TraversableLike__V(size, boundingColl))
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.sizeHint__Lscala_collection_TraversableLike__I__ = (function(coll, delta) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__I__V(coll, delta))
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.sizeHint__Lscala_collection_TraversableLike__ = (function(coll$2) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__V(coll$2))
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.sizeHint__I__ = (function(size$2) {
  return ScalaJS.bV(this.sizeHint__I__V(size$2))
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.result__ = (function() {
  return this.result__Lscala_collection_immutable_BitSet()
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.clear__ = (function() {
  return ScalaJS.bV(this.clear__V())
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.$$plus$eq__I__ = (function(x) {
  return this.$$plus$eq__I__Lscala_collection_immutable_BitSet$$anon$1(x)
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.$$plus$eq__O__ = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_Builder(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_BitSet$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_BitSet$$anon$1.prototype = ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype;
ScalaJS.is.scala_collection_immutable_BitSet$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_BitSet$$anon$1)))
});
ScalaJS.as.scala_collection_immutable_BitSet$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_BitSet$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.BitSet$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_BitSet$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_BitSet$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_immutable_BitSet$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_BitSet$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.BitSet$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_BitSet$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_immutable_BitSet$$anon$1: 0
}, false, "scala.collection.immutable.BitSet$$anon$1", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_BitSet$$anon$1: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_BitSet$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_immutable_BitSet$$anon$1;
//@ sourceMappingURL=BitSet$$anon$1.js.map
