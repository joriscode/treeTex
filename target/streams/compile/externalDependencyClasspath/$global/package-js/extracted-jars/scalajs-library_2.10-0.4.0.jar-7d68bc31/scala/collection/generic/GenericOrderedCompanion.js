/** @constructor */
ScalaJS.c.scala_collection_generic_GenericOrderedCompanion = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_generic_GenericOrderedCompanion.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_GenericOrderedCompanion.prototype.constructor = ScalaJS.c.scala_collection_generic_GenericOrderedCompanion;
ScalaJS.c.scala_collection_generic_GenericOrderedCompanion.prototype.empty__Lscala_math_Ordering__Lscala_collection_Traversable = (function(evidence$1) {
  return ScalaJS.as.scala_collection_Traversable(this.newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder(evidence$1).result__O())
});
ScalaJS.c.scala_collection_generic_GenericOrderedCompanion.prototype.apply__Lscala_collection_Seq__Lscala_math_Ordering__Lscala_collection_Traversable = (function(elems, ord) {
  var b = this.newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder(ord);
  b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(elems);
  return ScalaJS.as.scala_collection_Traversable(b.result__O())
});
ScalaJS.c.scala_collection_generic_GenericOrderedCompanion.prototype.apply__Lscala_collection_Seq__Lscala_math_Ordering__ = (function(elems, ord) {
  return this.apply__Lscala_collection_Seq__Lscala_math_Ordering__Lscala_collection_Traversable(elems, ord)
});
ScalaJS.c.scala_collection_generic_GenericOrderedCompanion.prototype.empty__Lscala_math_Ordering__ = (function(evidence$1) {
  return this.empty__Lscala_math_Ordering__Lscala_collection_Traversable(evidence$1)
});
ScalaJS.c.scala_collection_generic_GenericOrderedCompanion.prototype.newBuilder__Lscala_math_Ordering__ = (function(ord$2) {
  return this.newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder(ord$2)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_GenericOrderedCompanion = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_GenericOrderedCompanion.prototype = ScalaJS.c.scala_collection_generic_GenericOrderedCompanion.prototype;
ScalaJS.is.scala_collection_generic_GenericOrderedCompanion = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_GenericOrderedCompanion)))
});
ScalaJS.as.scala_collection_generic_GenericOrderedCompanion = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_GenericOrderedCompanion(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.GenericOrderedCompanion")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_GenericOrderedCompanion = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_GenericOrderedCompanion)))
});
ScalaJS.asArrayOf.scala_collection_generic_GenericOrderedCompanion = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_GenericOrderedCompanion(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.GenericOrderedCompanion;", depth)
  }
});
ScalaJS.data.scala_collection_generic_GenericOrderedCompanion = new ScalaJS.ClassTypeData({
  scala_collection_generic_GenericOrderedCompanion: 0
}, false, "scala.collection.generic.GenericOrderedCompanion", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_GenericOrderedCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_GenericOrderedCompanion.prototype.$classData = ScalaJS.data.scala_collection_generic_GenericOrderedCompanion;
//@ sourceMappingURL=GenericOrderedCompanion.js.map
