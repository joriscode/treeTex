/** @constructor */
ScalaJS.c.scala_collection_mutable_ListBuffer$ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_ListBuffer$.prototype = new ScalaJS.inheritable.scala_collection_generic_SeqFactory();
ScalaJS.c.scala_collection_mutable_ListBuffer$.prototype.constructor = ScalaJS.c.scala_collection_mutable_ListBuffer$;
ScalaJS.c.scala_collection_mutable_ListBuffer$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_mutable_ListBuffer$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_GrowingBuilder().init___Lscala_collection_generic_Growable(new ScalaJS.c.scala_collection_mutable_ListBuffer().init___())
});
ScalaJS.c.scala_collection_mutable_ListBuffer$.prototype.readResolve__p5__O = (function() {
  return ScalaJS.modules.scala_collection_mutable_ListBuffer()
});
ScalaJS.c.scala_collection_mutable_ListBuffer$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ListBuffer$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ListBuffer$.prototype = ScalaJS.c.scala_collection_mutable_ListBuffer$.prototype;
ScalaJS.is.scala_collection_mutable_ListBuffer$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ListBuffer$)))
});
ScalaJS.as.scala_collection_mutable_ListBuffer$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ListBuffer$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ListBuffer")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ListBuffer$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ListBuffer$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ListBuffer$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ListBuffer$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ListBuffer;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ListBuffer$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ListBuffer$: 0
}, false, "scala.collection.mutable.ListBuffer$", ScalaJS.data.scala_collection_generic_SeqFactory, {
  scala_collection_mutable_ListBuffer$: 1,
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
ScalaJS.c.scala_collection_mutable_ListBuffer$.prototype.$classData = ScalaJS.data.scala_collection_mutable_ListBuffer$;
ScalaJS.moduleInstances.scala_collection_mutable_ListBuffer = undefined;
ScalaJS.modules.scala_collection_mutable_ListBuffer = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_ListBuffer)) {
    ScalaJS.moduleInstances.scala_collection_mutable_ListBuffer = new ScalaJS.c.scala_collection_mutable_ListBuffer$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_ListBuffer
});
//@ sourceMappingURL=ListBuffer$.js.map
