/** @constructor */
ScalaJS.c.scala_collection_mutable_LinkedHashMap$ = (function() {
  ScalaJS.c.scala_collection_generic_MutableMapFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$.prototype = new ScalaJS.inheritable.scala_collection_generic_MutableMapFactory();
ScalaJS.c.scala_collection_mutable_LinkedHashMap$.prototype.constructor = ScalaJS.c.scala_collection_mutable_LinkedHashMap$;
ScalaJS.c.scala_collection_mutable_LinkedHashMap$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return new ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom().init___Lscala_collection_generic_GenMapFactory(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$.prototype.empty__Lscala_collection_mutable_LinkedHashMap = (function() {
  return new ScalaJS.c.scala_collection_mutable_LinkedHashMap().init___()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$.prototype.readResolve__p4__O = (function() {
  return ScalaJS.modules.scala_collection_mutable_LinkedHashMap()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$.prototype.empty__Lscala_collection_GenMap = (function() {
  return this.empty__Lscala_collection_mutable_LinkedHashMap()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_collection_mutable_LinkedHashMap()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_LinkedHashMap$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_LinkedHashMap$.prototype = ScalaJS.c.scala_collection_mutable_LinkedHashMap$.prototype;
ScalaJS.is.scala_collection_mutable_LinkedHashMap$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_LinkedHashMap$)))
});
ScalaJS.as.scala_collection_mutable_LinkedHashMap$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_LinkedHashMap$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.LinkedHashMap")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_LinkedHashMap$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_LinkedHashMap$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_LinkedHashMap$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_LinkedHashMap$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.LinkedHashMap;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_LinkedHashMap$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_LinkedHashMap$: 0
}, false, "scala.collection.mutable.LinkedHashMap$", ScalaJS.data.scala_collection_generic_MutableMapFactory, {
  scala_collection_mutable_LinkedHashMap$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_generic_MutableMapFactory: 1,
  scala_collection_generic_MapFactory: 1,
  scala_collection_generic_GenMapFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$.prototype.$classData = ScalaJS.data.scala_collection_mutable_LinkedHashMap$;
ScalaJS.moduleInstances.scala_collection_mutable_LinkedHashMap = undefined;
ScalaJS.modules.scala_collection_mutable_LinkedHashMap = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_LinkedHashMap)) {
    ScalaJS.moduleInstances.scala_collection_mutable_LinkedHashMap = new ScalaJS.c.scala_collection_mutable_LinkedHashMap$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_LinkedHashMap
});
//@ sourceMappingURL=LinkedHashMap$.js.map
