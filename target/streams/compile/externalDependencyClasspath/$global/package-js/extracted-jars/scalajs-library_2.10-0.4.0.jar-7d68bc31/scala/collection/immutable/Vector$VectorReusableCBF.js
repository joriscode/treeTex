/** @constructor */
ScalaJS.c.scala_collection_immutable_Vector$VectorReusableCBF = (function() {
  ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.call(this)
});
ScalaJS.c.scala_collection_immutable_Vector$VectorReusableCBF.prototype = new ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom();
ScalaJS.c.scala_collection_immutable_Vector$VectorReusableCBF.prototype.constructor = ScalaJS.c.scala_collection_immutable_Vector$VectorReusableCBF;
ScalaJS.c.scala_collection_immutable_Vector$VectorReusableCBF.prototype.apply__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.modules.scala_collection_immutable_Vector().newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_immutable_Vector$VectorReusableCBF.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.prototype.init___Lscala_collection_generic_GenTraversableFactory.call(this, ScalaJS.modules.scala_collection_immutable_Vector());
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Vector$VectorReusableCBF = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Vector$VectorReusableCBF.prototype = ScalaJS.c.scala_collection_immutable_Vector$VectorReusableCBF.prototype;
ScalaJS.is.scala_collection_immutable_Vector$VectorReusableCBF = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Vector$VectorReusableCBF)))
});
ScalaJS.as.scala_collection_immutable_Vector$VectorReusableCBF = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Vector$VectorReusableCBF(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Vector$VectorReusableCBF")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Vector$VectorReusableCBF = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Vector$VectorReusableCBF)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Vector$VectorReusableCBF = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Vector$VectorReusableCBF(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Vector$VectorReusableCBF;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Vector$VectorReusableCBF = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Vector$VectorReusableCBF: 0
}, false, "scala.collection.immutable.Vector$VectorReusableCBF", ScalaJS.data.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom, {
  scala_collection_immutable_Vector$VectorReusableCBF: 1,
  scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom: 1,
  scala_collection_generic_CanBuildFrom: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_Vector$VectorReusableCBF.prototype.$classData = ScalaJS.data.scala_collection_immutable_Vector$VectorReusableCBF;
//@ sourceMappingURL=Vector$VectorReusableCBF.js.map
