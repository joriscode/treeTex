/** @constructor */
ScalaJS.c.scala_collection_immutable_Stack = (function() {
  ScalaJS.c.scala_collection_AbstractSeq.call(this);
  this.elems$4 = null
});
ScalaJS.c.scala_collection_immutable_Stack.prototype = new ScalaJS.inheritable.scala_collection_AbstractSeq();
ScalaJS.c.scala_collection_immutable_Stack.prototype.constructor = ScalaJS.c.scala_collection_immutable_Stack;
ScalaJS.c.scala_collection_immutable_Stack.prototype.scala$collection$LinearSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IterableLike$class__sameElements__Lscala_collection_IterableLike__Lscala_collection_GenIterable__Z(this, that)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.length__I = (function() {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__length__Lscala_collection_LinearSeqOptimized__I(this)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.apply__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__apply__Lscala_collection_LinearSeqOptimized__I__O(this, n)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_LinearSeqOptimized$class__foreach__Lscala_collection_LinearSeqOptimized__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.forall__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__forall__Lscala_collection_LinearSeqOptimized__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.exists__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__exists__Lscala_collection_LinearSeqOptimized__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.contains__O__Z = (function(elem) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__contains__Lscala_collection_LinearSeqOptimized__O__Z(this, elem)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.find__Lscala_Function1__Lscala_Option = (function(p) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__find__Lscala_collection_LinearSeqOptimized__Lscala_Function1__Lscala_Option(this, p)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.foldLeft__O__Lscala_Function2__O = (function(z, f) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__foldLeft__Lscala_collection_LinearSeqOptimized__O__Lscala_Function2__O(this, z, f)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.foldRight__O__Lscala_Function2__O = (function(z, f) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__foldRight__Lscala_collection_LinearSeqOptimized__O__Lscala_Function2__O(this, z, f)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.reduceLeft__Lscala_Function2__O = (function(f) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__reduceLeft__Lscala_collection_LinearSeqOptimized__Lscala_Function2__O(this, f)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.reduceRight__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__reduceRight__Lscala_collection_LinearSeqOptimized__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.last__O = (function() {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__last__Lscala_collection_LinearSeqOptimized__O(this)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.take__I__Lscala_collection_LinearSeqOptimized = (function(n) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__take__Lscala_collection_LinearSeqOptimized__I__Lscala_collection_LinearSeqOptimized(this, n)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.drop__I__Lscala_collection_LinearSeqOptimized = (function(n) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__drop__Lscala_collection_LinearSeqOptimized__I__Lscala_collection_LinearSeqOptimized(this, n)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.dropRight__I__Lscala_collection_LinearSeqOptimized = (function(n) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__dropRight__Lscala_collection_LinearSeqOptimized__I__Lscala_collection_LinearSeqOptimized(this, n)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.slice__I__I__Lscala_collection_LinearSeqOptimized = (function(from, until) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__slice__Lscala_collection_LinearSeqOptimized__I__I__Lscala_collection_LinearSeqOptimized(this, from, until)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.takeWhile__Lscala_Function1__Lscala_collection_LinearSeqOptimized = (function(p) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__takeWhile__Lscala_collection_LinearSeqOptimized__Lscala_Function1__Lscala_collection_LinearSeqOptimized(this, p)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.span__Lscala_Function1__Lscala_Tuple2 = (function(p) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__span__Lscala_collection_LinearSeqOptimized__Lscala_Function1__Lscala_Tuple2(this, p)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.sameElements__Lscala_collection_GenIterable__Z = (function(that) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__sameElements__Lscala_collection_LinearSeqOptimized__Lscala_collection_GenIterable__Z(this, that)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.lengthCompare__I__I = (function(len) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__lengthCompare__Lscala_collection_LinearSeqOptimized__I__I(this, len)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.isDefinedAt__I__Z = (function(x) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__isDefinedAt__Lscala_collection_LinearSeqOptimized__I__Z(this, x)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.segmentLength__Lscala_Function1__I__I = (function(p, from) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__segmentLength__Lscala_collection_LinearSeqOptimized__Lscala_Function1__I__I(this, p, from)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.indexWhere__Lscala_Function1__I__I = (function(p, from) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__indexWhere__Lscala_collection_LinearSeqOptimized__Lscala_Function1__I__I(this, p, from)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.lastIndexWhere__Lscala_Function1__I__I = (function(p, end) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__lastIndexWhere__Lscala_collection_LinearSeqOptimized__Lscala_Function1__I__I(this, p, end)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.seq__Lscala_collection_immutable_LinearSeq = (function() {
  return ScalaJS.impls.scala_collection_immutable_LinearSeq$class__seq__Lscala_collection_immutable_LinearSeq__Lscala_collection_immutable_LinearSeq(this)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.thisCollection__Lscala_collection_LinearSeq = (function() {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__thisCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(this)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq = (function(repr) {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(this, repr)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__hashCode__Lscala_collection_LinearSeqLike__I(this)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.corresponds__Lscala_collection_GenSeq__Lscala_Function2__Z = (function(that, p) {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__corresponds__Lscala_collection_LinearSeqLike__Lscala_collection_GenSeq__Lscala_Function2__Z(this, that, p)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.toSeq__Lscala_collection_immutable_Seq = (function() {
  return ScalaJS.impls.scala_collection_immutable_Seq$class__toSeq__Lscala_collection_immutable_Seq__Lscala_collection_immutable_Seq(this)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_immutable_Seq$class__parCombiner__Lscala_collection_immutable_Seq__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.elems__Lscala_collection_immutable_List = (function() {
  return this.elems$4
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.modules.scala_collection_immutable_Stack()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.isEmpty__Z = (function() {
  return this.elems__Lscala_collection_immutable_List().isEmpty__Z()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.head__O = (function() {
  return this.elems__Lscala_collection_immutable_List().head__O()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.tail__Lscala_collection_immutable_Stack = (function() {
  return new ScalaJS.c.scala_collection_immutable_Stack().init___Lscala_collection_immutable_List(ScalaJS.as.scala_collection_immutable_List(this.elems__Lscala_collection_immutable_List().tail__O()))
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.push__O__Lscala_collection_immutable_Stack = (function(elem) {
  var jsx$2 = new ScalaJS.c.scala_collection_immutable_Stack();
  var x$1 = elem;
  var jsx$1 = this.elems__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(x$1);
  return jsx$2.init___Lscala_collection_immutable_List(jsx$1)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.push__O__O__Lscala_collection_Seq__Lscala_collection_immutable_Stack = (function(elem1, elem2, elems) {
  return this.push__O__Lscala_collection_immutable_Stack(elem1).push__O__Lscala_collection_immutable_Stack(elem2).pushAll__Lscala_collection_TraversableOnce__Lscala_collection_immutable_Stack(elems)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.pushAll__Lscala_collection_TraversableOnce__Lscala_collection_immutable_Stack = (function(xs) {
  var x$2 = this;
  return ScalaJS.as.scala_collection_immutable_Stack(xs.toIterator__Lscala_collection_Iterator().$$div$colon__O__Lscala_Function2__O(x$2, new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(x$3, x$4) {
      return x$3.push__O__Lscala_collection_immutable_Stack(x$4)
    })
  })())))
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.top__O = (function() {
  if ((!this.isEmpty__Z())) {
    return this.elems__Lscala_collection_immutable_List().head__O()
  } else {
    throw new ScalaJS.c.java_util_NoSuchElementException().init___T("top of empty stack")
  }
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.pop__Lscala_collection_immutable_Stack = (function() {
  if ((!this.isEmpty__Z())) {
    return new ScalaJS.c.scala_collection_immutable_Stack().init___Lscala_collection_immutable_List(ScalaJS.as.scala_collection_immutable_List(this.elems__Lscala_collection_immutable_List().tail__O()))
  } else {
    throw new ScalaJS.c.java_util_NoSuchElementException().init___T("pop of empty stack")
  }
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.pop2__Lscala_Tuple2 = (function() {
  if ((!this.isEmpty__Z())) {
    return new ScalaJS.c.scala_Tuple2().init___O__O(this.elems__Lscala_collection_immutable_List().head__O(), new ScalaJS.c.scala_collection_immutable_Stack().init___Lscala_collection_immutable_List(ScalaJS.as.scala_collection_immutable_List(this.elems__Lscala_collection_immutable_List().tail__O())))
  } else {
    throw new ScalaJS.c.java_util_NoSuchElementException().init___T("pop of empty stack")
  }
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.reverse__Lscala_collection_immutable_Stack = (function() {
  return new ScalaJS.c.scala_collection_immutable_Stack().init___Lscala_collection_immutable_List(this.elems__Lscala_collection_immutable_List().reverse__Lscala_collection_immutable_List())
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.iterator__Lscala_collection_Iterator = (function() {
  return this.elems__Lscala_collection_immutable_List().iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.toString__T = (function() {
  return this.elems__Lscala_collection_immutable_List().mkString__T__T__T__T("Stack(", ", ", ")")
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.toSeq__Lscala_collection_Seq = (function() {
  return this.toSeq__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(ScalaJS.as.scala_collection_LinearSeqLike(repr))
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(ScalaJS.as.scala_collection_LinearSeqLike(repr))
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.toCollection__O__Lscala_collection_Seq = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(ScalaJS.as.scala_collection_LinearSeqLike(repr))
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.thisCollection__Lscala_collection_Seq = (function() {
  return this.thisCollection__Lscala_collection_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.seq__Lscala_collection_immutable_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.seq__Lscala_collection_immutable_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.seq__Lscala_collection_immutable_Seq = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.seq__Lscala_collection_LinearSeq = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.takeWhile__Lscala_Function1__O = (function(p) {
  return this.takeWhile__Lscala_Function1__Lscala_collection_LinearSeqOptimized(p)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.slice__I__I__O = (function(from, until) {
  return this.slice__I__I__Lscala_collection_LinearSeqOptimized(from, until)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.dropRight__I__O = (function(n) {
  return this.dropRight__I__Lscala_collection_LinearSeqOptimized(n)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.drop__I__O = (function(n) {
  return this.drop__I__Lscala_collection_LinearSeqOptimized(n)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.take__I__O = (function(n) {
  return this.take__I__Lscala_collection_LinearSeqOptimized(n)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.reverse__O = (function() {
  return this.reverse__Lscala_collection_immutable_Stack()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.tail__Lscala_collection_LinearSeqOptimized = (function() {
  return this.tail__Lscala_collection_immutable_Stack()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.tail__O = (function() {
  return this.tail__Lscala_collection_immutable_Stack()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.init___Lscala_collection_immutable_List = (function(elems) {
  this.elems$4 = elems;
  ScalaJS.c.scala_collection_AbstractSeq.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_immutable_Traversable$class__$init$__Lscala_collection_immutable_Traversable__V(this);
  ScalaJS.impls.scala_collection_immutable_Iterable$class__$init$__Lscala_collection_immutable_Iterable__V(this);
  ScalaJS.impls.scala_collection_immutable_Seq$class__$init$__Lscala_collection_immutable_Seq__V(this);
  ScalaJS.impls.scala_collection_LinearSeqLike$class__$init$__Lscala_collection_LinearSeqLike__V(this);
  ScalaJS.impls.scala_collection_LinearSeq$class__$init$__Lscala_collection_LinearSeq__V(this);
  ScalaJS.impls.scala_collection_immutable_LinearSeq$class__$init$__Lscala_collection_immutable_LinearSeq__V(this);
  ScalaJS.impls.scala_collection_LinearSeqOptimized$class__$init$__Lscala_collection_LinearSeqOptimized__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_immutable_Stack.prototype.init___Lscala_collection_immutable_List.call(this, ScalaJS.modules.scala_collection_immutable_Nil());
  return this
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.toCollection__Lscala_collection_LinearSeqLike__ = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(repr)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.scala$collection$LinearSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__ = (function(that) {
  return ScalaJS.bZ(this.scala$collection$LinearSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__Z(that))
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.pop2__ = (function() {
  return this.pop2__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.pop__ = (function() {
  return this.pop__Lscala_collection_immutable_Stack()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.top__ = (function() {
  return this.top__O()
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.pushAll__Lscala_collection_TraversableOnce__ = (function(xs) {
  return this.pushAll__Lscala_collection_TraversableOnce__Lscala_collection_immutable_Stack(xs)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.push__O__O__Lscala_collection_Seq__ = (function(elem1, elem2, elems) {
  return this.push__O__O__Lscala_collection_Seq__Lscala_collection_immutable_Stack(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.push__O__ = (function(elem) {
  return this.push__O__Lscala_collection_immutable_Stack(elem)
});
ScalaJS.c.scala_collection_immutable_Stack.prototype.elems__ = (function() {
  return this.elems__Lscala_collection_immutable_List()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Stack = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Stack.prototype = ScalaJS.c.scala_collection_immutable_Stack.prototype;
ScalaJS.is.scala_collection_immutable_Stack = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Stack)))
});
ScalaJS.as.scala_collection_immutable_Stack = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Stack(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Stack")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Stack = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Stack)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Stack = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Stack(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Stack;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Stack = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Stack: 0
}, false, "scala.collection.immutable.Stack", ScalaJS.data.scala_collection_AbstractSeq, {
  scala_collection_immutable_Stack: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_LinearSeqOptimized: 1,
  scala_collection_immutable_LinearSeq: 1,
  scala_collection_LinearSeq: 1,
  scala_collection_LinearSeqLike: 1,
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
ScalaJS.c.scala_collection_immutable_Stack.prototype.$classData = ScalaJS.data.scala_collection_immutable_Stack;
//@ sourceMappingURL=Stack.js.map
