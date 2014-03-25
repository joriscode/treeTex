/** @constructor */
ScalaJS.c.scala_collection_mutable_TreeSet$ = (function() {
  ScalaJS.c.scala_collection_generic_MutableSortedSetFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_TreeSet$.prototype = new ScalaJS.inheritable.scala_collection_generic_MutableSortedSetFactory();
ScalaJS.c.scala_collection_mutable_TreeSet$.prototype.constructor = ScalaJS.c.scala_collection_mutable_TreeSet$;
ScalaJS.c.scala_collection_mutable_TreeSet$.prototype.empty__Lscala_math_Ordering__Lscala_collection_mutable_TreeSet = (function(ordering) {
  return new ScalaJS.c.scala_collection_mutable_TreeSet().init___Lscala_math_Ordering(ordering)
});
ScalaJS.c.scala_collection_mutable_TreeSet$.prototype.readResolve__p3__O = (function() {
  return ScalaJS.modules.scala_collection_mutable_TreeSet()
});
ScalaJS.c.scala_collection_mutable_TreeSet$.prototype.empty__Lscala_math_Ordering__Lscala_collection_SortedSet = (function(ord) {
  return this.empty__Lscala_math_Ordering__Lscala_collection_mutable_TreeSet(ord)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_TreeSet$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_TreeSet$.prototype = ScalaJS.c.scala_collection_mutable_TreeSet$.prototype;
ScalaJS.is.scala_collection_mutable_TreeSet$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_TreeSet$)))
});
ScalaJS.as.scala_collection_mutable_TreeSet$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_TreeSet$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.TreeSet")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_TreeSet$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_TreeSet$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_TreeSet$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_TreeSet$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.TreeSet;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_TreeSet$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_TreeSet$: 0
}, false, "scala.collection.mutable.TreeSet$", ScalaJS.data.scala_collection_generic_MutableSortedSetFactory, {
  scala_collection_mutable_TreeSet$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_generic_MutableSortedSetFactory: 1,
  scala_collection_generic_SortedSetFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_TreeSet$.prototype.$classData = ScalaJS.data.scala_collection_mutable_TreeSet$;
ScalaJS.moduleInstances.scala_collection_mutable_TreeSet = undefined;
ScalaJS.modules.scala_collection_mutable_TreeSet = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_TreeSet)) {
    ScalaJS.moduleInstances.scala_collection_mutable_TreeSet = new ScalaJS.c.scala_collection_mutable_TreeSet$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_TreeSet
});
//@ sourceMappingURL=TreeSet$.js.map
