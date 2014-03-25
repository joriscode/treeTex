/** @constructor */
ScalaJS.c.scala_collection_mutable_LinkedHashSet$ = (function() {
  ScalaJS.c.scala_collection_generic_MutableSetFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$.prototype = new ScalaJS.inheritable.scala_collection_generic_MutableSetFactory();
ScalaJS.c.scala_collection_mutable_LinkedHashSet$.prototype.constructor = ScalaJS.c.scala_collection_mutable_LinkedHashSet$;
ScalaJS.c.scala_collection_mutable_LinkedHashSet$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.setCanBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$.prototype.empty__Lscala_collection_mutable_LinkedHashSet = (function() {
  return new ScalaJS.c.scala_collection_mutable_LinkedHashSet().init___()
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$.prototype.readResolve__p5__O = (function() {
  return ScalaJS.modules.scala_collection_mutable_LinkedHashSet()
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$.prototype.empty__Lscala_collection_GenTraversable = (function() {
  return this.empty__Lscala_collection_mutable_LinkedHashSet()
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_LinkedHashSet$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_LinkedHashSet$.prototype = ScalaJS.c.scala_collection_mutable_LinkedHashSet$.prototype;
ScalaJS.is.scala_collection_mutable_LinkedHashSet$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_LinkedHashSet$)))
});
ScalaJS.as.scala_collection_mutable_LinkedHashSet$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_LinkedHashSet$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.LinkedHashSet")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_LinkedHashSet$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_LinkedHashSet$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_LinkedHashSet$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_LinkedHashSet$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.LinkedHashSet;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_LinkedHashSet$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_LinkedHashSet$: 0
}, false, "scala.collection.mutable.LinkedHashSet$", ScalaJS.data.scala_collection_generic_MutableSetFactory, {
  scala_collection_mutable_LinkedHashSet$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_generic_MutableSetFactory: 1,
  scala_collection_generic_SetFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSetFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$.prototype.$classData = ScalaJS.data.scala_collection_mutable_LinkedHashSet$;
ScalaJS.moduleInstances.scala_collection_mutable_LinkedHashSet = undefined;
ScalaJS.modules.scala_collection_mutable_LinkedHashSet = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_LinkedHashSet)) {
    ScalaJS.moduleInstances.scala_collection_mutable_LinkedHashSet = new ScalaJS.c.scala_collection_mutable_LinkedHashSet$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_LinkedHashSet
});
//@ sourceMappingURL=LinkedHashSet$.js.map
