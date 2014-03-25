/** @constructor */
ScalaJS.c.scala_collection_generic_GenMapFactory = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_generic_GenMapFactory.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_GenMapFactory.prototype.constructor = ScalaJS.c.scala_collection_generic_GenMapFactory;
ScalaJS.c.scala_collection_generic_GenMapFactory.prototype.apply__Lscala_collection_Seq__Lscala_collection_GenMap = (function(elems) {
  return ScalaJS.as.scala_collection_GenMap(ScalaJS.as.scala_collection_mutable_Builder(this.newBuilder__Lscala_collection_mutable_Builder().$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(elems)).result__O())
});
ScalaJS.c.scala_collection_generic_GenMapFactory.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_MapBuilder().init___Lscala_collection_GenMap(this.empty__Lscala_collection_GenMap())
});
ScalaJS.c.scala_collection_generic_GenMapFactory.prototype.newBuilder__ = (function() {
  return this.newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_generic_GenMapFactory.prototype.apply__Lscala_collection_Seq__ = (function(elems) {
  return this.apply__Lscala_collection_Seq__Lscala_collection_GenMap(elems)
});
ScalaJS.c.scala_collection_generic_GenMapFactory.prototype.empty__ = (function() {
  return this.empty__Lscala_collection_GenMap()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_GenMapFactory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_GenMapFactory.prototype = ScalaJS.c.scala_collection_generic_GenMapFactory.prototype;
ScalaJS.is.scala_collection_generic_GenMapFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_GenMapFactory)))
});
ScalaJS.as.scala_collection_generic_GenMapFactory = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_GenMapFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.GenMapFactory")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_GenMapFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_GenMapFactory)))
});
ScalaJS.asArrayOf.scala_collection_generic_GenMapFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_GenMapFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.GenMapFactory;", depth)
  }
});
ScalaJS.data.scala_collection_generic_GenMapFactory = new ScalaJS.ClassTypeData({
  scala_collection_generic_GenMapFactory: 0
}, false, "scala.collection.generic.GenMapFactory", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_GenMapFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_GenMapFactory.prototype.$classData = ScalaJS.data.scala_collection_generic_GenMapFactory;
//@ sourceMappingURL=GenMapFactory.js.map
