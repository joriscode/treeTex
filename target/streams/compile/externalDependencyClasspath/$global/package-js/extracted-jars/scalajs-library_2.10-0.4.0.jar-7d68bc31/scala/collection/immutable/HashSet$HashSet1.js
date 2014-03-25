/** @constructor */
ScalaJS.c.scala_collection_immutable_HashSet$HashSet1 = (function() {
  ScalaJS.c.scala_collection_immutable_HashSet.call(this);
  this.key$5 = null;
  this.hash$5 = 0
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSet1.prototype = new ScalaJS.inheritable.scala_collection_immutable_HashSet();
ScalaJS.c.scala_collection_immutable_HashSet$HashSet1.prototype.constructor = ScalaJS.c.scala_collection_immutable_HashSet$HashSet1;
ScalaJS.c.scala_collection_immutable_HashSet$HashSet1.prototype.key__O = (function() {
  return this.key$5
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSet1.prototype.hash__I = (function() {
  return this.hash$5
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSet1.prototype.size__I = (function() {
  return 1
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSet1.prototype.get0__O__I__I__Z = (function(key, hash, level) {
  return ((hash === this.hash__I()) && ScalaJS.anyEqEq(key, this.key__O()))
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSet1.prototype.updated0__O__I__I__Lscala_collection_immutable_HashSet = (function(key, hash, level) {
  if (((hash === this.hash__I()) && ScalaJS.anyEqEq(key, this.key__O()))) {
    return this
  } else {
    if ((hash !== this.hash__I())) {
      return ScalaJS.modules.scala_collection_immutable_HashSet().scala$collection$immutable$HashSet$$makeHashTrieSet__I__Lscala_collection_immutable_HashSet__I__Lscala_collection_immutable_HashSet__I__Lscala_collection_immutable_HashSet$HashTrieSet(this.hash__I(), this, hash, new ScalaJS.c.scala_collection_immutable_HashSet$HashSet1().init___O__I(key, hash), level)
    } else {
      return new ScalaJS.c.scala_collection_immutable_HashSet$HashSetCollision1().init___I__Lscala_collection_immutable_ListSet(hash, ScalaJS.modules.scala_collection_immutable_ListSet().empty__Lscala_collection_immutable_ListSet().$$plus__O__Lscala_collection_immutable_ListSet(this.key__O()).$$plus__O__Lscala_collection_immutable_ListSet(key))
    }
  }
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSet1.prototype.removed0__O__I__I__Lscala_collection_immutable_HashSet = (function(key, hash, level) {
  if (((hash === this.hash__I()) && ScalaJS.anyEqEq(key, this.key__O()))) {
    return ScalaJS.modules.scala_collection_immutable_HashSet().empty__Lscala_collection_immutable_HashSet()
  } else {
    return this
  }
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSet1.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_collection_Iterator().apply__Lscala_collection_Seq__Lscala_collection_Iterator(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [this.key__O()])))
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSet1.prototype.foreach__Lscala_Function1__V = (function(f) {
  f.apply__O__O(this.key__O())
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSet1.prototype.init___O__I = (function(key, hash) {
  this.key$5 = key;
  this.hash$5 = hash;
  ScalaJS.c.scala_collection_immutable_HashSet.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSet1.prototype.hash__ = (function() {
  return ScalaJS.bI(this.hash__I())
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSet1.prototype.key__ = (function() {
  return this.key__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_HashSet$HashSet1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_HashSet$HashSet1.prototype = ScalaJS.c.scala_collection_immutable_HashSet$HashSet1.prototype;
ScalaJS.is.scala_collection_immutable_HashSet$HashSet1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_HashSet$HashSet1)))
});
ScalaJS.as.scala_collection_immutable_HashSet$HashSet1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_HashSet$HashSet1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.HashSet$HashSet1")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_HashSet$HashSet1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_HashSet$HashSet1)))
});
ScalaJS.asArrayOf.scala_collection_immutable_HashSet$HashSet1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_HashSet$HashSet1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.HashSet$HashSet1;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_HashSet$HashSet1 = new ScalaJS.ClassTypeData({
  scala_collection_immutable_HashSet$HashSet1: 0
}, false, "scala.collection.immutable.HashSet$HashSet1", ScalaJS.data.scala_collection_immutable_HashSet, {
  scala_collection_immutable_HashSet$HashSet1: 1,
  scala_collection_immutable_HashSet: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_CustomParallelizable: 1,
  scala_collection_immutable_Set: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
  scala_collection_AbstractSet: 1,
  scala_collection_Set: 1,
  scala_collection_SetLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_collection_GenSet: 1,
  scala_collection_generic_GenericSetTemplate: 1,
  scala_collection_GenSetLike: 1,
  scala_Function1: 1,
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
ScalaJS.c.scala_collection_immutable_HashSet$HashSet1.prototype.$classData = ScalaJS.data.scala_collection_immutable_HashSet$HashSet1;
//@ sourceMappingURL=HashSet$HashSet1.js.map
