/** @constructor */
ScalaJS.c.scala_collection_mutable_Traversable$ = (function() {
  ScalaJS.c.scala_collection_generic_GenTraversableFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_Traversable$.prototype = new ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory();
ScalaJS.c.scala_collection_mutable_Traversable$.prototype.constructor = ScalaJS.c.scala_collection_mutable_Traversable$;
ScalaJS.c.scala_collection_mutable_Traversable$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_mutable_Traversable$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuffer().init___()
});
ScalaJS.c.scala_collection_mutable_Traversable$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_Traversable$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_Traversable$.prototype = ScalaJS.c.scala_collection_mutable_Traversable$.prototype;
ScalaJS.is.scala_collection_mutable_Traversable$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_Traversable$)))
});
ScalaJS.as.scala_collection_mutable_Traversable$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_Traversable$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.Traversable")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_Traversable$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_Traversable$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_Traversable$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_Traversable$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.Traversable;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_Traversable$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_Traversable$: 0
}, false, "scala.collection.mutable.Traversable$", ScalaJS.data.scala_collection_generic_GenTraversableFactory, {
  scala_collection_mutable_Traversable$: 1,
  scala_collection_generic_TraversableFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_Traversable$.prototype.$classData = ScalaJS.data.scala_collection_mutable_Traversable$;
ScalaJS.moduleInstances.scala_collection_mutable_Traversable = undefined;
ScalaJS.modules.scala_collection_mutable_Traversable = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_Traversable)) {
    ScalaJS.moduleInstances.scala_collection_mutable_Traversable = new ScalaJS.c.scala_collection_mutable_Traversable$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_Traversable
});
//@ sourceMappingURL=Traversable$.js.map
