/** @constructor */
ScalaJS.c.scala_Tuple3 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$und1$1 = null;
  this.$$und2$1 = null;
  this.$$und3$1 = null
});
ScalaJS.c.scala_Tuple3.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Tuple3.prototype.constructor = ScalaJS.c.scala_Tuple3;
ScalaJS.c.scala_Tuple3.prototype.productArity__I = (function() {
  return ScalaJS.impls.scala_Product3$class__productArity__Lscala_Product3__I(this)
});
ScalaJS.c.scala_Tuple3.prototype.productElement__I__O = (function(n) {
  return ScalaJS.impls.scala_Product3$class__productElement__Lscala_Product3__I__O(this, n)
});
ScalaJS.c.scala_Tuple3.prototype.$$und1__O = (function() {
  return this.$$und1$1
});
ScalaJS.c.scala_Tuple3.prototype.$$und2__O = (function() {
  return this.$$und2$1
});
ScalaJS.c.scala_Tuple3.prototype.$$und3__O = (function() {
  return this.$$und3$1
});
ScalaJS.c.scala_Tuple3.prototype.toString__T = (function() {
  return (((((("(" + this.$$und1__O()) + ",") + this.$$und2__O()) + ",") + this.$$und3__O()) + ")")
});
ScalaJS.c.scala_Tuple3.prototype.copy__O__O__O__Lscala_Tuple3 = (function(_1, _2, _3) {
  return new ScalaJS.c.scala_Tuple3().init___O__O__O(_1, _2, _3)
});
ScalaJS.c.scala_Tuple3.prototype.copy$default$1__O = (function() {
  return this.$$und1__O()
});
ScalaJS.c.scala_Tuple3.prototype.copy$default$2__O = (function() {
  return this.$$und2__O()
});
ScalaJS.c.scala_Tuple3.prototype.copy$default$3__O = (function() {
  return this.$$und3__O()
});
ScalaJS.c.scala_Tuple3.prototype.productPrefix__T = (function() {
  return "Tuple3"
});
ScalaJS.c.scala_Tuple3.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_Tuple3.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_Tuple3(x$1)
});
ScalaJS.c.scala_Tuple3.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_Tuple3.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_Tuple3(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Tuple3$1 = ScalaJS.as.scala_Tuple3(x$1);
      return (((ScalaJS.anyEqEq(this.$$und1__O(), Tuple3$1.$$und1__O()) && ScalaJS.anyEqEq(this.$$und2__O(), Tuple3$1.$$und2__O())) && ScalaJS.anyEqEq(this.$$und3__O(), Tuple3$1.$$und3__O())) && Tuple3$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_Tuple3.prototype.init___O__O__O = (function(_1, _2, _3) {
  this.$$und1$1 = _1;
  this.$$und2$1 = _2;
  this.$$und3$1 = _3;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  ScalaJS.impls.scala_Product3$class__$init$__Lscala_Product3__V(this);
  return this
});
ScalaJS.c.scala_Tuple3.prototype.productElement__I__ = (function(n) {
  return this.productElement__I__O(n)
});
ScalaJS.c.scala_Tuple3.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_Tuple3.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_Tuple3.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_Tuple3.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_Tuple3.prototype.copy__O__O__O__ = (function(_1, _2, _3) {
  return this.copy__O__O__O__Lscala_Tuple3(_1, _2, _3)
});
ScalaJS.c.scala_Tuple3.prototype.$$und3__ = (function() {
  return this.$$und3__O()
});
ScalaJS.c.scala_Tuple3.prototype.$$und2__ = (function() {
  return this.$$und2__O()
});
ScalaJS.c.scala_Tuple3.prototype.$$und1__ = (function() {
  return this.$$und1__O()
});
/** @constructor */
ScalaJS.inheritable.scala_Tuple3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Tuple3.prototype = ScalaJS.c.scala_Tuple3.prototype;
ScalaJS.is.scala_Tuple3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Tuple3)))
});
ScalaJS.as.scala_Tuple3 = (function(obj) {
  if ((ScalaJS.is.scala_Tuple3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Tuple3")
  }
});
ScalaJS.isArrayOf.scala_Tuple3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Tuple3)))
});
ScalaJS.asArrayOf.scala_Tuple3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Tuple3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Tuple3;", depth)
  }
});
ScalaJS.data.scala_Tuple3 = new ScalaJS.ClassTypeData({
  scala_Tuple3: 0
}, false, "scala.Tuple3", ScalaJS.data.java_lang_Object, {
  scala_Tuple3: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product3: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Tuple3.prototype.$classData = ScalaJS.data.scala_Tuple3;
//@ sourceMappingURL=Tuple3.js.map
