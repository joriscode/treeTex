/** @constructor */
ScalaJS.c.scala_collection_GenSet$ = (function() {
  ScalaJS.c.scala_collection_generic_GenTraversableFactory.call(this)
});
ScalaJS.c.scala_collection_GenSet$.prototype = new ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory();
ScalaJS.c.scala_collection_GenSet$.prototype.constructor = ScalaJS.c.scala_collection_GenSet$;
ScalaJS.c.scala_collection_GenSet$.prototype.canBuildFrom__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_GenSet$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.modules.scala_collection_Set().newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_GenSet$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_GenSet$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_GenSet$.prototype = ScalaJS.c.scala_collection_GenSet$.prototype;
ScalaJS.is.scala_collection_GenSet$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_GenSet$)))
});
ScalaJS.as.scala_collection_GenSet$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_GenSet$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.GenSet")
  }
});
ScalaJS.isArrayOf.scala_collection_GenSet$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_GenSet$)))
});
ScalaJS.asArrayOf.scala_collection_GenSet$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_GenSet$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.GenSet;", depth)
  }
});
ScalaJS.data.scala_collection_GenSet$ = new ScalaJS.ClassTypeData({
  scala_collection_GenSet$: 0
}, false, "scala.collection.GenSet$", ScalaJS.data.scala_collection_generic_GenTraversableFactory, {
  scala_collection_GenSet$: 1,
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_GenSet$.prototype.$classData = ScalaJS.data.scala_collection_GenSet$;
ScalaJS.moduleInstances.scala_collection_GenSet = undefined;
ScalaJS.modules.scala_collection_GenSet = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_GenSet)) {
    ScalaJS.moduleInstances.scala_collection_GenSet = new ScalaJS.c.scala_collection_GenSet$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_GenSet
});
//@ sourceMappingURL=GenSet$.js.map
