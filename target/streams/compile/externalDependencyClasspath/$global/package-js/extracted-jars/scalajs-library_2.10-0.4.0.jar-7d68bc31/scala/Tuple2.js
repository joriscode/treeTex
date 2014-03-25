/** @constructor */
ScalaJS.c.scala_Tuple2 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$und1$f = null;
  this.$$und2$f = null
});
ScalaJS.c.scala_Tuple2.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Tuple2.prototype.constructor = ScalaJS.c.scala_Tuple2;
ScalaJS.c.scala_Tuple2.prototype.productArity__I = (function() {
  return ScalaJS.impls.scala_Product2$class__productArity__Lscala_Product2__I(this)
});
ScalaJS.c.scala_Tuple2.prototype.productElement__I__O = (function(n) {
  return ScalaJS.impls.scala_Product2$class__productElement__Lscala_Product2__I__O(this, n)
});
ScalaJS.c.scala_Tuple2.prototype.$$und1__O = (function() {
  return this.$$und1$f
});
ScalaJS.c.scala_Tuple2.prototype.$$und2__O = (function() {
  return this.$$und2$f
});
ScalaJS.c.scala_Tuple2.prototype.toString__T = (function() {
  return (((("(" + this.$$und1__O()) + ",") + this.$$und2__O()) + ")")
});
ScalaJS.c.scala_Tuple2.prototype.swap__Lscala_Tuple2 = (function() {
  return new ScalaJS.c.scala_Tuple2().init___O__O(this.$$und2__O(), this.$$und1__O())
});
ScalaJS.c.scala_Tuple2.prototype.copy__O__O__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2().init___O__O(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$default$1__O = (function() {
  return this.$$und1__O()
});
ScalaJS.c.scala_Tuple2.prototype.copy$default$2__O = (function() {
  return this.$$und2__O()
});
ScalaJS.c.scala_Tuple2.prototype.productPrefix__T = (function() {
  return "Tuple2"
});
ScalaJS.c.scala_Tuple2.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_Tuple2.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_Tuple2(x$1)
});
ScalaJS.c.scala_Tuple2.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_Tuple2.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_Tuple2(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Tuple2$1 = ScalaJS.as.scala_Tuple2(x$1);
      return ((ScalaJS.anyEqEq(this.$$und1__O(), Tuple2$1.$$und1__O()) && ScalaJS.anyEqEq(this.$$und2__O(), Tuple2$1.$$und2__O())) && Tuple2$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_Tuple2.prototype.$$und1$mcZ$sp__Z = (function() {
  return ScalaJS.uZ(this.$$und1__O())
});
ScalaJS.c.scala_Tuple2.prototype.$$und1$mcC$sp__C = (function() {
  return ScalaJS.uC(this.$$und1__O())
});
ScalaJS.c.scala_Tuple2.prototype.$$und1$mcD$sp__D = (function() {
  return ScalaJS.uD(this.$$und1__O())
});
ScalaJS.c.scala_Tuple2.prototype.$$und1$mcI$sp__I = (function() {
  return ScalaJS.uI(this.$$und1__O())
});
ScalaJS.c.scala_Tuple2.prototype.$$und1$mcJ$sp__J = (function() {
  return ScalaJS.uJ(this.$$und1__O())
});
ScalaJS.c.scala_Tuple2.prototype.$$und2$mcZ$sp__Z = (function() {
  return ScalaJS.uZ(this.$$und2__O())
});
ScalaJS.c.scala_Tuple2.prototype.$$und2$mcC$sp__C = (function() {
  return ScalaJS.uC(this.$$und2__O())
});
ScalaJS.c.scala_Tuple2.prototype.$$und2$mcD$sp__D = (function() {
  return ScalaJS.uD(this.$$und2__O())
});
ScalaJS.c.scala_Tuple2.prototype.$$und2$mcI$sp__I = (function() {
  return ScalaJS.uI(this.$$und2__O())
});
ScalaJS.c.scala_Tuple2.prototype.$$und2$mcJ$sp__J = (function() {
  return ScalaJS.uJ(this.$$und2__O())
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcZZ$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcZC$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcZD$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcZI$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcZJ$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcCZ$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcCC$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcCD$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcCI$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcCJ$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcDZ$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcDC$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcDD$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcDI$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcDJ$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcIZ$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcIC$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcID$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcII$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcIJ$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcJZ$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcJC$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcJD$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcJI$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcJJ$sp__Lscala_Tuple2 = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.copy$mZZc$sp__Z__Z__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcZZ$sp().init___Z__Z(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mZCc$sp__Z__C__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcZC$sp().init___Z__C(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mZDc$sp__Z__D__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcZD$sp().init___Z__D(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mZIc$sp__Z__I__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcZI$sp().init___Z__I(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mZJc$sp__Z__J__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcZJ$sp().init___Z__J(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mCZc$sp__C__Z__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcCZ$sp().init___C__Z(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mCCc$sp__C__C__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcCC$sp().init___C__C(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mCDc$sp__C__D__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcCD$sp().init___C__D(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mCIc$sp__C__I__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcCI$sp().init___C__I(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mCJc$sp__C__J__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcCJ$sp().init___C__J(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mDZc$sp__D__Z__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcDZ$sp().init___D__Z(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mDCc$sp__D__C__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcDC$sp().init___D__C(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mDDc$sp__D__D__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcDD$sp().init___D__D(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mDIc$sp__D__I__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcDI$sp().init___D__I(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mDJc$sp__D__J__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcDJ$sp().init___D__J(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mIZc$sp__I__Z__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcIZ$sp().init___I__Z(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mICc$sp__I__C__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcIC$sp().init___I__C(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mIDc$sp__I__D__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcID$sp().init___I__D(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mIIc$sp__I__I__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcII$sp().init___I__I(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mIJc$sp__I__J__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcIJ$sp().init___I__J(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mJZc$sp__J__Z__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcJZ$sp().init___J__Z(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mJCc$sp__J__C__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcJC$sp().init___J__C(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mJDc$sp__J__D__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcJD$sp().init___J__D(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mJIc$sp__J__I__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcJI$sp().init___J__I(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mJJc$sp__J__J__Lscala_Tuple2 = (function(_1, _2) {
  return new ScalaJS.c.scala_Tuple2$mcJJ$sp().init___J__J(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$default$1$mcZ$sp__Z = (function() {
  return ScalaJS.uZ(this.copy$default$1__O())
});
ScalaJS.c.scala_Tuple2.prototype.copy$default$1$mcC$sp__C = (function() {
  return ScalaJS.uC(this.copy$default$1__O())
});
ScalaJS.c.scala_Tuple2.prototype.copy$default$1$mcD$sp__D = (function() {
  return ScalaJS.uD(this.copy$default$1__O())
});
ScalaJS.c.scala_Tuple2.prototype.copy$default$1$mcI$sp__I = (function() {
  return ScalaJS.uI(this.copy$default$1__O())
});
ScalaJS.c.scala_Tuple2.prototype.copy$default$1$mcJ$sp__J = (function() {
  return ScalaJS.uJ(this.copy$default$1__O())
});
ScalaJS.c.scala_Tuple2.prototype.copy$default$2$mcZ$sp__Z = (function() {
  return ScalaJS.uZ(this.copy$default$2__O())
});
ScalaJS.c.scala_Tuple2.prototype.copy$default$2$mcC$sp__C = (function() {
  return ScalaJS.uC(this.copy$default$2__O())
});
ScalaJS.c.scala_Tuple2.prototype.copy$default$2$mcD$sp__D = (function() {
  return ScalaJS.uD(this.copy$default$2__O())
});
ScalaJS.c.scala_Tuple2.prototype.copy$default$2$mcI$sp__I = (function() {
  return ScalaJS.uI(this.copy$default$2__O())
});
ScalaJS.c.scala_Tuple2.prototype.copy$default$2$mcJ$sp__J = (function() {
  return ScalaJS.uJ(this.copy$default$2__O())
});
ScalaJS.c.scala_Tuple2.prototype.specInstance$__Z = (function() {
  return false
});
ScalaJS.c.scala_Tuple2.prototype.init___O__O = (function(_1, _2) {
  this.$$und1$f = _1;
  this.$$und2$f = _2;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  ScalaJS.impls.scala_Product2$class__$init$__Lscala_Product2__V(this);
  return this
});
ScalaJS.c.scala_Tuple2.prototype.productElement__I__ = (function(n) {
  return this.productElement__I__O(n)
});
ScalaJS.c.scala_Tuple2.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_Tuple2.prototype.specInstance$__ = (function() {
  return ScalaJS.bZ(this.specInstance$__Z())
});
ScalaJS.c.scala_Tuple2.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_Tuple2.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_Tuple2.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_Tuple2.prototype.copy$mJJc$sp__J__J__ = (function(_1, _2) {
  return this.copy$mJJc$sp__J__J__Lscala_Tuple2(_1, _2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mJIc$sp__J__I__ = (function(_1$2, _2$2) {
  return this.copy$mJIc$sp__J__I__Lscala_Tuple2(_1$2, _2$2)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mJDc$sp__J__D__ = (function(_1$3, _2$3) {
  return this.copy$mJDc$sp__J__D__Lscala_Tuple2(_1$3, _2$3)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mJCc$sp__J__C__ = (function(_1$4, _2$4) {
  return this.copy$mJCc$sp__J__C__Lscala_Tuple2(_1$4, _2$4)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mJZc$sp__J__Z__ = (function(_1$5, _2$5) {
  return this.copy$mJZc$sp__J__Z__Lscala_Tuple2(_1$5, _2$5)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mIJc$sp__I__J__ = (function(_1$6, _2$6) {
  return this.copy$mIJc$sp__I__J__Lscala_Tuple2(_1$6, _2$6)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mIIc$sp__I__I__ = (function(_1$7, _2$7) {
  return this.copy$mIIc$sp__I__I__Lscala_Tuple2(_1$7, _2$7)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mIDc$sp__I__D__ = (function(_1$8, _2$8) {
  return this.copy$mIDc$sp__I__D__Lscala_Tuple2(_1$8, _2$8)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mICc$sp__I__C__ = (function(_1$9, _2$9) {
  return this.copy$mICc$sp__I__C__Lscala_Tuple2(_1$9, _2$9)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mIZc$sp__I__Z__ = (function(_1$10, _2$10) {
  return this.copy$mIZc$sp__I__Z__Lscala_Tuple2(_1$10, _2$10)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mDJc$sp__D__J__ = (function(_1$11, _2$11) {
  return this.copy$mDJc$sp__D__J__Lscala_Tuple2(_1$11, _2$11)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mDIc$sp__D__I__ = (function(_1$12, _2$12) {
  return this.copy$mDIc$sp__D__I__Lscala_Tuple2(_1$12, _2$12)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mDDc$sp__D__D__ = (function(_1$13, _2$13) {
  return this.copy$mDDc$sp__D__D__Lscala_Tuple2(_1$13, _2$13)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mDCc$sp__D__C__ = (function(_1$14, _2$14) {
  return this.copy$mDCc$sp__D__C__Lscala_Tuple2(_1$14, _2$14)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mDZc$sp__D__Z__ = (function(_1$15, _2$15) {
  return this.copy$mDZc$sp__D__Z__Lscala_Tuple2(_1$15, _2$15)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mCJc$sp__C__J__ = (function(_1$16, _2$16) {
  return this.copy$mCJc$sp__C__J__Lscala_Tuple2(_1$16, _2$16)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mCIc$sp__C__I__ = (function(_1$17, _2$17) {
  return this.copy$mCIc$sp__C__I__Lscala_Tuple2(_1$17, _2$17)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mCDc$sp__C__D__ = (function(_1$18, _2$18) {
  return this.copy$mCDc$sp__C__D__Lscala_Tuple2(_1$18, _2$18)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mCCc$sp__C__C__ = (function(_1$19, _2$19) {
  return this.copy$mCCc$sp__C__C__Lscala_Tuple2(_1$19, _2$19)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mCZc$sp__C__Z__ = (function(_1$20, _2$20) {
  return this.copy$mCZc$sp__C__Z__Lscala_Tuple2(_1$20, _2$20)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mZJc$sp__Z__J__ = (function(_1$21, _2$21) {
  return this.copy$mZJc$sp__Z__J__Lscala_Tuple2(_1$21, _2$21)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mZIc$sp__Z__I__ = (function(_1$22, _2$22) {
  return this.copy$mZIc$sp__Z__I__Lscala_Tuple2(_1$22, _2$22)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mZDc$sp__Z__D__ = (function(_1$23, _2$23) {
  return this.copy$mZDc$sp__Z__D__Lscala_Tuple2(_1$23, _2$23)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mZCc$sp__Z__C__ = (function(_1$24, _2$24) {
  return this.copy$mZCc$sp__Z__C__Lscala_Tuple2(_1$24, _2$24)
});
ScalaJS.c.scala_Tuple2.prototype.copy$mZZc$sp__Z__Z__ = (function(_1$25, _2$25) {
  return this.copy$mZZc$sp__Z__Z__Lscala_Tuple2(_1$25, _2$25)
});
ScalaJS.c.scala_Tuple2.prototype.copy__O__O__ = (function(_1$26, _2$26) {
  return this.copy__O__O__Lscala_Tuple2(_1$26, _2$26)
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcJJ$sp__ = (function() {
  return this.swap$mcJJ$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcJI$sp__ = (function() {
  return this.swap$mcJI$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcJD$sp__ = (function() {
  return this.swap$mcJD$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcJC$sp__ = (function() {
  return this.swap$mcJC$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcJZ$sp__ = (function() {
  return this.swap$mcJZ$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcIJ$sp__ = (function() {
  return this.swap$mcIJ$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcII$sp__ = (function() {
  return this.swap$mcII$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcID$sp__ = (function() {
  return this.swap$mcID$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcIC$sp__ = (function() {
  return this.swap$mcIC$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcIZ$sp__ = (function() {
  return this.swap$mcIZ$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcDJ$sp__ = (function() {
  return this.swap$mcDJ$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcDI$sp__ = (function() {
  return this.swap$mcDI$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcDD$sp__ = (function() {
  return this.swap$mcDD$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcDC$sp__ = (function() {
  return this.swap$mcDC$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcDZ$sp__ = (function() {
  return this.swap$mcDZ$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcCJ$sp__ = (function() {
  return this.swap$mcCJ$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcCI$sp__ = (function() {
  return this.swap$mcCI$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcCD$sp__ = (function() {
  return this.swap$mcCD$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcCC$sp__ = (function() {
  return this.swap$mcCC$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcCZ$sp__ = (function() {
  return this.swap$mcCZ$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcZJ$sp__ = (function() {
  return this.swap$mcZJ$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcZI$sp__ = (function() {
  return this.swap$mcZI$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcZD$sp__ = (function() {
  return this.swap$mcZD$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcZC$sp__ = (function() {
  return this.swap$mcZC$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap$mcZZ$sp__ = (function() {
  return this.swap$mcZZ$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.swap__ = (function() {
  return this.swap__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2.prototype.$$und2$mcJ$sp__ = (function() {
  return ScalaJS.bJ(this.$$und2$mcJ$sp__J())
});
ScalaJS.c.scala_Tuple2.prototype.$$und2$mcI$sp__ = (function() {
  return ScalaJS.bI(this.$$und2$mcI$sp__I())
});
ScalaJS.c.scala_Tuple2.prototype.$$und2$mcD$sp__ = (function() {
  return ScalaJS.bD(this.$$und2$mcD$sp__D())
});
ScalaJS.c.scala_Tuple2.prototype.$$und2$mcC$sp__ = (function() {
  return ScalaJS.bC(this.$$und2$mcC$sp__C())
});
ScalaJS.c.scala_Tuple2.prototype.$$und2$mcZ$sp__ = (function() {
  return ScalaJS.bZ(this.$$und2$mcZ$sp__Z())
});
ScalaJS.c.scala_Tuple2.prototype.$$und2__ = (function() {
  return this.$$und2__O()
});
ScalaJS.c.scala_Tuple2.prototype.$$und1$mcJ$sp__ = (function() {
  return ScalaJS.bJ(this.$$und1$mcJ$sp__J())
});
ScalaJS.c.scala_Tuple2.prototype.$$und1$mcI$sp__ = (function() {
  return ScalaJS.bI(this.$$und1$mcI$sp__I())
});
ScalaJS.c.scala_Tuple2.prototype.$$und1$mcD$sp__ = (function() {
  return ScalaJS.bD(this.$$und1$mcD$sp__D())
});
ScalaJS.c.scala_Tuple2.prototype.$$und1$mcC$sp__ = (function() {
  return ScalaJS.bC(this.$$und1$mcC$sp__C())
});
ScalaJS.c.scala_Tuple2.prototype.$$und1$mcZ$sp__ = (function() {
  return ScalaJS.bZ(this.$$und1$mcZ$sp__Z())
});
ScalaJS.c.scala_Tuple2.prototype.$$und1__ = (function() {
  return this.$$und1__O()
});
/** @constructor */
ScalaJS.inheritable.scala_Tuple2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Tuple2.prototype = ScalaJS.c.scala_Tuple2.prototype;
ScalaJS.is.scala_Tuple2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Tuple2)))
});
ScalaJS.as.scala_Tuple2 = (function(obj) {
  if ((ScalaJS.is.scala_Tuple2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Tuple2")
  }
});
ScalaJS.isArrayOf.scala_Tuple2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Tuple2)))
});
ScalaJS.asArrayOf.scala_Tuple2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Tuple2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Tuple2;", depth)
  }
});
ScalaJS.data.scala_Tuple2 = new ScalaJS.ClassTypeData({
  scala_Tuple2: 0
}, false, "scala.Tuple2", ScalaJS.data.java_lang_Object, {
  scala_Tuple2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product2: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Tuple2.prototype.$classData = ScalaJS.data.scala_Tuple2;
//@ sourceMappingURL=Tuple2.js.map
