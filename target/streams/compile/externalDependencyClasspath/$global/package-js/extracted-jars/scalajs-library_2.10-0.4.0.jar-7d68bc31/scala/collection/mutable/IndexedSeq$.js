/** @constructor */
ScalaJS.c.scala_collection_mutable_IndexedSeq$ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_IndexedSeq$.prototype = new ScalaJS.inheritable.scala_collection_generic_SeqFactory();
ScalaJS.c.scala_collection_mutable_IndexedSeq$.prototype.constructor = ScalaJS.c.scala_collection_mutable_IndexedSeq$;
ScalaJS.c.scala_collection_mutable_IndexedSeq$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_mutable_IndexedSeq$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuffer().init___()
});
ScalaJS.c.scala_collection_mutable_IndexedSeq$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_IndexedSeq$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_IndexedSeq$.prototype = ScalaJS.c.scala_collection_mutable_IndexedSeq$.prototype;
ScalaJS.is.scala_collection_mutable_IndexedSeq$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_IndexedSeq$)))
});
ScalaJS.as.scala_collection_mutable_IndexedSeq$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_IndexedSeq$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.IndexedSeq")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_IndexedSeq$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_IndexedSeq$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_IndexedSeq$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_IndexedSeq$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.IndexedSeq;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_IndexedSeq$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_IndexedSeq$: 0
}, false, "scala.collection.mutable.IndexedSeq$", ScalaJS.data.scala_collection_generic_SeqFactory, {
  scala_collection_mutable_IndexedSeq$: 1,
  scala_collection_generic_SeqFactory: 1,
  scala_collection_generic_TraversableFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSeqFactory: 1,
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_IndexedSeq$.prototype.$classData = ScalaJS.data.scala_collection_mutable_IndexedSeq$;
ScalaJS.moduleInstances.scala_collection_mutable_IndexedSeq = undefined;
ScalaJS.modules.scala_collection_mutable_IndexedSeq = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_IndexedSeq)) {
    ScalaJS.moduleInstances.scala_collection_mutable_IndexedSeq = new ScalaJS.c.scala_collection_mutable_IndexedSeq$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_IndexedSeq
});
//@ sourceMappingURL=IndexedSeq$.js.map
