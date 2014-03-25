/** @constructor */
ScalaJS.c.scala_collection_generic_MutableSortedSetFactory = (function() {
  ScalaJS.c.scala_collection_generic_SortedSetFactory.call(this)
});
ScalaJS.c.scala_collection_generic_MutableSortedSetFactory.prototype = new ScalaJS.inheritable.scala_collection_generic_SortedSetFactory();
ScalaJS.c.scala_collection_generic_MutableSortedSetFactory.prototype.constructor = ScalaJS.c.scala_collection_generic_MutableSortedSetFactory;
ScalaJS.c.scala_collection_generic_MutableSortedSetFactory.prototype.newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder = (function(ord) {
  return new ScalaJS.c.scala_collection_mutable_GrowingBuilder().init___Lscala_collection_generic_Growable(ScalaJS.as.scala_collection_generic_Growable(this.empty__Lscala_math_Ordering__Lscala_collection_SortedSet(ord)))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_MutableSortedSetFactory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_MutableSortedSetFactory.prototype = ScalaJS.c.scala_collection_generic_MutableSortedSetFactory.prototype;
ScalaJS.is.scala_collection_generic_MutableSortedSetFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_MutableSortedSetFactory)))
});
ScalaJS.as.scala_collection_generic_MutableSortedSetFactory = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_MutableSortedSetFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.MutableSortedSetFactory")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_MutableSortedSetFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_MutableSortedSetFactory)))
});
ScalaJS.asArrayOf.scala_collection_generic_MutableSortedSetFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_MutableSortedSetFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.MutableSortedSetFactory;", depth)
  }
});
ScalaJS.data.scala_collection_generic_MutableSortedSetFactory = new ScalaJS.ClassTypeData({
  scala_collection_generic_MutableSortedSetFactory: 0
}, false, "scala.collection.generic.MutableSortedSetFactory", ScalaJS.data.scala_collection_generic_SortedSetFactory, {
  scala_collection_generic_MutableSortedSetFactory: 1,
  scala_collection_generic_SortedSetFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_MutableSortedSetFactory.prototype.$classData = ScalaJS.data.scala_collection_generic_MutableSortedSetFactory;
//@ sourceMappingURL=MutableSortedSetFactory.js.map
