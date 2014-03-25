/** @constructor */
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1 = (function() {
  ScalaJS.c.scala_collection_immutable_HashMap.call(this);
  this.key$6 = null;
  this.hash$6 = 0;
  this.value$6 = null;
  this.kv$6 = null
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype = new ScalaJS.inheritable.scala_collection_immutable_HashMap();
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.constructor = ScalaJS.c.scala_collection_immutable_HashMap$HashMap1;
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.key__O = (function() {
  return this.key$6
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.hash__I = (function() {
  return this.hash$6
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.value__O = (function() {
  return this.value$6
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.kv__Lscala_Tuple2 = (function() {
  return this.kv$6
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.kv$und$eq__Lscala_Tuple2__V = (function(x$1) {
  this.kv$6 = x$1
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.size__I = (function() {
  return 1
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.getKey__O = (function() {
  return this.key__O()
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.getHash__I = (function() {
  return this.hash__I()
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.computeHashFor__O__I = (function(k) {
  return this.computeHash__O__I(k)
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.get0__O__I__I__Lscala_Option = (function(key, hash, level) {
  if (((hash === this.hash__I()) && ScalaJS.anyEqEq(key, this.key__O()))) {
    return new ScalaJS.c.scala_Some().init___O(this.value__O())
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.updated0__O__I__I__O__Lscala_Tuple2__Lscala_collection_immutable_HashMap$Merger__Lscala_collection_immutable_HashMap = (function(key, hash, level, value, kv, merger) {
  if (((hash === this.hash__I()) && ScalaJS.anyEqEq(key, this.key__O()))) {
    if ((merger === null)) {
      if ((this.value__O() === value)) {
        return this
      } else {
        return new ScalaJS.c.scala_collection_immutable_HashMap$HashMap1().init___O__I__O__Lscala_Tuple2(key, hash, value, kv)
      }
    } else {
      var nkv = merger.apply__Lscala_Tuple2__Lscala_Tuple2__Lscala_Tuple2(this.kv__Lscala_Tuple2(), kv);
      return new ScalaJS.c.scala_collection_immutable_HashMap$HashMap1().init___O__I__O__Lscala_Tuple2(nkv.$$und1__O(), hash, nkv.$$und2__O(), nkv)
    }
  } else {
    if ((hash !== this.hash__I())) {
      var that = new ScalaJS.c.scala_collection_immutable_HashMap$HashMap1().init___O__I__O__Lscala_Tuple2(key, hash, value, kv);
      return ScalaJS.modules.scala_collection_immutable_HashMap().scala$collection$immutable$HashMap$$makeHashTrieMap__I__Lscala_collection_immutable_HashMap__I__Lscala_collection_immutable_HashMap__I__I__Lscala_collection_immutable_HashMap$HashTrieMap(this.hash__I(), this, hash, that, level, 2)
    } else {
      return new ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1().init___I__Lscala_collection_immutable_ListMap(hash, ScalaJS.modules.scala_collection_immutable_ListMap().empty__Lscala_collection_immutable_ListMap().updated__O__O__Lscala_collection_immutable_ListMap(this.key__O(), this.value__O()).updated__O__O__Lscala_collection_immutable_ListMap(key, value))
    }
  }
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.removed0__O__I__I__Lscala_collection_immutable_HashMap = (function(key, hash, level) {
  if (((hash === this.hash__I()) && ScalaJS.anyEqEq(key, this.key__O()))) {
    return ScalaJS.modules.scala_collection_immutable_HashMap().empty__Lscala_collection_immutable_HashMap()
  } else {
    return this
  }
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_collection_Iterator().apply__Lscala_collection_Seq__Lscala_collection_Iterator(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), [this.ensurePair__Lscala_Tuple2()]), 1)))
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.foreach__Lscala_Function1__V = (function(f) {
  f.apply__O__O(this.ensurePair__Lscala_Tuple2())
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.ensurePair__Lscala_Tuple2 = (function() {
  if ((this.kv__Lscala_Tuple2() !== null)) {
    return this.kv__Lscala_Tuple2()
  } else {
    this.kv$und$eq__Lscala_Tuple2__V(new ScalaJS.c.scala_Tuple2().init___O__O(this.key__O(), this.value__O()));
    return this.kv__Lscala_Tuple2()
  }
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.merge0__Lscala_collection_immutable_HashMap__I__Lscala_collection_immutable_HashMap$Merger__Lscala_collection_immutable_HashMap = (function(that, level, merger) {
  return that.updated0__O__I__I__O__Lscala_Tuple2__Lscala_collection_immutable_HashMap$Merger__Lscala_collection_immutable_HashMap(this.key__O(), this.hash__I(), level, this.value__O(), this.kv__Lscala_Tuple2(), merger.invert__Lscala_collection_immutable_HashMap$Merger())
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.init___O__I__O__Lscala_Tuple2 = (function(key, hash, value, kv) {
  this.key$6 = key;
  this.hash$6 = hash;
  this.value$6 = value;
  this.kv$6 = kv;
  ScalaJS.c.scala_collection_immutable_HashMap.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.ensurePair__ = (function() {
  return this.ensurePair__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.computeHashFor__O__ = (function(k) {
  return ScalaJS.bI(this.computeHashFor__O__I(k))
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.getHash__ = (function() {
  return ScalaJS.bI(this.getHash__I())
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.getKey__ = (function() {
  return this.getKey__O()
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.kv$und$eq__Lscala_Tuple2__ = (function(x$1) {
  return ScalaJS.bV(this.kv$und$eq__Lscala_Tuple2__V(x$1))
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.kv__ = (function() {
  return this.kv__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.value__ = (function() {
  return this.value__O()
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.hash__ = (function() {
  return ScalaJS.bI(this.hash__I())
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.key__ = (function() {
  return this.key__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_HashMap$HashMap1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_HashMap$HashMap1.prototype = ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype;
ScalaJS.is.scala_collection_immutable_HashMap$HashMap1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_HashMap$HashMap1)))
});
ScalaJS.as.scala_collection_immutable_HashMap$HashMap1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_HashMap$HashMap1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.HashMap$HashMap1")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_HashMap$HashMap1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_HashMap$HashMap1)))
});
ScalaJS.asArrayOf.scala_collection_immutable_HashMap$HashMap1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_HashMap$HashMap1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.HashMap$HashMap1;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_HashMap$HashMap1 = new ScalaJS.ClassTypeData({
  scala_collection_immutable_HashMap$HashMap1: 0
}, false, "scala.collection.immutable.HashMap$HashMap1", ScalaJS.data.scala_collection_immutable_HashMap, {
  scala_collection_immutable_HashMap$HashMap1: 1,
  scala_collection_immutable_HashMap: 1,
  scala_collection_CustomParallelizable: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_immutable_AbstractMap: 1,
  scala_collection_immutable_Map: 1,
  scala_collection_immutable_MapLike: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
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
ScalaJS.c.scala_collection_immutable_HashMap$HashMap1.prototype.$classData = ScalaJS.data.scala_collection_immutable_HashMap$HashMap1;
//@ sourceMappingURL=HashMap$HashMap1.js.map
