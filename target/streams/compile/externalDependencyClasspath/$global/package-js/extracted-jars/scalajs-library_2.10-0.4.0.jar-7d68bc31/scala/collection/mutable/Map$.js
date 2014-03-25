/** @constructor */
ScalaJS.c.scala_collection_mutable_Map$ = (function() {
  ScalaJS.c.scala_collection_generic_MutableMapFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_Map$.prototype = new ScalaJS.inheritable.scala_collection_generic_MutableMapFactory();
ScalaJS.c.scala_collection_mutable_Map$.prototype.constructor = ScalaJS.c.scala_collection_mutable_Map$;
ScalaJS.c.scala_collection_mutable_Map$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return new ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom().init___Lscala_collection_generic_GenMapFactory(this)
});
ScalaJS.c.scala_collection_mutable_Map$.prototype.empty__Lscala_collection_mutable_Map = (function() {
  return new ScalaJS.c.scala_collection_mutable_HashMap().init___()
});
ScalaJS.c.scala_collection_mutable_Map$.prototype.empty__Lscala_collection_GenMap = (function() {
  return this.empty__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_Map$.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_Map$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_Map$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_Map$.prototype = ScalaJS.c.scala_collection_mutable_Map$.prototype;
ScalaJS.is.scala_collection_mutable_Map$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_Map$)))
});
ScalaJS.as.scala_collection_mutable_Map$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_Map$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.Map")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_Map$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_Map$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_Map$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_Map$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.Map;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_Map$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_Map$: 0
}, false, "scala.collection.mutable.Map$", ScalaJS.data.scala_collection_generic_MutableMapFactory, {
  scala_collection_mutable_Map$: 1,
  scala_collection_generic_MutableMapFactory: 1,
  scala_collection_generic_MapFactory: 1,
  scala_collection_generic_GenMapFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_Map$.prototype.$classData = ScalaJS.data.scala_collection_mutable_Map$;
ScalaJS.moduleInstances.scala_collection_mutable_Map = undefined;
ScalaJS.modules.scala_collection_mutable_Map = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_Map)) {
    ScalaJS.moduleInstances.scala_collection_mutable_Map = new ScalaJS.c.scala_collection_mutable_Map$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_Map
});
//@ sourceMappingURL=Map$.js.map
