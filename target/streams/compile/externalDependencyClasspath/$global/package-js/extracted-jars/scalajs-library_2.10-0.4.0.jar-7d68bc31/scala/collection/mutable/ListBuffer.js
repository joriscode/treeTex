/** @constructor */
ScalaJS.c.scala_collection_mutable_ListBuffer = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractBuffer.call(this);
  this.scala$collection$mutable$ListBuffer$$start$6 = null;
  this.last0$6 = null;
  this.exported$6 = false;
  this.len$6 = 0
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractBuffer();
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.constructor = ScalaJS.c.scala_collection_mutable_ListBuffer;
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.lengthCompare__I__I = (function(len) {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__lengthCompare__Lscala_collection_generic_SeqForwarder__I__I(this, len)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.isDefinedAt__I__Z = (function(x) {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__isDefinedAt__Lscala_collection_generic_SeqForwarder__I__Z(this, x)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.segmentLength__Lscala_Function1__I__I = (function(p, from) {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__segmentLength__Lscala_collection_generic_SeqForwarder__Lscala_Function1__I__I(this, p, from)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.prefixLength__Lscala_Function1__I = (function(p) {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__prefixLength__Lscala_collection_generic_SeqForwarder__Lscala_Function1__I(this, p)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.indexWhere__Lscala_Function1__I = (function(p) {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__indexWhere__Lscala_collection_generic_SeqForwarder__Lscala_Function1__I(this, p)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.indexWhere__Lscala_Function1__I__I = (function(p, from) {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__indexWhere__Lscala_collection_generic_SeqForwarder__Lscala_Function1__I__I(this, p, from)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.indexOf__O__I = (function(elem) {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__indexOf__Lscala_collection_generic_SeqForwarder__O__I(this, elem)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.indexOf__O__I__I = (function(elem, from) {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__indexOf__Lscala_collection_generic_SeqForwarder__O__I__I(this, elem, from)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.lastIndexOf__O__I = (function(elem) {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__lastIndexOf__Lscala_collection_generic_SeqForwarder__O__I(this, elem)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.lastIndexOf__O__I__I = (function(elem, end) {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__lastIndexOf__Lscala_collection_generic_SeqForwarder__O__I__I(this, elem, end)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.lastIndexWhere__Lscala_Function1__I = (function(p) {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__lastIndexWhere__Lscala_collection_generic_SeqForwarder__Lscala_Function1__I(this, p)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.lastIndexWhere__Lscala_Function1__I__I = (function(p, end) {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__lastIndexWhere__Lscala_collection_generic_SeqForwarder__Lscala_Function1__I__I(this, p, end)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.reverseIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__reverseIterator__Lscala_collection_generic_SeqForwarder__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.startsWith__Lscala_collection_GenSeq__I__Z = (function(that, offset) {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__startsWith__Lscala_collection_generic_SeqForwarder__Lscala_collection_GenSeq__I__Z(this, that, offset)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.startsWith__Lscala_collection_GenSeq__Z = (function(that) {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__startsWith__Lscala_collection_generic_SeqForwarder__Lscala_collection_GenSeq__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.endsWith__Lscala_collection_GenSeq__Z = (function(that) {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__endsWith__Lscala_collection_generic_SeqForwarder__Lscala_collection_GenSeq__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.indexOfSlice__Lscala_collection_GenSeq__I = (function(that) {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__indexOfSlice__Lscala_collection_generic_SeqForwarder__Lscala_collection_GenSeq__I(this, that)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.indexOfSlice__Lscala_collection_GenSeq__I__I = (function(that, from) {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__indexOfSlice__Lscala_collection_generic_SeqForwarder__Lscala_collection_GenSeq__I__I(this, that, from)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.lastIndexOfSlice__Lscala_collection_GenSeq__I = (function(that) {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__lastIndexOfSlice__Lscala_collection_generic_SeqForwarder__Lscala_collection_GenSeq__I(this, that)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.lastIndexOfSlice__Lscala_collection_GenSeq__I__I = (function(that, end) {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__lastIndexOfSlice__Lscala_collection_generic_SeqForwarder__Lscala_collection_GenSeq__I__I(this, that, end)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.containsSlice__Lscala_collection_GenSeq__Z = (function(that) {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__containsSlice__Lscala_collection_generic_SeqForwarder__Lscala_collection_GenSeq__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.contains__O__Z = (function(elem) {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__contains__Lscala_collection_generic_SeqForwarder__O__Z(this, elem)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.corresponds__Lscala_collection_GenSeq__Lscala_Function2__Z = (function(that, p) {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__corresponds__Lscala_collection_generic_SeqForwarder__Lscala_collection_GenSeq__Lscala_Function2__Z(this, that, p)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.indices__Lscala_collection_immutable_Range = (function() {
  return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__indices__Lscala_collection_generic_SeqForwarder__Lscala_collection_immutable_Range(this)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.sameElements__Lscala_collection_GenIterable__Z = (function(that) {
  return ScalaJS.impls.scala_collection_generic_IterableForwarder$class__sameElements__Lscala_collection_generic_IterableForwarder__Lscala_collection_GenIterable__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__foreach__Lscala_collection_generic_TraversableForwarder__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.isEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__isEmpty__Lscala_collection_generic_TraversableForwarder__Z(this)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.nonEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__nonEmpty__Lscala_collection_generic_TraversableForwarder__Z(this)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.hasDefiniteSize__Z = (function() {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__hasDefiniteSize__Lscala_collection_generic_TraversableForwarder__Z(this)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.forall__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__forall__Lscala_collection_generic_TraversableForwarder__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.exists__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__exists__Lscala_collection_generic_TraversableForwarder__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.count__Lscala_Function1__I = (function(p) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__count__Lscala_collection_generic_TraversableForwarder__Lscala_Function1__I(this, p)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.find__Lscala_Function1__Lscala_Option = (function(p) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__find__Lscala_collection_generic_TraversableForwarder__Lscala_Function1__Lscala_Option(this, p)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.foldLeft__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__foldLeft__Lscala_collection_generic_TraversableForwarder__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.$$div$colon__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__$div$colon__Lscala_collection_generic_TraversableForwarder__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.foldRight__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__foldRight__Lscala_collection_generic_TraversableForwarder__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.$$colon$bslash__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__$colon$bslash__Lscala_collection_generic_TraversableForwarder__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.reduceLeft__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__reduceLeft__Lscala_collection_generic_TraversableForwarder__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.reduceLeftOption__Lscala_Function2__Lscala_Option = (function(op) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__reduceLeftOption__Lscala_collection_generic_TraversableForwarder__Lscala_Function2__Lscala_Option(this, op)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.reduceRight__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__reduceRight__Lscala_collection_generic_TraversableForwarder__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.reduceRightOption__Lscala_Function2__Lscala_Option = (function(op) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__reduceRightOption__Lscala_collection_generic_TraversableForwarder__Lscala_Function2__Lscala_Option(this, op)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.sum__Lscala_math_Numeric__O = (function(num) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__sum__Lscala_collection_generic_TraversableForwarder__Lscala_math_Numeric__O(this, num)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.product__Lscala_math_Numeric__O = (function(num) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__product__Lscala_collection_generic_TraversableForwarder__Lscala_math_Numeric__O(this, num)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.min__Lscala_math_Ordering__O = (function(cmp) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__min__Lscala_collection_generic_TraversableForwarder__Lscala_math_Ordering__O(this, cmp)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.max__Lscala_math_Ordering__O = (function(cmp) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__max__Lscala_collection_generic_TraversableForwarder__Lscala_math_Ordering__O(this, cmp)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.head__O = (function() {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__head__Lscala_collection_generic_TraversableForwarder__O(this)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.headOption__Lscala_Option = (function() {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__headOption__Lscala_collection_generic_TraversableForwarder__Lscala_Option(this)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.last__O = (function() {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__last__Lscala_collection_generic_TraversableForwarder__O(this)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.lastOption__Lscala_Option = (function() {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__lastOption__Lscala_collection_generic_TraversableForwarder__Lscala_Option(this)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.copyToBuffer__Lscala_collection_mutable_Buffer__V = (function(dest) {
  ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__copyToBuffer__Lscala_collection_generic_TraversableForwarder__Lscala_collection_mutable_Buffer__V(this, dest)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__copyToArray__Lscala_collection_generic_TraversableForwarder__O__I__I__V(this, xs, start, len)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.copyToArray__O__I__V = (function(xs, start) {
  ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__copyToArray__Lscala_collection_generic_TraversableForwarder__O__I__V(this, xs, start)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.copyToArray__O__V = (function(xs) {
  ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__copyToArray__Lscala_collection_generic_TraversableForwarder__O__V(this, xs)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.toArray__Lscala_reflect_ClassTag__O = (function(evidence$1) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__toArray__Lscala_collection_generic_TraversableForwarder__Lscala_reflect_ClassTag__O(this, evidence$1)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.toIterable__Lscala_collection_Iterable = (function() {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__toIterable__Lscala_collection_generic_TraversableForwarder__Lscala_collection_Iterable(this)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.toSeq__Lscala_collection_Seq = (function() {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__toSeq__Lscala_collection_generic_TraversableForwarder__Lscala_collection_Seq(this)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.toIndexedSeq__Lscala_collection_immutable_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__toIndexedSeq__Lscala_collection_generic_TraversableForwarder__Lscala_collection_immutable_IndexedSeq(this)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.toBuffer__Lscala_collection_mutable_Buffer = (function() {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__toBuffer__Lscala_collection_generic_TraversableForwarder__Lscala_collection_mutable_Buffer(this)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.toStream__Lscala_collection_immutable_Stream = (function() {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__toStream__Lscala_collection_generic_TraversableForwarder__Lscala_collection_immutable_Stream(this)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.toSet__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__toSet__Lscala_collection_generic_TraversableForwarder__Lscala_collection_immutable_Set(this)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map = (function(ev) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__toMap__Lscala_collection_generic_TraversableForwarder__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(this, ev)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__mkString__Lscala_collection_generic_TraversableForwarder__T__T__T__T(this, start, sep, end)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.mkString__T__T = (function(sep) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__mkString__Lscala_collection_generic_TraversableForwarder__T__T(this, sep)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.mkString__T = (function() {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__mkString__Lscala_collection_generic_TraversableForwarder__T(this)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.addString__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder = (function(b, start, sep, end) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__addString__Lscala_collection_generic_TraversableForwarder__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder(this, b, start, sep, end)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.addString__Lscala_collection_mutable_StringBuilder__T__Lscala_collection_mutable_StringBuilder = (function(b, sep) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__addString__Lscala_collection_generic_TraversableForwarder__Lscala_collection_mutable_StringBuilder__T__Lscala_collection_mutable_StringBuilder(this, b, sep)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.addString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(b) {
  return ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__addString__Lscala_collection_generic_TraversableForwarder__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(this, b)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.sizeHint__I__V = (function(size) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__I__V(this, size)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.sizeHint__Lscala_collection_TraversableLike__V = (function(coll) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__V(this, coll)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.sizeHint__Lscala_collection_TraversableLike__I__V = (function(coll, delta) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__I__V(this, coll, delta)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__V = (function(size, boundingColl) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHintBounded__Lscala_collection_mutable_Builder__I__Lscala_collection_TraversableLike__V(this, size, boundingColl)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder = (function(f) {
  return ScalaJS.impls.scala_collection_mutable_Builder$class__mapResult__Lscala_collection_mutable_Builder__Lscala_Function1__Lscala_collection_mutable_Builder(this, f)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.modules.scala_collection_mutable_ListBuffer()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List = (function() {
  return this.scala$collection$mutable$ListBuffer$$start$6
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.scala$collection$mutable$ListBuffer$$start$und$eq__p6__Lscala_collection_immutable_List__V = (function(x$1) {
  this.scala$collection$mutable$ListBuffer$$start$6 = x$1
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.last0__p6__Lscala_collection_immutable_$colon$colon = (function() {
  return this.last0$6
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.last0$und$eq__p6__Lscala_collection_immutable_$colon$colon__V = (function(x$1) {
  this.last0$6 = x$1
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.exported__p6__Z = (function() {
  return this.exported$6
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.exported$und$eq__p6__Z__V = (function(x$1) {
  this.exported$6 = x$1
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.len__p6__I = (function() {
  return this.len$6
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.len$und$eq__p6__I__V = (function(x$1) {
  this.len$6 = x$1
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.underlying__Lscala_collection_immutable_Seq = (function() {
  return this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.writeObject__p6__Ljava_io_ObjectOutputStream__V = (function(out) {
  var xs = this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List();
  while ((!xs.isEmpty__Z())) {
    out.writeObject__O__V(xs.head__O());
    xs = ScalaJS.as.scala_collection_immutable_List(xs.tail__O())
  };
  out.writeObject__O__V(ScalaJS.modules.scala_collection_immutable_ListSerializeEnd());
  out.writeBoolean__Z__V(this.exported__p6__Z());
  out.writeInt__I__V(this.len__p6__I())
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.readObject__p6__Ljava_io_ObjectInputStream__V = (function(in$2) {
  var elem = in$2.readObject__O();
  if (ScalaJS.anyRefEqEq(elem, ScalaJS.modules.scala_collection_immutable_ListSerializeEnd())) {
    this.scala$collection$mutable$ListBuffer$$start$und$eq__p6__Lscala_collection_immutable_List__V(ScalaJS.modules.scala_collection_immutable_Nil());
    this.last0$und$eq__p6__Lscala_collection_immutable_$colon$colon__V(null);
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  } else {
    var current = new ScalaJS.c.scala_collection_immutable_$colon$colon().init___O__Lscala_collection_immutable_List(elem, ScalaJS.modules.scala_collection_immutable_Nil());
    this.scala$collection$mutable$ListBuffer$$start$und$eq__p6__Lscala_collection_immutable_List__V(current);
    elem = in$2.readObject__O();
    while ((!ScalaJS.anyRefEqEq(elem, ScalaJS.modules.scala_collection_immutable_ListSerializeEnd()))) {
      var list = new ScalaJS.c.scala_collection_immutable_$colon$colon().init___O__Lscala_collection_immutable_List(elem, ScalaJS.modules.scala_collection_immutable_Nil());
      current.tl$und$eq__Lscala_collection_immutable_List__V(list);
      current = list;
      elem = in$2.readObject__O()
    };
    this.last0$und$eq__p6__Lscala_collection_immutable_$colon$colon__V(current);
    this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List()
  };
  this.exported$und$eq__p6__Z__V(in$2.readBoolean__Z());
  this.len$und$eq__p6__I__V(in$2.readInt__I())
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.length__I = (function() {
  return this.len__p6__I()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.size__I = (function() {
  return this.length__I()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.apply__I__O = (function(n) {
  if (((n < 0) || (n >= this.len__p6__I()))) {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(n)))
  } else {
    return ScalaJS.impls.scala_collection_generic_SeqForwarder$class__apply__Lscala_collection_generic_SeqForwarder__I__O(this, n)
  }
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.update__I__O__V = (function(n, x) {
  if (((n < 0) || (n >= this.len__p6__I()))) {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(n)))
  };
  if (this.exported__p6__Z()) {
    this.copy__p6__V()
  };
  if ((n === 0)) {
    var newElem = new ScalaJS.c.scala_collection_immutable_$colon$colon().init___O__Lscala_collection_immutable_List(x, ScalaJS.as.scala_collection_immutable_List(this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List().tail__O()));
    if ((this.last0__p6__Lscala_collection_immutable_$colon$colon() === this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List())) {
      this.last0$und$eq__p6__Lscala_collection_immutable_$colon$colon__V(newElem)
    };
    this.scala$collection$mutable$ListBuffer$$start$und$eq__p6__Lscala_collection_immutable_List__V(newElem)
  } else {
    var cursor = this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List();
    var i = 1;
    while ((i < n)) {
      cursor = ScalaJS.as.scala_collection_immutable_List(cursor.tail__O());
      i = (i + 1)
    };
    var newElem$2 = new ScalaJS.c.scala_collection_immutable_$colon$colon().init___O__Lscala_collection_immutable_List(x, ScalaJS.as.scala_collection_immutable_List(ScalaJS.as.scala_collection_TraversableLike(cursor.tail__O()).tail__O()));
    if ((this.last0__p6__Lscala_collection_immutable_$colon$colon() === cursor.tail__O())) {
      this.last0$und$eq__p6__Lscala_collection_immutable_$colon$colon__V(newElem$2)
    };
    ScalaJS.as.scala_collection_immutable_$colon$colon(cursor).tl$und$eq__Lscala_collection_immutable_List__V(newElem$2)
  }
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.$$plus$eq__O__Lscala_collection_mutable_ListBuffer = (function(x) {
  if (this.exported__p6__Z()) {
    this.copy__p6__V()
  };
  if (this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List().isEmpty__Z()) {
    this.last0$und$eq__p6__Lscala_collection_immutable_$colon$colon__V(new ScalaJS.c.scala_collection_immutable_$colon$colon().init___O__Lscala_collection_immutable_List(x, ScalaJS.modules.scala_collection_immutable_Nil()));
    this.scala$collection$mutable$ListBuffer$$start$und$eq__p6__Lscala_collection_immutable_List__V(this.last0__p6__Lscala_collection_immutable_$colon$colon())
  } else {
    var last1 = this.last0__p6__Lscala_collection_immutable_$colon$colon();
    this.last0$und$eq__p6__Lscala_collection_immutable_$colon$colon__V(new ScalaJS.c.scala_collection_immutable_$colon$colon().init___O__Lscala_collection_immutable_List(x, ScalaJS.modules.scala_collection_immutable_Nil()));
    last1.tl$und$eq__Lscala_collection_immutable_List__V(this.last0__p6__Lscala_collection_immutable_$colon$colon())
  };
  this.len$und$eq__p6__I__V((this.len__p6__I() + 1));
  return this
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ListBuffer = (function(xs) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((xs === _$this)) {
      xs = ScalaJS.as.scala_collection_TraversableOnce(_$this.take__I__O(_$this.size__I()));
      continue tailCallLoop
    } else {
      return ScalaJS.as.scala_collection_mutable_ListBuffer(ScalaJS.impls.scala_collection_generic_Growable$class__$plus$plus$eq__Lscala_collection_generic_Growable__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(_$this, xs))
    }
  }
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.$$plus$plus$eq$colon__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ListBuffer = (function(xs) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((xs === _$this)) {
      xs = ScalaJS.as.scala_collection_TraversableOnce(_$this.take__I__O(_$this.size__I()));
      continue tailCallLoop
    } else {
      return ScalaJS.as.scala_collection_mutable_ListBuffer(ScalaJS.impls.scala_collection_mutable_BufferLike$class__$plus$plus$eq$colon__Lscala_collection_mutable_Buffer__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Buffer(_$this, xs))
    }
  }
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.clear__V = (function() {
  this.scala$collection$mutable$ListBuffer$$start$und$eq__p6__Lscala_collection_immutable_List__V(ScalaJS.modules.scala_collection_immutable_Nil());
  this.exported$und$eq__p6__Z__V(false);
  this.len$und$eq__p6__I__V(0)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.$$plus$eq$colon__O__Lscala_collection_mutable_ListBuffer = (function(x) {
  if (this.exported__p6__Z()) {
    this.copy__p6__V()
  };
  var newElem = new ScalaJS.c.scala_collection_immutable_$colon$colon().init___O__Lscala_collection_immutable_List(x, this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List());
  if (this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List().isEmpty__Z()) {
    this.last0$und$eq__p6__Lscala_collection_immutable_$colon$colon__V(newElem)
  };
  this.scala$collection$mutable$ListBuffer$$start$und$eq__p6__Lscala_collection_immutable_List__V(newElem);
  this.len$und$eq__p6__I__V((this.len__p6__I() + 1));
  return this
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.insertAll__I__Lscala_collection_Traversable__V = (function(n, seq) {
  if (((n < 0) || (n > this.len__p6__I()))) {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(n)))
  };
  if (this.exported__p6__Z()) {
    this.copy__p6__V()
  };
  var elems = seq.toList__Lscala_collection_immutable_List().reverse__Lscala_collection_immutable_List();
  this.len$und$eq__p6__I__V((this.len__p6__I() + elems.length__I()));
  if ((n === 0)) {
    while ((!elems.isEmpty__Z())) {
      var newElem = new ScalaJS.c.scala_collection_immutable_$colon$colon().init___O__Lscala_collection_immutable_List(elems.head__O(), this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List());
      if (this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List().isEmpty__Z()) {
        this.last0$und$eq__p6__Lscala_collection_immutable_$colon$colon__V(newElem)
      };
      this.scala$collection$mutable$ListBuffer$$start$und$eq__p6__Lscala_collection_immutable_List__V(newElem);
      elems = ScalaJS.as.scala_collection_immutable_List(elems.tail__O())
    }
  } else {
    var cursor = this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List();
    var i = 1;
    while ((i < n)) {
      cursor = ScalaJS.as.scala_collection_immutable_List(cursor.tail__O());
      i = (i + 1)
    };
    while ((!elems.isEmpty__Z())) {
      var newElem$2 = new ScalaJS.c.scala_collection_immutable_$colon$colon().init___O__Lscala_collection_immutable_List(elems.head__O(), ScalaJS.as.scala_collection_immutable_List(cursor.tail__O()));
      if (ScalaJS.as.scala_collection_SeqLike(cursor.tail__O()).isEmpty__Z()) {
        this.last0$und$eq__p6__Lscala_collection_immutable_$colon$colon__V(newElem$2)
      };
      ScalaJS.as.scala_collection_immutable_$colon$colon(cursor).tl$und$eq__Lscala_collection_immutable_List__V(newElem$2);
      elems = ScalaJS.as.scala_collection_immutable_List(elems.tail__O())
    }
  }
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.remove__I__I__V = (function(n, count) {
  if ((n >= this.len__p6__I())) {
    return undefined
  };
  if ((count < 0)) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T(new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["removing negative number (", ") of elements"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.bI(count)]))))
  };
  if (this.exported__p6__Z()) {
    this.copy__p6__V()
  };
  var n1 = ScalaJS.modules.scala_runtime_RichInt().max$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(n), 0);
  var count1 = ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(count), (this.len__p6__I() - n1));
  var old = this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List().head__O();
  if ((n1 === 0)) {
    var c = count1;
    while ((c > 0)) {
      this.scala$collection$mutable$ListBuffer$$start$und$eq__p6__Lscala_collection_immutable_List__V(ScalaJS.as.scala_collection_immutable_List(this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List().tail__O()));
      c = (c - 1)
    }
  } else {
    var cursor = this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List();
    var i = 1;
    while ((i < n1)) {
      cursor = ScalaJS.as.scala_collection_immutable_List(cursor.tail__O());
      i = (i + 1)
    };
    var c$2 = count1;
    while ((c$2 > 0)) {
      if ((this.last0__p6__Lscala_collection_immutable_$colon$colon() === cursor.tail__O())) {
        this.last0$und$eq__p6__Lscala_collection_immutable_$colon$colon__V(ScalaJS.as.scala_collection_immutable_$colon$colon(cursor))
      };
      ScalaJS.as.scala_collection_immutable_$colon$colon(cursor).tl$und$eq__Lscala_collection_immutable_List__V(ScalaJS.as.scala_collection_immutable_List(ScalaJS.as.scala_collection_TraversableLike(cursor.tail__O()).tail__O()));
      c$2 = (c$2 - 1)
    }
  };
  this.len$und$eq__p6__I__V((this.len__p6__I() - count1))
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.result__Lscala_collection_immutable_List = (function() {
  return this.toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.toList__Lscala_collection_immutable_List = (function() {
  this.exported$und$eq__p6__Z__V((!this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List().isEmpty__Z()));
  return this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.prependToList__Lscala_collection_immutable_List__Lscala_collection_immutable_List = (function(xs) {
  if (this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List().isEmpty__Z()) {
    return xs
  } else {
    if (this.exported__p6__Z()) {
      this.copy__p6__V()
    };
    this.last0__p6__Lscala_collection_immutable_$colon$colon().tl$und$eq__Lscala_collection_immutable_List__V(xs);
    return this.toList__Lscala_collection_immutable_List()
  }
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.remove__I__O = (function(n) {
  if (((n < 0) || (n >= this.len__p6__I()))) {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(n)))
  };
  if (this.exported__p6__Z()) {
    this.copy__p6__V()
  };
  var old = this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List().head__O();
  if ((n === 0)) {
    this.scala$collection$mutable$ListBuffer$$start$und$eq__p6__Lscala_collection_immutable_List__V(ScalaJS.as.scala_collection_immutable_List(this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List().tail__O()))
  } else {
    var cursor = this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List();
    var i = 1;
    while ((i < n)) {
      cursor = ScalaJS.as.scala_collection_immutable_List(cursor.tail__O());
      i = (i + 1)
    };
    old = ScalaJS.as.scala_collection_IterableLike(cursor.tail__O()).head__O();
    if ((this.last0__p6__Lscala_collection_immutable_$colon$colon() === cursor.tail__O())) {
      this.last0$und$eq__p6__Lscala_collection_immutable_$colon$colon__V(ScalaJS.as.scala_collection_immutable_$colon$colon(cursor))
    };
    ScalaJS.as.scala_collection_immutable_$colon$colon(cursor).tl$und$eq__Lscala_collection_immutable_List__V(ScalaJS.as.scala_collection_immutable_List(ScalaJS.as.scala_collection_TraversableLike(cursor.tail__O()).tail__O()))
  };
  this.len$und$eq__p6__I__V((this.len__p6__I() - 1));
  return old
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.$$minus$eq__O__Lscala_collection_mutable_ListBuffer = (function(elem) {
  if (this.exported__p6__Z()) {
    this.copy__p6__V()
  };
  if (this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List().isEmpty__Z()) {
    /*<skip>*/
  } else {
    if (ScalaJS.anyEqEq(this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List().head__O(), elem)) {
      this.scala$collection$mutable$ListBuffer$$start$und$eq__p6__Lscala_collection_immutable_List__V(ScalaJS.as.scala_collection_immutable_List(this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List().tail__O()));
      this.len$und$eq__p6__I__V((this.len__p6__I() - 1))
    } else {
      var cursor = this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List();
      while (((!ScalaJS.as.scala_collection_SeqLike(cursor.tail__O()).isEmpty__Z()) && (!ScalaJS.anyEqEq(ScalaJS.as.scala_collection_IterableLike(cursor.tail__O()).head__O(), elem)))) {
        cursor = ScalaJS.as.scala_collection_immutable_List(cursor.tail__O())
      };
      if ((!ScalaJS.as.scala_collection_SeqLike(cursor.tail__O()).isEmpty__Z())) {
        var z = ScalaJS.as.scala_collection_immutable_$colon$colon(cursor);
        if (ScalaJS.anyRefEqEq(z.tl__Lscala_collection_immutable_List(), this.last0__p6__Lscala_collection_immutable_$colon$colon())) {
          this.last0$und$eq__p6__Lscala_collection_immutable_$colon$colon__V(z)
        };
        z.tl$und$eq__Lscala_collection_immutable_List__V(ScalaJS.as.scala_collection_immutable_List(ScalaJS.as.scala_collection_TraversableLike(cursor.tail__O()).tail__O()));
        this.len$und$eq__p6__I__V((this.len__p6__I() - 1))
      }
    }
  };
  return this
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.iterator__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_collection_mutable_ListBuffer$$anon$1().init___Lscala_collection_mutable_ListBuffer(this)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.readOnly__Lscala_collection_immutable_List = (function() {
  return this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.copy__p6__V = (function() {
  var cursor = this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List();
  var limit = this.last0__p6__Lscala_collection_immutable_$colon$colon().tail__Lscala_collection_immutable_List();
  this.clear__V();
  while ((cursor !== limit)) {
    this.$$plus$eq__O__Lscala_collection_mutable_ListBuffer(cursor.head__O());
    cursor = ScalaJS.as.scala_collection_immutable_List(cursor.tail__O())
  }
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.equals__O__Z = (function(that) {
  var x1 = that;
  if (ScalaJS.is.scala_collection_mutable_ListBuffer(x1)) {
    var x2 = ScalaJS.as.scala_collection_mutable_ListBuffer(x1);
    return this.readOnly__Lscala_collection_immutable_List().equals__O__Z(x2.readOnly__Lscala_collection_immutable_List())
  };
  return ScalaJS.impls.scala_collection_GenSeqLike$class__equals__Lscala_collection_GenSeqLike__O__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.clone__Lscala_collection_mutable_ListBuffer = (function() {
  return new ScalaJS.c.scala_collection_mutable_ListBuffer().init___().$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ListBuffer(this)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.stringPrefix__T = (function() {
  return "ListBuffer"
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Seq(repr)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Seq(repr)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_mutable_Seq()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable = (function(xs) {
  return this.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Buffer(xs)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable = (function(elem1, elem2, elems) {
  return this.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Buffer(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Buffer(elem)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_GenMap = (function(ev) {
  return this.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(ev)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.toSet__Lscala_collection_GenSet = (function() {
  return this.toSet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_ListBuffer()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.clone__Lscala_collection_mutable_Buffer = (function() {
  return this.clone__Lscala_collection_mutable_ListBuffer()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.readOnly__Lscala_collection_Seq = (function() {
  return this.readOnly__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.$$minus$eq__O__Lscala_collection_generic_Shrinkable = (function(elem) {
  return this.$$minus$eq__O__Lscala_collection_mutable_ListBuffer(elem)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.$$minus$eq__O__Lscala_collection_mutable_Buffer = (function(x) {
  return this.$$minus$eq__O__Lscala_collection_mutable_ListBuffer(x)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.result__O = (function() {
  return this.result__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.$$plus$eq$colon__O__Lscala_collection_mutable_Buffer = (function(elem) {
  return this.$$plus$eq$colon__O__Lscala_collection_mutable_ListBuffer(elem)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.$$plus$plus$eq$colon__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Buffer = (function(xs) {
  return this.$$plus$plus$eq$colon__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ListBuffer(xs)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable = (function(xs) {
  return this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ListBuffer(xs)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_ListBuffer(elem)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.$$plus$eq__O__Lscala_collection_mutable_Buffer = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_ListBuffer(elem)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_ListBuffer(elem)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.underlying__Lscala_collection_Traversable = (function() {
  return this.underlying__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.underlying__Lscala_collection_Iterable = (function() {
  return this.underlying__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.underlying__Lscala_collection_Seq = (function() {
  return this.underlying__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractBuffer.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_mutable_Builder$class__$init$__Lscala_collection_mutable_Builder__V(this);
  ScalaJS.impls.scala_collection_generic_TraversableForwarder$class__$init$__Lscala_collection_generic_TraversableForwarder__V(this);
  ScalaJS.impls.scala_collection_generic_IterableForwarder$class__$init$__Lscala_collection_generic_IterableForwarder__V(this);
  ScalaJS.impls.scala_collection_generic_SeqForwarder$class__$init$__Lscala_collection_generic_SeqForwarder__V(this);
  this.scala$collection$mutable$ListBuffer$$start$6 = ScalaJS.modules.scala_collection_immutable_Nil();
  this.exported$6 = false;
  this.len$6 = 0;
  return this
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.mapResult__Lscala_Function1__ = (function(f) {
  return this.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(f)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__ = (function(size, boundingColl) {
  return ScalaJS.bV(this.sizeHintBounded__I__Lscala_collection_TraversableLike__V(size, boundingColl))
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.sizeHint__Lscala_collection_TraversableLike__I__ = (function(coll, delta) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__I__V(coll, delta))
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.sizeHint__Lscala_collection_TraversableLike__ = (function(coll$2) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__V(coll$2))
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.sizeHint__I__ = (function(size$2) {
  return ScalaJS.bV(this.sizeHint__I__V(size$2))
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.prependToList__Lscala_collection_immutable_List__ = (function(xs) {
  return this.prependToList__Lscala_collection_immutable_List__Lscala_collection_immutable_List(xs)
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.result__ = (function() {
  return this.result__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.underlying__ = (function() {
  return this.underlying__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.scala$collection$mutable$ListBuffer$$start__ = (function() {
  return this.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ListBuffer = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ListBuffer.prototype = ScalaJS.c.scala_collection_mutable_ListBuffer.prototype;
ScalaJS.is.scala_collection_mutable_ListBuffer = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ListBuffer)))
});
ScalaJS.as.scala_collection_mutable_ListBuffer = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ListBuffer(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ListBuffer")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ListBuffer = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ListBuffer)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ListBuffer = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ListBuffer(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ListBuffer;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ListBuffer = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ListBuffer: 0
}, false, "scala.collection.mutable.ListBuffer", ScalaJS.data.scala_collection_mutable_AbstractBuffer, {
  scala_collection_mutable_ListBuffer: 1,
  java_io_Serializable: 1,
  scala_collection_generic_SeqForwarder: 1,
  scala_collection_generic_IterableForwarder: 1,
  scala_collection_generic_TraversableForwarder: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_mutable_AbstractBuffer: 1,
  scala_collection_mutable_Buffer: 1,
  scala_collection_mutable_BufferLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_collection_script_Scriptable: 1,
  scala_collection_generic_Shrinkable: 1,
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
ScalaJS.c.scala_collection_mutable_ListBuffer.prototype.$classData = ScalaJS.data.scala_collection_mutable_ListBuffer;
//@ sourceMappingURL=ListBuffer.js.map
