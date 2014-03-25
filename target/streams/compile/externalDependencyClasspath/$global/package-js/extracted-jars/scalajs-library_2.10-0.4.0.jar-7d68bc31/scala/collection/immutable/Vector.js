/** @constructor */
ScalaJS.c.scala_collection_immutable_Vector = (function() {
  ScalaJS.c.scala_collection_AbstractSeq.call(this);
  this.startIndex$4 = 0;
  this.endIndex$4 = 0;
  this.focus$4 = 0;
  this.dirty$4 = false;
  this.depth$4 = 0;
  this.display0$4 = null;
  this.display1$4 = null;
  this.display2$4 = null;
  this.display3$4 = null;
  this.display4$4 = null;
  this.display5$4 = null
});
ScalaJS.c.scala_collection_immutable_Vector.prototype = new ScalaJS.inheritable.scala_collection_AbstractSeq();
ScalaJS.c.scala_collection_immutable_Vector.prototype.constructor = ScalaJS.c.scala_collection_immutable_Vector;
ScalaJS.c.scala_collection_immutable_Vector.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_CustomParallelizable$class__parCombiner__Lscala_collection_CustomParallelizable__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.depth__I = (function() {
  return this.depth$4
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.depth$und$eq__I__V = (function(x$1) {
  this.depth$4 = x$1
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display0__AO = (function() {
  return this.display0$4
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display0$und$eq__AO__V = (function(x$1) {
  this.display0$4 = x$1
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display1__AO = (function() {
  return this.display1$4
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display1$und$eq__AO__V = (function(x$1) {
  this.display1$4 = x$1
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display2__AO = (function() {
  return this.display2$4
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display2$und$eq__AO__V = (function(x$1) {
  this.display2$4 = x$1
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display3__AO = (function() {
  return this.display3$4
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display3$und$eq__AO__V = (function(x$1) {
  this.display3$4 = x$1
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display4__AO = (function() {
  return this.display4$4
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display4$und$eq__AO__V = (function(x$1) {
  this.display4$4 = x$1
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display5__AO = (function() {
  return this.display5$4
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display5$und$eq__AO__V = (function(x$1) {
  this.display5$4 = x$1
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.initFrom__Lscala_collection_immutable_VectorPointer__V = (function(that) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__initFrom__Lscala_collection_immutable_VectorPointer__Lscala_collection_immutable_VectorPointer__V(this, that)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.initFrom__Lscala_collection_immutable_VectorPointer__I__V = (function(that, depth) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__initFrom__Lscala_collection_immutable_VectorPointer__Lscala_collection_immutable_VectorPointer__I__V(this, that, depth)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.getElem__I__I__O = (function(index, xor) {
  return ScalaJS.impls.scala_collection_immutable_VectorPointer$class__getElem__Lscala_collection_immutable_VectorPointer__I__I__O(this, index, xor)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.gotoPos__I__I__V = (function(index, xor) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoPos__Lscala_collection_immutable_VectorPointer__I__I__V(this, index, xor)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.gotoNextBlockStart__I__I__V = (function(index, xor) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoNextBlockStart__Lscala_collection_immutable_VectorPointer__I__I__V(this, index, xor)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.gotoNextBlockStartWritable__I__I__V = (function(index, xor) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoNextBlockStartWritable__Lscala_collection_immutable_VectorPointer__I__I__V(this, index, xor)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.copyOf__AO__AO = (function(a) {
  return ScalaJS.impls.scala_collection_immutable_VectorPointer$class__copyOf__Lscala_collection_immutable_VectorPointer__AO__AO(this, a)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.nullSlotAndCopy__AO__I__AO = (function(array, index) {
  return ScalaJS.impls.scala_collection_immutable_VectorPointer$class__nullSlotAndCopy__Lscala_collection_immutable_VectorPointer__AO__I__AO(this, array, index)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.stabilize__I__V = (function(index) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__stabilize__Lscala_collection_immutable_VectorPointer__I__V(this, index)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.gotoPosWritable0__I__I__V = (function(newIndex, xor) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoPosWritable0__Lscala_collection_immutable_VectorPointer__I__I__V(this, newIndex, xor)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.gotoPosWritable1__I__I__I__V = (function(oldIndex, newIndex, xor) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoPosWritable1__Lscala_collection_immutable_VectorPointer__I__I__I__V(this, oldIndex, newIndex, xor)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.copyRange__AO__I__I__AO = (function(array, oldLeft, newLeft) {
  return ScalaJS.impls.scala_collection_immutable_VectorPointer$class__copyRange__Lscala_collection_immutable_VectorPointer__AO__I__I__AO(this, array, oldLeft, newLeft)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.gotoFreshPosWritable0__I__I__I__V = (function(oldIndex, newIndex, xor) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoFreshPosWritable0__Lscala_collection_immutable_VectorPointer__I__I__I__V(this, oldIndex, newIndex, xor)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.gotoFreshPosWritable1__I__I__I__V = (function(oldIndex, newIndex, xor) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoFreshPosWritable1__Lscala_collection_immutable_VectorPointer__I__I__I__V(this, oldIndex, newIndex, xor)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.debug__V = (function() {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__debug__Lscala_collection_immutable_VectorPointer__V(this)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.toIndexedSeq__Lscala_collection_immutable_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_immutable_IndexedSeq$class__toIndexedSeq__Lscala_collection_immutable_IndexedSeq__Lscala_collection_immutable_IndexedSeq(this)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.seq__Lscala_collection_immutable_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_immutable_IndexedSeq$class__seq__Lscala_collection_immutable_IndexedSeq__Lscala_collection_immutable_IndexedSeq(this)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__hashCode__Lscala_collection_IndexedSeqLike__I(this)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.thisCollection__Lscala_collection_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__thisCollection__Lscala_collection_IndexedSeqLike__Lscala_collection_IndexedSeq(this)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.toCollection__O__Lscala_collection_IndexedSeq = (function(repr) {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__toCollection__Lscala_collection_IndexedSeqLike__O__Lscala_collection_IndexedSeq(this, repr)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.toBuffer__Lscala_collection_mutable_Buffer = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__toBuffer__Lscala_collection_IndexedSeqLike__Lscala_collection_mutable_Buffer(this)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.toSeq__Lscala_collection_immutable_Seq = (function() {
  return ScalaJS.impls.scala_collection_immutable_Seq$class__toSeq__Lscala_collection_immutable_Seq__Lscala_collection_immutable_Seq(this)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.startIndex__I = (function() {
  return this.startIndex$4
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.endIndex__I = (function() {
  return this.endIndex$4
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.modules.scala_collection_immutable_Vector()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.dirty__Z = (function() {
  return this.dirty$4
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.dirty$und$eq__Z__V = (function(x$1) {
  this.dirty$4 = x$1
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.length__I = (function() {
  return (this.endIndex__I() - this.startIndex__I())
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.par__Lscala_collection_parallel_immutable_ParVector = (function() {
  return new ScalaJS.c.scala_collection_parallel_immutable_ParVector().init___Lscala_collection_immutable_Vector(this)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.toVector__Lscala_collection_immutable_Vector = (function() {
  return this
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.lengthCompare__I__I = (function(len) {
  return (this.length__I() - len)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.initIterator__Lscala_collection_immutable_VectorIterator__V = (function(s) {
  s.initFrom__Lscala_collection_immutable_VectorPointer__V(this);
  if (this.dirty__Z()) {
    s.stabilize__I__V(this.focus$4)
  };
  if ((s.depth__I() > 1)) {
    s.gotoPos__I__I__V(this.startIndex__I(), (this.startIndex__I() ^ this.focus$4))
  }
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.iterator__Lscala_collection_immutable_VectorIterator = (function() {
  var s = new ScalaJS.c.scala_collection_immutable_VectorIterator().init___I__I(this.startIndex__I(), this.endIndex__I());
  this.initIterator__Lscala_collection_immutable_VectorIterator__V(s);
  return s
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.reverseIterator__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_collection_immutable_Vector$$anon$1().init___Lscala_collection_immutable_Vector(this)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.apply__I__O = (function(index) {
  var idx = this.checkRangeConvert__p4__I__I(index);
  return this.getElem__I__I__O(idx, (idx ^ this.focus$4))
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.checkRangeConvert__p4__I__I = (function(index) {
  var idx = (index + this.startIndex__I());
  if (((0 <= index) && (idx < this.endIndex__I()))) {
    return idx
  } else {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(index)))
  }
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.updated__I__O__Lscala_collection_generic_CanBuildFrom__O = (function(index, elem, bf) {
  if ((bf === ScalaJS.modules.scala_collection_immutable_IndexedSeq().ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom())) {
    return this.updateAt__I__O__Lscala_collection_immutable_Vector(index, elem)
  } else {
    return ScalaJS.impls.scala_collection_SeqLike$class__updated__Lscala_collection_SeqLike__I__O__Lscala_collection_generic_CanBuildFrom__O(this, index, elem, bf)
  }
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.$$plus$colon__O__Lscala_collection_generic_CanBuildFrom__O = (function(elem, bf) {
  if ((bf === ScalaJS.modules.scala_collection_immutable_IndexedSeq().ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom())) {
    return this.appendFront__O__Lscala_collection_immutable_Vector(elem)
  } else {
    return ScalaJS.impls.scala_collection_SeqLike$class__$plus$colon__Lscala_collection_SeqLike__O__Lscala_collection_generic_CanBuildFrom__O(this, elem, bf)
  }
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.$$colon$plus__O__Lscala_collection_generic_CanBuildFrom__O = (function(elem, bf) {
  if ((bf === ScalaJS.modules.scala_collection_immutable_IndexedSeq().ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom())) {
    return this.appendBack__O__Lscala_collection_immutable_Vector(elem)
  } else {
    return ScalaJS.impls.scala_collection_SeqLike$class__$colon$plus__Lscala_collection_SeqLike__O__Lscala_collection_generic_CanBuildFrom__O(this, elem, bf)
  }
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.take__I__Lscala_collection_immutable_Vector = (function(n) {
  if ((n <= 0)) {
    return ScalaJS.modules.scala_collection_immutable_Vector().empty__Lscala_collection_immutable_Vector()
  } else {
    if (((this.startIndex__I() + n) < this.endIndex__I())) {
      return this.dropBack0__p4__I__Lscala_collection_immutable_Vector((this.startIndex__I() + n))
    } else {
      return this
    }
  }
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.drop__I__Lscala_collection_immutable_Vector = (function(n) {
  if ((n <= 0)) {
    return this
  } else {
    if (((this.startIndex__I() + n) < this.endIndex__I())) {
      return this.dropFront0__p4__I__Lscala_collection_immutable_Vector((this.startIndex__I() + n))
    } else {
      return ScalaJS.modules.scala_collection_immutable_Vector().empty__Lscala_collection_immutable_Vector()
    }
  }
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.takeRight__I__Lscala_collection_immutable_Vector = (function(n) {
  if ((n <= 0)) {
    return ScalaJS.modules.scala_collection_immutable_Vector().empty__Lscala_collection_immutable_Vector()
  } else {
    if (((this.endIndex__I() - n) > this.startIndex__I())) {
      return this.dropFront0__p4__I__Lscala_collection_immutable_Vector((this.endIndex__I() - n))
    } else {
      return this
    }
  }
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.dropRight__I__Lscala_collection_immutable_Vector = (function(n) {
  if ((n <= 0)) {
    return this
  } else {
    if (((this.endIndex__I() - n) > this.startIndex__I())) {
      return this.dropBack0__p4__I__Lscala_collection_immutable_Vector((this.endIndex__I() - n))
    } else {
      return ScalaJS.modules.scala_collection_immutable_Vector().empty__Lscala_collection_immutable_Vector()
    }
  }
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.head__O = (function() {
  if (this.isEmpty__Z()) {
    throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("empty.head")
  };
  return this.apply__I__O(0)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.tail__Lscala_collection_immutable_Vector = (function() {
  if (this.isEmpty__Z()) {
    throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("empty.tail")
  };
  return this.drop__I__Lscala_collection_immutable_Vector(1)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.last__O = (function() {
  if (this.isEmpty__Z()) {
    throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("empty.last")
  };
  return this.apply__I__O((this.length__I() - 1))
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.init__Lscala_collection_immutable_Vector = (function() {
  if (this.isEmpty__Z()) {
    throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("empty.init")
  };
  return this.dropRight__I__Lscala_collection_immutable_Vector(1)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.slice__I__I__Lscala_collection_immutable_Vector = (function(from, until) {
  return this.take__I__Lscala_collection_immutable_Vector(until).drop__I__Lscala_collection_immutable_Vector(from)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.splitAt__I__Lscala_Tuple2 = (function(n) {
  return new ScalaJS.c.scala_Tuple2().init___O__O(this.take__I__Lscala_collection_immutable_Vector(n), this.drop__I__Lscala_collection_immutable_Vector(n))
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__$plus$plus__Lscala_collection_TraversableLike__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O(this, that.seq__Lscala_collection_TraversableOnce(), bf)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.updateAt__I__O__Lscala_collection_immutable_Vector = (function(index, elem) {
  var idx = this.checkRangeConvert__p4__I__I(index);
  var s = new ScalaJS.c.scala_collection_immutable_Vector().init___I__I__I(this.startIndex__I(), this.endIndex__I(), idx);
  s.initFrom__Lscala_collection_immutable_VectorPointer__V(this);
  s.dirty$und$eq__Z__V(this.dirty__Z());
  s.gotoPosWritable__p4__I__I__I__V(this.focus$4, idx, (this.focus$4 ^ idx));
  s.display0__AO().underlying[(idx & 31)] = elem;
  return s
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.gotoPosWritable__p4__I__I__I__V = (function(oldIndex, newIndex, xor) {
  if (this.dirty__Z()) {
    this.gotoPosWritable1__I__I__I__V(oldIndex, newIndex, xor)
  } else {
    this.gotoPosWritable0__I__I__V(newIndex, xor);
    this.dirty$und$eq__Z__V(true)
  }
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.gotoFreshPosWritable__p4__I__I__I__V = (function(oldIndex, newIndex, xor) {
  if (this.dirty__Z()) {
    this.gotoFreshPosWritable1__I__I__I__V(oldIndex, newIndex, xor)
  } else {
    this.gotoFreshPosWritable0__I__I__I__V(oldIndex, newIndex, xor);
    this.dirty$und$eq__Z__V(true)
  }
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.appendFront__O__Lscala_collection_immutable_Vector = (function(value) {
  if ((this.endIndex__I() !== this.startIndex__I())) {
    var blockIndex = ((this.startIndex__I() - 1) & (~31));
    var lo = ((this.startIndex__I() - 1) & 31);
    if ((this.startIndex__I() !== (blockIndex + 32))) {
      var s = new ScalaJS.c.scala_collection_immutable_Vector().init___I__I__I((this.startIndex__I() - 1), this.endIndex__I(), blockIndex);
      s.initFrom__Lscala_collection_immutable_VectorPointer__V(this);
      s.dirty$und$eq__Z__V(this.dirty__Z());
      s.gotoPosWritable__p4__I__I__I__V(this.focus$4, blockIndex, (this.focus$4 ^ blockIndex));
      s.display0__AO().underlying[lo] = value;
      return s
    } else {
      var freeSpace = ((1 << (5 * this.depth__I())) - this.endIndex__I());
      var shift = (freeSpace & (~((1 << (5 * (this.depth__I() - 1))) - 1)));
      var shiftBlocks = (freeSpace >>> (5 * (this.depth__I() - 1)));
      if ((shift !== 0)) {
        this.debug__V();
        if ((this.depth__I() > 1)) {
          var newBlockIndex = (blockIndex + shift);
          var newFocus = (this.focus$4 + shift);
          var s$2 = new ScalaJS.c.scala_collection_immutable_Vector().init___I__I__I(((this.startIndex__I() - 1) + shift), (this.endIndex__I() + shift), newBlockIndex);
          s$2.initFrom__Lscala_collection_immutable_VectorPointer__V(this);
          s$2.dirty$und$eq__Z__V(this.dirty__Z());
          s$2.shiftTopLevel__p4__I__I__V(0, shiftBlocks);
          s$2.debug__V();
          s$2.gotoFreshPosWritable__p4__I__I__I__V(newFocus, newBlockIndex, (newFocus ^ newBlockIndex));
          s$2.display0__AO().underlying[lo] = value;
          return s$2
        } else {
          var newBlockIndex$2 = (blockIndex + 32);
          var newFocus$2 = this.focus$4;
          var s$3 = new ScalaJS.c.scala_collection_immutable_Vector().init___I__I__I(((this.startIndex__I() - 1) + shift), (this.endIndex__I() + shift), newBlockIndex$2);
          s$3.initFrom__Lscala_collection_immutable_VectorPointer__V(this);
          s$3.dirty$und$eq__Z__V(this.dirty__Z());
          s$3.shiftTopLevel__p4__I__I__V(0, shiftBlocks);
          s$3.gotoPosWritable__p4__I__I__I__V(newFocus$2, newBlockIndex$2, (newFocus$2 ^ newBlockIndex$2));
          s$3.display0__AO().underlying[(shift - 1)] = value;
          s$3.debug__V();
          return s$3
        }
      } else {
        if ((blockIndex < 0)) {
          var move = ((1 << (5 * (this.depth__I() + 1))) - (1 << (5 * this.depth__I())));
          var newBlockIndex$3 = (blockIndex + move);
          var newFocus$3 = (this.focus$4 + move);
          var s$4 = new ScalaJS.c.scala_collection_immutable_Vector().init___I__I__I(((this.startIndex__I() - 1) + move), (this.endIndex__I() + move), newBlockIndex$3);
          s$4.initFrom__Lscala_collection_immutable_VectorPointer__V(this);
          s$4.dirty$und$eq__Z__V(this.dirty__Z());
          s$4.debug__V();
          s$4.gotoFreshPosWritable__p4__I__I__I__V(newFocus$3, newBlockIndex$3, (newFocus$3 ^ newBlockIndex$3));
          s$4.display0__AO().underlying[lo] = value;
          s$4.debug__V();
          return s$4
        } else {
          var newBlockIndex$4 = blockIndex;
          var newFocus$4 = this.focus$4;
          var s$5 = new ScalaJS.c.scala_collection_immutable_Vector().init___I__I__I((this.startIndex__I() - 1), this.endIndex__I(), newBlockIndex$4);
          s$5.initFrom__Lscala_collection_immutable_VectorPointer__V(this);
          s$5.dirty$und$eq__Z__V(this.dirty__Z());
          s$5.gotoFreshPosWritable__p4__I__I__I__V(newFocus$4, newBlockIndex$4, (newFocus$4 ^ newBlockIndex$4));
          s$5.display0__AO().underlying[lo] = value;
          return s$5
        }
      }
    }
  } else {
    var elems = ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]);
    elems.underlying[31] = value;
    var s$6 = new ScalaJS.c.scala_collection_immutable_Vector().init___I__I__I(31, 32, 0);
    s$6.depth$und$eq__I__V(1);
    s$6.display0$und$eq__AO__V(elems);
    return s$6
  }
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.appendBack__O__Lscala_collection_immutable_Vector = (function(value) {
  if ((this.endIndex__I() !== this.startIndex__I())) {
    var blockIndex = (this.endIndex__I() & (~31));
    var lo = (this.endIndex__I() & 31);
    if ((this.endIndex__I() !== blockIndex)) {
      var s = new ScalaJS.c.scala_collection_immutable_Vector().init___I__I__I(this.startIndex__I(), (this.endIndex__I() + 1), blockIndex);
      s.initFrom__Lscala_collection_immutable_VectorPointer__V(this);
      s.dirty$und$eq__Z__V(this.dirty__Z());
      s.gotoPosWritable__p4__I__I__I__V(this.focus$4, blockIndex, (this.focus$4 ^ blockIndex));
      s.display0__AO().underlying[lo] = value;
      return s
    } else {
      var shift = (this.startIndex__I() & (~((1 << (5 * (this.depth__I() - 1))) - 1)));
      var shiftBlocks = (this.startIndex__I() >>> (5 * (this.depth__I() - 1)));
      if ((shift !== 0)) {
        this.debug__V();
        if ((this.depth__I() > 1)) {
          var newBlockIndex = (blockIndex - shift);
          var newFocus = (this.focus$4 - shift);
          var s$2 = new ScalaJS.c.scala_collection_immutable_Vector().init___I__I__I((this.startIndex__I() - shift), ((this.endIndex__I() + 1) - shift), newBlockIndex);
          s$2.initFrom__Lscala_collection_immutable_VectorPointer__V(this);
          s$2.dirty$und$eq__Z__V(this.dirty__Z());
          s$2.shiftTopLevel__p4__I__I__V(shiftBlocks, 0);
          s$2.debug__V();
          s$2.gotoFreshPosWritable__p4__I__I__I__V(newFocus, newBlockIndex, (newFocus ^ newBlockIndex));
          s$2.display0__AO().underlying[lo] = value;
          s$2.debug__V();
          return s$2
        } else {
          var newBlockIndex$2 = (blockIndex - 32);
          var newFocus$2 = this.focus$4;
          var s$3 = new ScalaJS.c.scala_collection_immutable_Vector().init___I__I__I((this.startIndex__I() - shift), ((this.endIndex__I() + 1) - shift), newBlockIndex$2);
          s$3.initFrom__Lscala_collection_immutable_VectorPointer__V(this);
          s$3.dirty$und$eq__Z__V(this.dirty__Z());
          s$3.shiftTopLevel__p4__I__I__V(shiftBlocks, 0);
          s$3.gotoPosWritable__p4__I__I__I__V(newFocus$2, newBlockIndex$2, (newFocus$2 ^ newBlockIndex$2));
          s$3.display0__AO().underlying[(32 - shift)] = value;
          s$3.debug__V();
          return s$3
        }
      } else {
        var newBlockIndex$3 = blockIndex;
        var newFocus$3 = this.focus$4;
        var s$4 = new ScalaJS.c.scala_collection_immutable_Vector().init___I__I__I(this.startIndex__I(), (this.endIndex__I() + 1), newBlockIndex$3);
        s$4.initFrom__Lscala_collection_immutable_VectorPointer__V(this);
        s$4.dirty$und$eq__Z__V(this.dirty__Z());
        s$4.gotoFreshPosWritable__p4__I__I__I__V(newFocus$3, newBlockIndex$3, (newFocus$3 ^ newBlockIndex$3));
        s$4.display0__AO().underlying[lo] = value;
        if ((s$4.depth__I() === (this.depth__I() + 1))) {
          s$4.debug__V()
        };
        return s$4
      }
    }
  } else {
    var elems = ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]);
    elems.underlying[0] = value;
    var s$5 = new ScalaJS.c.scala_collection_immutable_Vector().init___I__I__I(0, 1, 0);
    s$5.depth$und$eq__I__V(1);
    s$5.display0$und$eq__AO__V(elems);
    return s$5
  }
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.shiftTopLevel__p4__I__I__V = (function(oldLeft, newLeft) {
  var x1 = (this.depth__I() - 1);
  switch (x1) {
    case 0:
      {
        this.display0$und$eq__AO__V(this.copyRange__AO__I__I__AO(this.display0__AO(), oldLeft, newLeft));
        break
      };
    case 1:
      {
        this.display1$und$eq__AO__V(this.copyRange__AO__I__I__AO(this.display1__AO(), oldLeft, newLeft));
        break
      };
    case 2:
      {
        this.display2$und$eq__AO__V(this.copyRange__AO__I__I__AO(this.display2__AO(), oldLeft, newLeft));
        break
      };
    case 3:
      {
        this.display3$und$eq__AO__V(this.copyRange__AO__I__I__AO(this.display3__AO(), oldLeft, newLeft));
        break
      };
    case 4:
      {
        this.display4$und$eq__AO__V(this.copyRange__AO__I__I__AO(this.display4__AO(), oldLeft, newLeft));
        break
      };
    case 5:
      {
        this.display5$und$eq__AO__V(this.copyRange__AO__I__I__AO(this.display5__AO(), oldLeft, newLeft));
        break
      };
    default:
      throw new ScalaJS.c.scala_MatchError().init___O(ScalaJS.bI(x1));
  }
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.zeroLeft__p4__AO__I__V = (function(array, index) {
  var i = 0;
  while ((i < index)) {
    array.underlying[i] = null;
    i = (i + 1)
  }
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.zeroRight__p4__AO__I__V = (function(array, index) {
  var i = index;
  while ((i < array.underlying.length)) {
    array.underlying[i] = null;
    i = (i + 1)
  }
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.copyLeft__p4__AO__I__AO = (function(array, right) {
  var a2 = ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [array.underlying.length]);
  ScalaJS.modules.scala_compat_Platform().arraycopy__O__I__O__I__I__V(array, 0, a2, 0, right);
  return a2
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.copyRight__p4__AO__I__AO = (function(array, left) {
  var a2 = ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [array.underlying.length]);
  ScalaJS.modules.scala_compat_Platform().arraycopy__O__I__O__I__I__V(array, left, a2, left, (a2.underlying.length - left));
  return a2
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.preClean__p4__I__V = (function(depth) {
  this.depth$und$eq__I__V(depth);
  var x1 = (depth - 1);
  switch (x1) {
    case 0:
      {
        this.display1$und$eq__AO__V(null);
        this.display2$und$eq__AO__V(null);
        this.display3$und$eq__AO__V(null);
        this.display4$und$eq__AO__V(null);
        this.display5$und$eq__AO__V(null);
        break
      };
    case 1:
      {
        this.display2$und$eq__AO__V(null);
        this.display3$und$eq__AO__V(null);
        this.display4$und$eq__AO__V(null);
        this.display5$und$eq__AO__V(null);
        break
      };
    case 2:
      {
        this.display3$und$eq__AO__V(null);
        this.display4$und$eq__AO__V(null);
        this.display5$und$eq__AO__V(null);
        break
      };
    case 3:
      {
        this.display4$und$eq__AO__V(null);
        this.display5$und$eq__AO__V(null);
        break
      };
    case 4:
      {
        this.display5$und$eq__AO__V(null);
        break
      };
    case 5:
      break;
    default:
      throw new ScalaJS.c.scala_MatchError().init___O(ScalaJS.bI(x1));
  }
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.cleanLeftEdge__p4__I__V = (function(cutIndex) {
  if ((cutIndex < 32)) {
    this.zeroLeft__p4__AO__I__V(this.display0__AO(), cutIndex)
  } else {
    if ((cutIndex < 1024)) {
      this.zeroLeft__p4__AO__I__V(this.display0__AO(), (cutIndex & 31));
      this.display1$und$eq__AO__V(this.copyRight__p4__AO__I__AO(this.display1__AO(), (cutIndex >>> 5)))
    } else {
      if ((cutIndex < 32768)) {
        this.zeroLeft__p4__AO__I__V(this.display0__AO(), (cutIndex & 31));
        this.display1$und$eq__AO__V(this.copyRight__p4__AO__I__AO(this.display1__AO(), ((cutIndex >>> 5) & 31)));
        this.display2$und$eq__AO__V(this.copyRight__p4__AO__I__AO(this.display2__AO(), (cutIndex >>> 10)))
      } else {
        if ((cutIndex < 1048576)) {
          this.zeroLeft__p4__AO__I__V(this.display0__AO(), (cutIndex & 31));
          this.display1$und$eq__AO__V(this.copyRight__p4__AO__I__AO(this.display1__AO(), ((cutIndex >>> 5) & 31)));
          this.display2$und$eq__AO__V(this.copyRight__p4__AO__I__AO(this.display2__AO(), ((cutIndex >>> 10) & 31)));
          this.display3$und$eq__AO__V(this.copyRight__p4__AO__I__AO(this.display3__AO(), (cutIndex >>> 15)))
        } else {
          if ((cutIndex < 33554432)) {
            this.zeroLeft__p4__AO__I__V(this.display0__AO(), (cutIndex & 31));
            this.display1$und$eq__AO__V(this.copyRight__p4__AO__I__AO(this.display1__AO(), ((cutIndex >>> 5) & 31)));
            this.display2$und$eq__AO__V(this.copyRight__p4__AO__I__AO(this.display2__AO(), ((cutIndex >>> 10) & 31)));
            this.display3$und$eq__AO__V(this.copyRight__p4__AO__I__AO(this.display3__AO(), ((cutIndex >>> 15) & 31)));
            this.display4$und$eq__AO__V(this.copyRight__p4__AO__I__AO(this.display4__AO(), (cutIndex >>> 20)))
          } else {
            if ((cutIndex < 1073741824)) {
              this.zeroLeft__p4__AO__I__V(this.display0__AO(), (cutIndex & 31));
              this.display1$und$eq__AO__V(this.copyRight__p4__AO__I__AO(this.display1__AO(), ((cutIndex >>> 5) & 31)));
              this.display2$und$eq__AO__V(this.copyRight__p4__AO__I__AO(this.display2__AO(), ((cutIndex >>> 10) & 31)));
              this.display3$und$eq__AO__V(this.copyRight__p4__AO__I__AO(this.display3__AO(), ((cutIndex >>> 15) & 31)));
              this.display4$und$eq__AO__V(this.copyRight__p4__AO__I__AO(this.display4__AO(), ((cutIndex >>> 20) & 31)));
              this.display5$und$eq__AO__V(this.copyRight__p4__AO__I__AO(this.display5__AO(), (cutIndex >>> 25)))
            } else {
              throw new ScalaJS.c.java_lang_IllegalArgumentException().init___()
            }
          }
        }
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.cleanRightEdge__p4__I__V = (function(cutIndex) {
  if ((cutIndex <= 32)) {
    this.zeroRight__p4__AO__I__V(this.display0__AO(), cutIndex)
  } else {
    if ((cutIndex <= 1024)) {
      this.zeroRight__p4__AO__I__V(this.display0__AO(), (((cutIndex - 1) & 31) + 1));
      this.display1$und$eq__AO__V(this.copyLeft__p4__AO__I__AO(this.display1__AO(), (cutIndex >>> 5)))
    } else {
      if ((cutIndex <= 32768)) {
        this.zeroRight__p4__AO__I__V(this.display0__AO(), (((cutIndex - 1) & 31) + 1));
        this.display1$und$eq__AO__V(this.copyLeft__p4__AO__I__AO(this.display1__AO(), ((((cutIndex - 1) >>> 5) & 31) + 1)));
        this.display2$und$eq__AO__V(this.copyLeft__p4__AO__I__AO(this.display2__AO(), (cutIndex >>> 10)))
      } else {
        if ((cutIndex <= 1048576)) {
          this.zeroRight__p4__AO__I__V(this.display0__AO(), (((cutIndex - 1) & 31) + 1));
          this.display1$und$eq__AO__V(this.copyLeft__p4__AO__I__AO(this.display1__AO(), ((((cutIndex - 1) >>> 5) & 31) + 1)));
          this.display2$und$eq__AO__V(this.copyLeft__p4__AO__I__AO(this.display2__AO(), ((((cutIndex - 1) >>> 10) & 31) + 1)));
          this.display3$und$eq__AO__V(this.copyLeft__p4__AO__I__AO(this.display3__AO(), (cutIndex >>> 15)))
        } else {
          if ((cutIndex <= 33554432)) {
            this.zeroRight__p4__AO__I__V(this.display0__AO(), (((cutIndex - 1) & 31) + 1));
            this.display1$und$eq__AO__V(this.copyLeft__p4__AO__I__AO(this.display1__AO(), ((((cutIndex - 1) >>> 5) & 31) + 1)));
            this.display2$und$eq__AO__V(this.copyLeft__p4__AO__I__AO(this.display2__AO(), ((((cutIndex - 1) >>> 10) & 31) + 1)));
            this.display3$und$eq__AO__V(this.copyLeft__p4__AO__I__AO(this.display3__AO(), ((((cutIndex - 1) >>> 15) & 31) + 1)));
            this.display4$und$eq__AO__V(this.copyLeft__p4__AO__I__AO(this.display4__AO(), (cutIndex >>> 20)))
          } else {
            if ((cutIndex <= 1073741824)) {
              this.zeroRight__p4__AO__I__V(this.display0__AO(), (((cutIndex - 1) & 31) + 1));
              this.display1$und$eq__AO__V(this.copyLeft__p4__AO__I__AO(this.display1__AO(), ((((cutIndex - 1) >>> 5) & 31) + 1)));
              this.display2$und$eq__AO__V(this.copyLeft__p4__AO__I__AO(this.display2__AO(), ((((cutIndex - 1) >>> 10) & 31) + 1)));
              this.display3$und$eq__AO__V(this.copyLeft__p4__AO__I__AO(this.display3__AO(), ((((cutIndex - 1) >>> 15) & 31) + 1)));
              this.display4$und$eq__AO__V(this.copyLeft__p4__AO__I__AO(this.display4__AO(), ((((cutIndex - 1) >>> 20) & 31) + 1)));
              this.display5$und$eq__AO__V(this.copyLeft__p4__AO__I__AO(this.display5__AO(), (cutIndex >>> 25)))
            } else {
              throw new ScalaJS.c.java_lang_IllegalArgumentException().init___()
            }
          }
        }
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.requiredDepth__p4__I__I = (function(xor) {
  if ((xor < 32)) {
    return 1
  } else {
    if ((xor < 1024)) {
      return 2
    } else {
      if ((xor < 32768)) {
        return 3
      } else {
        if ((xor < 1048576)) {
          return 4
        } else {
          if ((xor < 33554432)) {
            return 5
          } else {
            if ((xor < 1073741824)) {
              return 6
            } else {
              throw new ScalaJS.c.java_lang_IllegalArgumentException().init___()
            }
          }
        }
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.dropFront0__p4__I__Lscala_collection_immutable_Vector = (function(cutIndex) {
  var blockIndex = (cutIndex & (~31));
  var lo = (cutIndex & 31);
  var xor = (cutIndex ^ (this.endIndex__I() - 1));
  var d = this.requiredDepth__p4__I__I(xor);
  var shift = (cutIndex & (~((1 << (5 * d)) - 1)));
  var s = new ScalaJS.c.scala_collection_immutable_Vector().init___I__I__I((cutIndex - shift), (this.endIndex__I() - shift), (blockIndex - shift));
  s.initFrom__Lscala_collection_immutable_VectorPointer__V(this);
  s.dirty$und$eq__Z__V(this.dirty__Z());
  s.gotoPosWritable__p4__I__I__I__V(this.focus$4, blockIndex, (this.focus$4 ^ blockIndex));
  s.preClean__p4__I__V(d);
  s.cleanLeftEdge__p4__I__V((cutIndex - shift));
  return s
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.dropBack0__p4__I__Lscala_collection_immutable_Vector = (function(cutIndex) {
  var blockIndex = ((cutIndex - 1) & (~31));
  var lo = (((cutIndex - 1) & 31) + 1);
  var xor = (this.startIndex__I() ^ (cutIndex - 1));
  var d = this.requiredDepth__p4__I__I(xor);
  var shift = (this.startIndex__I() & (~((1 << (5 * d)) - 1)));
  var s = new ScalaJS.c.scala_collection_immutable_Vector().init___I__I__I((this.startIndex__I() - shift), (cutIndex - shift), (blockIndex - shift));
  s.initFrom__Lscala_collection_immutable_VectorPointer__V(this);
  s.dirty$und$eq__Z__V(this.dirty__Z());
  s.gotoPosWritable__p4__I__I__I__V(this.focus$4, blockIndex, (this.focus$4 ^ blockIndex));
  s.preClean__p4__I__V(d);
  s.cleanRightEdge__p4__I__V((cutIndex - shift));
  return s
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.toSeq__Lscala_collection_Seq = (function() {
  return this.toSeq__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__O__Lscala_collection_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.toCollection__O__Lscala_collection_Seq = (function(repr) {
  return this.toCollection__O__Lscala_collection_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.thisCollection__Lscala_collection_Seq = (function() {
  return this.thisCollection__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.seq__Lscala_collection_immutable_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.seq__Lscala_collection_immutable_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.seq__Lscala_collection_immutable_Seq = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.seq__Lscala_collection_IndexedSeq = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.slice__I__I__O = (function(from, until) {
  return this.slice__I__I__Lscala_collection_immutable_Vector(from, until)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.init__O = (function() {
  return this.init__Lscala_collection_immutable_Vector()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.tail__O = (function() {
  return this.tail__Lscala_collection_immutable_Vector()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.dropRight__I__O = (function(n) {
  return this.dropRight__I__Lscala_collection_immutable_Vector(n)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.takeRight__I__O = (function(n) {
  return this.takeRight__I__Lscala_collection_immutable_Vector(n)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.drop__I__O = (function(n) {
  return this.drop__I__Lscala_collection_immutable_Vector(n)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.take__I__O = (function(n) {
  return this.take__I__Lscala_collection_immutable_Vector(n)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.iterator__Lscala_collection_Iterator = (function() {
  return this.iterator__Lscala_collection_immutable_VectorIterator()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.par__Lscala_collection_Parallel = (function() {
  return this.par__Lscala_collection_parallel_immutable_ParVector()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.init___I__I__I = (function(startIndex, endIndex, focus) {
  this.startIndex$4 = startIndex;
  this.endIndex$4 = endIndex;
  this.focus$4 = focus;
  ScalaJS.c.scala_collection_AbstractSeq.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_immutable_Traversable$class__$init$__Lscala_collection_immutable_Traversable__V(this);
  ScalaJS.impls.scala_collection_immutable_Iterable$class__$init$__Lscala_collection_immutable_Iterable__V(this);
  ScalaJS.impls.scala_collection_immutable_Seq$class__$init$__Lscala_collection_immutable_Seq__V(this);
  ScalaJS.impls.scala_collection_IndexedSeqLike$class__$init$__Lscala_collection_IndexedSeqLike__V(this);
  ScalaJS.impls.scala_collection_IndexedSeq$class__$init$__Lscala_collection_IndexedSeq__V(this);
  ScalaJS.impls.scala_collection_immutable_IndexedSeq$class__$init$__Lscala_collection_immutable_IndexedSeq__V(this);
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__$init$__Lscala_collection_immutable_VectorPointer__V(this);
  ScalaJS.impls.scala_collection_CustomParallelizable$class__$init$__Lscala_collection_CustomParallelizable__V(this);
  this.dirty$4 = false;
  return this
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.debug__ = (function() {
  return ScalaJS.bV(this.debug__V())
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.gotoFreshPosWritable1__I__I__I__ = (function(oldIndex, newIndex, xor) {
  return ScalaJS.bV(this.gotoFreshPosWritable1__I__I__I__V(oldIndex, newIndex, xor))
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.gotoFreshPosWritable0__I__I__I__ = (function(oldIndex$2, newIndex$2, xor$2) {
  return ScalaJS.bV(this.gotoFreshPosWritable0__I__I__I__V(oldIndex$2, newIndex$2, xor$2))
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.copyRange__AO__I__I__ = (function(array, oldLeft, newLeft) {
  return this.copyRange__AO__I__I__AO(array, oldLeft, newLeft)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.gotoPosWritable1__I__I__I__ = (function(oldIndex$3, newIndex$3, xor$3) {
  return ScalaJS.bV(this.gotoPosWritable1__I__I__I__V(oldIndex$3, newIndex$3, xor$3))
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.gotoPosWritable0__I__I__ = (function(newIndex$4, xor$4) {
  return ScalaJS.bV(this.gotoPosWritable0__I__I__V(newIndex$4, xor$4))
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.stabilize__I__ = (function(index) {
  return ScalaJS.bV(this.stabilize__I__V(index))
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.nullSlotAndCopy__AO__I__ = (function(array$2, index$2) {
  return this.nullSlotAndCopy__AO__I__AO(array$2, index$2)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.copyOf__AO__ = (function(a) {
  return this.copyOf__AO__AO(a)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.gotoNextBlockStartWritable__I__I__ = (function(index$3, xor$5) {
  return ScalaJS.bV(this.gotoNextBlockStartWritable__I__I__V(index$3, xor$5))
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.gotoNextBlockStart__I__I__ = (function(index$4, xor$6) {
  return ScalaJS.bV(this.gotoNextBlockStart__I__I__V(index$4, xor$6))
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.gotoPos__I__I__ = (function(index$5, xor$7) {
  return ScalaJS.bV(this.gotoPos__I__I__V(index$5, xor$7))
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.getElem__I__I__ = (function(index$6, xor$8) {
  return this.getElem__I__I__O(index$6, xor$8)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.initFrom__Lscala_collection_immutable_VectorPointer__I__ = (function(that, depth) {
  return this.initFrom__Lscala_collection_immutable_VectorPointer__I__V(that, depth)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.initFrom__Lscala_collection_immutable_VectorPointer__ = (function(that$2) {
  return this.initFrom__Lscala_collection_immutable_VectorPointer__V(that$2)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display5$und$eq__AO__ = (function(x$1) {
  return ScalaJS.bV(this.display5$und$eq__AO__V(x$1))
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display5__ = (function() {
  return this.display5__AO()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display4$und$eq__AO__ = (function(x$1$2) {
  return ScalaJS.bV(this.display4$und$eq__AO__V(x$1$2))
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display4__ = (function() {
  return this.display4__AO()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display3$und$eq__AO__ = (function(x$1$3) {
  return ScalaJS.bV(this.display3$und$eq__AO__V(x$1$3))
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display3__ = (function() {
  return this.display3__AO()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display2$und$eq__AO__ = (function(x$1$4) {
  return ScalaJS.bV(this.display2$und$eq__AO__V(x$1$4))
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display2__ = (function() {
  return this.display2__AO()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display1$und$eq__AO__ = (function(x$1$5) {
  return ScalaJS.bV(this.display1$und$eq__AO__V(x$1$5))
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display1__ = (function() {
  return this.display1__AO()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display0$und$eq__AO__ = (function(x$1$6) {
  return ScalaJS.bV(this.display0$und$eq__AO__V(x$1$6))
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.display0__ = (function() {
  return this.display0__AO()
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.depth$und$eq__I__ = (function(x$1$7) {
  return ScalaJS.bV(this.depth$und$eq__I__V(x$1$7))
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.depth__ = (function() {
  return ScalaJS.bI(this.depth__I())
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.appendBack__O__ = (function(value) {
  return this.appendBack__O__Lscala_collection_immutable_Vector(value)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.appendFront__O__ = (function(value$2) {
  return this.appendFront__O__Lscala_collection_immutable_Vector(value$2)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.updateAt__I__O__ = (function(index$7, elem) {
  return this.updateAt__I__O__Lscala_collection_immutable_Vector(index$7, elem)
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.initIterator__Lscala_collection_immutable_VectorIterator__ = (function(s) {
  return ScalaJS.bV(this.initIterator__Lscala_collection_immutable_VectorIterator__V(s))
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.dirty$und$eq__Z__ = (function(x$1$8) {
  return ScalaJS.bV(this.dirty$und$eq__Z__V(x$1$8))
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.dirty__ = (function() {
  return ScalaJS.bZ(this.dirty__Z())
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.endIndex__ = (function() {
  return ScalaJS.bI(this.endIndex__I())
});
ScalaJS.c.scala_collection_immutable_Vector.prototype.startIndex__ = (function() {
  return ScalaJS.bI(this.startIndex__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Vector = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Vector.prototype = ScalaJS.c.scala_collection_immutable_Vector.prototype;
ScalaJS.is.scala_collection_immutable_Vector = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Vector)))
});
ScalaJS.as.scala_collection_immutable_Vector = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Vector(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Vector")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Vector = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Vector)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Vector = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Vector(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Vector;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Vector = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Vector: 0
}, false, "scala.collection.immutable.Vector", ScalaJS.data.scala_collection_AbstractSeq, {
  scala_collection_immutable_Vector: 1,
  scala_collection_CustomParallelizable: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_immutable_VectorPointer: 1,
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
ScalaJS.c.scala_collection_immutable_Vector.prototype.$classData = ScalaJS.data.scala_collection_immutable_Vector;
//@ sourceMappingURL=Vector.js.map
