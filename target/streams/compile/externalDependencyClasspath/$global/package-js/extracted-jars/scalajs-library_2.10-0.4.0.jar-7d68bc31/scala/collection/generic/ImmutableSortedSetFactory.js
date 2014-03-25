/** @constructor */
ScalaJS.c.scala_collection_generic_ImmutableSortedSetFactory = (function() {
  ScalaJS.c.scala_collection_generic_SortedSetFactory.call(this)
});
ScalaJS.c.scala_collection_generic_ImmutableSortedSetFactory.prototype = new ScalaJS.inheritable.scala_collection_generic_SortedSetFactory();
ScalaJS.c.scala_collection_generic_ImmutableSortedSetFactory.prototype.constructor = ScalaJS.c.scala_collection_generic_ImmutableSortedSetFactory;
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_ImmutableSortedSetFactory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_ImmutableSortedSetFactory.prototype = ScalaJS.c.scala_collection_generic_ImmutableSortedSetFactory.prototype;
ScalaJS.is.scala_collection_generic_ImmutableSortedSetFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_ImmutableSortedSetFactory)))
});
ScalaJS.as.scala_collection_generic_ImmutableSortedSetFactory = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_ImmutableSortedSetFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.ImmutableSortedSetFactory")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_ImmutableSortedSetFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_ImmutableSortedSetFactory)))
});
ScalaJS.asArrayOf.scala_collection_generic_ImmutableSortedSetFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_ImmutableSortedSetFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.ImmutableSortedSetFactory;", depth)
  }
});
ScalaJS.data.scala_collection_generic_ImmutableSortedSetFactory = new ScalaJS.ClassTypeData({
  scala_collection_generic_ImmutableSortedSetFactory: 0
}, false, "scala.collection.generic.ImmutableSortedSetFactory", ScalaJS.data.scala_collection_generic_SortedSetFactory, {
  scala_collection_generic_ImmutableSortedSetFactory: 1,
  scala_collection_generic_SortedSetFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_ImmutableSortedSetFactory.prototype.$classData = ScalaJS.data.scala_collection_generic_ImmutableSortedSetFactory;
//@ sourceMappingURL=ImmutableSortedSetFactory.js.map
