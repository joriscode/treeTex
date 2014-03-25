/** @constructor */
ScalaJS.c.scala_collection_generic_GenericCompanion = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_generic_GenericCompanion.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_GenericCompanion.prototype.constructor = ScalaJS.c.scala_collection_generic_GenericCompanion;
ScalaJS.c.scala_collection_generic_GenericCompanion.prototype.empty__Lscala_collection_GenTraversable = (function() {
  return ScalaJS.as.scala_collection_GenTraversable(this.newBuilder__Lscala_collection_mutable_Builder().result__O())
});
ScalaJS.c.scala_collection_generic_GenericCompanion.prototype.apply__Lscala_collection_Seq__Lscala_collection_GenTraversable = (function(elems) {
  if (elems.isEmpty__Z()) {
    return this.empty__Lscala_collection_GenTraversable()
  } else {
    var b = this.newBuilder__Lscala_collection_mutable_Builder();
    b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(elems);
    return ScalaJS.as.scala_collection_GenTraversable(b.result__O())
  }
});
ScalaJS.c.scala_collection_generic_GenericCompanion.prototype.apply__Lscala_collection_Seq__ = (function(elems) {
  return this.apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(elems)
});
ScalaJS.c.scala_collection_generic_GenericCompanion.prototype.empty__ = (function() {
  return this.empty__Lscala_collection_GenTraversable()
});
ScalaJS.c.scala_collection_generic_GenericCompanion.prototype.newBuilder__ = (function() {
  return this.newBuilder__Lscala_collection_mutable_Builder()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_GenericCompanion = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_GenericCompanion.prototype = ScalaJS.c.scala_collection_generic_GenericCompanion.prototype;
ScalaJS.is.scala_collection_generic_GenericCompanion = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_GenericCompanion)))
});
ScalaJS.as.scala_collection_generic_GenericCompanion = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_GenericCompanion(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.GenericCompanion")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_GenericCompanion = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_GenericCompanion)))
});
ScalaJS.asArrayOf.scala_collection_generic_GenericCompanion = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_GenericCompanion(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.GenericCompanion;", depth)
  }
});
ScalaJS.data.scala_collection_generic_GenericCompanion = new ScalaJS.ClassTypeData({
  scala_collection_generic_GenericCompanion: 0
}, false, "scala.collection.generic.GenericCompanion", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_GenericCompanion.prototype.$classData = ScalaJS.data.scala_collection_generic_GenericCompanion;
//@ sourceMappingURL=GenericCompanion.js.map
