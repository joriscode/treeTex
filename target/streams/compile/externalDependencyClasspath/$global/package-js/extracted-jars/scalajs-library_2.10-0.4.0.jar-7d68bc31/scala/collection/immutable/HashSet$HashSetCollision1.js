/** @constructor */
ScalaJS.c.scala_collection_immutable_HashSet$HashSetCollision1 = (function() {
  ScalaJS.c.scala_collection_immutable_HashSet.call(this);
  this.hash$5 = 0;
  this.ks$5 = null
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSetCollision1.prototype = new ScalaJS.inheritable.scala_collection_immutable_HashSet();
ScalaJS.c.scala_collection_immutable_HashSet$HashSetCollision1.prototype.constructor = ScalaJS.c.scala_collection_immutable_HashSet$HashSetCollision1;
ScalaJS.c.scala_collection_immutable_HashSet$HashSetCollision1.prototype.hash__I = (function() {
  return this.hash$5
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSetCollision1.prototype.ks__Lscala_collection_immutable_ListSet = (function() {
  return this.ks$5
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSetCollision1.prototype.size__I = (function() {
  return this.ks__Lscala_collection_immutable_ListSet().size__I()
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSetCollision1.prototype.get0__O__I__I__Z = (function(key, hash, level) {
  if ((hash === this.hash__I())) {
    return this.ks__Lscala_collection_immutable_ListSet().contains__O__Z(key)
  } else {
    return false
  }
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSetCollision1.prototype.updated0__O__I__I__Lscala_collection_immutable_HashSet = (function(key, hash, level) {
  if ((hash === this.hash__I())) {
    return new ScalaJS.c.scala_collection_immutable_HashSet$HashSetCollision1().init___I__Lscala_collection_immutable_ListSet(hash, this.ks__Lscala_collection_immutable_ListSet().$$plus__O__Lscala_collection_immutable_ListSet(key))
  } else {
    return ScalaJS.modules.scala_collection_immutable_HashSet().scala$collection$immutable$HashSet$$makeHashTrieSet__I__Lscala_collection_immutable_HashSet__I__Lscala_collection_immutable_HashSet__I__Lscala_collection_immutable_HashSet$HashTrieSet(this.hash__I(), this, hash, new ScalaJS.c.scala_collection_immutable_HashSet$HashSet1().init___O__I(key, hash), level)
  }
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSetCollision1.prototype.removed0__O__I__I__Lscala_collection_immutable_HashSet = (function(key, hash, level) {
  if ((hash === this.hash__I())) {
    var ks1 = this.ks__Lscala_collection_immutable_ListSet().$$minus__O__Lscala_collection_immutable_ListSet(key);
    if (ks1.isEmpty__Z()) {
      return ScalaJS.modules.scala_collection_immutable_HashSet().empty__Lscala_collection_immutable_HashSet()
    } else {
      if (ks1.tail__Lscala_collection_immutable_ListSet().isEmpty__Z()) {
        return new ScalaJS.c.scala_collection_immutable_HashSet$HashSet1().init___O__I(ks1.head__O(), hash)
      } else {
        return new ScalaJS.c.scala_collection_immutable_HashSet$HashSetCollision1().init___I__Lscala_collection_immutable_ListSet(hash, ks1)
      }
    }
  } else {
    return this
  }
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSetCollision1.prototype.iterator__Lscala_collection_Iterator = (function() {
  return this.ks__Lscala_collection_immutable_ListSet().iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSetCollision1.prototype.foreach__Lscala_Function1__V = (function(f) {
  this.ks__Lscala_collection_immutable_ListSet().foreach__Lscala_Function1__V(f)
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSetCollision1.prototype.writeObject__p5__Ljava_io_ObjectOutputStream__V = (function(out) {
  ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("cannot serialize an immutable.HashSet where all items have the same 32-bit hash code")
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSetCollision1.prototype.readObject__p5__Ljava_io_ObjectInputStream__V = (function(in$2) {
  ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("cannot deserialize an immutable.HashSet where all items have the same 32-bit hash code")
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSetCollision1.prototype.init___I__Lscala_collection_immutable_ListSet = (function(hash, ks) {
  this.hash$5 = hash;
  this.ks$5 = ks;
  ScalaJS.c.scala_collection_immutable_HashSet.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSetCollision1.prototype.ks__ = (function() {
  return this.ks__Lscala_collection_immutable_ListSet()
});
ScalaJS.c.scala_collection_immutable_HashSet$HashSetCollision1.prototype.hash__ = (function() {
  return ScalaJS.bI(this.hash__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_HashSet$HashSetCollision1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_HashSet$HashSetCollision1.prototype = ScalaJS.c.scala_collection_immutable_HashSet$HashSetCollision1.prototype;
ScalaJS.is.scala_collection_immutable_HashSet$HashSetCollision1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_HashSet$HashSetCollision1)))
});
ScalaJS.as.scala_collection_immutable_HashSet$HashSetCollision1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_HashSet$HashSetCollision1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.HashSet$HashSetCollision1")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_HashSet$HashSetCollision1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_HashSet$HashSetCollision1)))
});
ScalaJS.asArrayOf.scala_collection_immutable_HashSet$HashSetCollision1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_HashSet$HashSetCollision1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.HashSet$HashSetCollision1;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_HashSet$HashSetCollision1 = new ScalaJS.ClassTypeData({
  scala_collection_immutable_HashSet$HashSetCollision1: 0
}, false, "scala.collection.immutable.HashSet$HashSetCollision1", ScalaJS.data.scala_collection_immutable_HashSet, {
  scala_collection_immutable_HashSet$HashSetCollision1: 1,
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
ScalaJS.c.scala_collection_immutable_HashSet$HashSetCollision1.prototype.$classData = ScalaJS.data.scala_collection_immutable_HashSet$HashSetCollision1;
//@ sourceMappingURL=HashSet$HashSetCollision1.js.map
