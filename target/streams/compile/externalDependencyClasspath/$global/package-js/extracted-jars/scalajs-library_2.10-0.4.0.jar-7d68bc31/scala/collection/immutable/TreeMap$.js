/** @constructor */
ScalaJS.c.scala_collection_immutable_TreeMap$ = (function() {
  ScalaJS.c.scala_collection_generic_ImmutableSortedMapFactory.call(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap$.prototype = new ScalaJS.inheritable.scala_collection_generic_ImmutableSortedMapFactory();
ScalaJS.c.scala_collection_immutable_TreeMap$.prototype.constructor = ScalaJS.c.scala_collection_immutable_TreeMap$;
ScalaJS.c.scala_collection_immutable_TreeMap$.prototype.empty__Lscala_math_Ordering__Lscala_collection_immutable_TreeMap = (function(ord) {
  return new ScalaJS.c.scala_collection_immutable_TreeMap().init___Lscala_math_Ordering(ord)
});
ScalaJS.c.scala_collection_immutable_TreeMap$.prototype.canBuildFrom__Lscala_math_Ordering__Lscala_collection_generic_CanBuildFrom = (function(ord) {
  return new ScalaJS.c.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom().init___Lscala_collection_generic_SortedMapFactory__Lscala_math_Ordering(this, ord)
});
ScalaJS.c.scala_collection_immutable_TreeMap$.prototype.readResolve__p3__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_TreeMap()
});
ScalaJS.c.scala_collection_immutable_TreeMap$.prototype.empty__Lscala_math_Ordering__Lscala_collection_SortedMap = (function(ord) {
  return this.empty__Lscala_math_Ordering__Lscala_collection_immutable_TreeMap(ord)
});
ScalaJS.c.scala_collection_immutable_TreeMap$.prototype.canBuildFrom__Lscala_math_Ordering__ = (function(ord) {
  return this.canBuildFrom__Lscala_math_Ordering__Lscala_collection_generic_CanBuildFrom(ord)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_TreeMap$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_TreeMap$.prototype = ScalaJS.c.scala_collection_immutable_TreeMap$.prototype;
ScalaJS.is.scala_collection_immutable_TreeMap$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_TreeMap$)))
});
ScalaJS.as.scala_collection_immutable_TreeMap$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_TreeMap$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.TreeMap")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_TreeMap$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_TreeMap$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_TreeMap$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_TreeMap$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.TreeMap;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_TreeMap$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_TreeMap$: 0
}, false, "scala.collection.immutable.TreeMap$", ScalaJS.data.scala_collection_generic_ImmutableSortedMapFactory, {
  scala_collection_immutable_TreeMap$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_generic_ImmutableSortedMapFactory: 1,
  scala_collection_generic_SortedMapFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_TreeMap$.prototype.$classData = ScalaJS.data.scala_collection_immutable_TreeMap$;
ScalaJS.moduleInstances.scala_collection_immutable_TreeMap = undefined;
ScalaJS.modules.scala_collection_immutable_TreeMap = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_TreeMap)) {
    ScalaJS.moduleInstances.scala_collection_immutable_TreeMap = new ScalaJS.c.scala_collection_immutable_TreeMap$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_TreeMap
});
//@ sourceMappingURL=TreeMap$.js.map
