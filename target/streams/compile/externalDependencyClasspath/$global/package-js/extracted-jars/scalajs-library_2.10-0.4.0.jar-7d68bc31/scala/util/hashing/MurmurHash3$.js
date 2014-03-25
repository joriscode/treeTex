/** @constructor */
ScalaJS.c.scala_util_hashing_MurmurHash3$ = (function() {
  ScalaJS.c.scala_util_hashing_MurmurHash3.call(this);
  this.arraySeed$2 = 0;
  this.stringSeed$2 = 0;
  this.productSeed$2 = 0;
  this.symmetricSeed$2 = 0;
  this.traversableSeed$2 = 0;
  this.seqSeed$2 = 0;
  this.mapSeed$2 = 0;
  this.setSeed$2 = 0
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype = new ScalaJS.inheritable.scala_util_hashing_MurmurHash3();
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.constructor = ScalaJS.c.scala_util_hashing_MurmurHash3$;
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arraySeed__I = (function() {
  return 1007110753
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.stringSeed__I = (function() {
  return -137723950
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.productSeed__I = (function() {
  return -889275714
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.symmetricSeed__I = (function() {
  return -1248659538
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.traversableSeed__I = (function() {
  return -415593707
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.seqSeed__I = (function() {
  return this.seqSeed$2
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.mapSeed__I = (function() {
  return this.mapSeed$2
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.setSeed__I = (function() {
  return this.setSeed$2
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHash__O__I = (function(a) {
  return this.arrayHash__O__I__I(a, 1007110753)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.bytesHash__AB__I = (function(data) {
  return this.bytesHash__AB__I__I(data, 1007110753)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.orderedHash__Lscala_collection_TraversableOnce__I = (function(xs) {
  return this.orderedHash__Lscala_collection_TraversableOnce__I__I(xs, -1248659538)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.productHash__Lscala_Product__I = (function(x) {
  return this.productHash__Lscala_Product__I__I(x, -889275714)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.stringHash__T__I = (function(x) {
  return this.stringHash__T__I__I(x, -137723950)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.unorderedHash__Lscala_collection_TraversableOnce__I = (function(xs) {
  return this.unorderedHash__Lscala_collection_TraversableOnce__I__I(xs, -415593707)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.seqHash__Lscala_collection_Seq__I = (function(xs) {
  var x1 = xs;
  if (ScalaJS.is.scala_collection_immutable_List(x1)) {
    var x2 = ScalaJS.as.scala_collection_immutable_List(x1);
    return this.listHash__Lscala_collection_immutable_List__I__I(x2, this.seqSeed__I())
  };
  return this.orderedHash__Lscala_collection_TraversableOnce__I__I(x1, this.seqSeed__I())
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.mapHash__Lscala_collection_Map__I = (function(xs) {
  return this.unorderedHash__Lscala_collection_TraversableOnce__I__I(xs, this.mapSeed__I())
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.setHash__Lscala_collection_Set__I = (function(xs) {
  return this.unorderedHash__Lscala_collection_TraversableOnce__I__I(xs, this.setSeed__I())
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHashing__Lscala_util_hashing_MurmurHash3$ArrayHashing = (function() {
  return new ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing().init___()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.bytesHashing__Lscala_util_hashing_Hashing = (function() {
  return new ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$1().init___()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.orderedHashing__Lscala_util_hashing_Hashing = (function() {
  return new ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$2().init___()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.productHashing__Lscala_util_hashing_Hashing = (function() {
  return new ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$3().init___()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.stringHashing__Lscala_util_hashing_Hashing = (function() {
  return new ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$4().init___()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.unorderedHashing__Lscala_util_hashing_Hashing = (function() {
  return new ScalaJS.c.scala_util_hashing_MurmurHash3$$anon$5().init___()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.symmetricHash__Lscala_collection_GenTraversableOnce__I__I = (function(xs, seed) {
  return this.unorderedHash__Lscala_collection_TraversableOnce__I__I(xs.seq__Lscala_collection_TraversableOnce(), seed)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.symmetricHash$default$2__I = (function() {
  return -1248659538
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.traversableHash__Lscala_collection_GenTraversableOnce__I__I = (function(xs, seed) {
  return this.orderedHash__Lscala_collection_TraversableOnce__I__I(xs.seq__Lscala_collection_TraversableOnce(), seed)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.traversableHash$default$2__I = (function() {
  return -415593707
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHash$mZc$sp__AZ__I = (function(a) {
  return this.arrayHash$mZc$sp__AZ__I__I(a, 1007110753)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHash$mBc$sp__AB__I = (function(a) {
  return this.arrayHash$mBc$sp__AB__I__I(a, 1007110753)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHash$mCc$sp__AC__I = (function(a) {
  return this.arrayHash$mCc$sp__AC__I__I(a, 1007110753)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHash$mDc$sp__AD__I = (function(a) {
  return this.arrayHash$mDc$sp__AD__I__I(a, 1007110753)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHash$mFc$sp__AF__I = (function(a) {
  return this.arrayHash$mFc$sp__AF__I__I(a, 1007110753)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHash$mIc$sp__AI__I = (function(a) {
  return this.arrayHash$mIc$sp__AI__I__I(a, 1007110753)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHash$mJc$sp__AJ__I = (function(a) {
  return this.arrayHash$mJc$sp__AJ__I__I(a, 1007110753)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHash$mSc$sp__AS__I = (function(a) {
  return this.arrayHash$mSc$sp__AS__I__I(a, 1007110753)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHash$mVc$sp__ALscala_runtime_BoxedUnit__I = (function(a) {
  return this.arrayHash$mVc$sp__ALscala_runtime_BoxedUnit__I__I(a, 1007110753)
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHashing$mZc$sp__Lscala_util_hashing_MurmurHash3$ArrayHashing = (function() {
  return new ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcZ$sp().init___()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHashing$mBc$sp__Lscala_util_hashing_MurmurHash3$ArrayHashing = (function() {
  return new ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcB$sp().init___()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHashing$mCc$sp__Lscala_util_hashing_MurmurHash3$ArrayHashing = (function() {
  return new ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcC$sp().init___()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHashing$mDc$sp__Lscala_util_hashing_MurmurHash3$ArrayHashing = (function() {
  return new ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcD$sp().init___()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHashing$mFc$sp__Lscala_util_hashing_MurmurHash3$ArrayHashing = (function() {
  return new ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcF$sp().init___()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHashing$mIc$sp__Lscala_util_hashing_MurmurHash3$ArrayHashing = (function() {
  return new ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcI$sp().init___()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHashing$mJc$sp__Lscala_util_hashing_MurmurHash3$ArrayHashing = (function() {
  return new ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcJ$sp().init___()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHashing$mSc$sp__Lscala_util_hashing_MurmurHash3$ArrayHashing = (function() {
  return new ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcS$sp().init___()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHashing$mVc$sp__Lscala_util_hashing_MurmurHash3$ArrayHashing = (function() {
  return new ScalaJS.c.scala_util_hashing_MurmurHash3$ArrayHashing$mcV$sp().init___()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.init___ = (function() {
  ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_util_hashing_MurmurHash3 = this;
  this.seqSeed$2 = ScalaJS.objectHashCode("Seq");
  this.mapSeed$2 = ScalaJS.objectHashCode("Map");
  this.setSeed$2 = ScalaJS.objectHashCode("Set");
  return this
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.traversableHash__Lscala_collection_GenTraversableOnce__I__ = (function(xs, seed) {
  return ScalaJS.bI(this.traversableHash__Lscala_collection_GenTraversableOnce__I__I(xs, seed))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.symmetricHash__Lscala_collection_GenTraversableOnce__I__ = (function(xs$2, seed$2) {
  return ScalaJS.bI(this.symmetricHash__Lscala_collection_GenTraversableOnce__I__I(xs$2, seed$2))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.unorderedHashing__ = (function() {
  return this.unorderedHashing__Lscala_util_hashing_Hashing()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.stringHashing__ = (function() {
  return this.stringHashing__Lscala_util_hashing_Hashing()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.productHashing__ = (function() {
  return this.productHashing__Lscala_util_hashing_Hashing()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.orderedHashing__ = (function() {
  return this.orderedHashing__Lscala_util_hashing_Hashing()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.bytesHashing__ = (function() {
  return this.bytesHashing__Lscala_util_hashing_Hashing()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHashing$mVc$sp__ = (function() {
  return this.arrayHashing$mVc$sp__Lscala_util_hashing_MurmurHash3$ArrayHashing()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHashing$mSc$sp__ = (function() {
  return this.arrayHashing$mSc$sp__Lscala_util_hashing_MurmurHash3$ArrayHashing()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHashing$mJc$sp__ = (function() {
  return this.arrayHashing$mJc$sp__Lscala_util_hashing_MurmurHash3$ArrayHashing()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHashing$mIc$sp__ = (function() {
  return this.arrayHashing$mIc$sp__Lscala_util_hashing_MurmurHash3$ArrayHashing()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHashing$mFc$sp__ = (function() {
  return this.arrayHashing$mFc$sp__Lscala_util_hashing_MurmurHash3$ArrayHashing()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHashing$mDc$sp__ = (function() {
  return this.arrayHashing$mDc$sp__Lscala_util_hashing_MurmurHash3$ArrayHashing()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHashing$mCc$sp__ = (function() {
  return this.arrayHashing$mCc$sp__Lscala_util_hashing_MurmurHash3$ArrayHashing()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHashing$mBc$sp__ = (function() {
  return this.arrayHashing$mBc$sp__Lscala_util_hashing_MurmurHash3$ArrayHashing()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHashing$mZc$sp__ = (function() {
  return this.arrayHashing$mZc$sp__Lscala_util_hashing_MurmurHash3$ArrayHashing()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHashing__ = (function() {
  return this.arrayHashing__Lscala_util_hashing_MurmurHash3$ArrayHashing()
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.setHash__Lscala_collection_Set__ = (function(xs$3) {
  return ScalaJS.bI(this.setHash__Lscala_collection_Set__I(xs$3))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.mapHash__Lscala_collection_Map__ = (function(xs$4) {
  return ScalaJS.bI(this.mapHash__Lscala_collection_Map__I(xs$4))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.seqHash__Lscala_collection_Seq__ = (function(xs$5) {
  return ScalaJS.bI(this.seqHash__Lscala_collection_Seq__I(xs$5))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.unorderedHash__Lscala_collection_TraversableOnce__ = (function(xs$6) {
  return ScalaJS.bI(this.unorderedHash__Lscala_collection_TraversableOnce__I(xs$6))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.stringHash__T__ = (function(x) {
  return ScalaJS.bI(this.stringHash__T__I(x))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.productHash__Lscala_Product__ = (function(x$2) {
  return ScalaJS.bI(this.productHash__Lscala_Product__I(x$2))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.orderedHash__Lscala_collection_TraversableOnce__ = (function(xs$7) {
  return ScalaJS.bI(this.orderedHash__Lscala_collection_TraversableOnce__I(xs$7))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.bytesHash__AB__ = (function(data) {
  return ScalaJS.bI(this.bytesHash__AB__I(data))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHash$mVc$sp__ALscala_runtime_BoxedUnit__ = (function(a) {
  return ScalaJS.bI(this.arrayHash$mVc$sp__ALscala_runtime_BoxedUnit__I(a))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHash$mSc$sp__AS__ = (function(a$2) {
  return ScalaJS.bI(this.arrayHash$mSc$sp__AS__I(a$2))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHash$mJc$sp__AJ__ = (function(a$3) {
  return ScalaJS.bI(this.arrayHash$mJc$sp__AJ__I(a$3))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHash$mIc$sp__AI__ = (function(a$4) {
  return ScalaJS.bI(this.arrayHash$mIc$sp__AI__I(a$4))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHash$mFc$sp__AF__ = (function(a$5) {
  return ScalaJS.bI(this.arrayHash$mFc$sp__AF__I(a$5))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHash$mDc$sp__AD__ = (function(a$6) {
  return ScalaJS.bI(this.arrayHash$mDc$sp__AD__I(a$6))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHash$mCc$sp__AC__ = (function(a$7) {
  return ScalaJS.bI(this.arrayHash$mCc$sp__AC__I(a$7))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHash$mBc$sp__AB__ = (function(a$8) {
  return ScalaJS.bI(this.arrayHash$mBc$sp__AB__I(a$8))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHash$mZc$sp__AZ__ = (function(a$9) {
  return ScalaJS.bI(this.arrayHash$mZc$sp__AZ__I(a$9))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arrayHash__O__ = (function(a$10) {
  return ScalaJS.bI(this.arrayHash__O__I(a$10))
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.setSeed__ = (function() {
  return ScalaJS.bI(this.setSeed__I())
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.mapSeed__ = (function() {
  return ScalaJS.bI(this.mapSeed__I())
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.seqSeed__ = (function() {
  return ScalaJS.bI(this.seqSeed__I())
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.traversableSeed__ = (function() {
  return ScalaJS.bI(this.traversableSeed__I())
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.symmetricSeed__ = (function() {
  return ScalaJS.bI(this.symmetricSeed__I())
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.productSeed__ = (function() {
  return ScalaJS.bI(this.productSeed__I())
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.stringSeed__ = (function() {
  return ScalaJS.bI(this.stringSeed__I())
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.arraySeed__ = (function() {
  return ScalaJS.bI(this.arraySeed__I())
});
/** @constructor */
ScalaJS.inheritable.scala_util_hashing_MurmurHash3$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_hashing_MurmurHash3$.prototype = ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype;
ScalaJS.is.scala_util_hashing_MurmurHash3$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_hashing_MurmurHash3$)))
});
ScalaJS.as.scala_util_hashing_MurmurHash3$ = (function(obj) {
  if ((ScalaJS.is.scala_util_hashing_MurmurHash3$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.hashing.MurmurHash3")
  }
});
ScalaJS.isArrayOf.scala_util_hashing_MurmurHash3$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_hashing_MurmurHash3$)))
});
ScalaJS.asArrayOf.scala_util_hashing_MurmurHash3$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_hashing_MurmurHash3$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.hashing.MurmurHash3;", depth)
  }
});
ScalaJS.data.scala_util_hashing_MurmurHash3$ = new ScalaJS.ClassTypeData({
  scala_util_hashing_MurmurHash3$: 0
}, false, "scala.util.hashing.MurmurHash3$", ScalaJS.data.scala_util_hashing_MurmurHash3, {
  scala_util_hashing_MurmurHash3$: 1,
  scala_util_hashing_MurmurHash3: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_hashing_MurmurHash3$.prototype.$classData = ScalaJS.data.scala_util_hashing_MurmurHash3$;
ScalaJS.moduleInstances.scala_util_hashing_MurmurHash3 = undefined;
ScalaJS.modules.scala_util_hashing_MurmurHash3 = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_hashing_MurmurHash3)) {
    ScalaJS.moduleInstances.scala_util_hashing_MurmurHash3 = new ScalaJS.c.scala_util_hashing_MurmurHash3$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_hashing_MurmurHash3
});
//@ sourceMappingURL=MurmurHash3$.js.map
