/** @constructor */
ScalaJS.c.scala_collection_GenIterable$ = (function() {
  ScalaJS.c.scala_collection_generic_GenTraversableFactory.call(this)
});
ScalaJS.c.scala_collection_GenIterable$.prototype = new ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory();
ScalaJS.c.scala_collection_GenIterable$.prototype.constructor = ScalaJS.c.scala_collection_GenIterable$;
ScalaJS.c.scala_collection_GenIterable$.prototype.canBuildFrom__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_GenIterable$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.modules.scala_collection_Iterable().newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_GenIterable$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_GenIterable$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_GenIterable$.prototype = ScalaJS.c.scala_collection_GenIterable$.prototype;
ScalaJS.is.scala_collection_GenIterable$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_GenIterable$)))
});
ScalaJS.as.scala_collection_GenIterable$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_GenIterable$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.GenIterable")
  }
});
ScalaJS.isArrayOf.scala_collection_GenIterable$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_GenIterable$)))
});
ScalaJS.asArrayOf.scala_collection_GenIterable$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_GenIterable$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.GenIterable;", depth)
  }
});
ScalaJS.data.scala_collection_GenIterable$ = new ScalaJS.ClassTypeData({
  scala_collection_GenIterable$: 0
}, false, "scala.collection.GenIterable$", ScalaJS.data.scala_collection_generic_GenTraversableFactory, {
  scala_collection_GenIterable$: 1,
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_GenIterable$.prototype.$classData = ScalaJS.data.scala_collection_GenIterable$;
ScalaJS.moduleInstances.scala_collection_GenIterable = undefined;
ScalaJS.modules.scala_collection_GenIterable = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_GenIterable)) {
    ScalaJS.moduleInstances.scala_collection_GenIterable = new ScalaJS.c.scala_collection_GenIterable$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_GenIterable
});
//@ sourceMappingURL=GenIterable$.js.map
