/** @constructor */
ScalaJS.c.scala_collection_GenSeq$ = (function() {
  ScalaJS.c.scala_collection_generic_GenTraversableFactory.call(this)
});
ScalaJS.c.scala_collection_GenSeq$.prototype = new ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory();
ScalaJS.c.scala_collection_GenSeq$.prototype.constructor = ScalaJS.c.scala_collection_GenSeq$;
ScalaJS.c.scala_collection_GenSeq$.prototype.canBuildFrom__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_GenSeq$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.modules.scala_collection_Seq().newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_GenSeq$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_GenSeq$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_GenSeq$.prototype = ScalaJS.c.scala_collection_GenSeq$.prototype;
ScalaJS.is.scala_collection_GenSeq$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_GenSeq$)))
});
ScalaJS.as.scala_collection_GenSeq$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_GenSeq$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.GenSeq")
  }
});
ScalaJS.isArrayOf.scala_collection_GenSeq$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_GenSeq$)))
});
ScalaJS.asArrayOf.scala_collection_GenSeq$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_GenSeq$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.GenSeq;", depth)
  }
});
ScalaJS.data.scala_collection_GenSeq$ = new ScalaJS.ClassTypeData({
  scala_collection_GenSeq$: 0
}, false, "scala.collection.GenSeq$", ScalaJS.data.scala_collection_generic_GenTraversableFactory, {
  scala_collection_GenSeq$: 1,
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_GenSeq$.prototype.$classData = ScalaJS.data.scala_collection_GenSeq$;
ScalaJS.moduleInstances.scala_collection_GenSeq = undefined;
ScalaJS.modules.scala_collection_GenSeq = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_GenSeq)) {
    ScalaJS.moduleInstances.scala_collection_GenSeq = new ScalaJS.c.scala_collection_GenSeq$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_GenSeq
});
//@ sourceMappingURL=GenSeq$.js.map
