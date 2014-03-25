/** @constructor */
ScalaJS.c.scala_collection_mutable_WeakHashMap$ = (function() {
  ScalaJS.c.scala_collection_generic_MutableMapFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_WeakHashMap$.prototype = new ScalaJS.inheritable.scala_collection_generic_MutableMapFactory();
ScalaJS.c.scala_collection_mutable_WeakHashMap$.prototype.constructor = ScalaJS.c.scala_collection_mutable_WeakHashMap$;
ScalaJS.c.scala_collection_mutable_WeakHashMap$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return new ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom().init___Lscala_collection_generic_GenMapFactory(this)
});
ScalaJS.c.scala_collection_mutable_WeakHashMap$.prototype.empty__Lscala_collection_mutable_WeakHashMap = (function() {
  return new ScalaJS.c.scala_collection_mutable_WeakHashMap().init___()
});
ScalaJS.c.scala_collection_mutable_WeakHashMap$.prototype.readResolve__p4__O = (function() {
  return ScalaJS.modules.scala_collection_mutable_WeakHashMap()
});
ScalaJS.c.scala_collection_mutable_WeakHashMap$.prototype.empty__Lscala_collection_GenMap = (function() {
  return this.empty__Lscala_collection_mutable_WeakHashMap()
});
ScalaJS.c.scala_collection_mutable_WeakHashMap$.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_collection_mutable_WeakHashMap()
});
ScalaJS.c.scala_collection_mutable_WeakHashMap$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_WeakHashMap$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_WeakHashMap$.prototype = ScalaJS.c.scala_collection_mutable_WeakHashMap$.prototype;
ScalaJS.is.scala_collection_mutable_WeakHashMap$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_WeakHashMap$)))
});
ScalaJS.as.scala_collection_mutable_WeakHashMap$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_WeakHashMap$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.WeakHashMap")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_WeakHashMap$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_WeakHashMap$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_WeakHashMap$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_WeakHashMap$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.WeakHashMap;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_WeakHashMap$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_WeakHashMap$: 0
}, false, "scala.collection.mutable.WeakHashMap$", ScalaJS.data.scala_collection_generic_MutableMapFactory, {
  scala_collection_mutable_WeakHashMap$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_generic_MutableMapFactory: 1,
  scala_collection_generic_MapFactory: 1,
  scala_collection_generic_GenMapFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_WeakHashMap$.prototype.$classData = ScalaJS.data.scala_collection_mutable_WeakHashMap$;
ScalaJS.moduleInstances.scala_collection_mutable_WeakHashMap = undefined;
ScalaJS.modules.scala_collection_mutable_WeakHashMap = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_WeakHashMap)) {
    ScalaJS.moduleInstances.scala_collection_mutable_WeakHashMap = new ScalaJS.c.scala_collection_mutable_WeakHashMap$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_WeakHashMap
});
//@ sourceMappingURL=WeakHashMap$.js.map
