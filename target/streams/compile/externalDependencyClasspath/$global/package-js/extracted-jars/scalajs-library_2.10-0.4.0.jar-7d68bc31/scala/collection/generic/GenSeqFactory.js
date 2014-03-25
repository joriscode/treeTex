/** @constructor */
ScalaJS.c.scala_collection_generic_GenSeqFactory = (function() {
  ScalaJS.c.scala_collection_generic_GenTraversableFactory.call(this)
});
ScalaJS.c.scala_collection_generic_GenSeqFactory.prototype = new ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory();
ScalaJS.c.scala_collection_generic_GenSeqFactory.prototype.constructor = ScalaJS.c.scala_collection_generic_GenSeqFactory;
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_GenSeqFactory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_GenSeqFactory.prototype = ScalaJS.c.scala_collection_generic_GenSeqFactory.prototype;
ScalaJS.is.scala_collection_generic_GenSeqFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_GenSeqFactory)))
});
ScalaJS.as.scala_collection_generic_GenSeqFactory = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_GenSeqFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.GenSeqFactory")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_GenSeqFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_GenSeqFactory)))
});
ScalaJS.asArrayOf.scala_collection_generic_GenSeqFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_GenSeqFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.GenSeqFactory;", depth)
  }
});
ScalaJS.data.scala_collection_generic_GenSeqFactory = new ScalaJS.ClassTypeData({
  scala_collection_generic_GenSeqFactory: 0
}, false, "scala.collection.generic.GenSeqFactory", ScalaJS.data.scala_collection_generic_GenTraversableFactory, {
  scala_collection_generic_GenSeqFactory: 1,
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_GenSeqFactory.prototype.$classData = ScalaJS.data.scala_collection_generic_GenSeqFactory;
//@ sourceMappingURL=GenSeqFactory.js.map
