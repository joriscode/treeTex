/** @constructor */
ScalaJS.c.scala_Tuple9 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$und1$1 = null;
  this.$$und2$1 = null;
  this.$$und3$1 = null;
  this.$$und4$1 = null;
  this.$$und5$1 = null;
  this.$$und6$1 = null;
  this.$$und7$1 = null;
  this.$$und8$1 = null;
  this.$$und9$1 = null
});
ScalaJS.c.scala_Tuple9.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Tuple9.prototype.constructor = ScalaJS.c.scala_Tuple9;
ScalaJS.c.scala_Tuple9.prototype.productArity__I = (function() {
  return ScalaJS.impls.scala_Product9$class__productArity__Lscala_Product9__I(this)
});
ScalaJS.c.scala_Tuple9.prototype.productElement__I__O = (function(n) {
  return ScalaJS.impls.scala_Product9$class__productElement__Lscala_Product9__I__O(this, n)
});
ScalaJS.c.scala_Tuple9.prototype.$$und1__O = (function() {
  return this.$$und1$1
});
ScalaJS.c.scala_Tuple9.prototype.$$und2__O = (function() {
  return this.$$und2$1
});
ScalaJS.c.scala_Tuple9.prototype.$$und3__O = (function() {
  return this.$$und3$1
});
ScalaJS.c.scala_Tuple9.prototype.$$und4__O = (function() {
  return this.$$und4$1
});
ScalaJS.c.scala_Tuple9.prototype.$$und5__O = (function() {
  return this.$$und5$1
});
ScalaJS.c.scala_Tuple9.prototype.$$und6__O = (function() {
  return this.$$und6$1
});
ScalaJS.c.scala_Tuple9.prototype.$$und7__O = (function() {
  return this.$$und7$1
});
ScalaJS.c.scala_Tuple9.prototype.$$und8__O = (function() {
  return this.$$und8$1
});
ScalaJS.c.scala_Tuple9.prototype.$$und9__O = (function() {
  return this.$$und9$1
});
ScalaJS.c.scala_Tuple9.prototype.toString__T = (function() {
  return (((((((((((((((((("(" + this.$$und1__O()) + ",") + this.$$und2__O()) + ",") + this.$$und3__O()) + ",") + this.$$und4__O()) + ",") + this.$$und5__O()) + ",") + this.$$und6__O()) + ",") + this.$$und7__O()) + ",") + this.$$und8__O()) + ",") + this.$$und9__O()) + ")")
});
ScalaJS.c.scala_Tuple9.prototype.copy__O__O__O__O__O__O__O__O__O__Lscala_Tuple9 = (function(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  return new ScalaJS.c.scala_Tuple9().init___O__O__O__O__O__O__O__O__O(_1, _2, _3, _4, _5, _6, _7, _8, _9)
});
ScalaJS.c.scala_Tuple9.prototype.copy$default$1__O = (function() {
  return this.$$und1__O()
});
ScalaJS.c.scala_Tuple9.prototype.copy$default$2__O = (function() {
  return this.$$und2__O()
});
ScalaJS.c.scala_Tuple9.prototype.copy$default$3__O = (function() {
  return this.$$und3__O()
});
ScalaJS.c.scala_Tuple9.prototype.copy$default$4__O = (function() {
  return this.$$und4__O()
});
ScalaJS.c.scala_Tuple9.prototype.copy$default$5__O = (function() {
  return this.$$und5__O()
});
ScalaJS.c.scala_Tuple9.prototype.copy$default$6__O = (function() {
  return this.$$und6__O()
});
ScalaJS.c.scala_Tuple9.prototype.copy$default$7__O = (function() {
  return this.$$und7__O()
});
ScalaJS.c.scala_Tuple9.prototype.copy$default$8__O = (function() {
  return this.$$und8__O()
});
ScalaJS.c.scala_Tuple9.prototype.copy$default$9__O = (function() {
  return this.$$und9__O()
});
ScalaJS.c.scala_Tuple9.prototype.productPrefix__T = (function() {
  return "Tuple9"
});
ScalaJS.c.scala_Tuple9.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_Tuple9.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_Tuple9(x$1)
});
ScalaJS.c.scala_Tuple9.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_Tuple9.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_Tuple9(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Tuple9$1 = ScalaJS.as.scala_Tuple9(x$1);
      return (((((((((ScalaJS.anyEqEq(this.$$und1__O(), Tuple9$1.$$und1__O()) && ScalaJS.anyEqEq(this.$$und2__O(), Tuple9$1.$$und2__O())) && ScalaJS.anyEqEq(this.$$und3__O(), Tuple9$1.$$und3__O())) && ScalaJS.anyEqEq(this.$$und4__O(), Tuple9$1.$$und4__O())) && ScalaJS.anyEqEq(this.$$und5__O(), Tuple9$1.$$und5__O())) && ScalaJS.anyEqEq(this.$$und6__O(), Tuple9$1.$$und6__O())) && ScalaJS.anyEqEq(this.$$und7__O(), Tuple9$1.$$und7__O())) && ScalaJS.anyEqEq(this.$$und8__O(), Tuple9$1.$$und8__O())) && ScalaJS.anyEqEq(this.$$und9__O(), Tuple9$1.$$und9__O())) && Tuple9$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_Tuple9.prototype.init___O__O__O__O__O__O__O__O__O = (function(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.$$und1$1 = _1;
  this.$$und2$1 = _2;
  this.$$und3$1 = _3;
  this.$$und4$1 = _4;
  this.$$und5$1 = _5;
  this.$$und6$1 = _6;
  this.$$und7$1 = _7;
  this.$$und8$1 = _8;
  this.$$und9$1 = _9;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  ScalaJS.impls.scala_Product9$class__$init$__Lscala_Product9__V(this);
  return this
});
ScalaJS.c.scala_Tuple9.prototype.productElement__I__ = (function(n) {
  return this.productElement__I__O(n)
});
ScalaJS.c.scala_Tuple9.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_Tuple9.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_Tuple9.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_Tuple9.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_Tuple9.prototype.copy__O__O__O__O__O__O__O__O__O__ = (function(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  return this.copy__O__O__O__O__O__O__O__O__O__Lscala_Tuple9(_1, _2, _3, _4, _5, _6, _7, _8, _9)
});
ScalaJS.c.scala_Tuple9.prototype.$$und9__ = (function() {
  return this.$$und9__O()
});
ScalaJS.c.scala_Tuple9.prototype.$$und8__ = (function() {
  return this.$$und8__O()
});
ScalaJS.c.scala_Tuple9.prototype.$$und7__ = (function() {
  return this.$$und7__O()
});
ScalaJS.c.scala_Tuple9.prototype.$$und6__ = (function() {
  return this.$$und6__O()
});
ScalaJS.c.scala_Tuple9.prototype.$$und5__ = (function() {
  return this.$$und5__O()
});
ScalaJS.c.scala_Tuple9.prototype.$$und4__ = (function() {
  return this.$$und4__O()
});
ScalaJS.c.scala_Tuple9.prototype.$$und3__ = (function() {
  return this.$$und3__O()
});
ScalaJS.c.scala_Tuple9.prototype.$$und2__ = (function() {
  return this.$$und2__O()
});
ScalaJS.c.scala_Tuple9.prototype.$$und1__ = (function() {
  return this.$$und1__O()
});
/** @constructor */
ScalaJS.inheritable.scala_Tuple9 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Tuple9.prototype = ScalaJS.c.scala_Tuple9.prototype;
ScalaJS.is.scala_Tuple9 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Tuple9)))
});
ScalaJS.as.scala_Tuple9 = (function(obj) {
  if ((ScalaJS.is.scala_Tuple9(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Tuple9")
  }
});
ScalaJS.isArrayOf.scala_Tuple9 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Tuple9)))
});
ScalaJS.asArrayOf.scala_Tuple9 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Tuple9(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Tuple9;", depth)
  }
});
ScalaJS.data.scala_Tuple9 = new ScalaJS.ClassTypeData({
  scala_Tuple9: 0
}, false, "scala.Tuple9", ScalaJS.data.java_lang_Object, {
  scala_Tuple9: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product9: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Tuple9.prototype.$classData = ScalaJS.data.scala_Tuple9;
//@ sourceMappingURL=Tuple9.js.map