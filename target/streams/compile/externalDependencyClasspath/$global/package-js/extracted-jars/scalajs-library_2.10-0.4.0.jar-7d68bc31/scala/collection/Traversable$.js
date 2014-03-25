/** @constructor */
ScalaJS.c.scala_collection_Traversable$ = (function() {
  ScalaJS.c.scala_collection_generic_GenTraversableFactory.call(this);
  this.breaks$3 = null
});
ScalaJS.c.scala_collection_Traversable$.prototype = new ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory();
ScalaJS.c.scala_collection_Traversable$.prototype.constructor = ScalaJS.c.scala_collection_Traversable$;
ScalaJS.c.scala_collection_Traversable$.prototype.breaks__Lscala_util_control_Breaks = (function() {
  return this.breaks$3
});
ScalaJS.c.scala_collection_Traversable$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_Traversable$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.modules.scala_collection_immutable_Traversable().newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_Traversable$.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_Traversable = this;
  this.breaks$3 = new ScalaJS.c.scala_util_control_Breaks().init___();
  return this
});
ScalaJS.c.scala_collection_Traversable$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
ScalaJS.c.scala_collection_Traversable$.prototype.breaks__ = (function() {
  return this.breaks__Lscala_util_control_Breaks()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Traversable$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Traversable$.prototype = ScalaJS.c.scala_collection_Traversable$.prototype;
ScalaJS.is.scala_collection_Traversable$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Traversable$)))
});
ScalaJS.as.scala_collection_Traversable$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_Traversable$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Traversable")
  }
});
ScalaJS.isArrayOf.scala_collection_Traversable$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Traversable$)))
});
ScalaJS.asArrayOf.scala_collection_Traversable$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Traversable$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Traversable;", depth)
  }
});
ScalaJS.data.scala_collection_Traversable$ = new ScalaJS.ClassTypeData({
  scala_collection_Traversable$: 0
}, false, "scala.collection.Traversable$", ScalaJS.data.scala_collection_generic_GenTraversableFactory, {
  scala_collection_Traversable$: 1,
  scala_collection_generic_TraversableFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Traversable$.prototype.$classData = ScalaJS.data.scala_collection_Traversable$;
ScalaJS.moduleInstances.scala_collection_Traversable = undefined;
ScalaJS.modules.scala_collection_Traversable = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_Traversable)) {
    ScalaJS.moduleInstances.scala_collection_Traversable = new ScalaJS.c.scala_collection_Traversable$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_Traversable
});
//@ sourceMappingURL=Traversable$.js.map
