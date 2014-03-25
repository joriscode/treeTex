/** @constructor */
ScalaJS.c.scala_collection_immutable_ListSet$EmptyListSet$ = (function() {
  ScalaJS.c.scala_collection_immutable_ListSet.call(this)
});
ScalaJS.c.scala_collection_immutable_ListSet$EmptyListSet$.prototype = new ScalaJS.inheritable.scala_collection_immutable_ListSet();
ScalaJS.c.scala_collection_immutable_ListSet$EmptyListSet$.prototype.constructor = ScalaJS.c.scala_collection_immutable_ListSet$EmptyListSet$;
ScalaJS.c.scala_collection_immutable_ListSet$EmptyListSet$.prototype.readResolve__p5__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_ListSet$EmptyListSet()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_ListSet$EmptyListSet$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_ListSet$EmptyListSet$.prototype = ScalaJS.c.scala_collection_immutable_ListSet$EmptyListSet$.prototype;
ScalaJS.is.scala_collection_immutable_ListSet$EmptyListSet$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_ListSet$EmptyListSet$)))
});
ScalaJS.as.scala_collection_immutable_ListSet$EmptyListSet$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_ListSet$EmptyListSet$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.ListSet$EmptyListSet")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_ListSet$EmptyListSet$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_ListSet$EmptyListSet$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_ListSet$EmptyListSet$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_ListSet$EmptyListSet$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.ListSet$EmptyListSet;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_ListSet$EmptyListSet$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_ListSet$EmptyListSet$: 0
}, false, "scala.collection.immutable.ListSet$EmptyListSet$", ScalaJS.data.scala_collection_immutable_ListSet, {
  scala_collection_immutable_ListSet$EmptyListSet$: 1,
  scala_collection_immutable_ListSet: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
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
ScalaJS.c.scala_collection_immutable_ListSet$EmptyListSet$.prototype.$classData = ScalaJS.data.scala_collection_immutable_ListSet$EmptyListSet$;
ScalaJS.moduleInstances.scala_collection_immutable_ListSet$EmptyListSet = undefined;
ScalaJS.modules.scala_collection_immutable_ListSet$EmptyListSet = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_ListSet$EmptyListSet)) {
    ScalaJS.moduleInstances.scala_collection_immutable_ListSet$EmptyListSet = new ScalaJS.c.scala_collection_immutable_ListSet$EmptyListSet$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_ListSet$EmptyListSet
});
//@ sourceMappingURL=ListSet$EmptyListSet$.js.map
