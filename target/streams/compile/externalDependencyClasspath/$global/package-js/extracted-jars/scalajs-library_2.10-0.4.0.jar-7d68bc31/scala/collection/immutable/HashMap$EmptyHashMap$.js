/** @constructor */
ScalaJS.c.scala_collection_immutable_HashMap$EmptyHashMap$ = (function() {
  ScalaJS.c.scala_collection_immutable_HashMap.call(this)
});
ScalaJS.c.scala_collection_immutable_HashMap$EmptyHashMap$.prototype = new ScalaJS.inheritable.scala_collection_immutable_HashMap();
ScalaJS.c.scala_collection_immutable_HashMap$EmptyHashMap$.prototype.constructor = ScalaJS.c.scala_collection_immutable_HashMap$EmptyHashMap$;
ScalaJS.c.scala_collection_immutable_HashMap$EmptyHashMap$.prototype.readResolve__p6__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_HashMap$EmptyHashMap()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_HashMap$EmptyHashMap$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_HashMap$EmptyHashMap$.prototype = ScalaJS.c.scala_collection_immutable_HashMap$EmptyHashMap$.prototype;
ScalaJS.is.scala_collection_immutable_HashMap$EmptyHashMap$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_HashMap$EmptyHashMap$)))
});
ScalaJS.as.scala_collection_immutable_HashMap$EmptyHashMap$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_HashMap$EmptyHashMap$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.HashMap$EmptyHashMap")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_HashMap$EmptyHashMap$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_HashMap$EmptyHashMap$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_HashMap$EmptyHashMap$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_HashMap$EmptyHashMap$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.HashMap$EmptyHashMap;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_HashMap$EmptyHashMap$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_HashMap$EmptyHashMap$: 0
}, false, "scala.collection.immutable.HashMap$EmptyHashMap$", ScalaJS.data.scala_collection_immutable_HashMap, {
  scala_collection_immutable_HashMap$EmptyHashMap$: 1,
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
ScalaJS.c.scala_collection_immutable_HashMap$EmptyHashMap$.prototype.$classData = ScalaJS.data.scala_collection_immutable_HashMap$EmptyHashMap$;
ScalaJS.moduleInstances.scala_collection_immutable_HashMap$EmptyHashMap = undefined;
ScalaJS.modules.scala_collection_immutable_HashMap$EmptyHashMap = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_HashMap$EmptyHashMap)) {
    ScalaJS.moduleInstances.scala_collection_immutable_HashMap$EmptyHashMap = new ScalaJS.c.scala_collection_immutable_HashMap$EmptyHashMap$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_HashMap$EmptyHashMap
});
//@ sourceMappingURL=HashMap$EmptyHashMap$.js.map
