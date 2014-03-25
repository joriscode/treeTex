/** @constructor */
ScalaJS.c.scala_collection_mutable_Stack$ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.call(this);
  this.empty$5 = null
});
ScalaJS.c.scala_collection_mutable_Stack$.prototype = new ScalaJS.inheritable.scala_collection_generic_SeqFactory();
ScalaJS.c.scala_collection_mutable_Stack$.prototype.constructor = ScalaJS.c.scala_collection_mutable_Stack$;
ScalaJS.c.scala_collection_mutable_Stack$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_mutable_Stack$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_Stack$StackBuilder().init___()
});
ScalaJS.c.scala_collection_mutable_Stack$.prototype.empty__Lscala_collection_mutable_Stack = (function() {
  return this.empty$5
});
ScalaJS.c.scala_collection_mutable_Stack$.prototype.readResolve__p5__O = (function() {
  return ScalaJS.modules.scala_collection_mutable_Stack()
});
ScalaJS.c.scala_collection_mutable_Stack$.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_mutable_Stack = this;
  this.empty$5 = new ScalaJS.c.scala_collection_mutable_Stack().init___Lscala_collection_immutable_List(ScalaJS.modules.scala_collection_immutable_Nil());
  return this
});
ScalaJS.c.scala_collection_mutable_Stack$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_Stack$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_Stack$.prototype = ScalaJS.c.scala_collection_mutable_Stack$.prototype;
ScalaJS.is.scala_collection_mutable_Stack$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_Stack$)))
});
ScalaJS.as.scala_collection_mutable_Stack$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_Stack$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.Stack")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_Stack$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_Stack$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_Stack$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_Stack$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.Stack;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_Stack$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_Stack$: 0
}, false, "scala.collection.mutable.Stack$", ScalaJS.data.scala_collection_generic_SeqFactory, {
  scala_collection_mutable_Stack$: 1,
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
ScalaJS.c.scala_collection_mutable_Stack$.prototype.$classData = ScalaJS.data.scala_collection_mutable_Stack$;
ScalaJS.moduleInstances.scala_collection_mutable_Stack = undefined;
ScalaJS.modules.scala_collection_mutable_Stack = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_Stack)) {
    ScalaJS.moduleInstances.scala_collection_mutable_Stack = new ScalaJS.c.scala_collection_mutable_Stack$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_Stack
});
//@ sourceMappingURL=Stack$.js.map
