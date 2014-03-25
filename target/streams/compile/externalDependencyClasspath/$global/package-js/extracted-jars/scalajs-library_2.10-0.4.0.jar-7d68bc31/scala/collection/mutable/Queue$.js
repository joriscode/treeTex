/** @constructor */
ScalaJS.c.scala_collection_mutable_Queue$ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_Queue$.prototype = new ScalaJS.inheritable.scala_collection_generic_SeqFactory();
ScalaJS.c.scala_collection_mutable_Queue$.prototype.constructor = ScalaJS.c.scala_collection_mutable_Queue$;
ScalaJS.c.scala_collection_mutable_Queue$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_mutable_Queue$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_MutableList().init___().mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$1) {
      return x$1.toQueue__Lscala_collection_mutable_Queue()
    })
  })()))
});
ScalaJS.c.scala_collection_mutable_Queue$.prototype.readResolve__p5__O = (function() {
  return ScalaJS.modules.scala_collection_mutable_Queue()
});
ScalaJS.c.scala_collection_mutable_Queue$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_Queue$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_Queue$.prototype = ScalaJS.c.scala_collection_mutable_Queue$.prototype;
ScalaJS.is.scala_collection_mutable_Queue$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_Queue$)))
});
ScalaJS.as.scala_collection_mutable_Queue$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_Queue$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.Queue")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_Queue$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_Queue$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_Queue$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_Queue$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.Queue;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_Queue$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_Queue$: 0
}, false, "scala.collection.mutable.Queue$", ScalaJS.data.scala_collection_generic_SeqFactory, {
  scala_collection_mutable_Queue$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_generic_SeqFactory: 1,
  scala_collection_generic_TraversableFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSeqFactory: 1,
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_Queue$.prototype.$classData = ScalaJS.data.scala_collection_mutable_Queue$;
ScalaJS.moduleInstances.scala_collection_mutable_Queue = undefined;
ScalaJS.modules.scala_collection_mutable_Queue = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_Queue)) {
    ScalaJS.moduleInstances.scala_collection_mutable_Queue = new ScalaJS.c.scala_collection_mutable_Queue$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_Queue
});
//@ sourceMappingURL=Queue$.js.map
