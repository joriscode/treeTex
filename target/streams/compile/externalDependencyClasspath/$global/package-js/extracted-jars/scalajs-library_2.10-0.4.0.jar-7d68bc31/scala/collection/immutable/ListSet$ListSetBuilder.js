/** @constructor */
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.elems$1 = null;
  this.seen$1 = null
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.constructor = ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder;
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.sizeHint__I__V = (function(size) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__I__V(this, size)
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__V = (function(coll) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__V(this, coll)
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__I__V = (function(coll, delta) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__I__V(this, coll, delta)
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__V = (function(size, boundingColl) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHintBounded__Lscala_collection_mutable_Builder__I__Lscala_collection_TraversableLike__V(this, size, boundingColl)
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder = (function(f) {
  return ScalaJS.impls.scala_collection_mutable_Builder$class__mapResult__Lscala_collection_mutable_Builder__Lscala_Function1__Lscala_collection_mutable_Builder(this, f)
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable = (function(elem1, elem2, elems) {
  return ScalaJS.impls.scala_collection_generic_Growable$class__$plus$eq__Lscala_collection_generic_Growable__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(this, elem1, elem2, elems)
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable = (function(xs) {
  return ScalaJS.impls.scala_collection_generic_Growable$class__$plus$plus$eq__Lscala_collection_generic_Growable__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this, xs)
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.elems__Lscala_collection_mutable_ListBuffer = (function() {
  return this.elems$1
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.seen__Lscala_collection_mutable_HashSet = (function() {
  return this.seen$1
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.$$plus$eq__O__Lscala_collection_immutable_ListSet$ListSetBuilder = (function(x) {
  if ((!this.seen__Lscala_collection_mutable_HashSet().apply__O__Z(x))) {
    this.elems__Lscala_collection_mutable_ListBuffer().$$plus$eq__O__Lscala_collection_mutable_ListBuffer(x);
    this.seen__Lscala_collection_mutable_HashSet().$$plus$eq__O__Lscala_collection_mutable_HashSet(x)
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  return this
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.clear__V = (function() {
  this.elems__Lscala_collection_mutable_ListBuffer().clear__V();
  this.seen__Lscala_collection_mutable_HashSet().clear__V()
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.result__Lscala_collection_immutable_ListSet = (function() {
  return ScalaJS.as.scala_collection_immutable_ListSet(this.elems__Lscala_collection_mutable_ListBuffer().foldLeft__O__Lscala_Function2__O(ScalaJS.modules.scala_collection_immutable_ListSet().empty__Lscala_collection_immutable_ListSet(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(x$1$2, x$2) {
      return x$1$2.scala$collection$immutable$ListSet$$unchecked$und$plus__O__Lscala_collection_immutable_ListSet(x$2)
    })
  })())))
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.result__O = (function() {
  return this.result__Lscala_collection_immutable_ListSet()
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_immutable_ListSet$ListSetBuilder(elem)
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_immutable_ListSet$ListSetBuilder(elem)
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.init___Lscala_collection_immutable_ListSet = (function(initial) {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_generic_Growable$class__$init$__Lscala_collection_generic_Growable__V(this);
  ScalaJS.impls.scala_collection_mutable_Builder$class__$init$__Lscala_collection_mutable_Builder__V(this);
  this.elems$1 = ScalaJS.as.scala_collection_mutable_ListBuffer(new ScalaJS.c.scala_collection_mutable_ListBuffer().init___().$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ListBuffer(initial).reverse__O());
  this.seen$1 = ScalaJS.as.scala_collection_mutable_HashSet(new ScalaJS.c.scala_collection_mutable_HashSet().init___().$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(initial));
  return this
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.init___Lscala_collection_immutable_ListSet.call(this, ScalaJS.modules.scala_collection_immutable_ListSet().empty__Lscala_collection_immutable_ListSet());
  return this
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__ = (function(xs) {
  return this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(xs)
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.$$plus$eq__O__O__Lscala_collection_Seq__ = (function(elem1, elem2, elems) {
  return this.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.mapResult__Lscala_Function1__ = (function(f) {
  return this.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(f)
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__ = (function(size, boundingColl) {
  return ScalaJS.bV(this.sizeHintBounded__I__Lscala_collection_TraversableLike__V(size, boundingColl))
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__I__ = (function(coll, delta) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__I__V(coll, delta))
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__ = (function(coll$2) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__V(coll$2))
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.sizeHint__I__ = (function(size$2) {
  return ScalaJS.bV(this.sizeHint__I__V(size$2))
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.result__ = (function() {
  return this.result__Lscala_collection_immutable_ListSet()
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.clear__ = (function() {
  return ScalaJS.bV(this.clear__V())
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.$$plus$eq__O__ = (function(x) {
  return this.$$plus$eq__O__Lscala_collection_immutable_ListSet$ListSetBuilder(x)
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.seen__ = (function() {
  return this.seen__Lscala_collection_mutable_HashSet()
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.elems__ = (function() {
  return this.elems__Lscala_collection_mutable_ListBuffer()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_ListSet$ListSetBuilder = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_ListSet$ListSetBuilder.prototype = ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype;
ScalaJS.is.scala_collection_immutable_ListSet$ListSetBuilder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_ListSet$ListSetBuilder)))
});
ScalaJS.as.scala_collection_immutable_ListSet$ListSetBuilder = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_ListSet$ListSetBuilder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.ListSet$ListSetBuilder")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_ListSet$ListSetBuilder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_ListSet$ListSetBuilder)))
});
ScalaJS.asArrayOf.scala_collection_immutable_ListSet$ListSetBuilder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_ListSet$ListSetBuilder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.ListSet$ListSetBuilder;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_ListSet$ListSetBuilder = new ScalaJS.ClassTypeData({
  scala_collection_immutable_ListSet$ListSetBuilder: 0
}, false, "scala.collection.immutable.ListSet$ListSetBuilder", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_ListSet$ListSetBuilder: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder.prototype.$classData = ScalaJS.data.scala_collection_immutable_ListSet$ListSetBuilder;
//@ sourceMappingURL=ListSet$ListSetBuilder.js.map
