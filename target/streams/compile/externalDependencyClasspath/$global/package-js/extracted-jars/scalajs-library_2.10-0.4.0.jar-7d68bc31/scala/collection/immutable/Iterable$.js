/** @constructor */
ScalaJS.c.scala_collection_immutable_Iterable$ = (function() {
  ScalaJS.c.scala_collection_generic_GenTraversableFactory.call(this)
});
ScalaJS.c.scala_collection_immutable_Iterable$.prototype = new ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory();
ScalaJS.c.scala_collection_immutable_Iterable$.prototype.constructor = ScalaJS.c.scala_collection_immutable_Iterable$;
ScalaJS.c.scala_collection_immutable_Iterable$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_immutable_Iterable$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_ListBuffer().init___()
});
ScalaJS.c.scala_collection_immutable_Iterable$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Iterable$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Iterable$.prototype = ScalaJS.c.scala_collection_immutable_Iterable$.prototype;
ScalaJS.is.scala_collection_immutable_Iterable$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Iterable$)))
});
ScalaJS.as.scala_collection_immutable_Iterable$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Iterable$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Iterable")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Iterable$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Iterable$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Iterable$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Iterable$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Iterable;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Iterable$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Iterable$: 0
}, false, "scala.collection.immutable.Iterable$", ScalaJS.data.scala_collection_generic_GenTraversableFactory, {
  scala_collection_immutable_Iterable$: 1,
  scala_collection_generic_TraversableFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_Iterable$.prototype.$classData = ScalaJS.data.scala_collection_immutable_Iterable$;
ScalaJS.moduleInstances.scala_collection_immutable_Iterable = undefined;
ScalaJS.modules.scala_collection_immutable_Iterable = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_Iterable)) {
    ScalaJS.moduleInstances.scala_collection_immutable_Iterable = new ScalaJS.c.scala_collection_immutable_Iterable$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_Iterable
});
//@ sourceMappingURL=Iterable$.js.map
