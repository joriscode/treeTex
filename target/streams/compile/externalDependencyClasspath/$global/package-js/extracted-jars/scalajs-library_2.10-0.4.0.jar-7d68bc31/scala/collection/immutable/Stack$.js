/** @constructor */
ScalaJS.c.scala_collection_immutable_Stack$ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.call(this)
});
ScalaJS.c.scala_collection_immutable_Stack$.prototype = new ScalaJS.inheritable.scala_collection_generic_SeqFactory();
ScalaJS.c.scala_collection_immutable_Stack$.prototype.constructor = ScalaJS.c.scala_collection_immutable_Stack$;
ScalaJS.c.scala_collection_immutable_Stack$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_immutable_Stack$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuffer().init___().mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(buf) {
      return new ScalaJS.c.scala_collection_immutable_Stack().init___Lscala_collection_immutable_List(buf.toList__Lscala_collection_immutable_List())
    })
  })()))
});
ScalaJS.c.scala_collection_immutable_Stack$.prototype.readResolve__p5__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_Stack()
});
ScalaJS.c.scala_collection_immutable_Stack$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Stack$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Stack$.prototype = ScalaJS.c.scala_collection_immutable_Stack$.prototype;
ScalaJS.is.scala_collection_immutable_Stack$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Stack$)))
});
ScalaJS.as.scala_collection_immutable_Stack$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Stack$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Stack")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Stack$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Stack$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Stack$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Stack$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Stack;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Stack$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Stack$: 0
}, false, "scala.collection.immutable.Stack$", ScalaJS.data.scala_collection_generic_SeqFactory, {
  scala_collection_immutable_Stack$: 1,
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
ScalaJS.c.scala_collection_immutable_Stack$.prototype.$classData = ScalaJS.data.scala_collection_immutable_Stack$;
ScalaJS.moduleInstances.scala_collection_immutable_Stack = undefined;
ScalaJS.modules.scala_collection_immutable_Stack = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_Stack)) {
    ScalaJS.moduleInstances.scala_collection_immutable_Stack = new ScalaJS.c.scala_collection_immutable_Stack$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_Stack
});
//@ sourceMappingURL=Stack$.js.map
