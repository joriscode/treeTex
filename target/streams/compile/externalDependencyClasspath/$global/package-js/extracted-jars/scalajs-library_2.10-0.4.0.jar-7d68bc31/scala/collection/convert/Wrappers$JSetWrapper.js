/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractSet.call(this);
  this.underlying$5 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractSet();
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper;
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.underlying__Ljava_util_Set = (function() {
  return this.underlying$5
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.size__I = (function() {
  return this.underlying__Ljava_util_Set().size__I()
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_collection_convert_WrapAsScala().asScalaIterator__Ljava_util_Iterator__Lscala_collection_Iterator(this.underlying__Ljava_util_Set().iterator__Ljava_util_Iterator())
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.contains__O__Z = (function(elem) {
  return this.underlying__Ljava_util_Set().contains__O__Z(elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.$$plus$eq__O__Lscala_collection_convert_Wrappers$JSetWrapper = (function(elem) {
  this.underlying__Ljava_util_Set().add__O__Z(elem);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.$$minus$eq__O__Lscala_collection_convert_Wrappers$JSetWrapper = (function(elem) {
  this.underlying__Ljava_util_Set().remove__O__Z(elem);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.add__O__Z = (function(elem) {
  return this.underlying__Ljava_util_Set().add__O__Z(elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.remove__O__Z = (function(elem) {
  return this.underlying__Ljava_util_Set().remove__O__Z(elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.clear__V = (function() {
  this.underlying__Ljava_util_Set().clear__V()
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.empty__Lscala_collection_convert_Wrappers$JSetWrapper = (function() {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Set(this.scala$collection$convert$Wrappers$JSetWrapper$$$outer__Lscala_collection_convert_Wrappers(), new ScalaJS.c.java_util_HashSet().init___())
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.clone__Lscala_collection_convert_Wrappers$JSetWrapper = (function() {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Set(this.scala$collection$convert$Wrappers$JSetWrapper$$$outer__Lscala_collection_convert_Wrappers(), new ScalaJS.c.java_util_LinkedHashSet().init___Ljava_util_Collection(this.underlying__Ljava_util_Set()))
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.copy__Ljava_util_Set__Lscala_collection_convert_Wrappers$JSetWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Set(this.scala$collection$convert$Wrappers$JSetWrapper$$$outer__Lscala_collection_convert_Wrappers(), underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.copy$default$1__Ljava_util_Set = (function() {
  return this.underlying__Ljava_util_Set()
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.productPrefix__T = (function() {
  return "JSetWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.underlying__Ljava_util_Set();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.scala$collection$convert$Wrappers$JSetWrapper$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bZ(this.apply__O__Z(v1))
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.diff__Lscala_collection_GenSet__O = (function(that) {
  return this.diff__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.union__Lscala_collection_GenSet__O = (function(that) {
  return this.union__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable = (function(xs) {
  return this.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Set(xs)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable = (function(elem1, elem2, elems) {
  return this.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Set(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.$$minus__O__O = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Set(elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Set(elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.$$minus__O__Lscala_collection_Set = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Set(elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set = (function(elems) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Set(elems)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.$$plus__O__O__Lscala_collection_Seq__Lscala_collection_Set = (function(elem1, elem2, elems) {
  return this.$$plus__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Set(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.$$plus__O__O = (function(elem) {
  return this.$$plus__O__Lscala_collection_mutable_Set(elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.$$plus__O__Lscala_collection_Set = (function(elem) {
  return this.$$plus__O__Lscala_collection_mutable_Set(elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.result__O = (function() {
  return this.result__Lscala_collection_mutable_Set()
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.seq__Lscala_collection_Set = (function() {
  return this.seq__Lscala_collection_mutable_Set()
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_convert_Wrappers$JSetWrapper()
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.clone__Lscala_collection_mutable_Set = (function() {
  return this.clone__Lscala_collection_convert_Wrappers$JSetWrapper()
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.empty__Lscala_collection_Set = (function() {
  return this.empty__Lscala_collection_convert_Wrappers$JSetWrapper()
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.empty__Lscala_collection_GenSet = (function() {
  return this.empty__Lscala_collection_convert_Wrappers$JSetWrapper()
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.$$minus$eq__O__Lscala_collection_generic_Shrinkable = (function(elem) {
  return this.$$minus$eq__O__Lscala_collection_convert_Wrappers$JSetWrapper(elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.$$minus$eq__O__Lscala_collection_mutable_SetLike = (function(elem) {
  return this.$$minus$eq__O__Lscala_collection_convert_Wrappers$JSetWrapper(elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_convert_Wrappers$JSetWrapper(elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_convert_Wrappers$JSetWrapper(elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.$$plus$eq__O__Lscala_collection_mutable_SetLike = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_convert_Wrappers$JSetWrapper(elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.init___Lscala_collection_convert_Wrappers__Ljava_util_Set = (function($$outer, underlying) {
  this.underlying$5 = underlying;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_collection_mutable_AbstractSet.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.scala$collection$convert$Wrappers$JSetWrapper$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$JSetWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.productElement__I__ = (function(x$1) {
  return this.productElement__I__O(x$1)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.copy__Ljava_util_Set__ = (function(underlying) {
  return this.copy__Ljava_util_Set__Lscala_collection_convert_Wrappers$JSetWrapper(underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.underlying__ = (function() {
  return this.underlying__Ljava_util_Set()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$JSetWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$JSetWrapper.prototype = ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$JSetWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$JSetWrapper)))
});
ScalaJS.as.scala_collection_convert_Wrappers$JSetWrapper = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$JSetWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$JSetWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JSetWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$JSetWrapper)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$JSetWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JSetWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$JSetWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$JSetWrapper = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$JSetWrapper: 0
}, false, "scala.collection.convert.Wrappers$JSetWrapper", ScalaJS.data.scala_collection_mutable_AbstractSet, {
  scala_collection_convert_Wrappers$JSetWrapper: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_collection_mutable_AbstractSet: 1,
  scala_collection_mutable_Set: 1,
  scala_collection_mutable_SetLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_generic_Shrinkable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  scala_collection_script_Scriptable: 1,
  scala_collection_Set: 1,
  scala_collection_SetLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_collection_GenSet: 1,
  scala_collection_generic_GenericSetTemplate: 1,
  scala_collection_GenSetLike: 1,
  scala_Function1: 1,
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
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$JSetWrapper;
//@ sourceMappingURL=Wrappers$JSetWrapper.js.map
