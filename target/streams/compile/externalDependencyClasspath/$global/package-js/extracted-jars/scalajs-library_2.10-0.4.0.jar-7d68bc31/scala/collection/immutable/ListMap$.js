/** @constructor */
ScalaJS.c.scala_collection_immutable_ListMap$ = (function() {
  ScalaJS.c.scala_collection_generic_ImmutableMapFactory.call(this)
});
ScalaJS.c.scala_collection_immutable_ListMap$.prototype = new ScalaJS.inheritable.scala_collection_generic_ImmutableMapFactory();
ScalaJS.c.scala_collection_immutable_ListMap$.prototype.constructor = ScalaJS.c.scala_collection_immutable_ListMap$;
ScalaJS.c.scala_collection_immutable_ListMap$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return new ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom().init___Lscala_collection_generic_GenMapFactory(this)
});
ScalaJS.c.scala_collection_immutable_ListMap$.prototype.empty__Lscala_collection_immutable_ListMap = (function() {
  return ScalaJS.modules.scala_collection_immutable_ListMap$EmptyListMap()
});
ScalaJS.c.scala_collection_immutable_ListMap$.prototype.readResolve__p4__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_ListMap()
});
ScalaJS.c.scala_collection_immutable_ListMap$.prototype.empty__Lscala_collection_GenMap = (function() {
  return this.empty__Lscala_collection_immutable_ListMap()
});
ScalaJS.c.scala_collection_immutable_ListMap$.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_collection_immutable_ListMap()
});
ScalaJS.c.scala_collection_immutable_ListMap$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_ListMap$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_ListMap$.prototype = ScalaJS.c.scala_collection_immutable_ListMap$.prototype;
ScalaJS.is.scala_collection_immutable_ListMap$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_ListMap$)))
});
ScalaJS.as.scala_collection_immutable_ListMap$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_ListMap$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.ListMap")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_ListMap$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_ListMap$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_ListMap$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_ListMap$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.ListMap;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_ListMap$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_ListMap$: 0
}, false, "scala.collection.immutable.ListMap$", ScalaJS.data.scala_collection_generic_ImmutableMapFactory, {
  scala_collection_immutable_ListMap$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_generic_ImmutableMapFactory: 1,
  scala_collection_generic_MapFactory: 1,
  scala_collection_generic_GenMapFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_ListMap$.prototype.$classData = ScalaJS.data.scala_collection_immutable_ListMap$;
ScalaJS.moduleInstances.scala_collection_immutable_ListMap = undefined;
ScalaJS.modules.scala_collection_immutable_ListMap = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_ListMap)) {
    ScalaJS.moduleInstances.scala_collection_immutable_ListMap = new ScalaJS.c.scala_collection_immutable_ListMap$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_ListMap
});
//@ sourceMappingURL=ListMap$.js.map
