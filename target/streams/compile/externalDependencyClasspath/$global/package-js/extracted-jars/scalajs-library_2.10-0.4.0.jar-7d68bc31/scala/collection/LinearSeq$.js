/** @constructor */
ScalaJS.c.scala_collection_LinearSeq$ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.call(this)
});
ScalaJS.c.scala_collection_LinearSeq$.prototype = new ScalaJS.inheritable.scala_collection_generic_SeqFactory();
ScalaJS.c.scala_collection_LinearSeq$.prototype.constructor = ScalaJS.c.scala_collection_LinearSeq$;
ScalaJS.c.scala_collection_LinearSeq$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_LinearSeq$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.modules.scala_collection_immutable_LinearSeq().newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_LinearSeq$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_LinearSeq$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_LinearSeq$.prototype = ScalaJS.c.scala_collection_LinearSeq$.prototype;
ScalaJS.is.scala_collection_LinearSeq$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_LinearSeq$)))
});
ScalaJS.as.scala_collection_LinearSeq$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_LinearSeq$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.LinearSeq")
  }
});
ScalaJS.isArrayOf.scala_collection_LinearSeq$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_LinearSeq$)))
});
ScalaJS.asArrayOf.scala_collection_LinearSeq$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_LinearSeq$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth)
  }
});
ScalaJS.data.scala_collection_LinearSeq$ = new ScalaJS.ClassTypeData({
  scala_collection_LinearSeq$: 0
}, false, "scala.collection.LinearSeq$", ScalaJS.data.scala_collection_generic_SeqFactory, {
  scala_collection_LinearSeq$: 1,
  scala_collection_generic_SeqFactory: 1,
  scala_collection_generic_TraversableFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSeqFactory: 1,
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_LinearSeq$.prototype.$classData = ScalaJS.data.scala_collection_LinearSeq$;
ScalaJS.moduleInstances.scala_collection_LinearSeq = undefined;
ScalaJS.modules.scala_collection_LinearSeq = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_LinearSeq)) {
    ScalaJS.moduleInstances.scala_collection_LinearSeq = new ScalaJS.c.scala_collection_LinearSeq$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_LinearSeq
});
//@ sourceMappingURL=LinearSeq$.js.map
