/** @constructor */
ScalaJS.c.scala_collection_SeqExtractors = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_SeqExtractors.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_SeqExtractors.prototype.constructor = ScalaJS.c.scala_collection_SeqExtractors;
/** @constructor */
ScalaJS.inheritable.scala_collection_SeqExtractors = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_SeqExtractors.prototype = ScalaJS.c.scala_collection_SeqExtractors.prototype;
ScalaJS.is.scala_collection_SeqExtractors = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_SeqExtractors)))
});
ScalaJS.as.scala_collection_SeqExtractors = (function(obj) {
  if ((ScalaJS.is.scala_collection_SeqExtractors(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.SeqExtractors")
  }
});
ScalaJS.isArrayOf.scala_collection_SeqExtractors = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_SeqExtractors)))
});
ScalaJS.asArrayOf.scala_collection_SeqExtractors = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_SeqExtractors(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.SeqExtractors;", depth)
  }
});
ScalaJS.data.scala_collection_SeqExtractors = new ScalaJS.ClassTypeData({
  scala_collection_SeqExtractors: 0
}, false, "scala.collection.SeqExtractors", ScalaJS.data.java_lang_Object, {
  scala_collection_SeqExtractors: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_SeqExtractors.prototype.$classData = ScalaJS.data.scala_collection_SeqExtractors;
//@ sourceMappingURL=SeqExtractors.js.map
