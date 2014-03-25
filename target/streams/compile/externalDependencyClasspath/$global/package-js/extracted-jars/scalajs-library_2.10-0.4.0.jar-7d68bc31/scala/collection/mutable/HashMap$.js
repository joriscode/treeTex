/** @constructor */
ScalaJS.c.scala_collection_mutable_HashMap$ = (function() {
  ScalaJS.c.scala_collection_generic_MutableMapFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_HashMap$.prototype = new ScalaJS.inheritable.scala_collection_generic_MutableMapFactory();
ScalaJS.c.scala_collection_mutable_HashMap$.prototype.constructor = ScalaJS.c.scala_collection_mutable_HashMap$;
ScalaJS.c.scala_collection_mutable_HashMap$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return new ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom().init___Lscala_collection_generic_GenMapFactory(this)
});
ScalaJS.c.scala_collection_mutable_HashMap$.prototype.empty__Lscala_collection_mutable_HashMap = (function() {
  return new ScalaJS.c.scala_collection_mutable_HashMap().init___()
});
ScalaJS.c.scala_collection_mutable_HashMap$.prototype.readResolve__p4__O = (function() {
  return ScalaJS.modules.scala_collection_mutable_HashMap()
});
ScalaJS.c.scala_collection_mutable_HashMap$.prototype.empty__Lscala_collection_GenMap = (function() {
  return this.empty__Lscala_collection_mutable_HashMap()
});
ScalaJS.c.scala_collection_mutable_HashMap$.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_collection_mutable_HashMap()
});
ScalaJS.c.scala_collection_mutable_HashMap$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_HashMap$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_HashMap$.prototype = ScalaJS.c.scala_collection_mutable_HashMap$.prototype;
ScalaJS.is.scala_collection_mutable_HashMap$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_HashMap$)))
});
ScalaJS.as.scala_collection_mutable_HashMap$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_HashMap$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.HashMap")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_HashMap$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_HashMap$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_HashMap$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_HashMap$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.HashMap;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_HashMap$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_HashMap$: 0
}, false, "scala.collection.mutable.HashMap$", ScalaJS.data.scala_collection_generic_MutableMapFactory, {
  scala_collection_mutable_HashMap$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_generic_MutableMapFactory: 1,
  scala_collection_generic_MapFactory: 1,
  scala_collection_generic_GenMapFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_HashMap$.prototype.$classData = ScalaJS.data.scala_collection_mutable_HashMap$;
ScalaJS.moduleInstances.scala_collection_mutable_HashMap = undefined;
ScalaJS.modules.scala_collection_mutable_HashMap = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_HashMap)) {
    ScalaJS.moduleInstances.scala_collection_mutable_HashMap = new ScalaJS.c.scala_collection_mutable_HashMap$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_HashMap
});
//@ sourceMappingURL=HashMap$.js.map
