/** @constructor */
ScalaJS.c.scala_collection_mutable_DoubleLinkedList$ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList$.prototype = new ScalaJS.inheritable.scala_collection_generic_SeqFactory();
ScalaJS.c.scala_collection_mutable_DoubleLinkedList$.prototype.constructor = ScalaJS.c.scala_collection_mutable_DoubleLinkedList$;
ScalaJS.c.scala_collection_mutable_DoubleLinkedList$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_DoubleLinkedList$$anon$1().init___()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList$.prototype.readResolve__p5__O = (function() {
  return ScalaJS.modules.scala_collection_mutable_DoubleLinkedList()
});
ScalaJS.c.scala_collection_mutable_DoubleLinkedList$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_DoubleLinkedList$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_DoubleLinkedList$.prototype = ScalaJS.c.scala_collection_mutable_DoubleLinkedList$.prototype;
ScalaJS.is.scala_collection_mutable_DoubleLinkedList$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_DoubleLinkedList$)))
});
ScalaJS.as.scala_collection_mutable_DoubleLinkedList$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_DoubleLinkedList$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.DoubleLinkedList")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_DoubleLinkedList$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_DoubleLinkedList$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_DoubleLinkedList$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_DoubleLinkedList$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.DoubleLinkedList;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_DoubleLinkedList$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_DoubleLinkedList$: 0
}, false, "scala.collection.mutable.DoubleLinkedList$", ScalaJS.data.scala_collection_generic_SeqFactory, {
  scala_collection_mutable_DoubleLinkedList$: 1,
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
ScalaJS.c.scala_collection_mutable_DoubleLinkedList$.prototype.$classData = ScalaJS.data.scala_collection_mutable_DoubleLinkedList$;
ScalaJS.moduleInstances.scala_collection_mutable_DoubleLinkedList = undefined;
ScalaJS.modules.scala_collection_mutable_DoubleLinkedList = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_DoubleLinkedList)) {
    ScalaJS.moduleInstances.scala_collection_mutable_DoubleLinkedList = new ScalaJS.c.scala_collection_mutable_DoubleLinkedList$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_DoubleLinkedList
});
//@ sourceMappingURL=DoubleLinkedList$.js.map
