/** @constructor */
ScalaJS.c.scala_collection_generic_GenericClassTagCompanion = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_generic_GenericClassTagCompanion.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_GenericClassTagCompanion.prototype.constructor = ScalaJS.c.scala_collection_generic_GenericClassTagCompanion;
ScalaJS.c.scala_collection_generic_GenericClassTagCompanion.prototype.empty__Lscala_reflect_ClassTag__Lscala_collection_Traversable = (function(evidence$1) {
  return ScalaJS.as.scala_collection_Traversable(this.newBuilder__Lscala_reflect_ClassTag__Lscala_collection_mutable_Builder(evidence$1).result__O())
});
ScalaJS.c.scala_collection_generic_GenericClassTagCompanion.prototype.apply__Lscala_collection_Seq__Lscala_reflect_ClassTag__Lscala_collection_Traversable = (function(elems, ord) {
  var b = this.newBuilder__Lscala_reflect_ClassTag__Lscala_collection_mutable_Builder(ord);
  b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(elems);
  return ScalaJS.as.scala_collection_Traversable(b.result__O())
});
ScalaJS.c.scala_collection_generic_GenericClassTagCompanion.prototype.apply__Lscala_collection_Seq__Lscala_reflect_ClassTag__ = (function(elems, ord) {
  return this.apply__Lscala_collection_Seq__Lscala_reflect_ClassTag__Lscala_collection_Traversable(elems, ord)
});
ScalaJS.c.scala_collection_generic_GenericClassTagCompanion.prototype.empty__Lscala_reflect_ClassTag__ = (function(evidence$1) {
  return this.empty__Lscala_reflect_ClassTag__Lscala_collection_Traversable(evidence$1)
});
ScalaJS.c.scala_collection_generic_GenericClassTagCompanion.prototype.newBuilder__Lscala_reflect_ClassTag__ = (function(ord$2) {
  return this.newBuilder__Lscala_reflect_ClassTag__Lscala_collection_mutable_Builder(ord$2)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_GenericClassTagCompanion = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_GenericClassTagCompanion.prototype = ScalaJS.c.scala_collection_generic_GenericClassTagCompanion.prototype;
ScalaJS.is.scala_collection_generic_GenericClassTagCompanion = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_GenericClassTagCompanion)))
});
ScalaJS.as.scala_collection_generic_GenericClassTagCompanion = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_GenericClassTagCompanion(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.GenericClassTagCompanion")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_GenericClassTagCompanion = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_GenericClassTagCompanion)))
});
ScalaJS.asArrayOf.scala_collection_generic_GenericClassTagCompanion = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_GenericClassTagCompanion(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.GenericClassTagCompanion;", depth)
  }
});
ScalaJS.data.scala_collection_generic_GenericClassTagCompanion = new ScalaJS.ClassTypeData({
  scala_collection_generic_GenericClassTagCompanion: 0
}, false, "scala.collection.generic.GenericClassTagCompanion", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_GenericClassTagCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_GenericClassTagCompanion.prototype.$classData = ScalaJS.data.scala_collection_generic_GenericClassTagCompanion;
//@ sourceMappingURL=GenericClassTagCompanion.js.map
