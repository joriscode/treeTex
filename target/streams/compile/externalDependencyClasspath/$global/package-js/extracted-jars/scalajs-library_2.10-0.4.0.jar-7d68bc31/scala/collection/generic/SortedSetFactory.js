/** @constructor */
ScalaJS.c.scala_collection_generic_SortedSetFactory = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_generic_SortedSetFactory.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_SortedSetFactory.prototype.constructor = ScalaJS.c.scala_collection_generic_SortedSetFactory;
ScalaJS.c.scala_collection_generic_SortedSetFactory.prototype.apply__Lscala_collection_Seq__Lscala_math_Ordering__Lscala_collection_SortedSet = (function(elems, ord) {
  return ScalaJS.as.scala_collection_SortedSet(ScalaJS.as.scala_collection_mutable_Builder(this.newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder(ord).$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(elems)).result__O())
});
ScalaJS.c.scala_collection_generic_SortedSetFactory.prototype.newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder = (function(ord) {
  return new ScalaJS.c.scala_collection_mutable_SetBuilder().init___Lscala_collection_Set(this.empty__Lscala_math_Ordering__Lscala_collection_SortedSet(ord))
});
ScalaJS.c.scala_collection_generic_SortedSetFactory.prototype.newCanBuildFrom__Lscala_math_Ordering__Lscala_collection_generic_CanBuildFrom = (function(ord) {
  return new ScalaJS.c.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom().init___Lscala_collection_generic_SortedSetFactory__Lscala_math_Ordering(this, ord)
});
ScalaJS.c.scala_collection_generic_SortedSetFactory.prototype.newCanBuildFrom__Lscala_math_Ordering__ = (function(ord) {
  return this.newCanBuildFrom__Lscala_math_Ordering__Lscala_collection_generic_CanBuildFrom(ord)
});
ScalaJS.c.scala_collection_generic_SortedSetFactory.prototype.newBuilder__Lscala_math_Ordering__ = (function(ord$2) {
  return this.newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder(ord$2)
});
ScalaJS.c.scala_collection_generic_SortedSetFactory.prototype.apply__Lscala_collection_Seq__Lscala_math_Ordering__ = (function(elems, ord$3) {
  return this.apply__Lscala_collection_Seq__Lscala_math_Ordering__Lscala_collection_SortedSet(elems, ord$3)
});
ScalaJS.c.scala_collection_generic_SortedSetFactory.prototype.empty__Lscala_math_Ordering__ = (function(ord$4) {
  return this.empty__Lscala_math_Ordering__Lscala_collection_SortedSet(ord$4)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_SortedSetFactory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_SortedSetFactory.prototype = ScalaJS.c.scala_collection_generic_SortedSetFactory.prototype;
ScalaJS.is.scala_collection_generic_SortedSetFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_SortedSetFactory)))
});
ScalaJS.as.scala_collection_generic_SortedSetFactory = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_SortedSetFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.SortedSetFactory")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_SortedSetFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_SortedSetFactory)))
});
ScalaJS.asArrayOf.scala_collection_generic_SortedSetFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_SortedSetFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.SortedSetFactory;", depth)
  }
});
ScalaJS.data.scala_collection_generic_SortedSetFactory = new ScalaJS.ClassTypeData({
  scala_collection_generic_SortedSetFactory: 0
}, false, "scala.collection.generic.SortedSetFactory", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_SortedSetFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_SortedSetFactory.prototype.$classData = ScalaJS.data.scala_collection_generic_SortedSetFactory;
//@ sourceMappingURL=SortedSetFactory.js.map
