/** @constructor */
ScalaJS.c.scala_collection_immutable_VectorBuilder = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.blockIndex$1 = 0;
  this.lo$1 = 0;
  this.depth$1 = 0;
  this.display0$1 = null;
  this.display1$1 = null;
  this.display2$1 = null;
  this.display3$1 = null;
  this.display4$1 = null;
  this.display5$1 = null
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.constructor = ScalaJS.c.scala_collection_immutable_VectorBuilder;
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.depth__I = (function() {
  return this.depth$1
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.depth$und$eq__I__V = (function(x$1) {
  this.depth$1 = x$1
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display0__AO = (function() {
  return this.display0$1
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display0$und$eq__AO__V = (function(x$1) {
  this.display0$1 = x$1
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display1__AO = (function() {
  return this.display1$1
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display1$und$eq__AO__V = (function(x$1) {
  this.display1$1 = x$1
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display2__AO = (function() {
  return this.display2$1
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display2$und$eq__AO__V = (function(x$1) {
  this.display2$1 = x$1
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display3__AO = (function() {
  return this.display3$1
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display3$und$eq__AO__V = (function(x$1) {
  this.display3$1 = x$1
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display4__AO = (function() {
  return this.display4$1
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display4$und$eq__AO__V = (function(x$1) {
  this.display4$1 = x$1
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display5__AO = (function() {
  return this.display5$1
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display5$und$eq__AO__V = (function(x$1) {
  this.display5$1 = x$1
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.initFrom__Lscala_collection_immutable_VectorPointer__V = (function(that) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__initFrom__Lscala_collection_immutable_VectorPointer__Lscala_collection_immutable_VectorPointer__V(this, that)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.initFrom__Lscala_collection_immutable_VectorPointer__I__V = (function(that, depth) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__initFrom__Lscala_collection_immutable_VectorPointer__Lscala_collection_immutable_VectorPointer__I__V(this, that, depth)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.getElem__I__I__O = (function(index, xor) {
  return ScalaJS.impls.scala_collection_immutable_VectorPointer$class__getElem__Lscala_collection_immutable_VectorPointer__I__I__O(this, index, xor)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.gotoPos__I__I__V = (function(index, xor) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoPos__Lscala_collection_immutable_VectorPointer__I__I__V(this, index, xor)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.gotoNextBlockStart__I__I__V = (function(index, xor) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoNextBlockStart__Lscala_collection_immutable_VectorPointer__I__I__V(this, index, xor)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.gotoNextBlockStartWritable__I__I__V = (function(index, xor) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoNextBlockStartWritable__Lscala_collection_immutable_VectorPointer__I__I__V(this, index, xor)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.copyOf__AO__AO = (function(a) {
  return ScalaJS.impls.scala_collection_immutable_VectorPointer$class__copyOf__Lscala_collection_immutable_VectorPointer__AO__AO(this, a)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.nullSlotAndCopy__AO__I__AO = (function(array, index) {
  return ScalaJS.impls.scala_collection_immutable_VectorPointer$class__nullSlotAndCopy__Lscala_collection_immutable_VectorPointer__AO__I__AO(this, array, index)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.stabilize__I__V = (function(index) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__stabilize__Lscala_collection_immutable_VectorPointer__I__V(this, index)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.gotoPosWritable0__I__I__V = (function(newIndex, xor) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoPosWritable0__Lscala_collection_immutable_VectorPointer__I__I__V(this, newIndex, xor)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.gotoPosWritable1__I__I__I__V = (function(oldIndex, newIndex, xor) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoPosWritable1__Lscala_collection_immutable_VectorPointer__I__I__I__V(this, oldIndex, newIndex, xor)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.copyRange__AO__I__I__AO = (function(array, oldLeft, newLeft) {
  return ScalaJS.impls.scala_collection_immutable_VectorPointer$class__copyRange__Lscala_collection_immutable_VectorPointer__AO__I__I__AO(this, array, oldLeft, newLeft)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.gotoFreshPosWritable0__I__I__I__V = (function(oldIndex, newIndex, xor) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoFreshPosWritable0__Lscala_collection_immutable_VectorPointer__I__I__I__V(this, oldIndex, newIndex, xor)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.gotoFreshPosWritable1__I__I__I__V = (function(oldIndex, newIndex, xor) {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoFreshPosWritable1__Lscala_collection_immutable_VectorPointer__I__I__I__V(this, oldIndex, newIndex, xor)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.debug__V = (function() {
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__debug__Lscala_collection_immutable_VectorPointer__V(this)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.sizeHint__I__V = (function(size) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__I__V(this, size)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__V = (function(coll) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__V(this, coll)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__I__V = (function(coll, delta) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__I__V(this, coll, delta)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__V = (function(size, boundingColl) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHintBounded__Lscala_collection_mutable_Builder__I__Lscala_collection_TraversableLike__V(this, size, boundingColl)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder = (function(f) {
  return ScalaJS.impls.scala_collection_mutable_Builder$class__mapResult__Lscala_collection_mutable_Builder__Lscala_Function1__Lscala_collection_mutable_Builder(this, f)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable = (function(elem1, elem2, elems) {
  return ScalaJS.impls.scala_collection_generic_Growable$class__$plus$eq__Lscala_collection_generic_Growable__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(this, elem1, elem2, elems)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.blockIndex__p1__I = (function() {
  return this.blockIndex$1
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.blockIndex$und$eq__p1__I__V = (function(x$1) {
  this.blockIndex$1 = x$1
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.lo__p1__I = (function() {
  return this.lo$1
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.lo$und$eq__p1__I__V = (function(x$1) {
  this.lo$1 = x$1
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.$$plus$eq__O__Lscala_collection_immutable_VectorBuilder = (function(elem) {
  if ((this.lo__p1__I() >= this.display0__AO().underlying.length)) {
    var newBlockIndex = (this.blockIndex__p1__I() + 32);
    this.gotoNextBlockStartWritable__I__I__V(newBlockIndex, (this.blockIndex__p1__I() ^ newBlockIndex));
    this.blockIndex$und$eq__p1__I__V(newBlockIndex);
    this.lo$und$eq__p1__I__V(0)
  };
  this.display0__AO().underlying[this.lo__p1__I()] = elem;
  this.lo$und$eq__p1__I__V((this.lo__p1__I() + 1));
  return this
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_immutable_VectorBuilder = (function(xs) {
  return ScalaJS.as.scala_collection_immutable_VectorBuilder(ScalaJS.impls.scala_collection_generic_Growable$class__$plus$plus$eq__Lscala_collection_generic_Growable__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this, xs))
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.result__Lscala_collection_immutable_Vector = (function() {
  var size = (this.blockIndex__p1__I() + this.lo__p1__I());
  if ((size === 0)) {
    return ScalaJS.modules.scala_collection_immutable_Vector().empty__Lscala_collection_immutable_Vector()
  };
  var s = new ScalaJS.c.scala_collection_immutable_Vector().init___I__I__I(0, size, 0);
  s.initFrom__Lscala_collection_immutable_VectorPointer__V(this);
  if ((this.depth__I() > 1)) {
    s.gotoPos__I__I__V(0, (size - 1))
  };
  return s
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.clear__V = (function() {
  this.display0$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
  this.depth$und$eq__I__V(1);
  this.blockIndex$und$eq__p1__I__V(0);
  this.lo$und$eq__p1__I__V(0)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.result__O = (function() {
  return this.result__Lscala_collection_immutable_Vector()
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable = (function(xs) {
  return this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_immutable_VectorBuilder(xs)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_immutable_VectorBuilder(elem)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_immutable_VectorBuilder(elem)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_generic_Growable$class__$init$__Lscala_collection_generic_Growable__V(this);
  ScalaJS.impls.scala_collection_mutable_Builder$class__$init$__Lscala_collection_mutable_Builder__V(this);
  ScalaJS.impls.scala_collection_immutable_VectorPointer$class__$init$__Lscala_collection_immutable_VectorPointer__V(this);
  this.display0$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
  this.depth$und$eq__I__V(1);
  this.blockIndex$1 = 0;
  this.lo$1 = 0;
  return this
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.$$plus$eq__O__O__Lscala_collection_Seq__ = (function(elem1, elem2, elems) {
  return this.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.mapResult__Lscala_Function1__ = (function(f) {
  return this.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(f)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__ = (function(size, boundingColl) {
  return ScalaJS.bV(this.sizeHintBounded__I__Lscala_collection_TraversableLike__V(size, boundingColl))
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__I__ = (function(coll, delta) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__I__V(coll, delta))
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__ = (function(coll$2) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__V(coll$2))
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.sizeHint__I__ = (function(size$2) {
  return ScalaJS.bV(this.sizeHint__I__V(size$2))
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.debug__ = (function() {
  return ScalaJS.bV(this.debug__V())
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.gotoFreshPosWritable1__I__I__I__ = (function(oldIndex, newIndex, xor) {
  return ScalaJS.bV(this.gotoFreshPosWritable1__I__I__I__V(oldIndex, newIndex, xor))
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.gotoFreshPosWritable0__I__I__I__ = (function(oldIndex$2, newIndex$2, xor$2) {
  return ScalaJS.bV(this.gotoFreshPosWritable0__I__I__I__V(oldIndex$2, newIndex$2, xor$2))
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.copyRange__AO__I__I__ = (function(array, oldLeft, newLeft) {
  return this.copyRange__AO__I__I__AO(array, oldLeft, newLeft)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.gotoPosWritable1__I__I__I__ = (function(oldIndex$3, newIndex$3, xor$3) {
  return ScalaJS.bV(this.gotoPosWritable1__I__I__I__V(oldIndex$3, newIndex$3, xor$3))
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.gotoPosWritable0__I__I__ = (function(newIndex$4, xor$4) {
  return ScalaJS.bV(this.gotoPosWritable0__I__I__V(newIndex$4, xor$4))
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.stabilize__I__ = (function(index) {
  return ScalaJS.bV(this.stabilize__I__V(index))
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.nullSlotAndCopy__AO__I__ = (function(array$2, index$2) {
  return this.nullSlotAndCopy__AO__I__AO(array$2, index$2)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.copyOf__AO__ = (function(a) {
  return this.copyOf__AO__AO(a)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.gotoNextBlockStartWritable__I__I__ = (function(index$3, xor$5) {
  return ScalaJS.bV(this.gotoNextBlockStartWritable__I__I__V(index$3, xor$5))
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.gotoNextBlockStart__I__I__ = (function(index$4, xor$6) {
  return ScalaJS.bV(this.gotoNextBlockStart__I__I__V(index$4, xor$6))
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.gotoPos__I__I__ = (function(index$5, xor$7) {
  return ScalaJS.bV(this.gotoPos__I__I__V(index$5, xor$7))
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.getElem__I__I__ = (function(index$6, xor$8) {
  return this.getElem__I__I__O(index$6, xor$8)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.initFrom__Lscala_collection_immutable_VectorPointer__I__ = (function(that, depth) {
  return this.initFrom__Lscala_collection_immutable_VectorPointer__I__V(that, depth)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.initFrom__Lscala_collection_immutable_VectorPointer__ = (function(that$2) {
  return this.initFrom__Lscala_collection_immutable_VectorPointer__V(that$2)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display5$und$eq__AO__ = (function(x$1) {
  return ScalaJS.bV(this.display5$und$eq__AO__V(x$1))
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display5__ = (function() {
  return this.display5__AO()
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display4$und$eq__AO__ = (function(x$1$2) {
  return ScalaJS.bV(this.display4$und$eq__AO__V(x$1$2))
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display4__ = (function() {
  return this.display4__AO()
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display3$und$eq__AO__ = (function(x$1$3) {
  return ScalaJS.bV(this.display3$und$eq__AO__V(x$1$3))
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display3__ = (function() {
  return this.display3__AO()
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display2$und$eq__AO__ = (function(x$1$4) {
  return ScalaJS.bV(this.display2$und$eq__AO__V(x$1$4))
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display2__ = (function() {
  return this.display2__AO()
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display1$und$eq__AO__ = (function(x$1$5) {
  return ScalaJS.bV(this.display1$und$eq__AO__V(x$1$5))
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display1__ = (function() {
  return this.display1__AO()
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display0$und$eq__AO__ = (function(x$1$6) {
  return ScalaJS.bV(this.display0$und$eq__AO__V(x$1$6))
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.display0__ = (function() {
  return this.display0__AO()
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.depth$und$eq__I__ = (function(x$1$7) {
  return ScalaJS.bV(this.depth$und$eq__I__V(x$1$7))
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.depth__ = (function() {
  return ScalaJS.bI(this.depth__I())
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.clear__ = (function() {
  return ScalaJS.bV(this.clear__V())
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.result__ = (function() {
  return this.result__Lscala_collection_immutable_Vector()
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__ = (function(xs) {
  return this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_immutable_VectorBuilder(xs)
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.$$plus$eq__O__ = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_immutable_VectorBuilder(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_VectorBuilder = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_VectorBuilder.prototype = ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype;
ScalaJS.is.scala_collection_immutable_VectorBuilder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_VectorBuilder)))
});
ScalaJS.as.scala_collection_immutable_VectorBuilder = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_VectorBuilder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.VectorBuilder")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_VectorBuilder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_VectorBuilder)))
});
ScalaJS.asArrayOf.scala_collection_immutable_VectorBuilder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_VectorBuilder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.VectorBuilder;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_VectorBuilder = new ScalaJS.ClassTypeData({
  scala_collection_immutable_VectorBuilder: 0
}, false, "scala.collection.immutable.VectorBuilder", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_VectorBuilder: 1,
  scala_collection_immutable_VectorPointer: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_VectorBuilder.prototype.$classData = ScalaJS.data.scala_collection_immutable_VectorBuilder;
//@ sourceMappingURL=VectorBuilder.js.map
