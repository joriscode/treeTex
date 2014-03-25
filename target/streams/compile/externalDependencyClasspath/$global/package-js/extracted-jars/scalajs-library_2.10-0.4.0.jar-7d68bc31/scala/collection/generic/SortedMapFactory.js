/** @constructor */
ScalaJS.c.scala_collection_generic_SortedMapFactory = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_generic_SortedMapFactory.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_SortedMapFactory.prototype.constructor = ScalaJS.c.scala_collection_generic_SortedMapFactory;
ScalaJS.c.scala_collection_generic_SortedMapFactory.prototype.apply__Lscala_collection_Seq__Lscala_math_Ordering__Lscala_collection_SortedMap = (function(elems, ord) {
  return ScalaJS.as.scala_collection_SortedMap(ScalaJS.as.scala_collection_mutable_Builder(this.newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder(ord).$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(elems)).result__O())
});
ScalaJS.c.scala_collection_generic_SortedMapFactory.prototype.newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder = (function(ord) {
  return new ScalaJS.c.scala_collection_mutable_MapBuilder().init___Lscala_collection_GenMap(this.empty__Lscala_math_Ordering__Lscala_collection_SortedMap(ord))
});
ScalaJS.c.scala_collection_generic_SortedMapFactory.prototype.newBuilder__Lscala_math_Ordering__ = (function(ord) {
  return this.newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder(ord)
});
ScalaJS.c.scala_collection_generic_SortedMapFactory.prototype.apply__Lscala_collection_Seq__Lscala_math_Ordering__ = (function(elems, ord$2) {
  return this.apply__Lscala_collection_Seq__Lscala_math_Ordering__Lscala_collection_SortedMap(elems, ord$2)
});
ScalaJS.c.scala_collection_generic_SortedMapFactory.prototype.empty__Lscala_math_Ordering__ = (function(ord$3) {
  return this.empty__Lscala_math_Ordering__Lscala_collection_SortedMap(ord$3)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_SortedMapFactory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_SortedMapFactory.prototype = ScalaJS.c.scala_collection_generic_SortedMapFactory.prototype;
ScalaJS.is.scala_collection_generic_SortedMapFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_SortedMapFactory)))
});
ScalaJS.as.scala_collection_generic_SortedMapFactory = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_SortedMapFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.SortedMapFactory")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_SortedMapFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_SortedMapFactory)))
});
ScalaJS.asArrayOf.scala_collection_generic_SortedMapFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_SortedMapFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.SortedMapFactory;", depth)
  }
});
ScalaJS.data.scala_collection_generic_SortedMapFactory = new ScalaJS.ClassTypeData({
  scala_collection_generic_SortedMapFactory: 0
}, false, "scala.collection.generic.SortedMapFactory", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_SortedMapFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_SortedMapFactory.prototype.$classData = ScalaJS.data.scala_collection_generic_SortedMapFactory;
//@ sourceMappingURL=SortedMapFactory.js.map
