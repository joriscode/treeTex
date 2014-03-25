/** @constructor */
ScalaJS.c.scala_collection_immutable_List = (function() {
  ScalaJS.c.scala_collection_AbstractSeq.call(this)
});
ScalaJS.c.scala_collection_immutable_List.prototype = new ScalaJS.inheritable.scala_collection_AbstractSeq();
ScalaJS.c.scala_collection_immutable_List.prototype.constructor = ScalaJS.c.scala_collection_immutable_List;
ScalaJS.c.scala_collection_immutable_List.prototype.scala$collection$LinearSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IterableLike$class__sameElements__Lscala_collection_IterableLike__Lscala_collection_GenIterable__Z(this, that)
});
ScalaJS.c.scala_collection_immutable_List.prototype.length__I = (function() {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__length__Lscala_collection_LinearSeqOptimized__I(this)
});
ScalaJS.c.scala_collection_immutable_List.prototype.apply__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__apply__Lscala_collection_LinearSeqOptimized__I__O(this, n)
});
ScalaJS.c.scala_collection_immutable_List.prototype.forall__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__forall__Lscala_collection_LinearSeqOptimized__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_immutable_List.prototype.exists__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__exists__Lscala_collection_LinearSeqOptimized__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_immutable_List.prototype.contains__O__Z = (function(elem) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__contains__Lscala_collection_LinearSeqOptimized__O__Z(this, elem)
});
ScalaJS.c.scala_collection_immutable_List.prototype.find__Lscala_Function1__Lscala_Option = (function(p) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__find__Lscala_collection_LinearSeqOptimized__Lscala_Function1__Lscala_Option(this, p)
});
ScalaJS.c.scala_collection_immutable_List.prototype.foldLeft__O__Lscala_Function2__O = (function(z, f) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__foldLeft__Lscala_collection_LinearSeqOptimized__O__Lscala_Function2__O(this, z, f)
});
ScalaJS.c.scala_collection_immutable_List.prototype.reduceLeft__Lscala_Function2__O = (function(f) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__reduceLeft__Lscala_collection_LinearSeqOptimized__Lscala_Function2__O(this, f)
});
ScalaJS.c.scala_collection_immutable_List.prototype.reduceRight__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__reduceRight__Lscala_collection_LinearSeqOptimized__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_immutable_List.prototype.last__O = (function() {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__last__Lscala_collection_LinearSeqOptimized__O(this)
});
ScalaJS.c.scala_collection_immutable_List.prototype.dropRight__I__Lscala_collection_LinearSeqOptimized = (function(n) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__dropRight__Lscala_collection_LinearSeqOptimized__I__Lscala_collection_LinearSeqOptimized(this, n)
});
ScalaJS.c.scala_collection_immutable_List.prototype.sameElements__Lscala_collection_GenIterable__Z = (function(that) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__sameElements__Lscala_collection_LinearSeqOptimized__Lscala_collection_GenIterable__Z(this, that)
});
ScalaJS.c.scala_collection_immutable_List.prototype.lengthCompare__I__I = (function(len) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__lengthCompare__Lscala_collection_LinearSeqOptimized__I__I(this, len)
});
ScalaJS.c.scala_collection_immutable_List.prototype.isDefinedAt__I__Z = (function(x) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__isDefinedAt__Lscala_collection_LinearSeqOptimized__I__Z(this, x)
});
ScalaJS.c.scala_collection_immutable_List.prototype.segmentLength__Lscala_Function1__I__I = (function(p, from) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__segmentLength__Lscala_collection_LinearSeqOptimized__Lscala_Function1__I__I(this, p, from)
});
ScalaJS.c.scala_collection_immutable_List.prototype.indexWhere__Lscala_Function1__I__I = (function(p, from) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__indexWhere__Lscala_collection_LinearSeqOptimized__Lscala_Function1__I__I(this, p, from)
});
ScalaJS.c.scala_collection_immutable_List.prototype.lastIndexWhere__Lscala_Function1__I__I = (function(p, end) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__lastIndexWhere__Lscala_collection_LinearSeqOptimized__Lscala_Function1__I__I(this, p, end)
});
ScalaJS.c.scala_collection_immutable_List.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_Product$class__productIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_List.prototype.productPrefix__T = (function() {
  return ScalaJS.impls.scala_Product$class__productPrefix__Lscala_Product__T(this)
});
ScalaJS.c.scala_collection_immutable_List.prototype.seq__Lscala_collection_immutable_LinearSeq = (function() {
  return ScalaJS.impls.scala_collection_immutable_LinearSeq$class__seq__Lscala_collection_immutable_LinearSeq__Lscala_collection_immutable_LinearSeq(this)
});
ScalaJS.c.scala_collection_immutable_List.prototype.thisCollection__Lscala_collection_LinearSeq = (function() {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__thisCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(this)
});
ScalaJS.c.scala_collection_immutable_List.prototype.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq = (function(repr) {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(this, repr)
});
ScalaJS.c.scala_collection_immutable_List.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__hashCode__Lscala_collection_LinearSeqLike__I(this)
});
ScalaJS.c.scala_collection_immutable_List.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__iterator__Lscala_collection_LinearSeqLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_List.prototype.corresponds__Lscala_collection_GenSeq__Lscala_Function2__Z = (function(that, p) {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__corresponds__Lscala_collection_LinearSeqLike__Lscala_collection_GenSeq__Lscala_Function2__Z(this, that, p)
});
ScalaJS.c.scala_collection_immutable_List.prototype.toSeq__Lscala_collection_immutable_Seq = (function() {
  return ScalaJS.impls.scala_collection_immutable_Seq$class__toSeq__Lscala_collection_immutable_Seq__Lscala_collection_immutable_Seq(this)
});
ScalaJS.c.scala_collection_immutable_List.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_immutable_Seq$class__parCombiner__Lscala_collection_immutable_Seq__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_immutable_List.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.modules.scala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_List.prototype.$$colon$colon__O__Lscala_collection_immutable_List = (function(x) {
  return new ScalaJS.c.scala_collection_immutable_$colon$colon().init___O__Lscala_collection_immutable_List(x, this)
});
ScalaJS.c.scala_collection_immutable_List.prototype.$$colon$colon$colon__Lscala_collection_immutable_List__Lscala_collection_immutable_List = (function(prefix) {
  if (this.isEmpty__Z()) {
    return prefix
  } else {
    if (prefix.isEmpty__Z()) {
      return this
    } else {
      return new ScalaJS.c.scala_collection_mutable_ListBuffer().init___().$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ListBuffer(prefix).prependToList__Lscala_collection_immutable_List__Lscala_collection_immutable_List(this)
    }
  }
});
ScalaJS.c.scala_collection_immutable_List.prototype.reverse$und$colon$colon$colon__Lscala_collection_immutable_List__Lscala_collection_immutable_List = (function(prefix) {
  var these = this;
  var pres = prefix;
  while ((!pres.isEmpty__Z())) {
    var x$1 = pres.head__O();
    these = these.$$colon$colon__O__Lscala_collection_immutable_List(x$1);
    pres = ScalaJS.as.scala_collection_immutable_List(pres.tail__O())
  };
  return these
});
ScalaJS.c.scala_collection_immutable_List.prototype.mapConserve__Lscala_Function1__Lscala_collection_immutable_List = (function(f) {
  return this.loop$1__p4__Lscala_collection_mutable_ListBuffer__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lscala_Function1__Lscala_collection_immutable_List(null, this, this, f)
});
ScalaJS.c.scala_collection_immutable_List.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  var b = bf.apply__O__Lscala_collection_mutable_Builder(this);
  if (ScalaJS.is.scala_collection_mutable_ListBuffer(b)) {
    var x$2 = this;
    return that.seq__Lscala_collection_TraversableOnce().toList__Lscala_collection_immutable_List().$$colon$colon$colon__Lscala_collection_immutable_List__Lscala_collection_immutable_List(x$2)
  } else {
    return ScalaJS.impls.scala_collection_TraversableLike$class__$plus$plus__Lscala_collection_TraversableLike__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
  }
});
ScalaJS.c.scala_collection_immutable_List.prototype.$$plus$colon__O__Lscala_collection_generic_CanBuildFrom__O = (function(elem, bf) {
  var x1 = bf;
  if (ScalaJS.is.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom(x1)) {
    var x$3 = elem;
    return this.$$colon$colon__O__Lscala_collection_immutable_List(x$3)
  };
  return ScalaJS.impls.scala_collection_SeqLike$class__$plus$colon__Lscala_collection_SeqLike__O__Lscala_collection_generic_CanBuildFrom__O(this, elem, bf)
});
ScalaJS.c.scala_collection_immutable_List.prototype.toList__Lscala_collection_immutable_List = (function() {
  return this
});
ScalaJS.c.scala_collection_immutable_List.prototype.take__I__Lscala_collection_immutable_List = (function(n) {
  var b = new ScalaJS.c.scala_collection_mutable_ListBuffer().init___();
  var i = 0;
  var these = this;
  while (((!these.isEmpty__Z()) && (i < n))) {
    i = (i + 1);
    b.$$plus$eq__O__Lscala_collection_mutable_ListBuffer(these.head__O());
    these = ScalaJS.as.scala_collection_immutable_List(these.tail__O())
  };
  if (these.isEmpty__Z()) {
    return this
  } else {
    return b.toList__Lscala_collection_immutable_List()
  }
});
ScalaJS.c.scala_collection_immutable_List.prototype.drop__I__Lscala_collection_immutable_List = (function(n) {
  var these = this;
  var count = n;
  while (((!these.isEmpty__Z()) && (count > 0))) {
    these = ScalaJS.as.scala_collection_immutable_List(these.tail__O());
    count = (count - 1)
  };
  return these
});
ScalaJS.c.scala_collection_immutable_List.prototype.slice__I__I__Lscala_collection_immutable_List = (function(from, until) {
  var lo = ScalaJS.modules.scala_math_package().max__I__I__I(from, 0);
  if (((until <= lo) || this.isEmpty__Z())) {
    return ScalaJS.modules.scala_collection_immutable_Nil()
  } else {
    return this.drop__I__Lscala_collection_immutable_List(lo).take__I__Lscala_collection_immutable_List((until - lo))
  }
});
ScalaJS.c.scala_collection_immutable_List.prototype.takeRight__I__Lscala_collection_immutable_List = (function(n) {
  return this.loop$2__p4__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lscala_collection_immutable_List(this.drop__I__Lscala_collection_immutable_List(n), this)
});
ScalaJS.c.scala_collection_immutable_List.prototype.splitAt__I__Lscala_Tuple2 = (function(n) {
  var b = new ScalaJS.c.scala_collection_mutable_ListBuffer().init___();
  var i = 0;
  var these = this;
  while (((!these.isEmpty__Z()) && (i < n))) {
    i = (i + 1);
    b.$$plus$eq__O__Lscala_collection_mutable_ListBuffer(these.head__O());
    these = ScalaJS.as.scala_collection_immutable_List(these.tail__O())
  };
  return new ScalaJS.c.scala_Tuple2().init___O__O(b.toList__Lscala_collection_immutable_List(), these)
});
ScalaJS.c.scala_collection_immutable_List.prototype.takeWhile__Lscala_Function1__Lscala_collection_immutable_List = (function(p) {
  var b = new ScalaJS.c.scala_collection_mutable_ListBuffer().init___();
  var these = this;
  while (((!these.isEmpty__Z()) && ScalaJS.uZ(p.apply__O__O(these.head__O())))) {
    b.$$plus$eq__O__Lscala_collection_mutable_ListBuffer(these.head__O());
    these = ScalaJS.as.scala_collection_immutable_List(these.tail__O())
  };
  return b.toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_List.prototype.dropWhile__Lscala_Function1__Lscala_collection_immutable_List = (function(p) {
  return this.loop$3__p4__Lscala_collection_immutable_List__Lscala_Function1__Lscala_collection_immutable_List(this, p)
});
ScalaJS.c.scala_collection_immutable_List.prototype.span__Lscala_Function1__Lscala_Tuple2 = (function(p) {
  var b = new ScalaJS.c.scala_collection_mutable_ListBuffer().init___();
  var these = this;
  while (((!these.isEmpty__Z()) && ScalaJS.uZ(p.apply__O__O(these.head__O())))) {
    b.$$plus$eq__O__Lscala_collection_mutable_ListBuffer(these.head__O());
    these = ScalaJS.as.scala_collection_immutable_List(these.tail__O())
  };
  return new ScalaJS.c.scala_Tuple2().init___O__O(b.toList__Lscala_collection_immutable_List(), these)
});
ScalaJS.c.scala_collection_immutable_List.prototype.reverse__Lscala_collection_immutable_List = (function() {
  var result = ScalaJS.modules.scala_collection_immutable_Nil();
  var these = this;
  while ((!these.isEmpty__Z())) {
    var x$4 = these.head__O();
    result = result.$$colon$colon__O__Lscala_collection_immutable_List(x$4);
    these = ScalaJS.as.scala_collection_immutable_List(these.tail__O())
  };
  return result
});
ScalaJS.c.scala_collection_immutable_List.prototype.foldRight__O__Lscala_Function2__O = (function(z, op) {
  return this.reverse__Lscala_collection_immutable_List().foldLeft__O__Lscala_Function2__O(z, new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(op$1) {
    return (function(right, left) {
      return op$1.apply__O__O__O(left, right)
    })
  })(op)))
});
ScalaJS.c.scala_collection_immutable_List.prototype.stringPrefix__T = (function() {
  return "List"
});
ScalaJS.c.scala_collection_immutable_List.prototype.toStream__Lscala_collection_immutable_Stream = (function() {
  if (this.isEmpty__Z()) {
    return ScalaJS.modules.scala_collection_immutable_Stream$Empty()
  } else {
    return new ScalaJS.c.scala_collection_immutable_Stream$Cons().init___O__Lscala_Function0(this.head__O(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
      return (function() {
        return ScalaJS.as.scala_collection_immutable_List(arg$outer.tail__O()).toStream__Lscala_collection_immutable_Stream()
      })
    })(this)))
  }
});
ScalaJS.c.scala_collection_immutable_List.prototype.foreach__Lscala_Function1__V = (function(f) {
  var these = this;
  while ((!these.isEmpty__Z())) {
    f.apply__O__O(these.head__O());
    these = ScalaJS.as.scala_collection_immutable_List(these.tail__O())
  }
});
ScalaJS.c.scala_collection_immutable_List.prototype.removeDuplicates__Lscala_collection_immutable_List = (function() {
  return ScalaJS.as.scala_collection_immutable_List(this.distinct__O())
});
ScalaJS.c.scala_collection_immutable_List.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_List.prototype.tail__Lscala_collection_LinearSeqOptimized = (function() {
  return ScalaJS.as.scala_collection_LinearSeqOptimized(this.tail__O())
});
ScalaJS.c.scala_collection_immutable_List.prototype.tail__Lscala_collection_immutable_List = (function() {
  return ScalaJS.as.scala_collection_immutable_List(this.tail__O())
});
ScalaJS.c.scala_collection_immutable_List.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_List.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_List.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_immutable_List.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_immutable_List.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_immutable_List.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_immutable_List.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_collection_immutable_List.prototype.toSeq__Lscala_collection_Seq = (function() {
  return this.toSeq__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_collection_immutable_List.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(ScalaJS.as.scala_collection_LinearSeqLike(repr))
});
ScalaJS.c.scala_collection_immutable_List.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(ScalaJS.as.scala_collection_LinearSeqLike(repr))
});
ScalaJS.c.scala_collection_immutable_List.prototype.toCollection__O__Lscala_collection_Seq = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(ScalaJS.as.scala_collection_LinearSeqLike(repr))
});
ScalaJS.c.scala_collection_immutable_List.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_List.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_List.prototype.thisCollection__Lscala_collection_Seq = (function() {
  return this.thisCollection__Lscala_collection_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_List.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_List.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_List.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_List.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_List.prototype.seq__Lscala_collection_immutable_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_List.prototype.seq__Lscala_collection_immutable_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_List.prototype.seq__Lscala_collection_immutable_Seq = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_List.prototype.seq__Lscala_collection_LinearSeq = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_List.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_immutable_List.prototype.dropRight__I__O = (function(n) {
  return this.dropRight__I__Lscala_collection_LinearSeqOptimized(n)
});
ScalaJS.c.scala_collection_immutable_List.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_immutable_List.prototype.reverse__O = (function() {
  return this.reverse__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_List.prototype.dropWhile__Lscala_Function1__O = (function(p) {
  return this.dropWhile__Lscala_Function1__Lscala_collection_immutable_List(p)
});
ScalaJS.c.scala_collection_immutable_List.prototype.takeWhile__Lscala_Function1__O = (function(p) {
  return this.takeWhile__Lscala_Function1__Lscala_collection_immutable_List(p)
});
ScalaJS.c.scala_collection_immutable_List.prototype.takeWhile__Lscala_Function1__Lscala_collection_LinearSeqOptimized = (function(p) {
  return this.takeWhile__Lscala_Function1__Lscala_collection_immutable_List(p)
});
ScalaJS.c.scala_collection_immutable_List.prototype.takeRight__I__O = (function(n) {
  return this.takeRight__I__Lscala_collection_immutable_List(n)
});
ScalaJS.c.scala_collection_immutable_List.prototype.slice__I__I__O = (function(from, until) {
  return this.slice__I__I__Lscala_collection_immutable_List(from, until)
});
ScalaJS.c.scala_collection_immutable_List.prototype.slice__I__I__Lscala_collection_LinearSeqOptimized = (function(from, until) {
  return this.slice__I__I__Lscala_collection_immutable_List(from, until)
});
ScalaJS.c.scala_collection_immutable_List.prototype.drop__I__O = (function(n) {
  return this.drop__I__Lscala_collection_immutable_List(n)
});
ScalaJS.c.scala_collection_immutable_List.prototype.drop__I__Lscala_collection_LinearSeqOptimized = (function(n) {
  return this.drop__I__Lscala_collection_immutable_List(n)
});
ScalaJS.c.scala_collection_immutable_List.prototype.take__I__O = (function(n) {
  return this.take__I__Lscala_collection_immutable_List(n)
});
ScalaJS.c.scala_collection_immutable_List.prototype.take__I__Lscala_collection_LinearSeqOptimized = (function(n) {
  return this.take__I__Lscala_collection_immutable_List(n)
});
ScalaJS.c.scala_collection_immutable_List.prototype.loop$1__p4__Lscala_collection_mutable_ListBuffer__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lscala_Function1__Lscala_collection_immutable_List = (function(mapped, unchanged, pending, f$1) {
  var _$this = this;
  tailCallLoop: while (true) {
    if (pending.isEmpty__Z()) {
      if ((mapped === null)) {
        return unchanged
      } else {
        return mapped.prependToList__Lscala_collection_immutable_List__Lscala_collection_immutable_List(unchanged)
      }
    } else {
      var head0 = pending.head__O();
      var head1 = f$1.apply__O__O(head0);
      if ((head1 === head0)) {
        pending = ScalaJS.as.scala_collection_immutable_List(pending.tail__O());
        continue tailCallLoop
      } else {
        if ((mapped === null)) {
          var b = new ScalaJS.c.scala_collection_mutable_ListBuffer().init___()
        } else {
          var b = mapped
        };
        var xc = unchanged;
        while ((xc !== pending)) {
          b.$$plus$eq__O__Lscala_collection_mutable_ListBuffer(xc.head__O());
          xc = ScalaJS.as.scala_collection_immutable_List(xc.tail__O())
        };
        b.$$plus$eq__O__Lscala_collection_mutable_ListBuffer(head1);
        var tail0 = ScalaJS.as.scala_collection_immutable_List(pending.tail__O());
        var temp$mapped = b;
        var temp$unchanged = tail0;
        var temp$pending = tail0;
        mapped = temp$mapped;
        unchanged = temp$unchanged;
        pending = temp$pending;
        continue tailCallLoop
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_List.prototype.loop$2__p4__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lscala_collection_immutable_List = (function(lead, lag) {
  var _$this = this;
  tailCallLoop: while (true) {
    var x1 = lead;
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_Nil(), x1)) {
      return lag
    };
    if (ScalaJS.is.scala_collection_immutable_$colon$colon(x1)) {
      var x3 = ScalaJS.as.scala_collection_immutable_$colon$colon(x1);
      var tail = x3.tl$1__Lscala_collection_immutable_List();
      var temp$lead = tail;
      var temp$lag = ScalaJS.as.scala_collection_immutable_List(lag.tail__O());
      lead = temp$lead;
      lag = temp$lag;
      continue tailCallLoop
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  }
});
ScalaJS.c.scala_collection_immutable_List.prototype.loop$3__p4__Lscala_collection_immutable_List__Lscala_Function1__Lscala_collection_immutable_List = (function(xs, p$1) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((xs.isEmpty__Z() || (!ScalaJS.uZ(p$1.apply__O__O(xs.head__O()))))) {
      return xs
    } else {
      xs = ScalaJS.as.scala_collection_immutable_List(xs.tail__O());
      continue tailCallLoop
    }
  }
});
ScalaJS.c.scala_collection_immutable_List.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_AbstractSeq.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_immutable_Traversable$class__$init$__Lscala_collection_immutable_Traversable__V(this);
  ScalaJS.impls.scala_collection_immutable_Iterable$class__$init$__Lscala_collection_immutable_Iterable__V(this);
  ScalaJS.impls.scala_collection_immutable_Seq$class__$init$__Lscala_collection_immutable_Seq__V(this);
  ScalaJS.impls.scala_collection_LinearSeqLike$class__$init$__Lscala_collection_LinearSeqLike__V(this);
  ScalaJS.impls.scala_collection_LinearSeq$class__$init$__Lscala_collection_LinearSeq__V(this);
  ScalaJS.impls.scala_collection_immutable_LinearSeq$class__$init$__Lscala_collection_immutable_LinearSeq__V(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  ScalaJS.impls.scala_collection_LinearSeqOptimized$class__$init$__Lscala_collection_LinearSeqOptimized__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_List.prototype.toCollection__Lscala_collection_LinearSeqLike__ = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(repr)
});
ScalaJS.c.scala_collection_immutable_List.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_immutable_List.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_List.prototype.scala$collection$LinearSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__ = (function(that) {
  return ScalaJS.bZ(this.scala$collection$LinearSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__Z(that))
});
ScalaJS.c.scala_collection_immutable_List.prototype.removeDuplicates__ = (function() {
  return this.removeDuplicates__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_List.prototype.mapConserve__Lscala_Function1__ = (function(f) {
  return this.mapConserve__Lscala_Function1__Lscala_collection_immutable_List(f)
});
ScalaJS.c.scala_collection_immutable_List.prototype.reverse$und$colon$colon$colon__Lscala_collection_immutable_List__ = (function(prefix) {
  return this.reverse$und$colon$colon$colon__Lscala_collection_immutable_List__Lscala_collection_immutable_List(prefix)
});
ScalaJS.c.scala_collection_immutable_List.prototype.$$colon$colon$colon__Lscala_collection_immutable_List__ = (function(prefix$2) {
  return this.$$colon$colon$colon__Lscala_collection_immutable_List__Lscala_collection_immutable_List(prefix$2)
});
ScalaJS.c.scala_collection_immutable_List.prototype.$$colon$colon__O__ = (function(x) {
  return this.$$colon$colon__O__Lscala_collection_immutable_List(x)
});
ScalaJS.c.scala_collection_immutable_List.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_immutable_List.prototype.productElement__I__ = (function(n) {
  return this.productElement__I__O(n)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_List = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_List.prototype = ScalaJS.c.scala_collection_immutable_List.prototype;
ScalaJS.is.scala_collection_immutable_List = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_List)))
});
ScalaJS.as.scala_collection_immutable_List = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_List(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.List")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_List = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_List)))
});
ScalaJS.asArrayOf.scala_collection_immutable_List = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_List(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_List = new ScalaJS.ClassTypeData({
  scala_collection_immutable_List: 0
}, false, "scala.collection.immutable.List", ScalaJS.data.scala_collection_AbstractSeq, {
  scala_collection_immutable_List: 1,
  scala_collection_LinearSeqOptimized: 1,
  scala_Product: 1,
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
ScalaJS.c.scala_collection_immutable_List.prototype.$classData = ScalaJS.data.scala_collection_immutable_List;
//@ sourceMappingURL=List.js.map
