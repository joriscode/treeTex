/** @constructor */
ScalaJS.c.scala_collection_generic_ImmutableSortedMapFactory = (function() {
  ScalaJS.c.scala_collection_generic_SortedMapFactory.call(this)
});
ScalaJS.c.scala_collection_generic_ImmutableSortedMapFactory.prototype = new ScalaJS.inheritable.scala_collection_generic_SortedMapFactory();
ScalaJS.c.scala_collection_generic_ImmutableSortedMapFactory.prototype.constructor = ScalaJS.c.scala_collection_generic_ImmutableSortedMapFactory;
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_ImmutableSortedMapFactory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_ImmutableSortedMapFactory.prototype = ScalaJS.c.scala_collection_generic_ImmutableSortedMapFactory.prototype;
ScalaJS.is.scala_collection_generic_ImmutableSortedMapFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_ImmutableSortedMapFactory)))
});
ScalaJS.as.scala_collection_generic_ImmutableSortedMapFactory = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_ImmutableSortedMapFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.ImmutableSortedMapFactory")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_ImmutableSortedMapFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_ImmutableSortedMapFactory)))
});
ScalaJS.asArrayOf.scala_collection_generic_ImmutableSortedMapFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_ImmutableSortedMapFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.ImmutableSortedMapFactory;", depth)
  }
});
ScalaJS.data.scala_collection_generic_ImmutableSortedMapFactory = new ScalaJS.ClassTypeData({
  scala_collection_generic_ImmutableSortedMapFactory: 0
}, false, "scala.collection.generic.ImmutableSortedMapFactory", ScalaJS.data.scala_collection_generic_SortedMapFactory, {
  scala_collection_generic_ImmutableSortedMapFactory: 1,
  scala_collection_generic_SortedMapFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_ImmutableSortedMapFactory.prototype.$classData = ScalaJS.data.scala_collection_generic_ImmutableSortedMapFactory;
//@ sourceMappingURL=ImmutableSortedMapFactory.js.map
