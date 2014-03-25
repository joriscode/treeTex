/** @constructor */
ScalaJS.c.scala_collection_immutable_SortedMap$ = (function() {
  ScalaJS.c.scala_collection_generic_ImmutableSortedMapFactory.call(this)
});
ScalaJS.c.scala_collection_immutable_SortedMap$.prototype = new ScalaJS.inheritable.scala_collection_generic_ImmutableSortedMapFactory();
ScalaJS.c.scala_collection_immutable_SortedMap$.prototype.constructor = ScalaJS.c.scala_collection_immutable_SortedMap$;
ScalaJS.c.scala_collection_immutable_SortedMap$.prototype.canBuildFrom__Lscala_math_Ordering__Lscala_collection_generic_CanBuildFrom = (function(ord) {
  return new ScalaJS.c.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom().init___Lscala_collection_generic_SortedMapFactory__Lscala_math_Ordering(this, ord)
});
ScalaJS.c.scala_collection_immutable_SortedMap$.prototype.empty__Lscala_math_Ordering__Lscala_collection_immutable_SortedMap = (function(ord) {
  return ScalaJS.modules.scala_collection_immutable_TreeMap().empty__Lscala_math_Ordering__Lscala_collection_immutable_TreeMap(ord)
});
ScalaJS.c.scala_collection_immutable_SortedMap$.prototype.empty__Lscala_math_Ordering__Lscala_collection_SortedMap = (function(ord) {
  return this.empty__Lscala_math_Ordering__Lscala_collection_immutable_SortedMap(ord)
});
ScalaJS.c.scala_collection_immutable_SortedMap$.prototype.canBuildFrom__Lscala_math_Ordering__ = (function(ord) {
  return this.canBuildFrom__Lscala_math_Ordering__Lscala_collection_generic_CanBuildFrom(ord)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_SortedMap$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_SortedMap$.prototype = ScalaJS.c.scala_collection_immutable_SortedMap$.prototype;
ScalaJS.is.scala_collection_immutable_SortedMap$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_SortedMap$)))
});
ScalaJS.as.scala_collection_immutable_SortedMap$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_SortedMap$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.SortedMap")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_SortedMap$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_SortedMap$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_SortedMap$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_SortedMap$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.SortedMap;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_SortedMap$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_SortedMap$: 0
}, false, "scala.collection.immutable.SortedMap$", ScalaJS.data.scala_collection_generic_ImmutableSortedMapFactory, {
  scala_collection_immutable_SortedMap$: 1,
  scala_collection_generic_ImmutableSortedMapFactory: 1,
  scala_collection_generic_SortedMapFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_SortedMap$.prototype.$classData = ScalaJS.data.scala_collection_immutable_SortedMap$;
ScalaJS.moduleInstances.scala_collection_immutable_SortedMap = undefined;
ScalaJS.modules.scala_collection_immutable_SortedMap = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_SortedMap)) {
    ScalaJS.moduleInstances.scala_collection_immutable_SortedMap = new ScalaJS.c.scala_collection_immutable_SortedMap$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_SortedMap
});
//@ sourceMappingURL=SortedMap$.js.map
