/** @constructor */
ScalaJS.c.scala_collection_generic_GenSetFactory = (function() {
  ScalaJS.c.scala_collection_generic_GenericCompanion.call(this)
});
ScalaJS.c.scala_collection_generic_GenSetFactory.prototype = new ScalaJS.inheritable.scala_collection_generic_GenericCompanion();
ScalaJS.c.scala_collection_generic_GenSetFactory.prototype.constructor = ScalaJS.c.scala_collection_generic_GenSetFactory;
ScalaJS.c.scala_collection_generic_GenSetFactory.prototype.setCanBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return new ScalaJS.c.scala_collection_generic_GenSetFactory$$anon$1().init___Lscala_collection_generic_GenSetFactory(this)
});
ScalaJS.c.scala_collection_generic_GenSetFactory.prototype.setCanBuildFrom__ = (function() {
  return this.setCanBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_GenSetFactory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_GenSetFactory.prototype = ScalaJS.c.scala_collection_generic_GenSetFactory.prototype;
ScalaJS.is.scala_collection_generic_GenSetFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_GenSetFactory)))
});
ScalaJS.as.scala_collection_generic_GenSetFactory = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_GenSetFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.GenSetFactory")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_GenSetFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_GenSetFactory)))
});
ScalaJS.asArrayOf.scala_collection_generic_GenSetFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_GenSetFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.GenSetFactory;", depth)
  }
});
ScalaJS.data.scala_collection_generic_GenSetFactory = new ScalaJS.ClassTypeData({
  scala_collection_generic_GenSetFactory: 0
}, false, "scala.collection.generic.GenSetFactory", ScalaJS.data.scala_collection_generic_GenericCompanion, {
  scala_collection_generic_GenSetFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_GenSetFactory.prototype.$classData = ScalaJS.data.scala_collection_generic_GenSetFactory;
//@ sourceMappingURL=GenSetFactory.js.map
