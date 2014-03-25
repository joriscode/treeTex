/** @constructor */
ScalaJS.c.scala_collection_immutable_TreeSet$ = (function() {
  ScalaJS.c.scala_collection_generic_ImmutableSortedSetFactory.call(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet$.prototype = new ScalaJS.inheritable.scala_collection_generic_ImmutableSortedSetFactory();
ScalaJS.c.scala_collection_immutable_TreeSet$.prototype.constructor = ScalaJS.c.scala_collection_immutable_TreeSet$;
ScalaJS.c.scala_collection_immutable_TreeSet$.prototype.implicitBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder = (function(ordering) {
  return this.newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder(ordering)
});
ScalaJS.c.scala_collection_immutable_TreeSet$.prototype.newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder = (function(ordering) {
  return new ScalaJS.c.scala_collection_mutable_SetBuilder().init___Lscala_collection_Set(this.empty__Lscala_math_Ordering__Lscala_collection_immutable_TreeSet(ordering))
});
ScalaJS.c.scala_collection_immutable_TreeSet$.prototype.empty__Lscala_math_Ordering__Lscala_collection_immutable_TreeSet = (function(ordering) {
  return new ScalaJS.c.scala_collection_immutable_TreeSet().init___Lscala_math_Ordering(ordering)
});
ScalaJS.c.scala_collection_immutable_TreeSet$.prototype.readResolve__p3__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_TreeSet()
});
ScalaJS.c.scala_collection_immutable_TreeSet$.prototype.empty__Lscala_math_Ordering__Lscala_collection_SortedSet = (function(ord) {
  return this.empty__Lscala_math_Ordering__Lscala_collection_immutable_TreeSet(ord)
});
ScalaJS.c.scala_collection_immutable_TreeSet$.prototype.implicitBuilder__Lscala_math_Ordering__ = (function(ordering) {
  return this.implicitBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder(ordering)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_TreeSet$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_TreeSet$.prototype = ScalaJS.c.scala_collection_immutable_TreeSet$.prototype;
ScalaJS.is.scala_collection_immutable_TreeSet$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_TreeSet$)))
});
ScalaJS.as.scala_collection_immutable_TreeSet$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_TreeSet$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.TreeSet")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_TreeSet$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_TreeSet$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_TreeSet$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_TreeSet$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.TreeSet;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_TreeSet$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_TreeSet$: 0
}, false, "scala.collection.immutable.TreeSet$", ScalaJS.data.scala_collection_generic_ImmutableSortedSetFactory, {
  scala_collection_immutable_TreeSet$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_generic_ImmutableSortedSetFactory: 1,
  scala_collection_generic_SortedSetFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_TreeSet$.prototype.$classData = ScalaJS.data.scala_collection_immutable_TreeSet$;
ScalaJS.moduleInstances.scala_collection_immutable_TreeSet = undefined;
ScalaJS.modules.scala_collection_immutable_TreeSet = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_TreeSet)) {
    ScalaJS.moduleInstances.scala_collection_immutable_TreeSet = new ScalaJS.c.scala_collection_immutable_TreeSet$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_TreeSet
});
//@ sourceMappingURL=TreeSet$.js.map
