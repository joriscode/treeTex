/** @constructor */
ScalaJS.c.scala_collection_immutable_Set$ = (function() {
  ScalaJS.c.scala_collection_generic_ImmutableSetFactory.call(this)
});
ScalaJS.c.scala_collection_immutable_Set$.prototype = new ScalaJS.inheritable.scala_collection_generic_ImmutableSetFactory();
ScalaJS.c.scala_collection_immutable_Set$.prototype.constructor = ScalaJS.c.scala_collection_immutable_Set$;
ScalaJS.c.scala_collection_immutable_Set$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.setCanBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
ScalaJS.c.scala_collection_immutable_Set$.prototype.empty__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.modules.scala_collection_immutable_Set$EmptySet()
});
ScalaJS.c.scala_collection_immutable_Set$.prototype.empty__Lscala_collection_GenTraversable = (function() {
  return this.empty__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_Set$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Set$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Set$.prototype = ScalaJS.c.scala_collection_immutable_Set$.prototype;
ScalaJS.is.scala_collection_immutable_Set$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Set$)))
});
ScalaJS.as.scala_collection_immutable_Set$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Set$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Set")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Set$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Set$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Set$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Set$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Set;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Set$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Set$: 0
}, false, "scala.collection.immutable.Set$", ScalaJS.data.scala_collection_generic_ImmutableSetFactory, {
  scala_collection_immutable_Set$: 1,
  scala_collection_generic_ImmutableSetFactory: 1,
  scala_collection_generic_SetFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSetFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_Set$.prototype.$classData = ScalaJS.data.scala_collection_immutable_Set$;
ScalaJS.moduleInstances.scala_collection_immutable_Set = undefined;
ScalaJS.modules.scala_collection_immutable_Set = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_Set)) {
    ScalaJS.moduleInstances.scala_collection_immutable_Set = new ScalaJS.c.scala_collection_immutable_Set$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_Set
});
//@ sourceMappingURL=Set$.js.map
