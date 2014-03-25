/** @constructor */
ScalaJS.c.scala_collection_Map$ = (function() {
  ScalaJS.c.scala_collection_generic_MapFactory.call(this)
});
ScalaJS.c.scala_collection_Map$.prototype = new ScalaJS.inheritable.scala_collection_generic_MapFactory();
ScalaJS.c.scala_collection_Map$.prototype.constructor = ScalaJS.c.scala_collection_Map$;
ScalaJS.c.scala_collection_Map$.prototype.empty__Lscala_collection_immutable_Map = (function() {
  return ScalaJS.modules.scala_collection_immutable_Map().empty__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_Map$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return new ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom().init___Lscala_collection_generic_GenMapFactory(this)
});
ScalaJS.c.scala_collection_Map$.prototype.empty__Lscala_collection_GenMap = (function() {
  return this.empty__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_Map$.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_Map$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Map$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Map$.prototype = ScalaJS.c.scala_collection_Map$.prototype;
ScalaJS.is.scala_collection_Map$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Map$)))
});
ScalaJS.as.scala_collection_Map$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_Map$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Map")
  }
});
ScalaJS.isArrayOf.scala_collection_Map$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Map$)))
});
ScalaJS.asArrayOf.scala_collection_Map$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Map$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Map;", depth)
  }
});
ScalaJS.data.scala_collection_Map$ = new ScalaJS.ClassTypeData({
  scala_collection_Map$: 0
}, false, "scala.collection.Map$", ScalaJS.data.scala_collection_generic_MapFactory, {
  scala_collection_Map$: 1,
  scala_collection_generic_MapFactory: 1,
  scala_collection_generic_GenMapFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Map$.prototype.$classData = ScalaJS.data.scala_collection_Map$;
ScalaJS.moduleInstances.scala_collection_Map = undefined;
ScalaJS.modules.scala_collection_Map = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_Map)) {
    ScalaJS.moduleInstances.scala_collection_Map = new ScalaJS.c.scala_collection_Map$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_Map
});
//@ sourceMappingURL=Map$.js.map
