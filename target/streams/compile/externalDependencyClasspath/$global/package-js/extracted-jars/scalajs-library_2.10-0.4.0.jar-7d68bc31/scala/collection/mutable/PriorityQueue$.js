/** @constructor */
ScalaJS.c.scala_collection_mutable_PriorityQueue$ = (function() {
  ScalaJS.c.scala_collection_generic_OrderedTraversableFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue$.prototype = new ScalaJS.inheritable.scala_collection_generic_OrderedTraversableFactory();
ScalaJS.c.scala_collection_mutable_PriorityQueue$.prototype.constructor = ScalaJS.c.scala_collection_mutable_PriorityQueue$;
ScalaJS.c.scala_collection_mutable_PriorityQueue$.prototype.newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_PriorityQueue = (function(ord$2) {
  return new ScalaJS.c.scala_collection_mutable_PriorityQueue().init___Lscala_math_Ordering(ord$2)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue$.prototype.canBuildFrom__Lscala_math_Ordering__Lscala_collection_generic_CanBuildFrom = (function(ord) {
  return new ScalaJS.c.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom().init___Lscala_collection_generic_OrderedTraversableFactory__Lscala_math_Ordering(this, ord)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue$.prototype.readResolve__p3__O = (function() {
  return ScalaJS.modules.scala_collection_mutable_PriorityQueue()
});
ScalaJS.c.scala_collection_mutable_PriorityQueue$.prototype.newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder = (function(ord) {
  return this.newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_PriorityQueue(ord)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue$.prototype.canBuildFrom__Lscala_math_Ordering__ = (function(ord) {
  return this.canBuildFrom__Lscala_math_Ordering__Lscala_collection_generic_CanBuildFrom(ord)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_PriorityQueue$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_PriorityQueue$.prototype = ScalaJS.c.scala_collection_mutable_PriorityQueue$.prototype;
ScalaJS.is.scala_collection_mutable_PriorityQueue$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_PriorityQueue$)))
});
ScalaJS.as.scala_collection_mutable_PriorityQueue$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_PriorityQueue$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.PriorityQueue")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_PriorityQueue$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_PriorityQueue$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_PriorityQueue$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_PriorityQueue$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.PriorityQueue;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_PriorityQueue$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_PriorityQueue$: 0
}, false, "scala.collection.mutable.PriorityQueue$", ScalaJS.data.scala_collection_generic_OrderedTraversableFactory, {
  scala_collection_mutable_PriorityQueue$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_generic_OrderedTraversableFactory: 1,
  scala_collection_generic_GenericOrderedCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_PriorityQueue$.prototype.$classData = ScalaJS.data.scala_collection_mutable_PriorityQueue$;
ScalaJS.moduleInstances.scala_collection_mutable_PriorityQueue = undefined;
ScalaJS.modules.scala_collection_mutable_PriorityQueue = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_PriorityQueue)) {
    ScalaJS.moduleInstances.scala_collection_mutable_PriorityQueue = new ScalaJS.c.scala_collection_mutable_PriorityQueue$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_PriorityQueue
});
//@ sourceMappingURL=PriorityQueue$.js.map
