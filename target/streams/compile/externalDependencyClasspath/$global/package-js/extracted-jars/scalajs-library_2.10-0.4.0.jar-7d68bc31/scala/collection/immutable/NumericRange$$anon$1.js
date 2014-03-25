/** @constructor */
ScalaJS.c.scala_collection_immutable_NumericRange$$anon$1 = (function() {
  ScalaJS.c.scala_collection_immutable_NumericRange.call(this);
  this.underlyingRange$5 = null;
  this.fm$1$f = null;
  this.unum$1$5 = null;
  this.self$1$5 = null;
  this.bitmap$0$5 = false
});
ScalaJS.c.scala_collection_immutable_NumericRange$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_immutable_NumericRange();
ScalaJS.c.scala_collection_immutable_NumericRange$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_immutable_NumericRange$$anon$1;
ScalaJS.c.scala_collection_immutable_NumericRange$$anon$1.prototype.underlyingRange$lzycompute__p5__Lscala_collection_immutable_NumericRange = (function() {
  if ((!this.bitmap$0$5)) {
    this.underlyingRange$5 = this.self$1$5;
    this.bitmap$0$5 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  this.self$1$5 = null;
  return this.underlyingRange$5
});
ScalaJS.c.scala_collection_immutable_NumericRange$$anon$1.prototype.copy__O__O__O__Lscala_collection_immutable_NumericRange = (function(start, end, step) {
  if (this.isInclusive__Z()) {
    return ScalaJS.modules.scala_collection_immutable_NumericRange().inclusive__O__O__O__Lscala_math_Integral__Lscala_collection_immutable_NumericRange$Inclusive(start, end, step, this.unum$1$5)
  } else {
    return ScalaJS.modules.scala_collection_immutable_NumericRange().apply__O__O__O__Lscala_math_Integral__Lscala_collection_immutable_NumericRange$Exclusive(start, end, step, this.unum$1$5)
  }
});
ScalaJS.c.scala_collection_immutable_NumericRange$$anon$1.prototype.underlyingRange__p5__Lscala_collection_immutable_NumericRange = (function() {
  if ((!this.bitmap$0$5)) {
    return this.underlyingRange$lzycompute__p5__Lscala_collection_immutable_NumericRange()
  } else {
    return this.underlyingRange$5
  }
});
ScalaJS.c.scala_collection_immutable_NumericRange$$anon$1.prototype.foreach__Lscala_Function1__V = (function(f) {
  this.underlyingRange__p5__Lscala_collection_immutable_NumericRange().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, f$1) {
    return (function(x) {
      return f$1.apply__O__O(arg$outer.fm$1$f.apply__O__O(x))
    })
  })(this, f)))
});
ScalaJS.c.scala_collection_immutable_NumericRange$$anon$1.prototype.isEmpty__Z = (function() {
  return this.underlyingRange__p5__Lscala_collection_immutable_NumericRange().isEmpty__Z()
});
ScalaJS.c.scala_collection_immutable_NumericRange$$anon$1.prototype.apply__I__O = (function(idx) {
  return this.fm$1$f.apply__O__O(this.underlyingRange__p5__Lscala_collection_immutable_NumericRange().apply__I__O(idx))
});
ScalaJS.c.scala_collection_immutable_NumericRange$$anon$1.prototype.containsTyped__O__Z = (function(el) {
  return this.underlyingRange__p5__Lscala_collection_immutable_NumericRange().exists__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, el$1) {
    return (function(x) {
      return ScalaJS.bZ(ScalaJS.anyEqEq(arg$outer.fm$1$f.apply__O__O(x), el$1))
    })
  })(this, el)))
});
ScalaJS.c.scala_collection_immutable_NumericRange$$anon$1.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_immutable_NumericRange$$anon$1.prototype.init___Lscala_collection_immutable_NumericRange__Lscala_Function1__Lscala_math_Integral__Lscala_collection_immutable_NumericRange = (function($$outer, fm$1, unum$1, self$1) {
  this.fm$1$f = fm$1;
  this.unum$1$5 = unum$1;
  this.self$1$5 = self$1;
  ScalaJS.c.scala_collection_immutable_NumericRange.prototype.init___O__O__O__Z__Lscala_math_Integral.call(this, fm$1.apply__O__O($$outer.start__O()), fm$1.apply__O__O($$outer.end__O()), fm$1.apply__O__O($$outer.step__O()), $$outer.isInclusive__Z(), unum$1);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_NumericRange$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_NumericRange$$anon$1.prototype = ScalaJS.c.scala_collection_immutable_NumericRange$$anon$1.prototype;
ScalaJS.is.scala_collection_immutable_NumericRange$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_NumericRange$$anon$1)))
});
ScalaJS.as.scala_collection_immutable_NumericRange$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_NumericRange$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.NumericRange$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_NumericRange$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_NumericRange$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_immutable_NumericRange$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_NumericRange$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.NumericRange$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_NumericRange$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_immutable_NumericRange$$anon$1: 0
}, false, "scala.collection.immutable.NumericRange$$anon$1", ScalaJS.data.scala_collection_immutable_NumericRange, {
  scala_collection_immutable_NumericRange$$anon$1: 1,
  scala_collection_immutable_NumericRange: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_immutable_IndexedSeq: 1,
  scala_collection_IndexedSeq: 1,
  scala_collection_IndexedSeqLike: 1,
  scala_collection_immutable_Seq: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
  scala_collection_AbstractSeq: 1,
  scala_collection_Seq: 1,
  scala_collection_SeqLike: 1,
  scala_collection_GenSeq: 1,
  scala_collection_GenSeqLike: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  scala_collection_AbstractIterable: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_AbstractTraversable: 1,
  scala_collection_Traversable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_TraversableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  scala_collection_generic_FilterMonadic: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_NumericRange$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_immutable_NumericRange$$anon$1;
//@ sourceMappingURL=NumericRange$$anon$1.js.map
