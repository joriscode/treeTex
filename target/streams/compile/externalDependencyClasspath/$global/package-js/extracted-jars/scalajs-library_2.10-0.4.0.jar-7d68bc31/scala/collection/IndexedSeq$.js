/** @constructor */
ScalaJS.c.scala_collection_IndexedSeq$ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.call(this);
  this.ReusableCBF$5 = null;
  this.bitmap$0$5 = false
});
ScalaJS.c.scala_collection_IndexedSeq$.prototype = new ScalaJS.inheritable.scala_collection_generic_SeqFactory();
ScalaJS.c.scala_collection_IndexedSeq$.prototype.constructor = ScalaJS.c.scala_collection_IndexedSeq$;
ScalaJS.c.scala_collection_IndexedSeq$.prototype.ReusableCBF$lzycompute__p5__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom = (function() {
  if ((!this.bitmap$0$5)) {
    this.ReusableCBF$5 = new ScalaJS.c.scala_collection_IndexedSeq$$anon$1().init___();
    this.bitmap$0$5 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.ReusableCBF$5
});
ScalaJS.c.scala_collection_IndexedSeq$.prototype.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom = (function() {
  if ((!this.bitmap$0$5)) {
    return this.ReusableCBF$lzycompute__p5__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
  } else {
    return this.ReusableCBF$5
  }
});
ScalaJS.c.scala_collection_IndexedSeq$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.modules.scala_collection_immutable_IndexedSeq().newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_IndexedSeq$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_IndexedSeq$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_IndexedSeq$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_IndexedSeq$.prototype = ScalaJS.c.scala_collection_IndexedSeq$.prototype;
ScalaJS.is.scala_collection_IndexedSeq$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_IndexedSeq$)))
});
ScalaJS.as.scala_collection_IndexedSeq$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_IndexedSeq$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.IndexedSeq")
  }
});
ScalaJS.isArrayOf.scala_collection_IndexedSeq$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_IndexedSeq$)))
});
ScalaJS.asArrayOf.scala_collection_IndexedSeq$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_IndexedSeq$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth)
  }
});
ScalaJS.data.scala_collection_IndexedSeq$ = new ScalaJS.ClassTypeData({
  scala_collection_IndexedSeq$: 0
}, false, "scala.collection.IndexedSeq$", ScalaJS.data.scala_collection_generic_SeqFactory, {
  scala_collection_IndexedSeq$: 1,
  scala_collection_generic_SeqFactory: 1,
  scala_collection_generic_TraversableFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSeqFactory: 1,
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_IndexedSeq$.prototype.$classData = ScalaJS.data.scala_collection_IndexedSeq$;
ScalaJS.moduleInstances.scala_collection_IndexedSeq = undefined;
ScalaJS.modules.scala_collection_IndexedSeq = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_IndexedSeq)) {
    ScalaJS.moduleInstances.scala_collection_IndexedSeq = new ScalaJS.c.scala_collection_IndexedSeq$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_IndexedSeq
});
//@ sourceMappingURL=IndexedSeq$.js.map
