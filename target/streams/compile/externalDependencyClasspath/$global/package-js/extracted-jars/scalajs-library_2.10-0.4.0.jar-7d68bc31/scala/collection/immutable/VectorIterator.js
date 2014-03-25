/** @constructor */
ScalaJS.c.scala_collection_immutable_VectorIterator = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.$$undendIndex$2 = 0;
  this.blockIndex$2 = 0;
  this.lo$2 = 0;
  this.endIndex$2 = 0;
  this.endLo$2 = 0;
  this.$$undhasNext$2 = false;
  this.depth$2 = 0;
  this.display0$2 = null;
  this.display1$2 = null;
  this.display2$2 = null;
  this.display3$2 = null;
  this.display4$2 = null;
  this.display5$2 = null
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.constructor = ScalaJS.c.scala_collection_immutable_VectorIterator;
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.depth__I = (function() {
  return this.depth$2
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.depth$und$eq__I__V = (function(x$1) {
  this.depth$2 = x$1
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display0__AO = (function() {
  return this.display0$2
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display0$und$eq__AO__V = (function(x$1) {
  this.display0$2 = x$1
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display1__AO = (function() {
  return this.display1$2
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display1$und$eq__AO__V = (function(x$1) {
  this.display1$2 = x$1
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display2__AO = (function() {
  return this.display2$2
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display2$und$eq__AO__V = (function(x$1) {
  this.display2$2 = x$1
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display3__AO = (function() {
  return this.display3$2
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display3$und$eq__AO__V = (function(x$1) {
  this.display3$2 = x$1
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display4__AO = (function() {
  return this.display4$2
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display4$und$eq__AO__V = (function(x$1) {
  this.display4$2 = x$1
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display5__AO = (function() {
  return this.display5$2
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display5$und$eq__AO__V = (function(x$1) {
  this.display5$2 = x$1
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.initFrom__Lscala_collection_immutable_VectorPointer__V = (function(that) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__initFrom__Lscala_collection_immutable_VectorPointer__Lscala_collection_immutable_VectorPointer__V(this, that)
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.initFrom__Lscala_collection_immutable_VectorPointer__I__V = (function(that, depth) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__initFrom__Lscala_collection_immutable_VectorPointer__Lscala_collection_immutable_VectorPointer__I__V(this, that, depth)
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.getElem__I__I__O = (function(index, xor) {
  return ScalaJS.impls.scala_collection_immutable_VectorPointer$class__getElem__Lscala_collection_immutable_VectorPointer__I__I__O(this, index, xor)
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.gotoPos__I__I__V = (function(index, xor) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoPos__Lscala_collection_immutable_VectorPointer__I__I__V(this, index, xor)
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.gotoNextBlockStart__I__I__V = (function(index, xor) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoNextBlockStart__Lscala_collection_immutable_VectorPointer__I__I__V(this, index, xor)
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.gotoNextBlockStartWritable__I__I__V = (function(index, xor) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoNextBlockStartWritable__Lscala_collection_immutable_VectorPointer__I__I__V(this, index, xor)
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.copyOf__AO__AO = (function(a) {
  return ScalaJS.impls.scala_collection_immutable_VectorPointer$class__copyOf__Lscala_collection_immutable_VectorPointer__AO__AO(this, a)
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.nullSlotAndCopy__AO__I__AO = (function(array, index) {
  return ScalaJS.impls.scala_collection_immutable_VectorPointer$class__nullSlotAndCopy__Lscala_collection_immutable_VectorPointer__AO__I__AO(this, array, index)
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.stabilize__I__V = (function(index) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__stabilize__Lscala_collection_immutable_VectorPointer__I__V(this, index)
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.gotoPosWritable0__I__I__V = (function(newIndex, xor) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoPosWritable0__Lscala_collection_immutable_VectorPointer__I__I__V(this, newIndex, xor)
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.gotoPosWritable1__I__I__I__V = (function(oldIndex, newIndex, xor) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoPosWritable1__Lscala_collection_immutable_VectorPointer__I__I__I__V(this, oldIndex, newIndex, xor)
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.copyRange__AO__I__I__AO = (function(array, oldLeft, newLeft) {
  return ScalaJS.impls.scala_collection_immutable_VectorPointer$class__copyRange__Lscala_collection_immutable_VectorPointer__AO__I__I__AO(this, array, oldLeft, newLeft)
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.gotoFreshPosWritable0__I__I__I__V = (function(oldIndex, newIndex, xor) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoFreshPosWritable0__Lscala_collection_immutable_VectorPointer__I__I__I__V(this, oldIndex, newIndex, xor)
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.gotoFreshPosWritable1__I__I__I__V = (function(oldIndex, newIndex, xor) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoFreshPosWritable1__Lscala_collection_immutable_VectorPointer__I__I__I__V(this, oldIndex, newIndex, xor)
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.debug__V = (function() {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__debug__Lscala_collection_immutable_VectorPointer__V(this)
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.blockIndex__p2__I = (function() {
  return this.blockIndex$2
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.blockIndex$und$eq__p2__I__V = (function(x$1) {
  this.blockIndex$2 = x$1
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.lo__p2__I = (function() {
  return this.lo$2
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.lo$und$eq__p2__I__V = (function(x$1) {
  this.lo$2 = x$1
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.endIndex__p2__I = (function() {
  return this.endIndex$2
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.endIndex$und$eq__p2__I__V = (function(x$1) {
  this.endIndex$2 = x$1
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.endLo__p2__I = (function() {
  return this.endLo$2
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.endLo$und$eq__p2__I__V = (function(x$1) {
  this.endLo$2 = x$1
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.hasNext__Z = (function() {
  return this.$$undhasNext__p2__Z()
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.$$undhasNext__p2__Z = (function() {
  return this.$$undhasNext$2
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.$$undhasNext$und$eq__p2__Z__V = (function(x$1) {
  this.$$undhasNext$2 = x$1
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.next__O = (function() {
  if ((!this.$$undhasNext__p2__Z())) {
    throw new ScalaJS.c.java_util_NoSuchElementException().init___T("reached iterator end")
  };
  var res = this.display0__AO().underlying[this.lo__p2__I()];
  this.lo$und$eq__p2__I__V((this.lo__p2__I() + 1));
  if ((this.lo__p2__I() === this.endLo__p2__I())) {
    if (((this.blockIndex__p2__I() + this.lo__p2__I()) < this.endIndex__p2__I())) {
      var newBlockIndex = (this.blockIndex__p2__I() + 32);
      this.gotoNextBlockStart__I__I__V(newBlockIndex, (this.blockIndex__p2__I() ^ newBlockIndex));
      this.blockIndex$und$eq__p2__I__V(newBlockIndex);
      this.endLo$und$eq__p2__I__V(ScalaJS.modules.scala_math_package().min__I__I__I((this.endIndex__p2__I() - this.blockIndex__p2__I()), 32));
      this.lo$und$eq__p2__I__V(0)
    } else {
      this.$$undhasNext$und$eq__p2__Z__V(false)
    }
  };
  return res
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.remainingElementCount__I = (function() {
  return ScalaJS.modules.scala_runtime_RichInt().max$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I((this.$$undendIndex$2 - (this.blockIndex__p2__I() + this.lo__p2__I()))), 0)
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.remainingVector__Lscala_collection_immutable_Vector = (function() {
  var v = new ScalaJS.c.scala_collection_immutable_Vector().init___I__I__I((this.blockIndex__p2__I() + this.lo__p2__I()), this.$$undendIndex$2, (this.blockIndex__p2__I() + this.lo__p2__I()));
  v.initFrom__Lscala_collection_immutable_VectorPointer__V(this);
  return v
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.init___I__I = (function(_startIndex, _endIndex) {
  this.$$undendIndex$2 = _endIndex;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__$init$__Lscala_collection_immutable_VectorPointer__V(this);
  this.blockIndex$2 = (_startIndex & (~31));
  this.lo$2 = (_startIndex & 31);
  this.endIndex$2 = _endIndex;
  this.endLo$2 = ScalaJS.modules.scala_math_package().min__I__I__I((this.endIndex__p2__I() - this.blockIndex__p2__I()), 32);
  this.$$undhasNext$2 = ((this.blockIndex__p2__I() + this.lo__p2__I()) < this.endIndex__p2__I());
  return this
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.debug__ = (function() {
  return ScalaJS.bV(this.debug__V())
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.gotoFreshPosWritable1__I__I__I__ = (function(oldIndex, newIndex, xor) {
  return ScalaJS.bV(this.gotoFreshPosWritable1__I__I__I__V(oldIndex, newIndex, xor))
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.gotoFreshPosWritable0__I__I__I__ = (function(oldIndex$2, newIndex$2, xor$2) {
  return ScalaJS.bV(this.gotoFreshPosWritable0__I__I__I__V(oldIndex$2, newIndex$2, xor$2))
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.copyRange__AO__I__I__ = (function(array, oldLeft, newLeft) {
  return this.copyRange__AO__I__I__AO(array, oldLeft, newLeft)
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.gotoPosWritable1__I__I__I__ = (function(oldIndex$3, newIndex$3, xor$3) {
  return ScalaJS.bV(this.gotoPosWritable1__I__I__I__V(oldIndex$3, newIndex$3, xor$3))
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.gotoPosWritable0__I__I__ = (function(newIndex$4, xor$4) {
  return ScalaJS.bV(this.gotoPosWritable0__I__I__V(newIndex$4, xor$4))
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.stabilize__I__ = (function(index) {
  return ScalaJS.bV(this.stabilize__I__V(index))
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.nullSlotAndCopy__AO__I__ = (function(array$2, index$2) {
  return this.nullSlotAndCopy__AO__I__AO(array$2, index$2)
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.copyOf__AO__ = (function(a) {
  return this.copyOf__AO__AO(a)
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.gotoNextBlockStartWritable__I__I__ = (function(index$3, xor$5) {
  return ScalaJS.bV(this.gotoNextBlockStartWritable__I__I__V(index$3, xor$5))
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.gotoNextBlockStart__I__I__ = (function(index$4, xor$6) {
  return ScalaJS.bV(this.gotoNextBlockStart__I__I__V(index$4, xor$6))
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.gotoPos__I__I__ = (function(index$5, xor$7) {
  return ScalaJS.bV(this.gotoPos__I__I__V(index$5, xor$7))
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.getElem__I__I__ = (function(index$6, xor$8) {
  return this.getElem__I__I__O(index$6, xor$8)
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.initFrom__Lscala_collection_immutable_VectorPointer__I__ = (function(that, depth) {
  return this.initFrom__Lscala_collection_immutable_VectorPointer__I__V(that, depth)
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.initFrom__Lscala_collection_immutable_VectorPointer__ = (function(that$2) {
  return this.initFrom__Lscala_collection_immutable_VectorPointer__V(that$2)
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display5$und$eq__AO__ = (function(x$1) {
  return ScalaJS.bV(this.display5$und$eq__AO__V(x$1))
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display5__ = (function() {
  return this.display5__AO()
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display4$und$eq__AO__ = (function(x$1$2) {
  return ScalaJS.bV(this.display4$und$eq__AO__V(x$1$2))
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display4__ = (function() {
  return this.display4__AO()
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display3$und$eq__AO__ = (function(x$1$3) {
  return ScalaJS.bV(this.display3$und$eq__AO__V(x$1$3))
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display3__ = (function() {
  return this.display3__AO()
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display2$und$eq__AO__ = (function(x$1$4) {
  return ScalaJS.bV(this.display2$und$eq__AO__V(x$1$4))
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display2__ = (function() {
  return this.display2__AO()
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display1$und$eq__AO__ = (function(x$1$5) {
  return ScalaJS.bV(this.display1$und$eq__AO__V(x$1$5))
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display1__ = (function() {
  return this.display1__AO()
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display0$und$eq__AO__ = (function(x$1$6) {
  return ScalaJS.bV(this.display0$und$eq__AO__V(x$1$6))
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.display0__ = (function() {
  return this.display0__AO()
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.depth$und$eq__I__ = (function(x$1$7) {
  return ScalaJS.bV(this.depth$und$eq__I__V(x$1$7))
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.depth__ = (function() {
  return ScalaJS.bI(this.depth__I())
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.remainingVector__ = (function() {
  return this.remainingVector__Lscala_collection_immutable_Vector()
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.remainingElementCount__ = (function() {
  return ScalaJS.bI(this.remainingElementCount__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_VectorIterator = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_VectorIterator.prototype = ScalaJS.c.scala_collection_immutable_VectorIterator.prototype;
ScalaJS.is.scala_collection_immutable_VectorIterator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_VectorIterator)))
});
ScalaJS.as.scala_collection_immutable_VectorIterator = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_VectorIterator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.VectorIterator")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_VectorIterator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_VectorIterator)))
});
ScalaJS.asArrayOf.scala_collection_immutable_VectorIterator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_VectorIterator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.VectorIterator;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_VectorIterator = new ScalaJS.ClassTypeData({
  scala_collection_immutable_VectorIterator: 0
}, false, "scala.collection.immutable.VectorIterator", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_immutable_VectorIterator: 1,
  scala_collection_immutable_VectorPointer: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_VectorIterator.prototype.$classData = ScalaJS.data.scala_collection_immutable_VectorIterator;
//@ sourceMappingURL=VectorIterator.js.map
