/** @constructor */
ScalaJS.c.scala_collection_immutable_ListSet$ = (function() {
  ScalaJS.c.scala_collection_generic_ImmutableSetFactory.call(this)
});
ScalaJS.c.scala_collection_immutable_ListSet$.prototype = new ScalaJS.inheritable.scala_collection_generic_ImmutableSetFactory();
ScalaJS.c.scala_collection_immutable_ListSet$.prototype.constructor = ScalaJS.c.scala_collection_immutable_ListSet$;
ScalaJS.c.scala_collection_immutable_ListSet$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.setCanBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
ScalaJS.c.scala_collection_immutable_ListSet$.prototype.empty__Lscala_collection_immutable_ListSet = (function() {
  return ScalaJS.modules.scala_collection_immutable_ListSet$EmptyListSet()
});
ScalaJS.c.scala_collection_immutable_ListSet$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder().init___()
});
ScalaJS.c.scala_collection_immutable_ListSet$.prototype.readResolve__p5__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_ListSet()
});
ScalaJS.c.scala_collection_immutable_ListSet$.prototype.empty__Lscala_collection_GenTraversable = (function() {
  return this.empty__Lscala_collection_immutable_ListSet()
});
ScalaJS.c.scala_collection_immutable_ListSet$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_ListSet$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_ListSet$.prototype = ScalaJS.c.scala_collection_immutable_ListSet$.prototype;
ScalaJS.is.scala_collection_immutable_ListSet$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_ListSet$)))
});
ScalaJS.as.scala_collection_immutable_ListSet$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_ListSet$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.ListSet")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_ListSet$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_ListSet$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_ListSet$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_ListSet$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.ListSet;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_ListSet$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_ListSet$: 0
}, false, "scala.collection.immutable.ListSet$", ScalaJS.data.scala_collection_generic_ImmutableSetFactory, {
  scala_collection_immutable_ListSet$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_generic_ImmutableSetFactory: 1,
  scala_collection_generic_SetFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSetFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_ListSet$.prototype.$classData = ScalaJS.data.scala_collection_immutable_ListSet$;
ScalaJS.moduleInstances.scala_collection_immutable_ListSet = undefined;
ScalaJS.modules.scala_collection_immutable_ListSet = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_ListSet)) {
    ScalaJS.moduleInstances.scala_collection_immutable_ListSet = new ScalaJS.c.scala_collection_immutable_ListSet$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_ListSet
});
//@ sourceMappingURL=ListSet$.js.map
