/** @constructor */
ScalaJS.c.scala_collection_mutable_Buffer$ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_Buffer$.prototype = new ScalaJS.inheritable.scala_collection_generic_SeqFactory();
ScalaJS.c.scala_collection_mutable_Buffer$.prototype.constructor = ScalaJS.c.scala_collection_mutable_Buffer$;
ScalaJS.c.scala_collection_mutable_Buffer$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_mutable_Buffer$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuffer().init___()
});
ScalaJS.c.scala_collection_mutable_Buffer$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_Buffer$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_Buffer$.prototype = ScalaJS.c.scala_collection_mutable_Buffer$.prototype;
ScalaJS.is.scala_collection_mutable_Buffer$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_Buffer$)))
});
ScalaJS.as.scala_collection_mutable_Buffer$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_Buffer$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.Buffer")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_Buffer$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_Buffer$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_Buffer$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_Buffer$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.Buffer;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_Buffer$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_Buffer$: 0
}, false, "scala.collection.mutable.Buffer$", ScalaJS.data.scala_collection_generic_SeqFactory, {
  scala_collection_mutable_Buffer$: 1,
  scala_collection_generic_SeqFactory: 1,
  scala_collection_generic_TraversableFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSeqFactory: 1,
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_Buffer$.prototype.$classData = ScalaJS.data.scala_collection_mutable_Buffer$;
ScalaJS.moduleInstances.scala_collection_mutable_Buffer = undefined;
ScalaJS.modules.scala_collection_mutable_Buffer = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_Buffer)) {
    ScalaJS.moduleInstances.scala_collection_mutable_Buffer = new ScalaJS.c.scala_collection_mutable_Buffer$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_Buffer
});
//@ sourceMappingURL=Buffer$.js.map
