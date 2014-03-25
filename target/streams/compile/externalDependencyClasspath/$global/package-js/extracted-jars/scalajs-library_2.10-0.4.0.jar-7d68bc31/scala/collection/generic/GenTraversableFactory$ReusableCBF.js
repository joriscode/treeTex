/** @constructor */
ScalaJS.c.scala_collection_generic_GenTraversableFactory$ReusableCBF = (function() {
  ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.call(this)
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$ReusableCBF.prototype = new ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom();
ScalaJS.c.scala_collection_generic_GenTraversableFactory$ReusableCBF.prototype.constructor = ScalaJS.c.scala_collection_generic_GenTraversableFactory$ReusableCBF;
ScalaJS.c.scala_collection_generic_GenTraversableFactory$ReusableCBF.prototype.apply__Lscala_collection_mutable_Builder = (function() {
  return this.scala$collection$generic$GenTraversableFactory$ReusableCBF$$$outer__Lscala_collection_generic_GenTraversableFactory().newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$ReusableCBF.prototype.scala$collection$generic$GenTraversableFactory$ReusableCBF$$$outer__Lscala_collection_generic_GenTraversableFactory = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$ReusableCBF.prototype.scala$collection$generic$GenTraversableFactory$ReusableCBF$$$outer__ = (function() {
  return this.scala$collection$generic$GenTraversableFactory$ReusableCBF$$$outer__Lscala_collection_generic_GenTraversableFactory()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory$ReusableCBF = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory$ReusableCBF.prototype = ScalaJS.c.scala_collection_generic_GenTraversableFactory$ReusableCBF.prototype;
ScalaJS.is.scala_collection_generic_GenTraversableFactory$ReusableCBF = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_GenTraversableFactory$ReusableCBF)))
});
ScalaJS.as.scala_collection_generic_GenTraversableFactory$ReusableCBF = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_GenTraversableFactory$ReusableCBF(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.GenTraversableFactory$ReusableCBF")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_GenTraversableFactory$ReusableCBF = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_GenTraversableFactory$ReusableCBF)))
});
ScalaJS.asArrayOf.scala_collection_generic_GenTraversableFactory$ReusableCBF = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_GenTraversableFactory$ReusableCBF(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.GenTraversableFactory$ReusableCBF;", depth)
  }
});
ScalaJS.data.scala_collection_generic_GenTraversableFactory$ReusableCBF = new ScalaJS.ClassTypeData({
  scala_collection_generic_GenTraversableFactory$ReusableCBF: 0
}, false, "scala.collection.generic.GenTraversableFactory$ReusableCBF", ScalaJS.data.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom, {
  scala_collection_generic_GenTraversableFactory$ReusableCBF: 1,
  scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom: 1,
  scala_collection_generic_CanBuildFrom: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$ReusableCBF.prototype.$classData = ScalaJS.data.scala_collection_generic_GenTraversableFactory$ReusableCBF;
//@ sourceMappingURL=GenTraversableFactory$ReusableCBF.js.map
