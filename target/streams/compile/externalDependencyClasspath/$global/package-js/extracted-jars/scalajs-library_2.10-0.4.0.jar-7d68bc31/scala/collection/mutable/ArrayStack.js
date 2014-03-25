/** @constructor */
ScalaJS.c.scala_collection_mutable_ArrayStack = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractSeq.call(this);
  this.scala$collection$mutable$ArrayStack$$table$5 = null;
  this.scala$collection$mutable$ArrayStack$$index$5 = 0
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractSeq();
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArrayStack;
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.sizeHint__I__V = (function(size) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__I__V(this, size)
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.sizeHint__Lscala_collection_TraversableLike__V = (function(coll) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__V(this, coll)
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.sizeHint__Lscala_collection_TraversableLike__I__V = (function(coll, delta) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__I__V(this, coll, delta)
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__V = (function(size, boundingColl) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHintBounded__Lscala_collection_mutable_Builder__I__Lscala_collection_TraversableLike__V(this, size, boundingColl)
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder = (function(f) {
  return ScalaJS.impls.scala_collection_mutable_Builder$class__mapResult__Lscala_collection_mutable_Builder__Lscala_Function1__Lscala_collection_mutable_Builder(this, f)
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable = (function(elem1, elem2, elems) {
  return ScalaJS.impls.scala_collection_generic_Growable$class__$plus$eq__Lscala_collection_generic_Growable__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(this, elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.scala$collection$mutable$ArrayStack$$table__AO = (function() {
  return this.scala$collection$mutable$ArrayStack$$table$5
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.scala$collection$mutable$ArrayStack$$table$und$eq__p5__AO__V = (function(x$1) {
  this.scala$collection$mutable$ArrayStack$$table$5 = x$1
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.scala$collection$mutable$ArrayStack$$index__I = (function() {
  return this.scala$collection$mutable$ArrayStack$$index$5
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.scala$collection$mutable$ArrayStack$$index$und$eq__p5__I__V = (function(x$1) {
  this.scala$collection$mutable$ArrayStack$$index$5 = x$1
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.apply__I__O = (function(n) {
  return this.scala$collection$mutable$ArrayStack$$table__AO().underlying[((this.scala$collection$mutable$ArrayStack$$index__I() - 1) - n)]
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.length__I = (function() {
  return this.scala$collection$mutable$ArrayStack$$index__I()
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.companion__Lscala_collection_mutable_ArrayStack$ = (function() {
  return ScalaJS.modules.scala_collection_mutable_ArrayStack()
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.update__I__O__V = (function(n, newelem) {
  this.scala$collection$mutable$ArrayStack$$table__AO().underlying[((this.scala$collection$mutable$ArrayStack$$index__I() - 1) - n)] = newelem
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.push__O__V = (function(x) {
  if ((this.scala$collection$mutable$ArrayStack$$index__I() === this.scala$collection$mutable$ArrayStack$$table__AO().underlying.length)) {
    this.scala$collection$mutable$ArrayStack$$table$und$eq__p5__AO__V(ScalaJS.modules.scala_collection_mutable_ArrayStack().growArray__AO__AO(this.scala$collection$mutable$ArrayStack$$table__AO()))
  };
  this.scala$collection$mutable$ArrayStack$$table__AO().underlying[this.scala$collection$mutable$ArrayStack$$index__I()] = x;
  this.scala$collection$mutable$ArrayStack$$index$und$eq__p5__I__V((this.scala$collection$mutable$ArrayStack$$index__I() + 1))
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.pop__O = (function() {
  if ((this.scala$collection$mutable$ArrayStack$$index__I() === 0)) {
    ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("Stack empty")
  };
  this.scala$collection$mutable$ArrayStack$$index$und$eq__p5__I__V((this.scala$collection$mutable$ArrayStack$$index__I() - 1));
  var x = this.scala$collection$mutable$ArrayStack$$table__AO().underlying[this.scala$collection$mutable$ArrayStack$$index__I()];
  this.scala$collection$mutable$ArrayStack$$table__AO().underlying[this.scala$collection$mutable$ArrayStack$$index__I()] = null;
  return x
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.top__O = (function() {
  return this.scala$collection$mutable$ArrayStack$$table__AO().underlying[(this.scala$collection$mutable$ArrayStack$$index__I() - 1)]
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.dup__V = (function() {
  this.push__O__V(this.top__O())
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.clear__V = (function() {
  this.scala$collection$mutable$ArrayStack$$index$und$eq__p5__I__V(0);
  this.scala$collection$mutable$ArrayStack$$table$und$eq__p5__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [1]))
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.drain__Lscala_Function1__V = (function(f) {
  while ((!this.isEmpty__Z())) {
    f.apply__O__O(this.pop__O())
  }
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ArrayStack = (function(xs) {
  xs.seq__Lscala_collection_TraversableOnce().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(x) {
      return arg$outer.$$plus$eq__O__Lscala_collection_mutable_ArrayStack(x)
    })
  })(this)));
  return this
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.$$plus$eq__O__Lscala_collection_mutable_ArrayStack = (function(x) {
  this.push__O__V(x);
  return this
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.result__Lscala_collection_mutable_ArrayStack = (function() {
  this.reverseTable__p5__V();
  return this
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.reverseTable__p5__V = (function() {
  var i = 0;
  var until = ((this.scala$collection$mutable$ArrayStack$$index__I() / 2) | 0);
  while ((i < until)) {
    var revi = ((this.scala$collection$mutable$ArrayStack$$index__I() - i) - 1);
    var tmp = this.scala$collection$mutable$ArrayStack$$table__AO().underlying[i];
    this.scala$collection$mutable$ArrayStack$$table__AO().underlying[i] = this.scala$collection$mutable$ArrayStack$$table__AO().underlying[revi];
    this.scala$collection$mutable$ArrayStack$$table__AO().underlying[revi] = tmp;
    i = (i + 1)
  }
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.combine__Lscala_Function2__V = (function(f) {
  this.push__O__V(f.apply__O__O__O(this.pop__O(), this.pop__O()))
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.reduceWith__Lscala_Function2__V = (function(f) {
  while ((this.size__I() > 1)) {
    this.combine__Lscala_Function2__V(f)
  }
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.size__I = (function() {
  return this.scala$collection$mutable$ArrayStack$$index__I()
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.preserving__Lscala_Function0__O = (function(action) {
  var oldIndex = this.scala$collection$mutable$ArrayStack$$index__I();
  var oldTable = ScalaJS.modules.scala_collection_mutable_ArrayStack().clone__AO__AO(this.scala$collection$mutable$ArrayStack$$table__AO());
  try {
    return action.apply__O()
  } finally {
    this.scala$collection$mutable$ArrayStack$$index$und$eq__p5__I__V(oldIndex);
    this.scala$collection$mutable$ArrayStack$$table$und$eq__p5__AO__V(oldTable)
  }
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.isEmpty__Z = (function() {
  return (this.scala$collection$mutable$ArrayStack$$index__I() === 0)
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.iterator__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_collection_mutable_ArrayStack$$anon$1().init___Lscala_collection_mutable_ArrayStack(this)
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.foreach__Lscala_Function1__V = (function(f) {
  var currentIndex = this.scala$collection$mutable$ArrayStack$$index__I();
  while ((currentIndex > 0)) {
    currentIndex = (currentIndex - 1);
    f.apply__O__O(this.scala$collection$mutable$ArrayStack$$table__AO().underlying[currentIndex])
  }
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.clone__Lscala_collection_mutable_ArrayStack = (function() {
  return new ScalaJS.c.scala_collection_mutable_ArrayStack().init___AO__I(ScalaJS.modules.scala_collection_mutable_ArrayStack().clone__AO__AO(this.scala$collection$mutable$ArrayStack$$table__AO()), this.scala$collection$mutable$ArrayStack$$index__I())
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Seq(repr)
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Seq(repr)
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_mutable_Seq()
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_ArrayStack()
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.result__O = (function() {
  return this.result__Lscala_collection_mutable_ArrayStack()
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_ArrayStack(elem)
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_ArrayStack(elem)
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable = (function(xs) {
  return this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ArrayStack(xs)
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return this.companion__Lscala_collection_mutable_ArrayStack$()
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.init___AO__I = (function(table, index) {
  this.scala$collection$mutable$ArrayStack$$table$5 = table;
  this.scala$collection$mutable$ArrayStack$$index$5 = index;
  ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_generic_Growable$class__$init$__Lscala_collection_generic_Growable__V(this);
  ScalaJS.impls.scala_collection_mutable_Builder$class__$init$__Lscala_collection_mutable_Builder__V(this);
  return this
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.init___AO__I.call(this, ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [1]), 0);
  return this
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.$$plus$eq__O__O__Lscala_collection_Seq__ = (function(elem1, elem2, elems) {
  return this.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.mapResult__Lscala_Function1__ = (function(f) {
  return this.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(f)
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__ = (function(size, boundingColl) {
  return ScalaJS.bV(this.sizeHintBounded__I__Lscala_collection_TraversableLike__V(size, boundingColl))
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.sizeHint__Lscala_collection_TraversableLike__I__ = (function(coll, delta) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__I__V(coll, delta))
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.sizeHint__Lscala_collection_TraversableLike__ = (function(coll$2) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__V(coll$2))
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.sizeHint__I__ = (function(size$2) {
  return ScalaJS.bV(this.sizeHint__I__V(size$2))
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.preserving__Lscala_Function0__ = (function(action) {
  return this.preserving__Lscala_Function0__O(action)
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.reduceWith__Lscala_Function2__ = (function(f$2) {
  return ScalaJS.bV(this.reduceWith__Lscala_Function2__V(f$2))
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.combine__Lscala_Function2__ = (function(f$3) {
  return ScalaJS.bV(this.combine__Lscala_Function2__V(f$3))
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.result__ = (function() {
  return this.result__Lscala_collection_mutable_ArrayStack()
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.$$plus$eq__O__ = (function(x) {
  return this.$$plus$eq__O__Lscala_collection_mutable_ArrayStack(x)
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__ = (function(xs) {
  return this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ArrayStack(xs)
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.drain__Lscala_Function1__ = (function(f$4) {
  return ScalaJS.bV(this.drain__Lscala_Function1__V(f$4))
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.clear__ = (function() {
  return ScalaJS.bV(this.clear__V())
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.dup__ = (function() {
  return ScalaJS.bV(this.dup__V())
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.top__ = (function() {
  return this.top__O()
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.pop__ = (function() {
  return this.pop__O()
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.push__O__ = (function(x$2) {
  return ScalaJS.bV(this.push__O__V(x$2))
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.scala$collection$mutable$ArrayStack$$index__ = (function() {
  return ScalaJS.bI(this.scala$collection$mutable$ArrayStack$$index__I())
});
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.scala$collection$mutable$ArrayStack$$table__ = (function() {
  return this.scala$collection$mutable$ArrayStack$$table__AO()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArrayStack = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArrayStack.prototype = ScalaJS.c.scala_collection_mutable_ArrayStack.prototype;
ScalaJS.is.scala_collection_mutable_ArrayStack = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayStack)))
});
ScalaJS.as.scala_collection_mutable_ArrayStack = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayStack(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayStack")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayStack = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayStack)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayStack = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayStack(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayStack;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayStack = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayStack: 0
}, false, "scala.collection.mutable.ArrayStack", ScalaJS.data.scala_collection_mutable_AbstractSeq, {
  scala_collection_mutable_ArrayStack: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  scala_collection_mutable_AbstractSeq: 1,
  scala_collection_mutable_Seq: 1,
  scala_collection_mutable_SeqLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
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
ScalaJS.c.scala_collection_mutable_ArrayStack.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArrayStack;
//@ sourceMappingURL=ArrayStack.js.map
