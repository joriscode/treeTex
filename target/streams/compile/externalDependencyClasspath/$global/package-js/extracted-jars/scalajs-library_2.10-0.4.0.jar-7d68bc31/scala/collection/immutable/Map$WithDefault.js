/** @constructor */
ScalaJS.c.scala_collection_immutable_Map$WithDefault = (function() {
  ScalaJS.c.scala_collection_Map$WithDefault.call(this);
  this.underlying$5 = null;
  this.d$5 = null
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype = new ScalaJS.inheritable.scala_collection_Map$WithDefault();
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.constructor = ScalaJS.c.scala_collection_immutable_Map$WithDefault;
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map = (function(ev) {
  return ScalaJS.impls.scala_collection_immutable_Map$class__toMap__Lscala_collection_immutable_Map__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(this, ev)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.seq__Lscala_collection_immutable_Map = (function() {
  return ScalaJS.impls.scala_collection_immutable_Map$class__seq__Lscala_collection_immutable_Map__Lscala_collection_immutable_Map(this)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_immutable_MapLike$class__parCombiner__Lscala_collection_immutable_MapLike__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_Map = (function(elem1, elem2, elems) {
  return ScalaJS.impls.scala_collection_immutable_MapLike$class__$plus__Lscala_collection_immutable_MapLike__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_Map(this, elem1, elem2, elems)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_Map = (function(xs) {
  return ScalaJS.impls.scala_collection_immutable_MapLike$class__$plus$plus__Lscala_collection_immutable_MapLike__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_Map(this, xs)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.filterKeys__Lscala_Function1__Lscala_collection_immutable_Map = (function(p) {
  return ScalaJS.impls.scala_collection_immutable_MapLike$class__filterKeys__Lscala_collection_immutable_MapLike__Lscala_Function1__Lscala_collection_immutable_Map(this, p)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.mapValues__Lscala_Function1__Lscala_collection_immutable_Map = (function(f) {
  return ScalaJS.impls.scala_collection_immutable_MapLike$class__mapValues__Lscala_collection_immutable_MapLike__Lscala_Function1__Lscala_collection_immutable_Map(this, f)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.keySet__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.impls.scala_collection_immutable_MapLike$class__keySet__Lscala_collection_immutable_MapLike__Lscala_collection_immutable_Set(this)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.transform__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function(f, bf) {
  return ScalaJS.impls.scala_collection_immutable_MapLike$class__transform__Lscala_collection_immutable_MapLike__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(this, f, bf)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_immutable_Iterable$class__companion__Lscala_collection_immutable_Iterable__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.empty__Lscala_collection_immutable_Map$WithDefault = (function() {
  return new ScalaJS.c.scala_collection_immutable_Map$WithDefault().init___Lscala_collection_immutable_Map__Lscala_Function1(this.underlying$5.empty__Lscala_collection_immutable_Map(), this.d$5)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.updated__O__O__Lscala_collection_immutable_Map$WithDefault = (function(key, value) {
  return new ScalaJS.c.scala_collection_immutable_Map$WithDefault().init___Lscala_collection_immutable_Map__Lscala_Function1(this.underlying$5.updated__O__O__Lscala_collection_immutable_Map(key, value), this.d$5)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map$WithDefault = (function(kv) {
  return this.updated__O__O__Lscala_collection_immutable_Map$WithDefault(kv.$$und1__O(), kv.$$und2__O())
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.$$minus__O__Lscala_collection_immutable_Map$WithDefault = (function(key) {
  return new ScalaJS.c.scala_collection_immutable_Map$WithDefault().init___Lscala_collection_immutable_Map__Lscala_Function1(ScalaJS.as.scala_collection_immutable_Map(this.underlying$5.$$minus__O__Lscala_collection_Map(key)), this.d$5)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.withDefault__Lscala_Function1__Lscala_collection_immutable_Map = (function(d) {
  return new ScalaJS.c.scala_collection_immutable_Map$WithDefault().init___Lscala_collection_immutable_Map__Lscala_Function1(this.underlying$5, d)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.withDefaultValue__O__Lscala_collection_immutable_Map = (function(d) {
  return new ScalaJS.c.scala_collection_immutable_Map$WithDefault().init___Lscala_collection_immutable_Map__Lscala_Function1(this.underlying$5, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(d$1) {
    return (function(x) {
      return d$1
    })
  })(d)))
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.filterNot__Lscala_Function1__O = (function(p) {
  return this.filterNot__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.values__Lscala_collection_GenIterable = (function() {
  return this.values__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.keys__Lscala_collection_GenIterable = (function() {
  return this.keys__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.keySet__Lscala_collection_GenSet = (function() {
  return this.keySet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.keySet__Lscala_collection_Set = (function() {
  return this.keySet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.mapValues__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.mapValues__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.mapValues__Lscala_Function1__Lscala_collection_Map = (function(f) {
  return this.mapValues__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.filterKeys__Lscala_Function1__Lscala_collection_GenMap = (function(p) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_immutable_Map(p)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.filterKeys__Lscala_Function1__Lscala_collection_Map = (function(p) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_immutable_Map(p)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Map = (function(xs) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_Map(xs)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_Map = (function(kv1, kv2, kvs) {
  return this.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_Map(kv1, kv2, kvs)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.seq__Lscala_collection_Map = (function() {
  return this.seq__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.seq__Lscala_collection_immutable_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.seq__Lscala_collection_immutable_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_GenMap = (function(ev) {
  return this.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(ev)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.$$minus__O__O = (function(key) {
  return this.$$minus__O__Lscala_collection_immutable_Map$WithDefault(key)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_Map$WithDefault(elem)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.$$minus__O__Lscala_collection_Map = (function(key) {
  return this.$$minus__O__Lscala_collection_immutable_Map$WithDefault(key)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.$$plus__Lscala_Tuple2__Lscala_collection_GenMap = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map$WithDefault(kv)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.$$plus__Lscala_Tuple2__Lscala_collection_Map = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map$WithDefault(kv)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map$WithDefault(kv)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.updated__O__O__Lscala_collection_GenMap = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_Map$WithDefault(key, value)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.updated__O__O__Lscala_collection_Map = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_Map$WithDefault(key, value)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.updated__O__O__Lscala_collection_immutable_Map = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_Map$WithDefault(key, value)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_collection_immutable_Map$WithDefault()
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.empty__Lscala_collection_immutable_Map = (function() {
  return this.empty__Lscala_collection_immutable_Map$WithDefault()
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.init___Lscala_collection_immutable_Map__Lscala_Function1 = (function(underlying, d) {
  this.underlying$5 = underlying;
  this.d$5 = d;
  ScalaJS.c.scala_collection_Map$WithDefault.prototype.init___Lscala_collection_Map__Lscala_Function1.call(this, underlying, d);
  ScalaJS.impls.scala_collection_immutable_Traversable$class__$init$__Lscala_collection_immutable_Traversable__V(this);
  ScalaJS.impls.scala_collection_immutable_Iterable$class__$init$__Lscala_collection_immutable_Iterable__V(this);
  ScalaJS.impls.scala_collection_immutable_MapLike$class__$init$__Lscala_collection_immutable_MapLike__V(this);
  ScalaJS.impls.scala_collection_immutable_Map$class__$init$__Lscala_collection_immutable_Map__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.transform__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__ = (function(f, bf) {
  return this.transform__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(f, bf)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.withDefaultValue__O__ = (function(d) {
  return this.withDefaultValue__O__Lscala_collection_immutable_Map(d)
});
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.withDefault__Lscala_Function1__ = (function(d$2) {
  return this.withDefault__Lscala_Function1__Lscala_collection_immutable_Map(d$2)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Map$WithDefault = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Map$WithDefault.prototype = ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype;
ScalaJS.is.scala_collection_immutable_Map$WithDefault = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Map$WithDefault)))
});
ScalaJS.as.scala_collection_immutable_Map$WithDefault = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Map$WithDefault(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Map$WithDefault")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Map$WithDefault = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Map$WithDefault)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Map$WithDefault = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Map$WithDefault(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Map$WithDefault;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Map$WithDefault = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Map$WithDefault: 0
}, false, "scala.collection.immutable.Map$WithDefault", ScalaJS.data.scala_collection_Map$WithDefault, {
  scala_collection_immutable_Map$WithDefault: 1,
  scala_collection_immutable_Map: 1,
  scala_collection_immutable_MapLike: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
  scala_collection_Map$WithDefault: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_AbstractMap: 1,
  scala_collection_Map: 1,
  scala_collection_MapLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  scala_collection_GenMap: 1,
  scala_collection_GenMapLike: 1,
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
ScalaJS.c.scala_collection_immutable_Map$WithDefault.prototype.$classData = ScalaJS.data.scala_collection_immutable_Map$WithDefault;
//@ sourceMappingURL=Map$WithDefault.js.map
