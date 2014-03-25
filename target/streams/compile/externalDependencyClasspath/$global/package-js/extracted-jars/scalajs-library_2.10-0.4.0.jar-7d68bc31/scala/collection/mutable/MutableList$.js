/** @constructor */
ScalaJS.c.scala_collection_mutable_MutableList$ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_MutableList$.prototype = new ScalaJS.inheritable.scala_collection_generic_SeqFactory();
ScalaJS.c.scala_collection_mutable_MutableList$.prototype.constructor = ScalaJS.c.scala_collection_mutable_MutableList$;
ScalaJS.c.scala_collection_mutable_MutableList$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_mutable_MutableList$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_MutableList().init___()
});
ScalaJS.c.scala_collection_mutable_MutableList$.prototype.readResolve__p5__O = (function() {
  return ScalaJS.modules.scala_collection_mutable_MutableList()
});
ScalaJS.c.scala_collection_mutable_MutableList$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_MutableList$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_MutableList$.prototype = ScalaJS.c.scala_collection_mutable_MutableList$.prototype;
ScalaJS.is.scala_collection_mutable_MutableList$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_MutableList$)))
});
ScalaJS.as.scala_collection_mutable_MutableList$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_MutableList$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.MutableList")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_MutableList$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_MutableList$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_MutableList$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_MutableList$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.MutableList;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_MutableList$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_MutableList$: 0
}, false, "scala.collection.mutable.MutableList$", ScalaJS.data.scala_collection_generic_SeqFactory, {
  scala_collection_mutable_MutableList$: 1,
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
ScalaJS.c.scala_collection_mutable_MutableList$.prototype.$classData = ScalaJS.data.scala_collection_mutable_MutableList$;
ScalaJS.moduleInstances.scala_collection_mutable_MutableList = undefined;
ScalaJS.modules.scala_collection_mutable_MutableList = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_MutableList)) {
    ScalaJS.moduleInstances.scala_collection_mutable_MutableList = new ScalaJS.c.scala_collection_mutable_MutableList$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_MutableList
});
//@ sourceMappingURL=MutableList$.js.map
