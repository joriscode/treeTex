/** @constructor */
ScalaJS.c.scala_collection_immutable_Vector$ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.call(this);
  this.VectorReusableCBF$5 = null;
  this.ReusableCBF$5 = null;
  this.NIL$5 = null;
  this.bitmap$0$5 = false
});
ScalaJS.c.scala_collection_immutable_Vector$.prototype = new ScalaJS.inheritable.scala_collection_generic_SeqFactory();
ScalaJS.c.scala_collection_immutable_Vector$.prototype.constructor = ScalaJS.c.scala_collection_immutable_Vector$;
ScalaJS.c.scala_collection_immutable_Vector$.prototype.ReusableCBF$lzycompute__p5__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom = (function() {
  if ((!this.bitmap$0$5)) {
    this.ReusableCBF$5 = ScalaJS.modules.scala_collection_IndexedSeq().ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom();
    this.bitmap$0$5 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.ReusableCBF$5
});
ScalaJS.c.scala_collection_immutable_Vector$.prototype.VectorReusableCBF__p5__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom = (function() {
  return this.VectorReusableCBF$5
});
ScalaJS.c.scala_collection_immutable_Vector$.prototype.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom = (function() {
  if ((!this.bitmap$0$5)) {
    return this.ReusableCBF$lzycompute__p5__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
  } else {
    return this.ReusableCBF$5
  }
});
ScalaJS.c.scala_collection_immutable_Vector$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_immutable_VectorBuilder().init___()
});
ScalaJS.c.scala_collection_immutable_Vector$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_immutable_Vector$.prototype.NIL__Lscala_collection_immutable_Vector = (function() {
  return this.NIL$5
});
ScalaJS.c.scala_collection_immutable_Vector$.prototype.empty__Lscala_collection_immutable_Vector = (function() {
  return this.NIL__Lscala_collection_immutable_Vector()
});
ScalaJS.c.scala_collection_immutable_Vector$.prototype.readResolve__p5__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_Vector()
});
ScalaJS.c.scala_collection_immutable_Vector$.prototype.empty__Lscala_collection_GenTraversable = (function() {
  return this.empty__Lscala_collection_immutable_Vector()
});
ScalaJS.c.scala_collection_immutable_Vector$.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_immutable_Vector = this;
  this.VectorReusableCBF$5 = new ScalaJS.c.scala_collection_immutable_Vector$VectorReusableCBF().init___();
  this.NIL$5 = new ScalaJS.c.scala_collection_immutable_Vector().init___I__I__I(0, 0, 0);
  return this
});
ScalaJS.c.scala_collection_immutable_Vector$.prototype.NIL__ = (function() {
  return this.NIL__Lscala_collection_immutable_Vector()
});
ScalaJS.c.scala_collection_immutable_Vector$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Vector$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Vector$.prototype = ScalaJS.c.scala_collection_immutable_Vector$.prototype;
ScalaJS.is.scala_collection_immutable_Vector$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Vector$)))
});
ScalaJS.as.scala_collection_immutable_Vector$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Vector$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Vector")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Vector$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Vector$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Vector$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Vector$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Vector;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Vector$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Vector$: 0
}, false, "scala.collection.immutable.Vector$", ScalaJS.data.scala_collection_generic_SeqFactory, {
  scala_collection_immutable_Vector$: 1,
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
ScalaJS.c.scala_collection_immutable_Vector$.prototype.$classData = ScalaJS.data.scala_collection_immutable_Vector$;
ScalaJS.moduleInstances.scala_collection_immutable_Vector = undefined;
ScalaJS.modules.scala_collection_immutable_Vector = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_Vector)) {
    ScalaJS.moduleInstances.scala_collection_immutable_Vector = new ScalaJS.c.scala_collection_immutable_Vector$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_Vector
});
//@ sourceMappingURL=Vector$.js.map
