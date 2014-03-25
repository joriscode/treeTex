/** @constructor */
ScalaJS.c.scala_collection_GenTraversable$ = (function() {
  ScalaJS.c.scala_collection_generic_GenTraversableFactory.call(this)
});
ScalaJS.c.scala_collection_GenTraversable$.prototype = new ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory();
ScalaJS.c.scala_collection_GenTraversable$.prototype.constructor = ScalaJS.c.scala_collection_GenTraversable$;
ScalaJS.c.scala_collection_GenTraversable$.prototype.canBuildFrom__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_GenTraversable$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.modules.scala_collection_Traversable().newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_GenTraversable$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_GenTraversable$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_GenTraversable$.prototype = ScalaJS.c.scala_collection_GenTraversable$.prototype;
ScalaJS.is.scala_collection_GenTraversable$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_GenTraversable$)))
});
ScalaJS.as.scala_collection_GenTraversable$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_GenTraversable$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.GenTraversable")
  }
});
ScalaJS.isArrayOf.scala_collection_GenTraversable$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_GenTraversable$)))
});
ScalaJS.asArrayOf.scala_collection_GenTraversable$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_GenTraversable$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.GenTraversable;", depth)
  }
});
ScalaJS.data.scala_collection_GenTraversable$ = new ScalaJS.ClassTypeData({
  scala_collection_GenTraversable$: 0
}, false, "scala.collection.GenTraversable$", ScalaJS.data.scala_collection_generic_GenTraversableFactory, {
  scala_collection_GenTraversable$: 1,
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_GenTraversable$.prototype.$classData = ScalaJS.data.scala_collection_GenTraversable$;
ScalaJS.moduleInstances.scala_collection_GenTraversable = undefined;
ScalaJS.modules.scala_collection_GenTraversable = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_GenTraversable)) {
    ScalaJS.moduleInstances.scala_collection_GenTraversable = new ScalaJS.c.scala_collection_GenTraversable$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_GenTraversable
});
//@ sourceMappingURL=GenTraversable$.js.map
