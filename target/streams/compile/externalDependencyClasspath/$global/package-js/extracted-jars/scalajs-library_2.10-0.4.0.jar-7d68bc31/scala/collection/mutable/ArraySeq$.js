/** @constructor */
ScalaJS.c.scala_collection_mutable_ArraySeq$ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_ArraySeq$.prototype = new ScalaJS.inheritable.scala_collection_generic_SeqFactory();
ScalaJS.c.scala_collection_mutable_ArraySeq$.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArraySeq$;
ScalaJS.c.scala_collection_mutable_ArraySeq$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_mutable_ArraySeq$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuffer().init___().mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(buf) {
      var result = new ScalaJS.c.scala_collection_mutable_ArraySeq().init___I(buf.length__I());
      buf.copyToArray__O__I__V(result.array__AO(), 0);
      return result
    })
  })()))
});
ScalaJS.c.scala_collection_mutable_ArraySeq$.prototype.readResolve__p5__O = (function() {
  return ScalaJS.modules.scala_collection_mutable_ArraySeq()
});
ScalaJS.c.scala_collection_mutable_ArraySeq$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArraySeq$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArraySeq$.prototype = ScalaJS.c.scala_collection_mutable_ArraySeq$.prototype;
ScalaJS.is.scala_collection_mutable_ArraySeq$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArraySeq$)))
});
ScalaJS.as.scala_collection_mutable_ArraySeq$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArraySeq$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArraySeq")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArraySeq$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArraySeq$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArraySeq$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArraySeq$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArraySeq$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArraySeq$: 0
}, false, "scala.collection.mutable.ArraySeq$", ScalaJS.data.scala_collection_generic_SeqFactory, {
  scala_collection_mutable_ArraySeq$: 1,
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
ScalaJS.c.scala_collection_mutable_ArraySeq$.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArraySeq$;
ScalaJS.moduleInstances.scala_collection_mutable_ArraySeq = undefined;
ScalaJS.modules.scala_collection_mutable_ArraySeq = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_ArraySeq)) {
    ScalaJS.moduleInstances.scala_collection_mutable_ArraySeq = new ScalaJS.c.scala_collection_mutable_ArraySeq$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_ArraySeq
});
//@ sourceMappingURL=ArraySeq$.js.map
