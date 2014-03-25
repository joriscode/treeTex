/** @constructor */
ScalaJS.c.scala_collection_mutable_Set$ = (function() {
  ScalaJS.c.scala_collection_generic_MutableSetFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_Set$.prototype = new ScalaJS.inheritable.scala_collection_generic_MutableSetFactory();
ScalaJS.c.scala_collection_mutable_Set$.prototype.constructor = ScalaJS.c.scala_collection_mutable_Set$;
ScalaJS.c.scala_collection_mutable_Set$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.setCanBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
ScalaJS.c.scala_collection_mutable_Set$.prototype.empty__Lscala_collection_mutable_Set = (function() {
  return ScalaJS.modules.scala_collection_mutable_HashSet().empty__Lscala_collection_mutable_HashSet()
});
ScalaJS.c.scala_collection_mutable_Set$.prototype.empty__Lscala_collection_GenTraversable = (function() {
  return this.empty__Lscala_collection_mutable_Set()
});
ScalaJS.c.scala_collection_mutable_Set$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_Set$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_Set$.prototype = ScalaJS.c.scala_collection_mutable_Set$.prototype;
ScalaJS.is.scala_collection_mutable_Set$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_Set$)))
});
ScalaJS.as.scala_collection_mutable_Set$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_Set$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.Set")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_Set$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_Set$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_Set$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_Set$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.Set;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_Set$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_Set$: 0
}, false, "scala.collection.mutable.Set$", ScalaJS.data.scala_collection_generic_MutableSetFactory, {
  scala_collection_mutable_Set$: 1,
  scala_collection_generic_MutableSetFactory: 1,
  scala_collection_generic_SetFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSetFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_Set$.prototype.$classData = ScalaJS.data.scala_collection_mutable_Set$;
ScalaJS.moduleInstances.scala_collection_mutable_Set = undefined;
ScalaJS.modules.scala_collection_mutable_Set = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_Set)) {
    ScalaJS.moduleInstances.scala_collection_mutable_Set = new ScalaJS.c.scala_collection_mutable_Set$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_Set
});
//@ sourceMappingURL=Set$.js.map
