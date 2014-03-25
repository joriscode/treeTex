/** @constructor */
ScalaJS.c.scala_collection_immutable_HashSet$ = (function() {
  ScalaJS.c.scala_collection_generic_ImmutableSetFactory.call(this)
});
ScalaJS.c.scala_collection_immutable_HashSet$.prototype = new ScalaJS.inheritable.scala_collection_generic_ImmutableSetFactory();
ScalaJS.c.scala_collection_immutable_HashSet$.prototype.constructor = ScalaJS.c.scala_collection_immutable_HashSet$;
ScalaJS.c.scala_collection_immutable_HashSet$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.setCanBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
ScalaJS.c.scala_collection_immutable_HashSet$.prototype.empty__Lscala_collection_immutable_HashSet = (function() {
  return ScalaJS.modules.scala_collection_immutable_HashSet$EmptyHashSet()
});
ScalaJS.c.scala_collection_immutable_HashSet$.prototype.scala$collection$immutable$HashSet$$makeHashTrieSet__I__Lscala_collection_immutable_HashSet__I__Lscala_collection_immutable_HashSet__I__Lscala_collection_immutable_HashSet$HashTrieSet = (function(hash0, elem0, hash1, elem1, level) {
  var index0 = ((hash0 >>> level) & 31);
  var index1 = ((hash1 >>> level) & 31);
  if ((index0 !== index1)) {
    var bitmap = ((1 << index0) | (1 << index1));
    var elems = ScalaJS.newArrayObject(ScalaJS.data.scala_collection_immutable_HashSet.getArrayOf(), [2]);
    if ((index0 < index1)) {
      elems.underlying[0] = elem0;
      elems.underlying[1] = elem1
    } else {
      elems.underlying[0] = elem1;
      elems.underlying[1] = elem0
    };
    return new ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet().init___I__ALscala_collection_immutable_HashSet__I(bitmap, elems, (elem0.size__I() + elem1.size__I()))
  } else {
    var elems$2 = ScalaJS.newArrayObject(ScalaJS.data.scala_collection_immutable_HashSet.getArrayOf(), [1]);
    var bitmap$2 = (1 << index0);
    var child = this.scala$collection$immutable$HashSet$$makeHashTrieSet__I__Lscala_collection_immutable_HashSet__I__Lscala_collection_immutable_HashSet__I__Lscala_collection_immutable_HashSet$HashTrieSet(hash0, elem0, hash1, elem1, (level + 5));
    elems$2.underlying[0] = child;
    return new ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet().init___I__ALscala_collection_immutable_HashSet__I(bitmap$2, elems$2, child.size__I())
  }
});
ScalaJS.c.scala_collection_immutable_HashSet$.prototype.readResolve__p5__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_HashSet()
});
ScalaJS.c.scala_collection_immutable_HashSet$.prototype.empty__Lscala_collection_GenTraversable = (function() {
  return this.empty__Lscala_collection_immutable_HashSet()
});
ScalaJS.c.scala_collection_immutable_HashSet$.prototype.scala$collection$immutable$HashSet$$makeHashTrieSet__I__Lscala_collection_immutable_HashSet__I__Lscala_collection_immutable_HashSet__I__ = (function(hash0, elem0, hash1, elem1, level) {
  return this.scala$collection$immutable$HashSet$$makeHashTrieSet__I__Lscala_collection_immutable_HashSet__I__Lscala_collection_immutable_HashSet__I__Lscala_collection_immutable_HashSet$HashTrieSet(hash0, elem0, hash1, elem1, level)
});
ScalaJS.c.scala_collection_immutable_HashSet$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_HashSet$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_HashSet$.prototype = ScalaJS.c.scala_collection_immutable_HashSet$.prototype;
ScalaJS.is.scala_collection_immutable_HashSet$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_HashSet$)))
});
ScalaJS.as.scala_collection_immutable_HashSet$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_HashSet$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.HashSet")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_HashSet$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_HashSet$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_HashSet$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_HashSet$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.HashSet;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_HashSet$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_HashSet$: 0
}, false, "scala.collection.immutable.HashSet$", ScalaJS.data.scala_collection_generic_ImmutableSetFactory, {
  scala_collection_immutable_HashSet$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_generic_ImmutableSetFactory: 1,
  scala_collection_generic_SetFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSetFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_HashSet$.prototype.$classData = ScalaJS.data.scala_collection_immutable_HashSet$;
ScalaJS.moduleInstances.scala_collection_immutable_HashSet = undefined;
ScalaJS.modules.scala_collection_immutable_HashSet = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_HashSet)) {
    ScalaJS.moduleInstances.scala_collection_immutable_HashSet = new ScalaJS.c.scala_collection_immutable_HashSet$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_HashSet
});
//@ sourceMappingURL=HashSet$.js.map
