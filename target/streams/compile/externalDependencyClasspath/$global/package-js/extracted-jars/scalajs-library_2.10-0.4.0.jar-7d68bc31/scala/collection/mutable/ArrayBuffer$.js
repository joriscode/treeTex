/** @constructor */
ScalaJS.c.scala_collection_mutable_ArrayBuffer$ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer$.prototype = new ScalaJS.inheritable.scala_collection_generic_SeqFactory();
ScalaJS.c.scala_collection_mutable_ArrayBuffer$.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArrayBuffer$;
ScalaJS.c.scala_collection_mutable_ArrayBuffer$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuffer().init___()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer$.prototype.readResolve__p5__O = (function() {
  return ScalaJS.modules.scala_collection_mutable_ArrayBuffer()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArrayBuffer$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArrayBuffer$.prototype = ScalaJS.c.scala_collection_mutable_ArrayBuffer$.prototype;
ScalaJS.is.scala_collection_mutable_ArrayBuffer$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayBuffer$)))
});
ScalaJS.as.scala_collection_mutable_ArrayBuffer$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayBuffer$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayBuffer")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayBuffer$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayBuffer$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayBuffer$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayBuffer$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayBuffer;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayBuffer$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayBuffer$: 0
}, false, "scala.collection.mutable.ArrayBuffer$", ScalaJS.data.scala_collection_generic_SeqFactory, {
  scala_collection_mutable_ArrayBuffer$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_generic_SeqFactory: 1,
  scala_collection_generic_TraversableFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSeqFactory: 1,
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer$.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArrayBuffer$;
ScalaJS.moduleInstances.scala_collection_mutable_ArrayBuffer = undefined;
ScalaJS.modules.scala_collection_mutable_ArrayBuffer = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_ArrayBuffer)) {
    ScalaJS.moduleInstances.scala_collection_mutable_ArrayBuffer = new ScalaJS.c.scala_collection_mutable_ArrayBuffer$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_ArrayBuffer
});
//@ sourceMappingURL=ArrayBuffer$.js.map
