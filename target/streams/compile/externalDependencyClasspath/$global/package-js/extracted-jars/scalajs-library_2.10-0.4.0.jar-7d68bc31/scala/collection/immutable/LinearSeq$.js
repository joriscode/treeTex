/** @constructor */
ScalaJS.c.scala_collection_immutable_LinearSeq$ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.call(this)
});
ScalaJS.c.scala_collection_immutable_LinearSeq$.prototype = new ScalaJS.inheritable.scala_collection_generic_SeqFactory();
ScalaJS.c.scala_collection_immutable_LinearSeq$.prototype.constructor = ScalaJS.c.scala_collection_immutable_LinearSeq$;
ScalaJS.c.scala_collection_immutable_LinearSeq$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_immutable_LinearSeq$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_ListBuffer().init___()
});
ScalaJS.c.scala_collection_immutable_LinearSeq$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_LinearSeq$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_LinearSeq$.prototype = ScalaJS.c.scala_collection_immutable_LinearSeq$.prototype;
ScalaJS.is.scala_collection_immutable_LinearSeq$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_LinearSeq$)))
});
ScalaJS.as.scala_collection_immutable_LinearSeq$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_LinearSeq$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.LinearSeq")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_LinearSeq$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_LinearSeq$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_LinearSeq$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_LinearSeq$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.LinearSeq;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_LinearSeq$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_LinearSeq$: 0
}, false, "scala.collection.immutable.LinearSeq$", ScalaJS.data.scala_collection_generic_SeqFactory, {
  scala_collection_immutable_LinearSeq$: 1,
  scala_collection_generic_SeqFactory: 1,
  scala_collection_generic_TraversableFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSeqFactory: 1,
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_LinearSeq$.prototype.$classData = ScalaJS.data.scala_collection_immutable_LinearSeq$;
ScalaJS.moduleInstances.scala_collection_immutable_LinearSeq = undefined;
ScalaJS.modules.scala_collection_immutable_LinearSeq = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_LinearSeq)) {
    ScalaJS.moduleInstances.scala_collection_immutable_LinearSeq = new ScalaJS.c.scala_collection_immutable_LinearSeq$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_LinearSeq
});
//@ sourceMappingURL=LinearSeq$.js.map
