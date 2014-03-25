/** @constructor */
ScalaJS.c.scala_collection_mutable_AbstractIterable = (function() {
  ScalaJS.c.scala_collection_AbstractIterable.call(this)
});
ScalaJS.c.scala_collection_mutable_AbstractIterable.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterable();
ScalaJS.c.scala_collection_mutable_AbstractIterable.prototype.constructor = ScalaJS.c.scala_collection_mutable_AbstractIterable;
ScalaJS.c.scala_collection_mutable_AbstractIterable.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_mutable_Iterable$class__companion__Lscala_collection_mutable_Iterable__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_collection_mutable_AbstractIterable.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_mutable_Iterable$class__parCombiner__Lscala_collection_mutable_Iterable__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_mutable_AbstractIterable.prototype.seq__Lscala_collection_mutable_Iterable = (function() {
  return ScalaJS.impls.scala_collection_mutable_Iterable$class__seq__Lscala_collection_mutable_Iterable__Lscala_collection_mutable_Iterable(this)
});
ScalaJS.c.scala_collection_mutable_AbstractIterable.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_AbstractIterable.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_AbstractIterable.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_mutable_AbstractIterable.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_mutable_AbstractIterable.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_AbstractIterable.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_mutable_AbstractIterable.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_AbstractIterable.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_mutable_Iterable()
});
ScalaJS.c.scala_collection_mutable_AbstractIterable.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_mutable_Iterable()
});
ScalaJS.c.scala_collection_mutable_AbstractIterable.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_mutable_Iterable()
});
ScalaJS.c.scala_collection_mutable_AbstractIterable.prototype.seq__Lscala_collection_mutable_Traversable = (function() {
  return this.seq__Lscala_collection_mutable_Iterable()
});
ScalaJS.c.scala_collection_mutable_AbstractIterable.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_AbstractIterable.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_mutable_Traversable$class__$init$__Lscala_collection_mutable_Traversable__V(this);
  ScalaJS.impls.scala_collection_mutable_Iterable$class__$init$__Lscala_collection_mutable_Iterable__V(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_AbstractIterable = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_AbstractIterable.prototype = ScalaJS.c.scala_collection_mutable_AbstractIterable.prototype;
ScalaJS.is.scala_collection_mutable_AbstractIterable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_AbstractIterable)))
});
ScalaJS.as.scala_collection_mutable_AbstractIterable = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_AbstractIterable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.AbstractIterable")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_AbstractIterable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_AbstractIterable)))
});
ScalaJS.asArrayOf.scala_collection_mutable_AbstractIterable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_AbstractIterable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.AbstractIterable;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_AbstractIterable = new ScalaJS.ClassTypeData({
  scala_collection_mutable_AbstractIterable: 0
}, false, "scala.collection.mutable.AbstractIterable", ScalaJS.data.scala_collection_AbstractIterable, {
  scala_collection_mutable_AbstractIterable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
  scala_collection_AbstractIterable: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_AbstractTraversable: 1,
  scala_collection_Traversable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_TraversableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  scala_collection_generic_FilterMonadic: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_AbstractIterable.prototype.$classData = ScalaJS.data.scala_collection_mutable_AbstractIterable;
//@ sourceMappingURL=AbstractIterable.js.map
