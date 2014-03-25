/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractMap.call(this);
  this.underlying$5 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractMap();
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper;
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.underlying__Ljava_util_Properties = (function() {
  return this.underlying$5
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.size__I = (function() {
  return this.underlying__Ljava_util_Properties().size__I()
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.get__T__Lscala_Option = (function(k) {
  var v = this.underlying__Ljava_util_Properties().get__O__O(k);
  if ((!ScalaJS.anyRefEqEq(v, null))) {
    return new ScalaJS.c.scala_Some().init___O(ScalaJS.as.java_lang_String(v))
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.$$plus$eq__Lscala_Tuple2__Lscala_collection_convert_Wrappers$JPropertiesWrapper = (function(kv) {
  this.underlying__Ljava_util_Properties().put__O__O__O(kv.$$und1__O(), kv.$$und2__O());
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.$$minus$eq__T__Lscala_collection_convert_Wrappers$JPropertiesWrapper = (function(key) {
  this.underlying__Ljava_util_Properties().remove__O__O(key);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.put__T__T__Lscala_Option = (function(k, v) {
  var r = this.underlying__Ljava_util_Properties().put__O__O__O(k, v);
  if ((!ScalaJS.anyRefEqEq(r, null))) {
    return new ScalaJS.c.scala_Some().init___O(ScalaJS.as.java_lang_String(r))
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.update__T__T__V = (function(k, v) {
  this.underlying__Ljava_util_Properties().put__O__O__O(k, v)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.remove__T__Lscala_Option = (function(k) {
  var r = this.underlying__Ljava_util_Properties().remove__O__O(k);
  if ((!ScalaJS.anyRefEqEq(r, null))) {
    return new ScalaJS.c.scala_Some().init___O(ScalaJS.as.java_lang_String(r))
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.iterator__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$$anon$3().init___Lscala_collection_convert_Wrappers$JPropertiesWrapper(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.clear__V = (function() {
  this.underlying__Ljava_util_Properties().clear__V()
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.empty__Lscala_collection_convert_Wrappers$JPropertiesWrapper = (function() {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Properties(this.scala$collection$convert$Wrappers$JPropertiesWrapper$$$outer__Lscala_collection_convert_Wrappers(), new ScalaJS.c.java_util_Properties().init___())
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.getProperty__T__T = (function(key) {
  return this.underlying__Ljava_util_Properties().getProperty__T__T(key)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.getProperty__T__T__T = (function(key, defaultValue) {
  return this.underlying__Ljava_util_Properties().getProperty__T__T__T(key, defaultValue)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.setProperty__T__T__O = (function(key, value) {
  return this.underlying__Ljava_util_Properties().setProperty__T__T__O(key, value)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.copy__Ljava_util_Properties__Lscala_collection_convert_Wrappers$JPropertiesWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Properties(this.scala$collection$convert$Wrappers$JPropertiesWrapper$$$outer__Lscala_collection_convert_Wrappers(), underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.copy$default$1__Ljava_util_Properties = (function() {
  return this.underlying__Ljava_util_Properties()
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.productPrefix__T = (function() {
  return "JPropertiesWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.underlying__Ljava_util_Properties();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.scala$collection$convert$Wrappers$JPropertiesWrapper$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.filterNot__Lscala_Function1__O = (function(p) {
  return this.filterNot__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.mapValues__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.mapValues__Lscala_Function1__Lscala_collection_Map(f)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.filterKeys__Lscala_Function1__Lscala_collection_GenMap = (function(p) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.values__Lscala_collection_GenIterable = (function() {
  return this.values__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.keys__Lscala_collection_GenIterable = (function() {
  return this.keys__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.keySet__Lscala_collection_GenSet = (function() {
  return this.keySet__Lscala_collection_Set()
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable = (function(xs) {
  return this.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Map(xs)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable = (function(elem1, elem2, elems) {
  return this.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Map(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.result__O = (function() {
  return this.result__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.$$minus__O__O = (function(key) {
  return this.$$minus__O__Lscala_collection_mutable_Map(key)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Map(elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.$$minus__O__Lscala_collection_Map = (function(key) {
  return this.$$minus__O__Lscala_collection_mutable_Map(key)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Map = (function(xs) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Map(xs)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_Map = (function(kv1, kv2, kvs) {
  return this.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_mutable_Map(kv1, kv2, kvs)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.$$plus__Lscala_Tuple2__Lscala_collection_GenMap = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_mutable_Map(kv)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.$$plus__Lscala_Tuple2__Lscala_collection_Map = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_mutable_Map(kv)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.updated__O__O__Lscala_collection_GenMap = (function(key, value) {
  return this.updated__O__O__Lscala_collection_mutable_Map(key, value)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.updated__O__O__Lscala_collection_Map = (function(key, value) {
  return this.updated__O__O__Lscala_collection_mutable_Map(key, value)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.seq__Lscala_collection_Map = (function() {
  return this.seq__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_collection_convert_Wrappers$JPropertiesWrapper()
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.empty__Lscala_collection_mutable_Map = (function() {
  return this.empty__Lscala_collection_convert_Wrappers$JPropertiesWrapper()
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.remove__O__Lscala_Option = (function(key) {
  return this.remove__T__Lscala_Option(ScalaJS.as.java_lang_String(key))
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.update__O__O__V = (function(key, value) {
  this.update__T__T__V(ScalaJS.as.java_lang_String(key), ScalaJS.as.java_lang_String(value))
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.put__O__O__Lscala_Option = (function(key, value) {
  return this.put__T__T__Lscala_Option(ScalaJS.as.java_lang_String(key), ScalaJS.as.java_lang_String(value))
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.$$minus$eq__O__Lscala_collection_generic_Shrinkable = (function(elem) {
  return this.$$minus$eq__T__Lscala_collection_convert_Wrappers$JPropertiesWrapper(ScalaJS.as.java_lang_String(elem))
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.$$minus$eq__O__Lscala_collection_mutable_MapLike = (function(key) {
  return this.$$minus$eq__T__Lscala_collection_convert_Wrappers$JPropertiesWrapper(ScalaJS.as.java_lang_String(key))
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_convert_Wrappers$JPropertiesWrapper(ScalaJS.as.scala_Tuple2(elem))
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_convert_Wrappers$JPropertiesWrapper(ScalaJS.as.scala_Tuple2(elem))
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_MapLike = (function(kv) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_convert_Wrappers$JPropertiesWrapper(kv)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.get__O__Lscala_Option = (function(key) {
  return this.get__T__Lscala_Option(ScalaJS.as.java_lang_String(key))
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.init___Lscala_collection_convert_Wrappers__Ljava_util_Properties = (function($$outer, underlying) {
  this.underlying$5 = underlying;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.scala$collection$convert$Wrappers$JPropertiesWrapper$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$JPropertiesWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.productElement__I__ = (function(x$1) {
  return this.productElement__I__O(x$1)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.copy__Ljava_util_Properties__ = (function(underlying) {
  return this.copy__Ljava_util_Properties__Lscala_collection_convert_Wrappers$JPropertiesWrapper(underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.setProperty__T__T__ = (function(key, value) {
  return this.setProperty__T__T__O(key, value)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.getProperty__T__T__ = (function(key$2, defaultValue) {
  return this.getProperty__T__T__T(key$2, defaultValue)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.getProperty__T__ = (function(key$3) {
  return this.getProperty__T__T(key$3)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.remove__T__ = (function(k) {
  return this.remove__T__Lscala_Option(k)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.update__T__T__ = (function(k$2, v) {
  return ScalaJS.bV(this.update__T__T__V(k$2, v))
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.put__T__T__ = (function(k$3, v$2) {
  return this.put__T__T__Lscala_Option(k$3, v$2)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.$$minus$eq__T__ = (function(key$4) {
  return this.$$minus$eq__T__Lscala_collection_convert_Wrappers$JPropertiesWrapper(key$4)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.get__T__ = (function(k$4) {
  return this.get__T__Lscala_Option(k$4)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.underlying__ = (function() {
  return this.underlying__Ljava_util_Properties()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$JPropertiesWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype = ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$JPropertiesWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$JPropertiesWrapper)))
});
ScalaJS.as.scala_collection_convert_Wrappers$JPropertiesWrapper = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$JPropertiesWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$JPropertiesWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JPropertiesWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$JPropertiesWrapper)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$JPropertiesWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JPropertiesWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$JPropertiesWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$JPropertiesWrapper = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$JPropertiesWrapper: 0
}, false, "scala.collection.convert.Wrappers$JPropertiesWrapper", ScalaJS.data.scala_collection_mutable_AbstractMap, {
  scala_collection_convert_Wrappers$JPropertiesWrapper: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_collection_mutable_AbstractMap: 1,
  scala_collection_mutable_Map: 1,
  scala_collection_mutable_MapLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_generic_Shrinkable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
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
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$JPropertiesWrapper;
//@ sourceMappingURL=Wrappers$JPropertiesWrapper.js.map
