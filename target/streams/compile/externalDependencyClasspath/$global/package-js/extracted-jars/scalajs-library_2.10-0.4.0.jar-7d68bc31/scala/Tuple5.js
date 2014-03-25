/** @constructor */
ScalaJS.c.scala_Tuple5 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$und1$1 = null;
  this.$$und2$1 = null;
  this.$$und3$1 = null;
  this.$$und4$1 = null;
  this.$$und5$1 = null
});
ScalaJS.c.scala_Tuple5.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Tuple5.prototype.constructor = ScalaJS.c.scala_Tuple5;
ScalaJS.c.scala_Tuple5.prototype.productArity__I = (function() {
  return ScalaJS.impls.scala_Product5$class__productArity__Lscala_Product5__I(this)
});
ScalaJS.c.scala_Tuple5.prototype.productElement__I__O = (function(n) {
  return ScalaJS.impls.scala_Product5$class__productElement__Lscala_Product5__I__O(this, n)
});
ScalaJS.c.scala_Tuple5.prototype.$$und1__O = (function() {
  return this.$$und1$1
});
ScalaJS.c.scala_Tuple5.prototype.$$und2__O = (function() {
  return this.$$und2$1
});
ScalaJS.c.scala_Tuple5.prototype.$$und3__O = (function() {
  return this.$$und3$1
});
ScalaJS.c.scala_Tuple5.prototype.$$und4__O = (function() {
  return this.$$und4$1
});
ScalaJS.c.scala_Tuple5.prototype.$$und5__O = (function() {
  return this.$$und5$1
});
ScalaJS.c.scala_Tuple5.prototype.toString__T = (function() {
  return (((((((((("(" + this.$$und1__O()) + ",") + this.$$und2__O()) + ",") + this.$$und3__O()) + ",") + this.$$und4__O()) + ",") + this.$$und5__O()) + ")")
});
ScalaJS.c.scala_Tuple5.prototype.copy__O__O__O__O__O__Lscala_Tuple5 = (function(_1, _2, _3, _4, _5) {
  return new ScalaJS.c.scala_Tuple5().init___O__O__O__O__O(_1, _2, _3, _4, _5)
});
ScalaJS.c.scala_Tuple5.prototype.copy$default$1__O = (function() {
  return this.$$und1__O()
});
ScalaJS.c.scala_Tuple5.prototype.copy$default$2__O = (function() {
  return this.$$und2__O()
});
ScalaJS.c.scala_Tuple5.prototype.copy$default$3__O = (function() {
  return this.$$und3__O()
});
ScalaJS.c.scala_Tuple5.prototype.copy$default$4__O = (function() {
  return this.$$und4__O()
});
ScalaJS.c.scala_Tuple5.prototype.copy$default$5__O = (function() {
  return this.$$und5__O()
});
ScalaJS.c.scala_Tuple5.prototype.productPrefix__T = (function() {
  return "Tuple5"
});
ScalaJS.c.scala_Tuple5.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_Tuple5.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_Tuple5(x$1)
});
ScalaJS.c.scala_Tuple5.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_Tuple5.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_Tuple5(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Tuple5$1 = ScalaJS.as.scala_Tuple5(x$1);
      return (((((ScalaJS.anyEqEq(this.$$und1__O(), Tuple5$1.$$und1__O()) && ScalaJS.anyEqEq(this.$$und2__O(), Tuple5$1.$$und2__O())) && ScalaJS.anyEqEq(this.$$und3__O(), Tuple5$1.$$und3__O())) && ScalaJS.anyEqEq(this.$$und4__O(), Tuple5$1.$$und4__O())) && ScalaJS.anyEqEq(this.$$und5__O(), Tuple5$1.$$und5__O())) && Tuple5$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_Tuple5.prototype.init___O__O__O__O__O = (function(_1, _2, _3, _4, _5) {
  this.$$und1$1 = _1;
  this.$$und2$1 = _2;
  this.$$und3$1 = _3;
  this.$$und4$1 = _4;
  this.$$und5$1 = _5;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  ScalaJS.impls.scala_Product5$class__$init$__Lscala_Product5__V(this);
  return this
});
ScalaJS.c.scala_Tuple5.prototype.productElement__I__ = (function(n) {
  return this.productElement__I__O(n)
});
ScalaJS.c.scala_Tuple5.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_Tuple5.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_Tuple5.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_Tuple5.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_Tuple5.prototype.copy__O__O__O__O__O__ = (function(_1, _2, _3, _4, _5) {
  return this.copy__O__O__O__O__O__Lscala_Tuple5(_1, _2, _3, _4, _5)
});
ScalaJS.c.scala_Tuple5.prototype.$$und5__ = (function() {
  return this.$$und5__O()
});
ScalaJS.c.scala_Tuple5.prototype.$$und4__ = (function() {
  return this.$$und4__O()
});
ScalaJS.c.scala_Tuple5.prototype.$$und3__ = (function() {
  return this.$$und3__O()
});
ScalaJS.c.scala_Tuple5.prototype.$$und2__ = (function() {
  return this.$$und2__O()
});
ScalaJS.c.scala_Tuple5.prototype.$$und1__ = (function() {
  return this.$$und1__O()
});
/** @constructor */
ScalaJS.inheritable.scala_Tuple5 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Tuple5.prototype = ScalaJS.c.scala_Tuple5.prototype;
ScalaJS.is.scala_Tuple5 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Tuple5)))
});
ScalaJS.as.scala_Tuple5 = (function(obj) {
  if ((ScalaJS.is.scala_Tuple5(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Tuple5")
  }
});
ScalaJS.isArrayOf.scala_Tuple5 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Tuple5)))
});
ScalaJS.asArrayOf.scala_Tuple5 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Tuple5(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Tuple5;", depth)
  }
});
ScalaJS.data.scala_Tuple5 = new ScalaJS.ClassTypeData({
  scala_Tuple5: 0
}, false, "scala.Tuple5", ScalaJS.data.java_lang_Object, {
  scala_Tuple5: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product5: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Tuple5.prototype.$classData = ScalaJS.data.scala_Tuple5;
//@ sourceMappingURL=Tuple5.js.map
