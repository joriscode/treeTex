/** @constructor */
ScalaJS.c.scala_collection_immutable_HashSet$EmptyHashSet$ = (function() {
  ScalaJS.c.scala_collection_immutable_HashSet.call(this)
});
ScalaJS.c.scala_collection_immutable_HashSet$EmptyHashSet$.prototype = new ScalaJS.inheritable.scala_collection_immutable_HashSet();
ScalaJS.c.scala_collection_immutable_HashSet$EmptyHashSet$.prototype.constructor = ScalaJS.c.scala_collection_immutable_HashSet$EmptyHashSet$;
ScalaJS.c.scala_collection_immutable_HashSet$EmptyHashSet$.prototype.readResolve__p5__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_HashSet$EmptyHashSet()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_HashSet$EmptyHashSet$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_HashSet$EmptyHashSet$.prototype = ScalaJS.c.scala_collection_immutable_HashSet$EmptyHashSet$.prototype;
ScalaJS.is.scala_collection_immutable_HashSet$EmptyHashSet$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_HashSet$EmptyHashSet$)))
});
ScalaJS.as.scala_collection_immutable_HashSet$EmptyHashSet$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_HashSet$EmptyHashSet$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.HashSet$EmptyHashSet")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_HashSet$EmptyHashSet$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_HashSet$EmptyHashSet$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_HashSet$EmptyHashSet$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_HashSet$EmptyHashSet$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.HashSet$EmptyHashSet;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_HashSet$EmptyHashSet$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_HashSet$EmptyHashSet$: 0
}, false, "scala.collection.immutable.HashSet$EmptyHashSet$", ScalaJS.data.scala_collection_immutable_HashSet, {
  scala_collection_immutable_HashSet$EmptyHashSet$: 1,
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
ScalaJS.c.scala_collection_immutable_HashSet$EmptyHashSet$.prototype.$classData = ScalaJS.data.scala_collection_immutable_HashSet$EmptyHashSet$;
ScalaJS.moduleInstances.scala_collection_immutable_HashSet$EmptyHashSet = undefined;
ScalaJS.modules.scala_collection_immutable_HashSet$EmptyHashSet = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_HashSet$EmptyHashSet)) {
    ScalaJS.moduleInstances.scala_collection_immutable_HashSet$EmptyHashSet = new ScalaJS.c.scala_collection_immutable_HashSet$EmptyHashSet$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_HashSet$EmptyHashSet
});
//@ sourceMappingURL=HashSet$EmptyHashSet$.js.map
