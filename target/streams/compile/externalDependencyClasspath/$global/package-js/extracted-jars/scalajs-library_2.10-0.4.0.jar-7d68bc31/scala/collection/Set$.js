/** @constructor */
ScalaJS.c.scala_collection_Set$ = (function() {
  ScalaJS.c.scala_collection_generic_SetFactory.call(this)
});
ScalaJS.c.scala_collection_Set$.prototype = new ScalaJS.inheritable.scala_collection_generic_SetFactory();
ScalaJS.c.scala_collection_Set$.prototype.constructor = ScalaJS.c.scala_collection_Set$;
ScalaJS.c.scala_collection_Set$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.modules.scala_collection_immutable_Set().newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_Set$.prototype.empty__Lscala_collection_Set = (function() {
  return ScalaJS.modules.scala_collection_immutable_Set().empty__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_Set$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.setCanBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
ScalaJS.c.scala_collection_Set$.prototype.empty__Lscala_collection_GenTraversable = (function() {
  return this.empty__Lscala_collection_Set()
});
ScalaJS.c.scala_collection_Set$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Set$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Set$.prototype = ScalaJS.c.scala_collection_Set$.prototype;
ScalaJS.is.scala_collection_Set$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Set$)))
});
ScalaJS.as.scala_collection_Set$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_Set$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Set")
  }
});
ScalaJS.isArrayOf.scala_collection_Set$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Set$)))
});
ScalaJS.asArrayOf.scala_collection_Set$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Set$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Set;", depth)
  }
});
ScalaJS.data.scala_collection_Set$ = new ScalaJS.ClassTypeData({
  scala_collection_Set$: 0
}, false, "scala.collection.Set$", ScalaJS.data.scala_collection_generic_SetFactory, {
  scala_collection_Set$: 1,
  scala_collection_generic_SetFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSetFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Set$.prototype.$classData = ScalaJS.data.scala_collection_Set$;
ScalaJS.moduleInstances.scala_collection_Set = undefined;
ScalaJS.modules.scala_collection_Set = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_Set)) {
    ScalaJS.moduleInstances.scala_collection_Set = new ScalaJS.c.scala_collection_Set$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_Set
});
//@ sourceMappingURL=Set$.js.map
