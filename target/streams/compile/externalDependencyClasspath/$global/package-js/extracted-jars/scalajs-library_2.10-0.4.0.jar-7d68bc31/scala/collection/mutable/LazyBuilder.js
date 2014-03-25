/** @constructor */
ScalaJS.c.scala_collection_mutable_LazyBuilder = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.parts$1 = null
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.constructor = ScalaJS.c.scala_collection_mutable_LazyBuilder;
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.sizeHint__I__V = (function(size) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__I__V(this, size)
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__V = (function(coll) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__V(this, coll)
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__I__V = (function(coll, delta) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__I__V(this, coll, delta)
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__V = (function(size, boundingColl) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHintBounded__Lscala_collection_mutable_Builder__I__Lscala_collection_TraversableLike__V(this, size, boundingColl)
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder = (function(f) {
  return ScalaJS.impls.scala_collection_mutable_Builder$class__mapResult__Lscala_collection_mutable_Builder__Lscala_Function1__Lscala_collection_mutable_Builder(this, f)
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable = (function(elem1, elem2, elems) {
  return ScalaJS.impls.scala_collection_generic_Growable$class__$plus$eq__Lscala_collection_generic_Growable__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(this, elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.parts__Lscala_collection_mutable_ListBuffer = (function() {
  return this.parts$1
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.parts$und$eq__Lscala_collection_mutable_ListBuffer__V = (function(x$1) {
  this.parts$1 = x$1
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.$$plus$eq__O__Lscala_collection_mutable_LazyBuilder = (function(x) {
  this.parts__Lscala_collection_mutable_ListBuffer().$$plus$eq__O__Lscala_collection_mutable_ListBuffer(ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [x]))));
  return this
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_LazyBuilder = (function(xs) {
  this.parts__Lscala_collection_mutable_ListBuffer().$$plus$eq__O__Lscala_collection_mutable_ListBuffer(xs);
  return this
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.clear__V = (function() {
  this.parts__Lscala_collection_mutable_ListBuffer().clear__V()
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable = (function(xs) {
  return this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_LazyBuilder(xs)
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_LazyBuilder(elem)
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_LazyBuilder(elem)
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_generic_Growable$class__$init$__Lscala_collection_generic_Growable__V(this);
  ScalaJS.impls.scala_collection_mutable_Builder$class__$init$__Lscala_collection_mutable_Builder__V(this);
  this.parts$1 = new ScalaJS.c.scala_collection_mutable_ListBuffer().init___();
  return this
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.$$plus$eq__O__O__Lscala_collection_Seq__ = (function(elem1, elem2, elems) {
  return this.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.mapResult__Lscala_Function1__ = (function(f) {
  return this.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(f)
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__ = (function(size, boundingColl) {
  return ScalaJS.bV(this.sizeHintBounded__I__Lscala_collection_TraversableLike__V(size, boundingColl))
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__I__ = (function(coll, delta) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__I__V(coll, delta))
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__ = (function(coll$2) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__V(coll$2))
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.sizeHint__I__ = (function(size$2) {
  return ScalaJS.bV(this.sizeHint__I__V(size$2))
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.clear__ = (function() {
  return ScalaJS.bV(this.clear__V())
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__ = (function(xs) {
  return this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_LazyBuilder(xs)
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.$$plus$eq__O__ = (function(x) {
  return this.$$plus$eq__O__Lscala_collection_mutable_LazyBuilder(x)
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.parts$und$eq__Lscala_collection_mutable_ListBuffer__ = (function(x$1) {
  return ScalaJS.bV(this.parts$und$eq__Lscala_collection_mutable_ListBuffer__V(x$1))
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.parts__ = (function() {
  return this.parts__Lscala_collection_mutable_ListBuffer()
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.result__ = (function() {
  return this.result__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_LazyBuilder = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_LazyBuilder.prototype = ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype;
ScalaJS.is.scala_collection_mutable_LazyBuilder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_LazyBuilder)))
});
ScalaJS.as.scala_collection_mutable_LazyBuilder = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_LazyBuilder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.LazyBuilder")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_LazyBuilder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_LazyBuilder)))
});
ScalaJS.asArrayOf.scala_collection_mutable_LazyBuilder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_LazyBuilder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.LazyBuilder;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_LazyBuilder = new ScalaJS.ClassTypeData({
  scala_collection_mutable_LazyBuilder: 0
}, false, "scala.collection.mutable.LazyBuilder", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_LazyBuilder: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_LazyBuilder.prototype.$classData = ScalaJS.data.scala_collection_mutable_LazyBuilder;
//@ sourceMappingURL=LazyBuilder.js.map
