/** @constructor */
ScalaJS.c.scala_collection_mutable_HashSet$ = (function() {
  ScalaJS.c.scala_collection_generic_MutableSetFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_HashSet$.prototype = new ScalaJS.inheritable.scala_collection_generic_MutableSetFactory();
ScalaJS.c.scala_collection_mutable_HashSet$.prototype.constructor = ScalaJS.c.scala_collection_mutable_HashSet$;
ScalaJS.c.scala_collection_mutable_HashSet$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.setCanBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
ScalaJS.c.scala_collection_mutable_HashSet$.prototype.empty__Lscala_collection_mutable_HashSet = (function() {
  return new ScalaJS.c.scala_collection_mutable_HashSet().init___()
});
ScalaJS.c.scala_collection_mutable_HashSet$.prototype.readResolve__p5__O = (function() {
  return ScalaJS.modules.scala_collection_mutable_HashSet()
});
ScalaJS.c.scala_collection_mutable_HashSet$.prototype.empty__Lscala_collection_GenTraversable = (function() {
  return this.empty__Lscala_collection_mutable_HashSet()
});
ScalaJS.c.scala_collection_mutable_HashSet$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_HashSet$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_HashSet$.prototype = ScalaJS.c.scala_collection_mutable_HashSet$.prototype;
ScalaJS.is.scala_collection_mutable_HashSet$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_HashSet$)))
});
ScalaJS.as.scala_collection_mutable_HashSet$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_HashSet$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.HashSet")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_HashSet$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_HashSet$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_HashSet$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_HashSet$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.HashSet;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_HashSet$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_HashSet$: 0
}, false, "scala.collection.mutable.HashSet$", ScalaJS.data.scala_collection_generic_MutableSetFactory, {
  scala_collection_mutable_HashSet$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_generic_MutableSetFactory: 1,
  scala_collection_generic_SetFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSetFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_HashSet$.prototype.$classData = ScalaJS.data.scala_collection_mutable_HashSet$;
ScalaJS.moduleInstances.scala_collection_mutable_HashSet = undefined;
ScalaJS.modules.scala_collection_mutable_HashSet = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_HashSet)) {
    ScalaJS.moduleInstances.scala_collection_mutable_HashSet = new ScalaJS.c.scala_collection_mutable_HashSet$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_HashSet
});
//@ sourceMappingURL=HashSet$.js.map
