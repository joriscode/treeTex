/** @constructor */
ScalaJS.c.scala_collection_immutable_ListMap$EmptyListMap$ = (function() {
  ScalaJS.c.scala_collection_immutable_ListMap.call(this)
});
ScalaJS.c.scala_collection_immutable_ListMap$EmptyListMap$.prototype = new ScalaJS.inheritable.scala_collection_immutable_ListMap();
ScalaJS.c.scala_collection_immutable_ListMap$EmptyListMap$.prototype.constructor = ScalaJS.c.scala_collection_immutable_ListMap$EmptyListMap$;
ScalaJS.c.scala_collection_immutable_ListMap$EmptyListMap$.prototype.readResolve__p6__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_ListMap$EmptyListMap()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_ListMap$EmptyListMap$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_ListMap$EmptyListMap$.prototype = ScalaJS.c.scala_collection_immutable_ListMap$EmptyListMap$.prototype;
ScalaJS.is.scala_collection_immutable_ListMap$EmptyListMap$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_ListMap$EmptyListMap$)))
});
ScalaJS.as.scala_collection_immutable_ListMap$EmptyListMap$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_ListMap$EmptyListMap$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.ListMap$EmptyListMap")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_ListMap$EmptyListMap$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_ListMap$EmptyListMap$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_ListMap$EmptyListMap$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_ListMap$EmptyListMap$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.ListMap$EmptyListMap;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_ListMap$EmptyListMap$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_ListMap$EmptyListMap$: 0
}, false, "scala.collection.immutable.ListMap$EmptyListMap$", ScalaJS.data.scala_collection_immutable_ListMap, {
  scala_collection_immutable_ListMap$EmptyListMap$: 1,
  scala_collection_immutable_ListMap: 1,
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
ScalaJS.c.scala_collection_immutable_ListMap$EmptyListMap$.prototype.$classData = ScalaJS.data.scala_collection_immutable_ListMap$EmptyListMap$;
ScalaJS.moduleInstances.scala_collection_immutable_ListMap$EmptyListMap = undefined;
ScalaJS.modules.scala_collection_immutable_ListMap$EmptyListMap = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_ListMap$EmptyListMap)) {
    ScalaJS.moduleInstances.scala_collection_immutable_ListMap$EmptyListMap = new ScalaJS.c.scala_collection_immutable_ListMap$EmptyListMap$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_ListMap$EmptyListMap
});
//@ sourceMappingURL=ListMap$EmptyListMap$.js.map
