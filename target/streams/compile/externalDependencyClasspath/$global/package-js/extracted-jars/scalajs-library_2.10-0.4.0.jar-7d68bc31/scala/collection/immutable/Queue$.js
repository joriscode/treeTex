/** @constructor */
ScalaJS.c.scala_collection_immutable_Queue$ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.call(this)
});
ScalaJS.c.scala_collection_immutable_Queue$.prototype = new ScalaJS.inheritable.scala_collection_generic_SeqFactory();
ScalaJS.c.scala_collection_immutable_Queue$.prototype.constructor = ScalaJS.c.scala_collection_immutable_Queue$;
ScalaJS.c.scala_collection_immutable_Queue$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_immutable_Queue$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_ListBuffer().init___().mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x) {
      return new ScalaJS.c.scala_collection_immutable_Queue().init___Lscala_collection_immutable_List__Lscala_collection_immutable_List(ScalaJS.modules.scala_collection_immutable_Nil(), x.toList__Lscala_collection_immutable_List())
    })
  })()))
});
ScalaJS.c.scala_collection_immutable_Queue$.prototype.empty__Lscala_collection_immutable_Queue = (function() {
  return ScalaJS.modules.scala_collection_immutable_Queue$EmptyQueue()
});
ScalaJS.c.scala_collection_immutable_Queue$.prototype.apply__Lscala_collection_Seq__Lscala_collection_immutable_Queue = (function(xs) {
  return new ScalaJS.c.scala_collection_immutable_Queue().init___Lscala_collection_immutable_List__Lscala_collection_immutable_List(ScalaJS.modules.scala_collection_immutable_Nil(), xs.toList__Lscala_collection_immutable_List())
});
ScalaJS.c.scala_collection_immutable_Queue$.prototype.readResolve__p5__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_Queue()
});
ScalaJS.c.scala_collection_immutable_Queue$.prototype.apply__Lscala_collection_Seq__Lscala_collection_GenTraversable = (function(elems) {
  return this.apply__Lscala_collection_Seq__Lscala_collection_immutable_Queue(elems)
});
ScalaJS.c.scala_collection_immutable_Queue$.prototype.empty__Lscala_collection_GenTraversable = (function() {
  return this.empty__Lscala_collection_immutable_Queue()
});
ScalaJS.c.scala_collection_immutable_Queue$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Queue$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Queue$.prototype = ScalaJS.c.scala_collection_immutable_Queue$.prototype;
ScalaJS.is.scala_collection_immutable_Queue$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Queue$)))
});
ScalaJS.as.scala_collection_immutable_Queue$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Queue$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Queue")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Queue$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Queue$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Queue$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Queue$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Queue;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Queue$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Queue$: 0
}, false, "scala.collection.immutable.Queue$", ScalaJS.data.scala_collection_generic_SeqFactory, {
  scala_collection_immutable_Queue$: 1,
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
ScalaJS.c.scala_collection_immutable_Queue$.prototype.$classData = ScalaJS.data.scala_collection_immutable_Queue$;
ScalaJS.moduleInstances.scala_collection_immutable_Queue = undefined;
ScalaJS.modules.scala_collection_immutable_Queue = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_Queue)) {
    ScalaJS.moduleInstances.scala_collection_immutable_Queue = new ScalaJS.c.scala_collection_immutable_Queue$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_Queue
});
//@ sourceMappingURL=Queue$.js.map
