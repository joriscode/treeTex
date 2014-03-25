/** @constructor */
ScalaJS.c.scala_collection_mutable_SortedSet$ = (function() {
  ScalaJS.c.scala_collection_generic_MutableSortedSetFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_SortedSet$.prototype = new ScalaJS.inheritable.scala_collection_generic_MutableSortedSetFactory();
ScalaJS.c.scala_collection_mutable_SortedSet$.prototype.constructor = ScalaJS.c.scala_collection_mutable_SortedSet$;
ScalaJS.c.scala_collection_mutable_SortedSet$.prototype.canBuildFrom__Lscala_math_Ordering__Lscala_collection_generic_CanBuildFrom = (function(ord) {
  return new ScalaJS.c.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom().init___Lscala_collection_generic_SortedSetFactory__Lscala_math_Ordering(this, ord)
});
ScalaJS.c.scala_collection_mutable_SortedSet$.prototype.empty__Lscala_math_Ordering__Lscala_collection_mutable_SortedSet = (function(ord) {
  return ScalaJS.modules.scala_collection_mutable_TreeSet().empty__Lscala_math_Ordering__Lscala_collection_mutable_TreeSet(ord)
});
ScalaJS.c.scala_collection_mutable_SortedSet$.prototype.empty__Lscala_math_Ordering__Lscala_collection_SortedSet = (function(ord) {
  return this.empty__Lscala_math_Ordering__Lscala_collection_mutable_SortedSet(ord)
});
ScalaJS.c.scala_collection_mutable_SortedSet$.prototype.canBuildFrom__Lscala_math_Ordering__ = (function(ord) {
  return this.canBuildFrom__Lscala_math_Ordering__Lscala_collection_generic_CanBuildFrom(ord)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_SortedSet$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_SortedSet$.prototype = ScalaJS.c.scala_collection_mutable_SortedSet$.prototype;
ScalaJS.is.scala_collection_mutable_SortedSet$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_SortedSet$)))
});
ScalaJS.as.scala_collection_mutable_SortedSet$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_SortedSet$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.SortedSet")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_SortedSet$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_SortedSet$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_SortedSet$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_SortedSet$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.SortedSet;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_SortedSet$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_SortedSet$: 0
}, false, "scala.collection.mutable.SortedSet$", ScalaJS.data.scala_collection_generic_MutableSortedSetFactory, {
  scala_collection_mutable_SortedSet$: 1,
  scala_collection_generic_MutableSortedSetFactory: 1,
  scala_collection_generic_SortedSetFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_SortedSet$.prototype.$classData = ScalaJS.data.scala_collection_mutable_SortedSet$;
ScalaJS.moduleInstances.scala_collection_mutable_SortedSet = undefined;
ScalaJS.modules.scala_collection_mutable_SortedSet = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_SortedSet)) {
    ScalaJS.moduleInstances.scala_collection_mutable_SortedSet = new ScalaJS.c.scala_collection_mutable_SortedSet$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_SortedSet
});
//@ sourceMappingURL=SortedSet$.js.map
