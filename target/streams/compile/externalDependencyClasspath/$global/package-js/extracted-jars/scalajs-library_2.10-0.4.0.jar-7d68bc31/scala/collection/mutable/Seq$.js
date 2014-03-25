/** @constructor */
ScalaJS.c.scala_collection_mutable_Seq$ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_Seq$.prototype = new ScalaJS.inheritable.scala_collection_generic_SeqFactory();
ScalaJS.c.scala_collection_mutable_Seq$.prototype.constructor = ScalaJS.c.scala_collection_mutable_Seq$;
ScalaJS.c.scala_collection_mutable_Seq$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_mutable_Seq$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuffer().init___()
});
ScalaJS.c.scala_collection_mutable_Seq$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_Seq$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_Seq$.prototype = ScalaJS.c.scala_collection_mutable_Seq$.prototype;
ScalaJS.is.scala_collection_mutable_Seq$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_Seq$)))
});
ScalaJS.as.scala_collection_mutable_Seq$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_Seq$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.Seq")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_Seq$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_Seq$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_Seq$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_Seq$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.Seq;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_Seq$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_Seq$: 0
}, false, "scala.collection.mutable.Seq$", ScalaJS.data.scala_collection_generic_SeqFactory, {
  scala_collection_mutable_Seq$: 1,
  scala_collection_generic_SeqFactory: 1,
  scala_collection_generic_TraversableFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSeqFactory: 1,
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_Seq$.prototype.$classData = ScalaJS.data.scala_collection_mutable_Seq$;
ScalaJS.moduleInstances.scala_collection_mutable_Seq = undefined;
ScalaJS.modules.scala_collection_mutable_Seq = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_Seq)) {
    ScalaJS.moduleInstances.scala_collection_mutable_Seq = new ScalaJS.c.scala_collection_mutable_Seq$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_Seq
});
//@ sourceMappingURL=Seq$.js.map
