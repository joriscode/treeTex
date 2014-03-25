/** @constructor */
ScalaJS.c.scala_collection_mutable_LinkedList$ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_LinkedList$.prototype = new ScalaJS.inheritable.scala_collection_generic_SeqFactory();
ScalaJS.c.scala_collection_mutable_LinkedList$.prototype.constructor = ScalaJS.c.scala_collection_mutable_LinkedList$;
ScalaJS.c.scala_collection_mutable_LinkedList$.prototype.empty__Lscala_collection_mutable_LinkedList = (function() {
  return new ScalaJS.c.scala_collection_mutable_LinkedList().init___()
});
ScalaJS.c.scala_collection_mutable_LinkedList$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_mutable_LinkedList$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_MutableList().init___().mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(l) {
      return l.toLinkedList__Lscala_collection_mutable_LinkedList()
    })
  })()))
});
ScalaJS.c.scala_collection_mutable_LinkedList$.prototype.readResolve__p5__O = (function() {
  return ScalaJS.modules.scala_collection_mutable_LinkedList()
});
ScalaJS.c.scala_collection_mutable_LinkedList$.prototype.empty__Lscala_collection_GenTraversable = (function() {
  return this.empty__Lscala_collection_mutable_LinkedList()
});
ScalaJS.c.scala_collection_mutable_LinkedList$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_LinkedList$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_LinkedList$.prototype = ScalaJS.c.scala_collection_mutable_LinkedList$.prototype;
ScalaJS.is.scala_collection_mutable_LinkedList$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_LinkedList$)))
});
ScalaJS.as.scala_collection_mutable_LinkedList$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_LinkedList$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.LinkedList")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_LinkedList$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_LinkedList$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_LinkedList$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_LinkedList$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.LinkedList;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_LinkedList$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_LinkedList$: 0
}, false, "scala.collection.mutable.LinkedList$", ScalaJS.data.scala_collection_generic_SeqFactory, {
  scala_collection_mutable_LinkedList$: 1,
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
ScalaJS.c.scala_collection_mutable_LinkedList$.prototype.$classData = ScalaJS.data.scala_collection_mutable_LinkedList$;
ScalaJS.moduleInstances.scala_collection_mutable_LinkedList = undefined;
ScalaJS.modules.scala_collection_mutable_LinkedList = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_LinkedList)) {
    ScalaJS.moduleInstances.scala_collection_mutable_LinkedList = new ScalaJS.c.scala_collection_mutable_LinkedList$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_LinkedList
});
//@ sourceMappingURL=LinkedList$.js.map
