/** @constructor */
ScalaJS.c.scala_collection_mutable_UnrolledBuffer = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractBuffer.call(this);
  this.tag$6 = null;
  this.scala$collection$mutable$UnrolledBuffer$$headptr$6 = null;
  this.lastptr$6 = null;
  this.sz$6 = 0
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractBuffer();
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.constructor = ScalaJS.c.scala_collection_mutable_UnrolledBuffer;
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.sizeHint__I__V = (function(size) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__I__V(this, size)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.sizeHint__Lscala_collection_TraversableLike__V = (function(coll) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__V(this, coll)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.sizeHint__Lscala_collection_TraversableLike__I__V = (function(coll, delta) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__I__V(this, coll, delta)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__V = (function(size, boundingColl) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHintBounded__Lscala_collection_mutable_Builder__I__Lscala_collection_TraversableLike__V(this, size, boundingColl)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder = (function(f) {
  return ScalaJS.impls.scala_collection_mutable_Builder$class__mapResult__Lscala_collection_mutable_Builder__Lscala_Function1__Lscala_collection_mutable_Builder(this, f)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.genericClassTagBuilder__Lscala_reflect_ClassTag__Lscala_collection_mutable_Builder = (function(tag) {
  return ScalaJS.impls.scala_collection_generic_GenericClassTagTraversableTemplate$class__genericClassTagBuilder__Lscala_collection_generic_GenericClassTagTraversableTemplate__Lscala_reflect_ClassTag__Lscala_collection_mutable_Builder(this, tag)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.classManifestCompanion__Lscala_collection_generic_GenericClassTagCompanion = (function() {
  return ScalaJS.impls.scala_collection_generic_GenericClassTagTraversableTemplate$class__classManifestCompanion__Lscala_collection_generic_GenericClassTagTraversableTemplate__Lscala_collection_generic_GenericClassTagCompanion(this)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.genericClassManifestBuilder__Lscala_reflect_ClassTag__Lscala_collection_mutable_Builder = (function(manifest) {
  return ScalaJS.impls.scala_collection_generic_GenericClassTagTraversableTemplate$class__genericClassManifestBuilder__Lscala_collection_generic_GenericClassTagTraversableTemplate__Lscala_reflect_ClassTag__Lscala_collection_mutable_Builder(this, manifest)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.tag__Lscala_reflect_ClassTag = (function() {
  return this.tag$6
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.scala$collection$mutable$UnrolledBuffer$$headptr__Lscala_collection_mutable_UnrolledBuffer$Unrolled = (function() {
  return this.scala$collection$mutable$UnrolledBuffer$$headptr$6
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.scala$collection$mutable$UnrolledBuffer$$headptr$und$eq__p6__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V = (function(x$1) {
  this.scala$collection$mutable$UnrolledBuffer$$headptr$6 = x$1
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.lastptr__p6__Lscala_collection_mutable_UnrolledBuffer$Unrolled = (function() {
  return this.lastptr$6
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.lastptr$und$eq__p6__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V = (function(x$1) {
  this.lastptr$6 = x$1
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.sz__p6__I = (function() {
  return this.sz$6
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.sz$und$eq__p6__I__V = (function(x$1) {
  this.sz$6 = x$1
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.headPtr__Lscala_collection_mutable_UnrolledBuffer$Unrolled = (function() {
  return this.scala$collection$mutable$UnrolledBuffer$$headptr__Lscala_collection_mutable_UnrolledBuffer$Unrolled()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.headPtr$und$eq__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V = (function(head) {
  this.scala$collection$mutable$UnrolledBuffer$$headptr$und$eq__p6__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V(head)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.lastPtr__Lscala_collection_mutable_UnrolledBuffer$Unrolled = (function() {
  return this.lastptr__p6__Lscala_collection_mutable_UnrolledBuffer$Unrolled()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.lastPtr$und$eq__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V = (function(last) {
  this.lastptr$und$eq__p6__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V(last)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.size$und$eq__I__V = (function(s) {
  this.sz$und$eq__p6__I__V(s)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.newBuilder__Lscala_collection_mutable_UnrolledBuffer = (function() {
  return new ScalaJS.c.scala_collection_mutable_UnrolledBuffer().init___Lscala_reflect_ClassTag(this.tag__Lscala_reflect_ClassTag())
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.newUnrolled__Lscala_collection_mutable_UnrolledBuffer$Unrolled = (function() {
  return new ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled().init___Lscala_collection_mutable_UnrolledBuffer__Lscala_reflect_ClassTag(this, this.tag__Lscala_reflect_ClassTag())
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.calcNextLength__I__I = (function(sz) {
  return sz
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.classTagCompanion__Lscala_collection_mutable_UnrolledBuffer$ = (function() {
  return ScalaJS.modules.scala_collection_mutable_UnrolledBuffer()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.concat__Lscala_collection_mutable_UnrolledBuffer__Lscala_collection_mutable_UnrolledBuffer = (function(that) {
  if ((!this.lastptr__p6__Lscala_collection_mutable_UnrolledBuffer$Unrolled().bind__Lscala_collection_mutable_UnrolledBuffer$Unrolled__Z(that.scala$collection$mutable$UnrolledBuffer$$headptr__Lscala_collection_mutable_UnrolledBuffer$Unrolled()))) {
    this.lastptr$und$eq__p6__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V(that.lastPtr__Lscala_collection_mutable_UnrolledBuffer$Unrolled())
  };
  this.sz$und$eq__p6__I__V((this.sz__p6__I() + that.sz__p6__I()));
  that.clear__V();
  return this
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.$$plus$eq__O__Lscala_collection_mutable_UnrolledBuffer = (function(elem) {
  this.lastptr$und$eq__p6__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V(this.lastptr__p6__Lscala_collection_mutable_UnrolledBuffer$Unrolled().append__O__Lscala_collection_mutable_UnrolledBuffer$Unrolled(elem));
  this.sz$und$eq__p6__I__V((this.sz__p6__I() + 1));
  return this
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.clear__V = (function() {
  this.scala$collection$mutable$UnrolledBuffer$$headptr$und$eq__p6__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V(this.newUnrolled__Lscala_collection_mutable_UnrolledBuffer$Unrolled());
  this.lastptr$und$eq__p6__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V(this.scala$collection$mutable$UnrolledBuffer$$headptr__Lscala_collection_mutable_UnrolledBuffer$Unrolled());
  this.sz$und$eq__p6__I__V(0)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.iterator__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_collection_mutable_UnrolledBuffer$$anon$1().init___Lscala_collection_mutable_UnrolledBuffer(this)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.foreach__Lscala_Function1__V = (function(f) {
  this.scala$collection$mutable$UnrolledBuffer$$headptr__Lscala_collection_mutable_UnrolledBuffer$Unrolled().foreach__Lscala_Function1__V(f)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.result__Lscala_collection_mutable_UnrolledBuffer = (function() {
  return this
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.length__I = (function() {
  return this.sz__p6__I()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.apply__I__O = (function(idx) {
  if (((idx >= 0) && (idx < this.sz__p6__I()))) {
    return this.scala$collection$mutable$UnrolledBuffer$$headptr__Lscala_collection_mutable_UnrolledBuffer$Unrolled().apply__I__O(idx)
  } else {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(idx)))
  }
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.update__I__O__V = (function(idx, newelem) {
  if (((idx >= 0) && (idx < this.sz__p6__I()))) {
    this.scala$collection$mutable$UnrolledBuffer$$headptr__Lscala_collection_mutable_UnrolledBuffer$Unrolled().update__I__O__V(idx, newelem)
  } else {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(idx)))
  }
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.remove__I__O = (function(idx) {
  if (((idx >= 0) && (idx < this.sz__p6__I()))) {
    this.sz$und$eq__p6__I__V((this.sz__p6__I() - 1));
    return this.scala$collection$mutable$UnrolledBuffer$$headptr__Lscala_collection_mutable_UnrolledBuffer$Unrolled().remove__I__Lscala_collection_mutable_UnrolledBuffer__O(idx, this)
  } else {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(idx)))
  }
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.$$plus$eq$colon__O__Lscala_collection_mutable_UnrolledBuffer = (function(elem) {
  this.scala$collection$mutable$UnrolledBuffer$$headptr$und$eq__p6__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V(this.scala$collection$mutable$UnrolledBuffer$$headptr__Lscala_collection_mutable_UnrolledBuffer$Unrolled().prepend__O__Lscala_collection_mutable_UnrolledBuffer$Unrolled(elem));
  this.sz$und$eq__p6__I__V((this.sz__p6__I() + 1));
  return this
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.insertAll__I__Lscala_collection_Traversable__V = (function(idx, elems) {
  if (((idx >= 0) && (idx <= this.sz__p6__I()))) {
    this.scala$collection$mutable$UnrolledBuffer$$headptr__Lscala_collection_mutable_UnrolledBuffer$Unrolled().insertAll__I__Lscala_collection_Traversable__Lscala_collection_mutable_UnrolledBuffer__V(idx, elems, this);
    this.sz$und$eq__p6__I__V((this.sz__p6__I() + elems.size__I()))
  } else {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(idx)))
  }
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.writeObject__p6__Ljava_io_ObjectOutputStream__V = (function(out) {
  out.defaultWriteObject__V();
  out.writeInt__I__V(this.sz__p6__I());
  this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(out$1) {
    return (function(elem) {
      out$1.writeObject__O__V(elem);
      return ScalaJS.bV(undefined)
    })
  })(out)))
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.readObject__p6__Ljava_io_ObjectInputStream__V = (function(in$2) {
  in$2.defaultReadObject__V();
  var num = in$2.readInt__I();
  this.headPtr$und$eq__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V(this.newUnrolled__Lscala_collection_mutable_UnrolledBuffer$Unrolled());
  this.lastPtr$und$eq__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V(this.headPtr__Lscala_collection_mutable_UnrolledBuffer$Unrolled());
  this.sz$und$eq__p6__I__V(0);
  var i = 0;
  while ((i < num)) {
    this.$$plus$eq__O__Lscala_collection_mutable_UnrolledBuffer(in$2.readObject__O());
    i = (i + 1)
  }
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.clone__Lscala_collection_mutable_UnrolledBuffer = (function() {
  return ScalaJS.as.scala_collection_mutable_UnrolledBuffer(new ScalaJS.c.scala_collection_mutable_UnrolledBuffer().init___Lscala_reflect_ClassTag(this.tag__Lscala_reflect_ClassTag()).$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this))
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.stringPrefix__T = (function() {
  return "UnrolledBuffer"
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Seq(repr)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Seq(repr)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_mutable_Seq()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable = (function(xs) {
  return this.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Buffer(xs)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable = (function(elem1, elem2, elems) {
  return this.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Buffer(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Buffer(elem)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.$$minus$eq__O__Lscala_collection_generic_Shrinkable = (function(elem) {
  return this.$$minus$eq__O__Lscala_collection_mutable_Buffer(elem)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_UnrolledBuffer()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.clone__Lscala_collection_mutable_Buffer = (function() {
  return this.clone__Lscala_collection_mutable_UnrolledBuffer()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.$$plus$eq$colon__O__Lscala_collection_mutable_Buffer = (function(elem) {
  return this.$$plus$eq$colon__O__Lscala_collection_mutable_UnrolledBuffer(elem)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.result__O = (function() {
  return this.result__Lscala_collection_mutable_UnrolledBuffer()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_UnrolledBuffer(elem)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.$$plus$eq__O__Lscala_collection_mutable_Buffer = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_UnrolledBuffer(elem)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_UnrolledBuffer(elem)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.classTagCompanion__Lscala_collection_generic_GenericClassTagCompanion = (function() {
  return this.classTagCompanion__Lscala_collection_mutable_UnrolledBuffer$()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return this.newBuilder__Lscala_collection_mutable_UnrolledBuffer()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.init___Lscala_reflect_ClassTag = (function(tag) {
  this.tag$6 = tag;
  ScalaJS.c.scala_collection_mutable_AbstractBuffer.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_generic_GenericClassTagTraversableTemplate$class__$init$__Lscala_collection_generic_GenericClassTagTraversableTemplate__V(this);
  ScalaJS.impls.scala_collection_mutable_Builder$class__$init$__Lscala_collection_mutable_Builder__V(this);
  this.scala$collection$mutable$UnrolledBuffer$$headptr$6 = this.newUnrolled__Lscala_collection_mutable_UnrolledBuffer$Unrolled();
  this.lastptr$6 = this.scala$collection$mutable$UnrolledBuffer$$headptr__Lscala_collection_mutable_UnrolledBuffer$Unrolled();
  this.sz$6 = 0;
  return this
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.genericClassManifestBuilder__Lscala_reflect_ClassTag__ = (function(manifest) {
  return this.genericClassManifestBuilder__Lscala_reflect_ClassTag__Lscala_collection_mutable_Builder(manifest)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.classManifestCompanion__ = (function() {
  return this.classManifestCompanion__Lscala_collection_generic_GenericClassTagCompanion()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.genericClassTagBuilder__Lscala_reflect_ClassTag__ = (function(tag) {
  return this.genericClassTagBuilder__Lscala_reflect_ClassTag__Lscala_collection_mutable_Builder(tag)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.mapResult__Lscala_Function1__ = (function(f) {
  return this.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(f)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__ = (function(size, boundingColl) {
  return ScalaJS.bV(this.sizeHintBounded__I__Lscala_collection_TraversableLike__V(size, boundingColl))
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.sizeHint__Lscala_collection_TraversableLike__I__ = (function(coll, delta) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__I__V(coll, delta))
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.sizeHint__Lscala_collection_TraversableLike__ = (function(coll$2) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__V(coll$2))
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.sizeHint__I__ = (function(size$2) {
  return ScalaJS.bV(this.sizeHint__I__V(size$2))
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.result__ = (function() {
  return this.result__Lscala_collection_mutable_UnrolledBuffer()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.concat__Lscala_collection_mutable_UnrolledBuffer__ = (function(that) {
  return this.concat__Lscala_collection_mutable_UnrolledBuffer__Lscala_collection_mutable_UnrolledBuffer(that)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.classTagCompanion__ = (function() {
  return this.classTagCompanion__Lscala_collection_mutable_UnrolledBuffer$()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.calcNextLength__I__ = (function(sz) {
  return ScalaJS.bI(this.calcNextLength__I__I(sz))
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.newUnrolled__ = (function() {
  return this.newUnrolled__Lscala_collection_mutable_UnrolledBuffer$Unrolled()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.size$und$eq__I__ = (function(s) {
  return ScalaJS.bV(this.size$und$eq__I__V(s))
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.lastPtr$und$eq__Lscala_collection_mutable_UnrolledBuffer$Unrolled__ = (function(last) {
  return ScalaJS.bV(this.lastPtr$und$eq__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V(last))
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.lastPtr__ = (function() {
  return this.lastPtr__Lscala_collection_mutable_UnrolledBuffer$Unrolled()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.headPtr$und$eq__Lscala_collection_mutable_UnrolledBuffer$Unrolled__ = (function(head) {
  return ScalaJS.bV(this.headPtr$und$eq__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V(head))
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.headPtr__ = (function() {
  return this.headPtr__Lscala_collection_mutable_UnrolledBuffer$Unrolled()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.scala$collection$mutable$UnrolledBuffer$$headptr__ = (function() {
  return this.scala$collection$mutable$UnrolledBuffer$$headptr__Lscala_collection_mutable_UnrolledBuffer$Unrolled()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.tag__ = (function() {
  return this.tag__Lscala_reflect_ClassTag()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_UnrolledBuffer = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_UnrolledBuffer.prototype = ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype;
ScalaJS.is.scala_collection_mutable_UnrolledBuffer = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_UnrolledBuffer)))
});
ScalaJS.as.scala_collection_mutable_UnrolledBuffer = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_UnrolledBuffer(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.UnrolledBuffer")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_UnrolledBuffer = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_UnrolledBuffer)))
});
ScalaJS.asArrayOf.scala_collection_mutable_UnrolledBuffer = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_UnrolledBuffer(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.UnrolledBuffer;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_UnrolledBuffer = new ScalaJS.ClassTypeData({
  scala_collection_mutable_UnrolledBuffer: 0
}, false, "scala.collection.mutable.UnrolledBuffer", ScalaJS.data.scala_collection_mutable_AbstractBuffer, {
  scala_collection_mutable_UnrolledBuffer: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_GenericClassTagTraversableTemplate: 1,
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
ScalaJS.c.scala_collection_mutable_UnrolledBuffer.prototype.$classData = ScalaJS.data.scala_collection_mutable_UnrolledBuffer;
//@ sourceMappingURL=UnrolledBuffer.js.map
