/** @constructor */
ScalaJS.c.scala_Tuple1 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$und1$f = null
});
ScalaJS.c.scala_Tuple1.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Tuple1.prototype.constructor = ScalaJS.c.scala_Tuple1;
ScalaJS.c.scala_Tuple1.prototype.productArity__I = (function() {
  return ScalaJS.impls.scala_Product1$class__productArity__Lscala_Product1__I(this)
});
ScalaJS.c.scala_Tuple1.prototype.productElement__I__O = (function(n) {
  return ScalaJS.impls.scala_Product1$class__productElement__Lscala_Product1__I__O(this, n)
});
ScalaJS.c.scala_Tuple1.prototype.$$und1__O = (function() {
  return this.$$und1$f
});
ScalaJS.c.scala_Tuple1.prototype.toString__T = (function() {
  return (("(" + this.$$und1__O()) + ")")
});
ScalaJS.c.scala_Tuple1.prototype.copy__O__Lscala_Tuple1 = (function(_1) {
  return new ScalaJS.c.scala_Tuple1().init___O(_1)
});
ScalaJS.c.scala_Tuple1.prototype.copy$default$1__O = (function() {
  return this.$$und1__O()
});
ScalaJS.c.scala_Tuple1.prototype.productPrefix__T = (function() {
  return "Tuple1"
});
ScalaJS.c.scala_Tuple1.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_Tuple1.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_Tuple1(x$1)
});
ScalaJS.c.scala_Tuple1.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_Tuple1.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_Tuple1(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Tuple1$1 = ScalaJS.as.scala_Tuple1(x$1);
      return (ScalaJS.anyEqEq(this.$$und1__O(), Tuple1$1.$$und1__O()) && Tuple1$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_Tuple1.prototype.$$und1$mcD$sp__D = (function() {
  return ScalaJS.uD(this.$$und1__O())
});
ScalaJS.c.scala_Tuple1.prototype.$$und1$mcI$sp__I = (function() {
  return ScalaJS.uI(this.$$und1__O())
});
ScalaJS.c.scala_Tuple1.prototype.$$und1$mcJ$sp__J = (function() {
  return ScalaJS.uJ(this.$$und1__O())
});
ScalaJS.c.scala_Tuple1.prototype.copy$mDc$sp__D__Lscala_Tuple1 = (function(_1) {
  return new ScalaJS.c.scala_Tuple1$mcD$sp().init___D(_1)
});
ScalaJS.c.scala_Tuple1.prototype.copy$mIc$sp__I__Lscala_Tuple1 = (function(_1) {
  return new ScalaJS.c.scala_Tuple1$mcI$sp().init___I(_1)
});
ScalaJS.c.scala_Tuple1.prototype.copy$mJc$sp__J__Lscala_Tuple1 = (function(_1) {
  return new ScalaJS.c.scala_Tuple1$mcJ$sp().init___J(_1)
});
ScalaJS.c.scala_Tuple1.prototype.copy$default$1$mcD$sp__D = (function() {
  return ScalaJS.uD(this.copy$default$1__O())
});
ScalaJS.c.scala_Tuple1.prototype.copy$default$1$mcI$sp__I = (function() {
  return ScalaJS.uI(this.copy$default$1__O())
});
ScalaJS.c.scala_Tuple1.prototype.copy$default$1$mcJ$sp__J = (function() {
  return ScalaJS.uJ(this.copy$default$1__O())
});
ScalaJS.c.scala_Tuple1.prototype.specInstance$__Z = (function() {
  return false
});
ScalaJS.c.scala_Tuple1.prototype.init___O = (function(_1) {
  this.$$und1$f = _1;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  ScalaJS.impls.scala_Product1$class__$init$__Lscala_Product1__V(this);
  return this
});
ScalaJS.c.scala_Tuple1.prototype.productElement__I__ = (function(n) {
  return this.productElement__I__O(n)
});
ScalaJS.c.scala_Tuple1.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_Tuple1.prototype.specInstance$__ = (function() {
  return ScalaJS.bZ(this.specInstance$__Z())
});
ScalaJS.c.scala_Tuple1.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_Tuple1.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_Tuple1.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_Tuple1.prototype.copy$mJc$sp__J__ = (function(_1) {
  return this.copy$mJc$sp__J__Lscala_Tuple1(_1)
});
ScalaJS.c.scala_Tuple1.prototype.copy$mIc$sp__I__ = (function(_1$2) {
  return this.copy$mIc$sp__I__Lscala_Tuple1(_1$2)
});
ScalaJS.c.scala_Tuple1.prototype.copy$mDc$sp__D__ = (function(_1$3) {
  return this.copy$mDc$sp__D__Lscala_Tuple1(_1$3)
});
ScalaJS.c.scala_Tuple1.prototype.copy__O__ = (function(_1$4) {
  return this.copy__O__Lscala_Tuple1(_1$4)
});
ScalaJS.c.scala_Tuple1.prototype.$$und1$mcJ$sp__ = (function() {
  return ScalaJS.bJ(this.$$und1$mcJ$sp__J())
});
ScalaJS.c.scala_Tuple1.prototype.$$und1$mcI$sp__ = (function() {
  return ScalaJS.bI(this.$$und1$mcI$sp__I())
});
ScalaJS.c.scala_Tuple1.prototype.$$und1$mcD$sp__ = (function() {
  return ScalaJS.bD(this.$$und1$mcD$sp__D())
});
ScalaJS.c.scala_Tuple1.prototype.$$und1__ = (function() {
  return this.$$und1__O()
});
/** @constructor */
ScalaJS.inheritable.scala_Tuple1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Tuple1.prototype = ScalaJS.c.scala_Tuple1.prototype;
ScalaJS.is.scala_Tuple1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Tuple1)))
});
ScalaJS.as.scala_Tuple1 = (function(obj) {
  if ((ScalaJS.is.scala_Tuple1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Tuple1")
  }
});
ScalaJS.isArrayOf.scala_Tuple1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Tuple1)))
});
ScalaJS.asArrayOf.scala_Tuple1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Tuple1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Tuple1;", depth)
  }
});
ScalaJS.data.scala_Tuple1 = new ScalaJS.ClassTypeData({
  scala_Tuple1: 0
}, false, "scala.Tuple1", ScalaJS.data.java_lang_Object, {
  scala_Tuple1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product1: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Tuple1.prototype.$classData = ScalaJS.data.scala_Tuple1;
//@ sourceMappingURL=Tuple1.js.map
