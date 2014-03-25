/** @constructor */
ScalaJS.c.scala_collection_mutable_ResizableArray$ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_ResizableArray$.prototype = new ScalaJS.inheritable.scala_collection_generic_SeqFactory();
ScalaJS.c.scala_collection_mutable_ResizableArray$.prototype.constructor = ScalaJS.c.scala_collection_mutable_ResizableArray$;
ScalaJS.c.scala_collection_mutable_ResizableArray$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_mutable_ResizableArray$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuffer().init___()
});
ScalaJS.c.scala_collection_mutable_ResizableArray$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ResizableArray$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ResizableArray$.prototype = ScalaJS.c.scala_collection_mutable_ResizableArray$.prototype;
ScalaJS.is.scala_collection_mutable_ResizableArray$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ResizableArray$)))
});
ScalaJS.as.scala_collection_mutable_ResizableArray$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ResizableArray$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ResizableArray")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ResizableArray$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ResizableArray$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ResizableArray$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ResizableArray$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ResizableArray;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ResizableArray$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ResizableArray$: 0
}, false, "scala.collection.mutable.ResizableArray$", ScalaJS.data.scala_collection_generic_SeqFactory, {
  scala_collection_mutable_ResizableArray$: 1,
  scala_collection_generic_SeqFactory: 1,
  scala_collection_generic_TraversableFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSeqFactory: 1,
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ResizableArray$.prototype.$classData = ScalaJS.data.scala_collection_mutable_ResizableArray$;
ScalaJS.moduleInstances.scala_collection_mutable_ResizableArray = undefined;
ScalaJS.modules.scala_collection_mutable_ResizableArray = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_ResizableArray)) {
    ScalaJS.moduleInstances.scala_collection_mutable_ResizableArray = new ScalaJS.c.scala_collection_mutable_ResizableArray$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_ResizableArray
});
//@ sourceMappingURL=ResizableArray$.js.map
