/** @constructor */
ScalaJS.c.scala_collection_GenMap$ = (function() {
  ScalaJS.c.scala_collection_generic_GenMapFactory.call(this)
});
ScalaJS.c.scala_collection_GenMap$.prototype = new ScalaJS.inheritable.scala_collection_generic_GenMapFactory();
ScalaJS.c.scala_collection_GenMap$.prototype.constructor = ScalaJS.c.scala_collection_GenMap$;
ScalaJS.c.scala_collection_GenMap$.prototype.empty__Lscala_collection_immutable_Map = (function() {
  return ScalaJS.modules.scala_collection_immutable_Map().empty__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_GenMap$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return new ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom().init___Lscala_collection_generic_GenMapFactory(this)
});
ScalaJS.c.scala_collection_GenMap$.prototype.empty__Lscala_collection_GenMap = (function() {
  return this.empty__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_GenMap$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_GenMap$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_GenMap$.prototype = ScalaJS.c.scala_collection_GenMap$.prototype;
ScalaJS.is.scala_collection_GenMap$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_GenMap$)))
});
ScalaJS.as.scala_collection_GenMap$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_GenMap$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.GenMap")
  }
});
ScalaJS.isArrayOf.scala_collection_GenMap$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_GenMap$)))
});
ScalaJS.asArrayOf.scala_collection_GenMap$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_GenMap$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.GenMap;", depth)
  }
});
ScalaJS.data.scala_collection_GenMap$ = new ScalaJS.ClassTypeData({
  scala_collection_GenMap$: 0
}, false, "scala.collection.GenMap$", ScalaJS.data.scala_collection_generic_GenMapFactory, {
  scala_collection_GenMap$: 1,
  scala_collection_generic_GenMapFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_GenMap$.prototype.$classData = ScalaJS.data.scala_collection_GenMap$;
ScalaJS.moduleInstances.scala_collection_GenMap = undefined;
ScalaJS.modules.scala_collection_GenMap = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_GenMap)) {
    ScalaJS.moduleInstances.scala_collection_GenMap = new ScalaJS.c.scala_collection_GenMap$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_GenMap
});
//@ sourceMappingURL=GenMap$.js.map
