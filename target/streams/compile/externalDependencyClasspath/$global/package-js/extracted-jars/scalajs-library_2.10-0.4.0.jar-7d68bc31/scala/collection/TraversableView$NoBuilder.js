/** @constructor */
ScalaJS.c.scala_collection_TraversableView$NoBuilder = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.constructor = ScalaJS.c.scala_collection_TraversableView$NoBuilder;
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.sizeHint__I__V = (function(size) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__I__V(this, size)
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__V = (function(coll) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__V(this, coll)
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__I__V = (function(coll, delta) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__I__V(this, coll, delta)
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__V = (function(size, boundingColl) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHintBounded__Lscala_collection_mutable_Builder__I__Lscala_collection_TraversableLike__V(this, size, boundingColl)
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder = (function(f) {
  return ScalaJS.impls.scala_collection_mutable_Builder$class__mapResult__Lscala_collection_mutable_Builder__Lscala_Function1__Lscala_collection_mutable_Builder(this, f)
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable = (function(elem1, elem2, elems) {
  return ScalaJS.impls.scala_collection_generic_Growable$class__$plus$eq__Lscala_collection_generic_Growable__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(this, elem1, elem2, elems)
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable = (function(xs) {
  return ScalaJS.impls.scala_collection_generic_Growable$class__$plus$plus$eq__Lscala_collection_generic_Growable__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this, xs)
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.$$plus$eq__O__Lscala_collection_TraversableView$NoBuilder = (function(elem) {
  return this
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.result__Lscala_Nothing = (function() {
  throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("TraversableView.Builder.result")
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.clear__V = (function() {
  /*<skip>*/
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.result__O = (function() {
  return this.result__Lscala_Nothing()
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_TraversableView$NoBuilder(elem)
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_TraversableView$NoBuilder(elem)
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_generic_Growable$class__$init$__Lscala_collection_generic_Growable__V(this);
  ScalaJS.impls.scala_collection_mutable_Builder$class__$init$__Lscala_collection_mutable_Builder__V(this);
  return this
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__ = (function(xs) {
  return this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(xs)
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.$$plus$eq__O__O__Lscala_collection_Seq__ = (function(elem1, elem2, elems) {
  return this.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.mapResult__Lscala_Function1__ = (function(f) {
  return this.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(f)
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__ = (function(size, boundingColl) {
  return ScalaJS.bV(this.sizeHintBounded__I__Lscala_collection_TraversableLike__V(size, boundingColl))
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__I__ = (function(coll, delta) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__I__V(coll, delta))
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__ = (function(coll$2) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__V(coll$2))
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.sizeHint__I__ = (function(size$2) {
  return ScalaJS.bV(this.sizeHint__I__V(size$2))
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.clear__ = (function() {
  return ScalaJS.bV(this.clear__V())
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.result__ = (function() {
  return this.result__Lscala_Nothing()
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.iterator__ = (function() {
  return this.iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.$$plus$eq__O__ = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_TraversableView$NoBuilder(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_TraversableView$NoBuilder = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_TraversableView$NoBuilder.prototype = ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype;
ScalaJS.is.scala_collection_TraversableView$NoBuilder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_TraversableView$NoBuilder)))
});
ScalaJS.as.scala_collection_TraversableView$NoBuilder = (function(obj) {
  if ((ScalaJS.is.scala_collection_TraversableView$NoBuilder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.TraversableView$NoBuilder")
  }
});
ScalaJS.isArrayOf.scala_collection_TraversableView$NoBuilder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_TraversableView$NoBuilder)))
});
ScalaJS.asArrayOf.scala_collection_TraversableView$NoBuilder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_TraversableView$NoBuilder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.TraversableView$NoBuilder;", depth)
  }
});
ScalaJS.data.scala_collection_TraversableView$NoBuilder = new ScalaJS.ClassTypeData({
  scala_collection_TraversableView$NoBuilder: 0
}, false, "scala.collection.TraversableView$NoBuilder", ScalaJS.data.java_lang_Object, {
  scala_collection_TraversableView$NoBuilder: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_TraversableView$NoBuilder.prototype.$classData = ScalaJS.data.scala_collection_TraversableView$NoBuilder;
//@ sourceMappingURL=TraversableView$NoBuilder.js.map
